// Manage MongoDB connection and helpers
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

// Connect to database
export async function connectDB() {
  if (db) {
    if (LOG_DB) console.log("Using existing MongoDB connection");
    return db;
  }

  try {
    if (!client) {
      client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: false,
          deprecationErrors: true
        }
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

// Get active DB instance
export function getDB() {
  if (!db) {
    throw new Error("Database not initialized. Call connectDB() first.");
  }
  return db;
}

// Get a specific collection
export function getCollection(name) {
  if (!db) {
    throw new Error("Database not initialized. Call connectDB() first.");
  }
  return db.collection(name);
}

// Close database connection
export async function closeDB() {
  if (client) {
    await client.close();
    client = null;
    db = null;
    console.log("MongoDB connection closed");
  }
}