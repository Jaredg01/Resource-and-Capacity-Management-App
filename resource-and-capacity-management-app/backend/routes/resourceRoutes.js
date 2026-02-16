import express from "express";
import {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  updateEmployeeStatus,
  getEmployeeCapacity,
  updateEmployeeCapacity,
  getAllDepartments,
  getAllManagers
} from "../controllers/resourceController.js";

const router = express.Router();

// List all employees
router.get("/employees", getAllEmployees);

// Get employee by ID
router.get("/employees/:emp_id", getEmployeeById);

// Create employee
router.post("/employees", createEmployee);

// Update employee
router.put("/employees/:emp_id", updateEmployee);

// Update employee status
router.patch("/employees/:emp_id/status", updateEmployeeStatus);

// Get employee capacity
router.get("/employees/:emp_id/capacity", getEmployeeCapacity);

// Update employee capacity
router.put("/employees/:emp_id/capacity", updateEmployeeCapacity);

// List all departments
router.get("/departments", getAllDepartments);

// List all managers
router.get("/managers", getAllManagers);

export default router;