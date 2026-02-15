import { connectDB } from "../config/db.js";

/* =========================================================
   GET ALL EMPLOYEES (with filters)
========================================================= */
export const getAllEmployees = async (req, res) => {
  try {
    const db = await connectDB();
    const { filter, status, dept, manager_id, user_emp_id } = req.query;

    const employeeCollection = db.collection("employee");
    const capacityCollection = db.collection("capacity");

    let query = {};

    if (dept) query.dept_no = dept;
    if (filter === "mine" && user_emp_id) query.manager_id = parseInt(user_emp_id);
    if (manager_id) query.manager_id = parseInt(manager_id);

    const employees = await employeeCollection.find(query).toArray();

    if (status && status !== "all") {
      const now = new Date();
      const currentDate = now.getFullYear() * 100 + (now.getMonth() + 1);

      const capacityRecords = await capacityCollection
        .find({
          date: currentDate,
          current_status: status === "active" ? "Active" : "Inactive",
        })
        .toArray();

      const matchingEmpIds = capacityRecords.map((c) => c.emp_id);

      return res.json(
        employees.filter((emp) => matchingEmpIds.includes(emp.emp_id))
      );
    }

    return res.json(employees);
  } catch (err) {
    console.error("getAllEmployees error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

/* =========================================================
   GET SINGLE EMPLOYEE
========================================================= */
export const getEmployeeById = async (req, res) => {
  try {
    const db = await connectDB();
    const empId = parseInt(req.params.emp_id);

    const employeeCollection = db.collection("employee");
    const departmentCollection = db.collection("department");

    const employee = await employeeCollection.findOne({ emp_id: empId });
    if (!employee) return res.status(404).json({ error: "Employee not found" });

    const department = await departmentCollection.findOne({
      dept_no: employee.dept_no,
    });

    let managerName = null;
    if (employee.manager_id) {
      const manager = await employeeCollection.findOne({
        emp_id: employee.manager_id,
      });
      managerName = manager ? manager.emp_name : null;
    }

    return res.json({
      ...employee,
      dept_name: department?.dept_name || null,
      manager_name: managerName,
    });
  } catch (err) {
    console.error("getEmployeeById error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

/* =========================================================
   CREATE EMPLOYEE
========================================================= */
export const createEmployee = async (req, res) => {
  try {
    const db = await connectDB();
    const { emp_name, emp_title, dept_no, manager_id } = req.body;

    if (!emp_name || !emp_title || !dept_no) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields: emp_name, emp_title, dept_no",
      });
    }

    const employeeCollection = db.collection("employee");
    const capacityCollection = db.collection("capacity");

    const lastEmployee = await employeeCollection
      .find({})
      .sort({ emp_id: -1 })
      .limit(1)
      .toArray();

    const newEmpId = lastEmployee.length > 0 ? lastEmployee[0].emp_id + 1 : 1000;

    const newEmployee = {
      emp_id: newEmpId,
      emp_name,
      emp_title,
      dept_no,
      manager_id: manager_id ? parseInt(manager_id) : null,
    };

    await employeeCollection.insertOne(newEmployee);

    const capacityRecords = [];
    const now = new Date();

    for (let i = 0; i < 16; i++) {
      const date = new Date(now.getFullYear(), now.getMonth() + i, 1);
      const dateNum = date.getFullYear() * 100 + (date.getMonth() + 1);

      capacityRecords.push({
        emp_id: newEmpId,
        date: dateNum,
        amount: 1,
        current_status: "Active",
        comments: "",
      });
    }

    await capacityCollection.insertMany(capacityRecords);

    return res.json({ success: true, employee: newEmployee });
  } catch (err) {
    console.error("createEmployee error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

/* =========================================================
   UPDATE EMPLOYEE
========================================================= */
export const updateEmployee = async (req, res) => {
  try {
    const db = await connectDB();
    const empId = parseInt(req.params.emp_id);
    const { emp_name, emp_title, dept_no, manager_id } = req.body;

    if (!emp_name || !emp_title || !dept_no) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields",
      });
    }

    const employeeCollection = db.collection("employee");

    const existingEmployee = await employeeCollection.findOne({ emp_id: empId });
    if (!existingEmployee)
      return res.status(404).json({ error: "Employee not found" });

    const updateData = {
      emp_name,
      emp_title,
      dept_no,
      manager_id: manager_id ? parseInt(manager_id) : null,
    };

    await employeeCollection.updateOne(
      { emp_id: empId },
      { $set: updateData }
    );

    return res.json({ success: true, employee: { emp_id: empId, ...updateData } });
  } catch (err) {
    console.error("updateEmployee error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

/* =========================================================
   UPDATE EMPLOYEE STATUS
========================================================= */
export const updateEmployeeStatus = async (req, res) => {
  try {
    const db = await connectDB();
    const empId = parseInt(req.params.emp_id);
    const { status, comments } = req.body;

    if (!["Active", "Inactive"].includes(status)) {
      return res.status(400).json({
        success: false,
        error: 'Status must be "Active" or "Inactive"',
      });
    }

    const employeeCollection = db.collection("employee");
    const capacityCollection = db.collection("capacity");

    const employee = await employeeCollection.findOne({ emp_id: empId });
    if (!employee) return res.status(404).json({ error: "Employee not found" });

    const now = new Date();
    const currentDate = now.getFullYear() * 100 + (now.getMonth() + 1);

    await capacityCollection.updateMany(
      { emp_id: empId, date: { $gte: currentDate } },
      {
        $set: {
          current_status: status,
          amount: status === "Inactive" ? 0 : 1,
          comments: comments || "",
        },
      }
    );

    return res.json({ success: true, emp_id: empId, new_status: status });
  } catch (err) {
    console.error("updateEmployeeStatus error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

/* =========================================================
   GET EMPLOYEE CAPACITY
========================================================= */
export const getEmployeeCapacity = async (req, res) => {
  try {
    const db = await connectDB();
    const empId = parseInt(req.params.emp_id);

    const capacityCollection = db.collection("capacity");

    const capacityRecords = await capacityCollection
      .find({ emp_id: empId })
      .sort({ date: 1 })
      .toArray();

    if (capacityRecords.length === 0)
      return res.status(404).json({ error: "No capacity records found" });

    return res.json(capacityRecords);
  } catch (err) {
    console.error("getEmployeeCapacity error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

/* =========================================================
   UPDATE EMPLOYEE CAPACITY
========================================================= */
export const updateEmployeeCapacity = async (req, res) => {
  try {
    const db = await connectDB();
    const empId = parseInt(req.params.emp_id);
    const updates = req.body;

    if (!Array.isArray(updates)) {
      return res.status(400).json({
        success: false,
        error: "Updates must be an array",
      });
    }

    const capacityCollection = db.collection("capacity");

    for (const update of updates) {
      if (!update.date) continue;

      await capacityCollection.updateOne(
        { emp_id: empId, date: update.date },
        {
          $set: {
            amount: update.amount ?? 1,
            comments: update.comments || "",
          },
        }
      );
    }

    return res.json({ success: true, emp_id: empId });
  } catch (err) {
    console.error("updateEmployeeCapacity error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

/* =========================================================
   GET ALL DEPARTMENTS
========================================================= */
export const getAllDepartments = async (req, res) => {
  try {
    const db = await connectDB();
    const departments = await db.collection("department").find({}).toArray();
    return res.json(departments);
  } catch (err) {
    console.error("getAllDepartments error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

/* =========================================================
   GET ALL MANAGERS
========================================================= */
export const getAllManagers = async (req, res) => {
  try {
    const db = await connectDB();
    const employeeCollection = db.collection("employee");

    const managers = await employeeCollection
      .find({
        emp_title: { $regex: /manager|supervisor|lead|director/i },
      })
      .toArray();

    return res.json(managers);
  } catch (err) {
    console.error("getAllManagers error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};