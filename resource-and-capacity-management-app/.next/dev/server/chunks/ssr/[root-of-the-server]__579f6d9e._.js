module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/resource-and-capacity-management-app/app/Resource-Manager/dashboard/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const styles = {
    outfitFont: {
        fontFamily: 'Outfit, sans-serif'
    }
};
function DashboardPage() {
    /* ---------------------------------------------------------
     USER SESSION STATE
     ---------------------------------------------------------
     PURPOSE:
     - Stores logged-in user object
     - Used for greeting, filtering, and profile navigation
  --------------------------------------------------------- */ const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    /* ---------------------------------------------------------
     SUMMARY STATE
     ---------------------------------------------------------
     PURPOSE:
     - filter → "all" or "mine"
     - summary → counts for active, hold, backlog initiatives
     - Used to populate summary cards
  --------------------------------------------------------- */ const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [summary, setSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        active: 0,
        hold: 0,
        backlog: 0
    });
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    /* ---------------------------------------------------------
     LOAD USER SESSION
     ---------------------------------------------------------
     PURPOSE:
     - Retrieves user from localStorage
     - Redirects to login if no session exists
  --------------------------------------------------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const userData = localStorage.getItem('user');
        if (!userData) {
            router.push('/Profile/login');
            return;
        }
        setUser(JSON.parse(userData));
    }, [
        router
    ]);
    /* ---------------------------------------------------------
     FETCH SUMMARY COUNTS
     ---------------------------------------------------------
     PURPOSE:
     - Loads initiative summary counts based on filter
     - If filter = "mine", includes username in API request
     - Updates summary cards dynamically
  --------------------------------------------------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!user) return;
        const fetchSummary = async ()=>{
            try {
                let url = `/api/Resource-Manager/summary?filter=${filter}`;
                // Add username when viewing "mine"
                if (filter === "mine") {
                    url += `&username=${encodeURIComponent(user.username)}`;
                }
                const res = await fetch(url);
                const data = await res.json();
                setSummary({
                    active: data.active,
                    hold: data.hold,
                    backlog: data.backlog
                });
            } catch (err) {
                console.error("Summary fetch error:", err);
            }
        };
        fetchSummary();
    }, [
        filter,
        user
    ]);
    /* ---------------------------------------------------------
     LOADING STATE
     ---------------------------------------------------------
     PURPOSE:
     - Prevents UI from rendering before user session loads
     - Shows spinner for smoother UX
  --------------------------------------------------------- */ if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
            }, void 0, false, {
                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/dashboard/page.js",
                lineNumber: 104,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/dashboard/page.js",
            lineNumber: 103,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-[#017ACB] shadow-sm w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 sm:px-6 lg:px-8 w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex items-center h-[clamp(4.5rem,5vw,5.5rem)] w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center flex-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/CapstoneDynamicsLogo.png",
                                        alt: "Logo",
                                        className: "w-auto h-[clamp(3.2rem,3.8vw,4.0rem)]"
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/dashboard/page.js",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "font-bold text-white leading-tight ml-4 text-[clamp(1.6rem,1.7vw,2rem)]",
                                        style: styles.outfitFont,
                                        children: "Capstone Dynamics"
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/dashboard/page.js",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/dashboard/page.js",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-1/2 -translate-x-1/2 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-bold text-white leading-tight text-[clamp(1.2rem,1.3vw,1.6rem)]",
                                    style: styles.outfitFont,
                                    children: "Resource & Capacity Management Planner"
                                }, void 0, false, {
                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/dashboard/page.js",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/dashboard/page.js",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 ml-auto flex-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-white text-[clamp(1rem,1.15vw,1.25rem)]",
                                        style: styles.outfitFont,
                                        children: user.username
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/dashboard/page.js",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/Resource-Manager/Profile/view-profile",
                                        className: "rounded-full bg-white flex items-center justify-center overflow-hidden hover:opacity-90 transition cursor-pointer   w-[clamp(2.4rem,2.8vw,3.0rem)] h-[clamp(2.4rem,2.8vw,3.0rem)]",
                                        title: "View Profile",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#017ACB] font-bold text-[clamp(1.1rem,1.3vw,1.5rem)]",
                                            children: user.username.charAt(0).toUpperCase()
                                        }, void 0, false, {
                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/dashboard/page.js",
                                            lineNumber: 165,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/dashboard/page.js",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/dashboard/page.js",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/dashboard/page.js",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/dashboard/page.js",
                    lineNumber: 121,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/dashboard/page.js",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "w-full px-4 sm:px-6 lg:px-12 pt-[clamp(0.8rem,1.5vw,2rem)] pb-[clamp(1.5rem,3vw,3rem)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-[clamp(1.4rem,1.8vw,2.2rem)] text-gray-900 mb-[clamp(0.6rem,1vw,1.2rem)]",
                        style: styles.outfitFont,
                        children: [
                            "Welcome back, ",
                            user.username
                        ]
                    }, void 0, true, {
                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/dashboard/page.js",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 mb-[clamp(0.6rem,1vw,1.2rem)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setFilter("all"),
                                className: `px-[clamp(0.4rem,0.6vw,0.8rem)]
                        py-[clamp(0.2rem,0.4vw,0.6rem)]
                        w-[clamp(3.5rem,4.5vw,5.5rem)]
                        border text-center cursor-pointer rounded
                        text-[clamp(0.9rem,1vw,1.1rem)]
                        ${filter === "all" ? "bg-[#017ACB] text-white" : "text-gray-600"}`,
                                style: styles.outfitFont,
                                children: "All"
                            }, void 0, false, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/dashboard/page.js",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setFilter("mine"),
                                className: `px-[clamp(0.4rem,0.6vw,0.8rem)]
                        py-[clamp(0.2rem,0.4vw,0.6rem)]
                        w-[clamp(3.5rem,4.5vw,5.5rem)]
                        border text-center cursor-pointer rounded
                        text-[clamp(0.9rem,1vw,1.1rem)]
                        ${filter === "mine" ? "bg-[#017ACB] text-white" : "text-gray-600"}`,
                                style: styles.outfitFont,
                                children: "Mine"
                            }, void 0, false, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/dashboard/page.js",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/dashboard/page.js",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 gap-[clamp(1rem,2vw,2.5rem)] mb-[clamp(1.5rem,2vw,2.5rem)] w-full",
                        children: [
                            {
                                label: 'Active Initiatives',
                                icon: '✅',
                                value: summary.active
                            },
                            {
                                label: 'Initiatives on Hold',
                                icon: '⏸️',
                                value: summary.hold
                            },
                            {
                                label: 'Initiatives in Back Log',
                                icon: '📅',
                                value: summary.backlog
                            }
                        ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-lg shadow-sm border border-gray-200 p-[clamp(1rem,1.5vw,2rem)] transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 text-[clamp(0.8rem,0.9vw,1rem)] text-right",
                                        style: styles.outfitFont,
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/dashboard/page.js",
                                        lineNumber: 243,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-[clamp(1.1rem,1.3vw,1.5rem)] font-semibold text-gray-900 mb-2",
                                        style: styles.outfitFont,
                                        children: [
                                            item.icon,
                                            " ",
                                            item.value
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/dashboard/page.js",
                                        lineNumber: 246,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/dashboard/page.js",
                                lineNumber: 242,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/dashboard/page.js",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 gap-[clamp(1rem,2vw,2.5rem)] w-full",
                        children: [
                            {
                                label: 'Capacity Summary',
                                icon: '📊',
                                href: '/Resource-Manager/capacity_summary'
                            },
                            {
                                label: 'Resources',
                                icon: '👥',
                                href: '/Resource-Manager/create_edit_Resources'
                            },
                            {
                                label: 'Initiatives',
                                icon: '🎯',
                                href: '/Resource-Manager/create_edit_Initiatives'
                            },
                            {
                                label: 'Assignments',
                                icon: '📋',
                                href: null
                            },
                            {
                                label: 'Calendar',
                                icon: '📅',
                                href: '/Resource-Manager/calendar_view'
                            },
                            {
                                label: 'Report',
                                icon: '📈',
                                href: null
                            }
                        ].map((tile, i)=>{
                            const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-lg shadow-sm border text-center border-gray-200 p-[clamp(1rem,1.5vw,2rem)] hover:shadow-md hover:border-gray-500 cursor-pointer transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[clamp(2rem,2.5vw,3rem)] mb-2 text-gray-700",
                                        children: tile.icon
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/dashboard/page.js",
                                        lineNumber: 272,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-[clamp(1rem,1.2vw,1.4rem)] font-semibold text-gray-900 mb-2",
                                        style: styles.outfitFont,
                                        children: tile.label
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/dashboard/page.js",
                                        lineNumber: 273,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/dashboard/page.js",
                                lineNumber: 271,
                                columnNumber: 15
                            }, this);
                            return tile.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: tile.href,
                                children: content
                            }, i, false, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/dashboard/page.js",
                                lineNumber: 280,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: content
                            }, i, false, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/dashboard/page.js",
                                lineNumber: 282,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/dashboard/page.js",
                        lineNumber: 260,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/dashboard/page.js",
                lineNumber: 184,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/dashboard/page.js",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__579f6d9e._.js.map