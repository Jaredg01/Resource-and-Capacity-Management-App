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

    console.log("\n🔍 Validating account structure...\n");

    users.forEach((u, i) => {
      const issues = [];

      if (!u.emp_id) issues.push("Missing emp_id");
      if (!u.account) issues.push("Missing account object");
      else {
        if (!u.account.username) issues.push("Missing username");
        if (!u.account.password) issues.push("Missing password");
        if (!u.account.acc_type_id) issues.push("Missing acc_type_id");
        if (!u.account.account_id) issues.push("Missing account_id");
      }

      if (issues.length > 0) {
        console.log(`${i + 1}. User has issues:`, issues);
      }
    });

    console.log("\nValidation complete.\n");

  } catch (err) {
    console.error("Validation Error:", err);
  } finally {
    await client.close();
  }
})();
