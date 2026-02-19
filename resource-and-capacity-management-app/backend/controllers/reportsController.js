import { connectDB } from "../config/db.js";
import { formatMonthLabel, computeMonthWindow } from "./capacitySummaryController.js";


export const getActivitySummary = async (req, res) => {
  try {
    const db = await connectDB();

    const startParam = req.query.start;
    const monthsParam = req.query.months;

    const startMonth = startParam ? parseInt(startParam, 10) : null;
    const monthsWindow = monthsParam ? parseInt(monthsParam, 10) : 6;

    const allocationCol = db.collection("allocation");

    let start = startMonth;

    if (!start) {
      const allocMonths = await allocationCol.distinct("date");
      allocMonths.sort((a, b) => a - b);

      const today = new Date();
      const currentYYYYMM = today.getFullYear() * 100 + (today.getMonth() + 1);

      const valid = allocMonths.filter((m) => m <= currentYYYYMM);
      start = valid.length > 0 ? valid[valid.length - 1] : currentYYYYMM;
    }

    const targetMonths = computeMonthWindow(start, monthsWindow);

    const pipeline = [
      {
        // Only include target months
        $match: {
          date: { $in: targetMonths },
        },
      },
      {
        // Sum amount per activity per month
        $group: {
          _id: {
            activity: "$activity",
            date: "$date",
          },
          totalAmount: { $sum: "$amount" },
        },
      },
      {
        // Group again by activity
        $group: {
          _id: "$_id.activity",
          monthlyTotals: {
            $push: {
              date: "$_id.date",
              amount: "$totalAmount",
            },
          },
        },
      },
      {
        // Clean shape
        $project: {
          _id: 0,
          activity: "$_id",
          monthlyTotals: 1,
        },
      },
      {
        // Sort activities alphabetically
        $sort: { activity: 1 },
      },
    ];

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

// Get Leaders
export const getLeaders = async (req, res) => {
  try {
    const db = await connectDB();

    const leaders = await db
      .collection("assignment")
      .distinct("leader");

    return res.json({ leaders });

  } catch (error) {
    console.error("get-leaders error:", error);
    return res.status(500).json({ error: "Server error" });
  }
};