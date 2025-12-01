const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB configuration
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = process.env.DB_NAME || 'ResourceManagementAPP_DB';

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let db;

// Ensure requests wait for DB readiness
function requireDB(req, res, next) {
  if (!db) return res.status(503).json({ error: 'Database not connected yet' });
  req.db = db;
  next();
}

async function connectDB() {
  await client.connect();
  db = client.db(dbName);
  await db.command({ ping: 1 });
  console.log(`Connected to MongoDB: ${dbName}`);
}

// Health check (doesn’t require DB)
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    database: db ? 'connected' : 'disconnected'
  });
});

// Routes that require the DB
app.use(requireDB);

// Data sample routes (replace with real usage or remove)
app.get('/api/data', async (req, res) => {
  try {
    const collection = req.db.collection('account'); // use a real collection
    const results = await collection.find({}).limit(50).toArray();
    res.json(results);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});

app.post('/api/data', async (req, res) => {
  try {
    const { name, value } = req.body;
    if (!name || value === undefined) {
      return res.status(400).json({ error: 'Name and value are required' });
    }
    const result = await req.db.collection('account').insertOne({
      name,
      value,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    res.status(201).json({ message: 'Data added successfully', id: result.insertedId });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'Error inserting data' });
  }
});

// Resources endpoints
app.get('/api/resources', async (req, res) => {
  try {
    const resources = await req.db.collection('resources').find({}).toArray();
    res.json(resources);
  } catch (error) {
    console.error('Error fetching resources:', error);
    res.status(500).json({ error: 'Error fetching resources' });
  }
});

app.post('/api/resources', async (req, res) => {
  try {
    const body = req.body || {};
    const result = await req.db.collection('resources').insertOne({
      ...body,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    res.status(201).json({ message: 'Resource created successfully', id: result.insertedId });
  } catch (error) {
    console.error('Error creating resource:', error);
    res.status(500).json({ error: 'Error creating resource' });
  }
});

// Activities endpoints
app.get('/api/activities', async (req, res) => {
  try {
    const activities = await req.db.collection('activities').find({}).toArray();
    res.json(activities);
  } catch (error) {
    console.error('Error fetching activities:', error);
    res.status(500).json({ error: 'Error fetching activities' });
  }
});

app.post('/api/activities', async (req, res) => {
  try {
    const body = req.body || {};
    const result = await req.db.collection('activities').insertOne({
      ...body,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    res.status(201).json({ message: 'Activity created successfully', id: result.insertedId });
  } catch (error) {
    console.error('Error creating activity:', error);
    res.status(500).json({ error: 'Error creating activity' });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Graceful shutdown
async function shutdown(code = 0) {
  try {
    console.log('Closing MongoDB connection...');
    await client.close();
  } catch (e) {
    console.error('Error during shutdown:', e);
  } finally {
    process.exit(code);
  }
}
process.on('SIGINT', () => shutdown(0));
process.on('SIGTERM', () => shutdown(0));

// Start server after DB connects
(async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`API server running on port ${port}`);
    });
  } catch (error) {
    console.error('MongoDB connection error:', error);
    await shutdown(1);
  }
})();
