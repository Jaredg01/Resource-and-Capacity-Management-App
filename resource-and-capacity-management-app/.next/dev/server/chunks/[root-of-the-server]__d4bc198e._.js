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
"[project]/resource-and-capacity-management-app/lib/database/mongodb.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "closeDB",
    ()=>closeDB,
    "connectDB",
    ()=>connectDB,
    "getDB",
    ()=>getDB
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$mongodb$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs, [project]/resource-and-capacity-management-app/node_modules/mongodb)");
;
// Import MongoDB client and server API versioning
let client; // Cached MongoClient instance
let db; // Cached database instance
// Connection URI (environment variable or fallback to local MongoDB)
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
// Database name (environment variable or default)
const dbName = process.env.DB_NAME || 'ResourceManagementAPP_DB';
async function connectDB() {
    // If already connected, return existing DB instance
    if (db) {
        return db;
    }
    try {
        // Initialize MongoClient only once
        if (!client) {
            client = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$mongodb$29$__["MongoClient"](uri, {
                serverApi: {
                    version: __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$mongodb$29$__["ServerApiVersion"].v1,
                    strict: true,
                    deprecationErrors: true // Warn on deprecated features
                }
            });
        }
        // Establish connection
        await client.connect();
        // Select the database
        db = client.db(dbName);
        // Ping the server to verify connection
        await db.command({
            ping: 1
        });
        console.log('Connected to MongoDB successfully');
        return db;
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error; // Re-throw so calling code can handle it
    }
}
function getDB() {
    if (!db) {
        throw new Error('Database not initialized. Call connectDB() first.');
    }
    return db;
}
async function closeDB() {
    if (client) {
        await client.close();
        client = null;
        db = null;
        console.log('MongoDB connection closed');
    }
}
}),
"[project]/resource-and-capacity-management-app/app/api/Resource-Manager/Employees/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$lib$2f$database$2f$mongodb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/resource-and-capacity-management-app/lib/database/mongodb.js [app-route] (ecmascript)");
;
;
async function GET() {
    try {
        const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$lib$2f$database$2f$mongodb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectDB"])();
        const employees = await db.collection("employee").aggregate([
            // 1. Join with Department
            {
                $lookup: {
                    from: "department",
                    localField: "dept_no",
                    foreignField: "dept_no",
                    as: "dept_info"
                }
            },
            // 2. Join with Capacity
            {
                $lookup: {
                    from: "capacity",
                    localField: "emp_id",
                    foreignField: "emp_id",
                    as: "capacity_info"
                }
            },
            // 3. SELF-LOOKUP: Join employee with itself to get Manager Name
            {
                $lookup: {
                    from: "employee",
                    localField: "manager_id",
                    foreignField: "emp_id",
                    as: "manager_info"
                }
            },
            // 4. Project the final structure
            {
                $project: {
                    _id: 1,
                    emp_id: 1,
                    emp_name: 1,
                    emp_title: 1,
                    dept_no: 1,
                    manager_id: 1,
                    dept_name: {
                        $arrayElemAt: [
                            "$dept_info.dept_name",
                            0
                        ]
                    },
                    // Extract the name from the manager_info array
                    manager_name: {
                        $arrayElemAt: [
                            "$manager_info.emp_name",
                            0
                        ]
                    },
                    capacity: "$capacity_info"
                }
            }
        ]).toArray();
        return __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(employees);
    } catch (e) {
        console.error("API Error:", e);
        return __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: e.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d4bc198e._.js.map