require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

(async () => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db(dbName);

    const users = await db.collection('account').find({}).toArray();

    console.log("\n📋 User Accounts");
    console.log("================");

    users.forEach((u, i) => {
      console.log(`${i + 1}. ${u.account.username}  (type: ${u.account.acc_type_id})`);
    });

  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.close();
  }
})();
