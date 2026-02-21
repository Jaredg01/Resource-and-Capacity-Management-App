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

  const [activityCategory, setActivityCategory] = useState("all");
  const [leader, setLeader] = useState("all");
  const [requestingDept, setRequestingDept] = useState("all");
  const [requestor, setRequestor] = useState("all");

  const [leaderList, setLeaderList] = useState([]);
  const [deptList, setDeptList] = useState([]);
  const [requestorList, setRequestorList] = useState([]);

  const [employees, setEmployees] = useState([]);

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

    async function loadCapacity() {
      try {
        const res = await api.get(`/reports/capacity?start=${encodeURIComponent(startMonth)}&months=6`);
        const data = res?.data || {};

        setReportMonths(data.months || []);
        setEmployees(data.data || []);
      } catch (error) {
        console.error("Error fetching capacity:", error);
      }
    }

    loadCapacity();
  }, [user, startMonth]);

  useEffect(() => {
    if (!user || !startMonth) return;

    async function loadActivitySummary() {
      const params = new URLSearchParams({
        start: startMonth,
        months: 6,
        category: activityCategory,
        leader: leader,
        dept: requestingDept,
        requestor: requestor,
      });

      try {
        const res = await api.get(`/reports?${params.toString()}`);
        setRows(res.data.data || []);
        setReportMonths(res.data.months || []);
      } catch (err) {
        console.error("Failed to fetch report data");
      }
    }

    // Get filters
    async function loadFilters() {
      const res = await api.get("/reports/filters");
      const data = res?.data || {};

      setLeaderList(data.leaders || []);
      setRequestorList(data.requestors || []);
      setDeptList(data.requesting_dept || []);
    }

    loadActivitySummary();
    loadFilters();
  }, [user, startMonth, activityCategory, leader, requestingDept, requestor]);

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
    if (viewMode === "activity") {
      return (
        <tbody>
          {rows.map((row, idx) => (
            <tr key={row.activity} className={idx % 2 === 0 ? "bg-gray-200" : "bg-white"}>
              <td className="px-6 py-3 font-medium border border-black">{row.activity}</td>

              {reportMonths.map((m) => (
                <td key={m} className="px-6 py-3 text-center text-gray-700 border border-black">
                  {fmt(row.months?.[m])}
                </td>
              ))}
            </tr>
          ))}
          <tr className="bg-gray-200 font-semibold">
            <td className="px-6 py-3 border border-black">Grand Total</td>
            {reportMonths.map((m) => {
              const monthTotal = rows.reduce((sum, r) => sum + (r.months?.[m] || 0), 0);
              return (
                <td key={m} className="px-6 py-3 text-center text-gray-700 border border-black">
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
          {employees.map((emp, idx) => (
            <tr key={emp.emp_name} className={idx % 2 === 0 ? "bg-gray-200" : "bg-white"}>
              <td className="px-6 py-3 font-medium border border-black">{emp.emp_name}</td>

              {reportMonths.map((m) => (
                <td key={m} className="px-6 py-3 text-center text-gray-700 border border-black">
                  {fmt(emp.months?.[m])}
                </td>
              ))}
            </tr>
          ))}
          <tr className="bg-gray-100 font-semibold">
            <td className="px-6 py-3 border border-black">Grand Total</td>
            {reportMonths.map((m) => {
              const monthTotal = employees.reduce((sum, r) => sum + (r.months?.[m] || 0), 0);
              return (
                <td key={m} className="px-6 py-3 text-center text-gray-700 border border-black">
                  {fmt(monthTotal)}
                </td>
              );
            })}
          </tr>
        </tbody>
      );
    }

    // DEFAULT MONTH VIEW
    return (
      <tbody className="divide-y">
        {categories.map((cat, idx) => (
          <tr key={cat.label} className={idx % 2 === 0 ? "bg-gray-200" : "bg-white"}>
            <td className="px-6 py-3 border border-black font-medium">{cat.label}</td>

            {cat.values.map((val, i) => (
              <td key={i} className="px-6 py-3 text-center border border-black">
                {fmt(val)}
              </td>
            ))}
          </tr>
        ))}

        <tr className="bg-gray-200 font-semibold">
          <td className="px-6 py-3 border border-black">Total Allocated</td>
          {totals.map((val, idx) => (
            <td key={idx} className="px-6 py-3 text-center border border-black">
              {fmt(val)}
            </td>
          ))}
        </tr>

        <tr className="bg-white">
          <td className="px-6 py-3 border border-black font-semibold">Total People Capacity</td>
          {peopleCapacity.map((val, idx) => (
            <td key={idx} className="px-6 py-3 text-center border border-black">
              {fmt(val)}
            </td>
          ))}
        </tr>

        <tr className="bg-gray-200">
          <td className="px-6 py-3 border border-black font-semibold">Remaining Capacity</td>
          {remainingCapacity.map((val, idx) => (
            <td key={idx} className="px-6 py-3 text-center border border-black">
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
    <div className="w-full">
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
                <option value="activity">Allocation by Activity</option>
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
         * Available for activity viewMode to filter by activity category, leader, requesting dept, and requestor
         */}
        {viewMode === "activity" && (
          <div className="flex flex-col md:flex-row flex-wrap gap-4 mb-6">
            
            {/* Activity Category options */}
            <div className="flex-1 min-w-[200px]">
              <label className="text-sm font-medium text-gray-700 mb-1 block">Activity Category:</label>
              <select
                value={activityCategory}
                onChange={(e) => setActivityCategory(e.target.value)}
                className="border rounded-md px-3 py-2 text-sm bg-white hover:bg-gray-50 w-full transition"
              >
                <option value="all">All</option>
                <option value="Vacation">Vacation</option>
                <option value="Baseline">Baseline</option>
                <option value="Strategic">Strategic</option>
                <option value="Discretionary Project / Enhancement">Discretionary Project / Enhancement</option>
              </select>
            </div>

            {/* Leader options */}
            <div className="flex-1 min-w-[200px]">
              <label className="text-sm font-medium text-gray-700 mb-1 block">Leader:</label>
              <select
                value={leader}
                onChange={(e) => setLeader(e.target.value)}
                className="border rounded-md px-3 py-2 text-sm bg-white hover:bg-gray-50 w-full transition"
              >
                <option value="all">All</option>
                {leaderList.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            {/* Requesting Dept options */}
            <div className="flex-1 min-w-[200px]">
              <label className="text-sm font-medium text-gray-700 mb-1 block">Requesting Dept:</label>
              <select
                value={requestingDept}
                onChange={(e) => setRequestingDept(e.target.value)}
                className="border rounded-md px-3 py-2 text-sm bg-white hover:bg-gray-50 w-full transition"
              >
                <option value="all">All</option>
                {deptList.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            {/* Requestor options */}
            <div className="flex-1 min-w-[200px]">
              <label className="text-sm font-medium text-gray-700 mb-1 block">Requestor:</label>
              <select
                value={requestor}
                onChange={(e) => setRequestor(e.target.value)}
                className="border rounded-md px-3 py-2 text-sm bg-white hover:bg-gray-50 w-full transition"
              >
                <option value="all">All</option>
                {requestorList.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* TABLE */}
        <div className="bg-white rounded-xl shadow-md border border-black overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border-collapse border border-black">
              <thead className="bg-[#017ACB] text-white">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold border border-black">Row Labels</th>

                  {months.map((month) => (
                    <th key={month} className="px-6 py-3 text-center font-semibold border border-black">
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
