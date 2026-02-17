'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';

const styles = {
  outfitFont: { fontFamily: 'Outfit, sans-serif' }
};

function fmt(n) {
  if (n === null || n === undefined || isNaN(n)) return '0.00';
  return Number(n).toFixed(2);
}

export default function CapacitySummary() {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [viewMode, setViewMode] = useState('month');

  const [selectableMonths, setSelectableMonths] = useState([]);
  const [startMonth, setStartMonth] = useState(null);

  const [months, setMonths] = useState([]);
  const [categories, setCategories] = useState([]);
  const [totals, setTotals] = useState([]);
  const [peopleCapacity, setPeopleCapacity] = useState([]);
  const [remainingCapacity, setRemainingCapacity] = useState([]);

  const [loadingMonths, setLoadingMonths] = useState(true);
  const [loadingSummary, setLoadingSummary] = useState(true);

  /* ---------------------------------------------------------
     LOAD USER
  --------------------------------------------------------- */
  useEffect(() => {
    try {
      const stored = localStorage.getItem('user');
      if (stored) setUser(JSON.parse(stored));
    } catch {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
  }, []);

  /* ---------------------------------------------------------
     LOAD MONTH OPTIONS
  --------------------------------------------------------- */
  useEffect(() => {
    if (!user) return;

    async function loadMonths() {
      try {
        const res = await api.get('/capacity-summary/months');
        const data = res?.data;
        if (!data?.months) return;

        setSelectableMonths(data.months);

        const today = new Date();
        const currentYYYYMM =
          today.getFullYear() * 100 + (today.getMonth() + 1);

        const match = data.months.find(m => m.value === currentYYYYMM);

        setStartMonth(
          match ? match.value : data.months[data.months.length - 1].value
        );
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
        const res = await api.get(
          `/capacity-summary?start=${encodeURIComponent(startMonth)}&months=6`
        );

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

    // TOTAL ONLY VIEW
    if (viewMode === 'total') {
      return (
        <tbody>
          <tr className="bg-gray-100 font-semibold">
            <td className="px-6 py-3">Total Allocated</td>
            {totals.map((val, idx) => (
              <td key={idx} className="px-6 py-3 text-center">
                {fmt(val)}
              </td>
            ))}
          </tr>
        </tbody>
      );
    }

    // PERSON VIEW
    if (viewMode === 'person') {
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
          <tr
            key={cat.label}
            className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
          >
            <td className="px-6 py-3 font-medium text-gray-800">
              {cat.label}
            </td>

            {cat.values.map((val, i) => (
              <td
                key={i}
                className="px-6 py-3 text-center text-gray-700"
              >
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
          <td className="px-6 py-3 font-semibold">
            Total People Capacity
          </td>
          {peopleCapacity.map((val, idx) => (
            <td key={idx} className="px-6 py-3 text-center">
              {fmt(val)}
            </td>
          ))}
        </tr>

        <tr className="bg-gray-50">
          <td className="px-6 py-3 font-semibold">
            Remaining Capacity
          </td>
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
            <h2
              className="text-3xl font-bold text-gray-900"
              style={styles.outfitFont}
            >
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
              <label className="text-sm font-medium text-gray-700">
                View:
              </label>

              <select
                value={viewMode}
                onChange={(e) => setViewMode(e.target.value)}
                className="border rounded-md px-3 py-2 text-sm bg-white hover:bg-gray-50 transition"
              >
                <option value="month">Allocation per Month</option>
                <option value="person">Allocation per Person</option>
                <option value="total">Total Allocated</option>
              </select>
            </div>

            {/* START MONTH */}
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-gray-700">
                Start Month:
              </label>

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

        {/* TABLE */}
        <div className="bg-white rounded-xl shadow-md border overflow-hidden">

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">

              <thead className="bg-[#017ACB] text-white">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold">
                    Category
                  </th>

                  {months.map((month) => (
                    <th
                      key={month}
                      className="px-6 py-3 text-center font-semibold"
                    >
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
