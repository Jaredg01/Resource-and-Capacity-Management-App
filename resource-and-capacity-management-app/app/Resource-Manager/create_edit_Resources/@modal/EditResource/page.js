'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function EditResourceModal() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const empId = searchParams.get('id');

  const [departments, setDepartments] = useState([]);
  const [managers, setManagers] = useState([]);
  const [directorLevelOptions, setDirectorLevelOptions] = useState([]);
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

  useEffect(() => {
    if (empId) {
      fetchEmployee();
      fetchDepartments();
      fetchManagers();
      fetchDirectorLevels();
    }
  }, [empId]);

  const fetchEmployee = async () => {
    const res = await fetch(`http://localhost:3001/api/Resource-Manager/employees/${empId}`);
    const data = await res.json();
    setEmployee(data);
    setFormData({
      emp_name: data.emp_name || '',
      emp_title: data.emp_title || '',
      dept_no: data.dept_no || '',
      manager_id: data.manager_id || data.reports_to || '',
      manager_level: data.manager_level || '',
      director_level: data.director_level || '',
      other_info: data.other_info || ''
    });
    setStatusValue(data.current_status || 'Active');
  };

  const fetchDepartments = async () => {
    const res = await fetch('http://localhost:3001/api/Resource-Manager/departments');
    setDepartments(await res.json());
  };

  const fetchManagers = async () => {
    const res = await fetch('http://localhost:3001/api/Resource-Manager/managers');
    setManagers(await res.json());
  };

  const fetchDirectorLevels = async () => {
    const res = await fetch('http://localhost:3001/api/Resource-Manager/employees');
    const data = await res.json();
    setEmployeesList(data || []);
    const uniqueDirector = [...new Set((data || []).map(e => e.director_level).filter(Boolean))];
    setDirectorLevelOptions(uniqueDirector);
  };

  const getAccTypeId = (manager) => (
    manager?.acc_type_id ?? manager?.account?.acc_type_id ?? manager?.accTypeId
  );

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

  const getEmployeeNameById = (empId) => {
    if (empId === undefined || empId === null || String(empId).trim() === '') return '';
    const match = employeesList.find((emp) => String(emp.emp_id) === String(empId));
    return match ? match.emp_name : String(empId);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:3001/api/Resource-Manager/employees/${empId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    router.back();
  };

  const handleStatusChange = async (status) => {
    await fetch(`http://localhost:3001/api/Resource-Manager/employees/${empId}/status`, {
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
                <option value="" className="text-gray-900 bg-white">Select Department</option>
                {departments.map(d => (
                  <option key={d.dept_no} value={d.dept_no} className="text-gray-900 bg-white">
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
                <option value="" className="text-gray-900 bg-white">Select Manager</option>
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
                  <option key={id} value={id} className="text-gray-900 bg-white">
                    {name}
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
                <option value="" className="text-gray-900 bg-white">Select Manager Level</option>
                {getManagerLevelOptions().map(([id, name]) => (
                  <option key={id} value={id} className="text-gray-900 bg-white">
                    {name}
                  </option>
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
                <option value="" className="text-gray-900 bg-white">Select Director Level</option>
                {getDirectorLevelOptions().map(([id, name]) => (
                  <option key={id} value={id} className="text-gray-900 bg-white">
                    {name}
                  </option>
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
                className={`px-4 py-2 rounded cursor-pointer ${
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
                className={`px-4 py-2 rounded cursor-pointer ${
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
              className="px-4 py-2 bg-gray-200 text-gray-900 rounded cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#017ACB] text-white rounded cursor-pointer"
            >
              Save Changes
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
