import { MongoClient, ServerApiVersion } from "mongodb";

let client;
let db;

// Use environment variables or fall back to defaults
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const dbName = process.env.DB_NAME || "ResourceManagementAPP_DB";

// Optional logging toggle
const LOG_DB = process.env.LOG_DB === "true";

if (!process.env.MONGODB_URI) {
  console.warn("⚠️  MONGODB_URI not set. Using local MongoDB instance.");
}

/* ---------------------------------------------------------
   CONNECT TO DATABASE
   - Reuses global client in dev to prevent duplicate connections
   - Ensures stable DB access across all controllers
--------------------------------------------------------- */
export async function connectDB() {
  if (db) {
    if (LOG_DB) console.log("Using existing MongoDB connection");
    return db;
  }

  try {
    // Reuse global client in dev to avoid hot-reload reconnects
    if (!client) {
      client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: false,
          deprecationErrors: true,
        },
      });
    }

    await client.connect();
    db = client.db(dbName);

    // Ping test
    await db.command({ ping: 1 });

    console.log(`Connected to MongoDB → ${dbName}`);
    return db;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

/* ---------------------------------------------------------
   GET ACTIVE DB INSTANCE
   - Throws if connectDB() hasn't been called yet
--------------------------------------------------------- */
export function getDB() {
  if (!db) {
    throw new Error("Database not initialized. Call connectDB() first.");
  }
  return db;
}

/* ---------------------------------------------------------
   GET A SPECIFIC COLLECTION
   - Cleaner than calling db.collection("name") everywhere
--------------------------------------------------------- */
export function getCollection(name) {
  if (!db) {
    throw new Error("Database not initialized. Call connectDB() first.");
  }
  return db.collection(name);
}

/* ---------------------------------------------------------
   CLOSE CONNECTION (optional for tests or shutdown)
--------------------------------------------------------- */
export async function closeDB() {
  if (client) {
    await client.close();
    client = null;
    db = null;
    console.log("MongoDB connection closed");
  }
}