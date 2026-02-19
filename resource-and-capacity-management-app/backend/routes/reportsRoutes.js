import express from "express";
import { getActivitySummary, getLeaders } from "../controllers/reportsController.js";

const router = express.Router();

// Activity allocation summary overview
router.get("/", getActivitySummary);

// Get Leaders
router.get("/leaders", getLeaders);

export default router;