/* ---------------------------------------------------------
   AXIOS API CLIENT (CENTRALIZED HTTP CONFIG)
   ---------------------------------------------------------
   • Creates a single Axios instance for all API requests
   • Injects authentication tokens into outbound requests
   • Ensures consistent base URL and credential handling
--------------------------------------------------------- */

import axios from "axios";

/* ---------------------------------------------------------
   AXIOS INSTANCE CONFIGURATION
   ---------------------------------------------------------
   • baseURL is loaded from environment variables
   • withCredentials enables cookie-based auth if used
   • Centralizes all HTTP behavior for maintainability
--------------------------------------------------------- */
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true, // Allows cookies (if backend uses them)
});

/* ---------------------------------------------------------
   REQUEST INTERCEPTOR (AUTH TOKEN INJECTION)
   ---------------------------------------------------------
   • Automatically attaches JWT token to every request
   • Prevents duplicated token logic across the codebase
   • Ensures secure Authorization header formatting
--------------------------------------------------------- */
api.interceptors.request.use((config) => {
  // Retrieve JWT token from localStorage (client-side only)
  const token = localStorage.getItem("token");

  if (token) {
    // Attach Bearer token to Authorization header
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

/* ---------------------------------------------------------
   EXPORT API CLIENT
   ---------------------------------------------------------
   • Used throughout the app for all HTTP requests
   • Ensures consistent security and request behavior
--------------------------------------------------------- */
export default api;