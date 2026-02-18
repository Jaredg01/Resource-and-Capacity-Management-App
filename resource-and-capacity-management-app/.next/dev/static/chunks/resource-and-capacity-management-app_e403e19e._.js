(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResourcesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const styles = {
    outfitFont: {
        fontFamily: "Outfit, sans-serif"
    }
};
const MONTHS = [
    {
        key: 202501,
        label: "Jan-25"
    },
    {
        key: 202502,
        label: "Feb-25"
    },
    {
        key: 202503,
        label: "Mar-25"
    },
    {
        key: 202504,
        label: "Apr-25"
    },
    {
        key: 202505,
        label: "May-25"
    },
    {
        key: 202506,
        label: "Jun-25"
    },
    {
        key: 202507,
        label: "Jul-25"
    },
    {
        key: 202508,
        label: "Aug-25"
    },
    {
        key: 202509,
        label: "Sep-25"
    },
    {
        key: 202510,
        label: "Oct-25"
    },
    {
        key: 202511,
        label: "Nov-25"
    },
    {
        key: 202512,
        label: "Dec-25"
    },
    {
        key: 202601,
        label: "Jan-26"
    },
    {
        key: 202602,
        label: "Feb-26"
    },
    {
        key: 202603,
        label: "Mar-26"
    },
    {
        key: 202604,
        label: "Apr-26"
    }
];
function ResourcesPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(96);
    if ($[0] !== "96f840038a848f73f6080c1e4646fa2f9b5ee1e5632e044c2eb0b2ab4d6fb307") {
        for(let $i = 0; $i < 96; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "96f840038a848f73f6080c1e4646fa2f9b5ee1e5632e044c2eb0b2ab4d6fb307";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [employees, setEmployees] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            depts: [],
            titles: [],
            managers: []
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [, setOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const [filteredEmployees, setFilteredEmployees] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const [selectedDepts, setSelectedDepts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t3);
    const [activeMenu, setActiveMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            x: 0,
            y: 0
        };
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const [menuPos, setMenuPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t4);
    let t5;
    if ($[6] !== router) {
        t5 = ({
            "ResourcesPage[useEffect()]": ()=>{
                const userData = localStorage.getItem("user");
                if (!userData) {
                    router.push("/login");
                } else {
                    setUser(JSON.parse(userData));
                }
            }
        })["ResourcesPage[useEffect()]"];
        $[6] = router;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = [];
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    let t8;
    if ($[9] !== user) {
        t7 = ({
            "ResourcesPage[useEffect()]": ()=>{
                if (!user) {
                    return;
                }
                const loadData = {
                    "ResourcesPage[useEffect() > loadData]": async ()=>{
                        const res = await fetch(`/api/Resource-Manager/Employees?ts=${Date.now()}`);
                        const data = await res.json();
                        const safeData = Array.isArray(data) ? data : [];
                        setEmployees(safeData);
                        setFilteredEmployees(safeData);
                    }
                }["ResourcesPage[useEffect() > loadData]"];
                loadData();
            }
        })["ResourcesPage[useEffect()]"];
        t8 = [
            user
        ];
        $[9] = user;
        $[10] = t7;
        $[11] = t8;
    } else {
        t7 = $[10];
        t8 = $[11];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let t10;
    let t9;
    if ($[12] !== employees) {
        t9 = ({
            "ResourcesPage[useEffect()]": ()=>{
                if (employees.length > 0) {
                    setOptions({
                        "ResourcesPage[useEffect() > setOptions()]": (prev)=>({
                                ...prev,
                                managers: [
                                    ...new Set(employees.map(_ResourcesPageUseEffectSetOptionsEmployeesMap).filter(Boolean))
                                ]
                            })
                    }["ResourcesPage[useEffect() > setOptions()]"]);
                }
            }
        })["ResourcesPage[useEffect()]"];
        t10 = [
            employees
        ];
        $[12] = employees;
        $[13] = t10;
        $[14] = t9;
    } else {
        t10 = $[13];
        t9 = $[14];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t9, t10);
    let t11;
    if ($[15] !== activeTab || $[16] !== employees || $[17] !== selectedDepts || $[18] !== user?.emp_id) {
        t11 = ({
            "ResourcesPage[useEffect()]": ()=>{
                let base = activeTab === "mine" ? employees.filter({
                    "ResourcesPage[useEffect() > employees.filter()]": (e_0)=>e_0.manager_id === user?.emp_id
                }["ResourcesPage[useEffect() > employees.filter()]"]) : employees;
                if (selectedDepts.length > 0) {
                    base = base.filter({
                        "ResourcesPage[useEffect() > base.filter()]": (e_1)=>selectedDepts.includes(e_1.dept_name)
                    }["ResourcesPage[useEffect() > base.filter()]"]);
                }
                setFilteredEmployees(base);
            }
        })["ResourcesPage[useEffect()]"];
        $[15] = activeTab;
        $[16] = employees;
        $[17] = selectedDepts;
        $[18] = user?.emp_id;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] !== activeTab || $[21] !== employees || $[22] !== selectedDepts) {
        t12 = [
            activeTab,
            selectedDepts,
            employees
        ];
        $[20] = activeTab;
        $[21] = employees;
        $[22] = selectedDepts;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t11, t12);
    const getCapacityAmount = _ResourcesPageGetCapacityAmount;
    if (!user) {
        return null;
    }
    let t13;
    if ($[24] !== router) {
        t13 = ({
            "ResourcesPage[<div>.onClick]": ()=>router.push("/Resource-Manager/dashboard")
        })["ResourcesPage[<div>.onClick]"];
        $[24] = router;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    let t15;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "/CapstoneDynamicsLogo.png",
            alt: "Logo",
            className: "w-auto h-[clamp(3.2rem,3.8vw,4rem)]"
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
            lineNumber: 248,
            columnNumber: 11
        }, this);
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "font-bold text-white leading-tight ml-4 text-[clamp(1.6rem,1.7vw,2rem)]",
            style: styles.outfitFont,
            children: "Capstone Dynamics"
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
            lineNumber: 249,
            columnNumber: 11
        }, this);
        $[26] = t14;
        $[27] = t15;
    } else {
        t14 = $[26];
        t15 = $[27];
    }
    let t16;
    if ($[28] !== t13) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center cursor-pointer flex-none",
            onClick: t13,
            children: [
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
            lineNumber: 258,
            columnNumber: 11
        }, this);
        $[28] = t13;
        $[29] = t16;
    } else {
        t16 = $[29];
    }
    let t17;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute left-1/2 -translate-x-1/2 text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "font-bold text-white leading-tight text-[clamp(1.2rem,1.3vw,1.6rem)]",
                style: styles.outfitFont,
                children: "Resource & Capacity Management Planner"
            }, void 0, false, {
                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                lineNumber: 266,
                columnNumber: 75
            }, this)
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
            lineNumber: 266,
            columnNumber: 11
        }, this);
        $[30] = t17;
    } else {
        t17 = $[30];
    }
    const t18 = user?.username || "";
    let t19;
    if ($[31] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-semibold text-white text-[clamp(1rem,1.15vw,1.25rem)]",
            style: styles.outfitFont,
            children: t18
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
            lineNumber: 274,
            columnNumber: 11
        }, this);
        $[31] = t18;
        $[32] = t19;
    } else {
        t19 = $[32];
    }
    let t20;
    if ($[33] !== router) {
        t20 = ({
            "ResourcesPage[<div>.onClick]": ()=>router.push("/Resource-Manager/Profile/view-profile")
        })["ResourcesPage[<div>.onClick]"];
        $[33] = router;
        $[34] = t20;
    } else {
        t20 = $[34];
    }
    let t21;
    if ($[35] !== user?.username) {
        t21 = user?.username?.charAt(0)?.toUpperCase() || "";
        $[35] = user?.username;
        $[36] = t21;
    } else {
        t21 = $[36];
    }
    let t22;
    if ($[37] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[#017ACB] font-bold text-[clamp(1.1rem,1.3vw,1.5rem)]",
            children: t21
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
            lineNumber: 300,
            columnNumber: 11
        }, this);
        $[37] = t21;
        $[38] = t22;
    } else {
        t22 = $[38];
    }
    let t23;
    if ($[39] !== t20 || $[40] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: t20,
            className: "rounded-full bg-white flex items-center justify-center cursor-pointer hover:opacity-90 transition\r\n                           w-[clamp(2.4rem,2.8vw,3.0rem)] h-[clamp(2.4rem,2.8vw,3.0rem)]",
            children: t22
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
            lineNumber: 308,
            columnNumber: 11
        }, this);
        $[39] = t20;
        $[40] = t22;
        $[41] = t23;
    } else {
        t23 = $[41];
    }
    let t24;
    if ($[42] !== t19 || $[43] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4 ml-auto flex-none",
            children: [
                t19,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
            lineNumber: 317,
            columnNumber: 11
        }, this);
        $[42] = t19;
        $[43] = t23;
        $[44] = t24;
    } else {
        t24 = $[44];
    }
    let t25;
    if ($[45] !== t16 || $[46] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "bg-[#017ACB] shadow-sm w-full relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 sm:px-6 lg:px-8 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex items-center h-[clamp(4.5rem,5vw,5.5rem)] w-full",
                    children: [
                        t16,
                        t17,
                        t24
                    ]
                }, void 0, true, {
                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                    lineNumber: 326,
                    columnNumber: 115
                }, this)
            }, void 0, false, {
                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                lineNumber: 326,
                columnNumber: 70
            }, this)
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
            lineNumber: 326,
            columnNumber: 11
        }, this);
        $[45] = t16;
        $[46] = t24;
        $[47] = t25;
    } else {
        t25 = $[47];
    }
    let t26;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-4xl font-bold text-gray-900",
            style: styles.outfitFont,
            children: "Resources"
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
            lineNumber: 335,
            columnNumber: 11
        }, this);
        $[48] = t26;
    } else {
        t26 = $[48];
    }
    let t27;
    if ($[49] !== router) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4 mb-4",
            children: [
                t26,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "ResourcesPage[<button>.onClick]": ()=>router.push("/Resource-Manager/dashboard")
                    }["ResourcesPage[<button>.onClick]"],
                    className: "px-4 py-2 rounded text-sm bg-white text-gray-700 border hover:bg-gray-100 transition",
                    style: styles.outfitFont,
                    children: "Back to Dashboard"
                }, void 0, false, {
                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                    lineNumber: 342,
                    columnNumber: 62
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
            lineNumber: 342,
            columnNumber: 11
        }, this);
        $[49] = router;
        $[50] = t27;
    } else {
        t27 = $[50];
    }
    let t28;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = ({
            "ResourcesPage[<button>.onClick]": ()=>setActiveTab("all")
        })["ResourcesPage[<button>.onClick]"];
        $[51] = t28;
    } else {
        t28 = $[51];
    }
    const t29 = `px-4 py-2 rounded ${activeTab === "all" ? "bg-[#017ACB] text-white" : "bg-white border"}`;
    let t30;
    if ($[52] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t28,
            className: t29,
            children: "All"
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
            lineNumber: 362,
            columnNumber: 11
        }, this);
        $[52] = t29;
        $[53] = t30;
    } else {
        t30 = $[53];
    }
    let t31;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = ({
            "ResourcesPage[<button>.onClick]": ()=>setActiveTab("mine")
        })["ResourcesPage[<button>.onClick]"];
        $[54] = t31;
    } else {
        t31 = $[54];
    }
    const t32 = `px-4 py-2 rounded ${activeTab === "mine" ? "bg-[#017ACB] text-white" : "bg-white border"}`;
    let t33;
    if ($[55] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t31,
            className: t32,
            children: "My Team"
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
            lineNumber: 380,
            columnNumber: 11
        }, this);
        $[55] = t32;
        $[56] = t33;
    } else {
        t33 = $[56];
    }
    let t34;
    if ($[57] !== router) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "ResourcesPage[<button>.onClick]": ()=>router.push("/add-resource")
            }["ResourcesPage[<button>.onClick]"],
            className: "bg-white border px-4 py-2 rounded font-bold text-[#017ACB] hover:bg-gray-50",
            children: "+ Add Resource"
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
            lineNumber: 388,
            columnNumber: 11
        }, this);
        $[57] = router;
        $[58] = t34;
    } else {
        t34 = $[58];
    }
    let t35;
    if ($[59] !== t30 || $[60] !== t33 || $[61] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2",
            children: [
                t30,
                t33,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
            lineNumber: 398,
            columnNumber: 11
        }, this);
        $[59] = t30;
        $[60] = t33;
        $[61] = t34;
        $[62] = t35;
    } else {
        t35 = $[62];
    }
    let t36;
    if ($[63] !== t27 || $[64] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center mb-6",
            children: [
                t27,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
            lineNumber: 408,
            columnNumber: 11
        }, this);
        $[63] = t27;
        $[64] = t35;
        $[65] = t36;
    } else {
        t36 = $[65];
    }
    let t37;
    let t38;
    let t39;
    if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "sticky left-0 bg-[#017ACB] p-3 border-r z-30",
            children: "Edit"
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
            lineNumber: 419,
            columnNumber: 11
        }, this);
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "p-3 border-r text-left min-w-[150px]",
            children: "Name"
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
            lineNumber: 420,
            columnNumber: 11
        }, this);
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "p-3 border-r text-left min-w-[180px]",
            children: "Title"
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
            lineNumber: 421,
            columnNumber: 11
        }, this);
        $[66] = t37;
        $[67] = t38;
        $[68] = t39;
    } else {
        t37 = $[66];
        t38 = $[67];
        t39 = $[68];
    }
    let t40;
    if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Department"
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
            lineNumber: 432,
            columnNumber: 11
        }, this);
        $[69] = t40;
    } else {
        t40 = $[69];
    }
    let t41;
    if ($[70] !== activeMenu) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "p-3 border-r text-left min-w-[130px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    t40,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "text-[10px]",
                        onClick: {
                            "ResourcesPage[<button>.onClick]": (e_2)=>{
                                const r = e_2.target.getBoundingClientRect();
                                setMenuPos({
                                    x: r.left,
                                    y: r.bottom
                                });
                                setActiveMenu(activeMenu === "dept" ? null : "dept");
                                e_2.stopPropagation();
                            }
                        }["ResourcesPage[<button>.onClick]"],
                        children: "▼"
                    }, void 0, false, {
                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                        lineNumber: 439,
                        columnNumber: 120
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                lineNumber: 439,
                columnNumber: 64
            }, this)
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
            lineNumber: 439,
            columnNumber: 11
        }, this);
        $[70] = activeMenu;
        $[71] = t41;
    } else {
        t41 = $[71];
    }
    let t42;
    let t43;
    if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
            className: "p-3 border-r text-center min-w-[100px]",
            children: "Reports To"
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
            lineNumber: 458,
            columnNumber: 11
        }, this);
        t43 = MONTHS.map(_ResourcesPageMONTHSMap);
        $[72] = t42;
        $[73] = t43;
    } else {
        t42 = $[72];
        t43 = $[73];
    }
    let t44;
    if ($[74] !== t41) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
            className: "bg-[#017ACB] text-white sticky top-0 z-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                children: [
                    t37,
                    t38,
                    t39,
                    t41,
                    t42,
                    t43
                ]
            }, void 0, true, {
                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                lineNumber: 468,
                columnNumber: 72
            }, this)
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
            lineNumber: 468,
            columnNumber: 11
        }, this);
        $[74] = t41;
        $[75] = t44;
    } else {
        t44 = $[75];
    }
    let t45;
    if ($[76] !== filteredEmployees) {
        let t46;
        if ($[78] === Symbol.for("react.memo_cache_sentinel")) {
            t46 = ({
                "ResourcesPage[filteredEmployees.map()]": (emp, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        className: i % 2 === 0 ? "bg-white" : "bg-gray-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "sticky left-0 bg-inherit p-3 border text-center z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-[#017ACB] text-white text-[10px] px-2 py-1 rounded",
                                    children: "Edit"
                                }, void 0, false, {
                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                    lineNumber: 479,
                                    columnNumber: 205
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                lineNumber: 479,
                                columnNumber: 136
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-4 py-2 border text-sm text-black",
                                children: emp.emp_name
                            }, void 0, false, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                lineNumber: 479,
                                columnNumber: 297
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-4 py-2 border text-sm text-black",
                                children: emp.emp_title
                            }, void 0, false, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                lineNumber: 479,
                                columnNumber: 368
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-4 py-2 border text-sm text-black",
                                children: emp.dept_name || emp.dept_no
                            }, void 0, false, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                lineNumber: 479,
                                columnNumber: 440
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-4 py-2 border text-sm text-black",
                                children: emp.manager_name ? emp.manager_name : emp.manager_id || "-"
                            }, void 0, false, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                lineNumber: 479,
                                columnNumber: 527
                            }, this),
                            MONTHS.map({
                                "ResourcesPage[filteredEmployees.map() > MONTHS.map()]": (m_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-4 py-2 border text-center text-xs text-black",
                                        children: getCapacityAmount(emp.capacity, m_0.key)
                                    }, m_0.key, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                        lineNumber: 480,
                                        columnNumber: 77
                                    }, this)
                            }["ResourcesPage[filteredEmployees.map() > MONTHS.map()]"])
                        ]
                    }, emp.emp_id, true, {
                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                        lineNumber: 479,
                        columnNumber: 63
                    }, this)
            })["ResourcesPage[filteredEmployees.map()]"];
            $[78] = t46;
        } else {
            t46 = $[78];
        }
        t45 = filteredEmployees.map(t46);
        $[76] = filteredEmployees;
        $[77] = t45;
    } else {
        t45 = $[77];
    }
    let t46;
    if ($[79] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
            className: "divide-y",
            children: t45
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
            lineNumber: 495,
            columnNumber: 11
        }, this);
        $[79] = t45;
        $[80] = t46;
    } else {
        t46 = $[80];
    }
    let t47;
    if ($[81] !== t44 || $[82] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white border rounded-lg shadow-sm overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto max-h-[75vh]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full text-sm border-collapse",
                    children: [
                        t44,
                        t46
                    ]
                }, void 0, true, {
                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                    lineNumber: 503,
                    columnNumber: 127
                }, this)
            }, void 0, false, {
                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                lineNumber: 503,
                columnNumber: 81
            }, this)
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
            lineNumber: 503,
            columnNumber: 11
        }, this);
        $[81] = t44;
        $[82] = t46;
        $[83] = t47;
    } else {
        t47 = $[83];
    }
    let t48;
    if ($[84] !== t36 || $[85] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "p-6",
            children: [
                t36,
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
            lineNumber: 512,
            columnNumber: 11
        }, this);
        $[84] = t36;
        $[85] = t47;
        $[86] = t48;
    } else {
        t48 = $[86];
    }
    let t49;
    if ($[87] !== activeMenu || $[88] !== employees || $[89] !== menuPos || $[90] !== selectedDepts) {
        t49 = activeMenu === "dept" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bg-white border shadow-xl rounded-md p-2 z-[100] w-48",
            style: {
                top: menuPos.y + 5,
                left: menuPos.x
            },
            children: [
                [
                    ...new Set(employees.map(_ResourcesPageEmployeesMap))
                ].map({
                    "ResourcesPage[(anonymous)()]": (dept)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex items-center gap-2 p-1 hover:bg-gray-100 cursor-pointer text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    checked: selectedDepts.includes(dept),
                                    onChange: {
                                        "ResourcesPage[(anonymous)() > <input>.onChange]": ()=>setSelectedDepts({
                                                "ResourcesPage[(anonymous)() > <input>.onChange > setSelectedDepts()]": (prev_0)=>prev_0.includes(dept) ? prev_0.filter({
                                                        "ResourcesPage[(anonymous)() > <input>.onChange > setSelectedDepts() > prev_0.filter()]": (d)=>d !== dept
                                                    }["ResourcesPage[(anonymous)() > <input>.onChange > setSelectedDepts() > prev_0.filter()]"]) : [
                                                        ...prev_0,
                                                        dept
                                                    ]
                                            }["ResourcesPage[(anonymous)() > <input>.onChange > setSelectedDepts()]"])
                                    }["ResourcesPage[(anonymous)() > <input>.onChange]"]
                                }, void 0, false, {
                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                    lineNumber: 525,
                                    columnNumber: 148
                                }, this),
                                dept
                            ]
                        }, dept, true, {
                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                            lineNumber: 525,
                            columnNumber: 49
                        }, this)
                }["ResourcesPage[(anonymous)()]"]),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "w-full text-xs text-blue-600 border-t mt-2 pt-1",
                    onClick: {
                        "ResourcesPage[<button>.onClick]": ()=>setSelectedDepts([])
                    }["ResourcesPage[<button>.onClick]"],
                    children: "Clear"
                }, void 0, false, {
                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                    lineNumber: 532,
                    columnNumber: 42
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
            lineNumber: 521,
            columnNumber: 36
        }, this);
        $[87] = activeMenu;
        $[88] = employees;
        $[89] = menuPos;
        $[90] = selectedDepts;
        $[91] = t49;
    } else {
        t49 = $[91];
    }
    let t50;
    if ($[92] !== t25 || $[93] !== t48 || $[94] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50",
            children: [
                t25,
                t48,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
            lineNumber: 545,
            columnNumber: 11
        }, this);
        $[92] = t25;
        $[93] = t48;
        $[94] = t49;
        $[95] = t50;
    } else {
        t50 = $[95];
    }
    return t50;
}
_s(ResourcesPage, "l0OpGc6hAHUq6CZMA4rKM6bo2vc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ResourcesPage;
function _ResourcesPageEmployeesMap(e_3) {
    return e_3.dept_name;
}
function _ResourcesPageMONTHSMap(m) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        className: "p-2 border-r text-center text-[10px] min-w-[60px]",
        children: m.label
    }, m.key, false, {
        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
        lineNumber: 559,
        columnNumber: 10
    }, this);
}
function _ResourcesPageGetCapacityAmount(capacityArr, monthKey) {
    const record = capacityArr?.find({
        "ResourcesPage[getCapacityAmount > (anonymous)()]": (c)=>c.date === monthKey
    }["ResourcesPage[getCapacityAmount > (anonymous)()]"]);
    return record ? record.amount : 1;
}
function _ResourcesPageUseEffectSetOptionsEmployeesMap(e) {
    return e.manager_name;
}
var _c;
__turbopack_context__.k.register(_c, "ResourcesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/resource-and-capacity-management-app/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
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

var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
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

var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
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

//# sourceMappingURL=resource-and-capacity-management-app_e403e19e._.js.map