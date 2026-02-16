/* ---------------------------------------------------------
   POSTCSS CONFIGURATION (TAILWIND + NEXT.JS)
   ---------------------------------------------------------
   • Loads PostCSS plugins used during the build pipeline
   • TailwindCSS is injected through @tailwindcss/postcss
   • Ensures consistent styling across all components
   • No runtime impact — build‑time only
--------------------------------------------------------- */

const config = {
  plugins: {
    /* -----------------------------------------------------
       TAILWINDCSS POSTCSS PLUGIN
       -----------------------------------------------------
       • Enables Tailwind’s utility‑first CSS engine
       • Processes @tailwind directives inside global CSS
       • Required for Tailwind v4+ integration with Next.js
    ----------------------------------------------------- */
    "@tailwindcss/postcss": {},
  },
};

export default config;