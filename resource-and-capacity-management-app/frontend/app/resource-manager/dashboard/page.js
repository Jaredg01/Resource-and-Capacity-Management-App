'use client';

import { useEffect, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import DashboardSummary from '@/components/layout/DashboardSummary';

const styles = {
  outfitFont: { fontFamily: 'Outfit, sans-serif' }
};

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const [, startTransition] = useTransition();

  /* ---------------------------------------------------------
     SECURITY: CLIENT‑SIDE AUTH GUARD
     ---------------------------------------------------------
     • Ensures only authenticated users can access the dashboard
     • Redirects immediately if no user session is found
     • Prevents UI flash by blocking render until user is loaded
  --------------------------------------------------------- */
  useEffect(() => {
    const stored = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    // If either user OR token is missing → force logout
    if (!stored || !token) {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      router.push('/login');
      return;
    }

    // Load user into state
    startTransition(() => {
      setUser(JSON.parse(stored));
    });
  }, [router]);

  // Loading state while user session is being validated
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-10 w-10 border-b-2 border-blue-600 rounded-full"></div>
      </div>
    );
  }

  return (
    /* ---------------------------------------------------------
       PAGE CONTAINER (NOW EXPANDS FULL WIDTH)
       ---------------------------------------------------------
       • max-w-full allows the dashboard to stretch across
         ultra‑wide monitors without restriction
       • Same layout, same spacing — just more horizontal room
    --------------------------------------------------------- */
    <div className="w-full max-w-full mx-auto mt-2 space-y-12 px-4">

      {/* -----------------------------------------------------
         DASHBOARD SUMMARY (FULL WIDTH)
      ----------------------------------------------------- */}
      <div className="w-full">
        <DashboardSummary />
      </div>

      {/* -----------------------------------------------------
         NAVIGATION TILES (EXPAND WITH SCREEN SIZE)
         -----------------------------------------------------
         • Same 1 → 2 → 3 column behavior
         • Tiles now stretch wider because container is wider
      ----------------------------------------------------- */}
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-[clamp(1.5rem,2vw,3rem)]
          w-full
        "
      >
        {[
          { label: 'Capacity Summary', icon: '📊', href: '/capacity' },
          { label: 'Resources', icon: '👥', href: '/resource-manager/create-edit-resources' },
          { label: 'Initiatives', icon: '🎯', href: '/resource-manager/create-edit-initiatives' },
          { label: 'Assignments', icon: '📋', href: '/resource-manager/assign-edit-allocation' },
          { label: 'Calendar', icon: '📅', href: '/calendar' },
          { label: 'Reports', icon: '📈', href: '/resource-manager/reports' },
        ].map((tile, i) => (
          <div
            key={i}
            onClick={() => router.push(tile.href)}
            className="
              bg-white rounded-lg shadow-sm border text-center border-gray-200
              p-[clamp(1.5rem,2.2vw,3rem)]
              hover:shadow-md hover:border-gray-500
              cursor-pointer transition
              w-full
            "
          >
            {/* Tile Icon */}
            <div className="text-[clamp(2.4rem,3vw,4rem)] mb-3 text-gray-700">
              {tile.icon}
            </div>

            {/* Tile Label */}
            <h3
              className="text-[clamp(1.2rem,1.4vw,1.6rem)] font-semibold text-gray-900"
              style={styles.outfitFont}
            >
              {tile.label}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}