import express from "express";
import { getSummary } from "../controllers/summaryController.js";

const router = express.Router();

// Get summary data
router.get("/", getSummary);

export default router;