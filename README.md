**Resource and Capacity Management App**

A lightweight Node.js backend using MongoDB to manage employees, accounts, resources, activities, assignments, and capacity planning. This README gives a Windows‑focused, step‑by‑step guide to installing required software, installing Node dependencies (including the mongodb driver), configuring and connecting the app to the database, seeding and validating data, performing backups and restores, and following security and troubleshooting best practices.

Prerequisites and Installation
Supported environment

OS: Windows 10 or 11

Node: 18 or later (LTS recommended)

MongoDB: Community Server or Docker Desktop with Mongo image

Git: for cloning the repository

Install Node on Windows

Official installer from nodejs.org is recommended. Verify:

powershell
node -v
npm -v
Alternative with Chocolatey:

powershell
choco install nodejs-lts -y
node -v
npm -v
Alternative with winget:

powershell
winget install OpenJS.NodeJS.LTS
node -v
npm -v
Install MongoDB on Windows

MSI installer method

Download MongoDB Community Server MSI from MongoDB downloads and run the installer.

Choose to install MongoDB as a Windows service.

Optionally install MongoDB Compass.

Verify the service:

powershell
Get-Service -Name MongoDB
Chocolatey method

powershell
choco install mongodb -y
net start MongoDB
Docker alternative

Create docker-compose.yml with a Mongo service and run:

powershell
docker compose up -d
docker ps
Install project dependencies

Clone and install packages

powershell
git clone <repo-url>
cd <repo-directory>
npm install
Ensure the MongoDB driver and common middleware are installed

powershell
npm install mongodb dotenv cors express
npm install --save-dev nodemon
Recommended package.json scripts

json
{
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js",
    "seed": "node scripts/seed/run-all.js"
  }
}
Project Setup and Configuration
Environment variables

Create a .env file in the project root and do not commit it

Code
PORT=3001
MONGODB_URI=mongodb://localhost:27017
DB_NAME=ResourceManagementAPP_DB
NODE_ENV=development
Add .env to .gitignore and include a .env.example in the repo.

Recommended project layout

Code
.
├─ src
│  ├─ server.js
│  ├─ routes
│  ├─ controllers
│  ├─ services
│  └─ utils
├─ scripts
│  ├─ seed
│  └─ migrations
├─ tests
├─ .env.example
├─ package.json
└─ README.md
Start the app

Development

powershell
npm run dev
Production

powershell
npm run start
Database Connection and Server Start
Connection pattern

Connect once to MongoDB, verify with a ping, then start the HTTP server to avoid routes running before the DB is ready.

Attach the verified db handle to app.locals or inject it into requests via middleware.

Windows friendly server snippet

javascript
require('dotenv').config();
const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true }
});

async function start() {
  try {
    await client.connect();
    const db = client.db(process.env.DB_NAME || 'ResourceManagementAPP_DB');
    await db.command({ ping: 1 });
    console.log('Connected to MongoDB');

    app.locals.db = db;

    app.use((req, res, next) => {
      if (!req.app.locals.db) return res.status(503).json({ error: 'DB not ready' });
      req.db = req.app.locals.db;
      next();
    });

    app.listen(process.env.PORT || 3001, () => {
      console.log(`Server listening on ${process.env.PORT || 3001}`);
    });
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
}

start();

process.on('SIGINT', async () => { await client.close(); process.exit(0); });
process.on('SIGTERM', async () => { await client.close(); process.exit(0); });
How to use the DB handle

In route handlers access the verified DB via req.db and avoid calling MongoClient.connect() per request.

Seeding Indexes Validation and Migrations
Collections and sample document shapes

employee

json
{
  "emp_id": 2001,
  "emp_name": "A. Hayes",
  "emp_title": "Solution Analyst II",
  "dept_no": "D01",
  "manager_id": 1001
}
account

json
{
  "emp_id": 2001,
  "account": {
    "username": "ahayes",
    "password": "<hashed_password>",
    "acc_type_id": 3,
    "account_id": "000201"
  }
}
Other collections: resources, activities, assignments, capacity, department, account_type.

Seeding strategy

Place idempotent seed scripts in scripts/seed/.

Use updateOne({ emp_id }, { $set: doc }, { upsert: true }) to avoid duplicates.

Example seed script

javascript
const { MongoClient } = require('mongodb');
require('dotenv').config();

async function seed() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db(process.env.DB_NAME);

  const employees = [
    { emp_id: 1501, emp_name: "Jonathan Reid", emp_title: "VP, Finance", dept_no: "D02", manager_id: null },
    { emp_id: 1510, emp_name: "Caroline Hughes", emp_title: "Director, Financial Planning", dept_no: "D02", manager_id: 1501 }
    // add remaining records
  ];

  for (const e of employees) {
    await db.collection('employee').updateOne({ emp_id: e.emp_id }, { $set: e }, { upsert: true });
  }

  await client.close();
  console.log('Seeding complete');
}

