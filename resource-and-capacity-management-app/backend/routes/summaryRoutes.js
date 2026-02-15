import express from "express";
import { getSummary } from "../controllers/summaryController.js";

const router = express.Router();

// GET /api/summary?filter=mine&username=lmitchell
router.get("/", getSummary);

export default router;