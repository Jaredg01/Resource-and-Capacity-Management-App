'use client';

import { useState, useEffect, useMemo, useRef } from "react";
import { useRouter, useSearchParams } from 'next/navigation';

const styles = {
  outfitFont: { fontFamily: 'Outfit, sans-serif' }
};

export default function AssignmentsAllocationsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const refresh = searchParams.get("refresh");

  const apiUrl = "http://localhost:3001";

  const [user, setUser] = useState(null);
  const startMonthMenuRef = useRef(null);

  const [allRows, setAllRows] = useState([]);
  const [mine, setMine] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const [months, setMonths] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const [loading, setLoading] = useState(true);

  // Multi-select filter states
  const [selectedResources, setSelectedResources] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLeaders, setSelectedLeaders] = useState([]);
  const [selectedRequestors, setSelectedRequestors] = useState([]);
  const [selectedRequestorVPs, setSelectedRequestorVPs] = useState([]);
  const [selectedRequestingDepts, setSelectedRequestingDepts] = useState([]);

  // Sorting state (Resource Name)
  const [resourceSort, setResourceSort] = useState('');
  const [showResourceSortMenu, setShowResourceSortMenu] = useState(false);

  // Dropdown visibility toggles
  const [showResourceMenu, setShowResourceMenu] = useState(false);
  const [showActivityMenu, setShowActivityMenu] = useState(false);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [showLeaderMenu, setShowLeaderMenu] = useState(false);
  const [showRequestorMenu, setShowRequestorMenu] = useState(false);
  const [showRequestorVPMenu, setShowRequestorVPMenu] = useState(false);
  const [showRequestingDeptMenu, setShowRequestingDeptMenu] = useState(false);

  // Reports To filter
  const [selectedManagers, setSelectedManagers] = useState([]);
  const [availableManagers, setAvailableManagers] = useState([]);
  const [showManagerMenu, setShowManagerMenu] = useState(false);

  // Dropdown absolute positioning
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  // Unique dropdown option lists (driven by visible-window rows)
  const [availableResources, setAvailableResources] = useState([]);
  const [availableActivities, setAvailableActivities] = useState([]);
  const [availableCategories, setAvailableCategories] = useState([]);
  const [availableLeaders, setAvailableLeaders] = useState([]);
  const [availableRequestors, setAvailableRequestors] = useState([]);
  const [availableRequestorVPs, setAvailableRequestorVPs] = useState([]);
  const [availableRequestingDepts, setAvailableRequestingDepts] = useState([]);

  // Start Month Selector
  const [startMonth, setStartMonth] = useState(null);
  const [showStartMonthMenu, setShowStartMonthMenu] = useState(false);

  const handleAddallocation = () => {
    router.push('/resource-manager/assign-edit-allocation/add-allocation');
  };

  const handleEditAllocation = (row) => {
   router.push(
  `/resource-manager/assign-edit-allocation/edit-allocation?emp_id=${row.employee.emp_id}`
);
  };

  // Load user (NO redirect, NO header logic)
  useEffect(() => {
    const userData =
      typeof window !== "undefined" ? localStorage.getItem("user") : null;

    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  // Load ALL + MY assignments (NEW REST ROUTE)
  useEffect(() => {
    if (!user?.username) return;

    const loadAll = async () => {
      try {
        setLoading(true);

const res = await fetch(
  `${apiUrl}/api/assignments-allocations?username=${encodeURIComponent(
    user.username
  )}&ts=${Date.now()}`,
          {
            cache: "no-store",
            headers: {
              "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
              Pragma: "no-cache",
              Expires: "0",
            },
          }
        );

        const data = await res.json();
        const allAssignments = data.allAssignments || [];
        const myAssignments = data.myAssignments || [];
        const monthsFromApi = data.months || [];

        setAllRows(allAssignments);
        setMine(myAssignments);
        setMonths(monthsFromApi);
        setFilteredRows(allAssignments);
      } catch (err) {
        console.error("Assignments fetch error:", err);
        setAllRows([]);
        setMine([]);
        setFilteredRows([]);
        setMonths([]);
      } finally {
        setLoading(false);
      }
    };

    loadAll();
  }, [user, refresh]);

  // Default startMonth to current month or fallback
  useEffect(() => {
    if (!months.length) return;
    if (startMonth) return;

    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const current = `${y}${m}`;

    if (months.includes(current)) {
      setStartMonth(current);
    } else {
      setStartMonth(months[0]);
    }
  }, [months, startMonth]);

  // Compute 12-month forward window
  const visibleMonths = useMemo(() => {
    if (!months.length) return [];
    const start =
      startMonth && months.includes(startMonth) ? startMonth : months[0];
    const idx = months.indexOf(start);
    return months.slice(idx, idx + 12);
  }, [months, startMonth]);

  // Build month labels from visible months
  const monthLabels = useMemo(() => {
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    return visibleMonths.map((m) => {
      const year = m.substring(0, 4);
      const month = m.substring(4, 6);
      return {
        key: m,
        label: `${monthNames[parseInt(month, 10) - 1]} ${year}`,
      };
    });
  }, [visibleMonths]);

  // Rows that actually have allocations in the visible window
  const rowsWithVisibleAllocations = useMemo(() => {
    return allRows.filter((row) =>
      visibleMonths.some((m) => {
        const val = row.allocations?.[m];
        return typeof val === "number" && val > 0;
      })
    );
  }, [allRows, visibleMonths]);

  // Build dropdown option lists based on visible-window rows
  useEffect(() => {
    const uniq = (arr) => [...new Set(arr)].filter(Boolean);

    setAvailableResources(
      uniq(rowsWithVisibleAllocations.map((r) => r.employee?.emp_name || ""))
    );

    setAvailableActivities(
      uniq(rowsWithVisibleAllocations.map((r) => r.assignment?.project_name || ""))
    );

    setAvailableCategories(
      uniq(rowsWithVisibleAllocations.map((r) => r.assignment?.category || ""))
    );

    setAvailableLeaders(
      uniq(rowsWithVisibleAllocations.map((r) => r.assignment?.leader || ""))
    );

    setAvailableRequestors(
      uniq(rowsWithVisibleAllocations.map((r) => r.assignment?.requestor || ""))
    );

    setAvailableRequestorVPs(
      uniq(rowsWithVisibleAllocations.map((r) => r.assignment?.requestor_vp || ""))
    );

    setAvailableRequestingDepts(
      uniq(
        rowsWithVisibleAllocations.map(
          (r) =>
            r.assignment?.requesting_dept_name ||
            r.assignment?.requesting_dept ||
            ""
        )
      )
    );

    setAvailableManagers(
      uniq(rowsWithVisibleAllocations.map((r) => r.employee?.manager_name || ""))
    );
  }, [rowsWithVisibleAllocations]);

  // Toggle helper
  const toggleSelection = (value, setFn, current) => {
    setFn(
      current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value]
    );
  };

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = () => {
      setShowResourceSortMenu(false);
      setShowResourceMenu(false);
      setShowActivityMenu(false);
      setShowCategoryMenu(false);
      setShowLeaderMenu(false);
      setShowRequestorMenu(false);
      setShowRequestorVPMenu(false);
      setShowRequestingDeptMenu(false);
      setShowManagerMenu(false);
      setShowStartMonthMenu(false);
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  // Filtering + sorting logic
  useEffect(() => {
    if (!user) return;

    let base = activeTab === "mine" ? mine : allRows;

    let filtered = base.filter((row) => {
      const empName = row.employee?.emp_name || "";
      const activity = row.assignment?.project_name || "";
      const category = row.assignment?.category || "";
      const leader = row.assignment?.leader || "";
      const requestor = row.assignment?.requestor || "";
      const requestorVP = row.assignment?.requestor_vp || "";
      const requestingDept =
        row.assignment?.requesting_dept_name ||
        row.assignment?.requesting_dept ||
        "";

      const managerName = row.employee?.manager_name || "";

      const passesFilters =
        (selectedResources.length
          ? selectedResources.includes(empName)
          : true) &&
        (selectedActivities.length
          ? selectedActivities.includes(activity)
          : true) &&
        (selectedCategories.length
          ? selectedCategories.includes(category)
          : true) &&
        (selectedLeaders.length ? selectedLeaders.includes(leader) : true) &&
        (selectedRequestors.length
          ? selectedRequestors.includes(requestor)
          : true) &&
        (selectedRequestorVPs.length
          ? selectedRequestorVPs.includes(requestorVP)
          : true) &&
        (selectedRequestingDepts.length
          ? selectedRequestingDepts.includes(requestingDept)
          : true) &&
        (selectedManagers.length
          ? selectedManagers.includes(managerName)
          : true);

      if (!passesFilters) return false;

      const hasVisibleAllocation = visibleMonths.some((m) => {
        const val = row.allocations?.[m];
        return typeof val === "number" && val > 0;
      });

      return hasVisibleAllocation;
    });

    if (resourceSort === "az") {
      filtered.sort((a, b) =>
        (a.employee?.emp_name || "").localeCompare(b.employee?.emp_name || "")
      );
    } else if (resourceSort === "za") {
      filtered.sort((a, b) =>
        (b.employee?.emp_name || "").localeCompare(a.employee?.emp_name || "")
      );
    }

    setFilteredRows(filtered);
  }, [
    user,
    activeTab,
    mine,
    allRows,
    visibleMonths,
    selectedResources,
    selectedActivities,
    selectedCategories,
    selectedLeaders,
    selectedRequestors,
    selectedRequestorVPs,
    selectedRequestingDepts,
    selectedManagers,
    resourceSort,
  ]);

    // Sorting
    if (resourceSort === 'asc') {
      filtered = [...filtered].sort((a, b) =>
        (a.employee?.emp_name || '').localeCompare(b.employee?.emp_name || '')
      );
    } else if (resourceSort === 'desc') {
      filtered = [...filtered].sort((a, b) =>
        (b.employee?.emp_name || '').localeCompare(a.employee?.emp_name || '')
      );
    }

  const handleAllAssignments = () => {
    setActiveTab('all');
  };

  const handleMyAssignments = () => {
    setActiveTab('mine');
  };

  if (!user || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

return (
  <div className="min-h-screen bg-gray-50">
    <main className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">

      {/* Title + Back + Add */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4 mb-4">
          <h2
            className="text-4xl font-bold text-gray-900"
            style={styles.outfitFont}
          >
            Assignments & Allocations
          </h2>

          <button
            onClick={() => router.push('/resource-manager/dashboard')}
            className="px-4 py-2 rounded text-sm bg-white text-gray-700 border hover:bg-gray-100 transition"
            style={styles.outfitFont}
          >
            ← Back to Dashboard
          </button>
        </div>

        <div className="flex gap-4 items-center">
          <button
            onClick={handleAllAssignments}
            className={`px-4 py-2 rounded text-sm ${
              activeTab === 'all'
                ? 'bg-[#017ACB] text-white'
                : 'bg-white text-gray-700 border'
            }`}
            style={styles.outfitFont}
          >
            All Assignments
          </button>

          <button
            onClick={handleMyAssignments}
            className={`px-4 py-2 rounded text-sm ${
              activeTab === 'mine'
                ? 'bg-[#017ACB] text-white'
                : 'bg-white text-gray-700 border'
            }`}
            style={styles.outfitFont}
          >
            My Assignments
          </button>

          <button
            onClick={() =>
              router.push('/resource-manager/assign-edit-allocation/add-allocation')
            }
            className="px-4 py-2 rounded text-sm bg-[#017ACB] text-white hover:bg-blue-700 transition"
            style={styles.outfitFont}
          >
            + Add Allocation
          </button>
        </div>
      </div>

      {/* Table Wrapper */}
      <div className="border rounded-lg shadow-sm bg-white overflow-hidden">
        <div className="overflow-x-auto overflow-y-auto max-h-[70vh]">
          <table className="min-w-max w-full border-collapse">
            <thead className="bg-[#017ACB] text-white sticky top-0 z-10">
              <tr>
                <th
                  className="sticky left-0 bg-[#017ACB] px-4 py-2 border text-sm font-semibold"
                  style={styles.outfitFont}
                >
                  Edit
                </th>

                {/* RESOURCE NAME + SORT + FILTER */}
                <th
                  className="px-4 py-2 border text-sm font-semibold relative whitespace-nowrap"
                  style={styles.outfitFont}
                >
                  <div className="flex justify-between items-center">
                    <span>Resource Name</span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const rect = e.target.getBoundingClientRect();
                        setMenuPosition({ x: rect.left, y: rect.bottom });

                        setShowResourceMenu(prev => !prev);

                        setShowActivityMenu(false);
                        setShowCategoryMenu(false);
                        setShowLeaderMenu(false);
                        setShowRequestorMenu(false);
                        setShowRequestorVPMenu(false);
                        setShowRequestingDeptMenu(false);
                        setShowManagerMenu(false);
                        setShowStartMonthMenu(false);
                      }}
                      className="bg-white text-[#017ACB] px-2 py-1 rounded text-xs font-bold hover:bg-gray-100 transition"
                    >
                      ▼
                    </button>
                  </div>

                  {showResourceMenu && (
                    <div
                      className="fixed bg-white text-black shadow-lg rounded w-48 z-50"
                      style={{ top: menuPosition.y, left: menuPosition.x }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div
                        className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${
                          resourceSort === 'asc' ? 'bg-gray-100 font-semibold' : ''
                        }`}
                        onClick={() => {
                          setResourceSort(resourceSort === 'asc' ? '' : 'asc');
                        }}
                      >
                        <input type="checkbox" checked={resourceSort === 'asc'} readOnly />
                        A → Z
                      </div>

                      <div
                        className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${
                          resourceSort === 'desc' ? 'bg-gray-100 font-semibold' : ''
                        }`}
                        onClick={() => {
                          setResourceSort(resourceSort === 'desc' ? '' : 'desc');
                        }}
                      >
                        <input type="checkbox" checked={resourceSort === 'desc'} readOnly />
                        Z → A
                      </div>

                      <div className="border-t my-2"></div>

                      <div
                        className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${
                          selectedResources.length === 0 ? 'bg-gray-100 font-semibold' : ''
                        }`}
                        onClick={() => setSelectedResources([])}
                      >
                        <input type="checkbox" checked={selectedResources.length === 0} readOnly />
                        All
                      </div>

                      {availableResources.map((name) => (
                        <div
                          key={name}
                          className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${
                            selectedResources.includes(name) ? 'bg-gray-100 font-semibold' : ''
                          }`}
                          onClick={() =>
                            toggleSelection(name, setSelectedResources, selectedResources)
                          }
                        >
                          <input type="checkbox" checked={selectedResources.includes(name)} readOnly />
                          {name}
                        </div>
                      ))}
                    </div>
                  )}
                </th>

                {/* DEPARTMENT */}
                <th
                  className="px-4 py-2 border text-sm font-semibold whitespace-nowrap"
                  style={styles.outfitFont}
                >
                  Department
                </th>

