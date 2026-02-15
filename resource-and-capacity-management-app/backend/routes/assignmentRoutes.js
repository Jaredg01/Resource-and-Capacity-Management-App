import express from "express";
import {
  getAllAllocations,
  getAllocationById,
  getDeptForEmployee,
  getProjects,
  getEmployee,
  getDMEmployees,
  editAllocationAmount,
  deleteAllocation,
  updateAllocation,
  getAllocationDropdowns,
  createAllocation
} from "../controllers/assignmentController.js";

const router = express.Router();

/* ---------------------------------------------------------
   ALLOCATIONS — CLEAN REST ROUTES
--------------------------------------------------------- */

// GET all allocations
router.get("/", getAllAllocations);

// GET dropdown data
router.get("/meta/dropdowns", getAllocationDropdowns);

// GET department for an employee
router.get("/employee/:empId/department", getDeptForEmployee);

// GET a single employee
router.get("/employee/:empId", getEmployee);

// GET all DM employees
router.get("/employees/dm", getDMEmployees);

// GET all projects
router.get("/projects", getProjects);

// CREATE
router.post("/", createAllocation);

// UPDATE amount
router.put("/:id/amount", editAllocationAmount);

// UPDATE full allocation
router.put("/:id", updateAllocation);

// DELETE
router.delete("/:id", deleteAllocation);

// ❗ MUST BE LAST — catch‑all
router.get("/:id", getAllocationById);

export default router;