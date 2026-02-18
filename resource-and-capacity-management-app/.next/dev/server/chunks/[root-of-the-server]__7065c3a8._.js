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
"[project]/resource-and-capacity-management-app/app/api/Resource-Manager/profile/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
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
--------------------------------------------------------- */ // Connection string from environment variables
const uri = process.env.MONGODB_URI;
// Shared MongoDB client instance
const client = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$mongodb$29$__["MongoClient"](uri);
/* ---------------------------------------------------------
   CONNECT TO DATABASE
   - Opens a connection only if not already active
   - Ensures stable DB access across API calls
   - Returns active database instance
--------------------------------------------------------- */ async function connectDB() {
    if (!client.topology || !client.topology.isConnected()) {
        await client.connect();
        console.log("Connected to MongoDB (Native Driver)");
    }
    return client.db(); // Uses default DB from connection string
}
async function GET(req) {
    try {
        // Extract username from query parameters
        const username = req.nextUrl.searchParams.get('username');
        /* ---------------------------------------------------------
       INPUT VALIDATION
       - Username must be provided
    --------------------------------------------------------- */ if (!username) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Missing username"
            }, {
                status: 400
            });
        }
        // Connect to database
        const db = await connectDB();
        /* ---------------------------------------------------------
       1. FETCH ACCOUNT RECORD
       - Matches nested field: account.username
       - Ensures exact match (no case-insensitive search)
    --------------------------------------------------------- */ const accountDoc = await db.collection('account').findOne({
            'account.username': username.trim()
        });
        if (!accountDoc) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Account not found"
            }, {
                status: 404
            });
        }
        // Extract foreign keys for additional lookups
        const empId = accountDoc.emp_id;
        const accTypeId = accountDoc.account?.acc_type_id;
        console.log("emp_id:", empId);
        console.log("acc_type_id:", accTypeId);
        /* ---------------------------------------------------------
       2. FETCH EMPLOYEE DETAILS
       - Uses emp_id from account record
    --------------------------------------------------------- */ const employee = await db.collection('employee').findOne({
            emp_id: empId
        });
        /* ---------------------------------------------------------
       3. FETCH DEPARTMENT DETAILS
       - Uses dept_no from employee record
    --------------------------------------------------------- */ const department = employee ? await db.collection('department').findOne({
            dept_no: employee.dept_no
        }) : null;
        /* ---------------------------------------------------------
       4. FETCH ACCOUNT TYPE (ROLE)
       - Uses acc_type_id from account record
    --------------------------------------------------------- */ const accountType = await db.collection('account_type').findOne({
            acc_type_id: accTypeId
        });
        if (!accountType) {
            console.log("Account type not found for acc_type_id:", accTypeId);
        }
        /* ---------------------------------------------------------
       5. BUILD FINAL PROFILE RESPONSE
       - Combines all related data into a single object
    --------------------------------------------------------- */ const profile = {
            name: employee?.emp_name || "",
            title: employee?.emp_title || "",
            department: department?.dept_name || "",
            role: accountType?.acc_type || "",
            id: employee?.emp_id || ""
        };
        // Return profile to frontend
        return __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(profile);
    } catch (err) {
        /* ---------------------------------------------------------
       ERROR HANDLING
       - Catches unexpected server errors
       - Returns generic error response
    --------------------------------------------------------- */ console.error("Profile API error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Server error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7065c3a8._.js.map