{/* REPORTS TO */}
<th
  className="px-4 py-2 border text-sm font-semibold relative whitespace-nowrap"
  style={styles.outfitFont}
>
  <div className="flex justify-between items-center">
    <span>Reports To</span>

    <button
      onClick={(e) => {
        e.stopPropagation();
        const rect = e.target.getBoundingClientRect();
        setMenuPosition({ x: rect.left, y: rect.bottom });

        setShowManagerMenu(prev => !prev);

        setShowResourceMenu(false);
        setShowActivityMenu(false);
        setShowCategoryMenu(false);
        setShowLeaderMenu(false);
        setShowRequestorMenu(false);
        setShowRequestorVPMenu(false);
        setShowRequestingDeptMenu(false);
        setShowStartMonthMenu(false);
      }}
      className="ml-2 bg-white text-[#017ACB] px-2 py-1 rounded text-xs font-bold hover:bg-gray-100 transition"
    >
      ▼
    </button>
  </div>

  {showManagerMenu && (
    <div
      className="fixed bg-white text-black shadow-lg rounded w-48 z-50"
      style={{ top: menuPosition.y, left: menuPosition.x }}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${
          selectedManagers.length === 0 ? "bg-gray-100 font-semibold" : ""
        }`}
        onClick={() => setSelectedManagers([])}
      >
        <input type="checkbox" checked={selectedManagers.length === 0} readOnly />
        All
      </div>

      {availableManagers.map((mgr) => (
        <div
          key={mgr}
          className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${
            selectedManagers.includes(mgr) ? "bg-gray-100 font-semibold" : ""
          }`}
          onClick={() =>
            toggleSelection(mgr, setSelectedManagers, selectedManagers)
          }
        >
          <input type="checkbox" checked={selectedManagers.includes(mgr)} readOnly />
          {mgr}
        </div>
      ))}
    </div>
  )}
