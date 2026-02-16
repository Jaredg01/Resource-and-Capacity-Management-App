/* ---------------------------------------------------------
   DEFAULT MODAL FALLBACK (PARALLEL ROUTES)
   ---------------------------------------------------------
   PURPOSE:
   • Required by Next.js when using a parallel route segment
     named @modal.
   • This component renders when NO modal is active.
   • Prevents Next.js from throwing a missing-slot error.

   DESIGN NOTES:
   • Must return children directly.
   • No wrappers or containers — avoids interfering with:
       - z-index stacking
       - modal overlay behavior
       - pointer events
       - scroll locking
--------------------------------------------------------- */
export default function DefaultModal({ children }) {
  return children;
}