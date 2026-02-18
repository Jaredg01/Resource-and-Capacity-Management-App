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
"[project]/resource-and-capacity-management-app/app/api/Resource-Manager/summary/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$mongodb$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs, [project]/resource-and-capacity-management-app/node_modules/mongodb)");
;
;
/* ---------------------------------------------------------
   MONGODB CONNECTION SETUP
--------------------------------------------------------- */ const uri = process.env.MONGODB_URI;
const client = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$mongodb$29$__["MongoClient"](uri);
/* ---------------------------------------------------------
   CONNECT TO DATABASE
--------------------------------------------------------- */ async function connectDB() {
    if (!client.topology || !client.topology.isConnected()) {
        await client.connect();
        console.log("Connected to MongoDB (Summary API)");
    }
    return client.db();
}
async function GET(req) {
    try {
        const db = await connectDB();
        const { searchParams } = new URL(req.url);
        const filter = searchParams.get("filter");
        const username = searchParams.get("username");
        let baseQuery = {};
        /* ---------------------------------------------------------
       MINE FILTER LOGIC
    --------------------------------------------------------- */ if (filter === "mine" && username) {
            const accountDoc = await db.collection("account").findOne({
                "account.username": username.trim()
            });
            if (!accountDoc) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    backlog: 0,
                    active: 0,
                    hold: 0
                });
            }
            const employee = await db.collection("employee").findOne({
                emp_id: accountDoc.emp_id
            });
            if (!employee) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    backlog: 0,
                    active: 0,
                    hold: 0
                });
            }
            baseQuery.leader = employee.emp_name;
        }
        /* ---------------------------------------------------------
       INITIATIVE COUNTS (Planned Removed)
    --------------------------------------------------------- */ const backlog = await db.collection("assignment").countDocuments({
            ...baseQuery,
            status: "Backlog"
        });
        const active = await db.collection("assignment").countDocuments({
            ...baseQuery,
            status: {
                $in: [
                    "On Going",
                    "In Progress"
                ]
            }
        });
        const hold = await db.collection("assignment").countDocuments({
            ...baseQuery,
            status: "On Hold"
        });
        /* ---------------------------------------------------------
       RESPONSE PAYLOAD (Planned Removed)
    --------------------------------------------------------- */ return __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            backlog,
            active,
            hold
        });
    } catch (err) {
        console.error("Summary API error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Server error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1bec9b00._.js.map