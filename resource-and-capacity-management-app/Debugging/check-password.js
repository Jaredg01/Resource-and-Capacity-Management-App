require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

const username = process.argv[2];
const password = process.argv[3];

if (!username || !password) {
  console.log("Usage: node debug/check-password.js <username> <password>");
  process.exit(1);
}

(async () => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db(dbName);

    const user = await db.collection('account').findOne({
      'account.username': username
    });

    if (!user) {
      console.log("\n❌ Username not found.");
      return;
    }

    if (user.account.password === password) {
      console.log("\n✅ Password matches.");
    } else {
      console.log("\n❌ Incorrect password.");
    }

  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.close();
  }
})();
