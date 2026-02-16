'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function CreateResourceModal() {
  const router = useRouter();

  /* ---------------------------------------------------------
     STATE MANAGEMENT
     ---------------------------------------------------------
     • departments → dropdown list
     • managers → dropdown list
     • formData → controlled form fields
  --------------------------------------------------------- */
  const [departments, setDepartments] = useState([]);
  const [managers, setManagers] = useState([]);

  const [formData, setFormData] = useState({
    emp_name: '',
    emp_title: '',
    dept_no: '',
    manager_id: '',
    other_info: ''
  });

  /* ---------------------------------------------------------
     FETCH: Departments + Managers (on mount)
     ---------------------------------------------------------
     • Fully defensive fetch calls
     • Prevents crashes on malformed responses
     • Logs errors without breaking UI
  --------------------------------------------------------- */
  useEffect(() => {
    fetchDepartments();
    fetchManagers();
  }, []);

  const fetchDepartments = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/resources/departments');
      if (!res.ok) return;

      const data = await res.json();
      if (Array.isArray(data)) setDepartments(data);
    } catch (err) {
      console.error('Error fetching departments:', err);
    }
  };

  const fetchManagers = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/resources/managers');
      if (!res.ok) return;

      const data = await res.json();
      if (Array.isArray(data)) setManagers(data);
    } catch (err) {
      console.error('Error fetching managers:', err);
    }
  };

  /* ---------------------------------------------------------
     HANDLE CREATE RESOURCE
     ---------------------------------------------------------
     • Sends POST request with formData
     • Defensive error handling
     • Navigates back on success
  --------------------------------------------------------- */
  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3001/api/resources/employees', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        router.back();
        return;
      }

      const errData = await res.json().catch(() => null);
      console.error('Failed to create resource:', errData?.error || 'Unknown error');
    } catch (err) {
      console.error('Error creating resource:', err);
    }
  };

  /* ---------------------------------------------------------
     FINAL RENDER — MODAL OVERLAY
     ---------------------------------------------------------
     • Fullscreen darkened backdrop
     • Centered modal card
     • No layout interference with underlying page
  --------------------------------------------------------- */
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl p-6">

        {/* -----------------------------------------------------
           HEADER
        ----------------------------------------------------- */}
        <h2 className="text-2xl font-bold mb-6 text-black">
          Create Resource
        </h2>

        <form onSubmit={handleCreate}>

          {/* ---------------------------------------------------
             GRID FIELDS
          --------------------------------------------------- */}
          <div className="grid grid-cols-2 gap-4">

            {/* NAME */}
            <div className="flex flex-col">
              <label className="text-xs mb-1 text-black font-semibold">
                Name *
              </label>
              <input
                value={formData.emp_name}
                onChange={(e) =>
                  setFormData({ ...formData, emp_name: e.target.value })
                }
                className="border p-2 rounded text-black font-medium"
                required
              />
            </div>

            {/* TITLE */}
            <div className="flex flex-col">
              <label className="text-xs mb-1 text-black font-semibold">
                Title *
              </label>
              <input
                value={formData.emp_title}
                onChange={(e) =>
                  setFormData({ ...formData, emp_title: e.target.value })
                }
                className="border p-2 rounded text-black font-medium"
                required
              />
            </div>

            {/* DEPARTMENT */}
            <div className="flex flex-col">
              <label className="text-xs mb-1 text-black font-semibold">
                Department *
              </label>
              <select
                value={formData.dept_no}
                onChange={(e) =>
                  setFormData({ ...formData, dept_no: e.target.value })
                }
                className="border p-2 rounded text-black font-medium"
                required
              >
                <option value="">Select Department</option>
                {departments.map((d) => (
                  <option key={d.dept_no} value={d.dept_no}>
                    {d.dept_name}
                  </option>
                ))}
              </select>
            </div>

            {/* REPORTS TO */}
            <div className="flex flex-col">
              <label className="text-xs mb-1 text-black font-semibold">
                Reports To
              </label>
              <select
                value={formData.manager_id}
                onChange={(e) =>
                  setFormData({ ...formData, manager_id: e.target.value })
                }
                className="border p-2 rounded text-black font-medium"
              >
                <option value="">Select Manager</option>
                {managers.map((m) => (
                  <option key={m.emp_id} value={m.emp_id}>
                    {m.emp_name}
                  </option>
                ))}
              </select>
            </div>

            {/* DIRECTOR LEVEL (placeholder) */}
            <div className="flex flex-col">
              <label className="text-xs mb-1 text-black font-semibold">
                Director Level
              </label>
              <select className="border p-2 rounded text-black font-medium">
                <option value="">Select Director</option>
                {managers.map((m) => (
                  <option key={m.emp_id} value={m.emp_id}>
                    {m.emp_name}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* ---------------------------------------------------
             OTHER INFORMATION
          --------------------------------------------------- */}
          <div className="flex flex-col mt-4">
            <label className="text-xs mb-1 text-black font-semibold">
              Other Information
            </label>
            <textarea
              value={formData.other_info}
              onChange={(e) =>
                setFormData({ ...formData, other_info: e.target.value })
              }
              className="border p-2 rounded w-full text-black font-medium"
              placeholder="e.g. Contract end date – Oct 15, 2025"
            />
          </div>

          {/* ---------------------------------------------------
             BUTTONS
          --------------------------------------------------- */}
          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 font-medium"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-[#017ACB] text-white rounded hover:bg-blue-700 font-medium"
            >
              Create
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}