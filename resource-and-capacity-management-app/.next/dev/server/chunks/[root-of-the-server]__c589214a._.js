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
"[project]/resource-and-capacity-management-app/app/api/Resource-Manager/Initiatives/Dropdowns/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
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
   - Loads connection string from environment
   - Reuses a single MongoClient instance
   - Prevents duplicate connections during hot reloads
--------------------------------------------------------- */ // Connection string loaded from environment variables
const uri = process.env.MONGODB_URI;
// Shared MongoDB client instance
const client = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$mongodb$29$__["MongoClient"](uri);
/* ---------------------------------------------------------
   CONNECT TO DATABASE
   - Opens a connection only if not already active
   - Ensures stable DB access across API calls
   - Returns active database instance (explicit DB name)
--------------------------------------------------------- */ async function connectDB() {
    if (!client.topology || !client.topology.isConnected()) {
        await client.connect();
    }
    return client.db("ResourceManagementAPP_DB");
}
async function GET() {
    try {
        const db = await connectDB();
        /* ---------------------------------------------------------
       LEADS (acc_type_id = 1)
       - Fetches all Resource Managers
       - Joins employee info via emp_id
       - Returns only employee names
    --------------------------------------------------------- */ const leads = await db.collection("account").aggregate([
            {
                $match: {
                    "account.acc_type_id": 1
                }
            },
            {
                $lookup: {
                    from: "employee",
                    localField: "emp_id",
                    foreignField: "emp_id",
                    as: "employee_info"
                }
            },
            {
                $unwind: "$employee_info"
            },
            {
                $project: {
                    _id: 0,
                    emp_name: "$employee_info.emp_name"
                }
            }
        ]).toArray();
        /* ---------------------------------------------------------
       REQUESTORS + REQUESTOR VPs (acc_type_id = 1 or 2)
       - Fetches all employees eligible for:
           • Requestor dropdown
           • Requestor VP dropdown
       - Includes:
           • Resource Managers (1)
           • Requestors / VPs (2)
       - Returns:
           • emp_name
           • acc_type_id (useful for UI grouping)
    --------------------------------------------------------- */ const requestors = await db.collection("account").aggregate([
            {
                $match: {
                    "account.acc_type_id": {
                        $in: [
                            1,
                            2
                        ]
                    }
                }
            },
            {
                $lookup: {
                    from: "employee",
                    localField: "emp_id",
                    foreignField: "emp_id",
                    as: "employee_info"
                }
            },
            {
                $unwind: "$employee_info"
            },
            {
                $project: {
                    _id: 0,
                    emp_name: "$employee_info.emp_name",
                    acc_type_id: "$account.acc_type_id"
                }
            }
        ]).toArray();
        /* ---------------------------------------------------------
       RESPONSE PAYLOAD
       - Returns structured dropdown lists
       - Used by frontend initiative forms
    --------------------------------------------------------- */ return __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            employees: leads,
            requestors: requestors
        });
    } catch (err) {
        /* ---------------------------------------------------------
       ERROR HANDLING
       - Logs unexpected server errors
       - Returns generic failure response
    --------------------------------------------------------- */ console.error("Dropdown API error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to load employee names"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c589214a._.js.map