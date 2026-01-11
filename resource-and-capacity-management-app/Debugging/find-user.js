require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

const username = process.argv[2];

if (!username) {
  console.log("Usage: node debug/find-user.js <username>");
  process.exit(1);
}

(async () => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db(dbName);

    console.log(`Searching for username: ${username}`);

    const user = await db.collection('account').findOne({
      'account.username': username
    });

    if (!user) {
      console.log("\n❌ No user found.");
    } else {
      console.log("\n✅ User found:");
      console.log(JSON.stringify(user, null, 2));
    }

  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.close();
  }
})();
