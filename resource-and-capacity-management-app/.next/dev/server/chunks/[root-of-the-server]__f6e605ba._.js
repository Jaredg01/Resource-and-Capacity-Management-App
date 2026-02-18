module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

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
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/mongodb [external] (mongodb, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongodb", () => require("mongodb"));

module.exports = mod;
}),
"[project]/resource-and-capacity-management-app/app/api/Resource-Manager/calendar-view/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs)");
;
;
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = 'ResourceManagementAPP_DB';
let client = null;
/* ---------------------------------------------------------
   MONGODB CLIENT (Singleton)
   ---------------------------------------------------------
   PURPOSE:
   - Ensures only one MongoDB client instance is created
   - Prevents repeated connections in serverless environments
   - Reuses the same connection for GET + POST handlers
--------------------------------------------------------- */ async function getClient() {
    if (!client) {
        client = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["MongoClient"](MONGODB_URI);
        await client.connect(); // Establish connection once
    }
    return client;
}
/* ---------------------------------------------------------
   Convert YYYYMM → "Jan-25"
   ---------------------------------------------------------
   PURPOSE:
   - Converts numeric YYYYMM format into a readable label
   - Used for dropdowns, tables, and UI month headers
--------------------------------------------------------- */ function formatMonthLabel(yyyymm) {
    const s = String(yyyymm);
    const year = Number(s.slice(0, 4));
    const month = Number(s.slice(4, 6));
    const date = new Date(year, month - 1, 1);
    const shortMonth = date.toLocaleString('en-US', {
        month: 'short'
    });
    const shortYear = String(year).slice(2);
    return `${shortMonth}-${shortYear}`;
}
async function GET() {
    try {
        const mongo = await getClient();
        const db = mongo.db(DB_NAME);
        const allocationCol = db.collection('allocation');
        // Pull distinct month values (e.g., Int32(202507))
        const rawMonths = await allocationCol.distinct('date');
        if (!rawMonths || rawMonths.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                months: [],
                formatted: []
            });
        }
        // Normalize to plain JS numbers
        const numericMonths = rawMonths.map((m)=>Number(m)).filter((m)=>!Number.isNaN(m)); // Remove invalid entries
        const today = new Date();
        const thisYYYYMM = today.getFullYear() * 100 + (today.getMonth() + 1);
        // Compute YYYYMM for 12 months ago
        const oneYearAgo = new Date(today);
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
        const oneYearAgoYYYYMM = oneYearAgo.getFullYear() * 100 + (oneYearAgo.getMonth() + 1);
        // Keep only months within the last 12 months
        const filtered = numericMonths.filter((m)=>m >= oneYearAgoYYYYMM && m <= thisYYYYMM).sort((a, b)=>a - b);
        // Attach formatted labels
        const formatted = filtered.map((m)=>({
                yyyymm: m,
                label: formatMonthLabel(m)
            }));
        return __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            months: filtered,
            formatted
        });
    } catch (err) {
        console.error('Error in GET /calendar-view:', err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Failed to load available months'
        }, {
            status: 500
        });
    }
}
async function POST(req) {
    try {
        const { months, emp_id } = await req.json();
        // Validate input
        if (!months || !Array.isArray(months) || months.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Months array is required'
            }, {
                status: 400
            });
        }
        const mongo = await getClient();
        const db = mongo.db(DB_NAME);
        const allocationCol = db.collection('allocation');
        // Build query
        const query = {
            date: {
                $in: months
            },
            ...emp_id ? {
                emp_id
            } : {}
        };
        // Fetch all matching rows
        const results = await allocationCol.find(query).toArray();
        /* -----------------------------------------------------
       GROUP ACTIVITIES BY MONTH (WITH CATEGORY)
    ----------------------------------------------------- */ const activitiesByMonth = months.map((yyyymm)=>{
            const monthRows = results.filter((r)=>Number(r.date) === Number(yyyymm));
            const unique = [];
            const seen = new Set();
            monthRows.forEach((r)=>{
                const key = `${r.activity}__${r.category}`;
                if (!seen.has(key)) {
                    seen.add(key);
                    unique.push({
                        activity: r.activity,
                        category: r.category
                    });
                }
            });
            return {
                yyyymm,
                label: formatMonthLabel(yyyymm),
                activities: unique
            };
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            activitiesByMonth
        });
    } catch (err) {
        console.error('Error in POST /calendar-view:', err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Failed to load activities'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f6e605ba._.js.map