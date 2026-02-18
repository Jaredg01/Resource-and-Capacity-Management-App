(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CalendarViewPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const styles = {
    outfitFont: {
        fontFamily: 'Outfit, sans-serif'
    }
};
/* ---------------------------------------------------------
   MONTH → LINEAR INDEX CONVERSION
   ---------------------------------------------------------
   PURPOSE:
   - Converts YYYYMM into a continuous numeric index
   - Enables adjacency checks for contiguous month selection
   - Example: 202501 → (2025 * 12 + 1)
--------------------------------------------------------- */ const monthToIndex = (yyyymm)=>{
    const year = Math.floor(yyyymm / 100);
    const month = yyyymm % 100;
    return year * 12 + month;
};
function CalendarViewPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    /* -------------------------------------------------------
     STATE MANAGEMENT
     -------------------------------------------------------
     PURPOSE:
     - user: logged‑in user info
     - availableMonths: months returned from API
     - selectedMonths: enforced contiguous selection
     - activitiesByMonth: API‑returned activity lists
     - filterMode: "all" or "mine"
     - showSelector: toggles month dropdown
     - shake: triggers invalid‑selection animation
     - loading flags: control initial loading states
  ------------------------------------------------------- */ const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [availableMonths, setAvailableMonths] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedMonths, setSelectedMonths] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activitiesByMonth, setActivitiesByMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filterMode, setFilterMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [showSelector, setShowSelector] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shake, setShake] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingUser, setLoadingUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadingMonths, setLoadingMonths] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadingCalendar, setLoadingCalendar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    /* -------------------------------------------------------
     LOAD USER FROM LOCAL STORAGE
     -------------------------------------------------------
     PURPOSE:
     - Redirects to login if no user is stored
     - Sets user state for filtering + display
  ------------------------------------------------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CalendarViewPage.useEffect": ()=>{
            const userData = localStorage.getItem('user');
            if (!userData) {
                router.push('/Resource-Manager/Profile/login');
                return;
            }
            setUser(JSON.parse(userData));
            setLoadingUser(false);
        }
    }["CalendarViewPage.useEffect"], [
        router
    ]);
    /* -------------------------------------------------------
     LOAD AVAILABLE MONTHS
     -------------------------------------------------------
     PURPOSE:
     - Fetches last 12 months from API
     - Auto-selects the most recent month
  ------------------------------------------------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CalendarViewPage.useEffect": ()=>{
            async function loadMonths() {
                try {
                    const res = await fetch('/api/Resource-Manager/calendar-view');
                    const data = await res.json();
                    if (!data.success) throw new Error('Failed to load months');
                    const formatted = data.formatted || [];
                    setAvailableMonths(formatted);
                    // Auto-select latest month
                    if (formatted.length > 0) {
                        const latest = formatted[formatted.length - 1].yyyymm;
                        setSelectedMonths([
                            latest
                        ]);
                    }
                } catch (err) {
                    console.error('Error loading months:', err);
                } finally{
                    setLoadingMonths(false);
                }
            }
            loadMonths();
        }
    }["CalendarViewPage.useEffect"], []);
    /* -------------------------------------------------------
     LOAD ACTIVITIES FOR SELECTED MONTHS
     -------------------------------------------------------
     PURPOSE:
     - Fetches activities for selected contiguous months
     - Applies "mine" filter if enabled
     - Sorts results chronologically
  ------------------------------------------------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CalendarViewPage.useEffect": ()=>{
            if (!user || selectedMonths.length === 0) {
                setActivitiesByMonth([]);
                return;
            }
            async function loadCalendar() {
                setLoadingCalendar(true);
                try {
                    const res_0 = await fetch('/api/Resource-Manager/calendar-view', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            months: selectedMonths,
                            ...filterMode === 'mine' ? {
                                emp_id: user.emp_id
                            } : {}
                        })
                    });
                    const data_0 = await res_0.json();
                    if (!data_0.success) throw new Error('Failed to load activities');
                    // Ensure chronological order
                    const sorted = (data_0.activitiesByMonth || []).slice().sort({
                        "CalendarViewPage.useEffect.loadCalendar.sorted": (a, b)=>a.yyyymm - b.yyyymm
                    }["CalendarViewPage.useEffect.loadCalendar.sorted"]);
                    setActivitiesByMonth(sorted);
                } catch (err_0) {
                    console.error('Error loading activities:', err_0);
                } finally{
                    setLoadingCalendar(false);
                }
            }
            loadCalendar();
        }
    }["CalendarViewPage.useEffect"], [
        selectedMonths,
        filterMode,
        user
    ]);
    /* -------------------------------------------------------
     AUTO-CLOSE MONTH SELECTOR
     -------------------------------------------------------
     PURPOSE:
     - If user clears all months (rare), close dropdown
  ------------------------------------------------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CalendarViewPage.useEffect": ()=>{
            if (selectedMonths.length === 0 && showSelector) {
                setShowSelector(false);
            }
        }
    }["CalendarViewPage.useEffect"], [
        selectedMonths,
        showSelector
    ]);
    /* -------------------------------------------------------
     SHAKE ANIMATION TRIGGER
     -------------------------------------------------------
     PURPOSE:
     - Provides visual feedback for invalid month actions
  ------------------------------------------------------- */ const triggerShake = ()=>{
        setShake(true);
        setTimeout(()=>setShake(false), 150);
    };
    /* -------------------------------------------------------
     CONTIGUOUS MONTH SELECTION LOGIC
     -------------------------------------------------------
     PURPOSE:
     - Enforces strict contiguous selection
     - Allows expansion only at edges
     - Prevents removing middle months
     - Resets selection on invalid jumps
     - Max selection: 3 months
  ------------------------------------------------------- */ const toggleMonth = (yyyymm)=>{
        const idx = monthToIndex(yyyymm);
        // First selection
        if (selectedMonths.length === 0) {
            setSelectedMonths([
                yyyymm
            ]);
            return;
        }
        const sorted_0 = [
            ...selectedMonths
        ].sort((a_0, b_0)=>a_0 - b_0);
        const first = sorted_0[0];
        const last = sorted_0[sorted_0.length - 1];
        const firstIdx = monthToIndex(first);
        const lastIdx = monthToIndex(last);
        const isSelected = selectedMonths.includes(yyyymm);
        /* -------------------------------
       REMOVING MONTHS
       -------------------------------
       Only allowed at edges.
    --------------------------------*/ if (isSelected) {
            if (yyyymm === first && selectedMonths.length > 1) {
                setSelectedMonths(sorted_0.slice(1));
                return;
            }
            if (yyyymm === last && selectedMonths.length > 1) {
                setSelectedMonths(sorted_0.slice(0, -1));
                return;
            }
            // Middle removal → invalid
            triggerShake();
            return;
        }
        /* -------------------------------
       ADDING MONTHS
       -------------------------------
       Must be adjacent to start or end.
    --------------------------------*/ const isAdjacentToStart = idx === firstIdx - 1;
        const isAdjacentToEnd = idx === lastIdx + 1;
        if (!isAdjacentToStart && !isAdjacentToEnd) {
            // Non-adjacent → reset selection
            setSelectedMonths([
                yyyymm
            ]);
            return;
        }
        // Max 3 months allowed
        if (selectedMonths.length === 3) {
            setSelectedMonths([
                yyyymm
            ]);
            return;
        }
        // Valid expansion
        if (isAdjacentToStart) {
            setSelectedMonths([
                yyyymm,
                ...sorted_0
            ]);
            return;
        }
        if (isAdjacentToEnd) {
            setSelectedMonths([
                ...sorted_0,
                yyyymm
            ]);
            return;
        }
    };
    /* -------------------------------------------------------
     APPLY FILTERS
     -------------------------------------------------------
     PURPOSE:
     - Closes selector panel after applying filters
  ------------------------------------------------------- */ const applyFilters = ()=>{
        setShowSelector(false);
    };
    /* -------------------------------------------------------
     GROUP ACTIVITIES BY CATEGORY
     -------------------------------------------------------
     PURPOSE:
     - Organizes activities into category buckets
     - Supports Baseline, Strategic, Discretionary, Vacation
     - Used by frontend to render category sections
  ------------------------------------------------------- */ const groupByCategory = (activities)=>{
        const groups = {
            Baseline: [],
            Strategic: [],
            Discretionary: [],
            Vacation: []
        };
        activities.forEach((a_1)=>{
            const cat = a_1.category || 'Other';
            if (!groups[cat]) groups[cat] = [];
            groups[cat].push(a_1.activity);
        });
        return groups;
    };
    /* -------------------------------------------------------
     LOADING STATE
     -------------------------------------------------------
     PURPOSE:
     - Shows spinner until all data is ready
  ------------------------------------------------------- */ if (loadingUser || loadingMonths || loadingCalendar) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-12 w-12 border-b-2 border-black"
            }, void 0, false, {
                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                lineNumber: 280,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
            lineNumber: 279,
            columnNumber: 12
        }, this);
    }
    /* -------------------------------------------------------
     GRID LAYOUT CALCULATIONS
     -------------------------------------------------------
     PURPOSE:
     - Adjusts calendar width + columns based on selection
  ------------------------------------------------------- */ const gridCols = selectedMonths.length === 1 ? 'grid-cols-1' : selectedMonths.length === 2 ? 'grid-cols-2' : 'grid-cols-3';
    const gridWidth = selectedMonths.length === 3 ? 'max-w-[95%]' : 'max-w-[70%]';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-[#017ACB] shadow-sm w-full relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 sm:px-6 lg:px-8 w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex items-center h-[clamp(4.5rem,5vw,5.5rem)] w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center cursor-pointer flex-none",
                                onClick: ()=>router.push('/Resource-Manager/dashboard'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/CapstoneDynamicsLogo.png",
                                        alt: "Logo",
                                        className: "w-auto h-[clamp(3.2rem,3.8vw,4rem)]"
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                        lineNumber: 309,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "font-bold text-white leading-tight ml-4 text-[clamp(1.6rem,1.7vw,2rem)]",
                                        style: styles.outfitFont,
                                        children: "Capstone Dynamics"
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                        lineNumber: 310,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                lineNumber: 308,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-1/2 -translate-x-1/2 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-bold text-white leading-tight text-[clamp(1.2rem,1.3vw,1.6rem)]",
                                    style: styles.outfitFont,
                                    children: "Resource & Capacity Management Planner"
                                }, void 0, false, {
                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                    lineNumber: 317,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                lineNumber: 316,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 ml-auto flex-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-white text-[clamp(1rem,1.15vw,1.25rem)]",
                                        style: styles.outfitFont,
                                        children: user?.username
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>router.push('/Resource-Manager/Profile/view-profile'),
                                        className: "rounded-full bg-white flex items-center justify-center cursor-pointer hover:opacity-90 transition   w-[clamp(2.4rem,2.8vw,3.0rem)] h-[clamp(2.4rem,2.8vw,3.0rem)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#017ACB] font-bold text-[clamp(1.1rem,1.3vw,1.5rem)]",
                                            children: user?.username?.charAt(0)?.toUpperCase()
                                        }, void 0, false, {
                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                            lineNumber: 330,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                        lineNumber: 328,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                lineNumber: 323,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                        lineNumber: 305,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                    lineNumber: 304,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                lineNumber: 303,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold text-black",
                                    style: styles.outfitFont,
                                    children: "Calendar View"
                                }, void 0, false, {
                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                    lineNumber: 358,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>router.push('/Resource-Manager/dashboard'),
                                    className: "px-4 py-2 rounded text-sm bg-white text-black border hover:bg-gray-100 transition",
                                    style: styles.outfitFont,
                                    children: "Back to Dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                    lineNumber: 362,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                            lineNumber: 357,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                        lineNumber: 356,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex justify-center w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "monthGrid",
                                className: `
              relative
              grid ${gridCols}
              ${gridWidth}
              min-w-[700px]
              gap-0
              border border-black
              rounded-lg
              bg-white
              shadow
            `,
                                children: activitiesByMonth.map((month, index)=>{
                                    // Group activities into Baseline / Strategic / Discretionary / Vacation
                                    const groups_0 = groupByCategory(month.activities || []);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex flex-col border-black ${index > 0 ? 'border-l' : ''}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-6 py-3 border-b border-black bg-white relative flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-2xl font-bold text-black",
                                                        style: styles.outfitFont,
                                                        children: month.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                                        lineNumber: 409,
                                                        columnNumber: 21
                                                    }, this),
                                                    index === activitiesByMonth.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `
                          absolute
                          right-2.5
                          text-black text-4xl font-normal cursor-pointer select-none
                          ${selectedMonths.length === 0 ? 'opacity-40 cursor-default' : ''}
                        `,
                                                        style: {
                                                            transform: showSelector && selectedMonths.length > 0 ? 'rotate(90deg)' : 'rotate(-90deg)',
                                                            transition: 'transform 0.2s ease'
                                                        },
                                                        onClick: ()=>{
                                                            if (selectedMonths.length === 0) return;
                                                            setShowSelector((prev)=>!prev);
                                                        },
                                                        children: '<'
                                                    }, void 0, false, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                                        lineNumber: 414,
                                                        columnNumber: 64
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                                lineNumber: 408,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6",
                                                children: month.activities.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-black italic text-center",
                                                    style: styles.outfitFont,
                                                    children: "No activities this month"
                                                }, void 0, false, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                                    lineNumber: 439,
                                                    columnNumber: 54
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-6",
                                                    children: [
                                                        'Baseline',
                                                        'Strategic',
                                                        'Discretionary',
                                                        'Vacation'
                                                    ].map((cat_0)=>{
                                                        const items = groups_0[cat_0] || [];
                                                        if (items.length === 0) return null; // Skip empty categories
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-bold text-lg text-black mb-2",
                                                                    style: styles.outfitFont,
                                                                    children: cat_0
                                                                }, void 0, false, {
                                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                                                    lineNumber: 449,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "list-disc pl-6 space-y-1 text-black",
                                                                    children: items.map((act, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "text-md",
                                                                            style: styles.outfitFont,
                                                                            children: act
                                                                        }, i, false, {
                                                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                                                            lineNumber: 455,
                                                                            columnNumber: 58
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                                                    lineNumber: 454,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, cat_0, true, {
                                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                                            lineNumber: 447,
                                                            columnNumber: 28
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                                    lineNumber: 441,
                                                    columnNumber: 30
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                                lineNumber: 438,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, month.yyyymm, true, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                        lineNumber: 399,
                                        columnNumber: 20
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                lineNumber: 385,
                                columnNumber: 11
                            }, this),
                            showSelector && selectedMonths.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `
                absolute top-0 w-md border border-black rounded-lg bg-white shadow p-4 z-9999
                min-h-96
                ${shake ? 'animate-[shake_0.15s_ease-in-out]' : ''}
              `,
                                style: {
                                    left: 'calc(50% + 380px)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                                        children: `
                  @keyframes shake {
                    0% { transform: translateX(0); }
                    25% { transform: translateX(-3px); }
                    50% { transform: translateX(3px); }
                    75% { transform: translateX(-3px); }
                    100% { transform: translateX(0); }
                  }
                `
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                        lineNumber: 485,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-semibold mb-2 text-black",
                                                        style: styles.outfitFont,
                                                        children: "Months"
                                                    }, void 0, false, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                                        lineNumber: 507,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-2 pr-1 mb-3",
                                                        children: availableMonths.map((m)=>{
                                                            const isSelected_0 = selectedMonths.includes(m.yyyymm);
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "flex items-center gap-2 text-black text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "checkbox",
                                                                        checked: isSelected_0,
                                                                        onChange: ()=>toggleMonth(m.yyyymm)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                                                        lineNumber: 515,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    m.label
                                                                ]
                                                            }, m.yyyymm, true, {
                                                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                                                lineNumber: 514,
                                                                columnNumber: 26
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                                        lineNumber: 511,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                                lineNumber: 506,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-36 flex flex-col justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-semibold mb-2 text-black",
                                                                style: styles.outfitFont,
                                                                children: "View"
                                                            }, void 0, false, {
                                                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                                                lineNumber: 532,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col gap-2 mb-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: `px-3 py-2 rounded border text-sm ${filterMode === 'all' ? 'bg-black text-white' : 'bg-white text-black'}`,
                                                                        onClick: ()=>setFilterMode('all'),
                                                                        children: "All"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                                                        lineNumber: 538,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: `px-3 py-2 rounded border text-sm ${filterMode === 'mine' ? 'bg-black text-white' : 'bg-white text-black'}`,
                                                                        onClick: ()=>setFilterMode('mine'),
                                                                        children: "Just Mine"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                                                        lineNumber: 542,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                                                lineNumber: 537,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                                        lineNumber: 531,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: applyFilters,
                                                        className: "w-full bg-[#017ACB] text-white py-2 rounded font-semibold text-sm",
                                                        style: styles.outfitFont,
                                                        children: "Apply"
                                                    }, void 0, false, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                                        lineNumber: 549,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                                lineNumber: 529,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                        lineNumber: 497,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                                lineNumber: 476,
                                columnNumber: 57
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                        lineNumber: 375,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
                lineNumber: 347,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/calendar_view/page.js",
        lineNumber: 292,
        columnNumber: 10
    }, this);
}
_s(CalendarViewPage, "10lj1vNSt99HLg3Oh7G0IQrmG4c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CalendarViewPage;
var _c;
__turbopack_context__.k.register(_c, "CalendarViewPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/resource-and-capacity-management-app/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/resource-and-capacity-management-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/resource-and-capacity-management-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/resource-and-capacity-management-app/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/resource-and-capacity-management-app/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/resource-and-capacity-management-app/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=resource-and-capacity-management-app_84463281._.js.map