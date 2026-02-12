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

    let empIdParam = searchParams.get("emp_id");
    let empNameParam = searchParams.get("emp_name");

    const db = await connectDB();

    let emp_id = null;

    // -------------------------
    // CASE 1: emp_id provided
    // -------------------------
    if (empIdParam) {
      empIdParam = empIdParam.trim();
      emp_id = parseInt(empIdParam, 10);

      if (!emp_id || isNaN(emp_id)) {
        return NextResponse.json(
          { error: "Invalid emp_id" },
          { status: 400 }
        );
      }
    }

    // CASE 2: emp_name provided
if (!emp_id && empNameParam) {
  empNameParam = empNameParam.trim();

  const employeeByName = await db.collection("employee").findOne({
    emp_name: { $regex: `^${empNameParam}$`, $options: "i" }
  });

  if (!employeeByName) {
    return NextResponse.json(
      { error: `Employee not found by name: ${empNameParam}` },
      { status: 404 }
    );
  }

  emp_id = employeeByName.emp_id;
}

    // -------------------------
    // CASE 3: nothing provided
    // -------------------------
    if (!emp_id) {
      return NextResponse.json(
        { error: "Provide emp_id or emp_name" },
        { status: 400 }
      );
    }

    // Load employee
    const employee = await db.collection("employee").findOne({ emp_id });

    if (!employee) {
      return NextResponse.json(
        { error: "Employee not found" },
        { status: 404 }
      );
    }

    // Load allocations
    const allocations = await db
      .collection("allocation")
      .find({ emp_id })
      .toArray();

    // Load assignment
    let assignment = null;

    if (allocations.length > 0) {
      const projectName = allocations[0].activity;

      assignment = await db.collection("assignment").findOne({
        project_name: projectName,
      });

      if (assignment) {
        const dept =
          assignment.department ||
          assignment.requesting_dept ||
          assignment.dept ||
          "";

        assignment.department = dept;
        assignment.requesting_dept = dept;
      }
    }

    // Load managers
    const managerAccounts = await db
      .collection("account")
      .find({ "account.acc_type_id": 1 })
      .toArray();

    const managerIds = managerAccounts.map((a) => a.emp_id);

    const managers = await db
      .collection("employee")
      .find({ emp_id: { $in: managerIds } })
      .toArray();

    return NextResponse.json({
      row: {
        employee,
        allocations,
        assignment,
      },
      dropdowns: {
        managers,
      },
    });
  } catch (err) {
    console.error("GET error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}