seed().catch(err => { console.error(err); process.exit(1); });
Run the script

powershell
node scripts/seed/employees.js
Bulk import with mongoimport

powershell
mongoimport --uri="%MONGODB_URI%/%DB_NAME%" --collection=employee --file=employees.json --jsonArray
If tools are not in PATH, call the full path to the executable.

Recommended indexes

Create these once in a setup script or migration

javascript
db.employee.createIndex({ emp_id: 1 }, { unique: true });
db.account.createIndex({ emp_id: 1 }, { unique: true });
db.account.createIndex({ "account.acc_type_id": 1 });
db.employee.createIndex({ dept_no: 1 });
db.assignments.createIndex({ resource_id: 1, activity_id: 1 });
JSON schema validation example

Create collection with a validator

javascript
db.createCollection("employee", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["emp_id", "emp_name", "emp_title", "dept_no"],
      properties: {
        emp_id: { bsonType: "int" },
        emp_name: { bsonType: "string" },
        emp_title: { bsonType: "string" },
        dept_no: { bsonType: "string" },
        manager_id: { bsonType: ["int", "null"] }
      }
    }
  }
});
Migrations

Store migration scripts in scripts/migrations/.

Track applied migrations in a migrations collection.

Provide a runner that executes pending migration files in order and marks them applied.

Backups Security Troubleshooting and Next Steps
Backups and restore on Windows

Full backup with mongodump

powershell
mongodump --uri="%MONGODB_URI%/%DB_NAME%" --out=.\backups\$(Get-Date -Format yyyy-MM-dd)
Restore with mongorestore

powershell
mongorestore --uri="%MONGODB_URI%" --nsInclude="%DB_NAME%.*" .\backups\2025-11-30
Export and import with mongoexport and mongoimport

powershell
mongoexport --uri="%MONGODB_URI%/%DB_NAME%" --collection=employee --out=employee.json
mongoimport --uri="%MONGODB_URI%/%DB_NAME%" --collection=employee --file=employee.json --jsonArray
Security best practices

Hash passwords with bcrypt before storing.

Use least privilege DB users and restrict access to trusted IPs.

Use TLS for production DB connections.

Keep .env out of source control and use a secrets manager for production.

Restrict CORS to trusted origins.

Validate and sanitize inputs with a schema library such as Joi or Zod.

Never return password hashes in API responses.

Troubleshooting tips

DB undefined or 503 Ensure client.connect() and db.command({ ping: 1 }) complete before app.listen().

Duplicate key errors Use upsert in seed scripts or inspect unique indexes.

No results for dept_no equals D01 Check for whitespace or case differences; normalize values or query trimmed/uppercased values.

Tools not found Install MongoDB Database Tools and add the bin folder to PATH or use full executable paths.

Suggested next steps

Add idempotent seed scripts for all employee and account records.

Create a migration runner that applies indexes and validators.

Add request validation and password hashing in account creation flows.

Add monitoring and alerts for disk usage and slow queries.
