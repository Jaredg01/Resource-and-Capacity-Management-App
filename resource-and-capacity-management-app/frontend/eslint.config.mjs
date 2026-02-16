/* ---------------------------------------------------------
   ESLINT CONFIGURATION (NEXT.JS + SECURITY NOTES)
   ---------------------------------------------------------
   • Extends Next.js Core Web Vitals rules for performance
   • Applies strict linting to prevent unsafe patterns
   • Overrides default ignores to ensure full project scanning
   • Adds security‑aware exceptions for MongoDB playground files
--------------------------------------------------------- */

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  /* -------------------------------------------------------
     BASE CONFIG: NEXT.JS CORE WEB VITALS
     -------------------------------------------------------
     • Enforces accessibility, performance, and React best practices
     • Helps prevent unsafe lifecycle patterns and bad async usage
  ------------------------------------------------------- */
  ...nextVitals,

  /* -------------------------------------------------------
     GLOBAL IGNORES (OVERRIDING NEXT DEFAULTS)
     -------------------------------------------------------
     • Ensures ESLint does NOT skip critical build folders
     • Prevents accidental linting of generated artifacts
     • Keeps linting focused on source code only
  ------------------------------------------------------- */
  globalIgnores([
    ".next/**",        // Next.js build output
    "out/**",          // Static export output
    "build/**",        // Custom build folder
    "next-env.d.ts",   // Auto‑generated Next.js type definitions
  ]),

  /* -------------------------------------------------------
     SECURITY: DISABLE HOOK RULES FOR MONGODB PLAYGROUND FILES
     -------------------------------------------------------
     • MongoDB playground scripts are NOT React components
     • React Hooks rules would incorrectly flag them
     • Restricting this override to *.mongodb.js prevents
       accidental disabling of hook rules elsewhere
  ------------------------------------------------------- */
  {
    files: ["*.mongodb.js"],
    rules: {
      "react-hooks/rules-of-hooks": "off", // Safe exception for non‑React scripts
    },
  },
]);

export default eslintConfig;