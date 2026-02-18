(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResourcesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// 'use client';
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// /* ---------------------------------------------------------
//    Shared Style Object
//    ---------------------------------------------------------
//    - Centralizes typography styling for consistency
//    - Used across headings, labels, and UI elements
// --------------------------------------------------------- */
// const styles = {
//   outfitFont: { fontFamily: 'Outfit, sans-serif' }
// };
// /* ---------------------------------------------------------
//    Month Definitions
//    ---------------------------------------------------------
//    - Used for capacity display across the UI
//    - Keys follow YYYYMM format for easy comparison
// --------------------------------------------------------- */
// const MONTHS = [
//   { key: 202501, label: 'Jan-25' },
//   { key: 202502, label: 'Feb-25' },
//   { key: 202503, label: 'Mar-25' },
//   { key: 202504, label: 'Apr-25' },
//   { key: 202505, label: 'May-25' },
//   { key: 202506, label: 'Jun-25' },
//   { key: 202507, label: 'Jul-25' },
//   { key: 202508, label: 'Aug-25' },
//   { key: 202509, label: 'Sep-25' },
//   { key: 202510, label: 'Oct-25' },
//   { key: 202511, label: 'Nov-25' },
//   { key: 202512, label: 'Dec-25' },
//   { key: 202601, label: 'Jan-26' },
//   { key: 202602, label: 'Feb-26' },
//   { key: 202603, label: 'Mar-26' },
//   { key: 202604, label: 'Apr-26' }
// ];
// export default function ResourcesPage() {
//   /* -------------------------------------------------------
//      Core Data State
//      -------------------------------------------------------
//      employees              → filtered list displayed in UI
//      employeesWithCapacity → full dataset including capacity
//      departments           → department lookup table
//      managers              → manager lookup table
//      user                  → logged‑in user from localStorage
//   ------------------------------------------------------- */
//   const [employees, setEmployees] = useState([]);
//   const [employeesWithCapacity, setEmployeesWithCapacity] = useState([]);
//   const [departments, setDepartments] = useState([]);
//   const [managers, setManagers] = useState([]);
//   const [user, setUser] = useState(null);
//   /* -------------------------------------------------------
//      UI State
//      -------------------------------------------------------
//      loading       → global loading indicator
//      error         → error message for API failures
//      activeFilter  → "all" or "mine"
//      statusFilter  → "all", "active", "inactive"
//      searchTerm    → text search for name/title
//   ------------------------------------------------------- */
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [statusFilter, setStatusFilter] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');
//   /* -------------------------------------------------------
//      Modal + Form State
//      -------------------------------------------------------
//      showCreateModal   → controls create modal visibility
//      showEditModal     → controls edit modal visibility
//      selectedEmployee  → employee being edited
//      formData          → create/edit form fields
//   ------------------------------------------------------- */
//   const [showCreateModal, setShowCreateModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);
//   const [formData, setFormData] = useState({
//     emp_name: '',
//     emp_title: '',
//     dept_no: '',
//     manager_id: '',
//     other_info: ''
//   });
//   const router = useRouter();
//   const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
//   /* -------------------------------------------------------
//      Effect: Load User from LocalStorage
//      -------------------------------------------------------
//      - Redirects to login if no user is stored
//      - Stores parsed user object in state
//   ------------------------------------------------------- */
//   useEffect(() => {
//     const userData = localStorage.getItem('user');
//     if (!userData) {
//       router.push('/login');
//       return;
//     }
//     setUser(JSON.parse(userData));
//   }, [router]);
//   /* -------------------------------------------------------
//      Effect: Initial Data Load
//      -------------------------------------------------------
//      - Fetches employees, departments, managers
//      - Fetches capacity for each employee
//      - Builds unified dataset
//   ------------------------------------------------------- */
//   useEffect(() => {
//     fetchAllData();
//   }, []);
//   /* -------------------------------------------------------
//      Effect: Apply Filters When Dependencies Change
//      -------------------------------------------------------
//      - Runs whenever:
//          employeesWithCapacity changes
//          activeFilter changes
//          statusFilter changes
//          searchTerm changes
//          user changes
//   ------------------------------------------------------- */
//   useEffect(() => {
//     applyFilters();
//   }, [employeesWithCapacity, activeFilter, statusFilter, searchTerm, user]);
//   /* -------------------------------------------------------
//      Function: fetchAllData
//      -------------------------------------------------------
//      - Loads all employees
//      - Loads departments + managers
//      - Loads capacity for each employee
//      - Merges capacity into employee objects
//      - Handles loading + error states
//   ------------------------------------------------------- */
//   const fetchAllData = async () => {
//     try {
//       setLoading(true);
//       // Fetch employees
//       const empResponse = await fetch(`${apiUrl}/api/employees`);
//       const empData = await empResponse.json();
//       // Fetch departments
//       const deptResponse = await fetch(`${apiUrl}/api/departments`);
//       const deptData = await deptResponse.json();
//       setDepartments(deptData);
//       // Fetch managers
//       const mgrResponse = await fetch(`${apiUrl}/api/managers`);
//       const mgrData = await mgrResponse.json();
//       setManagers(mgrData);
//       // Fetch capacity for each employee
//       const employeesWithCap = await Promise.all(
//         empData.map(async (emp) => {
//           try {
//             const capResponse = await fetch(`${apiUrl}/api/employees/${emp.emp_id}/capacity`);
//             if (capResponse.ok) {
//               const capData = await capResponse.json();
//               // Build capacity lookup table by month
//               const capacityByMonth = {};
//               capData.forEach(cap => {
//                 capacityByMonth[cap.date] = {
//                   amount: cap.amount,
//                   status: cap.current_status,
//                   comments: cap.comments
//                 };
//               });
//               return { ...emp, capacity: capacityByMonth };
//             }
//           } catch (err) {
//             console.error(`Error fetching capacity for emp ${emp.emp_id}:`, err);
//           }
//           // Default: no capacity data
//           return { ...emp, capacity: {} };
//         })
//       );
//       setEmployeesWithCapacity(employeesWithCap);
//       setEmployees(employeesWithCap);
//       setError('');
//     } catch (err) {
//       console.error('Error fetching data:', err);
//       setError('Failed to load data');
//     } finally {
//       setLoading(false);
//     }
//   };
//   /* -------------------------------------------------------
//      Function: applyFilters
//      -------------------------------------------------------
//      - Applies:
//          1. "Mine" filter (manager_id === user.emp_id)
//          2. Active/Inactive status filter
//          3. Search filter (name/title)
//      - Updates employees list shown in UI
//   ------------------------------------------------------- */
//   const applyFilters = () => {
//     let filtered = [...employeesWithCapacity];
//     // Filter: Mine (employees managed by logged‑in user)
//     if (activeFilter === 'mine' && user) {
//       filtered = filtered.filter(emp => emp.manager_id === user.emp_id);
//     }
//     // Filter: Active / Inactive
//     if (statusFilter !== 'all') {
//       filtered = filtered.filter(emp => {
//         const now = new Date();
//         const currentDate = now.getFullYear() * 100 + (now.getMonth() + 1);
//         const currentCap = emp.capacity[currentDate];
//         if (statusFilter === 'active') {
//           return !currentCap || currentCap.status === 'Active';
//         } else {
//           return currentCap && currentCap.status === 'Inactive';
//         }
//       });
//     }
//     // Filter: Search by name or title
//     if (searchTerm) {
//       const term = searchTerm.toLowerCase();
//       filtered = filtered.filter(emp =>
//         emp.emp_name.toLowerCase().includes(term) ||
//         emp.emp_title.toLowerCase().includes(term)
//       );
//     }
//     setEmployees(filtered);
//   };
//   /* -------------------------------------------------------
//      Function: handleCreate
//      -------------------------------------------------------
//      - Sends POST request to create new employee
//      - Resets form + reloads data
//   ------------------------------------------------------- */
//   const handleCreate = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`${apiUrl}/api/employees`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });
//       const data = await response.json();
//       if (!response.ok) {
//         setError(data.error || 'Failed to create employee');
//         return;
//       }
//       setShowCreateModal(false);
//       setFormData({ emp_name: '', emp_title: '', dept_no: '', manager_id: '', other_info: '' });
//       fetchAllData();
//     } catch (err) {
//       console.error('Error creating employee:', err);
//       setError('Failed to create employee');
//     }
//   };
//   /* -------------------------------------------------------
//      Function: handleEdit
//      -------------------------------------------------------
//      - Sends PUT request to update employee
//      - Resets modal + reloads data
//   ------------------------------------------------------- */
//   const handleEdit = async (e) => {
//     e.preventDefault();
//     if (!selectedEmployee) return;
//     try {
//       const response = await fetch(`${apiUrl}/api/employees/${selectedEmployee.emp_id}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });
//       const data = await response.json();
//       if (!response.ok) {
//         setError(data.error || 'Failed to update employee');
//         return;
//       }
//       setShowEditModal(false);
//       setSelectedEmployee(null);
//       setFormData({ emp_name: '', emp_title: '', dept_no: '', manager_id: '', other_info: '' });
//       fetchAllData();
//     } catch (err) {
//       console.error('Error updating employee:', err);
//       setError('Failed to update employee');
//     }
//   };
//   /* -------------------------------------------------------
//      Function: handleStatusChange
//      -------------------------------------------------------
//      - Sends PATCH request to update employee status
//      - Reloads data after update
//   ------------------------------------------------------- */
//   const handleStatusChange = async (empId, newStatus) => {
//     try {
//       const response = await fetch(`${apiUrl}/api/employees/${empId}/status`, {
//         method: 'PATCH',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ status: newStatus })
//       });
//       if (!response.ok) {
//         const data = await response.json();
//         setError(data.error || 'Failed to update status');
//         return;
//       }
//       setShowEditModal(false);
//       setSelectedEmployee(null);
//       fetchAllData();
//     } catch (err) {
//       console.error('Error updating status:', err);
//       setError('Failed to update status');
//     }
//   };
//   /* -------------------------------------------------------
//      Function: openEditModal
//      -------------------------------------------------------
//      - Preloads selected employee data into form
//      - Opens edit modal
//   ------------------------------------------------------- */
//   const openEditModal = (employee) => {
//     setSelectedEmployee(employee);
//     setFormData({
//       emp_name: employee.emp_name,
//       emp_title: employee.emp_title,
//       dept_no: employee.dept_no,
//       manager_id: employee.manager_id || '',
//       other_info: employee.other_info || ''
//     });
//     setShowEditModal(true);
//   };
//  /* ---------------------------------------------------------
//    Helper: Get Department Name
//    ---------------------------------------------------------
//    - Looks up a department by its dept_no
//    - Returns the department name if found
//    - Falls back to the raw dept_no if no match exists
// --------------------------------------------------------- */
// const getDepartmentName = (deptNo) => {
//   const dept = departments.find(d => d.dept_no === deptNo);
//   return dept ? dept.dept_name : deptNo;
// };
// /* ---------------------------------------------------------
//    Helper: Get Manager Name
//    ---------------------------------------------------------
//    - Finds an employee whose emp_id matches managerId
//    - Returns the manager's full name
//    - Returns "-" if no matching manager is found
// --------------------------------------------------------- */
// const getManagerName = (managerId) => {
//   const manager = employeesWithCapacity.find(e => e.emp_id === managerId);
//   return manager ? manager.emp_name : '-';
// };
// /* ---------------------------------------------------------
//    Helper: Get Director Name
//    ---------------------------------------------------------
//    - Currently returns a static director name
//    - Placeholder for future dynamic lookup
// --------------------------------------------------------- */
// const getDirectorName = () => {
//   return 'Charlotte Nguyen';
// };
// /* ---------------------------------------------------------
//    Helper: Get Current Status
//    ---------------------------------------------------------
//    - Determines the employee's status for the current month
//    - Uses YYYYMM format to match capacity records
//    - Defaults to "Active" if no capacity record exists
// --------------------------------------------------------- */
// const getCurrentStatus = (employee) => {
//   const now = new Date();
//   const currentDate = now.getFullYear() * 100 + (now.getMonth() + 1);
//   const cap = employee.capacity ? employee.capacity[currentDate] : null;
//   return cap ? cap.status : 'Active';
// };
// /* ---------------------------------------------------------
//    Helper: Get Monthly Capacity Value
//    ---------------------------------------------------------
//    - Returns the capacity amount for a given monthKey
//    - Defaults to 1 if no capacity record exists
//    - Ensures UI always has a numeric value to display
// --------------------------------------------------------- */
// const getMonthValue = (employee, monthKey) => {
//   if (!employee.capacity || !employee.capacity[monthKey]) {
//     return 1;
//   }
//   return employee.capacity[monthKey].amount;
// };
// /* ---------------------------------------------------------
//    Navigation: Return to Dashboard
//    ---------------------------------------------------------
//    - Redirects the user back to the dashboard page
//    - Used by header logo click
// --------------------------------------------------------- */
// const goToDashboard = () => {
//   router.push('/dashboard');
// };
// /* ---------------------------------------------------------
//    Loading State: No User Loaded
//    ---------------------------------------------------------
//    - Shows a centered spinner while user data is loading
//    - Prevents rendering protected content prematurely
// --------------------------------------------------------- */
// if (!user) {
//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//       <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
//     </div>
//   );
// }
// /* ---------------------------------------------------------
//    Loading State: Data Fetch in Progress
//    ---------------------------------------------------------
//    - Displays a spinner while employees/capacity load
// --------------------------------------------------------- */
// if (loading) {
//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//       <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
//     </div>
//   );
// }
// /* ---------------------------------------------------------
//    Main Render
//    ---------------------------------------------------------
//    - Header with branding + navigation
//    - User profile shortcut
//    - Page content rendered below this block
// --------------------------------------------------------- */
// return (
//   <div className="min-h-screen bg-gray-50">
//     <header className="bg-[#017ACB] shadow-sm">
//       <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo + App Name (Clickable → Dashboard) */}
//           <div className="flex items-center cursor-pointer" onClick={goToDashboard}>
//             <img src="/CapstoneDynamicsLogo.png" alt="Logo" className="h-12 w-auto" />
//             <div className="flex flex-col ml-3">
//               <h1 className="text-2xl font-bold text-white leading-tight" style={styles.outfitFont}>
//                 Capstone Dynamics
//               </h1>
//             </div>
//           </div>
//           {/* Centered Title */}
//           <div className="flex flex-col items-center">
//             <h1 className="text-xl font-bold text-white leading-tight" style={styles.outfitFont}>
//               Resource & Capacity
//             </h1>
//             <h2 className="text-xl font-bold text-white leading-tight" style={styles.outfitFont}>
//               Management Planner
//             </h2>
//           </div>
//           {/* User Info + Profile Shortcut */}
//           <div className="flex items-center gap-4">
//             <span className="text-white font-semibold" style={styles.outfitFont}>
//               {user?.username || ''}
//             </span>
//             <div
//               onClick={() => router.push('/Profile/view-profile')}
//               className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden hover:opacity-90 transition cursor-pointer"
//               title="View Profile"
//             >
//               <span className="text-[#017ACB] font-bold text-lg">
//                 {user?.username?.charAt(0)?.toUpperCase() || ''}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//     <main className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
//   {/* -----------------------------------------------------
//       Page Header
//       -----------------------------------------------------
//       - Displays the page title
//       - Includes a button to return to the dashboard
//   ----------------------------------------------------- */}
//   <div className="flex justify-between items-center mb-4">
//     <h2 className="text-2xl text-gray-900" style={styles.outfitFont}>
//       Data Management - Resource Availability by Month
//     </h2>
//     <button
//       onClick={goToDashboard}
//       className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition cursor-pointer"
//       style={styles.outfitFont}
//     >
//       ← Back to Dashboard
//     </button>
//   </div>
//   {/* -----------------------------------------------------
//       Error Banner
//       -----------------------------------------------------
//       - Displays API or validation errors
//       - Includes dismiss button to clear error state
//   ----------------------------------------------------- */}
//   {error && (
//     <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
//       {error}
//       <button onClick={() => setError('')} className="ml-4 text-red-900 font-bold">×</button>
//     </div>
//   )}
//   {/* -----------------------------------------------------
//       Filter Controls
//       -----------------------------------------------------
//       - Active filter: All / Mine
//       - Status filter: Active / Inactive / All
//       - Search bar: filters by name or title
//       - Create Resource button: opens modal
//   ----------------------------------------------------- */}
//   <div className="mb-4 flex flex-wrap gap-4 items-center justify-between">
//     {/* Left-side filters */}
//     <div className="flex flex-wrap gap-4 items-center">
//       {/* Active Filter (All / Mine) */}
//       <div>
//         <button
//           onClick={() => setActiveFilter('all')}
//           className={`p-2 w-16 border border-gray-300 text-center cursor-pointer text-sm ${
//             activeFilter === 'all' ? 'bg-[#017ACB] text-white' : 'text-gray-600 bg-white'
//           }`}
//           style={styles.outfitFont}
//         >
//           All
//         </button>
//         <button
//           onClick={() => setActiveFilter('mine')}
//           className={`p-2 w-16 border border-gray-300 text-center cursor-pointer text-sm ${
//             activeFilter === 'mine' ? 'bg-[#017ACB] text-white' : 'text-gray-600 bg-white'
//           }`}
//           style={styles.outfitFont}
//         >
//           Mine
//         </button>
//       </div>
//       {/* Status Filter */}
//       <select
//         value={statusFilter}
//         onChange={(e) => setStatusFilter(e.target.value)}
//         className="px-3 py-2 border border-gray-300 rounded text-gray-700 text-sm"
//         style={styles.outfitFont}
//       >
//         <option value="all">All Status</option>
//         <option value="active">Active</option>
//         <option value="inactive">Inactive</option>
//       </select>
//       {/* Search Bar */}
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="px-3 py-2 border border-gray-300 rounded text-gray-700 text-sm w-48"
//         style={styles.outfitFont}
//       />
//     </div>
//     {/* Create Resource Button */}
//     <button
//       onClick={() => setShowCreateModal(true)}
//       className="px-4 py-2 bg-[#017ACB] text-white rounded hover:bg-blue-700 transition text-sm cursor-pointer"
//       style={styles.outfitFont}
//     >
//       + Create Resource
//     </button>
//   </div>
//   {/* -----------------------------------------------------
//       Employee Table
//       -----------------------------------------------------
//       - Displays all employees with capacity by month
//       - Sticky first column for Edit button
//       - Dynamically renders month columns from MONTHS array
//   ----------------------------------------------------- */}
//   <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-x-auto">
//     <table className="w-full text-sm">
//       {/* ---------------- Table Header ---------------- */}
//       <thead className="bg-gray-100">
//         <tr>
//           <th className="px-2 py-2 text-left font-semibold text-gray-700 border-b border-r sticky left-0 bg-gray-100 z-10" style={styles.outfitFont}>Edit</th>
//           <th className="px-2 py-2 text-left font-semibold text-gray-700 border-b border-r min-w-[150px]" style={styles.outfitFont}>Name</th>
//           <th className="px-2 py-2 text-left font-semibold text-gray-700 border-b border-r min-w-[180px]" style={styles.outfitFont}>Title</th>
//           <th className="px-2 py-2 text-left font-semibold text-gray-700 border-b border-r min-w-[100px]" style={styles.outfitFont}>Department</th>
//           <th className="px-2 py-2 text-left font-semibold text-gray-700 border-b border-r min-w-[130px]" style={styles.outfitFont}>Reports To</th>
//           <th className="px-2 py-2 text-left font-semibold text-gray-700 border-b border-r min-w-[130px]" style={styles.outfitFont}>Director Level</th>
//           <th className="px-2 py-2 text-left font-semibold text-gray-700 border-b border-r min-w-[150px]" style={styles.outfitFont}>Other Information</th>
//           <th className="px-2 py-2 text-left font-semibold text-gray-700 border-b border-r min-w-[80px]" style={styles.outfitFont}>Current Status</th>
//           {/* Dynamic Month Columns */}
//           {MONTHS.map(month => (
//             <th
//               key={month.key}
//               className="px-2 py-2 text-center font-semibold text-gray-700 border-b border-r min-w-[60px]"
//               style={styles.outfitFont}
//             >
//               {month.label}
//             </th>
//           ))}
//         </tr>
//       </thead>
//       {/* ---------------- Table Body ---------------- */}
//       <tbody>
//         {employees.length === 0 ? (
//           <tr>
//             <td
//               colSpan={8 + MONTHS.length}
//               className="px-4 py-8 text-center text-gray-500"
//               style={styles.outfitFont}
//             >
//               No employees found
//             </td>
//           </tr>
//         ) : (
//           employees.map((employee) => (
//             <tr key={employee.emp_id} className="hover:bg-gray-50 border-b">
//               {/* Edit Button (Sticky Column) */}
//               <td className="px-2 py-2 border-r sticky left-0 bg-white z-10">
//                 <button
//                   onClick={() => openEditModal(employee)}
//                   className="px-2 py-1 bg-[#017ACB] text-white text-xs rounded hover:bg-blue-700 cursor-pointer"
//                   style={styles.outfitFont}
//                 >
//                   Edit
//                 </button>
//               </td>
//               {/* Employee Details */}
//               <td className="px-2 py-2 text-gray-900 border-r" style={styles.outfitFont}>{employee.emp_name}</td>
//               <td className="px-2 py-2 text-gray-600 border-r" style={styles.outfitFont}>{employee.emp_title}</td>
//               <td className="px-2 py-2 text-gray-600 border-r" style={styles.outfitFont}>{getDepartmentName(employee.dept_no)}</td>
//               <td className="px-2 py-2 text-gray-600 border-r" style={styles.outfitFont}>{getManagerName(employee.manager_id)}</td>
//               <td className="px-2 py-2 text-gray-600 border-r" style={styles.outfitFont}>{getDirectorName()}</td>
//               <td className="px-2 py-2 text-gray-600 border-r" style={styles.outfitFont}>{employee.other_info || ''}</td>
//               {/* Current Status Badge */}
//               <td className="px-2 py-2 border-r">
//                 <span
//                   className={`px-2 py-1 text-xs rounded ${
//                     getCurrentStatus(employee) === 'Active'
//                       ? 'bg-green-100 text-green-800'
//                       : 'bg-red-100 text-red-800'
//                   }`}
//                   style={styles.outfitFont}
//                 >
//                   {getCurrentStatus(employee)}
//                 </span>
//               </td>
//               {/* Monthly Capacity Values */}
//               {MONTHS.map(month => (
//                 <td
//                   key={month.key}
//                   className="px-2 py-2 text-center border-r text-gray-700"
//                   style={styles.outfitFont}
//                 >
//                   {getMonthValue(employee, month.key)}
//                 </td>
//               ))}
//             </tr>
//           ))
//         )}
//       </tbody>
//     </table>
//   </div>
//   {/* -----------------------------------------------------
//       Footer: Summary of Results
//       -----------------------------------------------------
//       - Shows how many employees match the current filters
//   ----------------------------------------------------- */}
//   <div className="mt-4 text-gray-600 text-sm" style={styles.outfitFont}>
//     Showing {employees.length} of {employeesWithCapacity.length} employees
//   </div>
// </main>
// {/* ---------------------------------------------------------
//     CREATE RESOURCE MODAL
//     ---------------------------------------------------------
//     - Appears when showCreateModal === true
//     - Allows creation of a new employee record
//     - Includes validation for required fields
//     - Uses formData state to track input values
// --------------------------------------------------------- */}
// {showCreateModal && (
//   <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//     <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
//       {/* Modal Title */}
//       <h2 className="text-xl font-bold text-gray-900 mb-4" style={styles.outfitFont}>
//         Create New Resource
//       </h2>
//       {/* Create Form */}
//       <form onSubmit={handleCreate} className="space-y-4">
//         {/* Name Field */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1" style={styles.outfitFont}>
//             Name *
//           </label>
//           <input
//             type="text"
//             value={formData.emp_name}
//             onChange={(e) => setFormData({ ...formData, emp_name: e.target.value })}
//             className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 text-sm"
//             style={styles.outfitFont}
//             required
//           />
//         </div>
//         {/* Title Field */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1" style={styles.outfitFont}>
//             Title *
//           </label>
//           <input
//             type="text"
//             value={formData.emp_title}
//             onChange={(e) => setFormData({ ...formData, emp_title: e.target.value })}
//             className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 text-sm"
//             style={styles.outfitFont}
//             required
//           />
//         </div>
//  -------------
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1" style={styles.outfitFont}>Department *</label>
//                 <select
//                   value={formData.dept_no}
//                   onChange={(e) => setFormData({ ...formData, dept_no: e.target.value })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 text-sm"
//                   style={styles.outfitFont}
//                   required
//                 >
//                   <option value="">Select Department</option>
//                   {departments.map((dept) => (
//                     <option key={dept.dept_no} value={dept.dept_no}>
//                       {dept.dept_name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1" style={styles.outfitFont}>Reports To</label>
//                 <select
//                   value={formData.manager_id}
//                   onChange={(e) => setFormData({ ...formData, manager_id: e.target.value })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 text-sm"
//                   style={styles.outfitFont}
//                 >
//                   <option value="">Select Manager</option>
//                   {managers.map((manager) => (
//                     <option key={manager.emp_id} value={manager.emp_id}>
//                       {manager.emp_name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1" style={styles.outfitFont}>Other Information</label>
//                 <input
//                   type="text"
//                   value={formData.other_info}
//                   onChange={(e) => setFormData({ ...formData, other_info: e.target.value })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 text-sm"
//                   style={styles.outfitFont}
//                   placeholder="e.g., Contract End date = Oct 15, 2025"
//                 />
//               </div>
//               <div className="flex gap-3 pt-4">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setShowCreateModal(false);
//                     setFormData({ emp_name: '', emp_title: '', dept_no: '', manager_id: '', other_info: '' });
//                   }}
//                   className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 text-sm cursor-pointer"
//                   style={styles.outfitFont}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="flex-1 px-4 py-2 bg-[#017ACB] text-white rounded hover:bg-blue-700 text-sm cursor-pointer"
//                   style={styles.outfitFont}
//                 >
//                   Create
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//       {showEditModal && selectedEmployee && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
//             <h2 className="text-xl font-bold text-gray-900 mb-4" style={styles.outfitFont}>Edit Resource</h2>
//             <form onSubmit={handleEdit} className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1" style={styles.outfitFont}>Name *</label>
//                 <input
//                   type="text"
//                   value={formData.emp_name}
//                   onChange={(e) => setFormData({ ...formData, emp_name: e.target.value })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 text-sm"
//                   style={styles.outfitFont}
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1" style={styles.outfitFont}>Title *</label>
//                 <input
//                   type="text"
//                   value={formData.emp_title}
//                   onChange={(e) => setFormData({ ...formData, emp_title: e.target.value })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 text-sm"
//                   style={styles.outfitFont}
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1" style={styles.outfitFont}>Department *</label>
//                 <select
//                   value={formData.dept_no}
//                   onChange={(e) => setFormData({ ...formData, dept_no: e.target.value })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 text-sm"
//                   style={styles.outfitFont}
//                   required
//                 >
//                   <option value="">Select Department</option>
//                   {departments.map((dept) => (
//                     <option key={dept.dept_no} value={dept.dept_no}>
//                       {dept.dept_name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1" style={styles.outfitFont}>Reports To</label>
//                 <select
//                   value={formData.manager_id}
//                   onChange={(e) => setFormData({ ...formData, manager_id: e.target.value })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 text-sm"
//                   style={styles.outfitFont}
//                 >
//                   <option value="">Select Manager</option>
//                   {managers.map((manager) => (
//                     <option key={manager.emp_id} value={manager.emp_id}>
//                       {manager.emp_name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1" style={styles.outfitFont}>Other Information</label>
//                 <input
//                   type="text"
//                   value={formData.other_info}
//                   onChange={(e) => setFormData({ ...formData, other_info: e.target.value })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 text-sm"
//                   style={styles.outfitFont}
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1" style={styles.outfitFont}>Status</label>
//                 <div className="flex gap-2">
//                   <button
//                     type="button"
//                     onClick={() => handleStatusChange(selectedEmployee.emp_id, 'Active')}
//                     className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm cursor-pointer"
//                     style={styles.outfitFont}
//                   >
//                     Set Active
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => handleStatusChange(selectedEmployee.emp_id, 'Inactive')}
//                     className="px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm cursor-pointer"
//                     style={styles.outfitFont}
//                   >
//                     Set Inactive
//                   </button>
//                 </div>
//               </div>
//               <div className="flex gap-3 pt-4">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setShowEditModal(false);
//                     setSelectedEmployee(null);
//                     setFormData({ emp_name: '', emp_title: '', dept_no: '', manager_id: '', other_info: '' });
//                   }}
//                   className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 text-sm cursor-pointer"
//                   style={styles.outfitFont}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="flex-1 px-4 py-2 bg-[#017ACB] text-white rounded hover:bg-blue-700 text-sm cursor-pointer"
//                   style={styles.outfitFont}
//                 >
//                   Save Changes
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
'use client';
;
;
const styles = {
    outfitFont: {
        fontFamily: 'Outfit, sans-serif'
    }
};
const MONTHS = [
    {
        key: 202501,
        label: 'Jan-25'
    },
    {
        key: 202502,
        label: 'Feb-25'
    },
    {
        key: 202503,
        label: 'Mar-25'
    },
    {
        key: 202504,
        label: 'Apr-25'
    },
    {
        key: 202505,
        label: 'May-25'
    },
    {
        key: 202506,
        label: 'Jun-25'
    },
    {
        key: 202507,
        label: 'Jul-25'
    },
    {
        key: 202508,
        label: 'Aug-25'
    },
    {
        key: 202509,
        label: 'Sep-25'
    },
    {
        key: 202510,
        label: 'Oct-25'
    },
    {
        key: 202511,
        label: 'Nov-25'
    },
    {
        key: 202512,
        label: 'Dec-25'
    },
    {
        key: 202601,
        label: 'Jan-26'
    },
    {
        key: 202602,
        label: 'Feb-26'
    },
    {
        key: 202603,
        label: 'Mar-26'
    },
    {
        key: 202604,
        label: 'Apr-26'
    }
];
function ResourcesPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const refresh = searchParams.get("refresh");
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [employees, setEmployees] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredEmployees, setFilteredEmployees] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Multi-select Filter States
    const [selectedDepts, setSelectedDepts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedTitles, setSelectedTitles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedManagers, setSelectedManagers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // UI Visibility States
    const [activeMenu, setActiveMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // 'dept' | 'title' | 'mgr'
    const [menuPosition, setMenuPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    // Filter Options
    const [options, setOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        depts: [],
        titles: [],
        managers: []
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResourcesPage.useEffect": ()=>{
            const userData = localStorage.getItem('user');
            if (!userData) {
                router.push('/Resource-Manager/Profile/login');
                return;
            }
            setUser(JSON.parse(userData));
        }
    }["ResourcesPage.useEffect"], [
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResourcesPage.useEffect": ()=>{
            if (!user) return;
            const fetchData = {
                "ResourcesPage.useEffect.fetchData": async ()=>{
                    try {
                        const res = await fetch(`/api/Resource-Manager/Employees?ts=${Date.now()}`, {
                            cache: "no-store",
                            headers: {
                                "Cache-Control": "no-store"
                            }
                        });
                        const data = await res.json();
                        const raw = Array.isArray(data) ? data : data.employees || [];
                        setEmployees(raw);
                        setOptions({
                            depts: [
                                ...new Set(raw.map({
                                    "ResourcesPage.useEffect.fetchData": (e)=>e.dept_name || e.dept_no
                                }["ResourcesPage.useEffect.fetchData"]).filter(Boolean))
                            ],
                            titles: [
                                ...new Set(raw.map({
                                    "ResourcesPage.useEffect.fetchData": (e_0)=>e_0.emp_title
                                }["ResourcesPage.useEffect.fetchData"]).filter(Boolean))
                            ],
                            managers: [
                                ...new Set(raw.map({
                                    "ResourcesPage.useEffect.fetchData": (e_1)=>e_1.manager_name
                                }["ResourcesPage.useEffect.fetchData"]).filter(Boolean))
                            ]
                        });
                    } catch (err) {
                        console.error("Fetch error:", err);
                    }
                }
            }["ResourcesPage.useEffect.fetchData"];
            fetchData();
        }
    }["ResourcesPage.useEffect"], [
        user,
        refresh
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResourcesPage.useEffect": ()=>{
            let base = [
                ...employees
            ];
            if (activeTab === 'mine') base = base.filter({
                "ResourcesPage.useEffect": (e_2)=>e_2.manager_id === user.emp_id || e_2.manager_name === user.username
            }["ResourcesPage.useEffect"]);
            const filtered = base.filter({
                "ResourcesPage.useEffect.filtered": (e_3)=>(selectedDepts.length ? selectedDepts.includes(e_3.dept_name || e_3.dept_no) : true) && (selectedTitles.length ? selectedTitles.includes(e_3.emp_title) : true) && (selectedManagers.length ? selectedManagers.includes(e_3.manager_name) : true)
            }["ResourcesPage.useEffect.filtered"]);
            setFilteredEmployees(filtered);
        }
    }["ResourcesPage.useEffect"], [
        activeTab,
        employees,
        user,
        selectedDepts,
        selectedTitles,
        selectedManagers
    ]);
    const toggleFilter = (e_4, menuName)=>{
        e_4.stopPropagation();
        if (activeMenu === menuName) {
            setActiveMenu(null);
        } else {
            const rect = e_4.target.getBoundingClientRect();
            setMenuPosition({
                x: rect.left,
                y: rect.bottom
            });
            setActiveMenu(menuName);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResourcesPage.useEffect": ()=>{
            const closeMenu = {
                "ResourcesPage.useEffect.closeMenu": ()=>setActiveMenu(null)
            }["ResourcesPage.useEffect.closeMenu"];
            window.addEventListener('click', closeMenu);
            return ({
                "ResourcesPage.useEffect": ()=>window.removeEventListener('click', closeMenu)
            })["ResourcesPage.useEffect"];
        }
    }["ResourcesPage.useEffect"], []);
    if (!user) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-[#017ACB] shadow-sm w-full relative h-20 flex items-center px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center cursor-pointer",
                        onClick: ()=>router.push('/Resource-Manager/dashboard'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/CapstoneDynamicsLogo.png",
                                alt: "Logo",
                                className: "h-12 w-auto"
                            }, void 0, false, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                lineNumber: 1124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-white font-bold ml-4 text-2xl",
                                style: styles.outfitFont,
                                children: "Capstone Dynamics"
                            }, void 0, false, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                lineNumber: 1125,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                        lineNumber: 1123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 -translate-x-1/2 text-white font-bold text-lg text-center",
                        style: styles.outfitFont,
                        children: "Resource & Capacity Management Planner"
                    }, void 0, false, {
                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                        lineNumber: 1127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-auto flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white font-semibold",
                                children: user.username
                            }, void 0, false, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                lineNumber: 1131,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#017ACB] font-bold",
                                children: user.username.charAt(0).toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                lineNumber: 1132,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                        lineNumber: 1130,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                lineNumber: 1122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-end mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl font-bold mb-2",
                                        style: styles.outfitFont,
                                        children: "Resource Management"
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                        lineNumber: 1141,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push('/Resource-Manager/dashboard'),
                                        className: "text-sm bg-white border px-3 py-1 rounded",
                                        children: "← Dashboard"
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                        lineNumber: 1142,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                lineNumber: 1140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab('all'),
                                        className: `px-4 py-2 rounded text-sm ${activeTab === 'all' ? 'bg-[#017ACB] text-white' : 'bg-white border'}`,
                                        children: "All Resources"
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                        lineNumber: 1145,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab('mine'),
                                        className: `px-4 py-2 rounded text-sm ${activeTab === 'mine' ? 'bg-[#017ACB] text-white' : 'bg-white border'}`,
                                        children: "My Team"
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                        lineNumber: 1146,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push('/Resource-Manager/create_edit_Employees/AddEmployee'),
                                        className: "px-4 py-2 rounded text-sm bg-white border font-bold text-[#017ACB]",
                                        children: "+ Create Resource"
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                        lineNumber: 1147,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                lineNumber: 1144,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                        lineNumber: 1139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border rounded-xl shadow-sm overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto max-h-[70vh]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full border-collapse text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "bg-[#017ACB] text-white sticky top-0 z-20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "sticky left-0 bg-[#017ACB] p-3 border-b border-r z-30",
                                                    children: "Edit"
                                                }, void 0, false, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                    lineNumber: 1156,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-3 border-b border-r text-left min-w-[150px]",
                                                    children: "Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                    lineNumber: 1157,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-3 border-b border-r text-left min-w-[150px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Title"
                                                            }, void 0, false, {
                                                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                                lineNumber: 1162,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: (e_5)=>toggleFilter(e_5, 'title'),
                                                                className: "bg-white text-[#017ACB] px-1 rounded text-[10px]",
                                                                children: "▼"
                                                            }, void 0, false, {
                                                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                                lineNumber: 1163,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                        lineNumber: 1161,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                    lineNumber: 1160,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-3 border-b border-r text-left min-w-[150px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Department"
                                                            }, void 0, false, {
                                                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                                lineNumber: 1170,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: (e_6)=>toggleFilter(e_6, 'dept'),
                                                                className: "bg-white text-[#017ACB] px-1 rounded text-[10px]",
                                                                children: "▼"
                                                            }, void 0, false, {
                                                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                                lineNumber: 1171,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                        lineNumber: 1169,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                    lineNumber: 1168,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-3 border-b border-r text-left min-w-[150px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Reports To"
                                                            }, void 0, false, {
                                                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                                lineNumber: 1178,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: (e_7)=>toggleFilter(e_7, 'mgr'),
                                                                className: "bg-white text-[#017ACB] px-1 rounded text-[10px]",
                                                                children: "▼"
                                                            }, void 0, false, {
                                                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                                lineNumber: 1179,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                        lineNumber: 1177,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                    lineNumber: 1176,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-3 border-b border-r text-left min-w-[140px]",
                                                    children: "Director Level"
                                                }, void 0, false, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                    lineNumber: 1183,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-3 border-b border-r text-left min-w-[200px]",
                                                    children: "Other Information"
                                                }, void 0, false, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                    lineNumber: 1184,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-3 border-b border-r text-center",
                                                    children: "Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                    lineNumber: 1185,
                                                    columnNumber: 19
                                                }, this),
                                                MONTHS.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-2 border-b border-r text-center text-[10px] min-w-[55px]",
                                                        children: m.label
                                                    }, m.key, false, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                        lineNumber: 1187,
                                                        columnNumber: 36
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                            lineNumber: 1155,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                        lineNumber: 1154,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        className: "divide-y",
                                        children: filteredEmployees.map((emp, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: i % 2 === 0 ? 'bg-white' : 'bg-gray-50 hover:bg-blue-50',
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "sticky left-0 bg-inherit p-3 border-r text-center z-10",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>router.push(`/Resource-Manager/create_edit_Employees/EditButton?id=${emp._id}`),
                                                            className: "bg-[#017ACB] text-white px-2 py-1 rounded text-[10px]",
                                                            children: "Edit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                            lineNumber: 1193,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                        lineNumber: 1192,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3 border-r font-semibold text-gray-800",
                                                        children: emp.emp_name
                                                    }, void 0, false, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                        lineNumber: 1195,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3 border-r text-gray-600",
                                                        children: emp.emp_title
                                                    }, void 0, false, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                        lineNumber: 1196,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3 border-r text-gray-600",
                                                        children: emp.dept_name || emp.dept_no
                                                    }, void 0, false, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                        lineNumber: 1197,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3 border-r text-gray-600",
                                                        children: emp.manager_name || '-'
                                                    }, void 0, false, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                        lineNumber: 1198,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3 border-r text-gray-600 text-xs",
                                                        children: "Charlotte Nguyen"
                                                    }, void 0, false, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                        lineNumber: 1199,
                                                        columnNumber: 21
                                                    }, this),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3 border-r text-gray-500 italic text-xs",
                                                        children: emp.other_info || ''
                                                    }, void 0, false, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                        lineNumber: 1200,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-3 border-r text-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `px-2 py-0.5 rounded-full text-[10px] ${emp.status === 'Inactive' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`,
                                                            children: emp.status || 'Active'
                                                        }, void 0, false, {
                                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                            lineNumber: 1202,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                        lineNumber: 1201,
                                                        columnNumber: 21
                                                    }, this),
                                                    MONTHS.map((m_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-2 border-r text-center text-xs text-gray-700",
                                                            children: emp.capacity?.[m_0.key]?.amount ?? 1
                                                        }, m_0.key, false, {
                                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                            lineNumber: 1206,
                                                            columnNumber: 40
                                                        }, this))
                                                ]
                                            }, emp._id, true, {
                                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                lineNumber: 1191,
                                                columnNumber: 52
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                        lineNumber: 1190,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                lineNumber: 1153,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                            lineNumber: 1152,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                        lineNumber: 1151,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                lineNumber: 1138,
                columnNumber: 7
            }, this),
            activeMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bg-white border shadow-2xl rounded-lg z-[100] w-56 p-2 max-h-60 overflow-y-auto",
                style: {
                    top: menuPosition.y + 5,
                    left: menuPosition.x
                },
                onClick: (e_8)=>e_8.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[10px] font-bold text-gray-400 mb-2 px-2 uppercase tracking-wider",
                        children: [
                            "Filter ",
                            activeMenu
                        ]
                    }, void 0, true, {
                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                        lineNumber: 1221,
                        columnNumber: 11
                    }, this),
                    (activeMenu === 'dept' ? options.depts : activeMenu === 'title' ? options.titles : options.managers).map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex items-center gap-2 p-2 hover:bg-blue-50 rounded cursor-pointer text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    checked: (activeMenu === 'dept' ? selectedDepts : activeMenu === 'title' ? selectedTitles : selectedManagers).includes(opt),
                                    onChange: ()=>{
                                        const state = activeMenu === 'dept' ? selectedDepts : activeMenu === 'title' ? selectedTitles : selectedManagers;
                                        const setter = activeMenu === 'dept' ? setSelectedDepts : activeMenu === 'title' ? setSelectedTitles : setSelectedManagers;
                                        setter(state.includes(opt) ? state.filter((x)=>x !== opt) : [
                                            ...state,
                                            opt
                                        ]);
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                    lineNumber: 1223,
                                    columnNumber: 15
                                }, this),
                                opt
                            ]
                        }, opt, true, {
                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                            lineNumber: 1222,
                            columnNumber: 124
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full mt-2 text-[10px] text-blue-600 font-bold border-t pt-2",
                        onClick: ()=>{
                            if (activeMenu === 'dept') setSelectedDepts([]);
                            if (activeMenu === 'title') setSelectedTitles([]);
                            if (activeMenu === 'mgr') setSelectedManagers([]);
                        },
                        children: "Clear All"
                    }, void 0, false, {
                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                        lineNumber: 1230,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                lineNumber: 1217,
                columnNumber: 22
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
        lineNumber: 1121,
        columnNumber: 10
    }, this);
}
_s(ResourcesPage, "NQMdk49FAW9hpTHFD++JkxRoes8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = ResourcesPage;
var _c;
__turbopack_context__.k.register(_c, "ResourcesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/resource-and-capacity-management-app/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/resource-and-capacity-management-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/resource-and-capacity-management-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/resource-and-capacity-management-app/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/resource-and-capacity-management-app/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/resource-and-capacity-management-app/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=resource-and-capacity-management-app_25ddfe25._.js.map