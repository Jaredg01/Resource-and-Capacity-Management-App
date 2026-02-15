import { connectDB } from "../config/db.js";

export const getProfile = async (req, res) => {
  try {
    const db = await connectDB();

    const username = req.query.username;

    if (!username) {
      return res.status(400).json({ error: "Missing username" });
    }

    // 1. Fetch account
    const accountDoc = await db.collection("account").findOne({
      "account.username": username.trim()
    });

    if (!accountDoc) {
      return res.status(404).json({ error: "Account not found" });
    }

    const empId = accountDoc.emp_id;
    const accTypeId = accountDoc.account?.acc_type_id;

    // 2. Fetch employee
    const employee = await db.collection("employee").findOne({
      emp_id: empId
    });

    // 3. Fetch department
    const department = employee
      ? await db.collection("department").findOne({
          dept_no: employee.dept_no
        })
      : null;

    // 4. Fetch account type
    const accountType = await db.collection("account_type").findOne({
      acc_type_id: accTypeId
    });

    // 5. Build profile response
    const profile = {
      name: employee?.emp_name || "",
      title: employee?.emp_title || "",
      department: department?.dept_name || "",
      role: accountType?.acc_type || "",
      id: employee?.emp_id || ""
    };

    return res.json(profile);

  } catch (err) {
    console.error("Profile API error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};