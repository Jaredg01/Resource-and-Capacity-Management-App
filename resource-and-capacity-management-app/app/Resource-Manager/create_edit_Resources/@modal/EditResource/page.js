'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function EditResourceModal() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const empId = searchParams.get('id');

  const [departments, setDepartments] = useState([]);
  const [managers, setManagers] = useState([]);
  const [employee, setEmployee] = useState(null);

  const [formData, setFormData] = useState({
    emp_name: '',
    emp_title: '',
    dept_no: '',
    manager_id: '',
    director_id: '',
    other_info: ''
  });

  /* -------------------------------------------------------
     Fetch data
  ------------------------------------------------------- */
  useEffect(() => {
    if (empId) {
      fetchEmployee();
      fetchDepartments();
      fetchManagers();
    }
  }, [empId]);

  const fetchEmployee = async () => {
    const res = await fetch(
      `http://localhost:3001/api/Resource-Manager/employees/${empId}`
    );
    const data = await res.json();
    setEmployee(data);
    setFormData({
      emp_name: data.emp_name || '',
      emp_title: data.emp_title || '',
      dept_no: data.dept_no || '',
      manager_id: data.manager_id || '',
      director_id: data.director_id || '',
      other_info: data.other_info || ''
    });
  };

  const fetchDepartments = async () => {
    const res = await fetch(
      'http://localhost:3001/api/Resource-Manager/departments'
    );
    setDepartments(await res.json());
  };

  const fetchManagers = async () => {
    const res = await fetch(
      'http://localhost:3001/api/Resource-Manager/managers'
    );
    setManagers(await res.json());
  };

  /* -------------------------------------------------------
     Submit
  ------------------------------------------------------- */
  const handleEdit = async (e) => {
    e.preventDefault();

    await fetch(
      `http://localhost:3001/api/Resource-Manager/employees/${empId}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      }
    );

    router.back();
  };

  if (!employee) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-black">
          Edit Resource
        </h2>

        <form onSubmit={handleEdit}>
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

            {/* DIRECTOR LEVEL */}
            <div className="flex flex-col">
              <label className="text-xs mb-1 text-black font-semibold">
                Director Level
              </label>
              <select
                value={formData.director_id}
                onChange={(e) =>
                  setFormData({ ...formData, director_id: e.target.value })
                }
                className="border p-2 rounded text-black font-medium"
              >
                <option value="">Select Director</option>
                {managers.map((m) => (
                  <option key={m.emp_id} value={m.emp_id}>
                    {m.emp_name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* OTHER INFO */}
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
            />
          </div>

          {/* BUTTONS */}
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
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
