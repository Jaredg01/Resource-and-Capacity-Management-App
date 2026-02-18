(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InitiativesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(164);
    if ($[0] !== "9e0aacca6b8d4ee17067535e90e5e48cb0e9a4bbfbb09997897a5b0e9d38d377") {
        for(let $i = 0; $i < 164; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9e0aacca6b8d4ee17067535e90e5e48cb0e9a4bbfbb09997897a5b0e9d38d377";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    let t0;
    if ($[1] !== searchParams) {
        t0 = searchParams.get("refresh");
        $[1] = searchParams;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const refresh = t0;
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const [initiatives, setInitiatives] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [];
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const [mine, setMine] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [];
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const [filteredInitiatives, setFilteredInitiatives] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t3);
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = [];
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const [selectedCategories, setSelectedCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t4);
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = [];
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    const [selectedStatuses, setSelectedStatuses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t5);
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = [];
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    const [selectedVPs, setSelectedVPs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t6);
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = [];
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    const [selectedDepts, setSelectedDepts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t7);
    let t8;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = [];
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    const [selectedLeads, setSelectedLeads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t8);
    const [projectSort, setProjectSort] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showProjectSortMenu, setShowProjectSortMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCategoryMenu, setShowCategoryMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showStatusMenu, setShowStatusMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showVPMenu, setShowVPMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDeptMenu, setShowDeptMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showLeadMenu, setShowLeadMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t9;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            x: 0,
            y: 0
        };
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    const [menuPosition, setMenuPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t9);
    let t10;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = [];
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    const [availableCategories, setAvailableCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t10);
    let t11;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = [];
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    const [availableStatuses, setAvailableStatuses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t11);
    let t12;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = [];
        $[14] = t12;
    } else {
        t12 = $[14];
    }
    const [availableVPs, setAvailableVPs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t12);
    let t13;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = [];
        $[15] = t13;
    } else {
        t13 = $[15];
    }
    const [availableDepts, setAvailableDepts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t13);
    let t14;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = [];
        $[16] = t14;
    } else {
        t14 = $[16];
    }
    const [availableLeads, setAvailableLeads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t14);
    let t15;
    let t16;
    if ($[17] !== router) {
        t15 = ({
            "InitiativesPage[useEffect()]": ()=>{
                const userData = localStorage.getItem("user");
                if (!userData) {
                    router.push("/Resource-Manager/Profile/login");
                    return;
                }
                setUser(JSON.parse(userData));
            }
        })["InitiativesPage[useEffect()]"];
        t16 = [
            router
        ];
        $[17] = router;
        $[18] = t15;
        $[19] = t16;
    } else {
        t15 = $[18];
        t16 = $[19];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t15, t16);
    let t17;
    if ($[20] !== user) {
        t17 = ({
            "InitiativesPage[useEffect()]": ()=>{
                if (!user) {
                    return;
                }
                const fetchInitiatives = {
                    "InitiativesPage[useEffect() > fetchInitiatives]": async ()=>{
                        ;
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
                            const mapFields = _InitiativesPageUseEffectFetchInitiativesMapFields;
                            const mappedAll = mapFields(allAssignments);
                            const mappedMine = mapFields(myInitiatives);
                            setInitiatives(mappedAll);
                            setMine(mappedMine);
                            setFilteredInitiatives(mappedAll);
                            setAvailableCategories([
                                ...new Set(mappedAll.map(_InitiativesPageUseEffectFetchInitiativesMappedAllMap).filter(Boolean))
                            ]);
                            setAvailableStatuses([
                                ...new Set(mappedAll.map(_InitiativesPageUseEffectFetchInitiativesMappedAllMap2).filter(Boolean))
                            ]);
                            setAvailableVPs([
                                ...new Set(mappedAll.map(_InitiativesPageUseEffectFetchInitiativesMappedAllMap3).filter(Boolean))
                            ]);
                            setAvailableDepts([
                                ...new Set(mappedAll.map(_InitiativesPageUseEffectFetchInitiativesMappedAllMap4).filter(Boolean))
                            ]);
                            setAvailableLeads([
                                ...new Set(mappedAll.map(_InitiativesPageUseEffectFetchInitiativesMappedAllMap5).filter(Boolean))
                            ]);
                        } catch (t18) {
                            const err = t18;
                            console.error("Initiatives fetch error:", err);
                        }
                    }
                }["InitiativesPage[useEffect() > fetchInitiatives]"];
                fetchInitiatives();
            }
        })["InitiativesPage[useEffect()]"];
        $[20] = user;
        $[21] = t17;
    } else {
        t17 = $[21];
    }
    let t18;
    if ($[22] !== refresh || $[23] !== user) {
        t18 = [
            user,
            refresh
        ];
        $[22] = refresh;
        $[23] = user;
        $[24] = t18;
    } else {
        t18 = $[24];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t17, t18);
    let t19;
    let t20;
    if ($[25] !== activeTab || $[26] !== initiatives || $[27] !== mine || $[28] !== projectSort || $[29] !== selectedCategories || $[30] !== selectedDepts || $[31] !== selectedLeads || $[32] !== selectedStatuses || $[33] !== selectedVPs || $[34] !== user) {
        t19 = ({
            "InitiativesPage[useEffect()]": ()=>{
                if (!user) {
                    return;
                }
                const base = activeTab === "mine" ? mine : activeTab === "completed" ? initiatives.filter(_InitiativesPageUseEffectInitiativesFilter) : initiatives.filter(_InitiativesPageUseEffectInitiativesFilter2);
                let filtered = base.filter({
                    "InitiativesPage[useEffect() > base.filter()]": (i_6)=>(selectedCategories.length ? selectedCategories.includes(i_6.category) : true) && (selectedStatuses.length ? selectedStatuses.includes(i_6.status) : true) && (selectedVPs.length ? selectedVPs.includes(i_6.requestor_vp) : true) && (selectedDepts.length ? selectedDepts.includes(i_6.requesting_dept) : true) && (selectedLeads.length ? selectedLeads.includes(i_6.lead) : true)
                }["InitiativesPage[useEffect() > base.filter()]"]);
                if (projectSort === "asc") {
                    filtered = [
                        ...filtered
                    ].sort(_InitiativesPageUseEffectAnonymous);
                } else {
                    if (projectSort === "desc") {
                        filtered = [
                            ...filtered
                        ].sort(_InitiativesPageUseEffectAnonymous2);
                    }
                }
                setFilteredInitiatives(filtered);
            }
        })["InitiativesPage[useEffect()]"];
        t20 = [
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
        ];
        $[25] = activeTab;
        $[26] = initiatives;
        $[27] = mine;
        $[28] = projectSort;
        $[29] = selectedCategories;
        $[30] = selectedDepts;
        $[31] = selectedLeads;
        $[32] = selectedStatuses;
        $[33] = selectedVPs;
        $[34] = user;
        $[35] = t19;
        $[36] = t20;
    } else {
        t19 = $[35];
        t20 = $[36];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t19, t20);
    const toggleSelection = _InitiativesPageToggleSelection;
    let t21;
    let t22;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = ({
            "InitiativesPage[useEffect()]": ()=>{
                const handleClickOutside = {
                    "InitiativesPage[useEffect() > handleClickOutside]": ()=>{
                        setShowCategoryMenu(false);
                        setShowStatusMenu(false);
                        setShowVPMenu(false);
                        setShowDeptMenu(false);
                        setShowLeadMenu(false);
                        setShowProjectSortMenu(false);
                    }
                }["InitiativesPage[useEffect() > handleClickOutside]"];
                window.addEventListener("click", handleClickOutside);
                return ()=>window.removeEventListener("click", handleClickOutside);
            }
        })["InitiativesPage[useEffect()]"];
        t22 = [];
        $[37] = t21;
        $[38] = t22;
    } else {
        t21 = $[37];
        t22 = $[38];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t21, t22);
    let t23;
    if ($[39] !== router) {
        t23 = ({
            "InitiativesPage[handleEditInitiative]": (id)=>{
                router.push(`/Resource-Manager/create_edit_Initiatives/EditButton?id=${id}`);
            }
        })["InitiativesPage[handleEditInitiative]"];
        $[39] = router;
        $[40] = t23;
    } else {
        t23 = $[40];
    }
    const handleEditInitiative = t23;
    if (!user) {
        let t24;
        if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
            t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-gray-50 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
                }, void 0, false, {
                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                    lineNumber: 318,
                    columnNumber: 87
                }, this)
            }, void 0, false, {
                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                lineNumber: 318,
                columnNumber: 13
            }, this);
            $[41] = t24;
        } else {
            t24 = $[41];
        }
        return t24;
    }
    let t24;
    if ($[42] !== router) {
        t24 = ({
            "InitiativesPage[<div>.onClick]": ()=>router.push("/Resource-Manager/dashboard")
        })["InitiativesPage[<div>.onClick]"];
        $[42] = router;
        $[43] = t24;
    } else {
        t24 = $[43];
    }
    let t25;
    let t26;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "/CapstoneDynamicsLogo.png",
            alt: "Logo",
            className: "w-auto h-[clamp(3.2rem,3.8vw,4rem)]"
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 338,
            columnNumber: 11
        }, this);
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "font-bold text-white leading-tight ml-4 text-[clamp(1.6rem,1.7vw,2rem)]",
            style: styles.outfitFont,
            children: "Capstone Dynamics"
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 339,
            columnNumber: 11
        }, this);
        $[44] = t25;
        $[45] = t26;
    } else {
        t25 = $[44];
        t26 = $[45];
    }
    let t27;
    if ($[46] !== t24) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center cursor-pointer flex-none",
            onClick: t24,
            children: [
                t25,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 348,
            columnNumber: 11
        }, this);
        $[46] = t24;
        $[47] = t27;
    } else {
        t27 = $[47];
    }
    let t28;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute left-1/2 -translate-x-1/2 text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "font-bold text-white leading-tight text-[clamp(1.2rem,1.3vw,1.6rem)]",
                style: styles.outfitFont,
                children: "Resource & Capacity Management Planner"
            }, void 0, false, {
                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                lineNumber: 356,
                columnNumber: 75
            }, this)
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 356,
            columnNumber: 11
        }, this);
        $[48] = t28;
    } else {
        t28 = $[48];
    }
    const t29 = user?.username || "";
    let t30;
    if ($[49] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-semibold text-white text-[clamp(1rem,1.15vw,1.25rem)]",
            style: styles.outfitFont,
            children: t29
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 364,
            columnNumber: 11
        }, this);
        $[49] = t29;
        $[50] = t30;
    } else {
        t30 = $[50];
    }
    let t31;
    if ($[51] !== router) {
        t31 = ({
            "InitiativesPage[<div>.onClick]": ()=>router.push("/Resource-Manager/Profile/view-profile")
        })["InitiativesPage[<div>.onClick]"];
        $[51] = router;
        $[52] = t31;
    } else {
        t31 = $[52];
    }
    let t32;
    if ($[53] !== user?.username) {
        t32 = user?.username?.charAt(0)?.toUpperCase() || "";
        $[53] = user?.username;
        $[54] = t32;
    } else {
        t32 = $[54];
    }
    let t33;
    if ($[55] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[#017ACB] font-bold text-[clamp(1.1rem,1.3vw,1.5rem)]",
            children: t32
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 390,
            columnNumber: 11
        }, this);
        $[55] = t32;
        $[56] = t33;
    } else {
        t33 = $[56];
    }
    let t34;
    if ($[57] !== t31 || $[58] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: t31,
            className: "rounded-full bg-white flex items-center justify-center cursor-pointer hover:opacity-90 transition\r\n                           w-[clamp(2.4rem,2.8vw,3.0rem)] h-[clamp(2.4rem,2.8vw,3.0rem)]",
            children: t33
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 398,
            columnNumber: 11
        }, this);
        $[57] = t31;
        $[58] = t33;
        $[59] = t34;
    } else {
        t34 = $[59];
    }
    let t35;
    if ($[60] !== t30 || $[61] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4 ml-auto flex-none",
            children: [
                t30,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 407,
            columnNumber: 11
        }, this);
        $[60] = t30;
        $[61] = t34;
        $[62] = t35;
    } else {
        t35 = $[62];
    }
    let t36;
    if ($[63] !== t27 || $[64] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "bg-[#017ACB] shadow-sm w-full relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 sm:px-6 lg:px-8 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex items-center h-[clamp(4.5rem,5vw,5.5rem)] w-full",
                    children: [
                        t27,
                        t28,
                        t35
                    ]
                }, void 0, true, {
                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                    lineNumber: 416,
                    columnNumber: 115
                }, this)
            }, void 0, false, {
                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                lineNumber: 416,
                columnNumber: 70
            }, this)
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 416,
            columnNumber: 11
        }, this);
        $[63] = t27;
        $[64] = t35;
        $[65] = t36;
    } else {
        t36 = $[65];
    }
    let t37;
    if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-4xl font-bold text-gray-900",
            style: styles.outfitFont,
            children: "Initiatives"
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 425,
            columnNumber: 11
        }, this);
        $[66] = t37;
    } else {
        t37 = $[66];
    }
    let t38;
    if ($[67] !== router) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4 mb-4",
            children: [
                t37,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "InitiativesPage[<button>.onClick]": ()=>router.push("/Resource-Manager/dashboard")
                    }["InitiativesPage[<button>.onClick]"],
                    className: "px-4 py-2 rounded text-sm bg-white text-gray-700 border hover:bg-gray-100 transition",
                    style: styles.outfitFont,
                    children: "Back to Dashboard"
                }, void 0, false, {
                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                    lineNumber: 432,
                    columnNumber: 62
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 432,
            columnNumber: 11
        }, this);
        $[67] = router;
        $[68] = t38;
    } else {
        t38 = $[68];
    }
    let t39;
    if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = ({
            "InitiativesPage[<button>.onClick]": ()=>setActiveTab("all")
        })["InitiativesPage[<button>.onClick]"];
        $[69] = t39;
    } else {
        t39 = $[69];
    }
    const t40 = `px-4 py-2 rounded text-sm ${activeTab === "all" ? "bg-[#017ACB] text-white" : "bg-white text-gray-700 border"}`;
    let t41;
    if ($[70] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t39,
            className: t40,
            style: styles.outfitFont,
            children: "All Initiatives"
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 452,
            columnNumber: 11
        }, this);
        $[70] = t40;
        $[71] = t41;
    } else {
        t41 = $[71];
    }
    let t42;
    if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = ({
            "InitiativesPage[<button>.onClick]": ()=>setActiveTab("mine")
        })["InitiativesPage[<button>.onClick]"];
        $[72] = t42;
    } else {
        t42 = $[72];
    }
    const t43 = `px-4 py-2 rounded text-sm ${activeTab === "mine" ? "bg-[#017ACB] text-white" : "bg-white text-gray-700 border"}`;
    let t44;
    if ($[73] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t42,
            className: t43,
            style: styles.outfitFont,
            children: "My Initiatives"
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 470,
            columnNumber: 11
        }, this);
        $[73] = t43;
        $[74] = t44;
    } else {
        t44 = $[74];
    }
    let t45;
    if ($[75] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = ({
            "InitiativesPage[<button>.onClick]": ()=>setActiveTab("completed")
        })["InitiativesPage[<button>.onClick]"];
        $[75] = t45;
    } else {
        t45 = $[75];
    }
    const t46 = `px-4 py-2 rounded text-sm ${activeTab === "completed" ? "bg-[#017ACB] text-white" : "bg-white text-gray-700 border"}`;
    let t47;
    if ($[76] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t45,
            className: t46,
            style: styles.outfitFont,
            children: "Completed"
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 488,
            columnNumber: 11
        }, this);
        $[76] = t46;
        $[77] = t47;
    } else {
        t47 = $[77];
    }
    let t48;
    if ($[78] !== router) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "InitiativesPage[<button>.onClick]": ()=>router.push("/Resource-Manager/create_edit_Initiatives/AddInitiative")
            }["InitiativesPage[<button>.onClick]"],
            className: "px-4 py-2 rounded text-sm bg-white text-gray-700 border hover:bg-gray-100 transition",
            style: styles.outfitFont,
            children: "+ Add Initiative"
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 496,
            columnNumber: 11
        }, this);
        $[78] = router;
        $[79] = t48;
    } else {
        t48 = $[79];
    }
    let t49;
    if ($[80] !== t41 || $[81] !== t44 || $[82] !== t47 || $[83] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4",
            children: [
                t41,
                t44,
                t47,
                t48
            ]
        }, void 0, true, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 506,
            columnNumber: 11
        }, this);
        $[80] = t41;
        $[81] = t44;
        $[82] = t47;
        $[83] = t48;
        $[84] = t49;
    } else {
        t49 = $[84];
    }
    let t50;
    if ($[85] !== t38 || $[86] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center mb-4",
            children: [
                t38,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 517,
            columnNumber: 11
        }, this);
        $[85] = t38;
        $[86] = t49;
        $[87] = t50;
    } else {
        t50 = $[87];
    }
    let t51;
    if ($[88] === Symbol.for("react.memo_cache_sentinel")) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "sticky left-0 bg-[#017ACB] px-4 py-2 border text-sm font-semibold",
            style: styles.outfitFont,
            children: "Edit"
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 526,
            columnNumber: 11
        }, this);
        $[88] = t51;
    } else {
        t51 = $[88];
    }
    let t52;
    if ($[89] === Symbol.for("react.memo_cache_sentinel")) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Project"
                }, void 0, false, {
                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                    lineNumber: 533,
                    columnNumber: 62
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "InitiativesPage[<button>.onClick]": (e)=>{
                            e.stopPropagation();
                            const rect = e.target.getBoundingClientRect();
                            setMenuPosition({
                                x: rect.left,
                                y: rect.bottom
                            });
                            setShowProjectSortMenu(_InitiativesPageButtonOnClickSetShowProjectSortMenu);
                            setShowCategoryMenu(false);
                            setShowStatusMenu(false);
                            setShowVPMenu(false);
                            setShowDeptMenu(false);
                            setShowLeadMenu(false);
                        }
                    }["InitiativesPage[<button>.onClick]"],
                    className: "ml-2 bg-white text-[#017ACB] px-2 py-1 rounded text-xs font-bold hover:bg-gray-100 transition",
                    children: "▼"
                }, void 0, false, {
                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                    lineNumber: 533,
                    columnNumber: 82
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 533,
            columnNumber: 11
        }, this);
        $[89] = t52;
    } else {
        t52 = $[89];
    }
    let t53;
    if ($[90] !== menuPosition || $[91] !== projectSort || $[92] !== showProjectSortMenu) {
        t53 = showProjectSortMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bg-white text-black shadow-lg rounded w-40 z-50",
            style: {
                top: menuPosition.y,
                left: menuPosition.x
            },
            onClick: _InitiativesPageDivOnClick,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `px-3 py-2 cursor-pointer hover:bg-gray-200 ${projectSort === "" ? "bg-gray-100 font-semibold" : ""}`,
                    onClick: {
                        "InitiativesPage[<div>.onClick]": ()=>setProjectSort("")
                    }["InitiativesPage[<div>.onClick]"],
                    children: "None"
                }, void 0, false, {
                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                    lineNumber: 558,
                    columnNumber: 45
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `px-3 py-2 cursor-pointer hover:bg-gray-200 ${projectSort === "asc" ? "bg-gray-100 font-semibold" : ""}`,
                    onClick: {
                        "InitiativesPage[<div>.onClick]": ()=>setProjectSort("asc")
                    }["InitiativesPage[<div>.onClick]"],
                    children: "A → Z"
                }, void 0, false, {
                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                    lineNumber: 560,
                    columnNumber: 54
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `px-3 py-2 cursor-pointer hover:bg-gray-200 ${projectSort === "desc" ? "bg-gray-100 font-semibold" : ""}`,
                    onClick: {
                        "InitiativesPage[<div>.onClick]": ()=>setProjectSort("desc")
                    }["InitiativesPage[<div>.onClick]"],
                    children: "Z → A"
                }, void 0, false, {
                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                    lineNumber: 562,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 555,
            columnNumber: 34
        }, this);
        $[90] = menuPosition;
        $[91] = projectSort;
        $[92] = showProjectSortMenu;
        $[93] = t53;
    } else {
        t53 = $[93];
    }
    let t54;
    if ($[94] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "px-4 py-2 border text-sm font-semibold relative whitespace-nowrap",
            style: styles.outfitFont,
            children: [
                t52,
                t53
            ]
        }, void 0, true, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 574,
            columnNumber: 11
        }, this);
        $[94] = t53;
        $[95] = t54;
    } else {
        t54 = $[95];
    }
    let t55;
    if ($[96] === Symbol.for("react.memo_cache_sentinel")) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Category"
                }, void 0, false, {
                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                    lineNumber: 582,
                    columnNumber: 62
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "InitiativesPage[<button>.onClick]": (e_1)=>{
                            e_1.stopPropagation();
                            const rect_0 = e_1.target.getBoundingClientRect();
                            setMenuPosition({
                                x: rect_0.left,
                                y: rect_0.bottom
                            });
                            setShowCategoryMenu(_InitiativesPageButtonOnClickSetShowCategoryMenu);
                            setShowStatusMenu(false);
                            setShowVPMenu(false);
                            setShowDeptMenu(false);
                            setShowLeadMenu(false);
                            setShowProjectSortMenu(false);
                        }
                    }["InitiativesPage[<button>.onClick]"],
                    className: "ml-2 bg-white text-[#017ACB] px-2 py-1 rounded text-xs font-bold hover:bg-gray-100 transition",
                    children: "▼"
                }, void 0, false, {
                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                    lineNumber: 582,
                    columnNumber: 83
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 582,
            columnNumber: 11
        }, this);
        $[96] = t55;
    } else {
        t55 = $[96];
    }
    let t56;
    if ($[97] !== availableCategories || $[98] !== menuPosition || $[99] !== selectedCategories || $[100] !== showCategoryMenu) {
        t56 = showCategoryMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bg-white text-black shadow-lg rounded w-48 z-50",
            style: {
                top: menuPosition.y,
                left: menuPosition.x
            },
            onClick: _InitiativesPageDivOnClick2,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${selectedCategories.length === 0 ? "bg-gray-100 font-semibold" : ""}`,
                    onClick: {
                        "InitiativesPage[<div>.onClick]": ()=>setSelectedCategories([])
                    }["InitiativesPage[<div>.onClick]"],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "checkbox",
                            checked: selectedCategories.length === 0,
                            readOnly: true
                        }, void 0, false, {
                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                            lineNumber: 609,
                            columnNumber: 44
                        }, this),
                        "All"
                    ]
                }, void 0, true, {
                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                    lineNumber: 607,
                    columnNumber: 46
                }, this),
                availableCategories.map({
                    "InitiativesPage[availableCategories.map()]": (cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${selectedCategories.includes(cat) ? "bg-gray-100 font-semibold" : ""}`,
                            onClick: {
                                "InitiativesPage[availableCategories.map() > <div>.onClick]": ()=>toggleSelection(cat, setSelectedCategories, selectedCategories)
                            }["InitiativesPage[availableCategories.map() > <div>.onClick]"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    checked: selectedCategories.includes(cat),
                                    readOnly: true
                                }, void 0, false, {
                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                    lineNumber: 612,
                                    columnNumber: 74
                                }, this),
                                cat
                            ]
                        }, cat, true, {
                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                            lineNumber: 610,
                            columnNumber: 62
                        }, this)
                }["InitiativesPage[availableCategories.map()]"])
            ]
        }, void 0, true, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 604,
            columnNumber: 31
        }, this);
        $[97] = availableCategories;
        $[98] = menuPosition;
        $[99] = selectedCategories;
        $[100] = showCategoryMenu;
        $[101] = t56;
    } else {
        t56 = $[101];
    }
    let t57;
    if ($[102] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "px-4 py-2 border text-sm font-semibold relative whitespace-nowrap",
            style: styles.outfitFont,
            children: [
                t55,
                t56
            ]
        }, void 0, true, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 624,
            columnNumber: 11
        }, this);
        $[102] = t56;
        $[103] = t57;
    } else {
        t57 = $[103];
    }
    let t58;
    if ($[104] === Symbol.for("react.memo_cache_sentinel")) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Lead"
                }, void 0, false, {
                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                    lineNumber: 632,
                    columnNumber: 62
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "InitiativesPage[<button>.onClick]": (e_3)=>{
                            e_3.stopPropagation();
                            const rect_1 = e_3.target.getBoundingClientRect();
                            setMenuPosition({
                                x: rect_1.left,
                                y: rect_1.bottom
                            });
                            setShowLeadMenu(_InitiativesPageButtonOnClickSetShowLeadMenu);
                            setShowCategoryMenu(false);
                            setShowStatusMenu(false);
                            setShowVPMenu(false);
                            setShowDeptMenu(false);
                            setShowProjectSortMenu(false);
                        }
                    }["InitiativesPage[<button>.onClick]"],
                    className: "ml-2 bg-white text-[#017ACB] px-2 py-1 rounded text-xs font-bold hover:bg-gray-100 transition",
                    children: "▼"
                }, void 0, false, {
                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                    lineNumber: 632,
                    columnNumber: 79
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 632,
            columnNumber: 11
        }, this);
        $[104] = t58;
    } else {
        t58 = $[104];
    }
    let t59;
    if ($[105] !== availableLeads || $[106] !== menuPosition || $[107] !== selectedLeads || $[108] !== showLeadMenu) {
        t59 = showLeadMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bg-white text-black shadow-lg rounded w-48 z-50",
            style: {
                top: menuPosition.y,
                left: menuPosition.x
            },
            onClick: _InitiativesPageDivOnClick3,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${selectedLeads.length === 0 ? "bg-gray-100 font-semibold" : ""}`,
                    onClick: {
                        "InitiativesPage[<div>.onClick]": ()=>setSelectedLeads([])
                    }["InitiativesPage[<div>.onClick]"],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "checkbox",
                            checked: selectedLeads.length === 0,
                            readOnly: true
                        }, void 0, false, {
                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                            lineNumber: 659,
                            columnNumber: 44
                        }, this),
                        "All"
                    ]
                }, void 0, true, {
                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                    lineNumber: 657,
                    columnNumber: 46
                }, this),
                availableLeads.map({
                    "InitiativesPage[availableLeads.map()]": (lead)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${selectedLeads.includes(lead) ? "bg-gray-100 font-semibold" : ""}`,
                            onClick: {
                                "InitiativesPage[availableLeads.map() > <div>.onClick]": ()=>toggleSelection(lead, setSelectedLeads, selectedLeads)
                            }["InitiativesPage[availableLeads.map() > <div>.onClick]"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    checked: selectedLeads.includes(lead),
                                    readOnly: true
                                }, void 0, false, {
                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                    lineNumber: 662,
                                    columnNumber: 69
                                }, this),
                                lead
                            ]
                        }, lead, true, {
                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                            lineNumber: 660,
                            columnNumber: 58
                        }, this)
                }["InitiativesPage[availableLeads.map()]"])
            ]
        }, void 0, true, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 654,
            columnNumber: 27
        }, this);
        $[105] = availableLeads;
        $[106] = menuPosition;
        $[107] = selectedLeads;
        $[108] = showLeadMenu;
        $[109] = t59;
    } else {
        t59 = $[109];
    }
    let t60;
    if ($[110] !== t59) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "px-4 py-2 border text-sm font-semibold relative whitespace-nowrap",
            style: styles.outfitFont,
            children: [
                t58,
                t59
            ]
        }, void 0, true, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 674,
            columnNumber: 11
        }, this);
        $[110] = t59;
        $[111] = t60;
    } else {
        t60 = $[111];
    }
    let t61;
    if ($[112] === Symbol.for("react.memo_cache_sentinel")) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Status"
                }, void 0, false, {
                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                    lineNumber: 682,
                    columnNumber: 62
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "InitiativesPage[<button>.onClick]": (e_5)=>{
                            e_5.stopPropagation();
                            const rect_2 = e_5.target.getBoundingClientRect();
                            setMenuPosition({
                                x: rect_2.left,
                                y: rect_2.bottom
                            });
                            setShowStatusMenu(_InitiativesPageButtonOnClickSetShowStatusMenu);
                            setShowCategoryMenu(false);
                            setShowVPMenu(false);
                            setShowDeptMenu(false);
                            setShowLeadMenu(false);
                            setShowProjectSortMenu(false);
                        }
                    }["InitiativesPage[<button>.onClick]"],
                    className: "ml-2 bg-white text-[#017ACB] px-2 py-1 rounded text-xs font-bold hover:bg-gray-100 transition",
                    children: "▼"
                }, void 0, false, {
                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                    lineNumber: 682,
                    columnNumber: 81
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 682,
            columnNumber: 11
        }, this);
        $[112] = t61;
    } else {
        t61 = $[112];
    }
    let t62;
    if ($[113] !== availableStatuses || $[114] !== menuPosition || $[115] !== selectedStatuses || $[116] !== showStatusMenu) {
        t62 = showStatusMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bg-white text-black shadow-lg rounded w-48 z-50",
            style: {
                top: menuPosition.y,
                left: menuPosition.x
            },
            onClick: _InitiativesPageDivOnClick4,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${selectedStatuses.length === 0 ? "bg-gray-100 font-semibold" : ""}`,
                    onClick: {
                        "InitiativesPage[<div>.onClick]": ()=>setSelectedStatuses([])
                    }["InitiativesPage[<div>.onClick]"],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "checkbox",
                            checked: selectedStatuses.length === 0,
                            readOnly: true
                        }, void 0, false, {
                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                            lineNumber: 709,
                            columnNumber: 44
                        }, this),
                        "All"
                    ]
                }, void 0, true, {
                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                    lineNumber: 707,
                    columnNumber: 46
                }, this),
                availableStatuses.map({
                    "InitiativesPage[availableStatuses.map()]": (status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${selectedStatuses.includes(status) ? "bg-gray-100 font-semibold" : ""}`,
                            onClick: {
                                "InitiativesPage[availableStatuses.map() > <div>.onClick]": ()=>toggleSelection(status, setSelectedStatuses, selectedStatuses)
                            }["InitiativesPage[availableStatuses.map() > <div>.onClick]"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    checked: selectedStatuses.includes(status),
                                    readOnly: true
                                }, void 0, false, {
                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                    lineNumber: 712,
                                    columnNumber: 72
                                }, this),
                                status
                            ]
                        }, status, true, {
                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                            lineNumber: 710,
                            columnNumber: 63
                        }, this)
                }["InitiativesPage[availableStatuses.map()]"])
            ]
        }, void 0, true, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 704,
            columnNumber: 29
        }, this);
        $[113] = availableStatuses;
        $[114] = menuPosition;
        $[115] = selectedStatuses;
        $[116] = showStatusMenu;
        $[117] = t62;
    } else {
        t62 = $[117];
    }
    let t63;
    if ($[118] !== t62) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "px-4 py-2 border text-sm font-semibold relative whitespace-nowrap",
            style: styles.outfitFont,
            children: [
                t61,
                t62
            ]
        }, void 0, true, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 724,
            columnNumber: 11
        }, this);
        $[118] = t62;
        $[119] = t63;
    } else {
        t63 = $[119];
    }
    let t64;
    if ($[120] === Symbol.for("react.memo_cache_sentinel")) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "px-4 py-2 border text-sm font-semibold whitespace-nowrap",
            style: styles.outfitFont,
            children: "Requestor"
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 732,
            columnNumber: 11
        }, this);
        $[120] = t64;
    } else {
        t64 = $[120];
    }
    let t65;
    if ($[121] === Symbol.for("react.memo_cache_sentinel")) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Requestor VP"
                }, void 0, false, {
                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                    lineNumber: 739,
                    columnNumber: 62
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "InitiativesPage[<button>.onClick]": (e_7)=>{
                            e_7.stopPropagation();
                            const rect_3 = e_7.target.getBoundingClientRect();
                            setMenuPosition({
                                x: rect_3.left,
                                y: rect_3.bottom
                            });
                            setShowVPMenu(_InitiativesPageButtonOnClickSetShowVPMenu);
                            setShowCategoryMenu(false);
                            setShowStatusMenu(false);
                            setShowDeptMenu(false);
                            setShowLeadMenu(false);
                            setShowProjectSortMenu(false);
                        }
                    }["InitiativesPage[<button>.onClick]"],
                    className: "ml-2 bg-white text-[#017ACB] px-2 py-1 rounded text-xs font-bold hover:bg-gray-100 transition",
                    children: "▼"
                }, void 0, false, {
                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                    lineNumber: 739,
                    columnNumber: 87
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 739,
            columnNumber: 11
        }, this);
        $[121] = t65;
    } else {
        t65 = $[121];
    }
    let t66;
    if ($[122] !== availableVPs || $[123] !== menuPosition || $[124] !== selectedVPs || $[125] !== showVPMenu) {
        t66 = showVPMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bg-white text-black shadow-lg rounded w-48 z-50",
            style: {
                top: menuPosition.y,
                left: menuPosition.x
            },
            onClick: _InitiativesPageDivOnClick5,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${selectedVPs.length === 0 ? "bg-gray-100 font-semibold" : ""}`,
                    onClick: {
                        "InitiativesPage[<div>.onClick]": ()=>setSelectedVPs([])
                    }["InitiativesPage[<div>.onClick]"],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "checkbox",
                            checked: selectedVPs.length === 0,
                            readOnly: true
                        }, void 0, false, {
                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                            lineNumber: 766,
                            columnNumber: 44
                        }, this),
                        "All"
                    ]
                }, void 0, true, {
                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                    lineNumber: 764,
                    columnNumber: 46
                }, this),
                availableVPs.map({
                    "InitiativesPage[availableVPs.map()]": (vp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${selectedVPs.includes(vp) ? "bg-gray-100 font-semibold" : ""}`,
                            onClick: {
                                "InitiativesPage[availableVPs.map() > <div>.onClick]": ()=>toggleSelection(vp, setSelectedVPs, selectedVPs)
                            }["InitiativesPage[availableVPs.map() > <div>.onClick]"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    checked: selectedVPs.includes(vp),
                                    readOnly: true
                                }, void 0, false, {
                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                    lineNumber: 769,
                                    columnNumber: 67
                                }, this),
                                vp
                            ]
                        }, vp, true, {
                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                            lineNumber: 767,
                            columnNumber: 54
                        }, this)
                }["InitiativesPage[availableVPs.map()]"])
            ]
        }, void 0, true, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 761,
            columnNumber: 25
        }, this);
        $[122] = availableVPs;
        $[123] = menuPosition;
        $[124] = selectedVPs;
        $[125] = showVPMenu;
        $[126] = t66;
    } else {
        t66 = $[126];
    }
    let t67;
    if ($[127] !== t66) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "px-4 py-2 border text-sm font-semibold relative whitespace-nowrap",
            style: styles.outfitFont,
            children: [
                t65,
                t66
            ]
        }, void 0, true, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 781,
            columnNumber: 11
        }, this);
        $[127] = t66;
        $[128] = t67;
    } else {
        t67 = $[128];
    }
    let t68;
    if ($[129] === Symbol.for("react.memo_cache_sentinel")) {
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Requesting Dept"
                }, void 0, false, {
                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                    lineNumber: 789,
                    columnNumber: 62
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "InitiativesPage[<button>.onClick]": (e_9)=>{
                            e_9.stopPropagation();
                            const rect_4 = e_9.target.getBoundingClientRect();
                            setMenuPosition({
                                x: rect_4.left,
                                y: rect_4.bottom
                            });
                            setShowDeptMenu(_InitiativesPageButtonOnClickSetShowDeptMenu);
                            setShowCategoryMenu(false);
                            setShowStatusMenu(false);
                            setShowVPMenu(false);
                            setShowLeadMenu(false);
                            setShowProjectSortMenu(false);
                        }
                    }["InitiativesPage[<button>.onClick]"],
                    className: "ml-2 bg-white text-[#017ACB] px-2 py-1 rounded text-xs font-bold hover:bg-gray-100 transition",
                    children: "▼"
                }, void 0, false, {
                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                    lineNumber: 789,
                    columnNumber: 90
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 789,
            columnNumber: 11
        }, this);
        $[129] = t68;
    } else {
        t68 = $[129];
    }
    let t69;
    if ($[130] !== availableDepts || $[131] !== menuPosition || $[132] !== selectedDepts || $[133] !== showDeptMenu) {
        t69 = showDeptMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bg-white text-black shadow-lg rounded w-48 z-50",
            style: {
                top: menuPosition.y,
                left: menuPosition.x
            },
            onClick: _InitiativesPageDivOnClick6,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${selectedDepts.length === 0 ? "bg-gray-100 font-semibold" : ""}`,
                    onClick: {
                        "InitiativesPage[<div>.onClick]": ()=>setSelectedDepts([])
                    }["InitiativesPage[<div>.onClick]"],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "checkbox",
                            checked: selectedDepts.length === 0,
                            readOnly: true
                        }, void 0, false, {
                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                            lineNumber: 816,
                            columnNumber: 44
                        }, this),
                        "All"
                    ]
                }, void 0, true, {
                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                    lineNumber: 814,
                    columnNumber: 46
                }, this),
                availableDepts.map({
                    "InitiativesPage[availableDepts.map()]": (dept)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${selectedDepts.includes(dept) ? "bg-gray-100 font-semibold" : ""}`,
                            onClick: {
                                "InitiativesPage[availableDepts.map() > <div>.onClick]": ()=>toggleSelection(dept, setSelectedDepts, selectedDepts)
                            }["InitiativesPage[availableDepts.map() > <div>.onClick]"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    checked: selectedDepts.includes(dept),
                                    readOnly: true
                                }, void 0, false, {
                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                    lineNumber: 819,
                                    columnNumber: 69
                                }, this),
                                dept
                            ]
                        }, dept, true, {
                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                            lineNumber: 817,
                            columnNumber: 58
                        }, this)
                }["InitiativesPage[availableDepts.map()]"])
            ]
        }, void 0, true, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 811,
            columnNumber: 27
        }, this);
        $[130] = availableDepts;
        $[131] = menuPosition;
        $[132] = selectedDepts;
        $[133] = showDeptMenu;
        $[134] = t69;
    } else {
        t69 = $[134];
    }
    let t70;
    if ($[135] !== t69) {
        t70 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "px-4 py-2 border text-sm font-semibold relative whitespace-nowrap",
            style: styles.outfitFont,
            children: [
                t68,
                t69
            ]
        }, void 0, true, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 831,
            columnNumber: 11
        }, this);
        $[135] = t69;
        $[136] = t70;
    } else {
        t70 = $[136];
    }
    let t71;
    let t72;
    let t73;
    let t74;
    if ($[137] === Symbol.for("react.memo_cache_sentinel")) {
        t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "px-4 py-2 border text-sm font-semibold whitespace-nowrap",
            style: styles.outfitFont,
            children: "Completion Date"
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 842,
            columnNumber: 11
        }, this);
        t72 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "px-4 py-2 border text-sm font-semibold whitespace-nowrap",
            style: styles.outfitFont,
            children: "Target Period"
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 843,
            columnNumber: 11
        }, this);
        t73 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "px-4 py-2 border text-sm font-semibold whitespace-nowrap",
            style: styles.outfitFont,
            children: "Description"
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 844,
            columnNumber: 11
        }, this);
        t74 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "px-4 py-2 border text-sm font-semibold whitespace-nowrap",
            style: styles.outfitFont,
            children: "Resource Consideration"
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 845,
            columnNumber: 11
        }, this);
        $[137] = t71;
        $[138] = t72;
        $[139] = t73;
        $[140] = t74;
    } else {
        t71 = $[137];
        t72 = $[138];
        t73 = $[139];
        t74 = $[140];
    }
    let t75;
    if ($[141] !== t54 || $[142] !== t57 || $[143] !== t60 || $[144] !== t63 || $[145] !== t67 || $[146] !== t70) {
        t75 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
            className: "bg-[#017ACB] text-white sticky top-0 z-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                children: [
                    t51,
                    t54,
                    t57,
                    t60,
                    t63,
                    t64,
                    t67,
                    t70,
                    t71,
                    t72,
                    t73,
                    t74
                ]
            }, void 0, true, {
                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                lineNumber: 858,
                columnNumber: 72
            }, this)
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 858,
            columnNumber: 11
        }, this);
        $[141] = t54;
        $[142] = t57;
        $[143] = t60;
        $[144] = t63;
        $[145] = t67;
        $[146] = t70;
        $[147] = t75;
    } else {
        t75 = $[147];
    }
    let t76;
    if ($[148] !== filteredInitiatives || $[149] !== handleEditInitiative) {
        let t77;
        if ($[151] !== handleEditInitiative) {
            t77 = ({
                "InitiativesPage[filteredInitiatives.map()]": (item_0, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        className: `hover:bg-black/5 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "sticky left-0 px-4 py-2 border bg-inherit text-black",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "InitiativesPage[filteredInitiatives.map() > <button>.onClick]": ()=>handleEditInitiative(item_0.id)
                                    }["InitiativesPage[filteredInitiatives.map() > <button>.onClick]"],
                                    className: "px-2 py-1 bg-[#017ACB] text-white text-xs rounded hover:bg-blue-700",
                                    style: styles.outfitFont,
                                    children: "Edit"
                                }, void 0, false, {
                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                    lineNumber: 874,
                                    columnNumber: 241
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                lineNumber: 874,
                                columnNumber: 172
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-4 py-2 border text-sm text-black",
                                children: item_0.project
                            }, void 0, false, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                lineNumber: 876,
                                columnNumber: 205
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-4 py-2 border text-sm text-black",
                                children: item_0.category
                            }, void 0, false, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                lineNumber: 876,
                                columnNumber: 278
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-4 py-2 border text-sm text-black",
                                children: item_0.lead
                            }, void 0, false, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                lineNumber: 876,
                                columnNumber: 352
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-4 py-2 border text-sm text-black",
                                children: item_0.status
                            }, void 0, false, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                lineNumber: 876,
                                columnNumber: 422
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-4 py-2 border text-sm text-black",
                                children: item_0.requestor
                            }, void 0, false, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                lineNumber: 876,
                                columnNumber: 494
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-4 py-2 border text-sm text-black",
                                children: item_0.requestor_vp
                            }, void 0, false, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                lineNumber: 876,
                                columnNumber: 569
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-4 py-2 border text-sm text-black",
                                children: item_0.requesting_dept
                            }, void 0, false, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                lineNumber: 876,
                                columnNumber: 647
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-4 py-2 border text-sm text-black",
                                children: item_0.completion_date ? new Date(item_0.completion_date).toLocaleDateString() : ""
                            }, void 0, false, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                lineNumber: 876,
                                columnNumber: 728
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-4 py-2 border text-sm text-black",
                                children: item_0.target_period
                            }, void 0, false, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                lineNumber: 876,
                                columnNumber: 870
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-4 py-2 border text-sm text-black",
                                children: item_0.description
                            }, void 0, false, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                lineNumber: 876,
                                columnNumber: 949
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-4 py-2 border text-sm text-black",
                                children: item_0.resource_consideration
                            }, void 0, false, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                                lineNumber: 876,
                                columnNumber: 1026
                            }, this)
                        ]
                    }, item_0.id, true, {
                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                        lineNumber: 874,
                        columnNumber: 74
                    }, this)
            })["InitiativesPage[filteredInitiatives.map()]"];
            $[151] = handleEditInitiative;
            $[152] = t77;
        } else {
            t77 = $[152];
        }
        t76 = filteredInitiatives.map(t77);
        $[148] = filteredInitiatives;
        $[149] = handleEditInitiative;
        $[150] = t76;
    } else {
        t76 = $[150];
    }
    let t77;
    if ($[153] !== t76) {
        t77 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
            children: t76
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 892,
            columnNumber: 11
        }, this);
        $[153] = t76;
        $[154] = t77;
    } else {
        t77 = $[154];
    }
    let t78;
    if ($[155] !== t75 || $[156] !== t77) {
        t78 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border rounded-lg shadow-sm bg-white overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto overflow-y-auto max-h-[70vh]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "min-w-max w-full border-collapse",
                    children: [
                        t75,
                        t77
                    ]
                }, void 0, true, {
                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                    lineNumber: 900,
                    columnNumber: 143
                }, this)
            }, void 0, false, {
                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
                lineNumber: 900,
                columnNumber: 81
            }, this)
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 900,
            columnNumber: 11
        }, this);
        $[155] = t75;
        $[156] = t77;
        $[157] = t78;
    } else {
        t78 = $[157];
    }
    let t79;
    if ($[158] !== t50 || $[159] !== t78) {
        t79 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6",
            children: [
                t50,
                t78
            ]
        }, void 0, true, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 909,
            columnNumber: 11
        }, this);
        $[158] = t50;
        $[159] = t78;
        $[160] = t79;
    } else {
        t79 = $[160];
    }
    let t80;
    if ($[161] !== t36 || $[162] !== t79) {
        t80 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50",
            children: [
                t36,
                t79
            ]
        }, void 0, true, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Initiatives/page.js",
            lineNumber: 918,
            columnNumber: 11
        }, this);
        $[161] = t36;
        $[162] = t79;
        $[163] = t80;
    } else {
        t80 = $[163];
    }
    return t80;
}
_s(InitiativesPage, "t4JVo6Vy8io67HuB5qbVSlHEi8w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = InitiativesPage;
function _InitiativesPageDivOnClick6(e_10) {
    return e_10.stopPropagation();
}
function _InitiativesPageButtonOnClickSetShowDeptMenu(prev_4) {
    return !prev_4;
}
function _InitiativesPageDivOnClick5(e_8) {
    return e_8.stopPropagation();
}
function _InitiativesPageButtonOnClickSetShowVPMenu(prev_3) {
    return !prev_3;
}
function _InitiativesPageDivOnClick4(e_6) {
    return e_6.stopPropagation();
}
function _InitiativesPageButtonOnClickSetShowStatusMenu(prev_2) {
    return !prev_2;
}
function _InitiativesPageDivOnClick3(e_4) {
    return e_4.stopPropagation();
}
function _InitiativesPageButtonOnClickSetShowLeadMenu(prev_1) {
    return !prev_1;
}
function _InitiativesPageDivOnClick2(e_2) {
    return e_2.stopPropagation();
}
function _InitiativesPageButtonOnClickSetShowCategoryMenu(prev_0) {
    return !prev_0;
}
function _InitiativesPageDivOnClick(e_0) {
    return e_0.stopPropagation();
}
function _InitiativesPageButtonOnClickSetShowProjectSortMenu(prev) {
    return !prev;
}
function _InitiativesPageToggleSelection(value, setFn, current) {
    setFn(current.includes(value) ? current.filter({
        "InitiativesPage[toggleSelection > current.filter()]": (v)=>v !== value
    }["InitiativesPage[toggleSelection > current.filter()]"]) : [
        ...current,
        value
    ]);
}
function _InitiativesPageUseEffectAnonymous2(a_0, b_0) {
    return b_0.project.localeCompare(a_0.project);
}
function _InitiativesPageUseEffectAnonymous(a, b) {
    return a.project.localeCompare(b.project);
}
function _InitiativesPageUseEffectInitiativesFilter2(i_5) {
    return i_5.status !== "Completed";
}
function _InitiativesPageUseEffectInitiativesFilter(i_4) {
    return i_4.status === "Completed";
}
function _InitiativesPageUseEffectFetchInitiativesMappedAllMap5(i_3) {
    return i_3.lead;
}
function _InitiativesPageUseEffectFetchInitiativesMappedAllMap4(i_2) {
    return i_2.requesting_dept;
}
function _InitiativesPageUseEffectFetchInitiativesMappedAllMap3(i_1) {
    return i_1.requestor_vp;
}
function _InitiativesPageUseEffectFetchInitiativesMappedAllMap2(i_0) {
    return i_0.status;
}
function _InitiativesPageUseEffectFetchInitiativesMappedAllMap(i) {
    return i.category;
}
function _InitiativesPageUseEffectFetchInitiativesMapFields(data) {
    return data.map(_InitiativesPageUseEffectFetchInitiativesMapFieldsDataMap);
}
function _InitiativesPageUseEffectFetchInitiativesMapFieldsDataMap(item) {
    return {
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
    };
}
var _c;
__turbopack_context__.k.register(_c, "InitiativesPage");
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
"[project]/resource-and-capacity-management-app/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    var ReactSharedInternals = __turbopack_context__.r("[project]/resource-and-capacity-management-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    exports.c = function(size) {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher.useMemoCache(size);
    };
}();
}),
"[project]/resource-and-capacity-management-app/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/resource-and-capacity-management-app/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/resource-and-capacity-management-app/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/resource-and-capacity-management-app/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=resource-and-capacity-management-app_3ad5018f._.js.map