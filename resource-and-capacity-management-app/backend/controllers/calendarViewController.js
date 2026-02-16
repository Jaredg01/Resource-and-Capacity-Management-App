// Get available calendar months
import { connectDB } from "../config/db.js";

function formatMonthLabel(yyyymm) {
  const s = String(yyyymm);
  const year = Number(s.slice(0, 4));
  const month = Number(s.slice(4, 6));

  const date = new Date(year, month - 1, 1);
  const shortMonth = date.toLocaleString("en-US", { month: "short" });
  const shortYear = String(year).slice(2);

  return `${shortMonth}-${shortYear}`;
}

export const getAvailableMonths = async (req, res) => {
  try {
    const db = await connectDB();
    const allocationCol = db.collection("allocation");

    const rawMonths = await allocationCol.distinct("date");

    return res.json({
      success: true,
      months: rawMonths,
      formatted: rawMonths.map((m) => ({
        yyyymm: m,
        label: formatMonthLabel(m)
      }))
    });

  } catch (err) {
    console.error("Error in GET /calendar-view:", err);
    return res.status(500).json({
      success: false,
      error: "Failed to load available months"
    });
  }
};

// Get activities grouped by month
export const getActivitiesByMonth = async (req, res) => {
  try {
    const { months, emp_id } = req.body;

    if (!months || !Array.isArray(months) || months.length === 0) {
      return res.status(400).json({
        success: false,
        error: "Months array is required"
      });
    }

    const db = await connectDB();
    const allocationCol = db.collection("allocation");

    const query = {
      date: { $in: months },
      ...(emp_id ? { emp_id } : {})
    };

    const results = await allocationCol.find(query).toArray();

    const activitiesByMonth = months.map((yyyymm) => {
      const monthRows = results.filter(
        (r) => Number(r.date) === Number(yyyymm)
      );

      const unique = [];
      const seen = new Set();

      monthRows.forEach((r) => {
        const key = `${r.activity}__${r.category}`;
        if (!seen.has(key)) {
          seen.add(key);
          unique.push({
            activity: r.activity,
            category: r.category
          });
        }
      });

      return {
        yyyymm,
        label: formatMonthLabel(yyyymm),
        activities: unique
      };
    });

    return res.json({
      success: true,
      activitiesByMonth
    });

  } catch (err) {
    console.error("Error in POST /calendar-view:", err);
    return res.status(500).json({
      success: false,
      error: "Failed to load activities"
    });
  }
};