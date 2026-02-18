module.exports = [
"[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/layout.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ---------------------------------------------------------
   LAYOUT: create_edit_Resources
   ---------------------------------------------------------
   PURPOSE:
   - Manages two parallel route segments in Next.js:
       • children → main Resources page
       • modal    → @modal parallel route slot

   HOW IT WORKS:
   - When a modal route is active (Create / Edit Resource),
     Next.js injects the modal component into the `modal` prop.
   - The main page always stays rendered underneath.
   - The modal overlays the page without replacing it.
   - Navigation between modal and page feels seamless.

   DESIGN NOTES:
   - No wrappers or containers are added here.
   - Prevents interference with:
       • z-index stacking
       • pointer events
       • scroll behavior
--------------------------------------------------------- */ __turbopack_context__.s([
    "default",
    ()=>Layout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function Layout({ children, modal }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            children,
            "   ",
            modal,
            "      "
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=47f57_pacity-management-app_app_Resource-Manager_create_edit_Resources_layout_5e958771.js.map