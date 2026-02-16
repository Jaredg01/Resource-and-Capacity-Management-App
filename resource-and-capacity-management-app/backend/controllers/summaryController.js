import { connectDB } from "../config/db.js";

// Get summary data
export const getSummary = async (req, res) => {
  try {
    const db = await connectDB();

    const filter = req.query.filter;
    const username = req.query.username;

    // Return global summary
    if (filter !== "mine") {
      const backlog = await db.collection("assignment").countDocuments({
        status: "Backlog"
      });

      const active = await db.collection("assignment").countDocuments({
        status: { $in: ["On Going", "In Progress"] }
      });

      const hold = await db.collection("assignment").countDocuments({
        status: "On Hold"
      });

      return res.json({ backlog, active, hold });
    }

    // Return user-specific summary
    if (!username) {
      return res.json({ backlog: 0, active: 0, hold: 0 });
    }

    const accountDoc = await db.collection("account").findOne({
      "account.username": username.trim()
    });

    if (!accountDoc) {
      return res.json({ backlog: 0, active: 0, hold: 0 });
    }

    const employee = await db.collection("employee").findOne({
      emp_id: accountDoc.emp_id
    });

    if (!employee) {
      return res.json({ backlog: 0, active: 0, hold: 0 });
    }

    const accType = accountDoc.account.acc_type_id;

    // Resource manager summary
    if (accType === 1) {
      const baseQuery = { leader: employee.emp_name };

      const backlog = await db.collection("assignment").countDocuments({
        ...baseQuery,
        status: "Backlog"
      });

      const active = await db.collection("assignment").countDocuments({
        ...baseQuery,
        status: { $in: ["On Going", "In Progress"] }
      });

      const hold = await db.collection("assignment").countDocuments({
        ...baseQuery,
        status: "On Hold"
      });

      return res.json({ backlog, active, hold });
    }

    // Stakeholder summary
    if (accType === 2) {
      const baseQuery = {
        $or: [
          { requestor: employee.emp_name },
          { requestor_vp: employee.emp_name }
        ]
      };

      const backlog = await db.collection("assignment").countDocuments({
        ...baseQuery,
        status: "Backlog"
      });

      const active = await db.collection("assignment").countDocuments({
        ...baseQuery,
        status: { $in: ["On Going", "In Progress"] }
      });

      const hold = await db.collection("assignment").countDocuments({
        ...baseQuery,
        status: "On Hold"
      });

      return res.json({ backlog, active, hold });
    }

    // Team member summary
    if (accType === 3) {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const ym = year * 100 + month;

      const allocations = await db.collection("allocation")
        .find({
          emp_id: employee.emp_id,
          date: ym
        })
        .toArray();

      if (!allocations.length) {
        return res.json({ backlog: 0, active: 0, hold: 0 });
      }

      const projectNames = allocations.map(a => a.activity);

      const baseQuery = {
        project_name: { $in: projectNames }
      };

      const backlog = await db.collection("assignment").countDocuments({
        ...baseQuery,
        status: "Backlog"
      });

      const active = await db.collection("assignment").countDocuments({
        ...baseQuery,
        status: { $in: ["On Going", "In Progress"] }
      });

      const hold = await db.collection("assignment").countDocuments({
        ...baseQuery,
        status: "On Hold"
      });

      return res.json({ backlog, active, hold });
    }

    // Unknown account type
    return res.json({ backlog: 0, active: 0, hold: 0 });

  } catch (err) {
    console.error("Summary API error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};