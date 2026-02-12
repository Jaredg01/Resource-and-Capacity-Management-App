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

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const name = searchParams.get("name");

        if (!name) {
            return NextResponse.json({ error: "Missing name" }, { status: 400 });
        }

        const db = await connectDB();

        const doc = await db.collection('assignment').findOne(
            { requestor_vp: name, requesting_dept: { $ne: null } },
            { projection: { requesting_dept: 1 } }
        );

        if (!doc) {
            return NextResponse.json({ error: "Not found" }, { status: 404 });
        }

        return NextResponse.json({ dept_name: doc.requesting_dept });

    } catch (error) {
        console.error("GetDept error:", error);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}