</th>

{/* PROJECT */}
<th
  className="px-4 py-2 border text-sm font-semibold relative whitespace-nowrap"
  style={styles.outfitFont}
>
  <div className="flex justify-between items-center">
    <span>Project</span>

    <button
      onClick={(e) => {
        e.stopPropagation();
        const rect = e.target.getBoundingClientRect();
        setMenuPosition({ x: rect.left, y: rect.bottom });

        setShowActivityMenu(prev => !prev);

        setShowResourceMenu(false);
        setShowCategoryMenu(false);
        setShowLeaderMenu(false);
        setShowRequestorMenu(false);
        setShowRequestorVPMenu(false);
        setShowRequestingDeptMenu(false);
        setShowManagerMenu(false);
        setShowStartMonthMenu(false);
      }}
      className="ml-2 bg-white text-[#017ACB] px-2 py-1 rounded text-xs font-bold hover:bg-gray-100 transition"
    >
      ▼
    </button>
  </div>

  {showActivityMenu && (
    <div
      className="fixed bg-white text-black shadow-lg rounded w-48 z-50"
      style={{ top: menuPosition.y, left: menuPosition.x }}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${
          selectedActivities.length === 0 ? "bg-gray-100 font-semibold" : ""
        }`}
        onClick={() => setSelectedActivities([])}
      >
        <input type="checkbox" checked={selectedActivities.length === 0} readOnly />
        All
      </div>

      {availableActivities.map((act) => (
        <div
          key={act}
          className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${
            selectedActivities.includes(act) ? "bg-gray-100 font-semibold" : ""
          }`}
          onClick={() =>
            toggleSelection(act, setSelectedActivities, selectedActivities)
          }
        >
          <input type="checkbox" checked={selectedActivities.includes(act)} readOnly />
          {act}
        </div>
      ))}
    </div>
  )}
