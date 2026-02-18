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
"[project]/resource-and-capacity-management-app/app/api/Resource-Manager/Initiatives/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ---------------------------------------------------------
   IMPORTS & DATABASE CLIENT SETUP
   - NextResponse: used to return API responses in Next.js
   - MongoClient: used to connect to MongoDB Atlas
   - uri: connection string stored in environment variables
   - client: reusable MongoDB client instance
--------------------------------------------------------- */ __turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs)");
;
;
const uri = process.env.MONGODB_URI;
const client = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["MongoClient"](uri);
/* ---------------------------------------------------------
   DATABASE CONNECTION HANDLER
   - Ensures a single MongoDB connection is reused
   - Prevents multiple connections during hot reload
   - Returns the active database instance
   - Database name: ResourceManagementAPP_DB
--------------------------------------------------------- */ async function connectDB() {
    if (!client.topology || !client.topology.isConnected()) {
        await client.connect();
        console.log("Connected to MongoDB (assignment)");
    }
    return client.db("ResourceManagementAPP_DB");
}
async function GET(request) {
    try {
        const db = await connectDB();
        /* ---------------------------------------------------------
       OPTIONAL: USERNAME FOR "MY INITIATIVES"
       - If provided, backend will also return initiatives
         where the logged-in user is the leader.
    --------------------------------------------------------- */ const { searchParams } = new URL(request.url);
        const username = searchParams.get("username");
        /* ---------------------------------------------------------
       FETCH ALL ASSIGNMENTS (WITH LOOKUPS)
       - Joins VP → employee → department
       - Produces enriched assignment objects
    --------------------------------------------------------- */ const allAssignments = await db.collection("assignment").aggregate([
            {
                $lookup: {
                    from: "employee",
                    localField: "requestor_vp",
                    foreignField: "emp_name",
                    as: "vp_employee"
                }
            },
            {
                $unwind: {
                    path: "$vp_employee",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: "department",
                    localField: "vp_employee.dept_no",
                    foreignField: "dept_no",
                    as: "vp_department"
                }
            },
            {
                $unwind: {
                    path: "$vp_department",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $project: {
                    _id: 1,
                    project_name: 1,
                    category: 1,
                    leader: 1,
                    status: 1,
                    requestor: 1,
                    requestor_vp: 1,
                    requesting_dept: "$vp_department.dept_name",
                    target_period: 1,
                    completion_date: 1,
                    description: 1,
                    resource_notes: 1
                }
            }
        ]).toArray();
        /* ---------------------------------------------------------
       RESOLVE "MY INITIATIVES" (IF USERNAME PROVIDED)
       ERD Chain:
       1. account.username → emp_id
       2. employee.emp_id → emp_name
       3. assignment.leader === emp_name
    --------------------------------------------------------- */ let myInitiatives = [];
        if (username) {
            const account = await db.collection("account").findOne({
                "account.username": username
            });
            if (account) {
                const employee = await db.collection("employee").findOne({
                    emp_id: account.emp_id
                });
                if (employee) {
                    myInitiatives = allAssignments.filter((i)=>i.leader === employee.emp_name && i.status !== "Completed");
                }
            }
        }
        /* ---------------------------------------------------------
       SUCCESS RESPONSE
       - Returns both:
         1. allAssignments → full dataset
         2. myInitiatives → filtered by logged-in user
    --------------------------------------------------------- */ return __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            allAssignments,
            myInitiatives
        });
    } catch (err) {
        /* ---------------------------------------------------------
       ERROR HANDLING
       - Logs server-side error
       - Returns 500 response to frontend
    --------------------------------------------------------- */ console.error("Assignment API error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Server error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e80fd9e9._.js.map