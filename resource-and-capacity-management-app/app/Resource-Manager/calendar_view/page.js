'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const styles = {
  outfitFont: { fontFamily: 'Outfit, sans-serif' }
};

/* ---------------------------------------------------------
   MONTH → LINEAR INDEX CONVERSION
--------------------------------------------------------- */
const monthToIndex = (yyyymm) => {
  const year = Math.floor(yyyymm / 100);
  const month = yyyymm % 100;
  return year * 12 + month;
};

export default function CalendarViewPage() {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [availableMonths, setAvailableMonths] = useState([]);
  const [selectedMonths, setSelectedMonths] = useState([]);
  const [activitiesByMonth, setActivitiesByMonth] = useState([]);
  const [filterMode, setFilterMode] = useState('all');
  const [showSelector, setShowSelector] = useState(false);
  const [shake, setShake] = useState(false);

  const [loadingUser, setLoadingUser] = useState(true);
  const [loadingMonths, setLoadingMonths] = useState(true);
  const [loadingCalendar, setLoadingCalendar] = useState(true);

  /* -------------------------------------------------------
     LOAD USER
  ------------------------------------------------------- */
  useEffect(() => {
    const userData = localStorage.getItem('user');

    if (!userData) {
      router.push('/Resource-Manager/Profile/login');
      return;
    }

    setUser(JSON.parse(userData));
    setLoadingUser(false);
  }, [router]);

  /* -------------------------------------------------------
     LOAD AVAILABLE MONTHS
  ------------------------------------------------------- */
  useEffect(() => {
    async function loadMonths() {
      try {
        const res = await fetch('/api/Resource-Manager/calendar-view');
        const data = await res.json();

        if (!data.success) throw new Error('Failed to load months');

        const formatted = data.formatted || [];
        setAvailableMonths(formatted);

        if (formatted.length > 0) {
          const latest = formatted[formatted.length - 1].yyyymm;
          setSelectedMonths([latest]);
        }
      } catch (err) {
        console.error('Error loading months:', err);
      } finally {
        setLoadingMonths(false);
      }
    }

    loadMonths();
  }, []);

  /* -------------------------------------------------------
     LOAD ACTIVITIES FOR SELECTED MONTHS
  ------------------------------------------------------- */
  useEffect(() => {
    if (!user || selectedMonths.length === 0) {
      setActivitiesByMonth([]);
      return;
    }

    async function loadCalendar() {
      setLoadingCalendar(true);

      try {
        const res = await fetch('/api/Resource-Manager/calendar-view', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            months: selectedMonths,
            ...(filterMode === 'mine' ? { emp_id: user.emp_id } : {})
          })
        });

        const data = await res.json();
        if (!data.success) throw new Error('Failed to load activities');

        const sorted = (data.activitiesByMonth || [])
          .slice()
          .sort((a, b) => a.yyyymm - b.yyyymm);

        setActivitiesByMonth(sorted);
      } catch (err) {
        console.error('Error loading activities:', err);
      } finally {
        setLoadingCalendar(false);
      }
    }

    loadCalendar();
  }, [selectedMonths, filterMode, user]);

  /* -------------------------------------------------------
     AUTO-CLOSE MONTH SELECTOR
  ------------------------------------------------------- */
  useEffect(() => {
    if (selectedMonths.length === 0 && showSelector) {
      setShowSelector(false);
    }
  }, [selectedMonths, showSelector]);

  /* -------------------------------------------------------
     SHAKE ANIMATION
  ------------------------------------------------------- */
  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 150);
  };

  /* -------------------------------------------------------
     CONTIGUOUS MONTH SELECTION
  ------------------------------------------------------- */
  const toggleMonth = (yyyymm) => {
    const idx = monthToIndex(yyyymm);

    if (selectedMonths.length === 0) {
      setSelectedMonths([yyyymm]);
      return;
    }

    const sorted = [...selectedMonths].sort((a, b) => a - b);
    const first = sorted[0];
    const last = sorted[sorted.length - 1];

    const firstIdx = monthToIndex(first);
    const lastIdx = monthToIndex(last);

    const isSelected = selectedMonths.includes(yyyymm);

    // Removing
    if (isSelected) {
      if (yyyymm === first && selectedMonths.length > 1) {
        setSelectedMonths(sorted.slice(1));
        return;
      }
      if (yyyymm === last && selectedMonths.length > 1) {
        setSelectedMonths(sorted.slice(0, -1));
        return;
      }

      triggerShake();
      return;
    }

    // Adding
    const isAdjacentToStart = idx === firstIdx - 1;
    const isAdjacentToEnd = idx === lastIdx + 1;

    if (!isAdjacentToStart && !isAdjacentToEnd) {
      setSelectedMonths([yyyymm]);
      return;
    }

    if (selectedMonths.length === 3) {
      setSelectedMonths([yyyymm]);
      return;
    }

    if (isAdjacentToStart) {
      setSelectedMonths([yyyymm, ...sorted]);
      return;
    }
    if (isAdjacentToEnd) {
      setSelectedMonths([...sorted, yyyymm]);
      return;
    }
  };

  const applyFilters = () => {
    setShowSelector(false);
  };

  /* -------------------------------------------------------
     GROUP ACTIVITIES BY CATEGORY
     EXPECTS: month.activities = [{ activity, category }, ...]
  ------------------------------------------------------- */
  const groupByCategory = (activities) => {
    const groups = {
      Baseline: [],
      Strategic: [],
      Discretionary: [],
      Vacation: []
    };

    activities.forEach((a) => {
      const cat = a.category || 'Other';
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(a.activity);
    });

    return groups;
  };

  if (loadingUser || loadingMonths || loadingCalendar) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </div>
    );
  }

  const gridCols =
    selectedMonths.length === 1
      ? 'grid-cols-1'
      : selectedMonths.length === 2
      ? 'grid-cols-2'
      : 'grid-cols-3';

  const gridWidth =
    selectedMonths.length === 3 ? 'max-w-[95%]' : 'max-w-[70%]';
      return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* HEADER */}
      <header className="bg-[#017ACB] shadow-sm w-full relative">
        <div className="px-4 sm:px-6 lg:px-8 w-full">
          <div className="relative flex items-center h-[clamp(4.5rem,5vw,5.5rem)] w-full">
            {/* Logo + Home */}
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

            {/* Center Title */}
            <div className="absolute left-1/2 -translate-x-1/2 text-center">
              <h1
                className="font-bold text-white leading-tight text-[clamp(1.2rem,1.3vw,1.6rem)]"
                style={styles.outfitFont}
              >
                Resource & Capacity Management Planner
              </h1>
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-4 ml-auto flex-none">
              <span
                className="font-semibold text-white text-[clamp(1rem,1.15vw,1.25rem)]"
                style={styles.outfitFont}
              >
                {user?.username}
              </span>

              <div
                onClick={() =>
                  router.push('/Resource-Manager/Profile/view-profile')
                }
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
      <main className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 relative">
        {/* Title + Back Button */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <h2
              className="text-3xl font-bold text-black"
              style={styles.outfitFont}
            >
              Calendar View
            </h2>

            <button
              onClick={() => router.push('/Resource-Manager/dashboard')}
              className="px-4 py-2 rounded text-sm bg-white text-black border hover:bg-gray-100 transition"
              style={styles.outfitFont}
            >
              Back to Dashboard
            </button>
          </div>
        </div>

        {/* GRID + SELECTOR WRAPPER */}
        <div className="relative flex justify-center w-full">
          {/* MONTH GRID */}
          <div
            id="monthGrid"
            className={`
              relative
              grid ${gridCols}
              ${gridWidth}
              min-w-[700px]
              gap-0
              border border-black
              rounded-lg
              bg-white
              shadow
            `}
          >
            {activitiesByMonth.map((month, index) => {
              const groups = groupByCategory(month.activities || []);

              return (
                <div
                  key={month.yyyymm}
                  className={`flex flex-col border-black ${
                    index > 0 ? 'border-l' : ''
                  }`}
                >
                  {/* MONTH HEADER */}
                  <div className="px-6 py-3 border-b border-black bg-white relative flex items-center">
                    <h3
                      className="text-2xl font-bold text-black"
                      style={styles.outfitFont}
                    >
                      {month.label}
                    </h3>

                    {/* Dropdown arrow on last month */}
                    {index === activitiesByMonth.length - 1 && (
                      <div
                        className={`
                          absolute
                          right-2.5
                          text-black text-4xl font-normal cursor-pointer select-none
                          ${
                            selectedMonths.length === 0
                              ? 'opacity-40 cursor-default'
                              : ''
                          }
                        `}
                        style={{
                          transform:
                            showSelector && selectedMonths.length > 0
                              ? 'rotate(90deg)'
                              : 'rotate(-90deg)',
                          transition: 'transform 0.2s ease'
                        }}
                        onClick={() => {
                          if (selectedMonths.length === 0) return;
                          setShowSelector((prev) => !prev);
                        }}
                      >
                        {'<'}
                      </div>
                    )}
                  </div>
                                    {/* MONTH CONTENT WITH CATEGORY SECTIONS */}
                  <div className="p-6">
                    {month.activities.length === 0 ? (
                      <p
                        className="text-black italic text-center"
                        style={styles.outfitFont}
                      >
                        No activities this month
                      </p>
                    ) : (
                      <div className="space-y-6">
                        {['Baseline', 'Strategic', 'Discretionary', 'Vacation'].map(
                          (cat) => {
                            const items = groups[cat] || [];
                            if (items.length === 0) return null;

                            return (
                              <div key={cat}>
                                <h4
                                  className="font-bold text-lg text-black mb-2"
                                  style={styles.outfitFont}
                                >
                                  {cat}
                                </h4>

                                <ul className="list-disc pl-6 space-y-1 text-black">
                                  {items.map((act, i) => (
                                    <li
                                      key={i}
                                      className="text-md"
                                      style={styles.outfitFont}
                                    >
                                      {act}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                          }
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* FLOATING MONTH + FILTER SELECTOR */}
          {showSelector && selectedMonths.length > 0 && (
            <div
              className={`
                absolute top-0 w-md border border-black rounded-lg bg-white shadow p-4 z-9999
                min-h-96
                ${shake ? 'animate-[shake_0.15s_ease-in-out]' : ''}
              `}
              style={{ left: 'calc(50% + 380px)' }}
            >
              {/* Shake keyframes */}
              <style>
                {`
                  @keyframes shake {
                    0% { transform: translateX(0); }
                    25% { transform: translateX(-3px); }
                    50% { transform: translateX(3px); }
                    75% { transform: translateX(-3px); }
                    100% { transform: translateX(0); }
                  }
                `}
              </style>

              <div className="flex gap-4">
                {/* MONTH LIST */}
                <div className="flex-1">
                  <h4
                    className="font-semibold mb-2 text-black"
                    style={styles.outfitFont}
                  >
                    Months
                  </h4>

                  <div className="flex flex-col gap-2 pr-1 mb-3">
                    {availableMonths.map((m) => {
                      const isSelected = selectedMonths.includes(m.yyyymm);

                      return (
                        <label
                          key={m.yyyymm}
                          className="flex items-center gap-2 text-black text-sm"
                        >
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => toggleMonth(m.yyyymm)}
                          />
                          {m.label}
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* FILTERS */}
                <div className="w-36 flex flex-col justify-between">
                  <div>
                    <h4
                      className="font-semibold mb-2 text-black"
                      style={styles.outfitFont}
                    >
                      View
                    </h4>

                      <div className="flex flex-col gap-2 mb-4">
                        <button
                          className={`px-3 py-2 rounded border text-sm ${
                            filterMode === 'all'
                              ? 'bg-black text-white'
                              : 'bg-white text-black'
                          }`}
                          onClick={() => setFilterMode('all')}
                        >
                          All
                        </button>

                        <button
                          className={`px-3 py-2 rounded border text-sm ${
                            filterMode === 'mine'
                              ? 'bg-black text-white'
                              : 'bg-white text-black'
                          }`}
                          onClick={() => setFilterMode('mine')}
                        >
                          Just Mine
                        </button>
                      </div>
                  </div>

                  <button
                    onClick={applyFilters}
                    className="w-full bg-[#017ACB] text-white py-2 rounded font-semibold text-sm"
                    style={styles.outfitFont}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}