</th>

{/* CATEGORY */}
<th
  className="px-4 py-2 border text-sm font-semibold relative whitespace-nowrap"
  style={styles.outfitFont}
>
  <div className="flex justify-between items-center">
    <span>Activity Category</span>

    <button
      onClick={(e) => {
        e.stopPropagation();
        const rect = e.target.getBoundingClientRect();
        setMenuPosition({ x: rect.left, y: rect.bottom });

        setShowCategoryMenu(prev => !prev);

        setShowResourceMenu(false);
        setShowActivityMenu(false);
        setShowLeaderMenu(false);
        setShowRequestorMenu(false);
        setShowRequestorVPMenu(false);
        setShowRequestingDeptMenu(false);
        setShowManagerMenu(false);
        setShowStartMonthMenu(false);
      }}
      className="ml-2 bg-white text-[#017ACB] px-2 py-1 rounded text-xs font-bold hover:bg-gray-100 transition"
    >
      ▼
    </button>
  </div>

  {showCategoryMenu && (
    <div
      className="fixed bg-white text-black shadow-lg rounded w-48 z-50"
      style={{ top: menuPosition.y, left: menuPosition.x }}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${
          selectedCategories.length === 0 ? "bg-gray-100 font-semibold" : ""
        }`}
        onClick={() => setSelectedCategories([])}
      >
        <input type="checkbox" checked={selectedCategories.length === 0} readOnly />
        All
      </div>

      {availableCategories.map((cat) => (
        <div
          key={cat}
          className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${
            selectedCategories.includes(cat) ? "bg-gray-100 font-semibold" : ""
          }`}
          onClick={() =>
            toggleSelection(cat, setSelectedCategories, selectedCategories)
          }
        >
          <input type="checkbox" checked={selectedCategories.includes(cat)} readOnly />
          {cat}
        </div>
      ))}
    </div>
  )}
