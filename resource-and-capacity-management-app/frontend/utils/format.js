/* ---------------------------------------------------------
   DATA FORMATTING UTILITIES
   ---------------------------------------------------------
   • Centralizes common formatting helpers used across the app
   • Ensures consistent display of percentages and dates
   • Keeps UI components clean by removing inline formatting logic
--------------------------------------------------------- */

/**
 * Format a numeric value as a percentage string.
 * -----------------------------------------------------
 * SECURITY / SAFETY NOTES:
 * • Assumes the input is already sanitized and numeric.
 * • Avoid passing user-controlled raw strings without validation.
 * • UI-only helper — should never be used for calculations.
 */
export function formatPercent(value) {
  return `${value}%`;
}

/**
 * Convert a date value into a localized date string.
 * -----------------------------------------------------
 * SECURITY / SAFETY NOTES:
 * • Accepts Date objects, timestamps, or ISO strings.
 * • Invalid dates will produce "Invalid Date" — caller should validate.
 * • Safe for UI display; does not modify or store sensitive data.
 */
export function formatDate(date) {
  return new Date(date).toLocaleDateString();
}