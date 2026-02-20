'use client';

/* ============================================================
   PERSON CAPACITY REPORT
    - Displays total allocated capacity per month per person
   ============================================================ */

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';

/* ============================================================
   Months to display (matches screenshot)
   ============================================================ */
const REPORT_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

export default function PersonCapacityReport() {
  const router = useRouter();

  /* ================= STATE ================= */
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ============================================================
     LOAD DATA USING EXISTING ROUTES
     ============================================================ */
  useEffect(() => {
    async function loadReport() {
      try {
        /* 1️⃣ Get all employees */
        const empRes = await api.get('/resource/employees');
        const employees = empRes.data || [];

        /* 2️⃣ Fetch capacity for each employee */
        const capacityCalls = employees.map(emp =>
          api.get(`/resource/employees/${emp.emp_id}/capacity`)
        );

        const capacityResults = await Promise.all(capacityCalls);

        /* 3️⃣ Build table-ready structure */
        const reportRows = employees.map((emp, index) => {
          const capacityData = capacityResults[index].data || [];

          /* Convert capacity rows into lookup */
          const capMap = {};
          capacityData.forEach(c => {
            capMap[c.month] = c.allocation;
          });

          return {
            name: `${emp.first_name} ${emp.last_name}`,
            values: REPORT_MONTHS.map(m => capMap[m] ?? null)
          };
        });

        setPeople(reportRows);
      } catch (err) {
        console.error('Failed to load capacity report', err);
      } finally {
        setLoading(false);
      }
    }

    loadReport();
  }, []);

  /* ================= LOADING SPINNER ================= */
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#017ACB]" />
      </div>
    );
  }

  /* ============================================================
     UI RENDER
     Matches your design + color scheme
     ============================================================ */
  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <main className="max-w-7xl mx-auto px-6 py-8">

        {/* ================= HEADER ================= */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold">
              Total Allocated Capacity Per Month Per Person
            </h2>

            <button
              onClick={() => router.back()}
              className="px-4 py-2 text-sm bg-white border rounded-md hover:bg-[#017ACB]/10 transition"
            >
              Back to Dashboard
            </button>
          </div>

          <button className="bg-[#017ACB] text-white px-5 py-2 rounded-md shadow hover:bg-[#015f9c] transition">
            Export CSV
          </button>
        </div>

        {/* ================= TABLE CONTAINER ================= */}
        <div className="bg-white rounded-xl shadow-md border border-black overflow-hidden relative">

          {/* Right side buttons */}
          <div className="absolute right-6 top-6 flex flex-col gap-3">
            {['Reports', 'Category', 'Initiatives', 'Person'].map(btn => (
              <button
                key={btn}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full shadow-sm hover:bg-[#017ACB] hover:text-white transition"
              >
                {btn}
              </button>
            ))}
          </div>

          {/* ================= TABLE ================= */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border-collapse border border-black">

              {/* Header */}
              <thead className="bg-[#017ACB] text-white">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold border border-black">
                    Person
                  </th>

                  {REPORT_MONTHS.map(month => (
                    <th
                      key={month}
                      className="px-6 py-3 text-center font-semibold border border-black"
                    >
                      {month}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {people.map(person => (
                  <tr key={person.name}>
                    <td className="px-6 py-4 border border-gray-300 font-medium bg-gray-50">
                      {person.name}
                    </td>

                    {person.values.map((val, i) => (
                      <td
                        key={i}
                        className="px-6 py-4 text-center border border-gray-300"
                      >
                        {val ?? ''}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

      </main>
    </div>
  );
}
