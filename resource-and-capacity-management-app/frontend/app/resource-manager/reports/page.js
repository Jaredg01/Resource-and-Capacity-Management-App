'use client';

import { useState, useEffect } from 'react';
import api from '@/lib/api';

function fmt(n) {
  if (n === null || n === undefined || isNaN(n)) return '0.00';
  return Number(n).toFixed(2);
}

export default function ReportsPage() {
  const [user, setUser] = useState(null);
  const [selectableMonths, setSelectableMonths] = useState([]);
  const [startMonth, setStartMonth] = useState(null);
  const [months, setMonths] = useState([]);
  const [peopleRows, setPeopleRows] = useState([]);
  const [totals, setTotals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('user');
      if (stored) setUser(JSON.parse(stored));
    } catch {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
  }, []);

  useEffect(() => {
    if (!user) return;

    async function fetchMonths() {
      try {
        const res = await api.get('/capacity-summary/months');
        setSelectableMonths(res.data.months || []);

        if (res.data.months?.length > 0) {
          setStartMonth(res.data.months[0].value);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchMonths();
  }, [user]);

  useEffect(() => {
    if (!user || !startMonth) return;

    async function fetchReport() {
      setLoading(true);

      try {
        const res = await api.get(
          `/capacity-summary?start=${encodeURIComponent(
            startMonth
          )}&months=6&view=person`
        );

        const data = res.data || {};
        setMonths(data.months || []);
        setPeopleRows(data.peopleCapacity || []);
        setTotals(data.totals || []);
      } finally {
        setLoading(false);
      }
    }

    fetchReport();
  }, [user, startMonth]);

  if (!user || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#017ACB]" />
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <main className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Header */}
        <h2 className="text-3xl font-bold mb-4">
          Total Allocated Capacity Per Month Per Person
        </h2>

        {/* Month Selector */}
        <div className="mb-6">
          <label className="mr-2 font-medium">Start Month:</label>
          <select
            value={startMonth || ''}
            onChange={(e) => setStartMonth(Number(e.target.value))}
            className="border border-black rounded-md px-3 py-2 text-sm bg-white"
          >
            {selectableMonths.map((m) => (
              <option key={m.value} value={m.value}>
                {m.label}
              </option>
            ))}
          </select>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-xl shadow-md border border-black overflow-hidden">

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border-collapse border border-black">

              <thead className="bg-[#017ACB] text-white">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold border border-black">
                    Person
                  </th>

                  {months.map((month) => (
                    <th
                      key={month}
                      className="px-6 py-3 text-center font-semibold border border-black"
                    >
                      {month}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {peopleRows.map((row, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-3 border border-black font-medium">
                      {row.name}
                    </td>
                    {row.values.map((val, i) => (
                      <td
                        key={i}
                        className="px-6 py-3 text-center border border-black"
                      >
                        {fmt(val)}
                      </td>
                    ))}
                  </tr>
                ))}

                {/* Totals Row */}
                <tr className="font-semibold bg-gray-100">
                  <td className="px-6 py-3 border border-black">
                    Total Allocated
                  </td>
                  {totals.map((val, idx) => (
                    <td
                      key={idx}
                      className="px-6 py-3 text-center border border-black"
                    >
                      {fmt(val)}
                    </td>
                  ))}
                </tr>
              </tbody>

            </table>
          </div>

        </div>

      </main>
    </div>
  );
}
