import express from "express";
import { getCapacityMonths } from "../controllers/capacityMonthsController.js";

const router = express.Router();

// List available capacity months
router.get("/", getCapacityMonths);

export default router;