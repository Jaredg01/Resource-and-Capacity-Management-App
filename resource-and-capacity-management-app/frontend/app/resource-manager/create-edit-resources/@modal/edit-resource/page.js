'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function EditResourceModal() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const empId = searchParams.get('id');

  const [departments, setDepartments] = useState([]);
  const [managers, setManagers] = useState([]);
  const [employeesList, setEmployeesList] = useState([]);
  const [employee, setEmployee] = useState(null);
  const [statusValue, setStatusValue] = useState('Active');

  const [formData, setFormData] = useState({
    emp_name: '',
    emp_title: '',
    dept_no: '',
    manager_id: '',
    manager_level: '',
    director_level: '',
    other_info: ''
  });

  const MANAGER_LEVEL_OPTIONS = ['None', 'Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5'];
  const DIRECTOR_LEVEL_OPTIONS = ['None', 'Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5'];

  /* -------------------------------------------------------
     Load employee + dropdown data
  ------------------------------------------------------- */
  useEffect(() => {
    if (empId) {
      fetchEmployee();
      fetchDepartments();
      fetchManagers();
      fetchAllEmployees();
    }
  }, [empId]);

  /* -------------------------------------------------------
     Fetch single employee
  ------------------------------------------------------- */
  const fetchEmployee = async () => {
    const res = await fetch(`http://localhost:3001/api/resources/employees/${empId}`);
    const data = await res.json();

    setEmployee(data);

    setFormData({
      emp_name: data.emp_name || '',
      emp_title: data.emp_title || '',
      dept_no: data.dept_no || '',
      manager_id: data.manager_id || '',
      manager_level: data.manager_level || '',
      director_level: data.director_level || '',
      other_info: data.other_info || ''
    });

    setStatusValue(data.current_status || 'Active');
  };

  /* -------------------------------------------------------
     Fetch departments
  ------------------------------------------------------- */
  const fetchDepartments = async () => {
    const res = await fetch('http://localhost:3001/api/resources/departments');
    const data = await res.json();
    setDepartments(data);
  };

  /* -------------------------------------------------------
     Fetch managers
  ------------------------------------------------------- */
  const fetchManagers = async () => {
    const res = await fetch('http://localhost:3001/api/resources/managers');
    const data = await res.json();
    setManagers(data);
  };

  /* -------------------------------------------------------
     Fetch all employees (for manager/director lists)
  ------------------------------------------------------- */
  const fetchAllEmployees = async () => {
    const res = await fetch('http://localhost:3001/api/resources/employees');
    const data = await res.json();
    setEmployeesList(data || []);
  };

  /* -------------------------------------------------------
     Helpers
  ------------------------------------------------------- */
  const getUniqueManagerLevels = () => {
    return [...new Set(employeesList.map((e) => e.manager_level).filter(Boolean))];
  };

  const getEmployeeNameById = (id) => {
    if (!id) return '';
    const match = employeesList.find((emp) => String(emp.emp_id) === String(id));
    return match ? match.emp_name : String(id);
  };

  /* -------------------------------------------------------
     Submit handler
  ------------------------------------------------------- */
  const handleEdit = async (e) => {
    e.preventDefault();

    await fetch(`http://localhost:3001/api/resources/employees/${empId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    router.back();
  };

  /* -------------------------------------------------------
     Status change handler
  ------------------------------------------------------- */
  const handleStatusChange = async (status) => {
    await fetch(`http://localhost:3001/api/resources/employees/${empId}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    });

    setStatusValue(status);
  };

  if (!employee) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl p-6">

        {/* HEADER */}
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Edit Resource
        </h2>

        <form onSubmit={handleEdit}>

          {/* GRID */}
          <div className="grid grid-cols-2 gap-4">

            {/* NAME */}
            <div className="flex flex-col">
              <label className="text-xs mb-1 font-semibold text-gray-700">Name *</label>
              <input
                className="border p-2 rounded text-gray-900 bg-white"
                value={formData.emp_name}
                onChange={(e) => setFormData({ ...formData, emp_name: e.target.value })}
                required
              />
            </div>

            {/* TITLE */}
            <div className="flex flex-col">
              <label className="text-xs mb-1 font-semibold text-gray-700">Title *</label>
              <input
                className="border p-2 rounded text-gray-900 bg-white"
                value={formData.emp_title}
                onChange={(e) => setFormData({ ...formData, emp_title: e.target.value })}
                required
              />
            </div>

            {/* DEPARTMENT */}
            <div className="flex flex-col">
              <label className="text-xs mb-1 font-semibold text-gray-700">Department *</label>
              <select
                className="border p-2 rounded text-gray-900 bg-white"
                value={formData.dept_no}
                onChange={(e) => setFormData({ ...formData, dept_no: e.target.value })}
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
              <label className="text-xs mb-1 font-semibold text-gray-700">Reports To</label>
              <select
                className="border p-2 rounded text-gray-900 bg-white"
                value={formData.manager_id}
                onChange={(e) => setFormData({ ...formData, manager_id: e.target.value })}
              >
                <option value="">Select Manager</option>
                {managers.map((m) => (
                  <option key={m.emp_id} value={m.emp_id}>
                    {m.emp_name}
                  </option>
                ))}
              </select>
            </div>

            {/* MANAGER LEVEL */}
            <div className="flex flex-col">
              <label className="text-xs mb-1 font-semibold text-gray-700">Manager Level</label>
              <select
                className="border p-2 rounded text-gray-900 bg-white"
                value={formData.manager_level}
                onChange={(e) => setFormData({ ...formData, manager_level: e.target.value })}
              >
                <option value="">Select Manager Level</option>
                {MANAGER_LEVEL_OPTIONS.map((lvl) => (
                  <option key={lvl} value={lvl}>{lvl}</option>
                ))}
              </select>
            </div>

            {/* DIRECTOR LEVEL */}
            <div className="flex flex-col">
              <label className="text-xs mb-1 font-semibold text-gray-700">Director Level</label>
              <select
                className="border p-2 rounded text-gray-900 bg-white"
                value={formData.director_level}
                onChange={(e) => setFormData({ ...formData, director_level: e.target.value })}
              >
                <option value="">Select Director Level</option>
                {DIRECTOR_LEVEL_OPTIONS.map((lvl) => (
                  <option key={lvl} value={lvl}>{lvl}</option>
                ))}
              </select>
            </div>

          </div>

          {/* OTHER INFO */}
          <div className="mt-4">
            <label className="text-xs mb-1 font-semibold text-gray-700">Other Information</label>
            <textarea
              className="border p-2 rounded w-full text-gray-900 bg-white"
              value={formData.other_info}
              onChange={(e) => setFormData({ ...formData, other_info: e.target.value })}
            />
          </div>

          {/* STATUS */}
          <div className="mt-4">
            <label className="text-xs font-semibold block mb-2 text-gray-700">Status</label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => handleStatusChange('Active')}
                className={`px-4 py-2 rounded ${
                  statusValue === 'Active'
                    ? 'bg-green-600 text-white'
                    : 'bg-green-100 text-green-800'
                }`}
              >
                Active
              </button>

              <button
                type="button"
                onClick={() => handleStatusChange('Inactive')}
                className={`px-4 py-2 rounded ${
                  statusValue === 'Inactive'
                    ? 'bg-red-600 text-white'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                Inactive
              </button>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-4 py-2 bg-gray-200 text-gray-900 rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-[#017ACB] text-white rounded"
            >
              Save Changes
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}