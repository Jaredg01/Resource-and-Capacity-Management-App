'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const styles = {
  outfitFont: { fontFamily: 'Outfit, sans-serif' }
};

export default function ReportsPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  // Load user
  useEffect(() => {
    const userData = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
    if (!userData) {
      router.push('/Resource-Manager/Profile/login');
      return;
    }
    setUser(JSON.parse(userData));
  }, [router]);

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <header className="bg-[#017ACB] shadow-sm w-full relative">
        <div className="px-4 sm:px-6 lg:px-8 w-full">
          <div className="relative flex items-center h-[clamp(4.5rem,5vw,5.5rem)] w-full">

            {/* Logo + Title */}
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
                Reports
              </h1>
            </div>

            {/* Profile */}
            <div className="flex items-center gap-4 ml-auto flex-none">
              <span
                className="font-semibold text-white text-[clamp(1rem,1.15vw,1.25rem)]"
                style={styles.outfitFont}
              >
                {user?.username || ''}
              </span>

              <div
                onClick={() => router.push('/Resource-Manager/Profile/view-profile')}
                className="rounded-full bg-white flex items-center justify-center cursor-pointer hover:opacity-90 transition
                           w-[clamp(2.4rem,2.8vw,3.0rem)] h-[clamp(2.4rem,2.8vw,3.0rem)]"
              >
                <span className="text-[#017ACB] font-bold text-[clamp(1.1rem,1.3vw,1.5rem)]">
                  {user?.username?.charAt(0)?.toUpperCase() || ''}
                </span>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-bold text-gray-900" style={styles.outfitFont}>
            Reports
          </h2>

          <button
            onClick={() => router.push('/Resource-Manager/dashboard')}
            className="px-4 py-2 rounded text-sm bg-white text-gray-700 border hover:bg-gray-100 transition"
            style={styles.outfitFont}
          >
            Back to Dashboard
          </button>
        </div>

        {/* EMPTY BODY */}
        <div className="mt-10 text-gray-600 text-lg" style={styles.outfitFont}>
          This page currently contains only the header and profile functionality.
        </div>

      </main>
    </div>
  );
}