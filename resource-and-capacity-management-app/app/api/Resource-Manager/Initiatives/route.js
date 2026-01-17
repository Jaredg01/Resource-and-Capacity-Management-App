/* ---------------------------------------------------------
   IMPORTS & DATABASE CLIENT SETUP
   ---------------------------------------------------------
   - NextResponse: used to return API responses in Next.js
   - MongoClient: used to connect to MongoDB Atlas
   - uri: connection string stored in environment variables
   - client: reusable MongoDB client instance
--------------------------------------------------------- */
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

/* ---------------------------------------------------------
   DATABASE CONNECTION HANDLER
   ---------------------------------------------------------
   Purpose:
   - Ensures a single MongoDB connection is reused
   - Prevents multiple connections during hot reload
   - Returns the active database instance

   Notes:
   - Database name: ResourceManagementAPP_DB
--------------------------------------------------------- */
async function connectDB() {
  if (!client.topology || !client.topology.isConnected()) {
    await client.connect();
    console.log("Connected to MongoDB (assignment)");
  }
  return client.db("ResourceManagementAPP_DB");
}

/* ---------------------------------------------------------
   GET: FETCH ASSIGNMENTS WITH RELATIONAL LOOKUPS
   ---------------------------------------------------------
   Purpose:
   - Retrieves all assignment records
   - Performs two relational lookups:
       1. requestor_vp → employee.emp_name
       2. employee.dept_no → department.dept_no
   - Returns a fully enriched dataset to the frontend

   Pipeline Steps:
   1. Lookup VP employee record
   2. Lookup department for that employee
   3. Project final fields into clean output format

   Output Fields:
   - project_name
   - category
   - leader
   - status
   - requestor
   - requestor_vp
   - requesting_dept (resolved via joins)
   - target_period
   - completion_date
   - description
   - resource_notes
--------------------------------------------------------- */
export async function GET() {
  try {
    const db = await connectDB();

    const assignments = await db.collection("assignment").aggregate([
      /* -----------------------------------------------------
         1. LOOKUP: Match requestor_vp → employee.emp_name
         ----------------------------------------------------- */
      {
        $lookup: {
          from: "employee",
          localField: "requestor_vp",
          foreignField: "emp_name",
          as: "vp_employee"
        }
      },
      { $unwind: { path: "$vp_employee", preserveNullAndEmptyArrays: true } },

      /* -----------------------------------------------------
         2. LOOKUP: Match employee.dept_no → department.dept_no
         ----------------------------------------------------- */
      {
        $lookup: {
          from: "department",
          localField: "vp_employee.dept_no",
          foreignField: "dept_no",
          as: "vp_department"
        }
      },
      { $unwind: { path: "$vp_department", preserveNullAndEmptyArrays: true } },

      /* -----------------------------------------------------
         3. FINAL OUTPUT SHAPE
         -----------------------------------------------------
         - requesting_dept is resolved from department.dept_name
         - All other fields come directly from assignment
      ----------------------------------------------------- */
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
       SUCCESS RESPONSE
       ---------------------------------------------------------
       - Returns enriched assignment list to frontend
    --------------------------------------------------------- */
    return NextResponse.json(assignments);

  } catch (err) {
    /* ---------------------------------------------------------
       ERROR HANDLING
       ---------------------------------------------------------
       - Logs server-side error
       - Returns 500 response to frontend
    --------------------------------------------------------- */
    console.error("Assignment API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}