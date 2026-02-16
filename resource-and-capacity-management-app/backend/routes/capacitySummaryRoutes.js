import express from "express";
import { getCapacitySummary } from "../controllers/capacitySummaryController.js";

const router = express.Router();

// Capacity summary overview
router.get("/", getCapacitySummary);

export default router;