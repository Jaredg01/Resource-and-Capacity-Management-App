import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

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
    const { emp_id, month, amount, activity, category } = await req.json();

    const db = await connectDB();

    await db.collection("allocation").updateOne(
      {
        emp_id,
        activity,
        category,
        date: Number(month)
      },
      {
        $set: {
          amount: amount === null ? null : Number(amount),
          activity,
          category,
          date: Number(month)
        }
      },
      { upsert: true }
    );

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("editallocationamount error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { emp_id, month, activity, category } = await req.json();

    const db = await connectDB();

    await db.collection("allocation").deleteOne({
      emp_id,
      activity,
      category,
      date: Number(month)
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("delete allocation error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}