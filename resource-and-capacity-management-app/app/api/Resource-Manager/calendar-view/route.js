import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = 'ResourceManagementAPP_DB';

let client = null;

/* ---------------------------------------------------------
   MONGODB CLIENT (Singleton)
   ---------------------------------------------------------
   PURPOSE:
   - Ensures only one MongoDB client instance is created
   - Prevents repeated connections in serverless environments
   - Reuses the same connection for GET + POST handlers
--------------------------------------------------------- */
async function getClient() {
  if (!client) {
    client = new MongoClient(MONGODB_URI);
    await client.connect(); // Establish connection once
  }
  return client;
}

/* ---------------------------------------------------------
   Convert YYYYMM → "Jan-25"
   ---------------------------------------------------------
   PURPOSE:
   - Converts numeric YYYYMM format into a readable label
   - Used for dropdowns, tables, and UI month headers
--------------------------------------------------------- */
function formatMonthLabel(yyyymm) {
  const s = String(yyyymm);
  const year = Number(s.slice(0, 4));
  const month = Number(s.slice(4, 6));

  const date = new Date(year, month - 1, 1);
  const shortMonth = date.toLocaleString('en-US', { month: 'short' });
  const shortYear = String(year).slice(2);

  return `${shortMonth}-${shortYear}`;
}

/* ---------------------------------------------------------
   GET → AVAILABLE MONTHS (Last 12 Months)
   ---------------------------------------------------------
   PURPOSE:
   - Retrieves distinct YYYYMM values from allocation collection
   - Filters to last 12 months up to current month
   - Returns both raw numeric months + formatted labels
--------------------------------------------------------- */
export async function GET() {
  try {
    const mongo = await getClient();
    const db = mongo.db(DB_NAME);
    const allocationCol = db.collection('allocation');

    // Pull distinct month values (e.g., Int32(202507))
    const rawMonths = await allocationCol.distinct('date');

    if (!rawMonths || rawMonths.length === 0) {
      return NextResponse.json({
        success: true,
        months: [],
        formatted: []
      });
    }

    // Normalize to plain JS numbers
    const numericMonths = rawMonths
      .map((m) => Number(m))
      .filter((m) => !Number.isNaN(m)); // Remove invalid entries

    const today = new Date();
    const thisYYYYMM = today.getFullYear() * 100 + (today.getMonth() + 1);

    // Compute YYYYMM for 12 months ago
    const oneYearAgo = new Date(today);
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    const oneYearAgoYYYYMM =
      oneYearAgo.getFullYear() * 100 + (oneYearAgo.getMonth() + 1);

    // Keep only months within the last 12 months
    const filtered = numericMonths
      .filter((m) => m >= oneYearAgoYYYYMM && m <= thisYYYYMM)
      .sort((a, b) => a - b);

    // Attach formatted labels
    const formatted = filtered.map((m) => ({
      yyyymm: m,
      label: formatMonthLabel(m)
    }));

    return NextResponse.json({
      success: true,
      months: filtered,
      formatted
    });
  } catch (err) {
    console.error('Error in GET /calendar-view:', err);
    return NextResponse.json(
      { success: false, error: 'Failed to load available months' },
      { status: 500 }
    );
  }
}

/* ---------------------------------------------------------
   POST → ACTIVITIES GROUPED BY MONTH
   ---------------------------------------------------------
   PURPOSE:
   - Accepts array of YYYYMM values
   - Optionally filters by employee ID
   - Returns unique activities for each month
   - Used to populate activity dropdowns in calendar view
--------------------------------------------------------- */
export async function POST(req) {
  try {
    const { months, emp_id } = await req.json();

    // Validate required input
    if (!months || !Array.isArray(months) || months.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Months array is required' },
        { status: 400 }
      );
    }

    const mongo = await getClient();
    const db = mongo.db(DB_NAME);
    const allocationCol = db.collection('allocation');

    // Build query dynamically (emp_id optional)
    const query = {
      date: { $in: months },
      ...(emp_id ? { emp_id } : {}) // Conditional spread
    };

    // Fetch all matching allocation rows
    const results = await allocationCol.find(query).toArray();

    /* -----------------------------------------------------
       GROUP ACTIVITIES BY MONTH
       -----------------------------------------------------
       PURPOSE:
       - For each requested month, collect unique activities
       - Ensures stable ordering and consistent structure
    ----------------------------------------------------- */
    const activitiesByMonth = months.map((yyyymm) => ({
      yyyymm,
      label: formatMonthLabel(yyyymm),

      // Extract unique activities for this month
      activities: [
        ...new Set(
          results
            .filter((r) => Number(r.date) === Number(yyyymm)) // Match month
            .map((r) => r.activity) // Extract activity name
        )
      ]
    }));

    return NextResponse.json({
      success: true,
      activitiesByMonth
    });
  } catch (err) {
    console.error('Error in POST /calendar-view:', err);
    return NextResponse.json(
      { success: false, error: 'Failed to load activities' },
      { status: 500 }
    );
  }
}