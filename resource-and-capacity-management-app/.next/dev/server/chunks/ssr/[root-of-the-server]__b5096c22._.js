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
"[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InitiativesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const styles = {
    outfitFont: {
        fontFamily: 'Outfit, sans-serif'
    }
};
function InitiativesPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const refresh = searchParams.get("refresh"); // Forces data reload after closing Add/Edit modals
    /* ---------------------------------------------------------
     STATE MANAGEMENT
     ---------------------------------------------------------
     PURPOSE:
     - Stores user session data
     - Tracks active tab selection
     - Holds full initiative dataset, user-specific dataset,
       and the final filtered dataset
     - Manages all multi-select filter states
     - Controls sorting and dropdown visibility
     - Stores absolute positioning for dropdown menus
  --------------------------------------------------------- */ const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null); // Logged-in user object
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all'); // all | mine | completed
    const [initiatives, setInitiatives] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]); // All initiatives from DB
    const [mine, setMine] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]); // Initiatives assigned to logged-in user
    const [filteredInitiatives, setFilteredInitiatives] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]); // Final filtered dataset
    // Multi-select filter states
    const [selectedCategories, setSelectedCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]); // Category filter
    const [selectedStatuses, setSelectedStatuses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]); // Status filter
    const [selectedVPs, setSelectedVPs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]); // Requestor VP filter
    const [selectedDepts, setSelectedDepts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]); // Department filter
    const [selectedLeads, setSelectedLeads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]); // Lead filter
    // Sorting state
    const [projectSort, setProjectSort] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(''); // asc | desc | none
    const [showProjectSortMenu, setShowProjectSortMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // Sort dropdown visibility
    // Dropdown visibility toggles
    const [showCategoryMenu, setShowCategoryMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showStatusMenu, setShowStatusMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showVPMenu, setShowVPMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDeptMenu, setShowDeptMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showLeadMenu, setShowLeadMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Dropdown absolute positioning
    const [menuPosition, setMenuPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    // Unique dropdown option lists (extracted from DB)
    const [availableCategories, setAvailableCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [availableStatuses, setAvailableStatuses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [availableVPs, setAvailableVPs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [availableDepts, setAvailableDepts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [availableLeads, setAvailableLeads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    /* ---------------------------------------------------------
     LOAD USER SESSION
     ---------------------------------------------------------
     PURPOSE:
     - Retrieves user from localStorage
     - Redirects to login page if no session exists
  --------------------------------------------------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const userData = localStorage.getItem('user');
        if (!userData) {
            router.push('/Resource-Manager/Profile/login');
            return;
        }
        setUser(JSON.parse(userData));
    }, [
        router
    ]);
    /* ---------------------------------------------------------
     FETCH INITIATIVES
     ---------------------------------------------------------
     PURPOSE:
     - Loads all initiatives and user-specific initiatives
     - Normalizes DB fields into consistent frontend structure
     - Builds unique dropdown option lists
     - Ensures fresh data using timestamp + no-cache headers
  --------------------------------------------------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!user) return;
        const fetchInitiatives = async ()=>{
            try {
                const res = await fetch(`/api/Resource-Manager/Initiatives?username=${user.username}&ts=${Date.now()}`, {
                    cache: "no-store",
                    headers: {
                        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
                        Pragma: "no-cache",
                        Expires: "0"
                    }
                });
                const { allAssignments, myInitiatives } = await res.json();
                // Normalize DB fields → frontend structure
                const mapFields = (data)=>data.map((item)=>({
                            id: item._id,
                            project: item.project_name,
                            category: item.category,
                            lead: item.leader,
                            status: item.status,
                            requestor: item.requestor,
                            requestor_vp: item.requestor_vp,
                            requesting_dept: item.requesting_dept,
                            completion_date: item.completion_date,
                            target_period: item.target_period,
                            description: item.description,
                            resource_consideration: item.resource_notes
                        }));
                const mappedAll = mapFields(allAssignments);
                const mappedMine = mapFields(myInitiatives);
                setInitiatives(mappedAll);
                setMine(mappedMine);
                setFilteredInitiatives(mappedAll); // Default view = all initiatives
                // Build unique dropdown lists
                setAvailableCategories([
                    ...new Set(mappedAll.map((i)=>i.category).filter(Boolean))
                ]);
                setAvailableStatuses([
                    ...new Set(mappedAll.map((i)=>i.status).filter(Boolean))
                ]);
                setAvailableVPs([
                    ...new Set(mappedAll.map((i)=>i.requestor_vp).filter(Boolean))
                ]);
                setAvailableDepts([
                    ...new Set(mappedAll.map((i)=>i.requesting_dept).filter(Boolean))
                ]);
                setAvailableLeads([
                    ...new Set(mappedAll.map((i)=>i.lead).filter(Boolean))
                ]);
            } catch (err) {
                console.error("Initiatives fetch error:", err);
            }
        };
        fetchInitiatives();
    }, [
        user,
        refresh
    ]);
    /* ---------------------------------------------------------
     FILTERING + SORTING LOGIC
     ---------------------------------------------------------
     PURPOSE:
     - Applies tab filters (all, mine, completed)
     - Applies all multi-select filters
     - Applies alphabetical sorting on project name
     - Produces final filteredInitiatives dataset
  --------------------------------------------------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!user) return;
        // Base dataset depending on active tab
        let base = activeTab === 'mine' ? mine : activeTab === 'completed' ? initiatives.filter((i)=>i.status === 'Completed') : initiatives.filter((i)=>i.status !== 'Completed');
        // Apply multi-select filters
        let filtered = base.filter((i)=>(selectedCategories.length ? selectedCategories.includes(i.category) : true) && (selectedStatuses.length ? selectedStatuses.includes(i.status) : true) && (selectedVPs.length ? selectedVPs.includes(i.requestor_vp) : true) && (selectedDepts.length ? selectedDepts.includes(i.requesting_dept) : true) && (selectedLeads.length ? selectedLeads.includes(i.lead) : true));
        // Apply sorting
        if (projectSort === 'asc') {
            filtered = [
                ...filtered
            ].sort((a, b)=>a.project.localeCompare(b.project));
        } else if (projectSort === 'desc') {
            filtered = [
                ...filtered
            ].sort((a, b)=>b.project.localeCompare(a.project));
        }
        setFilteredInitiatives(filtered);
    }, [
        activeTab,
        initiatives,
        mine,
        user,
        selectedCategories,
        selectedStatuses,
        selectedVPs,
        selectedDepts,
        selectedLeads,
        projectSort
    ]);
    /* ---------------------------------------------------------
     TOGGLE HELPERS
     ---------------------------------------------------------
     PURPOSE:
     - Adds or removes a value from any multi‑select filter array
     - Used by all dropdown filter components
  --------------------------------------------------------- */ const toggleSelection = (value, setFn, current)=>{
        setFn(current.includes(value) ? current.filter((v)=>v !== value) : [
            ...current,
            value
        ]);
    };
    /* ---------------------------------------------------------
     CLOSE ALL DROPDOWNS ON OUTSIDE CLICK
     ---------------------------------------------------------
     PURPOSE:
     - Ensures only one dropdown is open at a time
     - Closes all menus when clicking anywhere outside
  --------------------------------------------------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = ()=>{
            setShowCategoryMenu(false);
            setShowStatusMenu(false);
            setShowVPMenu(false);
            setShowDeptMenu(false);
            setShowLeadMenu(false);
            setShowProjectSortMenu(false);
        };
        window.addEventListener('click', handleClickOutside);
        return ()=>window.removeEventListener('click', handleClickOutside);
    }, []);
    /* ---------------------------------------------------------
     NAVIGATION HELPERS
     ---------------------------------------------------------
     PURPOSE:
     - Opens Add Initiative modal route
     - Opens Edit Initiative modal route
  --------------------------------------------------------- */ const handleAddInitiative = ()=>{
        router.push('/Resource-Manager/create_edit_Initiatives/AddInitiative');
    };
    const handleEditInitiative = (id)=>{
        router.push(`/Resource-Manager/create_edit_Initiatives/EditButton?id=${id}`);
    };
    /* ---------------------------------------------------------
     LOADING STATE
     ---------------------------------------------------------
     PURPOSE:
     - Displays a loading spinner while user session is loading
  --------------------------------------------------------- */ if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
            }, void 0, false, {
                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                lineNumber: 254,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 253,
            columnNumber: 7
        }, this);
    }
    // ---------------------------------------------------------
    // HEADER + FILTER BUTTONS
    // ---------------------------------------------------------
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-[#017ACB] shadow-sm w-full relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 sm:px-6 lg:px-8 w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex items-center h-[clamp(4.5rem,5vw,5.5rem)] w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center cursor-pointer flex-none",
                                onClick: ()=>router.push('/Resource-Manager/dashboard'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/CapstoneDynamicsLogo.png",
                                        alt: "Logo",
                                        className: "w-auto h-[clamp(3.2rem,3.8vw,4rem)]"
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                        lineNumber: 283,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "font-bold text-white leading-tight ml-4 text-[clamp(1.6rem,1.7vw,2rem)]",
                                        style: styles.outfitFont,
                                        children: "Capstone Dynamics"
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                        lineNumber: 289,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                lineNumber: 279,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-1/2 -translate-x-1/2 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-bold text-white leading-tight text-[clamp(1.2rem,1.3vw,1.6rem)]",
                                    style: styles.outfitFont,
                                    children: "Resource & Capacity Management Planner"
                                }, void 0, false, {
                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                    lineNumber: 299,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                lineNumber: 298,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 ml-auto flex-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-white text-[clamp(1rem,1.15vw,1.25rem)]",
                                        style: styles.outfitFont,
                                        children: user?.username || ''
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                        lineNumber: 309,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>router.push('/Resource-Manager/Profile/view-profile'),
                                        className: "rounded-full bg-white flex items-center justify-center cursor-pointer hover:opacity-90 transition   w-[clamp(2.4rem,2.8vw,3.0rem)] h-[clamp(2.4rem,2.8vw,3.0rem)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#017ACB] font-bold text-[clamp(1.1rem,1.3vw,1.5rem)]",
                                            children: user?.username?.charAt(0)?.toUpperCase() || ''
                                        }, void 0, false, {
                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                            lineNumber: 321,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                        lineNumber: 316,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                lineNumber: 308,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                        lineNumber: 276,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                    lineNumber: 273,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                lineNumber: 272,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl font-bold text-gray-900",
                                        style: styles.outfitFont,
                                        children: "Initiatives"
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                        lineNumber: 344,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push('/Resource-Manager/dashboard'),
                                        className: "px-4 py-2 rounded text-sm bg-white text-gray-700 border hover:bg-gray-100 transition",
                                        style: styles.outfitFont,
                                        children: "Back to Dashboard"
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                        lineNumber: 349,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                lineNumber: 343,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab('all'),
                                        className: `px-4 py-2 rounded text-sm ${activeTab === 'all' ? 'bg-[#017ACB] text-white' : 'bg-white text-gray-700 border'}`,
                                        style: styles.outfitFont,
                                        children: "All Initiatives"
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                        lineNumber: 368,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab('mine'),
                                        className: `px-4 py-2 rounded text-sm ${activeTab === 'mine' ? 'bg-[#017ACB] text-white' : 'bg-white text-gray-700 border'}`,
                                        style: styles.outfitFont,
                                        children: "My Initiatives"
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                        lineNumber: 379,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab('completed'),
                                        className: `px-4 py-2 rounded text-sm ${activeTab === 'completed' ? 'bg-[#017ACB] text-white' : 'bg-white text-gray-700 border'}`,
                                        style: styles.outfitFont,
                                        children: "Completed"
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                        lineNumber: 390,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push('/Resource-Manager/create_edit_Initiatives/AddInitiative'),
                                        className: "px-4 py-2 rounded text-sm bg-white text-gray-700 border hover:bg-gray-100 transition",
                                        style: styles.outfitFont,
                                        children: "+ Add Initiative"
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                        lineNumber: 401,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                lineNumber: 365,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                        lineNumber: 341,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border rounded-lg shadow-sm bg-white overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto overflow-y-auto max-h-[70vh]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "min-w-max w-full border-collapse",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "bg-[#017ACB] text-white sticky top-0 z-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "sticky left-0 bg-[#017ACB] px-4 py-2 border text-sm font-semibold",
                                                    style: styles.outfitFont,
                                                    children: "Edit"
                                                }, void 0, false, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                    lineNumber: 436,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-2 border text-sm font-semibold relative whitespace-nowrap",
                                                    style: styles.outfitFont,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Project"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                                    lineNumber: 455,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: (e)=>{
                                                                        e.stopPropagation();
                                                                        const rect = e.target.getBoundingClientRect();
                                                                        setMenuPosition({
                                                                            x: rect.left,
                                                                            y: rect.bottom
                                                                        });
                                                                        // Toggle sort menu
                                                                        setShowProjectSortMenu((prev)=>!prev);
                                                                        // Close all other menus
                                                                        setShowCategoryMenu(false);
                                                                        setShowStatusMenu(false);
                                                                        setShowVPMenu(false);
                                                                        setShowDeptMenu(false);
                                                                        setShowLeadMenu(false);
                                                                    },
                                                                    className: "ml-2 bg-white text-[#017ACB] px-2 py-1 rounded text-xs font-bold hover:bg-gray-100 transition",
                                                                    children: "▼"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                                    lineNumber: 458,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                            lineNumber: 454,
                                                            columnNumber: 21
                                                        }, this),
                                                        showProjectSortMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "fixed bg-white text-black shadow-lg rounded w-40 z-50",
                                                            style: {
                                                                top: menuPosition.y,
                                                                left: menuPosition.x
                                                            },
                                                            onClick: (e)=>e.stopPropagation(),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `px-3 py-2 cursor-pointer hover:bg-gray-200 ${projectSort === '' ? 'bg-gray-100 font-semibold' : ''}`,
                                                                    onClick: ()=>setProjectSort(''),
                                                                    children: "None"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                                    lineNumber: 487,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `px-3 py-2 cursor-pointer hover:bg-gray-200 ${projectSort === 'asc' ? 'bg-gray-100 font-semibold' : ''}`,
                                                                    onClick: ()=>setProjectSort('asc'),
                                                                    children: "A → Z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                                    lineNumber: 496,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `px-3 py-2 cursor-pointer hover:bg-gray-200 ${projectSort === 'desc' ? 'bg-gray-100 font-semibold' : ''}`,
                                                                    onClick: ()=>setProjectSort('desc'),
                                                                    children: "Z → A"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                                    lineNumber: 505,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                            lineNumber: 482,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                    lineNumber: 450,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-2 border text-sm font-semibold relative whitespace-nowrap",
                                                    style: styles.outfitFont,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Category"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                                    lineNumber: 528,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: (e)=>{
                                                                        e.stopPropagation();
                                                                        const rect = e.target.getBoundingClientRect();
                                                                        // Position dropdown under button
                                                                        setMenuPosition({
                                                                            x: rect.left,
                                                                            y: rect.bottom
                                                                        });
                                                                        // Toggle category menu
                                                                        setShowCategoryMenu((prev)=>!prev);
                                                                        // Close all other menus
                                                                        setShowStatusMenu(false);
                                                                        setShowVPMenu(false);
                                                                        setShowDeptMenu(false);
                                                                        setShowLeadMenu(false);
                                                                        setShowProjectSortMenu(false);
                                                                    },
                                                                    className: "ml-2 bg-white text-[#017ACB] px-2 py-1 rounded text-xs font-bold hover:bg-gray-100 transition",
                                                                    children: "▼"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                                    lineNumber: 531,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                            lineNumber: 527,
                                                            columnNumber: 21
                                                        }, this),
                                                        showCategoryMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "fixed bg-white text-black shadow-lg rounded w-48 z-50",
                                                            style: {
                                                                top: menuPosition.y,
                                                                left: menuPosition.x
                                                            },
                                                            onClick: (e)=>e.stopPropagation(),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${selectedCategories.length === 0 ? 'bg-gray-100 font-semibold' : ''}`,
                                                                    onClick: ()=>setSelectedCategories([]),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            checked: selectedCategories.length === 0,
                                                                            readOnly: true
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                                            lineNumber: 575,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        "All"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                                    lineNumber: 569,
                                                                    columnNumber: 23
                                                                }, this),
                                                                availableCategories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${selectedCategories.includes(cat) ? 'bg-gray-100 font-semibold' : ''}`,
                                                                        onClick: ()=>toggleSelection(cat, setSelectedCategories, selectedCategories),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "checkbox",
                                                                                checked: selectedCategories.includes(cat),
                                                                                readOnly: true
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                                                lineNumber: 590,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            cat
                                                                        ]
                                                                    }, cat, true, {
                                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                                        lineNumber: 581,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                            lineNumber: 563,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                    lineNumber: 523,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-2 border text-sm font-semibold relative whitespace-nowrap",
                                                    style: styles.outfitFont,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Lead"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                                    lineNumber: 609,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: (e)=>{
                                                                        e.stopPropagation();
                                                                        const rect = e.target.getBoundingClientRect();
                                                                        // Position dropdown under button
                                                                        setMenuPosition({
                                                                            x: rect.left,
                                                                            y: rect.bottom
                                                                        });
                                                                        // Toggle lead menu
                                                                        setShowLeadMenu((prev)=>!prev);
                                                                        // Close all other menus
                                                                        setShowCategoryMenu(false);
                                                                        setShowStatusMenu(false);
                                                                        setShowVPMenu(false);
                                                                        setShowDeptMenu(false);
                                                                        setShowProjectSortMenu(false);
                                                                    },
                                                                    className: "ml-2 bg-white text-[#017ACB] px-2 py-1 rounded text-xs font-bold hover:bg-gray-100 transition",
                                                                    children: "▼"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                                    lineNumber: 612,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                            lineNumber: 608,
                                                            columnNumber: 19
                                                        }, this),
                                                        showLeadMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "fixed bg-white text-black shadow-lg rounded w-48 z-50",
                                                            style: {
                                                                top: menuPosition.y,
                                                                left: menuPosition.x
                                                            },
                                                            onClick: (e)=>e.stopPropagation(),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${selectedLeads.length === 0 ? 'bg-gray-100 font-semibold' : ''}`,
                                                                    onClick: ()=>setSelectedLeads([]),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            checked: selectedLeads.length === 0,
                                                                            readOnly: true
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                                            lineNumber: 650,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        "All"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                                    lineNumber: 644,
                                                                    columnNumber: 23
                                                                }, this),
                                                                availableLeads.map((lead)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${selectedLeads.includes(lead) ? 'bg-gray-100 font-semibold' : ''}`,
                                                                        onClick: ()=>toggleSelection(lead, setSelectedLeads, selectedLeads),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "checkbox",
                                                                                checked: selectedLeads.includes(lead),
                                                                                readOnly: true
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                                                lineNumber: 665,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            lead
                                                                        ]
                                                                    }, lead, true, {
                                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                                        lineNumber: 656,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                            lineNumber: 638,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                    lineNumber: 604,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-2 border text-sm font-semibold relative whitespace-nowrap",
                                                    style: styles.outfitFont,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Status"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                                    lineNumber: 684,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: (e)=>{
                                                                        e.stopPropagation();
                                                                        const rect = e.target.getBoundingClientRect();
                                                                        // Position dropdown under button
                                                                        setMenuPosition({
                                                                            x: rect.left,
                                                                            y: rect.bottom
                                                                        });
                                                                        // Toggle status menu
                                                                        setShowStatusMenu((prev)=>!prev);
                                                                        // Close all other menus
                                                                        setShowCategoryMenu(false);
                                                                        setShowVPMenu(false);
                                                                        setShowDeptMenu(false);
                                                                        setShowLeadMenu(false);
                                                                        setShowProjectSortMenu(false);
                                                                    },
                                                                    className: "ml-2 bg-white text-[#017ACB] px-2 py-1 rounded text-xs font-bold hover:bg-gray-100 transition",
                                                                    children: "▼"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                                    lineNumber: 687,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                            lineNumber: 683,
                                                            columnNumber: 19
                                                        }, this),
                                                        showStatusMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "fixed bg-white text-black shadow-lg rounded w-48 z-50",
                                                            style: {
                                                                top: menuPosition.y,
                                                                left: menuPosition.x
                                                            },
                                                            onClick: (e)=>e.stopPropagation(),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${selectedStatuses.length === 0 ? 'bg-gray-100 font-semibold' : ''}`,
                                                                    onClick: ()=>setSelectedStatuses([]),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            checked: selectedStatuses.length === 0,
                                                                            readOnly: true
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                                            lineNumber: 725,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        "All"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                                    lineNumber: 719,
                                                                    columnNumber: 23
                                                                }, this),
                                                                availableStatuses.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${selectedStatuses.includes(status) ? 'bg-gray-100 font-semibold' : ''}`,
                                                                        onClick: ()=>toggleSelection(status, setSelectedStatuses, selectedStatuses),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "checkbox",
                                                                                checked: selectedStatuses.includes(status),
                                                                                readOnly: true
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                                                lineNumber: 746,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            status
                                                                        ]
                                                                    }, status, true, {
                                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                                        lineNumber: 737,
                                                                        columnNumber: 21
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                            lineNumber: 713,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                    lineNumber: 679,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-2 border text-sm font-semibold whitespace-nowrap",
                                                    style: styles.outfitFont,
                                                    children: "Requestor"
                                                }, void 0, false, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                    lineNumber: 761,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-2 border text-sm font-semibold relative whitespace-nowrap",
                                                    style: styles.outfitFont,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Requestor VP"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                                    lineNumber: 779,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: (e)=>{
                                                                        e.stopPropagation(); // Prevent table click events
                                                                        const rect = e.target.getBoundingClientRect();
                                                                        // Position dropdown under the clicked button
                                                                        setMenuPosition({
                                                                            x: rect.left,
                                                                            y: rect.bottom
                                                                        });
                                                                        // Toggle VP dropdown
                                                                        setShowVPMenu((prev)=>!prev);
                                                                        // Close all other dropdowns
                                                                        setShowCategoryMenu(false);
                                                                        setShowStatusMenu(false);
                                                                        setShowDeptMenu(false);
                                                                        setShowLeadMenu(false);
                                                                        setShowProjectSortMenu(false);
                                                                    },
                                                                    className: "ml-2 bg-white text-[#017ACB] px-2 py-1 rounded text-xs font-bold hover:bg-gray-100 transition",
                                                                    children: "▼"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                                    lineNumber: 782,
                                                                    columnNumber: 17
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                            lineNumber: 778,
                                                            columnNumber: 15
                                                        }, this),
                                                        showVPMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "fixed bg-white text-black shadow-lg rounded w-48 z-50",
                                                            style: {
                                                                top: menuPosition.y,
                                                                left: menuPosition.x
                                                            },
                                                            onClick: (e)=>e.stopPropagation(),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${selectedVPs.length === 0 ? 'bg-gray-100 font-semibold' : ''}`,
                                                                    onClick: ()=>setSelectedVPs([]),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            checked: selectedVPs.length === 0,
                                                                            readOnly: true
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                                            lineNumber: 820,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        "All"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                                    lineNumber: 814,
                                                                    columnNumber: 19
                                                                }, this),
                                                                availableVPs.map((vp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${selectedVPs.includes(vp) ? 'bg-gray-100 font-semibold' : ''}`,
                                                                        onClick: ()=>toggleSelection(vp, setSelectedVPs, selectedVPs),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "checkbox",
                                                                                checked: selectedVPs.includes(vp),
                                                                                readOnly: true
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                                                lineNumber: 838,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            vp
                                                                        ]
                                                                    }, vp, true, {
                                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                                        lineNumber: 831,
                                                                        columnNumber: 21
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                            lineNumber: 808,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                    lineNumber: 774,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-2 border text-sm font-semibold relative whitespace-nowrap",
                                                    style: styles.outfitFont,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Requesting Dept"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                                    lineNumber: 857,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: (e)=>{
                                                                        e.stopPropagation();
                                                                        const rect = e.target.getBoundingClientRect();
                                                                        // Position dropdown under the clicked button
                                                                        setMenuPosition({
                                                                            x: rect.left,
                                                                            y: rect.bottom
                                                                        });
                                                                        // Toggle department dropdown
                                                                        setShowDeptMenu((prev)=>!prev);
                                                                        // Close all other dropdowns
                                                                        setShowCategoryMenu(false);
                                                                        setShowStatusMenu(false);
                                                                        setShowVPMenu(false);
                                                                        setShowLeadMenu(false);
                                                                        setShowProjectSortMenu(false);
                                                                    },
                                                                    className: "ml-2 bg-white text-[#017ACB] px-2 py-1 rounded text-xs font-bold hover:bg-gray-100 transition",
                                                                    children: "▼"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                                    lineNumber: 860,
                                                                    columnNumber: 17
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                            lineNumber: 856,
                                                            columnNumber: 15
                                                        }, this),
                                                        showDeptMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "fixed bg-white text-black shadow-lg rounded w-48 z-50",
                                                            style: {
                                                                top: menuPosition.y,
                                                                left: menuPosition.x
                                                            },
                                                            onClick: (e)=>e.stopPropagation(),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${selectedDepts.length === 0 ? 'bg-gray-100 font-semibold' : ''}`,
                                                                    onClick: ()=>setSelectedDepts([]),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            checked: selectedDepts.length === 0,
                                                                            readOnly: true
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                                            lineNumber: 904,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        "All"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                                    lineNumber: 898,
                                                                    columnNumber: 21
                                                                }, this),
                                                                availableDepts.map((dept)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${selectedDepts.includes(dept) ? 'bg-gray-100 font-semibold' : ''}`,
                                                                        onClick: ()=>toggleSelection(dept, setSelectedDepts, selectedDepts),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "checkbox",
                                                                                checked: selectedDepts.includes(dept),
                                                                                readOnly: true
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                                                lineNumber: 917,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            dept
                                                                        ]
                                                                    }, dept, true, {
                                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                                        lineNumber: 910,
                                                                        columnNumber: 23
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                            lineNumber: 892,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                    lineNumber: 852,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-2 border text-sm font-semibold whitespace-nowrap",
                                                    style: styles.outfitFont,
                                                    children: "Completion Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                    lineNumber: 932,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-2 border text-sm font-semibold whitespace-nowrap",
                                                    style: styles.outfitFont,
                                                    children: "Target Period"
                                                }, void 0, false, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                    lineNumber: 945,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-2 border text-sm font-semibold whitespace-nowrap",
                                                    style: styles.outfitFont,
                                                    children: "Description"
                                                }, void 0, false, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                    lineNumber: 958,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-2 border text-sm font-semibold whitespace-nowrap",
                                                    style: styles.outfitFont,
                                                    children: "Resource Consideration"
                                                }, void 0, false, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                    lineNumber: 971,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                            lineNumber: 433,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                        lineNumber: 432,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: filteredInitiatives.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: `hover:bg-black/5 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "sticky left-0 px-4 py-2 border bg-inherit text-black",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleEditInitiative(item.id),
                                                            className: "px-2 py-1 bg-[#017ACB] text-white text-xs rounded hover:bg-blue-700",
                                                            style: styles.outfitFont,
                                                            children: "Edit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                            lineNumber: 997,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                        lineNumber: 996,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-2 border text-sm text-black",
                                                        children: item.project
                                                    }, void 0, false, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                        lineNumber: 1007,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-2 border text-sm text-black",
                                                        children: item.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                        lineNumber: 1008,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-2 border text-sm text-black",
                                                        children: item.lead
                                                    }, void 0, false, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                        lineNumber: 1009,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-2 border text-sm text-black",
                                                        children: item.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                        lineNumber: 1010,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-2 border text-sm text-black",
                                                        children: item.requestor
                                                    }, void 0, false, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                        lineNumber: 1011,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-2 border text-sm text-black",
                                                        children: item.requestor_vp
                                                    }, void 0, false, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                        lineNumber: 1012,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-2 border text-sm text-black",
                                                        children: item.requesting_dept
                                                    }, void 0, false, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                        lineNumber: 1013,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-2 border text-sm text-black",
                                                        children: item.completion_date ? new Date(item.completion_date).toLocaleDateString() : ''
                                                    }, void 0, false, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                        lineNumber: 1016,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-2 border text-sm text-black",
                                                        children: item.target_period
                                                    }, void 0, false, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                        lineNumber: 1022,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-2 border text-sm text-black",
                                                        children: item.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                        lineNumber: 1023,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-2 border text-sm text-black",
                                                        children: item.resource_consideration
                                                    }, void 0, false, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                        lineNumber: 1024,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, item.id, true, {
                                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                                lineNumber: 991,
                                                columnNumber: 15
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                        lineNumber: 989,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                lineNumber: 423,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                            lineNumber: 421,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                        lineNumber: 420,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                lineNumber: 338,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
        lineNumber: 263,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b5096c22._.js.map