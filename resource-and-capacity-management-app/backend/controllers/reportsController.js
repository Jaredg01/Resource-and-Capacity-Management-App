import { connectDB } from "../config/db.js";
import { formatMonthLabel, computeMonthWindow } from "./capacitySummaryController.js";


export const getActivitySummary = async (req, res) => {
  try {
    const db = await connectDB();
    const allocationCol = db.collection("allocation");
    const { start, months, category, leader, dept, requestor } = req.query;

    const monthsWindow = months ? parseInt(months, 10) : 6;

    if (!start) {
      const allocMonths = await allocationCol.distinct("date");
      allocMonths.sort((a, b) => a - b);

      const today = new Date();
      const currentYYYYMM = today.getFullYear() * 100 + (today.getMonth() + 1);

      const valid = allocMonths.filter((m) => m <= currentYYYYMM);
      start = valid.length > 0 ? valid[valid.length - 1] : currentYYYYMM;
    }

    const targetMonths = computeMonthWindow(start, monthsWindow);

    const pipeline = [];

    const initialMatch = { date: { $in: targetMonths } };
    if (category && category !== "all") {
      initialMatch.category = category; 
    }
    pipeline.push({ $match: initialMatch });

    pipeline.push(
      {
        $lookup: {
          from: "assignment",
          localField: "activity",
          foreignField: "project_name",
          as: "projectDetails",
        },
      },
      {
        $unwind: {
          path: "$projectDetails",
          preserveNullAndEmptyArrays: true,
        },
      }
    );

    const assignmentFilters = {};
    if (leader && leader !== "all") assignmentFilters["projectDetails.leader"] = leader;
    if (dept && dept !== "all") assignmentFilters["projectDetails.requesting_dept"] = dept;
    if (requestor && requestor !== "all") assignmentFilters["projectDetails.requestor"] = requestor;

    if (Object.keys(assignmentFilters).length > 0) {
      pipeline.push({ $match: assignmentFilters });
    }

    pipeline.push(
      {
        $group: {
          _id: { activity: "$activity", date: "$date" },
          totalAmount: { $sum: "$amount" },
        },
      },
      {
        $group: {
          _id: "$_id.activity",
          monthlyTotals: {
            $push: { date: "$_id.date", amount: "$totalAmount" },
          },
        },
      },
      {
        $project: {
          _id: 0,
          activity: "$_id",
          monthlyTotals: 1,
        },
      },
      { $sort: { activity: 1 } }
    );

    const rawData = await allocationCol.aggregate(pipeline).toArray();

    const result = rawData.map((row) => {
      const monthMap = {};

      // Initialize all months with 0
      targetMonths.forEach((m) => {
        const label = formatMonthLabel(m);
        monthMap[label] = 0;
      });

      // Fill actual values
      row.monthlyTotals.forEach((m) => {
        const label = formatMonthLabel(m.date);
        monthMap[label] = m.amount;
      });

      return {
        activity: row.activity,
        months: monthMap,
      };
    });

    const formattedMonths = targetMonths.map(m => formatMonthLabel(m));

    res.status(200).json({
      months: formattedMonths,
      data: result,
    });
  } catch (err) {
    console.error("Error in getActivitySummary:", err);
    res.status(500).json({ error: "Fail to load activity allocation summary" });
  }
};

// Get Activity Filters
export const getActivityFilters = async (req, res) => {
  try {
    const db = await connectDB();

    const [leaders, requestors, departments] = await Promise.all([
      db.collection("assignment").distinct("leader", {
        leader: { $exists: true, $ne: "" }
      }),
      db.collection("assignment").distinct("requestor", {
        requestor: { $exists: true, $ne: "" }
      }),
      db.collection("assignment").distinct("requesting_dept", {
        requesting_dept: { $exists: true, $ne: "" }
      })
    ]);

    return res.json({
      leaders,
      requestors,
      requesting_dept: departments
    });

  } catch (error) {
    console.error("get-assignment-filters error:", error);
    return res.status(500).json({ error: "Server error" });
  }
};