</th>

{/* LEADER */}
<th
  className="px-4 py-2 border text-sm font-semibold relative whitespace-nowrap"
  style={styles.outfitFont}
>
  <div className="flex justify-between items-center">
    <span>Leader Accountable</span>

    <button
      onClick={(e) => {
        e.stopPropagation();
        const rect = e.target.getBoundingClientRect();
        setMenuPosition({ x: rect.left, y: rect.bottom });

        setShowLeaderMenu(prev => !prev);

        setShowResourceMenu(false);
        setShowActivityMenu(false);
        setShowCategoryMenu(false);
        setShowRequestorMenu(false);
        setShowRequestorVPMenu(false);
        setShowRequestingDeptMenu(false);
        setShowManagerMenu(false);
        setShowStartMonthMenu(false);
      }}
      className="ml-2 bg-white text-[#017ACB] px-2 py-1 rounded text-xs font-bold hover:bg-gray-100 transition"
    >
      ▼
    </button>
  </div>

  {showLeaderMenu && (
    <div
      className="fixed bg-white text-black shadow-lg rounded w-48 z-50"
      style={{ top: menuPosition.y, left: menuPosition.x }}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${
          selectedLeaders.length === 0 ? "bg-gray-100 font-semibold" : ""
        }`}
        onClick={() => setSelectedLeaders([])}
      >
        <input type="checkbox" checked={selectedLeaders.length === 0} readOnly />
        All
      </div>

      {availableLeaders.map((lead) => (
        <div
          key={lead}
          className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${
            selectedLeaders.includes(lead) ? "bg-gray-100 font-semibold" : ""
          }`}
          onClick={() =>
            toggleSelection(lead, setSelectedLeaders, selectedLeaders)
          }
        >
          <input type="checkbox" checked={selectedLeaders.includes(lead)} readOnly />
          {lead}
        </div>
      ))}
    </div>
  )}
</th>

{/* REQUESTOR */}
<th
  className="px-4 py-2 border text-sm font-semibold relative whitespace-nowrap"
  style={styles.outfitFont}
