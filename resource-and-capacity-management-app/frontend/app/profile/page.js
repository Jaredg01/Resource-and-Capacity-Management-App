'use client';

import ProfileCard from '@/components/layout/ProfileCard';

/* ---------------------------------------------------------
   PROFILE PAGE WRAPPER
   ---------------------------------------------------------
   • Lightweight page component
   • Delegates all logic + security checks to ProfileCard
   • Keeps routing structure clean and maintainable
--------------------------------------------------------- */
export default function ProfilePage() {
  return <ProfileCard />;
}