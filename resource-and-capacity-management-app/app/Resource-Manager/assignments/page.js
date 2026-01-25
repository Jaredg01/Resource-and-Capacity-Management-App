'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const styles = {
  outfitFont: { fontFamily: 'Outfit, sans-serif' }
};

export default function AssignmentsAllocationsPage() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState('all');
  const [user, setUser] = useState(null);

  /* ================= LOAD USER ================= */
  useEffect(() => {
    const u = localStorage.getItem('user');
    if (!u) {
      router.push('/login');
      return;
    }
    setUser(JSON.parse(u));
  }, [router]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ================= HEADER ================= */}
      <header className="bg-[#017ACB] shadow-sm w-full relative">
        <div className="px-4 sm:px-6 lg:px-8 w-full">
          <div className="relative flex items-center h-[clamp(4.5rem,5vw,5.5rem)]">

            {/* Logo */}
            <div
              className="flex items-center cursor-pointer"
              onClick={() => router.push('/Resource-Manager/dashboard')}
            >
              <img
                src="/CapstoneDynamicsLogo.png"
                alt="Logo"
                className="h-[clamp(3.2rem,3.8vw,4rem)]"
              />

              <h1
                className="ml-4 font-bold text-white text-[clamp(1.6rem,1.7vw,2rem)]"
                style={styles.outfitFont}
              >
                Capstone Dynamics
              </h1>
            </div>

            {/* Center Title */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <h1
                className="font-bold text-white text-[clamp(1.2rem,1.3vw,1.6rem)]"
                style={styles.outfitFont}
              >
                Resource & Capacity Management Planner
              </h1>
            </div>

            {/* Profile */}
            <div className="ml-auto flex items-center gap-4">
              <span className="text-white font-semibold" style={styles.outfitFont}>
                {user.username}
              </span>

              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-[#017ACB] cursor-pointer">
                {user.username.charAt(0).toUpperCase()}
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* ================= PAGE CONTENT ================= */}
      <main className="max-w-full mx-auto px-6 py-6">

        {/* Title + Back */}
        <div className="flex justify-between items-center mb-4">
          <h2
            className="text-3xl font-bold text-gray-900"
            style={styles.outfitFont}
          >
            Assignments & Allocations
          </h2>

          <button
            onClick={() => router.push('/Resource-Manager/dashboard')}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
            style={styles.outfitFont}
          >
            ← Back to Dashboard
          </button>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 border text-sm ${
              activeTab === 'all'
                ? 'bg-[#017ACB] text-white'
                : 'bg-white text-gray-700'
            }`}
            style={styles.outfitFont}
          >
            All
          </button>

          <button
            onClick={() => setActiveTab('mine')}
            className={`px-4 py-2 border text-sm ${
              activeTab === 'mine'
                ? 'bg-[#017ACB] text-white'
                : 'bg-white text-gray-700'
            }`}
            style={styles.outfitFont}
          >
            Mine
          </button>
        </div>

        {/* ================= TABLE ================= */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto overflow-y-auto max-h-[70vh]">
            <table className="w-full text-sm">

              {/* ---------- TABLE HEADER ---------- */}
              <thead className="bg-[#017ACB] text-white sticky top-0 z-10">
                <tr>
                  <th className="px-3 py-2 border-r border-white">Edit</th>

                  <th className="px-3 py-2 border-r border-white">Resource Name</th>
                  <th className="px-3 py-2 border-r border-white">Department</th>
                  <th className="px-3 py-2 border-r border-white">Reports To</th>
                  <th className="px-3 py-2 border-r border-white">Activity</th>
                  <th className="px-3 py-2 border-r border-white">Activity Category</th>
                  <th className="px-3 py-2 border-r border-white">Leader Accountable</th>
                  <th className="px-3 py-2 border-r border-white">Requestor</th>
                  <th className="px-3 py-2 border-r border-white">Requestor VP</th>
                  <th className="px-3 py-2 border-r border-white">Requesting Department</th>

                  <th className="px-3 py-2 border-r border-white text-center">Jan-25</th>
                  <th className="px-3 py-2 border-r border-white text-center">Feb-25</th>
                  <th className="px-3 py-2 border-r border-white text-center">Mar-25</th>
                  <th className="px-3 py-2 border-r border-white text-center">Apr-25</th>
                  <th className="px-3 py-2 border-r border-white text-center">May-25</th>
                  <th className="px-3 py-2 border-r border-white text-center">Jun-25</th>
                  <th className="px-3 py-2 border-r border-white text-center">Jul-25</th>
                  <th className="px-3 py-2 border-r border-white text-center">Aug-25</th>
                  <th className="px-3 py-2 border-r border-white text-center">Sep-25</th>
                  <th className="px-3 py-2 border-r border-white text-center">Oct-25</th>
                  <th className="px-3 py-2 border-r border-white text-center">Nov-25</th>
                  <th className="px-3 py-2 border-r border-white text-center">Dec-25</th>

                  <th className="px-3 py-2 border-r border-white text-center">Jan-26</th>
                  <th className="px-3 py-2 border-r border-white text-center">Feb-26</th>
                  <th className="px-3 py-2 border-r border-white text-center">Mar-26</th>
                  <th className="px-3 py-2 border-r border-white text-center">Apr-26</th>
                </tr>
              </thead>

              {/* ---------- EMPTY STATE ---------- */}
              <tbody>
                <tr>
                  <td
                    colSpan={26}
                    className="px-6 py-10 text-center text-gray-600"
                    style={styles.outfitFont}
                  >
                    No assignments found
                  </td>
                </tr>
              </tbody>

            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
