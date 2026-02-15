import express from "express";
import { getCapacitySummary } from "../controllers/capacitySummaryController.js";

const router = express.Router();

// GET /api/capacity-summary
router.get("/", getCapacitySummary);

export default router;