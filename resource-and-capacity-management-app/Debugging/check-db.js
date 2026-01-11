require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

(async () => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db(dbName);

    console.log(`Connected to MongoDB: ${dbName}`);

    // Ping
    await db.command({ ping: 1 });
    console.log('Ping successful');

    // Stats
    const stats = await db.stats();
    console.log('\nDatabase Stats:');
    console.log(JSON.stringify(stats, null, 2));

  } catch (err) {
    console.error('DB Check Error:', err);
  } finally {
    await client.close();
  }
})();
