import express from "express";
import { login, forgotPassword, resetPassword } from "../controllers/authController.js";

const router = express.Router();

// Auth endpoints
router.post("/login", login);                 // User login
router.post("/forgot-password", forgotPassword); // Send reset link
router.post("/reset-password", resetPassword);   // Apply new password

export default router;