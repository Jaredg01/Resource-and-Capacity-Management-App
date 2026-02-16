import express from "express";
import {
  getAvailableMonths,
  getActivitiesByMonth
} from "../controllers/calendarViewController.js";

const router = express.Router();

// List available months
router.get("/", getAvailableMonths);

// Fetch activities for a selected month
router.post("/", getActivitiesByMonth);

export default router;