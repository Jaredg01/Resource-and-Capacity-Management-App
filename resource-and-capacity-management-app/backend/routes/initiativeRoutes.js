import express from "express";
import {
  getAllInitiatives,
  getInitiativeById,
  getInitiativesByDept,
  updateInitiative,
  getInitiativeDropdowns,
  createInitiative
} from "../controllers/initiativeController.js";

const router = express.Router();

// List all initiatives
router.get("/", getAllInitiatives);

// Dropdown metadata (owners, statuses, categories, etc.)
router.get("/dropdowns", getInitiativeDropdowns);

// Search initiatives by department or DM name
router.get("/dept/search", getInitiativesByDept);

// Create new initiative
router.post("/", createInitiative);

// Update existing initiative
router.put("/", updateInitiative);

// Must be last — single initiative lookup
router.get("/:id", getInitiativeById);

export default router;