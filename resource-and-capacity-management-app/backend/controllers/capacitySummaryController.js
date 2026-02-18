// Get capacity summary data
import { connectDB } from "../config/db.js";

export function formatMonthLabel(yyyymm) {
  const s = String(yyyymm);
  const year = Number(s.slice(0, 4));
  const month = Number(s.slice(4, 6));
  const date = new Date(year, month - 1, 1);

  const shortMonth = date.toLocaleString("en-US", { month: "short" });
  const shortYear = String(year).slice(2);

  return `${shortMonth}-${shortYear}`;
}

export function computeMonthWindow(startYYYYMM, count) {
  const months = [];
  let year = Math.floor(startYYYYMM / 100);
  let month = startYYYYMM % 100;

  for (let i = 0; i < count; i++) {
    months.push(year * 100 + month);
    month++;

    if (month > 12) {
      month = 1;
      year++;
    }
  }

  return months;
}

export const getCapacitySummary = async (req, res) => {
  try {
    const db = await connectDB();

    const startParam = req.query.start;
    const monthsParam = req.query.months;

    const startMonth = startParam ? parseInt(startParam, 10) : null;
    const monthsWindow = monthsParam ? parseInt(monthsParam, 10) : 6;

    const allocationCol = db.collection("allocation");
    const capacityCol = db.collection("capacity");

    // Detect start month
    let start = startMonth;

    if (!start) {
      const allMonths = await capacityCol.distinct("date");
      const allocMonths = await allocationCol.distinct("date");

      const combined = Array.from(new Set([...allMonths, ...allocMonths]));
      combined.sort((a, b) => a - b);

      const today = new Date();
      const currentYYYYMM =
        today.getFullYear() * 100 + (today.getMonth() + 1);

      const valid = combined.filter((m) => m <= currentYYYYMM);
      start = valid.length > 0 ? valid[valid.length - 1] : currentYYYYMM;
    }

    const targetMonths = computeMonthWindow(start, monthsWindow);

    // Aggregate allocations by category and month
    const allocationAgg = await allocationCol
      .aggregate([
        { $match: { date: { $in: targetMonths } } },
        {
          $group: {
            _id: { category: "$category", date: "$date" },
            total: { $sum: "$amount" }
          }
        },
        {
          $group: {
            _id: "$_id.date",
            categories: {
              $push: {
                category: "$_id.category",
                total: "$total"
              }
            }
          }
        }
      ])
      .toArray();

    // Aggregate people capacity by month
    const capacityAgg = await capacityCol
      .aggregate([
        { $match: { date: { $in: targetMonths } } },
        {
          $group: {
            _id: "$date",
            totalPeopleCapacity: { $sum: "$amount" }
          }
        }
      ])
      .toArray();

    const capacityMap = new Map();
    for (const row of capacityAgg) {
      capacityMap.set(row._id, row.totalPeopleCapacity);
    }

    // Merge allocation and capacity results
    const merged = [];

    for (const month of targetMonths) {
      const allocRow = allocationAgg.find((r) => r._id === month);

      const catTotals = {
        Vacation: 0,
        Baseline: 0,
        Strategic: 0,
        "Discretionary Project": 0
      };

      if (allocRow) {
        for (const c of allocRow.categories) {
          let label = c.category;

          if (label.includes("Vacation")) label = "Vacation";
          if (label.includes("Baseline")) label = "Baseline";
          if (label.includes("Strategic")) label = "Strategic";
          if (label.includes("Discretionary")) label = "Discretionary Project";

          if (catTotals[label] !== undefined) {
            catTotals[label] += c.total;
          }
        }
      }

      const totalAllocated =
        catTotals.Vacation +
        catTotals.Baseline +
        catTotals.Strategic +
        catTotals["Discretionary Project"];

      const totalPeopleCapacity = capacityMap.get(month) ?? 0;

      merged.push({
        date: month,
        categories: catTotals,
        totalAllocated,
        totalPeopleCapacity,
        remainingCapacity: totalPeopleCapacity - totalAllocated
      });
    }

    // Format response
    return res.json({
      months: merged.map((m) => formatMonthLabel(m.date)),
      categories: [
        { label: "Vacation", values: merged.map((m) => m.categories.Vacation) },
        { label: "Baseline", values: merged.map((m) => m.categories.Baseline) },
        { label: "Strategic", values: merged.map((m) => m.categories.Strategic) },
        {
          label: "Discretionary Project",
          values: merged.map((m) => m.categories["Discretionary Project"])
        }
      ],
      totals: merged.map((m) => m.totalAllocated),
      peopleCapacity: merged.map((m) => m.totalPeopleCapacity),
      remainingCapacity: merged.map((m) => m.remainingCapacity)
    });

  } catch (err) {
    console.error("Error in capacity-summary:", err);
    return res.status(500).json({
      error: "Failed to load capacity summary"
    });
  }
};