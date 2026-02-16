/* ---------------------------------------------------------
   USER SESSION STORAGE UTILITIES
   ---------------------------------------------------------
   • Provides a centralized, consistent API for managing
     user session data in localStorage
   • Ensures all user-related storage operations are isolated
     to prevent duplication or inconsistent handling
   • Includes defensive checks to avoid runtime errors
--------------------------------------------------------- */

/**
 * Save the authenticated user object to localStorage.
 * -----------------------------------------------------
 * SECURITY NOTES:
 * • Only non-sensitive user profile data should be stored.
 * • Never store passwords, tokens, or privileged secrets here.
 * • JWT tokens must be stored separately (or in secure cookies).
 */
export function saveUser(user) {
  try {
    localStorage.setItem("user", JSON.stringify(user));
  } catch (err) {
    console.error("Failed to save user to localStorage:", err);
  }
}

/**
 * Retrieve the stored user object from localStorage.
 * -----------------------------------------------------
 * SECURITY NOTES:
 * • Returns null if no user is stored or if parsing fails.
 * • Prevents the app from crashing due to malformed data.
 * • Always validate the returned user before trusting it.
 */
export function getUser() {
  try {
    const data = localStorage.getItem("user");
    return data ? JSON.parse(data) : null;
  } catch (err) {
    console.error("Failed to parse user from localStorage:", err);
    return null;
  }
}

/**
 * Clear the stored user session from localStorage.
 * -----------------------------------------------------
 * SECURITY NOTES:
 * • Used during logout or session invalidation.
 * • Ensures stale or corrupted user data is removed.
 * • Should be paired with token removal for full logout.
 */
export function clearUser() {
  try {
    localStorage.removeItem("user");
  } catch (err) {
    console.error("Failed to clear user from localStorage:", err);
  }
}