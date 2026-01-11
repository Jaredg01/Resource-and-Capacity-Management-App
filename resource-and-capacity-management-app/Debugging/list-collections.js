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

    const collections = await db.listCollections().toArray();

    console.log('\nCollections:');
    for (const col of collections) {
      const count = await db.collection(col.name).countDocuments();
      console.log(`- ${col.name} (${count} docs)`);
    }

  } catch (err) {
    console.error('List Collections Error:', err);
  } finally {
    await client.close();
  }
})();
