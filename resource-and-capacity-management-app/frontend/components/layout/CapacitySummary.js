'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const styles = {
  outfitFont: { fontFamily: 'Outfit, sans-serif' }
};

function fmt(n) {
  if (n === null || n === undefined) return '0.00';
  return Number(n).toFixed(2);
}

export default function CapacitySummary() {
  const [user, setUser] = useState(null);

  const [selectableMonths, setSelectableMonths] = useState([]);
  const [startMonth, setStartMonth] = useState(null);

  const [months, setMonths] = useState([]);
  const [categories, setCategories] = useState([]);
  const [totals, setTotals] = useState([]);
  const [peopleCapacity, setPeopleCapacity] = useState([]);
  const [remainingCapacity, setRemainingCapacity] = useState([]);

  const [loadingMonths, setLoadingMonths] = useState(true);
  const [loadingSummary, setLoadingSummary] = useState(true);
  const router = useRouter();

  /* ---------------------------------------------------------
     LOAD USER AFTER MOUNT
  --------------------------------------------------------- */
  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  /* ---------------------------------------------------------
     LOAD MONTHS AFTER USER EXISTS
  --------------------------------------------------------- */
  useEffect(() => {
    if (!user) return;

    async function loadMonths() {
      try {
        const res = await api.get('/capacity-summary/months');
        const data = res.data;

        if (!data.months || data.months.length === 0) return;

        setSelectableMonths(data.months);

        const today = new Date();
        const currentYYYYMM =
          today.getFullYear() * 100 + (today.getMonth() + 1);

        const match = data.months.find((m) => m.value === currentYYYYMM);

        setStartMonth(match ? match.value : data.months[data.months.length - 1].value);
      } catch (err) {
        console.error('Failed to load months:', err);
      } finally {
        setLoadingMonths(false);
      }
    }

    loadMonths();
  }, [user]);

  /* ---------------------------------------------------------
     LOAD SUMMARY AFTER USER + START MONTH EXIST
  --------------------------------------------------------- */
  useEffect(() => {
    if (!user || !startMonth) return;

    async function loadSummary() {
      setLoadingSummary(true);
      try {
        const res = await api.get(
          `/capacity-summary?start=${startMonth}&months=6`
        );
        const data = res.data;

        setMonths(data.months || []);
        setCategories(data.categories || []);
        setTotals(data.totals || []);
        setPeopleCapacity(data.peopleCapacity || []);
        setRemainingCapacity(data.remainingCapacity || []);
      } catch (err) {
        console.error('Failed to load summary:', err);
      } finally {
        setLoadingSummary(false);
      }
    }

    loadSummary();
  }, [user, startMonth]);

  /* ---------------------------------------------------------
     LOADING SCREEN
  --------------------------------------------------------- */
  if (!user || loadingMonths || loadingSummary) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  /* ---------------------------------------------------------
     CHART DATA
  --------------------------------------------------------- */
  const chartData = {
    labels: months,
    datasets: [
      ...categories.map((cat, idx) => ({
        type: 'bar',
        label: cat.label,
        data: cat.values,
        backgroundColor: [
          '#7EC8FF',
          '#003F8C',
          '#CFEAFF',
          '#A9A9A9'
        ][idx],
        stack: 'alloc'
      })),
      {
        type: 'line',
        label: 'Total People Capacity',
        data: peopleCapacity,
        borderColor: '#8B0000',
        backgroundColor: '#8B0000',
        borderWidth: 2,
        tension: 0.2,
        yAxisID: 'y'
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: { legend: { position: 'top' } },
    scales: {
      x: { stacked: true },
      y: { stacked: true, beginAtZero: true }
    }
  };

  /* ---------------------------------------------------------
     FINAL RENDER
  --------------------------------------------------------- */
  return (
    <div className="w-full bg-gray-50">
      <main className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">

        {/* TITLE + MONTH SELECTOR */}
<div className="flex items-center justify-between mb-4">
  <div className="flex items-center gap-4">
    <h2
      className="text-3xl font-bold text-gray-900"
      style={styles.outfitFont}
    >
      Capacity Summary
    </h2>

    <button
      onClick={() => router.back()}
      className="px-4 py-2 rounded text-sm bg-white text-gray-700 border hover:bg-gray-100 transition"
      style={styles.outfitFont}
    >
      Back to Dashboard
    </button>
  </div>

  <div className="flex items-center gap-2">
    <label
      className="text-sm font-medium text-gray-700"
      style={styles.outfitFont}
    >
      Start Month:
    </label>

    <select
      className="border border-black rounded px-2 py-1 text-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={startMonth}
      onChange={(e) => setStartMonth(Number(e.target.value))}
    >
      {selectableMonths.map((m) => (
        <option
          key={m.value}
          value={m.value}
          className="bg-white text-black"
        >
          {m.label}
        </option>
      ))}
    </select>
  </div>
</div>

        {/* CAPACITY TABLE */}
        <div className="overflow-x-auto border rounded-lg shadow-sm bg-white mb-6">
          <table className="min-w-max w-full border-collapse text-sm text-gray-700">

            <thead className="bg-[#017ACB] text-white">
              <tr>
                <th className="px-4 py-2 border text-left" style={styles.outfitFont}>
                  Category
                </th>

                {months.map((month) => (
                  <th
                    key={month}
                    className="px-4 py-2 border text-center"
                    style={styles.outfitFont}
                  >
                    {month}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>

              {categories.map((cat) => (
                <tr key={cat.label}>
                  <td className="px-4 py-2 border font-semibold" style={styles.outfitFont}>
                    {cat.label}
                  </td>

                  {cat.values.map((val, idx) => (
                    <td key={idx} className="px-4 py-2 border text-center">
                      {fmt(val)}
                    </td>
                  ))}
                </tr>
              ))}

              <tr className="bg-gray-100">
                <td className="px-4 py-2 border font-bold" style={styles.outfitFont}>
                  Total Allocated
                </td>
                {totals.map((val, idx) => (
                  <td key={idx} className="px-4 py-2 border text-center font-bold">
                    {fmt(val)}
                  </td>
                ))}
              </tr>

              <tr className="bg-gray-50">
                <td className="px-4 py-2 border font-bold" style={styles.outfitFont}>
                  Total People Capacity
                </td>
                {peopleCapacity.map((val, idx) => (
                  <td key={idx} className="px-4 py-2 border text-center">
                    {fmt(val)}
                  </td>
                ))}
              </tr>

              <tr className="bg-gray-50">
                <td className="px-4 py-2 border font-bold" style={styles.outfitFont}>
                  Remaining Capacity
                </td>
                {remainingCapacity.map((val, idx) => (
                  <td key={idx} className="px-4 py-2 border text-center">
                    {fmt(val)}
                  </td>
                ))}
              </tr>

            </tbody>
          </table>
        </div>

        {/* CHART */}
        <div className="bg-white p-4 rounded-lg shadow mb-6 flex justify-center">
          <div className="w-full max-w-5xl">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>

      </main>
    </div>
  );
}