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

  // Load user session
  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (!stored) {
      router.push('/login');
      return;
    }
    startTransition(() => {
      setUser(JSON.parse(stored));
    });
  }, [router]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-10 w-10 border-b-2 border-blue-600 rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 space-y-12">

      {/* Dashboard Summary Component */}
      <DashboardSummary />

      {/* -----------------------------------------------------
         NAVIGATION TILES
         ----------------------------------------------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[clamp(1rem,2vw,2.5rem)] w-full">

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
              p-[clamp(1rem,1.5vw,2rem)]
              hover:shadow-md hover:border-gray-500
              cursor-pointer transition
            "
          >
            <div className="text-[clamp(2rem,2.5vw,3rem)] mb-2 text-gray-700">
              {tile.icon}
            </div>

            <h3
              className="text-[clamp(1rem,1.2vw,1.4rem)] font-semibold text-gray-900 mb-2"
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