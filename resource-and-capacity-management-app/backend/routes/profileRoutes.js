import express from "express";
import { getProfile } from "../controllers/profileController.js";

const router = express.Router();

// Fetch user profile by username (query param)
router.get("/", getProfile);

export default router;