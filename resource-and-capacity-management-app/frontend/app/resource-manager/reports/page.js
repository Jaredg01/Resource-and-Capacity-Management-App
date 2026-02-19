"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

const styles = {
  outfitFont: { fontFamily: "Outfit, sans-serif" },
};

function fmt(n) {
  if (n === null || n === undefined || isNaN(n)) return "0.00";
  return Number(n).toFixed(2);
}

export default function CapacitySummary() {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [viewMode, setViewMode] = useState("month");

  const [selectableMonths, setSelectableMonths] = useState([]);
  const [startMonth, setStartMonth] = useState(null);

  const [months, setMonths] = useState([]);
  const [reportMonths, setReportMonths] = useState([]);
  const [rows, setRows] = useState([]);
  const [categories, setCategories] = useState([]);
  const [totals, setTotals] = useState([]);
  const [peopleCapacity, setPeopleCapacity] = useState([]);
  const [remainingCapacity, setRemainingCapacity] = useState([]);

  const [loadingMonths, setLoadingMonths] = useState(true);
  const [loadingSummary, setLoadingSummary] = useState(true);

  const [activityCategory, setActivityCategory] = useState([]);
  const [leader, setLeader] = useState([]);
  const [requestingDept, setRequestingDept] = useState("all");
  const [requestor, setRequestor] = useState("all");

  const [leaderList, setLeaderList] = useState([]);
  const [deptList, setDeptList] = useState([]);
  const [requestorList, setRequestorList] = useState([]);

  /* ---------------------------------------------------------
     LOAD USER
  --------------------------------------------------------- */
  useEffect(() => {
    try {
      const stored = localStorage.getItem("user");
      if (stored) setUser(JSON.parse(stored));
    } catch {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
  }, []);

  /* ---------------------------------------------------------
     LOAD MONTH OPTIONS
  --------------------------------------------------------- */
  useEffect(() => {
    if (!user) return;

    async function loadMonths() {
      try {
        const res = await api.get("/capacity-summary/months");
        const data = res?.data;
        if (!data?.months) return;

        setSelectableMonths(data.months);

        const today = new Date();
        const currentYYYYMM = today.getFullYear() * 100 + (today.getMonth() + 1);

        const match = data.months.find((m) => m.value === currentYYYYMM);

        setStartMonth(match ? match.value : data.months[data.months.length - 1].value);
      } finally {
        setLoadingMonths(false);
      }
    }

    loadMonths();
  }, [user]);

  /* ---------------------------------------------------------
     LOAD SUMMARY DATA
  --------------------------------------------------------- */
  useEffect(() => {
    if (!user || !startMonth) return;

    async function loadSummary() {
      setLoadingSummary(true);
      try {
        const res = await api.get(`/capacity-summary?start=${encodeURIComponent(startMonth)}&months=6`);

        const data = res?.data || {};
        console.log("Capacity Summary Data:", data.months);

        setMonths(data.months || []);
        setCategories(data.categories || []);
        setTotals(data.totals || []);
        setPeopleCapacity(data.peopleCapacity || []);
        setRemainingCapacity(data.remainingCapacity || []);
      } finally {
        setLoadingSummary(false);
      }
    }

    loadSummary();
  }, [user, startMonth]);

  useEffect(() => {
    if (!user || !startMonth) return;

    async function loadActivitySummary() {
      const res = await api.get(`/reports?start=${encodeURIComponent(startMonth)}&months=6`);
      const data = res?.data || {};

      console.log("Activity Summary Data:", data.months);

      setReportMonths(data.months || []);
      setRows(data.data || []);
    }

    // Get leaders
    async function loadLeaders() {
      const res = await api.get("/reports/leaders");
      const data = res?.data || {};
      setLeaderList(data.leaders || []);
    }

    loadActivitySummary();
    loadLeaders();
  }, [user, startMonth]);

  if (!user || loadingMonths || loadingSummary) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#017ACB]" />
      </div>
    );
  }

  /* ---------------------------------------------------------
     CONDITIONAL TABLE RENDERING
  --------------------------------------------------------- */
  function renderTableBody() {
    // ACTIVITY ALLOCATION VIEW
    if (viewMode === "total") {
      return (
        <tbody>
          {rows.map((row, idx) => (
            <tr key={row.activity} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
              <td className="px-6 py-3 font-medium text-gray-800">{row.activity}</td>

              {reportMonths.map((m) => (
                <td key={m} className="px-6 py-3 text-center text-gray-700">
                  {fmt(row.months?.[m])}
                </td>
              ))}
            </tr>
          ))}
          <tr className="bg-gray-100 font-semibold">
            <td className="px-6 py-3">Grand Total</td>
            {reportMonths.map((m) => {
              const monthTotal = rows.reduce((sum, r) => sum + (r.months?.[m] || 0), 0);
              return (
                <td key={m} className="px-6 py-3 text-center text-gray-700">
                  {fmt(monthTotal)}
                </td>
              );
            })}
          </tr>
        </tbody>
      );
    }

    // PERSON VIEW
    if (viewMode === "person") {
      return (
        <tbody>
          <tr className="bg-gray-50 font-semibold">
            <td className="px-6 py-3">Total People Capacity</td>
            {peopleCapacity.map((val, idx) => (
              <td key={idx} className="px-6 py-3 text-center">
                {fmt(val)}
              </td>
            ))}
          </tr>
        </tbody>
      );
    }

    // DEFAULT MONTH VIEW
    return (
      <tbody className="divide-y">
        {categories.map((cat, idx) => (
          <tr key={cat.label} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
            <td className="px-6 py-3 font-medium text-gray-800">{cat.label}</td>

            {cat.values.map((val, i) => (
              <td key={i} className="px-6 py-3 text-center text-gray-700">
                {fmt(val)}
              </td>
            ))}
          </tr>
        ))}

        <tr className="bg-gray-100 font-semibold">
          <td className="px-6 py-3">Total Allocated</td>
          {totals.map((val, idx) => (
            <td key={idx} className="px-6 py-3 text-center">
              {fmt(val)}
            </td>
          ))}
        </tr>

        <tr className="bg-gray-50">
          <td className="px-6 py-3 font-semibold">Total People Capacity</td>
          {peopleCapacity.map((val, idx) => (
            <td key={idx} className="px-6 py-3 text-center">
              {fmt(val)}
            </td>
          ))}
        </tr>

        <tr className="bg-gray-50">
          <td className="px-6 py-3 font-semibold">Remaining Capacity</td>
          {remainingCapacity.map((val, idx) => (
            <td key={idx} className="px-6 py-3 text-center">
              {fmt(val)}
            </td>
          ))}
        </tr>
      </tbody>
    );
  }

  /* ---------------------------------------------------------
     FINAL RENDER
  --------------------------------------------------------- */
  return (
    <div className="w-full bg-gray-50">
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-gray-900" style={styles.outfitFont}>
              Capacity Report
            </h2>

            <button
              onClick={() => router.back()}
              className="px-4 py-2 text-sm bg-white border rounded-md hover:bg-[#017ACB]/10 transition"
            >
              Back to Dashboard
            </button>
          </div>

          <div className="flex items-center gap-6">
            {/* VIEW DROPDOWN */}
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-gray-700">View:</label>

              <select
                value={viewMode}
                onChange={(e) => setViewMode(e.target.value)}
                className="border rounded-md px-3 py-2 text-sm bg-white hover:bg-gray-50 transition"
              >
                <option value="month">Allocation per Month</option>
                <option value="person">Allocation per Person</option>
                <option value="total">Total Allocation by Activity</option>
              </select>
            </div>

            {/* START MONTH */}
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-gray-700">Start Month:</label>

              <select
                value={startMonth}
                onChange={(e) => setStartMonth(Number(e.target.value))}
                className="border rounded-md px-3 py-2 text-sm bg-white hover:bg-gray-50 transition"
              >
                {selectableMonths.map((m) => (
                  <option key={m.value} value={m.value}>
                    {m.label}
                  </option>
                ))}
              </select>
            </div>

            <button className="bg-[#017ACB] text-white px-5 py-2 rounded-md shadow hover:bg-[#015f9c] transition">
              Export CSV
            </button>
          </div>
        </div>

        {/**
         * FILTERS
         * Disabled for viewMode person and month
         * Available for total viewMode to filter by activity category, leader, requesting dept, and requestor
         */}
        <div className={`flex items-center gap-6 mb-6 ${viewMode !== "total" ? "opacity-50 pointer-events-none" : ""}`}>
          <div>
            <label className="text-sm font-medium text-gray-700">Activity Category:</label>
            <select
              value={activityCategory}
              onChange={(e) => setActivityCategory(e.target.value)}
              className="border rounded-md px-3 py-2 text-sm bg-white hover:bg-gray-50 transition"
            >
              <option value="vacation">Vacation</option>
              <option value="baseline">Baseline</option>
              <option value="strategic">Strategic</option>
              <option value="discretionary">Discretionary Project / Enhancement</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Leader:</label>
            <select
              value={leader}
              onChange={(e) => setLeader(e.target.value)}
              className="border rounded-md px-3 py-2 text-sm bg-white hover:bg-gray-50 transition"
            >
              {leaderList.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Requesting Dept:</label>
            <select
              value={requestingDept}
              onChange={(e) => setRequestingDept(e.target.value)}
              className="border rounded-md px-3 py-2 text-sm bg-white hover:bg-gray-50 transition"
            >
              {deptList.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Requestor:</label>
            <select
              value={requestor}
              onChange={(e) => setRequestor(e.target.value)}
              className="border rounded-md px-3 py-2 text-sm bg-white hover:bg-gray-50 transition"
            >
              {requestorList.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-xl shadow-md border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-[#017ACB] text-white">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold">Row Labels</th>

                  {months.map((month) => (
                    <th key={month} className="px-6 py-3 text-center font-semibold">
                      {month}
                    </th>
                  ))}
                </tr>
              </thead>
              {renderTableBody()}
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
