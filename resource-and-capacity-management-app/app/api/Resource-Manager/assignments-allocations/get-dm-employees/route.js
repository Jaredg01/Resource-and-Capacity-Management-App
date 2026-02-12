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

export async function GET() {
  try {
    const db = await connectDB();

    const employees = await db
      .collection("employee")
      .find({ dept_no: "D01" }) // Data Management department
      .project({
        emp_id: 1,
        emp_name: 1,
        dept_no: 1,
        reports_to: 1,
        _id: 0
      })
      .toArray();

    return NextResponse.json({ employees });
  } catch (error) {
    console.error("get-dm-employees error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}