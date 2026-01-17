import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function connectDB() {
  if (!client.topology || !client.topology.isConnected()) {
    await client.connect();
    console.log("Connected to MongoDB (assignment)");
  }
  return client.db("ResourceManagementAPP_DB");
}

export async function GET() {
  try {
    const db = await connectDB();

    const assignments = await db.collection("assignment").aggregate([
      // 1. Lookup VP employee record
      {
        $lookup: {
          from: "employee",
          localField: "requestor_vp",
          foreignField: "emp_name",
          as: "vp_employee"
        }
      },
      { $unwind: { path: "$vp_employee", preserveNullAndEmptyArrays: true } },

      // 2. Lookup department using vp_employee.dept_no
      {
        $lookup: {
          from: "department",
          localField: "vp_employee.dept_no",
          foreignField: "dept_no",
          as: "vp_department"
        }
      },
      { $unwind: { path: "$vp_department", preserveNullAndEmptyArrays: true } },

      // 3. Final shape
      {
        $project: {
          _id: 1,
          project_name: 1,
          category: 1,
          leader: 1,
          status: 1,
          requestor: 1,
          requestor_vp: 1,
          requesting_dept: "$vp_department.dept_name",   // <-- FIXED
          target_period: 1,
          completion_date: 1,
          description: 1,
          resource_notes: 1
        }
      }
    ]).toArray();

    return NextResponse.json(assignments);
  } catch (err) {
    console.error("Assignment API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}