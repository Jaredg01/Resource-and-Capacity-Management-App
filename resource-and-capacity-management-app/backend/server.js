import "./loadEnv.js";

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { connectDB } from "./config/db.js";

// Middleware
import securityHeaders from "./middleware/security.js";
import httpsRedirect from "./middleware/httpsRedirect.js";
import corsOptions from "./middleware/corsOptions.js";
import { errorHandler } from "./middleware/errorHandler.js";

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
// import reportsRoutes from "./routes/reportsRoutes.js";

const app = express();
const port = process.env.PORT || 3001;

// -----------------------------------------------------------------------------
// Global Middleware
// -----------------------------------------------------------------------------
app.disable("x-powered-by");

app.use(securityHeaders);
app.use(httpsRedirect);
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

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
// API Routes (ONLY the ones that exist)
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
// app.use("/api/reports", reportsRoutes);

// -----------------------------------------------------------------------------
// 404 Handler
// -----------------------------------------------------------------------------
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// -----------------------------------------------------------------------------
// Global Error Handler
// -----------------------------------------------------------------------------
app.use(errorHandler);

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
    process.exit(1);
  });