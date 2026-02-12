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
    const project = searchParams.get("project");

    const db = await connectDB();

    // If project param exists → return ONE assignment
    if (project) {
      const assignment = await db
        .collection("assignment")
        .findOne({ project_name: project });

      return NextResponse.json({ assignment });
    }

    // Otherwise → return list of projects
    const projects = await db
      .collection("assignment")
      .find({})
      .project({ project_name: 1, _id: 0 })
      .toArray();

    return NextResponse.json({ projects });
  } catch (error) {
    console.error("get-projects error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}