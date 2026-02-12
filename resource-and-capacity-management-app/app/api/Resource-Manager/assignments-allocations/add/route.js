import { NextResponse } from "next/server";
import { MongoClient, Double } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function connectDB() {
  if (!client.topology || !client.topology.isConnected()) {
    await client.connect();
  }
  return client.db("ResourceManagementAPP_DB");
}

export async function POST(req) {
  try {
    const { emp_id, project } = await req.json();

    if (!emp_id || !project) {
      return NextResponse.json(
        { error: "Missing emp_id or project" },
        { status: 400 }
      );
    }

    const db = await connectDB();

    // Fetch assignment details
    const assignment = await db
      .collection("assignment")
      .findOne({ project_name: project });

    if (!assignment) {
      return NextResponse.json(
        { error: "Assignment not found for this project" },
        { status: 404 }
      );
    }

    // Auto-generate YYYYMM
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const formattedDate = Number(`${year}${month}`);

    // Build allocation document in the EXACT shape your main API expects
    const allocationDoc = {
      emp_id: Number(emp_id),
      activity: assignment.project_name,
      category: assignment.category,
      date: formattedDate,          // YYYYMM
      amount: new Double(1)         // <-- stored as Double, not Int32 
    };

    // Insert into the correct collection
    const result = await db.collection("allocation").insertOne(allocationDoc);

    return NextResponse.json({
      success: true,
      insertedId: result.insertedId,
      allocation: allocationDoc
    });

  } catch (error) {
    console.error("Add allocation error:", error);
    return NextResponse.json(
      { error: "Server error while adding allocation" },
      { status: 500 }
    );
  }
}