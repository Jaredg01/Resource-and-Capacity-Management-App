import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function connectDB() {
  if (!client.topology || !client.topology.isConnected()) {
    await client.connect();
  }
  return client.db();
}

export async function GET() {
  try {
    const db = await connectDB();

    // EMPLOYEES (Resource Name)
    const employees = await db.collection('employee')
      .find({})
      .project({ emp_id: 1, emp_name: 1 })
      .sort({ emp_name: 1 })
      .toArray();

    // REPORTS TO (Managers)
    const managers = await db.collection('employee')
      .aggregate([
        { $match: { manager_name: { $ne: null } } },
        { $group: { _id: "$manager_name" } },
        { $project: { name: "$_id", _id: 0 } },
        { $sort: { name: 1 } }
      ])
      .toArray();

    // PROJECTS
    const projects = await db.collection('assignment')
      .aggregate([
        { $match: { project_name: { $ne: null } } },
        { $group: { _id: "$project_name" } },
        { $project: { name: "$_id", _id: 0 } },
        { $sort: { name: 1 } }
      ])
      .toArray();

    // ACTIVITY CATEGORIES
    const categories = await db.collection('assignment')
      .aggregate([
        { $match: { category: { $ne: null } } },
        { $group: { _id: "$category" } },
        { $project: { name: "$_id", _id: 0 } },
        { $sort: { name: 1 } }
      ])
      .toArray();

    // LEADER ACCOUNTABLE
    const leaders = await db.collection('assignment')
      .aggregate([
        { $match: { leader: { $ne: null } } },
        { $group: { _id: "$leader" } },
        { $project: { name: "$_id", _id: 0 } },
        { $sort: { name: 1 } }
      ])
      .toArray();

    // REQUESTOR + REQUESTOR VP
    const requestors = await db.collection('assignment')
      .aggregate([
        { $project: { names: ["$requestor", "$requestor_vp"] } },
        { $unwind: "$names" },
        { $match: { names: { $ne: null } } },
        { $group: { _id: "$names" } },
        { $project: { name: "$_id", _id: 0 } },
        { $sort: { name: 1 } }
      ])
      .toArray();

    // REQUESTING DEPARTMENT
    const requestingDepts = await db.collection('assignment')
      .aggregate([
        { $match: { requesting_dept_name: { $ne: null } } },
        { $group: { _id: "$requesting_dept_name" } },
        { $project: { name: "$_id", _id: 0 } },
        { $sort: { name: 1 } }
      ])
      .toArray();

    return NextResponse.json({
      employees,
      managers,
      projects,
      categories,
      leaders,
      requestors,
      requestingDepts
    });

  } catch (error) {
    console.error("Dropdowns error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}