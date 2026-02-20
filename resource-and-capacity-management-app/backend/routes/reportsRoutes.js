import express from "express";
import { getActivitySummary, getActivityFilters } from "../controllers/reportsController.js";

const router = express.Router();

// Activity allocation summary overview
router.get("/", getActivitySummary);

// Get Filters for activity summary (leaders, requestors, departments)
router.get("/filters", getActivityFilters);

export default router;