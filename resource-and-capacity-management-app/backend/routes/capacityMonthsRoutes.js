import express from "express";
import { getCapacityMonths } from "../controllers/capacityMonthsController.js";

const router = express.Router();

// GET /api/capacity-summary/months
router.get("/", getCapacityMonths);

export default router;