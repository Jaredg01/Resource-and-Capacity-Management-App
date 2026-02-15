// import express from "express";
// import {
//   getAllEmployees,
//   getEmployeeById,
//   createEmployee,
//   updateEmployee,
//   updateEmployeeStatus,
//   getEmployeeCapacity,
//   updateEmployeeCapacity,
//   getAllDepartments,
//   getAllManagers
// } from "../controllers/resourceController.js";

// const router = express.Router();

// /* =========================================================
//    EMPLOYEES
// ========================================================= */
// router.get("/employees", getAllEmployees);
// router.get("/employees/:emp_id", getEmployeeById);
// router.post("/employees", createEmployee);
// router.put("/employees/:emp_id", updateEmployee);

// /* =========================================================
//    EMPLOYEE STATUS
// ========================================================= */
// router.put("/employees/:emp_id/status", updateEmployeeStatus);

// /* =========================================================
//    EMPLOYEE CAPACITY
// ========================================================= */
// router.get("/employees/:emp_id/capacity", getEmployeeCapacity);
// router.put("/employees/:emp_id/capacity", updateEmployeeCapacity);

// /* =========================================================
//    DEPARTMENTS
// ========================================================= */
// router.get("/departments", getAllDepartments);

// /* =========================================================
//    MANAGERS
// ========================================================= */
// router.get("/managers", getAllManagers);

// export default router;

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

/* =========================================================
   EMPLOYEES
========================================================= */
router.get("/employees", getAllEmployees);
router.get("/employees/:emp_id", getEmployeeById);
router.post("/employees", createEmployee);
router.put("/employees/:emp_id", updateEmployee);

/* =========================================================
   EMPLOYEE STATUS
========================================================= */
router.patch("/employees/:emp_id/status", updateEmployeeStatus);

/* =========================================================
   EMPLOYEE CAPACITY
========================================================= */
router.get("/employees/:emp_id/capacity", getEmployeeCapacity);
router.put("/employees/:emp_id/capacity", updateEmployeeCapacity);

/* =========================================================
   DEPARTMENTS
========================================================= */
router.get("/departments", getAllDepartments);

/* =========================================================
   MANAGERS
========================================================= */
router.get("/managers", getAllManagers);

export default router;