'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const styles = {
  outfitFont: { fontFamily: 'Outfit, sans-serif' }
};

export default function InitiativesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const refresh = searchParams.get("refresh");

  // ---------------------------------------------------------
  // STATE
  // ---------------------------------------------------------
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const [initiatives, setInitiatives] = useState([]);
  const [mine, setMine] = useState([]);
  const [filteredInitiatives, setFilteredInitiatives] = useState([]);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedStatuses, setSelectedStatuses] = useState([]);
  const [selectedVPs, setSelectedVPs] = useState([]);
  const [selectedDepts, setSelectedDepts] = useState([]);
  const [selectedLeads, setSelectedLeads] = useState([]);

  const [projectSort, setProjectSort] = useState('');
  const [showProjectSortMenu, setShowProjectSortMenu] = useState(false);

  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [showStatusMenu, setShowStatusMenu] = useState(false);
  const [showVPMenu, setShowVPMenu] = useState(false);
  const [showDeptMenu, setShowDeptMenu] = useState(false);
  const [showLeadMenu, setShowLeadMenu] = useState(false);

  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  const [availableCategories, setAvailableCategories] = useState([]);
  const [availableStatuses, setAvailableStatuses] = useState([]);
  const [availableVPs, setAvailableVPs] = useState([]);
  const [availableDepts, setAvailableDepts] = useState([]);
  const [availableLeads, setAvailableLeads] = useState([]);

  // ---------------------------------------------------------
  // LOAD USER
  // ---------------------------------------------------------
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/resource-and-capacity-management-app/frontend/app/login');
      return;
    }
    setUser(JSON.parse(userData));
  }, [router]);

  // ---------------------------------------------------------
  // FETCH INITIATIVES FROM EXPRESS BACKEND
  // ---------------------------------------------------------
  useEffect(() => {
    if (!user) return;

    const fetchInitiatives = async () => {
      try {
        const res = await fetch(
          `http://localhost:3001/api/initiatives?username=${user.username}&ts=${Date.now()}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
              Pragma: "no-cache",
              Expires: "0",
            },
          }
        );

        const { allAssignments, myInitiatives } = await res.json();

        const mapFields = (data) =>
          data.map((item) => ({
            id: item._id,
            project: item.project_name,
            category: item.category,
            lead: item.leader,
            status: item.status,
            requestor: item.requestor,
            requestor_vp: item.requestor_vp,
            requesting_dept: item.requesting_dept,
            completion_date: item.completion_date,
            target_period: item.target_period,
            description: item.description,
            resource_consideration: item.resource_notes,
          }));

        const mappedAll = mapFields(allAssignments);
        const mappedMine = mapFields(myInitiatives);

        setInitiatives(mappedAll);
        setMine(mappedMine);
        setFilteredInitiatives(mappedAll);

        setAvailableCategories([...new Set(mappedAll.map(i => i.category).filter(Boolean))]);
        setAvailableStatuses([...new Set(mappedAll.map(i => i.status).filter(Boolean))]);
        setAvailableVPs([...new Set(mappedAll.map(i => i.requestor_vp).filter(Boolean))]);
        setAvailableDepts([...new Set(mappedAll.map(i => i.requesting_dept).filter(Boolean))]);
        setAvailableLeads([...new Set(mappedAll.map(i => i.lead).filter(Boolean))]);

      } catch (err) {
        console.error("Initiatives fetch error:", err);
      }
    };

    fetchInitiatives();
  }, [user, refresh]);

  // ---------------------------------------------------------
  // FILTER + SORT
  // ---------------------------------------------------------
  useEffect(() => {
    if (!user) return;

    let base =
      activeTab === 'mine'
        ? mine
        : activeTab === 'completed'
        ? initiatives.filter(i => i.status === 'Completed')
        : initiatives.filter(i => i.status !== 'Completed');

    let filtered = base.filter((i) =>
      (selectedCategories.length ? selectedCategories.includes(i.category) : true) &&
      (selectedStatuses.length ? selectedStatuses.includes(i.status) : true) &&
      (selectedVPs.length ? selectedVPs.includes(i.requestor_vp) : true) &&
      (selectedDepts.length ? selectedDepts.includes(i.requesting_dept) : true) &&
      (selectedLeads.length ? selectedLeads.includes(i.lead) : true)
    );

    if (projectSort === 'asc') {
      filtered = [...filtered].sort((a, b) => a.project.localeCompare(b.project));
    } else if (projectSort === 'desc') {
      filtered = [...filtered].sort((a, b) => b.project.localeCompare(a.project));
    }

    setFilteredInitiatives(filtered);
  }, [
    activeTab,
    initiatives,
    mine,
    user,
    selectedCategories,
    selectedStatuses,
    selectedVPs,
    selectedDepts,
    selectedLeads,
    projectSort
  ]);

  // ---------------------------------------------------------
  // TOGGLE HELPER
  // ---------------------------------------------------------
  const toggleSelection = (value, setFn, current) => {
    setFn(
      current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value]
    );
  };

  // ---------------------------------------------------------
  // CLOSE MENUS ON OUTSIDE CLICK
  // ---------------------------------------------------------
  useEffect(() => {
    const handleClickOutside = () => {
      setShowCategoryMenu(false);
      setShowStatusMenu(false);
      setShowVPMenu(false);
      setShowDeptMenu(false);
      setShowLeadMenu(false);
      setShowProjectSortMenu(false);
    };

    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  // ---------------------------------------------------------
  // NAV HELPERS
  // ---------------------------------------------------------
  const handleAddInitiative = () => {
    router.push('/resource-manager/create-edit-initiatives/add-initiative');
  };

  const handleEditInitiative = (id) => {
    router.push(`/resource-manager/create-edit-initiatives/edit-initiative?id=${id}`);
  };

  // ---------------------------------------------------------
  // LOADING
  // ---------------------------------------------------------
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

    // ---------------------------------------------------------
  // PAGE CONTENT
  // ---------------------------------------------------------
  return (
    <>
{/* TITLE + BACK + TABS — ALL IN ONE ROW */}
<div className="flex items-center justify-between mb-6">

  {/* LEFT — TITLE + BACK BUTTON */}
  <div className="flex items-center gap-4">
    <h2
      className="text-4xl font-bold text-gray-900"
      style={styles.outfitFont}
    >
      Initiatives
    </h2>

    <button
      onClick={() => router.push('/resource-manager/dashboard')}
      className="px-4 py-2 rounded text-sm bg-white text-gray-700 border hover:bg-gray-100 transition"
      style={styles.outfitFont}
    >
      Back to Dashboard
    </button>
  </div>

  {/* RIGHT — TABS */}
  <div className="flex items-center gap-3">

    <button
      onClick={() => setActiveTab('all')}
      className={`px-4 py-2 rounded text-sm ${
        activeTab === 'all'
          ? 'bg-[#017ACB] text-white'
          : 'bg-white text-gray-700 border'
      }`}
      style={styles.outfitFont}
    >
      All Initiatives
    </button>

    <button
      onClick={() => setActiveTab('mine')}
      className={`px-4 py-2 rounded text-sm ${
        activeTab === 'mine'
          ? 'bg-[#017ACB] text-white'
          : 'bg-white text-gray-700 border'
      }`}
      style={styles.outfitFont}
    >
      My Initiatives
    </button>

    <button
      onClick={() => setActiveTab('completed')}
      className={`px-4 py-2 rounded text-sm ${
        activeTab === 'completed'
          ? 'bg-[#017ACB] text-white'
          : 'bg-white text-gray-700 border'
      }`}
      style={styles.outfitFont}
    >
      Completed
    </button>

    <button
      onClick={handleAddInitiative}
      className="px-4 py-2 rounded text-sm bg-white text-gray-700 border hover:bg-gray-100 transition"
      style={styles.outfitFont}
    >
      + Add Initiative
    </button>

  </div>
</div>

      {/* TABLE */}
      <div className="border rounded-lg shadow-sm bg-white overflow-hidden">
        <div className="overflow-x-auto overflow-y-auto max-h-[70vh]">
          <table className="min-w-max w-full border-collapse">
            <thead className="bg-[#017ACB] text-white sticky top-0 z-10">
              <tr>
                {/* EDIT */}
                <th
                  className="sticky left-0 bg-[#017ACB] px-4 py-2 border text-sm font-semibold"
                  style={styles.outfitFont}
                >
                  Edit
                </th>

                {/* PROJECT + SORT */}
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
                        setShowProjectSortMenu(prev => !prev);
                        setShowCategoryMenu(false);
                        setShowStatusMenu(false);
                        setShowVPMenu(false);
                        setShowDeptMenu(false);
                        setShowLeadMenu(false);
                      }}
                      className="ml-2 bg-white text-[#017ACB] px-2 py-1 rounded text-xs font-bold hover:bg-gray-100 transition"
                    >
                      ▼
                    </button>
                  </div>

                  {showProjectSortMenu && (
                    <div
                      className="fixed bg-white text-black shadow-lg rounded w-40 z-50"
                      style={{ top: menuPosition.y, left: menuPosition.x }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div
                        className={`px-3 py-2 cursor-pointer hover:bg-gray-200 ${
                          projectSort === '' ? 'bg-gray-100 font-semibold' : ''
                        }`}
                        onClick={() => setProjectSort('')}
                      >
                        None
                      </div>
                      <div
                        className={`px-3 py-2 cursor-pointer hover:bg-gray-200 ${
                          projectSort === 'asc' ? 'bg-gray-100 font-semibold' : ''
                        }`}
                        onClick={() => setProjectSort('asc')}
                      >
                        A → Z
                      </div>
                      <div
                        className={`px-3 py-2 cursor-pointer hover:bg-gray-200 ${
                          projectSort === 'desc' ? 'bg-gray-100 font-semibold' : ''
                        }`}
                        onClick={() => setProjectSort('desc')}
                      >
                        Z → A
                      </div>
                    </div>
                  )}
                </th>

                {/* CATEGORY FILTER */}
                <th
                  className="px-4 py-2 border text-sm font-semibold relative whitespace-nowrap"
                  style={styles.outfitFont}
                >
                  <div className="flex justify-between items-center">
                    <span>Category</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const rect = e.target.getBoundingClientRect();
                        setMenuPosition({ x: rect.left, y: rect.bottom });
                        setShowCategoryMenu(prev => !prev);
                        setShowStatusMenu(false);
                        setShowVPMenu(false);
                        setShowDeptMenu(false);
                        setShowLeadMenu(false);
                        setShowProjectSortMenu(false);
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
                          selectedCategories.length === 0
                            ? 'bg-gray-100 font-semibold'
                            : ''
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
                            selectedCategories.includes(cat)
                              ? 'bg-gray-100 font-semibold'
                              : ''
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

                {/* LEAD FILTER */}
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
                        setShowLeadMenu(prev => !prev);
                        setShowCategoryMenu(false);
                        setShowStatusMenu(false);
                        setShowVPMenu(false);
                        setShowDeptMenu(false);
                        setShowProjectSortMenu(false);
                      }}
                      className="ml-2 bg-white text-[#017ACB] px-2 py-1 rounded text-xs font-bold hover:bg-gray-100 transition"
                    >
                      ▼
                    </button>
                  </div>

                  {showLeadMenu && (
                    <div
                      className="fixed bg-white text-black shadow-lg rounded w-48 z-50"
                      style={{ top: menuPosition.y, left: menuPosition.x }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div
                        className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${
                          selectedLeads.length === 0 ? 'bg-gray-100 font-semibold' : ''
                        }`}
                        onClick={() => setSelectedLeads([])}
                      >
                        <input type="checkbox" checked={selectedLeads.length === 0} readOnly />
                        All
                      </div>

                      {availableLeads.map((lead) => (
                        <div
                          key={lead}
                          className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${
                            selectedLeads.includes(lead) ? 'bg-gray-100 font-semibold' : ''
                          }`}
                          onClick={() =>
                            toggleSelection(lead, setSelectedLeads, selectedLeads)
                          }
                        >
                          <input type="checkbox" checked={selectedLeads.includes(lead)} readOnly />
                          {lead}
                        </div>
                      ))}
                    </div>
                  )}
                </th>

                {/* STATUS FILTER */}
                <th
                  className="px-4 py-2 border text-sm font-semibold relative whitespace-nowrap"
                  style={styles.outfitFont}
                >
                  <div className="flex justify-between items-center">
                    <span>Status</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const rect = e.target.getBoundingClientRect();
                        setMenuPosition({ x: rect.left, y: rect.bottom });
                        setShowStatusMenu(prev => !prev);
                        setShowCategoryMenu(false);
                        setShowVPMenu(false);
                        setShowDeptMenu(false);
                        setShowLeadMenu(false);
                        setShowProjectSortMenu(false);
                      }}
                      className="ml-2 bg-white text-[#017ACB] px-2 py-1 rounded text-xs font-bold hover:bg-gray-100 transition"
                    >
                      ▼
                    </button>
                  </div>

                  {showStatusMenu && (
                    <div
                      className="fixed bg-white text-black shadow-lg rounded w-48 z-50"
                      style={{ top: menuPosition.y, left: menuPosition.x }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div
                        className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${
                          selectedStatuses.length === 0 ? 'bg-gray-100 font-semibold' : ''
                        }`}
                        onClick={() => setSelectedStatuses([])}
                      >
                        <input type="checkbox" checked={selectedStatuses.length === 0} readOnly />
                        All
                      </div>

                      {availableStatuses.map((status) => (
                        <div
                          key={status}
                          className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${
                            selectedStatuses.includes(status) ? 'bg-gray-100 font-semibold' : ''
                          }`}
                          onClick={() =>
                            toggleSelection(status, setSelectedStatuses, selectedStatuses)
                          }
                        >
                          <input type="checkbox" checked={selectedStatuses.includes(status)} readOnly />
                          {status}
                        </div>
                      ))}
                    </div>
                  )}
                </th>

                {/* REQUESTOR */}
                <th
                  className="px-4 py-2 border text-sm font-semibold whitespace-nowrap"
                  style={styles.outfitFont}
                >
                  Requestor
                </th>

                {/* REQUESTOR VP FILTER */}
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
                        setShowVPMenu(prev => !prev);
                        setShowCategoryMenu(false);
                        setShowStatusMenu(false);
                        setShowDeptMenu(false);
                        setShowLeadMenu(false);
                        setShowProjectSortMenu(false);
                      }}
                      className="ml-2 bg-white text-[#017ACB] px-2 py-1 rounded text-xs font-bold hover:bg-gray-100 transition"
                    >
                      ▼
                    </button>
                  </div>

                  {showVPMenu && (
                    <div
                      className="fixed bg-white text-black shadow-lg rounded w-48 z-50"
                      style={{ top: menuPosition.y, left: menuPosition.x }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div
                        className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${
                          selectedVPs.length === 0 ? 'bg-gray-100 font-semibold' : ''
                        }`}
                        onClick={() => setSelectedVPs([])}
                      >
                        <input type="checkbox" checked={selectedVPs.length === 0} readOnly />
                        All
                      </div>

                      {availableVPs.map((vp) => (
                        <div
                          key={vp}
                          className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${
                            selectedVPs.includes(vp) ? 'bg-gray-100 font-semibold' : ''
                          }`}
                          onClick={() =>
                            toggleSelection(vp, setSelectedVPs, selectedVPs)
                          }
                        >
                          <input type="checkbox" checked={selectedVPs.includes(vp)} readOnly />
                          {vp}
                        </div>
                      ))}
                    </div>
                  )}
                </th>

                {/* REQUESTING DEPT FILTER */}
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
                        setShowDeptMenu(prev => !prev);
                        setShowCategoryMenu(false);
                        setShowStatusMenu(false);
                        setShowVPMenu(false);
                        setShowLeadMenu(false);
                        setShowProjectSortMenu(false);
                      }}
                      className="ml-2 bg-white text-[#017ACB] px-2 py-1 rounded text-xs font-bold hover:bg-gray-100 transition"
                    >
                      ▼
                    </button>
                  </div>

                  {showDeptMenu && (
                    <div
                      className="fixed bg-white text-black shadow-lg rounded w-48 z-50"
                      style={{ top: menuPosition.y, left: menuPosition.x }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div
                        className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${
                          selectedDepts.length === 0 ? 'bg-gray-100 font-semibold' : ''
                        }`}
                        onClick={() => setSelectedDepts([])}
                      >
                        <input type="checkbox" checked={selectedDepts.length === 0} readOnly />
                        All
                      </div>

                      {availableDepts.map((dept) => (
                        <div
                          key={dept}
                          className={`px-3 py-2 cursor-pointer text-sm hover:bg-gray-200 flex items-center gap-2 ${
                            selectedDepts.includes(dept) ? 'bg-gray-100 font-semibold' : ''
                          }`}
                          onClick={() =>
                            toggleSelection(dept, setSelectedDepts, selectedDepts)
                          }
                        >
                          <input type="checkbox" checked={selectedDepts.includes(dept)} readOnly />
                          {dept}
                        </div>
                      ))}
                    </div>
                  )}
                </th>

                {/* COMPLETION DATE */}
                <th
                  className="px-4 py-2 border text-sm font-semibold whitespace-nowrap"
                  style={styles.outfitFont}
                >
                  Completion Date
                </th>

                {/* TARGET PERIOD */}
                <th
                  className="px-4 py-2 border text-sm font-semibold whitespace-nowrap"
                  style={styles.outfitFont}
                >
                  Target Period
                </th>

                {/* DESCRIPTION */}
                <th
                  className="px-4 py-2 border text-sm font-semibold whitespace-nowrap"
                  style={styles.outfitFont}
                >
                  Description
                </th>

                {/* RESOURCE NOTES */}
                <th
                  className="px-4 py-2 border text-sm font-semibold whitespace-nowrap"
                  style={styles.outfitFont}
                >
                  Resource Consideration
                </th>
              </tr>
            </thead>

                        <tbody>
              {filteredInitiatives.map((item, index) => (
                <tr
                  key={item.id}
                  className={`hover:bg-black/5 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}
                >
                  {/* EDIT BUTTON */}
                  <td className="sticky left-0 px-4 py-2 border bg-inherit text-black">
                    <button
                      onClick={() => handleEditInitiative(item.id)}
                      className="px-2 py-1 bg-[#017ACB] text-white text-xs rounded hover:bg-blue-700"
                      style={styles.outfitFont}
                    >
                      Edit
                    </button>
                  </td>

                  {/* PROJECT */}
                  <td className="px-4 py-2 border text-sm text-black">
                    {item.project}
                  </td>

                  {/* CATEGORY */}
                  <td className="px-4 py-2 border text-sm text-black">
                    {item.category}
                  </td>

                  {/* LEADER */}
                  <td className="px-4 py-2 border text-sm text-black">
                    {item.lead}
                  </td>

                  {/* STATUS */}
                  <td className="px-4 py-2 border text-sm text-black">
                    {item.status}
                  </td>

                  {/* REQUESTOR */}
                  <td className="px-4 py-2 border text-sm text-black">
                    {item.requestor}
                  </td>

                  {/* REQUESTOR VP */}
                  <td className="px-4 py-2 border text-sm text-black">
                    {item.requestor_vp}
                  </td>

                  {/* REQUESTING DEPT */}
                  <td className="px-4 py-2 border text-sm text-black">
                    {item.requesting_dept}
                  </td>

                  {/* COMPLETION DATE */}
                  <td className="px-4 py-2 border text-sm text-black">
                    {item.completion_date
                      ? new Date(item.completion_date).toLocaleDateString()
                      : ''}
                  </td>

                  {/* TARGET PERIOD */}
                  <td className="px-4 py-2 border text-sm text-black">
                    {item.target_period}
                  </td>

                  {/* DESCRIPTION */}
                  <td className="px-4 py-2 border text-sm text-black">
                    {item.description}
                  </td>

                  {/* RESOURCE NOTES */}
                  <td className="px-4 py-2 border text-sm text-black">
                    {item.resource_consideration}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}