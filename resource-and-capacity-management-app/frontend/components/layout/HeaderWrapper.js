"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function HeaderWrapper() {
  const pathname = usePathname();

  const hideHeaderRoutes = [
    "/login",
    "/forgot-password",
    "/reset-password",
  ];

  const shouldHideHeader = hideHeaderRoutes.some((route) =>
    pathname.startsWith(route)
  );

  return !shouldHideHeader ? <Header /> : null;
}