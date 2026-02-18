import express from "express";
import { getActivitySummary } from "../controllers/reportsController.js";

const router = express.Router();

// Activity allocation summary overview
router.get("/", getActivitySummary);

export default router;