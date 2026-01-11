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

    const seen = {
      username: {},
      emp_id: {},
      account_id: {}
    };

    console.log("\n🔍 Checking for duplicates...\n");

    users.forEach(u => {
      const { emp_id, account } = u;

      if (seen.username[account.username]) {
        console.log(`Duplicate username: ${account.username}`);
      }
      seen.username[account.username] = true;

      if (seen.emp_id[emp_id]) {
        console.log(`Duplicate emp_id: ${emp_id}`);
      }
      seen.emp_id[emp_id] = true;

      if (seen.account_id[account.account_id]) {
        console.log(`Duplicate account_id: ${account.account_id}`);
      }
      seen.account_id[account.account_id] = true;
    });

    console.log("\nDuplicate check complete.\n");

  } catch (err) {
    console.error("Duplicate Check Error:", err);
  } finally {
    await client.close();
  }
})();
