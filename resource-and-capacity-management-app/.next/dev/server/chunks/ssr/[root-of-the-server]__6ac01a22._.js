module.exports = [
"[project]/resource-and-capacity-management-app/app/favicon.ico.mjs { IMAGE => \"[project]/resource-and-capacity-management-app/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/resource-and-capacity-management-app/app/favicon.ico.mjs { IMAGE => \"[project]/resource-and-capacity-management-app/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/resource-and-capacity-management-app/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/resource-and-capacity-management-app/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js [app-rsc] (ecmascript)"));
}),
"[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/@modal/default.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ---------------------------------------------------------
   DEFAULT MODAL FALLBACK
   ---------------------------------------------------------
   PURPOSE:
   - Serves as the default renderer for the @modal parallel
     route segment when no modal is active.

   HOW IT WORKS:
   - Next.js injects a `modal` component into the layout only
     when a modal route (e.g., Create Resource, Edit Resource)
     is being rendered.
   - When no modal route is active, this component is used as
     the fallback for the @modal slot.

   DESIGN NOTES:
   - Prevents Next.js from throwing errors about a missing
     default route for the parallel segment.
   - Ensures the layout always has a valid React node.
   - Returns children unchanged:
       • No wrappers
       • No styling
       • No layout interference
   - Keeps modal behavior predictable and isolated.
--------------------------------------------------------- */ __turbopack_context__.s([
    "default",
    ()=>DefaultModal
]);
function DefaultModal({ children }) {
    return children;
}
}),
"[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/@modal/default.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/@modal/default.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6ac01a22._.js.map