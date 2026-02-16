'use client';

import CapacitySummary from '@/components/layout/CapacitySummary';

/* ---------------------------------------------------------
   CAPACITY PAGE WRAPPER
   ---------------------------------------------------------
   • Lightweight route component
   • Delegates all logic, security checks, and rendering
     to the CapacitySummary layout component
   • Keeps routing structure clean and maintainable
--------------------------------------------------------- */
export default function CapacityPage() {
  return <CapacitySummary />;
}