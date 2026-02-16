// Initiative operations
import { ObjectId } from "mongodb";
import { connectDB } from "../config/db.js";

// Get all initiatives
export const getAllInitiatives = async (req, res) => {
  try {
    const db = await connectDB();
    const username = req.query.username;

    const allAssignments = await db.collection("assignment").aggregate([
      {
        $lookup: {
          from: "employee",
          localField: "requestor_vp",
          foreignField: "emp_name",
          as: "vp_employee"
        }
      },
      { $unwind: { path: "$vp_employee", preserveNullAndEmptyArrays: true } },
      {
        $lookup: {
          from: "department",
          localField: "vp_employee.dept_no",
          foreignField: "dept_no",
          as: "vp_department"
        }
      },
      { $unwind: { path: "$vp_department", preserveNullAndEmptyArrays: true } },
      {
        $project: {
          _id: 1,
          project_name: 1,
          category: 1,
          leader: 1,
          status: 1,
          requestor: 1,
          requestor_vp: 1,
          requesting_dept: "$vp_department.dept_name",
          target_period: 1,
          completion_date: 1,
          description: 1,
          resource_notes: 1
        }
      }
    ]).toArray();

    let myInitiatives = [];

    if (username) {
      const account = await db.collection("account").findOne({
        "account.username": username
      });

      if (account) {
        const employee = await db.collection("employee").findOne({
          emp_id: account.emp_id
        });

        if (employee) {
          myInitiatives = allAssignments.filter(
            (i) => i.leader === employee.emp_name && i.status !== "Completed"
          );
        }
      }
    }

    return res.json({ allAssignments, myInitiatives });

  } catch (err) {
    console.error("Initiatives GET error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

// Get initiative by ID
export const getInitiativeById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid initiative ID" });
    }

    const db = await connectDB();
    const data = await db.collection("assignment").findOne({
      _id: new ObjectId(id)
    });

    if (!data) {
      return res.status(404).json({ error: "Initiative not found" });
    }

    return res.json(data);

  } catch (err) {
    console.error("GetOne initiative error:", err);
    return res.status(500).json({ error: "Failed to load initiative" });
  }
};

