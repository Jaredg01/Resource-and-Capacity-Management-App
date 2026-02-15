import express from "express";
import { getProfile } from "../controllers/profileController.js";

const router = express.Router();

// GET /api/profile?username=lmitchell
router.get("/", getProfile);

export default router;