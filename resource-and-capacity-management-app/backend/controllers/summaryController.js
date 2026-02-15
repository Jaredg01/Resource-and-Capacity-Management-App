import { connectDB } from "../config/db.js";

export const getSummary = async (req, res) => {
  try {
    const db = await connectDB();

    const filter = req.query.filter;
    const username = req.query.username;

    // -----------------------------
    // ALL = same for all actors
    // -----------------------------
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

    // -----------------------------
    // MINE = role-based
    // -----------------------------
    if (!username) {
      return res.json({ backlog: 0, active: 0, hold: 0 });
    }

    // Get account + employee
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

    // -----------------------------
    // RESOURCE MANAGER (1)
    // leader = emp_name
    // -----------------------------
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

    // -----------------------------
    // STAKEHOLDER (2)
    // requestor / requestor_vp = emp_name
    // -----------------------------
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

    // -----------------------------
    // TEAM MEMBER (3)
    // allocation → activity → assignment.project_name → status
    // only current month
    // -----------------------------
    if (accType === 3) {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1; // 1–12
      const ym = year * 100 + month;    // e.g. 202507

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

    // Fallback for unknown acc_type_id
    return res.json({ backlog: 0, active: 0, hold: 0 });

  } catch (err) {
    console.error("Summary API error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};