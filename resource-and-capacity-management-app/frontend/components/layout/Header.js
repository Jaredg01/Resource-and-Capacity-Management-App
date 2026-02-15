'use client';

import { useLayoutEffect, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const styles = {
  outfitFont: { fontFamily: 'Outfit, sans-serif' }
};

export default function Header() {
  const [user, setUser] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('user');
      return stored ? JSON.parse(stored) : null;
    }
    return null;
  });
  const [hydrated, setHydrated] = useState(false);
  const [, startTransition] = useTransition();
  const router = useRouter();

  // Mark component as hydrated on client
  useLayoutEffect(() => {
    startTransition(() => {
      setHydrated(true);
    });
  }, []);

  // Prevent hydration mismatch
  if (!hydrated) return null;

  return (
    <header className="bg-[#017ACB] shadow-sm w-full">
      <div className="px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative flex items-center h-[clamp(4.5rem,5vw,5.5rem)] w-full">

          {/* Logo + Company Name */}
          <div className="flex items-center flex-none cursor-pointer">
            <Image
              src="/CapstoneDynamicsLogo.png"
              alt="Logo"
              width={64}
              height={64}
              className="w-auto h-[clamp(3.2rem,3.8vw,4rem)]"
            />

            <h1
              className="font-bold text-white leading-tight ml-4 text-[clamp(1.6rem,1.7vw,2rem)]"
              style={styles.outfitFont}
            >
              Capstone Dynamics
            </h1>
          </div>

          {/* Centered App Title */}
          <div className="absolute left-1/2 -translate-x-1/2 text-center">
            <h1
              className="font-bold text-white leading-tight text-[clamp(1.2rem,1.3vw,1.6rem)]"
              style={styles.outfitFont}
            >
              Resource & Capacity Management Planner
            </h1>
          </div>

          {/* User Profile */}
          {user && (
            <div className="flex items-center gap-4 ml-auto flex-none">
              <span
                className="font-semibold text-white text-[clamp(1rem,1.15vw,1.25rem)]"
                style={styles.outfitFont}
              >
                {user.username}
              </span>

              <div
                onClick={() => router.push('/profile')}
                className="rounded-full bg-white flex items-center justify-center cursor-pointer hover:opacity-90 transition
                           w-[clamp(2.4rem,2.8vw,3rem)] h-[clamp(2.4rem,2.8vw,3rem)]"
              >
                <span className="text-[#017ACB] font-bold text-[clamp(1.1rem,1.3vw,1.5rem)]">
                  {user.username.charAt(0).toUpperCase()}
                </span>
              </div>
            </div>
          )}

        </div>
      </div>
    </header>
  );
}