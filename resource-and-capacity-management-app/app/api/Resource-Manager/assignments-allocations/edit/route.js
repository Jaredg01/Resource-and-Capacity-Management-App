import { NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function connectDB() {
  if (!client._connectionPromise) {
    client._connectionPromise = client.connect();
  }
  await client._connectionPromise;
  return client.db("ResourceManagementAPP_DB");
}

export async function PUT(req) {
  try {
    const body = await req.json();

    const {
      id,
      project,
      category,
      lead,
      status,
      requestor,
      requestor_vp,
      completion_date,
      target_period,
      description,
      resource_consideration,
      requesting_dept
    } = body;

    if (!id) {
      return NextResponse.json(
        { error: "Missing assignment ID" },
        { status: 400 }
      );
    }

    const db = await connectDB();

    const updateDoc = {
      $set: {
        project_name: project,
        category,
        leader: lead,
        status,
        requestor,
        requestor_vp,
        requesting_dept,
        department: requesting_dept, 
        target_period,
        completion_date: completion_date || null,
        description,
        resource_notes: resource_consideration || "",
        updated_at: new Date()
      }
    };

    await db.collection("assignment").updateOne(
      { _id: new ObjectId(id) },
      updateDoc
    );

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Edit assignment error:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}