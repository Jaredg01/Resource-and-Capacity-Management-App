'use client';

import { useState, useEffect } from 'react';
import api from '@/lib/api';
import { useRouter } from 'next/navigation';

const styles = {
  outfitFont: { fontFamily: 'Outfit, sans-serif' }
};

/* ---------------------------------------------------------
   MONTH → LINEAR INDEX CONVERSION
   ---------------------------------------------------------
   • Converts YYYYMM into a sortable linear index
   • Used for contiguous month selection logic
--------------------------------------------------------- */
const monthToIndex = (yyyymm) => {
  const year = Math.floor(yyyymm / 100);
  const month = yyyymm % 100;
  return year * 12 + month;
};

export default function CalendarView() {
  const router = useRouter();

  /* ---------------------------------------------------------
     STATE MANAGEMENT
     ---------------------------------------------------------
     • user → authenticated user object
     • availableMonths → all months returned by backend
     • selectedMonths → contiguous selection (1–3 months)
     • activitiesByMonth → grouped activities for each month
     • filterMode → "all" or "mine"
     • showSelector → floating panel visibility
     • shake → invalid selection animation
     • loading flags → prevent UI flash
  --------------------------------------------------------- */
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

  /* ---------------------------------------------------------
     LOAD USER FROM LOCAL STORAGE (SECURE)
     ---------------------------------------------------------
     • Defensive JSON parsing
     • Redirects to login if missing
  --------------------------------------------------------- */
  useEffect(() => {
    try {
      const stored = localStorage.getItem('user');
      if (!stored) {
        router.push('/login');
        return;
      }

      const parsed = JSON.parse(stored);
      if (!parsed?.emp_id) {
        console.warn('Invalid user object — forcing logout');
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        router.push('/login');
        return;
      }

      setUser(parsed);
    } catch (err) {
      console.error('LocalStorage parse error:', err);
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      router.push('/login');
    } finally {
      setLoadingUser(false);
    }
  }, [router]);

  /* ---------------------------------------------------------
     LOAD AVAILABLE MONTHS
     ---------------------------------------------------------
     • Fetches all months with activity data
     • Selects current month or closest available
     • Fully defensive against missing backend fields
  --------------------------------------------------------- */
  useEffect(() => {
    async function loadMonths() {
      try {
        const res = await api.get('/calendar-view');
        const data = res?.data;

        if (!data?.success) throw new Error('Failed to load months');

        const formatted = data.formatted || [];
        setAvailableMonths(formatted);

        if (formatted.length > 0) {
          const today = new Date();
          const currentYYYYMM =
            today.getFullYear() * 100 + (today.getMonth() + 1);

          const match = formatted.find((m) => m.yyyymm === currentYYYYMM);

          if (match) {
            setSelectedMonths([match.yyyymm]);
          } else {
            const closest = formatted.reduce((prev, curr) =>
              Math.abs(curr.yyyymm - currentYYYYMM) <
              Math.abs(prev.yyyymm - currentYYYYMM)
                ? curr
                : prev
            );
            setSelectedMonths([closest.yyyymm]);
          }
        }
      } catch (err) {
        console.error('Error loading months:', err);
      } finally {
        setLoadingMonths(false);
      }
    }

    loadMonths();
  }, []);

  /* ---------------------------------------------------------
     LOAD ACTIVITIES FOR SELECTED MONTHS
     ---------------------------------------------------------
     • Fetches activities for 1–3 selected months
     • Applies "mine" filter when selected
     • Sorts months chronologically
  --------------------------------------------------------- */
  useEffect(() => {
    if (!user || selectedMonths.length === 0) {
      setActivitiesByMonth([]);
      return;
    }

    async function loadCalendar() {
      setLoadingCalendar(true);

      try {
        const res = await api.post('/calendar-view', {
          months: selectedMonths,
          ...(filterMode === 'mine' ? { emp_id: user.emp_id } : {})
        });

        const data = res?.data;
        if (!data?.success) throw new Error('Failed to load activities');

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

  /* ---------------------------------------------------------
     AUTO-CLOSE MONTH SELECTOR
  --------------------------------------------------------- */
  useEffect(() => {
    if (selectedMonths.length === 0 && showSelector) {
      setShowSelector(false);
    }
  }, [selectedMonths, showSelector]);

  /* ---------------------------------------------------------
     SHAKE ANIMATION
  --------------------------------------------------------- */
  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 150);
  };

  /* ---------------------------------------------------------
     CONTIGUOUS MONTH SELECTION LOGIC
     ---------------------------------------------------------
     • Allows selecting 1–3 consecutive months
     • Prevents gaps
     • Prevents removing middle month
  --------------------------------------------------------- */
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

  /* ---------------------------------------------------------
     APPLY FILTERS
  --------------------------------------------------------- */
  const applyFilters = () => {
    setShowSelector(false);
  };

  /* ---------------------------------------------------------
     GROUP ACTIVITIES BY CATEGORY
  --------------------------------------------------------- */
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

  /* ---------------------------------------------------------
     LOADING STATE
  --------------------------------------------------------- */
  if (loadingUser || loadingMonths || loadingCalendar) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </div>
    );
  }

  /* ---------------------------------------------------------
     GRID LAYOUT CALCULATIONS
  --------------------------------------------------------- */
  const gridCols =
    selectedMonths.length === 1
      ? 'grid-cols-1'
      : selectedMonths.length === 2
      ? 'grid-cols-2'
      : 'grid-cols-3';

  const gridWidth =
    selectedMonths.length === 3 ? 'max-w-[95%]' : 'max-w-[70%]';

  /* ---------------------------------------------------------
     FINAL RENDER
  --------------------------------------------------------- */
  return (
    <div className="w-full relative">
      <main className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 relative">

        {/* PAGE HEADER */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <h2
              className="text-3xl font-bold text-black"
              style={styles.outfitFont}
            >
              Calendar View
            </h2>

            <button
              onClick={() => router.back()}
              className="px-4 py-2 rounded text-sm bg-white text-gray-700 border hover:bg-gray-100 transition"
              style={styles.outfitFont}
            >
              Back to Dashboard
            </button>
          </div>
        </div>

        <div className="relative flex justify-center w-full">

          {/* MONTH GRID */}
          <div
            id="monthGrid"
            className={`
              relative
              grid ${gridCols}
              ${gridWidth}
              min-w-175
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

                  {/* MONTH CONTENT */}
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

          {/* FLOATING SELECTOR PANEL */}
          {showSelector && selectedMonths.length > 0 && (
            <div
              className={`
                absolute top-0 w-md border border-black rounded-lg bg-white shadow p-4 z-9999
                min-h-96
                ${shake ? 'animate-[shake_0.15s_ease-in-out]' : ''}
              `}
              style={{ left: 'calc(50% + 380px)' }}
            >
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

                {/* MONTH CHECKBOXES */}
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