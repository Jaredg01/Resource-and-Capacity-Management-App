import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME || 'ResourceManagementAPP_DB';

export async function GET(req) {
  try {
    const username = req.nextUrl.searchParams.get('username');
    if (!username) {
      return NextResponse.json({ error: "Missing username" }, { status: 400 });
    }

    // Direct MongoClient usage — exactly what you want
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db(dbName);

    // 1. Find account by username
    const account = await db.collection('account').findOne({ username });
    if (!account) {
      await client.close();
      return NextResponse.json({ error: "Account not found" }, { status: 404 });
    }

    // 2. Find employee by emp_id
    const employee = await db.collection('employee').findOne({ emp_id: account.emp_id });

    // 3. Find department
    const department = employee
      ? await db.collection('department').findOne({ dept_no: employee.dept_no })
      : null;

    // 4. Find account type
    const accountType = await db.collection('account_type').findOne({
      acc_type_id: account.acc_type_id
    });

    // Build response
    const profile = {
      name: employee?.emp_name || "",
      title: employee?.emp_title || "",
      department: department?.dept_name || "",
      role: accountType?.acc_type || "",
      id: employee?.emp_id || ""
    };

    await client.close();
    return NextResponse.json(profile);

  } catch (err) {
    console.error("Profile API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}