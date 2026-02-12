import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function connectDB() {
  if (!client.topology || !client.topology.isConnected()) {
    await client.connect();
  }
  return client.db("ResourceManagementAPP_DB");
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const emp_id = Number(searchParams.get("emp_id"));

    if (!emp_id) {
      return NextResponse.json(
        { error: "emp_id is required" },
        { status: 400 }
      );
    }

    const db = await connectDB();

    // 1. Get employee
    const employee = await db
      .collection("employee")
      .findOne({ emp_id });

    if (!employee) {
      return NextResponse.json(
        { error: "Employee not found" },
        { status: 404 }
      );
    }

    // 2. Get department name
    const department = await db
      .collection("department")
      .findOne({ dept_no: employee.dept_no });

    return NextResponse.json({
      employee,
      department_name: department?.dept_name || null
    });

  } catch (error) {
    console.error("get-employee error:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}