import express from "express";
import {
  getAvailableMonths,
  getActivitiesByMonth
} from "../controllers/calendarViewController.js";

const router = express.Router();

// GET /api/calendar-view
router.get("/", getAvailableMonths);

// POST /api/calendar-view
router.post("/", getActivitiesByMonth);

export default router;