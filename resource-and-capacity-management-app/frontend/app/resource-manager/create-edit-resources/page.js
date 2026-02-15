"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createPortal } from "react-dom";

const styles = {
  outfitFont: { fontFamily: "Outfit, sans-serif" },
};

const MONTHS = [
  { key: 202501, label: "Jan-25" },
  { key: 202502, label: "Feb-25" },
  { key: 202503, label: "Mar-25" },
  { key: 202504, label: "Apr-25" },
  { key: 202505, label: "May-25" },
  { key: 202506, label: "Jun-25" },
  { key: 202507, label: "Jul-25" },
  { key: 202508, label: "Aug-25" },
  { key: 202509, label: "Sep-25" },
  { key: 202510, label: "Oct-25" },
  { key: 202511, label: "Nov-25" },
  { key: 202512, label: "Dec-25" },
  { key: 202601, label: "Jan-26" },
  { key: 202602, label: "Feb-26" },
  { key: 202603, label: "Mar-26" },
  { key: 202604, label: "Apr-26" },
];

const DEPARTMENT_FILTER_NAME = "Data Mgmt";

export default function ResourcesPage() {
  const router = useRouter();
  const apiUrl = "http://localhost:3001";

  const [user, setUser] = useState(null);

  const [employees, setEmployees] = useState([]);
  const [employeesWithCapacity, setEmployeesWithCapacity] = useState([]);
  const [allEmployeesWithCapacity, setAllEmployeesWithCapacity] = useState([]);

  const [departments, setDepartments] = useState([]);
  const [managers, setManagers] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [activeFilter, setActiveFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedNames, setSelectedNames] = useState([]);
  const [selectedTitles, setSelectedTitles] = useState([]);
  const [selectedReportsTo, setSelectedReportsTo] = useState([]);
  const [selectedCurrentStatuses, setSelectedCurrentStatuses] = useState([]);

  const [nameSort, setNameSort] = useState("none");

  const [showNameMenu, setShowNameMenu] = useState(false);
  const [showTitleMenu, setShowTitleMenu] = useState(false);
  const [showReportsToMenu, setShowReportsToMenu] = useState(false);
  const [showCurrentStatusMenu, setShowCurrentStatusMenu] = useState(false);

  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  const [availableNames, setAvailableNames] = useState([]);
  const [availableTitles, setAvailableTitles] = useState([]);
  const [availableReportsTo, setAvailableReportsTo] = useState([]);
  const [availableCurrentStatuses, setAvailableCurrentStatuses] = useState([]);

  const [portalReady, setPortalReady] = useState(false);

  const [editingCell, setEditingCell] = useState(null);
  const [editingValue, setEditingValue] = useState("");

  // Load user from localStorage (for Mine filter)
  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  // Enable portal
  useEffect(() => {
    setPortalReady(true);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = () => {
      setShowNameMenu(false);
      setShowTitleMenu(false);
      setShowReportsToMenu(false);
      setShowCurrentStatusMenu(false);
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  // Fetch all data
  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      setLoading(true);

const empRes = await fetch(`${apiUrl}/api/resources/employees`);
const empData = await empRes.json();

const deptRes = await fetch(`${apiUrl}/api/resources/departments`);
const deptData = await deptRes.json();
setDepartments(deptData);

const mgrRes = await fetch(`${apiUrl}/api/resources/managers`);
const mgrData = await mgrRes.json();
setManagers(mgrData);

      const employeesWithCap = await Promise.all(
        empData.map(async (emp) => {
          try {
            const capRes = await fetch(
              `${apiUrl}/api/resources/employees/${emp.emp_id}/capacity`
            );
            if (capRes.ok) {
              const capData = await capRes.json();
              const capacityByMonth = {};
              capData.forEach((c) => {
                capacityByMonth[c.date] = {
                  amount: c.amount,
                  status: c.current_status,
                  comments: c.comments,
                };
              });
              return { ...emp, capacity: capacityByMonth };
            }
          } catch {
            // ignore
          }
          return { ...emp, capacity: {} };
        })
      );

      const dataMgmt = employeesWithCap.filter((emp) => {
        const dept = deptData.find((d) => d.dept_no === emp.dept_no);
        return (
          dept &&
          dept.dept_name.toLowerCase() === DEPARTMENT_FILTER_NAME.toLowerCase()
        );
      });

      setAllEmployeesWithCapacity(employeesWithCap);
      setEmployeesWithCapacity(dataMgmt);
      setEmployees(dataMgmt);

      setAvailableNames([...new Set(dataMgmt.map((e) => e.emp_name).filter(Boolean))]);
      setAvailableTitles([...new Set(dataMgmt.map((e) => e.emp_title).filter(Boolean))]);

      const getReportsToNameFromList = (id) => {
        if (!id && id !== 0) return null;
        const match = employeesWithCap.find((e) => String(e.emp_id) === String(id));
        return match ? match.emp_name : null;
      };

      setAvailableReportsTo([
        ...new Set(
          dataMgmt
            .map((e) => getReportsToNameFromList(e.reports_to))
            .filter(Boolean)
        ),
      ]);

      const getCurrentStatusLocal = (emp) => {
        const now = new Date();
        const key = now.getFullYear() * 100 + (now.getMonth() + 1);
        return emp.capacity[key]?.status || "Active";
      };

      setAvailableCurrentStatuses([
        ...new Set(dataMgmt.map((e) => getCurrentStatusLocal(e)).filter(Boolean)),
      ]);

      setError("");
    } catch (err) {
      setError("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  // Apply filters
  useEffect(() => {
    applyFilters();
  }, [
    employeesWithCapacity,
    activeFilter,
    statusFilter,
    searchTerm,
    user,
    nameSort,
    selectedNames,
    selectedTitles,
    selectedReportsTo,
    selectedCurrentStatuses,
    departments,
  ]);

  const applyFilters = () => {
    let filtered = [...employeesWithCapacity];

    if (activeFilter === "mine" && user) {
      filtered = filtered.filter(
        (emp) => String(emp.emp_id) === String(user.emp_id)
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((emp) => {
        const now = new Date();
        const key = now.getFullYear() * 100 + (now.getMonth() + 1);
        const cap = emp.capacity[key];
        return statusFilter === "active"
          ? !cap || cap.status === "Active"
          : cap && cap.status === "Inactive";
      });
    }

    if (searchTerm) {
      const t = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (e) =>
          e.emp_name.toLowerCase().includes(t) ||
          e.emp_title.toLowerCase().includes(t)
      );
    }

    const deptName = (no) =>
      departments.find((d) => d.dept_no === no)?.dept_name || "";

    filtered = filtered.filter(
      (e) => deptName(e.dept_no).toLowerCase() === "data mgmt"
    );

    if (selectedNames.length > 0) {
      filtered = filtered.filter((e) => selectedNames.includes(e.emp_name));
    }

    if (selectedTitles.length > 0) {
      filtered = filtered.filter((e) => selectedTitles.includes(e.emp_title));
    }

    const getReportsToName = (emp) => {
      const match = allEmployeesWithCapacity.find(
        (e) => String(e.emp_id) === String(emp.reports_to)
      );
      return match ? match.emp_name : "-";
    };

    if (selectedReportsTo.length > 0) {
      filtered = filtered.filter((e) =>
        selectedReportsTo.includes(getReportsToName(e))
      );
    }

    const getCurrentStatus = (emp) => {
      const now = new Date();
      const key = now.getFullYear() * 100 + (now.getMonth() + 1);
      return emp.capacity[key]?.status || "Active";
    };

    if (selectedCurrentStatuses.length > 0) {
      filtered = filtered.filter((e) =>
        selectedCurrentStatuses.includes(getCurrentStatus(e))
      );
    }

    if (nameSort === "az") {
      filtered.sort((a, b) => a.emp_name.localeCompare(b.emp_name));
    } else if (nameSort === "za") {
      filtered.sort((a, b) => b.emp_name.localeCompare(a.emp_name));
    }

    setEmployees(filtered);
  };

  const toggleSelection = (value, setFn, current) => {
    setFn(
      current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value]
    );
  };

  const getDepartmentName = (deptNo) =>
    departments.find((d) => d.dept_no === deptNo)?.dept_name || deptNo;

  const getReportsToName = (emp) => {
    const match = allEmployeesWithCapacity.find(
      (e) => String(e.emp_id) === String(emp.reports_to)
    );
    return match ? match.emp_name : "-";
  };

  const getLevelName = (id) => {
    if (!id && id !== 0) return "";
    const match = managers.find((m) => String(m.emp_id) === String(id));
    return match ? match.emp_name : id;
  };

  const getCurrentStatus = (emp) => {
    const now = new Date();
    const key = now.getFullYear() * 100 + (now.getMonth() + 1);
    return emp.capacity[key]?.status || "Active";
  };

  const getMonthValue = (emp, key) =>
    emp.capacity && emp.capacity[key] ? emp.capacity[key].amount : 1;

  const startEditMonth = (emp, key) => {
    setEditingCell({ empId: emp.emp_id, monthKey: key });
    setEditingValue(String(getMonthValue(emp, key)));
  };

  const cancelEditMonth = () => {
    setEditingCell(null);
    setEditingValue("");
  };

  const saveMonthValue = async (emp, key) => {
    const raw = editingValue.trim();
    const parsed = Number(raw);

    if (raw === "" || Number.isNaN(parsed) || parsed < 0 || parsed > 1) {
      setError("Capacity must be a number between 0 and 1");
      return;
    }

    const existing = emp.capacity?.[key] || {};
    const updates = [
      {
        date: key,
        amount: parsed,
        comments: existing.comments || "",
      },
    ];

    try {
      const res = await fetch(
        `${apiUrl}/api/resources/employees/${emp.emp_id}/capacity`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ updates }),
        }
      );

      if (!res.ok) {
        throw new Error("Unable to update capacity");
      }

      setEmployeesWithCapacity((prev) =>
        prev.map((e) =>
          e.emp_id === emp.emp_id
            ? {
                ...e,
                capacity: {
                  ...(e.capacity || {}),
                  [key]: {
                    ...(e.capacity?.[key] || {}),
                    amount: parsed,
                  },
                },
              }
            : e
        )
      );

      setError("");
      cancelEditMonth();
    } catch (err) {
      setError(err.message || "Unable to update capacity");
    }
  };

  const renderDropdownPortal = (menu) => {
    if (!portalReady) return null;

    return createPortal(
      <>
        <div
          className="fixed inset-0 z-[9998]"
          onClick={() => {
            setShowNameMenu(false);
            setShowTitleMenu(false);
            setShowReportsToMenu(false);
            setShowCurrentStatusMenu(false);
          }}
        />
        <div
          className="fixed z-[9999]"
          style={{ top: menuPosition.y, left: menuPosition.x }}
          onClick={(e) => e.stopPropagation()}
        >
          {menu}
        </div>
      </>,
      document.body
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
<div className="max-w-full mx-auto">

  {/* Title + Create + Back */}
  <div className="flex items-center justify-between mb-6">

    <div className="flex items-center gap-4">
      <h2
        className="text-2xl font-bold text-gray-900"
        style={styles.outfitFont}
      >
      Resources 
      </h2>

      <button
        onClick={() => router.push("/resource-manager/dashboard")}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition text-sm cursor-pointer"
        style={styles.outfitFont}
      >
        ← Back to Dashboard
      </button>
    </div>

    <Link
      href="/resource-manager/create-edit-resources/create-resource"
      className="px-4 py-2 bg-[#017ACB] text-white rounded hover:bg-blue-700 transition text-sm cursor-pointer"
      style={styles.outfitFont}
    >
      + Create Resource
    </Link>

  </div>

  {/* Error */}
  {error && (
    <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
      {error}
      <button
        onClick={() => setError("")}
        className="ml-4 text-red-900 font-bold"
      >
        ×
      </button>
    </div>
  )}

        {/* Filters */}
        <div className="mb-4 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-4 items-center">
            <div>
              <button
                onClick={() => setActiveFilter("all")}
                className={`p-2 w-16 border border-gray-300 text-center cursor-pointer text-sm ${
                  activeFilter === "all"
                    ? "bg-[#017ACB] text-white"
                    : "text-gray-600 bg-white"
                }`}
                style={styles.outfitFont}
              >
                All
              </button>

              <button
                onClick={() => setActiveFilter("mine")}
                className={`p-2 w-16 border border-gray-300 text-center cursor-pointer text-sm ${
                  activeFilter === "mine"
                    ? "bg-[#017ACB] text-white"
                    : "text-gray-600 bg-white"
                }`}
                style={styles.outfitFont}
              >
                Mine
              </button>
            </div>

            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded text-gray-700 text-sm w-48"
              style={styles.outfitFont}
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto overflow-y-auto max-h-[calc(100vh-280px)]">
            <table className="w-full text-sm">
              <thead className="bg-[#017ACB] text-white sticky top-0 z-10">
                <tr>
                  <th className="px-2 py-2 w-16 text-center font-semibold border-b border-black border-r border-white">
                    Edit
                  </th>

                  {/* Name Filter Column */}
                  <th className="px-2 py-2 text-left font-semibold border-b border-black border-r border-white min-w-[150px] relative">
                    <div className="flex justify-between items-center">
                      <span>Name</span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const rect = e.currentTarget.getBoundingClientRect();
                          setMenuPosition({ x: rect.left, y: rect.bottom });
                          setShowNameMenu((prev) => !prev);
                          setShowTitleMenu(false);
                          setShowReportsToMenu(false);
                          setShowCurrentStatusMenu(false);
                        }}
                        className="ml-2 bg-white text-[#017ACB] px-2 py-1 rounded text-xs font-bold hover:bg-gray-100 transition"
                      >
                        ▼
                      </button>
                    </div>

                    {showNameMenu &&
                      renderDropdownPortal(
                        <div className="bg-white text-black shadow-lg rounded w-56 max-h-64 overflow-y-auto border border-gray-200">
                          <div
                            className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${
                              selectedNames.length === 0 ||
                              selectedNames.length === availableNames.length
                                ? "bg-gray-100 font-semibold"
                                : ""
                            }`}
                            onClick={() => setSelectedNames([])}
                          >
                            <input
                              type="checkbox"
                              checked={
                                selectedNames.length === 0 ||
                                selectedNames.length === availableNames.length
                              }
                              readOnly
                            />
                            All
                          </div>

                          <div
                            className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 ${
                              nameSort === "az" ? "bg-gray-100 font-semibold" : ""
                            }`}
                            onClick={() => {
                              setNameSort("az");
                              setShowNameMenu(false);
                            }}
                          >
                            A → Z
                          </div>

                          <div
                            className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 ${
                              nameSort === "za" ? "bg-gray-100 font-semibold" : ""
                            }`}
                            onClick={() => {
                              setNameSort("za");
                              setShowNameMenu(false);
                            }}
                          >
                            Z → A
                          </div>

                          {availableNames.map((name) => (
                            <div
                              key={name}
                              className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${
                                selectedNames.includes(name)
                                  ? "bg-gray-100 font-semibold"
                                  : ""
                              }`}
                              onClick={() =>
                                toggleSelection(
                                  name,
                                  setSelectedNames,
                                  selectedNames
                                )
                              }
                            >
                              <input
                                type="checkbox"
                                checked={selectedNames.includes(name)}
                                readOnly
                              />
                              {name}
                            </div>
                          ))}
                        </div>
                      )}
                  </th>

                  {/* Title Filter Column */}
                  <th className="px-2 py-2 text-left font-semibold border-b border-black border-r border-white min-w-[150px] relative">
                    <div className="flex justify-between items-center">
                      <span>Title</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const rect = e.currentTarget.getBoundingClientRect();
                          setMenuPosition({ x: rect.left, y: rect.bottom });
                          setShowTitleMenu((prev) => !prev);
                          setShowNameMenu(false);
                          setShowReportsToMenu(false);
                          setShowCurrentStatusMenu(false);
                        }}
                        className="ml-2 bg-white text-[#017ACB] px-2 py-1 rounded text-xs font-bold hover:bg-gray-100 transition"
                      >
                        ▼
                      </button>
                    </div>

                    {showTitleMenu &&
                      renderDropdownPortal(
                        <div className="bg-white text-black shadow-lg rounded w-56 max-h-64 overflow-y-auto border border-gray-200">
                          <div
                            className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${
                              selectedTitles.length === 0 ||
                              selectedTitles.length === availableTitles.length
                                ? "bg-gray-100 font-semibold"
                                : ""
                            }`}
                            onClick={() => setSelectedTitles([])}
                          >
                            <input
                              type="checkbox"
                              checked={
                                selectedTitles.length === 0 ||
                                selectedTitles.length === availableTitles.length
                              }
                              readOnly
                            />
                            All
                          </div>

                          {availableTitles.map((title) => (
                            <div
                              key={title}
                              className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${
                                selectedTitles.includes(title)
                                  ? "bg-gray-100 font-semibold"
                                  : ""
                              }`}
                              onClick={() =>
                                toggleSelection(
                                  title,
                                  setSelectedTitles,
                                  selectedTitles
                                )
                              }
                            >
                              <input
                                type="checkbox"
                                checked={selectedTitles.includes(title)}
                                readOnly
                              />
                              {title}
                            </div>
                          ))}
                        </div>
                      )}
                  </th>

                  <th className="px-2 py-2 text-left font-semibold border-b border-black border-r border-white min-w-[100px]">
                    Department
                  </th>

                  {/* Reports To Filter Column */}
                  <th className="px-2 py-2 text-left font-semibold border-b border-black border-r border-white min-w-[130px] relative">
                    <div className="flex justify-between items-center">
                      <span>Reports To</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const rect = e.currentTarget.getBoundingClientRect();
                          setMenuPosition({ x: rect.left, y: rect.bottom });
                          setShowReportsToMenu((prev) => !prev);
                          setShowTitleMenu(false);
                          setShowNameMenu(false);
                          setShowCurrentStatusMenu(false);
                        }}
                        className="ml-2 bg-white text-[#017ACB] px-2 py-1 rounded text-xs font-bold hover:bg-gray-100 transition"
                      >
                        ▼
                      </button>
                    </div>

                    {showReportsToMenu &&
                      renderDropdownPortal(
                        <div className="bg-white text-black shadow-lg rounded w-56 max-h-64 overflow-y-auto border border-gray-200">
                          <div
                            className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${
                              selectedReportsTo.length === 0 ||
                              selectedReportsTo.length === availableReportsTo.length
                                ? "bg-gray-100 font-semibold"
                                : ""
                            }`}
                            onClick={() => setSelectedReportsTo([])}
                          >
                            <input
                              type="checkbox"
                              checked={
                                selectedReportsTo.length === 0 ||
                                selectedReportsTo.length === availableReportsTo.length
                              }
                              readOnly
                            />
                            All
                          </div>

                          {availableReportsTo.map((manager) => (
                            <div
                              key={manager}
                              className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${
                                selectedReportsTo.includes(manager)
                                  ? "bg-gray-100 font-semibold"
                                  : ""
                              }`}
                              onClick={() =>
                                toggleSelection(
                                  manager,
                                  setSelectedReportsTo,
                                  selectedReportsTo
                                )
                              }
                            >
                              <input
                                type="checkbox"
                                checked={selectedReportsTo.includes(manager)}
                                readOnly
                              />
                              {manager}
                            </div>
                          ))}
                        </div>
                      )}
                  </th>

                  <th className="px-2 py-2 text-left font-semibold border-b border-black border-r border-white min-w-[130px]">
                    Manager Level
                  </th>
                  <th className="px-2 py-2 text-left font-semibold border-b border-black border-r border-white min-w-[130px]">
                    Director Level
                  </th>
                  <th className="px-2 py-2 text-left font-semibold border-b border-black border-r border-white min-w-[150px]">
                    Other Information
                  </th>

                  {/* Current Status Filter Column */}
                  <th className="px-2 py-2 text-left font-semibold border-b border-black border-r border-white min-w-[120px] relative">
                    <div className="flex justify-between items-center">
                      <span>Current Status</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const rect = e.currentTarget.getBoundingClientRect();
                          setMenuPosition({ x: rect.left, y: rect.bottom });
                          setShowCurrentStatusMenu((prev) => !prev);
                          setShowTitleMenu(false);
                          setShowNameMenu(false);
                          setShowReportsToMenu(false);
                        }}
                        className="ml-2 bg-white text-[#017ACB] px-2 py-1 rounded text-xs font-bold hover:bg-gray-100 transition"
                      >
                        ▼
                      </button>
                    </div>

                    {showCurrentStatusMenu &&
                      renderDropdownPortal(
                        <div className="bg-white text-black shadow-lg rounded w-56 max-h-64 overflow-y-auto border border-gray-200">
                          <div
                            className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${
                              selectedCurrentStatuses.length === 0 ||
                              selectedCurrentStatuses.length ===
                                availableCurrentStatuses.length
                                ? "bg-gray-100 font-semibold"
                                : ""
                            }`}
                            onClick={() => setSelectedCurrentStatuses([])}
                          >
                            <input
                              type="checkbox"
                              checked={
                                selectedCurrentStatuses.length === 0 ||
                                selectedCurrentStatuses.length ===
                                  availableCurrentStatuses.length
                              }
                              readOnly
                            />
                            All
                          </div>

                          {availableCurrentStatuses.map((status) => (
                            <div
                              key={status}
                              className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${
                                selectedCurrentStatuses.includes(status)
                                  ? "bg-gray-100 font-semibold"
                                  : ""
                              }`}
                              onClick={() =>
                                toggleSelection(
                                  status,
                                  setSelectedCurrentStatuses,
                                  selectedCurrentStatuses
                                )
                              }
                            >
                              <input
                                type="checkbox"
                                checked={selectedCurrentStatuses.includes(status)}
                                readOnly
                              />
                              {status}
                            </div>
                          ))}
                        </div>
                      )}
                  </th>

                  {MONTHS.map((month) => (
                    <th
                      key={month.key}
                      className="px-2 py-2 text-center font-semibold text-white border-b border-black border-r border-white min-w-[60px]"
                    >
                      {month.label}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {employees.length === 0 ? (
                  <tr>
                    <td
                      colSpan={9 + MONTHS.length}
                      className="px-4 py-8 text-center text-black"
                      style={styles.outfitFont}
                    >
                      No employees found
                    </td>
                  </tr>
                ) : (
                  employees.map((employee) => (
                    <tr
                      key={employee.emp_id}
                      className="hover:bg-gray-50 border-b border-black"
                    >
                      <td className="px-2 py-2 w-16 border-r border-black bg-white">
                        <Link
                          href={`/resource-manager/create-edit-resources/edit-resource?id=${employee.emp_id}`}
                          className="px-2 py-1 bg-[#017ACB] text-white text-xs rounded hover:bg-blue-700 cursor-pointer inline-block"
                          style={styles.outfitFont}
                        >
                          Edit
                        </Link>
                      </td>

                      <td
                        className="px-2 py-2 text-black border-r border-black bg-white"
                        style={styles.outfitFont}
                      >
                        {employee.emp_name}
                      </td>
                      <td
                        className="px-2 py-2 text-black border-r border-black"
                        style={styles.outfitFont}
                      >
                        {employee.emp_title}
                      </td>
                      <td
                        className="px-2 py-2 text-black border-r border-black"
                        style={styles.outfitFont}
                      >
                        {getDepartmentName(employee.dept_no)}
                      </td>
                      <td
                        className="px-2 py-2 text-black border-r border-black"
                        style={styles.outfitFont}
                      >
                        {getReportsToName(employee)}
                      </td>
                      <td
                        className="px-2 py-2 text-black border-r border-black"
                        style={styles.outfitFont}
                      >
                        {getLevelName(employee.manager_level)}
                      </td>
                      <td
                        className="px-2 py-2 text-black border-r border-black"
                        style={styles.outfitFont}
                      >
                        {getLevelName(employee.director_level)}
                      </td>
                      <td
                        className="px-2 py-2 text-black border-r border-black"
                        style={styles.outfitFont}
                      >
                        {employee.other_info || ""}
                      </td>

                      <td className="px-2 py-2 border-r border-black">
                        <span
                          className={`px-2 py-1 text-xs rounded ${
                            getCurrentStatus(employee) === "Active"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                          style={styles.outfitFont}
                        >
                          {getCurrentStatus(employee)}
                        </span>
                      </td>

                      {MONTHS.map((month) => (
                        <td
                          key={month.key}
                          className="px-2 py-2 text-center border-r border-black text-black"
                          style={styles.outfitFont}
                        >
                          {editingCell?.empId === employee.emp_id &&
                          editingCell?.monthKey === month.key ? (
                            <input
                              type="number"
                              min="0"
                              max="1"
                              step="0.25"
                              value={editingValue}
                              onChange={(e) => setEditingValue(e.target.value)}
                              onBlur={() => saveMonthValue(employee, month.key)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  e.preventDefault();
                                  saveMonthValue(employee, month.key);
                                }

                                if (e.key === "Escape") {
                                  e.preventDefault();
                                  cancelEditMonth();
                                }
                              }}
                              autoFocus
                              className="w-16 px-1 py-0.5 border border-gray-300 rounded text-center text-sm"
                            />
                          ) : (
                            <button
                              type="button"
                              onClick={() =>
                                startEditMonth(employee, month.key)
                              }
                              className="w-full text-center hover:bg-gray-100 rounded px-1 py-0.5"
                            >
                              {getMonthValue(employee, month.key)}
                            </button>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div
          className="mt-4 text-gray-600 text-sm"
          style={styles.outfitFont}
        >
          Showing {employees.length} of {employeesWithCapacity.length} employees
        </div>
      </div>
    </div>
  );
}