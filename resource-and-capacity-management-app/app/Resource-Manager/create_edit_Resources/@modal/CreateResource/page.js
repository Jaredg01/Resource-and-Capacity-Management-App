'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const API_BASE = 'http://localhost:3001/api/Resource-Manager';

export default function CreateResourceModal() {
  const router = useRouter();
  const [departments, setDepartments] = useState([]);
  const [managers, setManagers] = useState([]);
  const [employeesList, setEmployeesList] = useState([]);
  const [formData, setFormData] = useState({
    emp_name: '',
    emp_title: '',
    dept_no: '',
    manager_id: '',
    manager_level: '',
    director_level: '',
    other_info: ''
  });

  useEffect(() => {
    loadInitialData();
  }, []);

  const fetchJson = async (url, label) => {
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`${label} request failed: ${response.status}`);
    }
    return response.json();
  };

  const loadInitialData = async () => {
    try {
      const [departmentsResult, managersResult, employeesResult] = await Promise.allSettled([
        fetchJson(`${API_BASE}/departments`, 'Departments'),
        fetchJson(`${API_BASE}/managers`, 'Managers'),
        fetchJson(`${API_BASE}/employees`, 'Employees')
      ]);

      if (departmentsResult.status === 'fulfilled') {
        setDepartments(Array.isArray(departmentsResult.value) ? departmentsResult.value : []);
      } else {
        setDepartments([]);
        console.error('Error fetching departments:', departmentsResult.reason);
      }

      if (managersResult.status === 'fulfilled') {
        setManagers(Array.isArray(managersResult.value) ? managersResult.value : []);
      } else {
        setManagers([]);
        console.error('Error fetching managers:', managersResult.reason);
      }

      if (employeesResult.status === 'fulfilled') {
        setEmployeesList(Array.isArray(employeesResult.value) ? employeesResult.value : []);
      } else {
        setEmployeesList([]);
        console.error('Error fetching employees:', employeesResult.reason);
      }
    } catch (err) {
      console.error('Error loading create resource data:', err);
    }
  };

  const getAccTypeId = (manager) => (
    manager?.acc_type_id ?? manager?.account?.acc_type_id ?? manager?.accTypeId
  );

  const getEmployeeNameById = (empId) => {
    if (empId === undefined || empId === null || String(empId).trim() === '') return '';
    const match = employeesList.find((emp) => String(emp.emp_id) === String(empId));
    return match ? match.emp_name : String(empId);
  };

  const getManagerLevelOptions = () => (
    [...new Map(
      [
        ...managers
          .filter((manager) => String(getAccTypeId(manager)) === '1')
          .map((manager) => [String(manager.emp_id), getEmployeeNameById(manager.emp_id)]),
        formData.manager_level
          ? [String(formData.manager_level), getEmployeeNameById(formData.manager_level)]
          : null
      ].filter(Boolean)
    ).entries()]
  );

  const getDirectorLevelOptions = () => (
    [...new Map(
      [
        ...managers
          .filter((manager) => String(getAccTypeId(manager)) === '1')
          .map((manager) => [String(manager.emp_id), getEmployeeNameById(manager.emp_id)]),
        formData.director_level
          ? [String(formData.director_level), getEmployeeNameById(formData.director_level)]
          : null
      ].filter(Boolean)
    ).entries()]
  );

  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_BASE}/employees`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        router.refresh();
        router.back();
      } else {
        const errorData = await res.json().catch(() => ({}));
        console.error('Failed to create resource:', errorData?.error || `Status ${res.status}`);
      }
    } catch (err) {
      console.error('Error creating resource:', err);
    }
  };

  return (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999]">
    <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl p-6">

      {/* HEADER */}
      <h2 className="text-2xl font-bold mb-6 text-black">
        Create Resource
      </h2>

        <form onSubmit={handleCreate}>

          <div className="grid grid-cols-2 gap-4">

            <div className="flex flex-col">
              <label className="text-xs mb-1 font-semibold text-black">Name *</label>
              <input
                className="border p-2 rounded text-black bg-white"
                value={formData.emp_name}
                onChange={(e) => setFormData({ ...formData, emp_name: e.target.value })}
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-xs mb-1 font-semibold text-black">Title *</label>
              <input
                className="border p-2 rounded text-black bg-white"
                value={formData.emp_title}
                onChange={(e) => setFormData({ ...formData, emp_title: e.target.value })}
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-xs mb-1 font-semibold text-black">Department *</label>
              <select
                className="border p-2 rounded text-black bg-white"
                value={formData.dept_no}
                onChange={(e) => setFormData({ ...formData, dept_no: e.target.value })}
              >
                <option value="" className="text-black bg-white">Select Department</option>
                {departments.map(d => (
                  <option key={d.dept_no} value={d.dept_no} className="text-black bg-white">
                    {d.dept_name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-xs mb-1 font-semibold text-black">Reports To</label>
              <select
                className="border p-2 rounded text-black bg-white"
                value={formData.manager_id}
                onChange={(e) => setFormData({ ...formData, manager_id: e.target.value })}
              >
                <option value="" className="text-black bg-white">Select Manager</option>
                {[...new Map(
                  [
                    ...managers
                      .filter((manager) => String(getAccTypeId(manager)) === '1')
                      .map((m) => [String(m.emp_id), getEmployeeNameById(m.emp_id)]),
                    formData.manager_id
                      ? [String(formData.manager_id), getEmployeeNameById(formData.manager_id)]
                      : null
                  ].filter(Boolean)
                ).entries()].map(([id, name]) => (
                  <option key={id} value={id} className="text-black bg-white">
                    {name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-xs mb-1 font-semibold text-black">Manager Level</label>
              <select
                className="border p-2 rounded text-black bg-white"
                value={formData.manager_level}
                onChange={(e) => setFormData({ ...formData, manager_level: e.target.value })}
              >
                <option value="" className="text-black bg-white">Select Manager Level</option>
                {getManagerLevelOptions().map(([id, name]) => (
                  <option key={id} value={id} className="text-black bg-white">
                    {name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-xs mb-1 font-semibold text-black">Director Level</label>
              <select
                className="border p-2 rounded text-black bg-white"
                value={formData.director_level}
                onChange={(e) => setFormData({ ...formData, director_level: e.target.value })}
              >
                <option value="" className="text-black bg-white">Select Director Level</option>
                {getDirectorLevelOptions().map(([id, name]) => (
                  <option key={id} value={id} className="text-black bg-white">
                    {name}
                  </option>
                ))}
              </select>
            </div>

          </div>

          <div className="mt-4">
            <label className="text-xs mb-1 font-semibold text-black">Other Information</label>
            <textarea
              className="border p-2 rounded w-full text-black bg-white"
              value={formData.other_info}
              onChange={(e) => setFormData({ ...formData, other_info: e.target.value })}
            />
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-4 py-2 bg-gray-200 text-gray-900 rounded cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-[#017ACB] text-white rounded cursor-pointer"
            >
              Create
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

