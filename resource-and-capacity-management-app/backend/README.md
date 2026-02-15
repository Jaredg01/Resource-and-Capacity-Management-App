Backend Setup (Express + MongoDB)
📁 Navigate into backend folder
cd backend


📦 Install backend dependencies
npm install express cors dotenv mongodb


🧰 Dev tool (optional but recommended)
npm install --save-dev nodemon



🔐 Backend .env File
Create a .env file inside /backend:
add this to the old one
JWT_SECRET=ajd82h3HHD82hhd8@!92hhd92hhd92hhd (change it as but you have to make it random)



📄 Create loadEnv.js File
Create /backend/loadEnv.js:
import dotenv from "dotenv";
dotenv.config();



🚀 Start the Backend
Development mode (auto‑restart)
npm run dev



✔ Backend runs at:
http://localhost:3001

make sure to have a gitignore file in here