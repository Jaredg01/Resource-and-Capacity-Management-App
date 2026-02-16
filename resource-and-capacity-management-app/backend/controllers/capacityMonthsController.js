// Get available capacity months
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

export const getCapacityMonths = async (req, res) => {
  try {
    const db = await connectDB();

    const allocationCol = db.collection("allocation");
    const capacityCol = db.collection("capacity");

    // Pull unique months
    let allocMonths = await allocationCol.distinct("date");
    let capMonths = await capacityCol.distinct("date");

    allocMonths = allocMonths.map((m) => Number(m)).filter((m) => !isNaN(m));
    capMonths = capMonths.map((m) => Number(m)).filter((m) => !isNaN(m));

    let allMonths = Array.from(new Set([...allocMonths, ...capMonths]));

    // Sort ascending
    allMonths.sort((a, b) => a - b);

    // Filter to last 12 months
    const today = new Date();
    const currentYYYYMM = today.getFullYear() * 100 + (today.getMonth() + 1);
    const oneYearAgo = currentYYYYMM - 100;

    allMonths = allMonths.filter(
      (m) => m >= oneYearAgo && m <= currentYYYYMM
    );

    // Format for dropdown
    const formatted = allMonths.map((m) => ({
      label: formatMonthLabel(m),
      value: m
    }));

    return res.json({ months: formatted });

  } catch (err) {
    console.error("Error in /capacity-summary/months:", err);
    return res.status(500).json({
      error: "Failed to load months"
    });
  }
};