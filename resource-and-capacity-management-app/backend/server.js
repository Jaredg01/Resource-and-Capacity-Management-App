import "./loadEnv.js"; // Load env vars before anything else

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { connectDB } from "./config/db.js";

// Middleware
import securityHeaders from "./middleware/security.js"; // Security headers (CSP, HSTS, XSS, etc.)
import httpsRedirect from "./middleware/httpsRedirect.js"; // Enforce HTTPS in production
import corsOptions from "./middleware/corsOptions.js"; // CORS whitelist
import { errorHandler } from "./middleware/errorHandler.js"; // Centralized error handler

// Routes
import authRoutes from "./routes/authRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import resourceRoutes from "./routes/resourceRoutes.js";
import summaryRoutes from "./routes/summaryRoutes.js";
import calendarViewRoutes from "./routes/calendarViewRoutes.js";
import capacitySummaryRoutes from "./routes/capacitySummaryRoutes.js";
import capacityMonthsRoutes from "./routes/capacityMonthsRoutes.js";
import initiativeRoutes from "./routes/initiativeRoutes.js";
import assignmentRoutes from "./routes/assignmentRoutes.js";
import reportsRoutes from "./routes/reportsRoutes.js";

const app = express();
const port = process.env.PORT || 3001;

// -----------------------------------------------------------------------------
// Global Middleware
// -----------------------------------------------------------------------------
app.disable("x-powered-by"); // Hide Express signature

app.use(securityHeaders); // Apply security headers
app.use(httpsRedirect); // Redirect HTTP → HTTPS when enabled
app.use(cors(corsOptions)); // Apply CORS restrictions
app.use(express.json()); // JSON body parsing
app.use(cookieParser()); // Cookie parsing

// -----------------------------------------------------------------------------
// Health Check
// -----------------------------------------------------------------------------
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});

// -----------------------------------------------------------------------------
// API Routes
// -----------------------------------------------------------------------------
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/resources", resourceRoutes);
app.use("/api/summary", summaryRoutes);
app.use("/api/calendar-view", calendarViewRoutes);
app.use("/api/capacity-summary", capacitySummaryRoutes);
app.use("/api/capacity-summary/months", capacityMonthsRoutes);
app.use("/api/initiatives", initiativeRoutes);
app.use("/api/assignments-allocations", assignmentRoutes);
app.use("/api/reports", reportsRoutes);

// -----------------------------------------------------------------------------
// 404 Handler
// -----------------------------------------------------------------------------
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" }); // Consistent JSON 404
});

// -----------------------------------------------------------------------------
// Global Error Handler
// -----------------------------------------------------------------------------
app.use(errorHandler); // Final middleware for catching thrown errors

// -----------------------------------------------------------------------------
// Start Server After DB Connects
// -----------------------------------------------------------------------------
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`🚀 Backend running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to start server:", err);
    process.exit(1); // Fail fast if DB connection fails
  });