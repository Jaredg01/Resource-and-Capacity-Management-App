"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function HeaderWrapper() {
  const pathname = usePathname();

  /* ---------------------------------------------------------
     SECURITY: ROUTE‑BASED HEADER VISIBILITY
     ---------------------------------------------------------
     • Prevents header from appearing on authentication pages
     • Avoids exposing navigation UI before login
     • Uses strict prefix matching to avoid false positives
     • Defensive: ensures pathname is always a valid string
  --------------------------------------------------------- */
  const hideHeaderRoutes = [
    "/login",
    "/forgot-password",
    "/reset-password",
  ];

  // Defensive: fallback to empty string if pathname is null
  const safePath = typeof pathname === "string" ? pathname : "";

  const shouldHideHeader = hideHeaderRoutes.some((route) =>
    safePath.startsWith(route)
  );

  /* ---------------------------------------------------------
     FINAL RENDER
     ---------------------------------------------------------
     • Renders global Header unless route is auth-related
     • Keeps UI clean and prevents unauthorized navigation
  --------------------------------------------------------- */
  return !shouldHideHeader ? <Header /> : null;
}