require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = 'mongodb+srv://jaredgutierrezjg_db_user:C%40pstone%26Group7%21002@rmapp-canadacentral.ycvntgt.mongodb.net/';
const dbName = 'ResourceManagementAPP_DB';

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function testLogin() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db(dbName);
    const collection = db.collection('account');
    
    // Test with exact username
    console.log('\n--- Testing with exact username "jkraft" ---');
    let user = await collection.findOne({ 'account.username': 'jkraft' });
    console.log('Found:', user ? 'YES' : 'NO');
    if (user) {
      console.log('Username:', user.account.username);
      console.log('Password:', user.account.password);
      console.log('Emp ID:', user.emp_id);
    }
    
    // Test with lowercase
    console.log('\n--- Testing with lowercase "jkraft" ---');
    user = await collection.findOne({ 'account.username': 'jkraft'.toLowerCase() });
    console.log('Found:', user ? 'YES' : 'NO');
    
    // List all usernames
    console.log('\n--- All usernames in database ---');
    const users = await collection.find({}).toArray();
    users.forEach(u => {
      console.log(`- ${u.account.username} (emp_id: ${u.emp_id})`);
    });
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close();
  }
}

testLogin();