>
  <div className="flex justify-between items-center">
    <span>Requestor</span>

    <button
      onClick={(e) => {
        e.stopPropagation();
        const rect = e.target.getBoundingClientRect();
        setMenuPosition({ x: rect.left, y: rect.bottom });

        setShowRequestorMenu(prev => !prev);

        setShowResourceMenu(false);
        setShowActivityMenu(false);
        setShowCategoryMenu(false);
        setShowLeaderMenu(false);
        setShowRequestorVPMenu(false);
        setShowRequestingDeptMenu(false);
        setShowManagerMenu(false);
        setShowStartMonthMenu(false);
      }}
      className="ml-2 bg-white text-[#017ACB] px-2 py-1 rounded text-xs font-bold hover:bg-gray-100 transition"
    >
      ▼
    </button>
  </div>

  {showRequestorMenu && (
    <div
      className="fixed bg-white text-black shadow-lg rounded w-48 z-50"
      style={{ top: menuPosition.y, left: menuPosition.x }}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${
          selectedRequestors.length === 0 ? "bg-gray-100 font-semibold" : ""
        }`}
        onClick={() => setSelectedRequestors([])}
      >
        <input type="checkbox" checked={selectedRequestors.length === 0} readOnly />
        All
      </div>

      {availableRequestors.map((req) => (
        <div
          key={req}
          className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${
            selectedRequestors.includes(req) ? "bg-gray-100 font-semibold" : ""
          }`}
          onClick={() =>
            toggleSelection(req, setSelectedRequestors, selectedRequestors)
          }
        >
          <input type="checkbox" checked={selectedRequestors.includes(req)} readOnly />
          {req}
        </div>
      ))}
    </div>
  )}
</th>

{/* REQUESTOR VP */}
<th
  className="px-4 py-2 border text-sm font-semibold relative whitespace-nowrap"
  style={styles.outfitFont}
>
  <div className="flex justify-between items-center">
    <span>Requestor VP</span>

    <button
      onClick={(e) => {
        e.stopPropagation();
        const rect = e.target.getBoundingClientRect();
        setMenuPosition({ x: rect.left, y: rect.bottom });

        setShowRequestorVPMenu(prev => !prev);

        setShowResourceMenu(false);
        setShowActivityMenu(false);
        setShowCategoryMenu(false);
        setShowLeaderMenu(false);
        setShowRequestorMenu(false);
        setShowRequestingDeptMenu(false);
        setShowManagerMenu(false);
        setShowStartMonthMenu(false);
      }}
      className="ml-2 bg-white text-[#017ACB] px-2 py-1 rounded text-xs font-bold hover:bg-gray-100 transition"
    >
      ▼
    </button>
  </div>

  {showRequestorVPMenu && (
    <div
      className="fixed bg-white text-black shadow-lg rounded w-48 z-50"
      style={{ top: menuPosition.y, left: menuPosition.x }}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${
          selectedRequestorVPs.length === 0 ? "bg-gray-100 font-semibold" : ""
        }`}
        onClick={() => setSelectedRequestorVPs([])}
      >
        <input type="checkbox" checked={selectedRequestorVPs.length === 0} readOnly />
        All
      </div>

      {availableRequestorVPs.map((vp) => (
        <div
          key={vp}
          className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${
            selectedRequestorVPs.includes(vp) ? "bg-gray-100 font-semibold" : ""
          }`}
          onClick={() =>
            toggleSelection(vp, setSelectedRequestorVPs, selectedRequestorVPs)
          }
        >
          <input type="checkbox" checked={selectedRequestorVPs.includes(vp)} readOnly />
          {vp}
        </div>
      ))}
    </div>
  )}
</th>

{/* REQUESTING DEPT */}
<th
  className="px-4 py-2 border text-sm font-semibold relative whitespace-nowrap"
  style={styles.outfitFont}
>
  <div className="flex justify-between items-center">
    <span>Requesting Dept</span>

    <button
      onClick={(e) => {
        e.stopPropagation();
        const rect = e.target.getBoundingClientRect();
        setMenuPosition({ x: rect.left, y: rect.bottom });

        setShowRequestingDeptMenu(prev => !prev);

        setShowResourceMenu(false);
        setShowActivityMenu(false);
        setShowCategoryMenu(false);
        setShowLeaderMenu(false);
        setShowRequestorMenu(false);
        setShowRequestorVPMenu(false);
        setShowManagerMenu(false);
        setShowStartMonthMenu(false);
      }}
      className="ml-2 bg-white text-[#017ACB] px-2 py-1 rounded text-xs font-bold hover:bg-gray-100 transition"
    >
      ▼
    </button>
  </div>

  {showRequestingDeptMenu && (
    <div
      className="fixed bg-white text-black shadow-lg rounded w-48 z-50"
      style={{ top: menuPosition.y, left: menuPosition.x }}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${
          selectedRequestingDepts.length === 0 ? "bg-gray-100 font-semibold" : ""
        }`}
        onClick={() => setSelectedRequestingDepts([])}
      >
        <input type="checkbox" checked={selectedRequestingDepts.length === 0} readOnly />
        All
      </div>

      {availableRequestingDepts.map((dept) => (
        <div
          key={dept}
          className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${
            selectedRequestingDepts.includes(dept) ? "bg-gray-100 font-semibold" : ""
          }`}
          onClick={() =>
            toggleSelection(dept, setSelectedRequestingDepts, selectedRequestingDepts)
          }
        >
          <input type="checkbox" checked={selectedRequestingDepts.includes(dept)} readOnly />
          {dept}
        </div>
      ))}
    </div>
  )}
