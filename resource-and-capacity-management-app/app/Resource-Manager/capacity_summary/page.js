'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
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

/* ---------------------------------------------------------
   FORMATTER: Always return number with 2 decimals
--------------------------------------------------------- */
function fmt(n) {
  if (n === null || n === undefined) return '0.00';
  return Number(n).toFixed(2);
}

export default function CapacitySummaryPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  const [selectableMonths, setSelectableMonths] = useState([]);
  const [startMonth, setStartMonth] = useState(null);

  const [months, setMonths] = useState([]);
  const [categories, setCategories] = useState([]);
  const [totals, setTotals] = useState([]);
  const [peopleCapacity, setPeopleCapacity] = useState([]);
  const [remainingCapacity, setRemainingCapacity] = useState([]);

  const [loading, setLoading] = useState(true);
  const [loadingMonths, setLoadingMonths] = useState(true);

  /* ---------------------------------------------------------
     LOAD USER SESSION
  --------------------------------------------------------- */
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/Resource-Manager/Profile/login');
      return;
    }
    setUser(JSON.parse(userData));
  }, [router]);

  /* ---------------------------------------------------------
     FETCH MONTHS FROM BACKEND
  --------------------------------------------------------- */
  useEffect(() => {
    async function loadMonths() {
      try {
        const res = await fetch('/api/Resource-Manager/capacity-summary/months');
        const data = await res.json();

        if (!data.months || data.months.length === 0) return;

        setSelectableMonths(data.months);

        const today = new Date();
        const currentYYYYMM =
          today.getFullYear() * 100 + (today.getMonth() + 1);

        const match = data.months.find((m) => m.value === currentYYYYMM);

        if (match) {
          setStartMonth(match.value);
        } else {
          setStartMonth(data.months[data.months.length - 1].value);
        }
      } catch (err) {
        console.error('Failed to load months:', err);
      } finally {
        setLoadingMonths(false);
      }
    }

    loadMonths();
  }, []);

  /* ---------------------------------------------------------
     FETCH SUMMARY WHEN START MONTH CHANGES
  --------------------------------------------------------- */
  useEffect(() => {
    if (!startMonth) return;

    async function loadSummary() {
      setLoading(true);
      try {
        const res = await fetch(
          `/api/Resource-Manager/capacity-summary?start=${startMonth}&months=6`
        );
        const data = await res.json();

        setMonths(data.months || []);
        setCategories(data.categories || []);
        setTotals(data.totals || []);
        setPeopleCapacity(data.peopleCapacity || []);
        setRemainingCapacity(data.remainingCapacity || []);
      } catch (err) {
        console.error('Failed to load summary:', err);
      } finally {
        setLoading(false);
      }
    }

    loadSummary();
  }, [startMonth]);

  if (!user || loadingMonths || loading) {
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
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0'
        ][idx],
        stack: 'alloc'
      })),
      {
        type: 'line',
        label: 'Total People Capacity',
        data: peopleCapacity,
        borderColor: '#111827',
        backgroundColor: '#111827',
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

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <header className="bg-[#017ACB] shadow-sm w-full relative">
        <div className="px-4 sm:px-6 lg:px-8 w-full">
          <div className="relative flex items-center h-[clamp(4.5rem,5vw,5.5rem)] w-full">

            <div
              className="flex items-center cursor-pointer flex-none"
              onClick={() => router.push('/Resource-Manager/dashboard')}
            >
              <img
                src="/CapstoneDynamicsLogo.png"
                alt="Logo"
                className="w-auto h-[clamp(3.2rem,3.8vw,4rem)]"
              />
              <h1
                className="font-bold text-white leading-tight ml-4 text-[clamp(1.6rem,1.7vw,2rem)]"
                style={styles.outfitFont}
              >
                Capstone Dynamics
              </h1>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 text-center">
              <h1
                className="font-bold text-white leading-tight text-[clamp(1.2rem,1.3vw,1.6rem)]"
                style={styles.outfitFont}
              >
                Resource & Capacity Management Planner
              </h1>
            </div>

            <div className="flex items-center gap-4 ml-auto flex-none">
              <span
                className="font-semibold text-white text-[clamp(1rem,1.15vw,1.25rem)]"
                style={styles.outfitFont}
              >
                {user?.username}
              </span>

              <div
                onClick={() => router.push('/Resource-Manager/Profile/view-profile')}
                className="rounded-full bg-white flex items-center justify-center cursor-pointer hover:opacity-90 transition
                           w-[clamp(2.4rem,2.8vw,3.0rem)] h-[clamp(2.4rem,2.8vw,3.0rem)]"
              >
                <span className="text-[#017ACB] font-bold text-[clamp(1.1rem,1.3vw,1.5rem)]">
                  {user?.username?.charAt(0)?.toUpperCase()}
                </span>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">

        {/* Title + Back Button + Month Selector */}
        <div className="flex items-center justify-between mb-4">

          <div className="flex items-center gap-4">
          <h2
              className="text-3xl font-bold text-gray-900"
              style={styles.outfitFont}
            >
              Capacity Summary
            </h2>
             {/* Back to Dashboard */}
            <button
              onClick={() => router.push('/Resource-Manager/dashboard')}
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

        {/* TABLE ABOVE CHART */}
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

        {/* CHART BELOW TABLE — CENTERED */}
        <div className="bg-white p-4 rounded-lg shadow mb-6 flex justify-center">
          <div className="w-full max-w-5xl">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>

      </main>
    </div>
  );
}