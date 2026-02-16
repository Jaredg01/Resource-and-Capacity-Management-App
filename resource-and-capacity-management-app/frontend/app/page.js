// -------------------------------------------------------------
// ROOT ROUTE REDIRECT (SERVER-SIDE)
// -------------------------------------------------------------
// • Ensures users never land on "/" directly
// • Centralizes the entry point into the authentication flow
// • Keeps routing predictable and avoids exposing unused routes
// -------------------------------------------------------------

import { redirect } from "next/navigation";

export default function Home() {

  // ---------------------------------------------------------
  // SERVER-SIDE REDIRECT
  // ---------------------------------------------------------
  // • This component runs on the server (Next.js Server Component)
  // • No client-side state (localStorage, cookies) is accessed here
  // • Redirects immediately to the login page for a clean UX
  // ---------------------------------------------------------

  redirect("/login");
}