// Get initiative department by employee name
export const getInitiativesByDept = async (req, res) => {
  try {
    const db = await connectDB();
    const name = req.query.name;

    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }

    const emp = await db.collection("employee").findOne({ emp_name: name });
    if (!emp) {
      return res.status(404).json({ error: `Employee "${name}" not found` });
    }

    const dept = await db.collection("department").findOne({
      dept_no: emp.dept_no
    });

    return res.json({
      dept_no: emp.dept_no,
      dept_name: dept?.dept_name || ""
    });

  } catch (err) {
    console.error("GetDept initiative error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

// Get dropdown values for initiatives
export const getInitiativeDropdowns = async (req, res) => {
  try {
    const db = await connectDB();

    const leads = await db.collection("account").aggregate([
      { $match: { "account.acc_type_id": 1 } },
      {
        $lookup: {
          from: "employee",
          localField: "emp_id",
          foreignField: "emp_id",
          as: "employee_info"
        }
      },
      { $unwind: "$employee_info" },
      { $project: { _id: 0, emp_name: "$employee_info.emp_name" } }
    ]).toArray();

    const requestors = await db.collection("account").aggregate([
      { $match: { "account.acc_type_id": { $in: [1, 2] } } },
      {
        $lookup: {
          from: "employee",
          localField: "emp_id",
          foreignField: "emp_id",
          as: "employee_info"
        }
      },
      { $unwind: "$employee_info" },
      {
        $project: {
          _id: 0,
          emp_name: "$employee_info.emp_name",
          acc_type_id: "$account.acc_type_id"
        }
      }
    ]).toArray();

    return res.json({ employees: leads, requestors });

  } catch (err) {
    console.error("Dropdown API error:", err);
    return res.status(500).json({ error: "Failed to load employee names" });
  }
};

// Create initiative
export const createInitiative = async (req, res) => {
  try {
    const db = await connectDB();
    const {
      project,
      category,
      lead,
      status,
      requestor,
      requestor_vp,
      requesting_dept,
      completion_date,
      target_period,
      description,
      resource_consideration
    } = req.body;

    const required = {
      project,
      category,
      lead,
      status,
      requestor,
      requestor_vp,
      target_period,
      description
    };

    for (const [key, value] of Object.entries(required)) {
      if (!value || value.trim() === "") {
        return res.status(400).json({
          error: `${key.replace(/_/g, " ")} is required.`
        });
      }
    }

    if (status === "Completed" && (!completion_date || completion_date.trim() === "")) {
      return res.status(400).json({
        error: "Completion date is required when status is Completed."
      });
    }

    const validateUser = async (name, accTypes) => {
      const result = await db.collection("account").aggregate([
        { $match: { "account.acc_type_id": { $in: accTypes } } },
        {
          $lookup: {
            from: "employee",
            localField: "emp_id",
            foreignField: "emp_id",
            as: "employee_info"
          }
        },
        { $unwind: "$employee_info" },
        { $match: { "employee_info.emp_name": name } }
      ]).toArray();

      return result.length > 0 ? result[0].employee_info : null;
    };

    const leadValid = await validateUser(lead, [1]);
    if (!leadValid) {
      return res.status(400).json({ error: `Lead "${lead}" is not valid.` });
    }

    const requestorValid = await validateUser(requestor, [1, 2]);
    if (!requestorValid) {
      return res.status(400).json({ error: `Requestor "${requestor}" is not valid.` });
    }

    const vpValid = await validateUser(requestor_vp, [1, 2]);
    if (!vpValid) {
      return res.status(400).json({ error: `Requestor VP "${requestor_vp}" is not valid.` });
    }

    const deptRecord = await db.collection("department").findOne({
      dept_no: vpValid.dept_no
    });

    const autoDept = deptRecord?.dept_name || requesting_dept || "";

    const newInitiative = {
      project_name: project,
      category,
      leader: lead,
      status,
      requestor,
      requestor_vp,
      requesting_dept: autoDept,
      target_period,
      completion_date: completion_date || null,
      description,
      resource_notes: resource_consideration || "",
      created_at: new Date()
    };

    const result = await db.collection("assignment").insertOne(newInitiative);

    return res.json({ success: true, insertedId: result.insertedId });

  } catch (err) {
    console.error("Add Initiative API error:", err);
    return res.status(500).json({ error: "Failed to add initiative" });
  }
};

// Update initiative
export const updateInitiative = async (req, res) => {
  try {
    const db = await connectDB();
    const {
      id,
      project,
      category,
      lead,
      status,
      requestor,
      requestor_vp,
      requesting_dept,
      completion_date,
      target_period,
      description,
      resource_consideration
    } = req.body;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid initiative ID" });
    }

    const required = {
      project,
      category,
      lead,
      status,
      requestor,
      requestor_vp,
      target_period,
      description
    };

    for (const [key, value] of Object.entries(required)) {
      if (!value || value.trim() === "") {
        return res.status(400).json({
          error: `${key.replace(/_/g, " ")} is required.`
        });
      }
    }

    if (status === "Completed" && (!completion_date || completion_date.trim() === "")) {
      return res.status(400).json({
        error: "Completion date is required when status is Completed."
      });
    }

    const vpEmployee = await db.collection("employee").findOne({
      emp_name: requestor_vp
    });

    const deptRecord = await db.collection("department").findOne({
      dept_no: vpEmployee?.dept_no
    });

    const autoDept = deptRecord?.dept_name || requesting_dept || "";

    const updated = {
      project_name: project,
      category,
      leader: lead,
      status,
      requestor,
      requestor_vp,
      requesting_dept: autoDept,
      target_period,
      completion_date: completion_date || null,
      description,
      resource_notes: resource_consideration || "",
      updated_at: new Date()
    };

    await db.collection("assignment").updateOne(
      { _id: new ObjectId(id) },
      { $set: updated }
    );

    return res.json({ success: true });

  } catch (err) {
    console.error("Edit Initiative API error:", err);
    return res.status(500).json({ error: "Failed to update initiative" });
  }
};