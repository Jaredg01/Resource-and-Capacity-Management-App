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
var __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/resource-and-capacity-management-app/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
/* ---------------------------------------------------------
   Shared Style Object
   ---------------------------------------------------------
   - Centralizes typography styling for consistency
   - Used across headings, labels, and UI elements
--------------------------------------------------------- */ const styles = {
    outfitFont: {
        fontFamily: 'Outfit, sans-serif'
    }
};
/* ---------------------------------------------------------
   Month Definitions
   ---------------------------------------------------------
   - Used for capacity display across the UI
   - Keys follow YYYYMM format for easy comparison
--------------------------------------------------------- */ const MONTHS = [
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
    /* -------------------------------------------------------
     Core Data State
     -------------------------------------------------------
     employees              → filtered list displayed in UI
     employeesWithCapacity → full dataset including capacity
     departments           → department lookup table
     managers              → manager lookup table
     user                  → logged‑in user from localStorage
  ------------------------------------------------------- */ const [employees, setEmployees] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [employeesWithCapacity, setEmployeesWithCapacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [departments, setDepartments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [managers, setManagers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    /* -------------------------------------------------------
     UI State
     -------------------------------------------------------
     loading       → global loading indicator
     error         → error message for API failures
     activeFilter  → "all" or "mine"
     statusFilter  → "all", "active", "inactive"
     searchTerm    → text search for name/title
  ------------------------------------------------------- */ const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    /* -------------------------------------------------------
     Modal + Form State
     -------------------------------------------------------
     showCreateModal   → controls create modal visibility
     showEditModal     → controls edit modal visibility
     selectedEmployee  → employee being edited
     formData          → create/edit form fields
  ------------------------------------------------------- */ const [showCreateModal, setShowCreateModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showEditModal, setShowEditModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedEmployee, setSelectedEmployee] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        emp_name: '',
        emp_title: '',
        dept_no: '',
        manager_id: '',
        other_info: ''
    });
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const apiUrl = 'http://localhost:3001';
    /* -------------------------------------------------------
     Effect: Load User from LocalStorage
     -------------------------------------------------------
     - Redirects to login if no user is stored
     - Stores parsed user object in state
  ------------------------------------------------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResourcesPage.useEffect": ()=>{
            const userData = localStorage.getItem('user');
            if (!userData) {
                router.push('/login');
                return;
            }
            setUser(JSON.parse(userData));
        }
    }["ResourcesPage.useEffect"], [
        router
    ]);
    /* -------------------------------------------------------
     Effect: Initial Data Load
     -------------------------------------------------------
     - Fetches employees, departments, managers
     - Fetches capacity for each employee
     - Builds unified dataset
  ------------------------------------------------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResourcesPage.useEffect": ()=>{
            fetchAllData();
        }
    }["ResourcesPage.useEffect"], []);
    /* -------------------------------------------------------
     Effect: Apply Filters When Dependencies Change
     -------------------------------------------------------
     - Runs whenever:
         employeesWithCapacity changes
         activeFilter changes
         statusFilter changes
         searchTerm changes
         user changes
  ------------------------------------------------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResourcesPage.useEffect": ()=>{
            applyFilters();
        }
    }["ResourcesPage.useEffect"], [
        employeesWithCapacity,
        activeFilter,
        statusFilter,
        searchTerm,
        user
    ]);
    /* -------------------------------------------------------
     Function: fetchAllData
     -------------------------------------------------------
     - Loads all employees
     - Loads departments + managers
     - Loads capacity for each employee
     - Merges capacity into employee objects
     - Handles loading + error states
  ------------------------------------------------------- */ const fetchAllData = async ()=>{
        try {
            setLoading(true);
            // Fetch employees
            const empResponse = await fetch(`${apiUrl}/api/Resource-Manager/employees`);
            const empData = await empResponse.json();
            // Fetch departments
            const deptResponse = await fetch(`${apiUrl}/api/Resource-Manager/departments`);
            const deptData = await deptResponse.json();
            setDepartments(deptData);
            // Fetch managers
            const mgrResponse = await fetch(`${apiUrl}/api/Resource-Manager/managers`);
            const mgrData = await mgrResponse.json();
            setManagers(mgrData);
            // Fetch capacity for each employee
            const employeesWithCap = await Promise.all(empData.map(async (emp)=>{
                try {
                    const capResponse = await fetch(`${apiUrl}/api/Resource-Manager/employees/${emp.emp_id}/capacity`);
                    if (capResponse.ok) {
                        const capData = await capResponse.json();
                        // Build capacity lookup table by month
                        const capacityByMonth = {};
                        capData.forEach((cap)=>{
                            capacityByMonth[cap.date] = {
                                amount: cap.amount,
                                status: cap.current_status,
                                comments: cap.comments
                            };
                        });
                        return {
                            ...emp,
                            capacity: capacityByMonth
                        };
                    }
                } catch (err_0) {
                    console.error(`Error fetching capacity for emp ${emp.emp_id}:`, err_0);
                }
                // Default: no capacity data
                return {
                    ...emp,
                    capacity: {}
                };
            }));
            setEmployeesWithCapacity(employeesWithCap);
            setEmployees(employeesWithCap);
            setError('');
        } catch (err) {
            console.error('Error fetching data:', err);
            setError('Failed to load data');
        } finally{
            setLoading(false);
        }
    };
    /* -------------------------------------------------------
     Function: applyFilters
     -------------------------------------------------------
     - Applies:
         1. "Mine" filter (manager_id === user.emp_id)
         2. Active/Inactive status filter
         3. Search filter (name/title)
     - Updates employees list shown in UI
  ------------------------------------------------------- */ const applyFilters = ()=>{
        let filtered = [
            ...employeesWithCapacity
        ];
        // Filter: Mine (employees managed by logged‑in user)
        if (activeFilter === 'mine' && user) {
            filtered = filtered.filter((emp_0)=>emp_0.manager_id === user.emp_id);
        }
        // Filter: Active / Inactive
        if (statusFilter !== 'all') {
            filtered = filtered.filter((emp_1)=>{
                const now = new Date();
                const currentDate = now.getFullYear() * 100 + (now.getMonth() + 1);
                const currentCap = emp_1.capacity[currentDate];
                if (statusFilter === 'active') {
                    return !currentCap || currentCap.status === 'Active';
                } else {
                    return currentCap && currentCap.status === 'Inactive';
                }
            });
        }
        // Filter: Search by name or title
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            filtered = filtered.filter((emp_2)=>emp_2.emp_name.toLowerCase().includes(term) || emp_2.emp_title.toLowerCase().includes(term));
        }
        setEmployees(filtered);
    };
    /* -------------------------------------------------------
     Function: handleCreate
     -------------------------------------------------------
     - Sends POST request to create new employee
     - Resets form + reloads data
  ------------------------------------------------------- */ const handleCreate = async (e)=>{
        e.preventDefault();
        try {
            const response = await fetch(`${apiUrl}/api/Resource-Manager/employees`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (!response.ok) {
                setError(data.error || 'Failed to create employee');
                return;
            }
            setShowCreateModal(false);
            setFormData({
                emp_name: '',
                emp_title: '',
                dept_no: '',
                manager_id: '',
                other_info: ''
            });
            fetchAllData();
        } catch (err_1) {
            console.error('Error creating employee:', err_1);
            setError('Failed to create employee');
        }
    };
    /* -------------------------------------------------------
     Function: handleEdit
     -------------------------------------------------------
     - Sends PUT request to update employee
     - Resets modal + reloads data
  ------------------------------------------------------- */ const handleEdit = async (e_0)=>{
        e_0.preventDefault();
        if (!selectedEmployee) return;
        try {
            const response_0 = await fetch(`${apiUrl}/api/Resource-Manager/employees/${selectedEmployee.emp_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data_0 = await response_0.json();
            if (!response_0.ok) {
                setError(data_0.error || 'Failed to update employee');
                return;
            }
            setShowEditModal(false);
            setSelectedEmployee(null);
            setFormData({
                emp_name: '',
                emp_title: '',
                dept_no: '',
                manager_id: '',
                other_info: ''
            });
            fetchAllData();
        } catch (err_2) {
            console.error('Error updating employee:', err_2);
            setError('Failed to update employee');
        }
    };
    /* -------------------------------------------------------
     Function: handleStatusChange
     -------------------------------------------------------
     - Sends PATCH request to update employee status
     - Reloads data after update
  ------------------------------------------------------- */ const handleStatusChange = async (empId, newStatus)=>{
        try {
            const response_1 = await fetch(`${apiUrl}/api/Resource-Manager/employees/${empId}/status`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    status: newStatus
                })
            });
            if (!response_1.ok) {
                const data_1 = await response_1.json();
                setError(data_1.error || 'Failed to update status');
                return;
            }
            setShowEditModal(false);
            setSelectedEmployee(null);
            fetchAllData();
        } catch (err_3) {
            console.error('Error updating status:', err_3);
            setError('Failed to update status');
        }
    };
    /* -------------------------------------------------------
     Function: openEditModal
     -------------------------------------------------------
     - Preloads selected employee data into form
     - Opens edit modal
  ------------------------------------------------------- */ const openEditModal = (employee)=>{
        setSelectedEmployee(employee);
        setFormData({
            emp_name: employee.emp_name,
            emp_title: employee.emp_title,
            dept_no: employee.dept_no,
            manager_id: employee.manager_id || '',
            other_info: employee.other_info || ''
        });
        setShowEditModal(true);
    };
    /* ---------------------------------------------------------
    Helper: Get Department Name
    ---------------------------------------------------------
    - Looks up a department by its dept_no
    - Returns the department name if found
    - Falls back to the raw dept_no if no match exists
  --------------------------------------------------------- */ const getDepartmentName = (deptNo)=>{
        const dept = departments.find((d)=>d.dept_no === deptNo);
        return dept ? dept.dept_name : deptNo;
    };
    /* ---------------------------------------------------------
     Helper: Get Manager Name
     ---------------------------------------------------------
     - Finds an employee whose emp_id matches managerId
     - Returns the manager's full name
     - Returns "-" if no matching manager is found
  --------------------------------------------------------- */ const getManagerName = (managerId)=>{
        const manager = employeesWithCapacity.find((e_1)=>e_1.emp_id === managerId);
        return manager ? manager.emp_name : '-';
    };
    /* ---------------------------------------------------------
     Helper: Get Director Name
     ---------------------------------------------------------
     - Currently returns a static director name
     - Placeholder for future dynamic lookup
  --------------------------------------------------------- */ const getDirectorName = ()=>{
        return 'Charlotte Nguyen';
    };
    /* ---------------------------------------------------------
     Helper: Get Current Status
     ---------------------------------------------------------
     - Determines the employee's status for the current month
     - Uses YYYYMM format to match capacity records
     - Defaults to "Active" if no capacity record exists
  --------------------------------------------------------- */ const getCurrentStatus = (employee_0)=>{
        const now_0 = new Date();
        const currentDate_0 = now_0.getFullYear() * 100 + (now_0.getMonth() + 1);
        const cap_0 = employee_0.capacity ? employee_0.capacity[currentDate_0] : null;
        return cap_0 ? cap_0.status : 'Active';
    };
    /* ---------------------------------------------------------
     Helper: Get Monthly Capacity Value
     ---------------------------------------------------------
     - Returns the capacity amount for a given monthKey
     - Defaults to 1 if no capacity record exists
     - Ensures UI always has a numeric value to display
  --------------------------------------------------------- */ const getMonthValue = (employee_1, monthKey)=>{
        if (!employee_1.capacity || !employee_1.capacity[monthKey]) {
            return 1;
        }
        return employee_1.capacity[monthKey].amount;
    };
    /* ---------------------------------------------------------
     Navigation: Return to Dashboard
     ---------------------------------------------------------
     - Redirects the user back to the dashboard page
     - Used by header logo click
  --------------------------------------------------------- */ const goToDashboard = ()=>{
        router.push('/dashboard');
    };
    /* ---------------------------------------------------------
     Loading State: No User Loaded
     ---------------------------------------------------------
     - Shows a centered spinner while user data is loading
     - Prevents rendering protected content prematurely
  --------------------------------------------------------- */ if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
            }, void 0, false, {
                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                lineNumber: 477,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
            lineNumber: 476,
            columnNumber: 12
        }, this);
    }
    /* ---------------------------------------------------------
     Loading State: Data Fetch in Progress
     ---------------------------------------------------------
     - Displays a spinner while employees/capacity load
  --------------------------------------------------------- */ if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
            }, void 0, false, {
                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                lineNumber: 488,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
            lineNumber: 487,
            columnNumber: 12
        }, this);
    }
    /* ---------------------------------------------------------
     Main Render
     ---------------------------------------------------------
     - Header with branding + navigation
     - User profile shortcut
     - Page content rendered below this block
  --------------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-[#017ACB] shadow-sm w-full relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 sm:px-6 lg:px-8 w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex items-center h-[clamp(4.5rem,5vw,5.5rem)] w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center cursor-pointer flex-none",
                                onClick: ()=>router.push('/Resource-Manager/dashboard'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/CapstoneDynamicsLogo.png",
                                        alt: "Logo",
                                        className: "w-auto h-[clamp(3.2rem,3.8vw,4rem)]"
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                        lineNumber: 508,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "font-bold text-white leading-tight ml-4 text-[clamp(1.6rem,1.7vw,2rem)]",
                                        style: styles.outfitFont,
                                        children: "Capstone Dynamics"
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                        lineNumber: 510,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                lineNumber: 507,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-1/2 -translate-x-1/2 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-bold text-white leading-tight text-[clamp(1.2rem,1.3vw,1.6rem)]",
                                    style: styles.outfitFont,
                                    children: "Resource & Capacity Management Planner"
                                }, void 0, false, {
                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                    lineNumber: 517,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                lineNumber: 516,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 ml-auto flex-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-white text-[clamp(1rem,1.15vw,1.25rem)]",
                                        style: styles.outfitFont,
                                        children: user?.username || ''
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                        lineNumber: 524,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>router.push('/Resource-Manager/Profile/view-profile'),
                                        className: "rounded-full bg-white flex items-center justify-center cursor-pointer hover:opacity-90 transition   w-[clamp(2.4rem,2.8vw,3.0rem)] h-[clamp(2.4rem,2.8vw,3.0rem)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#017ACB] font-bold text-[clamp(1.1rem,1.3vw,1.5rem)]",
                                            children: user?.username?.charAt(0)?.toUpperCase() || ''
                                        }, void 0, false, {
                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                            lineNumber: 530,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                        lineNumber: 528,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                lineNumber: 523,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                        lineNumber: 504,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                    lineNumber: 501,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                lineNumber: 500,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl text-gray-900",
                                style: styles.outfitFont,
                                children: "Data Management - Resource Availability by Month"
                            }, void 0, false, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                lineNumber: 549,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: goToDashboard,
                                className: "px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition cursor-pointer",
                                style: styles.outfitFont,
                                children: "← Back to Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                lineNumber: 553,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                        lineNumber: 548,
                        columnNumber: 3
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded",
                        children: [
                            error,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setError(''),
                                className: "ml-4 text-red-900 font-bold",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                lineNumber: 566,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                        lineNumber: 564,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex flex-wrap gap-4 items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-4 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveFilter('all'),
                                                className: `p-2 w-16 border border-gray-300 text-center cursor-pointer text-sm ${activeFilter === 'all' ? 'bg-[#017ACB] text-white' : 'text-gray-600 bg-white'}`,
                                                style: styles.outfitFont,
                                                children: "All"
                                            }, void 0, false, {
                                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                lineNumber: 584,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveFilter('mine'),
                                                className: `p-2 w-16 border border-gray-300 text-center cursor-pointer text-sm ${activeFilter === 'mine' ? 'bg-[#017ACB] text-white' : 'text-gray-600 bg-white'}`,
                                                style: styles.outfitFont,
                                                children: "Mine"
                                            }, void 0, false, {
                                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                lineNumber: 588,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                        lineNumber: 583,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: statusFilter,
                                        onChange: (e_2)=>setStatusFilter(e_2.target.value),
                                        className: "px-3 py-2 border border-gray-300 rounded text-gray-700 text-sm",
                                        style: styles.outfitFont,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "all",
                                                children: "All Status"
                                            }, void 0, false, {
                                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                lineNumber: 595,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "active",
                                                children: "Active"
                                            }, void 0, false, {
                                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                lineNumber: 596,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "inactive",
                                                children: "Inactive"
                                            }, void 0, false, {
                                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                lineNumber: 597,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                        lineNumber: 594,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search...",
                                        value: searchTerm,
                                        onChange: (e_3)=>setSearchTerm(e_3.target.value),
                                        className: "px-3 py-2 border border-gray-300 rounded text-gray-700 text-sm w-48",
                                        style: styles.outfitFont
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                        lineNumber: 601,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                lineNumber: 580,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowCreateModal(true),
                                className: "px-4 py-2 bg-[#017ACB] text-white rounded hover:bg-blue-700 transition text-sm cursor-pointer",
                                style: styles.outfitFont,
                                children: "+ Create Resource"
                            }, void 0, false, {
                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                lineNumber: 605,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                        lineNumber: 577,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow-sm border border-gray-200 overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-gray-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-2 py-2 text-left font-semibold text-gray-700 border-b border-r sticky left-0 bg-gray-100 z-10",
                                                style: styles.outfitFont,
                                                children: "Edit"
                                            }, void 0, false, {
                                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                lineNumber: 623,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-2 py-2 text-left font-semibold text-gray-700 border-b border-r min-w-[150px]",
                                                style: styles.outfitFont,
                                                children: "Name"
                                            }, void 0, false, {
                                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                lineNumber: 624,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-2 py-2 text-left font-semibold text-gray-700 border-b border-r min-w-[180px]",
                                                style: styles.outfitFont,
                                                children: "Title"
                                            }, void 0, false, {
                                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                lineNumber: 625,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-2 py-2 text-left font-semibold text-gray-700 border-b border-r min-w-[100px]",
                                                style: styles.outfitFont,
                                                children: "Department"
                                            }, void 0, false, {
                                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                lineNumber: 626,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-2 py-2 text-left font-semibold text-gray-700 border-b border-r min-w-[130px]",
                                                style: styles.outfitFont,
                                                children: "Reports To"
                                            }, void 0, false, {
                                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                lineNumber: 627,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-2 py-2 text-left font-semibold text-gray-700 border-b border-r min-w-[130px]",
                                                style: styles.outfitFont,
                                                children: "Director Level"
                                            }, void 0, false, {
                                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                lineNumber: 628,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-2 py-2 text-left font-semibold text-gray-700 border-b border-r min-w-[150px]",
                                                style: styles.outfitFont,
                                                children: "Other Information"
                                            }, void 0, false, {
                                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                lineNumber: 629,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-2 py-2 text-left font-semibold text-gray-700 border-b border-r min-w-[80px]",
                                                style: styles.outfitFont,
                                                children: "Current Status"
                                            }, void 0, false, {
                                                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                lineNumber: 630,
                                                columnNumber: 11
                                            }, this),
                                            MONTHS.map((month)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-2 text-center font-semibold text-gray-700 border-b border-r min-w-[60px]",
                                                    style: styles.outfitFont,
                                                    children: month.label
                                                }, month.key, false, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                    lineNumber: 633,
                                                    columnNumber: 32
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                        lineNumber: 622,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                    lineNumber: 621,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: employees.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            colSpan: 8 + MONTHS.length,
                                            className: "px-4 py-8 text-center text-gray-500",
                                            style: styles.outfitFont,
                                            children: "No employees found"
                                        }, void 0, false, {
                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                            lineNumber: 642,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                        lineNumber: 641,
                                        columnNumber: 35
                                    }, this) : employees.map((employee_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-gray-50 border-b",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-2 py-2 border-r sticky left-0 bg-white z-10",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>openEditModal(employee_2),
                                                        className: "px-2 py-1 bg-[#017ACB] text-white text-xs rounded hover:bg-blue-700 cursor-pointer",
                                                        style: styles.outfitFont,
                                                        children: "Edit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                        lineNumber: 649,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                    lineNumber: 648,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-2 py-2 text-gray-900 border-r",
                                                    style: styles.outfitFont,
                                                    children: employee_2.emp_name
                                                }, void 0, false, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                    lineNumber: 655,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-2 py-2 text-gray-600 border-r",
                                                    style: styles.outfitFont,
                                                    children: employee_2.emp_title
                                                }, void 0, false, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                    lineNumber: 656,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-2 py-2 text-gray-600 border-r",
                                                    style: styles.outfitFont,
                                                    children: getDepartmentName(employee_2.dept_no)
                                                }, void 0, false, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                    lineNumber: 657,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-2 py-2 text-gray-600 border-r",
                                                    style: styles.outfitFont,
                                                    children: getManagerName(employee_2.manager_id)
                                                }, void 0, false, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                    lineNumber: 658,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-2 py-2 text-gray-600 border-r",
                                                    style: styles.outfitFont,
                                                    children: getDirectorName()
                                                }, void 0, false, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                    lineNumber: 659,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-2 py-2 text-gray-600 border-r",
                                                    style: styles.outfitFont,
                                                    children: employee_2.other_info || ''
                                                }, void 0, false, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                    lineNumber: 660,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-2 py-2 border-r",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `px-2 py-1 text-xs rounded ${getCurrentStatus(employee_2) === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`,
                                                        style: styles.outfitFont,
                                                        children: getCurrentStatus(employee_2)
                                                    }, void 0, false, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                        lineNumber: 664,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                    lineNumber: 663,
                                                    columnNumber: 15
                                                }, this),
                                                MONTHS.map((month_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-2 py-2 text-center border-r text-gray-700",
                                                        style: styles.outfitFont,
                                                        children: getMonthValue(employee_2, month_0.key)
                                                    }, month_0.key, false, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                        lineNumber: 670,
                                                        columnNumber: 38
                                                    }, this))
                                            ]
                                        }, employee_2.emp_id, true, {
                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                            lineNumber: 645,
                                            columnNumber: 47
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                    lineNumber: 640,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                            lineNumber: 618,
                            columnNumber: 5
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                        lineNumber: 617,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 text-gray-600 text-sm",
                        style: styles.outfitFont,
                        children: [
                            "Showing ",
                            employees.length,
                            " of ",
                            employeesWithCapacity.length,
                            " employees"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                        lineNumber: 683,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                lineNumber: 540,
                columnNumber: 5
            }, this),
            showCreateModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-gray-900 mb-4",
                            style: styles.outfitFont,
                            children: "Create New Resource"
                        }, void 0, false, {
                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                            lineNumber: 701,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleCreate,
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            style: styles.outfitFont,
                                            children: "Name *"
                                        }, void 0, false, {
                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                            lineNumber: 710,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: formData.emp_name,
                                            onChange: (e_4)=>setFormData({
                                                    ...formData,
                                                    emp_name: e_4.target.value
                                                }),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded text-gray-700 text-sm",
                                            style: styles.outfitFont,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                            lineNumber: 713,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                    lineNumber: 709,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            style: styles.outfitFont,
                                            children: "Title *"
                                        }, void 0, false, {
                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                            lineNumber: 721,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: formData.emp_title,
                                            onChange: (e_5)=>setFormData({
                                                    ...formData,
                                                    emp_title: e_5.target.value
                                                }),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded text-gray-700 text-sm",
                                            style: styles.outfitFont,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                            lineNumber: 724,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                    lineNumber: 720,
                                    columnNumber: 9
                                }, this),
                                "-------------",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            style: styles.outfitFont,
                                            children: "Department *"
                                        }, void 0, false, {
                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                            lineNumber: 731,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: formData.dept_no,
                                            onChange: (e_6)=>setFormData({
                                                    ...formData,
                                                    dept_no: e_6.target.value
                                                }),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded text-gray-700 text-sm",
                                            style: styles.outfitFont,
                                            required: true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Select Department"
                                                }, void 0, false, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                    lineNumber: 736,
                                                    columnNumber: 19
                                                }, this),
                                                departments.map((dept_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: dept_0.dept_no,
                                                        children: dept_0.dept_name
                                                    }, dept_0.dept_no, false, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                        lineNumber: 737,
                                                        columnNumber: 46
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                            lineNumber: 732,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                    lineNumber: 730,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            style: styles.outfitFont,
                                            children: "Reports To"
                                        }, void 0, false, {
                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                            lineNumber: 744,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: formData.manager_id,
                                            onChange: (e_7)=>setFormData({
                                                    ...formData,
                                                    manager_id: e_7.target.value
                                                }),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded text-gray-700 text-sm",
                                            style: styles.outfitFont,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Select Manager"
                                                }, void 0, false, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                    lineNumber: 749,
                                                    columnNumber: 19
                                                }, this),
                                                managers.map((manager_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: manager_0.emp_id,
                                                        children: manager_0.emp_name
                                                    }, manager_0.emp_id, false, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                        lineNumber: 750,
                                                        columnNumber: 46
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                            lineNumber: 745,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                    lineNumber: 743,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            style: styles.outfitFont,
                                            children: "Other Information"
                                        }, void 0, false, {
                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                            lineNumber: 757,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: formData.other_info,
                                            onChange: (e_8)=>setFormData({
                                                    ...formData,
                                                    other_info: e_8.target.value
                                                }),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded text-gray-700 text-sm",
                                            style: styles.outfitFont,
                                            placeholder: "e.g., Contract End date = Oct 15, 2025"
                                        }, void 0, false, {
                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                            lineNumber: 758,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                    lineNumber: 756,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                setShowCreateModal(false);
                                                setFormData({
                                                    emp_name: '',
                                                    emp_title: '',
                                                    dept_no: '',
                                                    manager_id: '',
                                                    other_info: ''
                                                });
                                            },
                                            className: "flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 text-sm cursor-pointer",
                                            style: styles.outfitFont,
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                            lineNumber: 765,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "flex-1 px-4 py-2 bg-[#017ACB] text-white rounded hover:bg-blue-700 text-sm cursor-pointer",
                                            style: styles.outfitFont,
                                            children: "Create"
                                        }, void 0, false, {
                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                            lineNumber: 777,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                    lineNumber: 764,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                            lineNumber: 706,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                    lineNumber: 698,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                lineNumber: 697,
                columnNumber: 25
            }, this),
            showEditModal && selectedEmployee && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-gray-900 mb-4",
                            style: styles.outfitFont,
                            children: "Edit Resource"
                        }, void 0, false, {
                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                            lineNumber: 787,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleEdit,
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            style: styles.outfitFont,
                                            children: "Name *"
                                        }, void 0, false, {
                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                            lineNumber: 791,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: formData.emp_name,
                                            onChange: (e_9)=>setFormData({
                                                    ...formData,
                                                    emp_name: e_9.target.value
                                                }),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded text-gray-700 text-sm",
                                            style: styles.outfitFont,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                            lineNumber: 792,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                    lineNumber: 790,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            style: styles.outfitFont,
                                            children: "Title *"
                                        }, void 0, false, {
                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                            lineNumber: 799,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: formData.emp_title,
                                            onChange: (e_10)=>setFormData({
                                                    ...formData,
                                                    emp_title: e_10.target.value
                                                }),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded text-gray-700 text-sm",
                                            style: styles.outfitFont,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                            lineNumber: 800,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                    lineNumber: 798,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            style: styles.outfitFont,
                                            children: "Department *"
                                        }, void 0, false, {
                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                            lineNumber: 807,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: formData.dept_no,
                                            onChange: (e_11)=>setFormData({
                                                    ...formData,
                                                    dept_no: e_11.target.value
                                                }),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded text-gray-700 text-sm",
                                            style: styles.outfitFont,
                                            required: true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Select Department"
                                                }, void 0, false, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                    lineNumber: 812,
                                                    columnNumber: 19
                                                }, this),
                                                departments.map((dept_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: dept_1.dept_no,
                                                        children: dept_1.dept_name
                                                    }, dept_1.dept_no, false, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                        lineNumber: 813,
                                                        columnNumber: 46
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                            lineNumber: 808,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                    lineNumber: 806,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            style: styles.outfitFont,
                                            children: "Reports To"
                                        }, void 0, false, {
                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                            lineNumber: 820,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: formData.manager_id,
                                            onChange: (e_12)=>setFormData({
                                                    ...formData,
                                                    manager_id: e_12.target.value
                                                }),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded text-gray-700 text-sm",
                                            style: styles.outfitFont,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Select Manager"
                                                }, void 0, false, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                    lineNumber: 825,
                                                    columnNumber: 19
                                                }, this),
                                                managers.map((manager_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: manager_1.emp_id,
                                                        children: manager_1.emp_name
                                                    }, manager_1.emp_id, false, {
                                                        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                        lineNumber: 826,
                                                        columnNumber: 46
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                            lineNumber: 821,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                    lineNumber: 819,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            style: styles.outfitFont,
                                            children: "Other Information"
                                        }, void 0, false, {
                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                            lineNumber: 833,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: formData.other_info,
                                            onChange: (e_13)=>setFormData({
                                                    ...formData,
                                                    other_info: e_13.target.value
                                                }),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded text-gray-700 text-sm",
                                            style: styles.outfitFont
                                        }, void 0, false, {
                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                            lineNumber: 834,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                    lineNumber: 832,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            style: styles.outfitFont,
                                            children: "Status"
                                        }, void 0, false, {
                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                            lineNumber: 841,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>handleStatusChange(selectedEmployee.emp_id, 'Active'),
                                                    className: "px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm cursor-pointer",
                                                    style: styles.outfitFont,
                                                    children: "Set Active"
                                                }, void 0, false, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                    lineNumber: 843,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>handleStatusChange(selectedEmployee.emp_id, 'Inactive'),
                                                    className: "px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm cursor-pointer",
                                                    style: styles.outfitFont,
                                                    children: "Set Inactive"
                                                }, void 0, false, {
                                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                                    lineNumber: 846,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                            lineNumber: 842,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                    lineNumber: 840,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                setShowEditModal(false);
                                                setSelectedEmployee(null);
                                                setFormData({
                                                    emp_name: '',
                                                    emp_title: '',
                                                    dept_no: '',
                                                    manager_id: '',
                                                    other_info: ''
                                                });
                                            },
                                            className: "flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 text-sm cursor-pointer",
                                            style: styles.outfitFont,
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                            lineNumber: 853,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "flex-1 px-4 py-2 bg-[#017ACB] text-white rounded hover:bg-blue-700 text-sm cursor-pointer",
                                            style: styles.outfitFont,
                                            children: "Save Changes"
                                        }, void 0, false, {
                                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                            lineNumber: 866,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                                    lineNumber: 852,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                            lineNumber: 789,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                    lineNumber: 786,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
                lineNumber: 785,
                columnNumber: 45
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/resource-and-capacity-management-app/app/Resource-Manager/create_edit_Resources/page.js",
        lineNumber: 499,
        columnNumber: 10
    }, this);
}
_s(ResourcesPage, "oOhJoyGPGwMZcg07IzYuBh1w/cM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$resource$2d$and$2d$capacity$2d$management$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ResourcesPage;
var _c;
__turbopack_context__.k.register(_c, "ResourcesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=8b00b_capacity-management-app_app_Resource-Manager_create_edit_Resources_page_af1fa0d8.js.map