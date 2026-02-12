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

// Build 16‑month rolling window
function buildMonthRange() {
  const months = [];
  const now = new Date();

  // Start 12 months back
  const start = new Date(now);
  start.setMonth(start.getMonth() - 12);
  start.setDate(1);

  // Build 25 months (12 back + current + 12 forward)
  for (let i = 0; i < 25; i++) {
    const y = start.getFullYear();
    const m = start.getMonth() + 1;
    months.push(`${y}${m.toString().padStart(2, "0")}`);
    start.setMonth(start.getMonth() + 1);
  }

  return months;
}
export async function GET(request) {
  try {
    const db = await connectDB();
    const { searchParams } = new URL(request.url);
    const username = searchParams.get("username");

    // Load all collections
    const employees = await db.collection("employee").find({}).toArray();
    const assignments = await db.collection("assignment").find({}).toArray();
    const allocations = await db.collection("allocation").find({}).toArray();
    const departments = await db.collection("department").find({}).toArray();

    const months = buildMonthRange();

    // Build department map
    const deptMap = new Map();
    departments.forEach((d) => {
      if (d.dept_no) deptMap.set(d.dept_no, d.dept_name || d.dept_no);
    });

    // Employee map
    const employeeById = new Map();
    employees.forEach((e) => employeeById.set(e.emp_id, e));

    // Assignment key map
    const assignmentKey = (activity, category) => `${activity}||${category}`;
    const assignmentByKey = new Map();
    assignments.forEach((a) => {
      assignmentByKey.set(assignmentKey(a.project_name, a.category), a);
    });

    // Build rows
    const rowsMap = new Map();

    for (const alloc of allocations) {
      const emp = employeeById.get(alloc.emp_id);
      if (!emp) continue;

      const assignment = assignmentByKey.get(
        assignmentKey(alloc.activity, alloc.category)
      );
      if (!assignment) continue;

      const rowKey = `${emp.emp_id}||${assignment._id}`;

      if (!rowsMap.has(rowKey)) {
        rowsMap.set(rowKey, {
          employee: emp,
          assignment,
          allocations: {}
        });
      }

      const row = rowsMap.get(rowKey);
      const dateStr = String(alloc.date);

      if (months.includes(dateStr)) {
        row.allocations[dateStr] = alloc.amount;
      }
    }

    // Build allAssignments array
    const allAssignments = Array.from(rowsMap.values()).map((row) => {
      const empDeptName = deptMap.get(row.employee.dept_no) || "";

      // requesting dept comes from assignment.department
      const reqDeptCode = row.assignment.requesting_dept;
      const reqDeptName = reqDeptCode
        ? deptMap.get(reqDeptCode) || reqDeptCode
        : "";

      // Resolve manager name dynamically
      const reportsToId = row.employee.reports_to || "";
      const managerEmp = reportsToId ? employeeById.get(reportsToId) : null;
      const managerName = managerEmp?.emp_name || "";

      return {
        employee: {
          emp_id: row.employee.emp_id,
          emp_name: row.employee.emp_name,
          emp_title: row.employee.emp_title,
          dept_name: empDeptName,
          reports_to: reportsToId,
          manager_name: managerName
        },
        assignment: {
          _id: row.assignment._id,
          project_name: row.assignment.project_name,
          category: row.assignment.category,
          leader: row.assignment.leader,
          requestor: row.assignment.requestor,
          requestor_vp: row.assignment.requestor_vp,
          requesting_dept: reqDeptCode,
          requesting_dept_name: reqDeptName,
          status: row.assignment.status,
          target_period: row.assignment.target_period,
          completion_date: row.assignment.completion_date,
          description: row.assignment.description,
          resource_notes: row.assignment.resource_notes
        },
        allocations: row.allocations
      };
    });

    // Build myAssignments (RESOURCE-BASED)
    let myAssignments = [];

    if (username) {
      const account = await db.collection("account").findOne({
        "account.username": username
      });

      if (account) {
        const myEmpId = account.emp_id;

        // My Assignments = rows where the logged-in user is the RESOURCE
        myAssignments = allAssignments.filter(r => {
          return r.employee.emp_id === myEmpId;
        });
      }
    }

    return NextResponse.json({
      allAssignments,
      myAssignments,
      months
    });

  } catch (error) {
    console.error("assignments-allocations GET error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}