</th>

{/* START MONTH SELECTOR — first visible month column */}
<th
  className="px-4 py-2 border text-sm font-semibold relative whitespace-nowrap"
  style={styles.outfitFont}
>
  <div className="flex justify-between items-center">
    <span>{monthLabels.length ? monthLabels[0].label : "Start Month"}</span>

    <button
      onClick={(e) => {
        e.stopPropagation();

        const rect = e.target.getBoundingClientRect();
        const dropdownWidth = 192; // w-48

        let x = rect.left;
        let y = rect.bottom;

        if (x + dropdownWidth > window.innerWidth) {
          x = window.innerWidth - dropdownWidth - 10;
        }

        setMenuPosition({ x, y });

        setShowResourceMenu(false);
        setShowActivityMenu(false);
        setShowCategoryMenu(false);
        setShowLeaderMenu(false);
        setShowRequestorMenu(false);
        setShowRequestorVPMenu(false);
        setShowRequestingDeptMenu(false);
        setShowManagerMenu(false);

        setShowStartMonthMenu(prev => {
          const next = !prev;

          if (next) {
            setTimeout(() => {
              if (startMonthMenuRef.current) {
                const el = startMonthMenuRef.current.querySelector(
                  `[data-month="${startMonth}"]`
                );
                if (el) el.scrollIntoView({ block: "center" });
              }
            }, 0);
          }

          return next;
        });
      }}
      className="ml-2 bg-white text-[#017ACB] px-2 py-1 rounded text-xs font-bold hover:bg-gray-100 transition"
    >
      ▼
    </button>
  </div>

  {showStartMonthMenu && (
    <div
      ref={startMonthMenuRef}
      className="fixed bg-white text-black shadow-lg rounded w-48 z-50 max-h-64 overflow-y-auto"
      style={{ top: menuPosition.y, left: menuPosition.x }}
      onClick={(e) => e.stopPropagation()}
    >
      {months.map((m) => {
        const year = m.substring(0, 4);
        const month = m.substring(4, 6);
        const monthNames = [
          "Jan","Feb","Mar","Apr","May","Jun",
          "Jul","Aug","Sep","Oct","Nov","Dec"
        ];
        const label = `${monthNames[parseInt(month, 10) - 1]} ${year}`;

        return (
          <div
            key={m}
            data-month={m}
            className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${
              startMonth === m ? "bg-gray-100 font-semibold" : ""
            }`}
            onClick={() => {
              setStartMonth(m);
              setShowStartMonthMenu(false);
            }}
          >
            <input type="checkbox" checked={startMonth === m} readOnly />
            {label}
          </div>
        );
      })}
    </div>
  )}
</th>

{/* REMAINING MONTH COLUMNS */}
{monthLabels.slice(1).map((m) => (
  <th
    key={m.key}
    className="px-4 py-2 border text-sm font-semibold whitespace-nowrap"
    style={styles.outfitFont}
  >
    {m.label}
  </th>
))}

</tr>
</thead>

<tbody>
  {filteredRows.length === 0 && (
    <tr>
      <td
        colSpan={10 + monthLabels.length}
        className="text-center py-6 text-black border border-black"
        style={styles.outfitFont}
      >
        No assignments found.
      </td>
    </tr>
  )}

  {filteredRows.map((row, index) => (
    <tr key={index} className="bg-white hover:bg-gray-100">
      <td
        className="sticky left-0 bg-white border border-black px-4 py-2 z-10 text-black"
        style={styles.outfitFont}
      >
       <button
  onClick={(e) => {
    e.stopPropagation();
    handleEditAllocation(row);
  }}
  className="px-2 py-1 bg-[#017ACB] text-white text-xs rounded hover:bg-blue-700"
>
  Edit
</button>
      </td>

                 {/* RESOURCE NAME */}
<td
  className="border border-black px-4 py-2 text-sm text-black"
  style={styles.outfitFont}
>
  {row.employee?.emp_name}
</td>

{/* DEPARTMENT */}
<td
  className="border border-black px-4 py-2 text-sm text-black"
  style={styles.outfitFont}
>
  {row.employee?.dept_name || ""}
</td>

{/* REPORTS TO */}
<td
  className="border border-black px-4 py-2 text-sm text-black"
  style={styles.outfitFont}
>
  {row.employee?.manager_name || ""}
</td>

{/* PROJECT */}
<td
  className="border border-black px-4 py-2 text-sm text-black"
  style={styles.outfitFont}
>
  {row.assignment?.project_name}
</td>

{/* CATEGORY */}
<td
  className="border border-black px-4 py-2 text-sm text-black"
  style={styles.outfitFont}
>
  {row.assignment?.category}
</td>

{/* LEADER */}
<td
  className="border border-black px-4 py-2 text-sm text-black"
  style={styles.outfitFont}
>
  {row.assignment?.leader}
</td>

{/* REQUESTOR */}
<td
  className="border border-black px-4 py-2 text-sm text-black"
  style={styles.outfitFont}
>
  {row.assignment?.requestor}
</td>

{/* REQUESTOR VP */}
<td
  className="border border-black px-4 py-2 text-sm text-black"
  style={styles.outfitFont}
>
  {row.assignment?.requestor_vp}
</td>

{/* REQUESTING DEPT */}
<td
  className="border border-black px-4 py-2 text-sm text-black"
  style={styles.outfitFont}
>
  {row.assignment?.requesting_dept_name || row.assignment?.requesting_dept}
</td>

{/* MONTH ALLOCATION CELLS */}
{monthLabels.map((m) => (
  <td
    key={m.key}
    className="border border-black px-4 py-2 text-sm text-black text-center cursor-pointer"
    style={styles.outfitFont}
    onClick={() => {
      setFilteredRows(prev => {
        const updated = [...prev];
        updated[index] = { ...updated[index], editing: m.key };
        return updated;
      });
    }}
  >
    {row.editing === m.key ? (
      <input
        autoFocus
        type="number"
        step="0.01"
        min="0"
        max="1"
        defaultValue={row.allocations?.[m.key] ?? ""}
        className="w-16 border rounded text-center text-sm"
        onBlur={(e) => {
          const val = e.target.value;
          const num = parseFloat(val);

          if (val !== "" && (isNaN(num) || num < 0 || num > 1)) {
            alert("Allocation must be between 0 and 1");
            return;
          }

          setFilteredRows(prev => {
            const updated = [...prev];
            const rowCopy = { ...updated[index] };
            const allocs = { ...(rowCopy.allocations || {}) };

            allocs[m.key] = val === "" ? "" : num;
            rowCopy.allocations = allocs;
            rowCopy.editing = null;

            updated[index] = rowCopy;
            return updated;
          });
        }}
        onKeyDown={async (e) => {
          if (e.key !== "Enter") return;

          const val = e.currentTarget.value;

          // DELETE allocation
          if (val === "") {
           await fetch(`${apiUrl}/api/assignments-allocations/${row.employee.emp_id}`, {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                emp_id: row.employee.emp_id,
                month: Number(m.key),
                activity: row.assignment.project_name,
                category: row.assignment.category
              })
            });

            setFilteredRows(prev => {
              const updated = [...prev];
              const rowCopy = { ...updated[index] };
              const allocs = { ...(rowCopy.allocations || {}) };

              delete allocs[m.key];
              rowCopy.allocations = allocs;
              rowCopy.editing = null;

              updated[index] = rowCopy;
              return updated;
            });

            return;
          }

          // UPDATE allocation
          const num = parseFloat(val);
          if (isNaN(num) || num < 0) {
            e.currentTarget.value = row.allocations?.[m.key] ?? "";
            return;
          }

          await fetch(`${apiUrl}/api/assignments-allocations/${row.employee.emp_id}/amount`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              emp_id: row.employee.emp_id,
              month: Number(m.key),
              amount: num,
              activity: row.assignment.project_name,
              category: row.assignment.category
            })
          });

          setFilteredRows(prev => {
            const updated = [...prev];
            const rowCopy = { ...updated[index] };
            const allocs = { ...(rowCopy.allocations || {}) };

            allocs[m.key] = num;
            rowCopy.allocations = allocs;
            rowCopy.editing = null;

            updated[index] = rowCopy;
            return updated;
          });
        }}
      />
    ) : (
      <span>{row.allocations?.[m.key] ?? ""}</span>
    )}
  </td>
))}

    </tr>
  ))}
</tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
);
}
