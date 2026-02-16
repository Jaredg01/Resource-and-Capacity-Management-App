'use client';

import CalendarView from '@/components/layout/CalendarView';

/* ---------------------------------------------------------
   CALENDAR PAGE WRAPPER
   ---------------------------------------------------------
   • Lightweight route component
   • Delegates all logic, data loading, and security checks
     to the CalendarView layout component
   • Keeps routing structure clean and maintainable
--------------------------------------------------------- */
export default function CalendarPage() {
  return <CalendarView />;
}