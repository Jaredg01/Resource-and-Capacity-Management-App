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

// GET /api/initiatives
router.get("/", getAllInitiatives);

// GET /api/initiatives/dropdowns
router.get("/dropdowns", getInitiativeDropdowns);

// GET /api/initiatives/dept/search?name=John Doe
router.get("/dept/search", getInitiativesByDept);

// POST /api/initiatives
router.post("/", createInitiative);

// PUT /api/initiatives
router.put("/", updateInitiative);

// GET /api/initiatives/:id  <-- MUST BE LAST
router.get("/:id", getInitiativeById);

export default router;