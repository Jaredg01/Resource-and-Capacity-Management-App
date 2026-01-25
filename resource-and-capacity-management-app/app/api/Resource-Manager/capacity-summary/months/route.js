import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = 'ResourceManagementAPP_DB';

let client = null;

async function getClient() {
  if (!client) {
    client = new MongoClient(MONGODB_URI);
    await client.connect();
  }
  return client;
}

function formatMonthLabel(yyyymm) {
  const s = String(yyyymm);
  const year = Number(s.slice(0, 4));
  const month = Number(s.slice(4, 6));
  const date = new Date(year, month - 1, 1);
  const shortMonth = date.toLocaleString('en-US', { month: 'short' });
  const shortYear = String(year).slice(2);
  return `${shortMonth}-${shortYear}`;
}

export async function GET() {
  try {
    const mongo = await getClient();
    const db = mongo.db(DB_NAME);

    const allocationCol = db.collection('allocation');
    const capacityCol = db.collection('capacity');

    // Pull all unique months from both collections
    const allocMonths = await allocationCol.distinct('date');
    const capMonths = await capacityCol.distinct('date');

    let allMonths = Array.from(new Set([...allocMonths, ...capMonths]));

    // Sort ascending
    allMonths.sort((a, b) => a - b);

    // Filter to 1 year behind today
    const today = new Date();
    const currentYYYYMM = today.getFullYear() * 100 + (today.getMonth() + 1);
    const oneYearAgo = currentYYYYMM - 100; // subtract 1 year

    allMonths = allMonths.filter((m) => m >= oneYearAgo && m <= currentYYYYMM);

    const formatted = allMonths.map((m) => ({
      label: formatMonthLabel(m),
      value: m
    }));

    return NextResponse.json({ months: formatted });
  } catch (err) {
    console.error('Error in /months:', err);
    return NextResponse.json({ error: 'Failed to load months' }, { status: 500 });
  }
}