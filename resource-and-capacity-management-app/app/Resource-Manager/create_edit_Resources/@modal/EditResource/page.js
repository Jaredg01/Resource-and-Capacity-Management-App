'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

const styles = {
  outfitFont: { fontFamily: 'Outfit, sans-serif' }
};

export default function EditResourceModal() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const empId = searchParams.get('id');
  
  const [departments, setDepartments] = useState([]);
  const [managers, setManagers] = useState([]);
  const [directorLevelOptions, setDirectorLevelOptions] = useState([]);
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
     Fetch employee data and lookup tables on mount
  ------------------------------------------------------- */
  useEffect(() => {
    if (empId) {
      fetchEmployee();
      fetchDepartments();
      fetchManagers();
      fetchDirectorLevels();
    }
  }, [empId]);

  const fetchEmployee = async () => {
    try {
      const res = await fetch(`http://localhost:3001/api/Resource-Manager/employees/${empId}`);
      if (res.ok) {
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
      }
    } catch (err) {
      console.error('Error fetching employee:', err);
    }
  };

  const fetchDepartments = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/Resource-Manager/departments');
      if (res.ok) {
        const data = await res.json();
        setDepartments(data);
      }
    } catch (err) {
      console.error('Error fetching departments:', err);
    }
  };

  const fetchManagers = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/Resource-Manager/managers');
      if (res.ok) {
        const data = await res.json();
        setManagers(data);
      }
    } catch (err) {
      console.error('Error fetching managers:', err);
    }
  };

  const fetchDirectorLevels = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/Resource-Manager/employees');
      if (res.ok) {
        const data = await res.json();
        const uniqueLevels = [
          ...new Set(
            (data || [])
              .map((emp) => emp.director_level)
              .filter((level) => level !== undefined && level !== null && String(level).trim() !== '')
          )
        ];
        setDirectorLevelOptions(uniqueLevels);
      }
    } catch (err) {
      console.error('Error fetching director levels:', err);
    }
  };

  /* -------------------------------------------------------
     Handle form submission
  ------------------------------------------------------- */
  const handleEdit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetch(`http://localhost:3001/api/Resource-Manager/employees/${empId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        router.back();
      } else {
        console.error('Failed to update resource');
      }
    } catch (err) {
      console.error('Error updating resource:', err);
    }
  };

  /* -------------------------------------------------------
     Handle status change (Active/Inactive)
  ------------------------------------------------------- */
  const handleStatusChange = async (status) => {
    try {
      const res = await fetch(`http://localhost:3001/api/Resource-Manager/employees/${empId}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });

      if (res.ok) {
        // Update local employee state
        setEmployee({ ...employee, current_status: status });
        setStatusValue(status);
      } else {
        console.error('Failed to update status');
      }
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  const handleCancel = () => {
    router.back();
  };

  if (!employee) {
    return (
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
        onClick={handleCancel}
      >
        <div 
          className="bg-white rounded-lg shadow-xl p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="text-gray-700">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={handleCancel}
    >
      <div 
        className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Title */}
        <h2 className="text-xl font-bold text-gray-900 mb-4" style={styles.outfitFont}>
          Edit Resource
        </h2>

        {/* Edit Form */}
        <form onSubmit={handleEdit} className="space-y-4">

          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" style={styles.outfitFont}>
              Name *
            </label>
            <input
              type="text"
              value={formData.emp_name}
              onChange={(e) => setFormData({ ...formData, emp_name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 text-sm"
              style={styles.outfitFont}
              required
            />
          </div>
          
          {/* Title Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" style={styles.outfitFont}>
              Title *
            </label>
            <input
              type="text"
              value={formData.emp_title}
              onChange={(e) => setFormData({ ...formData, emp_title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 text-sm"
              style={styles.outfitFont}
              required
            />
          </div>

          {/* Department Field (Static) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" style={styles.outfitFont}>
              Department *
            </label>
            <div
              className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 text-sm bg-gray-50"
              style={styles.outfitFont}
            >
              {departments.find((dept) => dept.dept_no === formData.dept_no)?.dept_name ||
                formData.dept_no ||
                '—'}
            </div>
          </div>

          {/* Reports To Field (Account ID = 1) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" style={styles.outfitFont}>
              Reports To
            </label>
            <select
              value={formData.manager_id}
              onChange={(e) => setFormData({ ...formData, manager_id: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 text-sm"
              style={styles.outfitFont}
            >
              <option value="">Select Manager</option>
              {managers
                .filter((manager) => {
                  const accTypeId =
                    manager.acc_type_id ?? manager.account?.acc_type_id ?? manager.accTypeId;
                  if (accTypeId === undefined || accTypeId === null) return false;
                  return String(accTypeId) === '1';
                })
                .map((manager) => (
                  <option key={manager.emp_id} value={manager.emp_id}>
                    {manager.emp_name}
                  </option>
                ))}
            </select>
          </div>

          {/* Manager Level Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" style={styles.outfitFont}>
              Manager Level
            </label>
            <select
              value={formData.manager_level}
              onChange={(e) => setFormData({ ...formData, manager_level: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 text-sm"
              style={styles.outfitFont}
            >
              <option value="">Select Manager Level</option>
              {[...new Set([
                ...MANAGER_LEVEL_OPTIONS,
                formData.manager_level
              ].filter(Boolean))].map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>

          {/* Director Level Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" style={styles.outfitFont}>
              Director Level
            </label>
            <select
              value={formData.director_level}
              onChange={(e) => setFormData({ ...formData, director_level: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 text-sm"
              style={styles.outfitFont}
            >
              <option value="">Select Director Level</option>
              {[...new Set([
                ...directorLevelOptions,
                ...DIRECTOR_LEVEL_OPTIONS,
                formData.director_level
              ].filter(Boolean))].map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>

          {/* Other Information (Comments) Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" style={styles.outfitFont}>
              Other Information (Comments)
            </label>
            <input
              type="text"
              value={formData.other_info}
              onChange={(e) => setFormData({ ...formData, other_info: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded text-gray-700 text-sm"
              style={styles.outfitFont}
            />
          </div>

          {/* Status Radio Buttons */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" style={styles.outfitFont}>
              Status
            </label>
            <div className="flex gap-2">
              <label
                className={`px-3 py-2 rounded text-sm cursor-pointer border ${
                  statusValue === 'Active'
                    ? 'bg-green-600 text-white border-green-600'
                    : 'bg-white text-green-700 border-green-600 hover:bg-green-50'
                }`}
                style={styles.outfitFont}
              >
                <input
                  type="radio"
                  name="status"
                  value="Active"
                  checked={statusValue === 'Active'}
                  onChange={() => handleStatusChange('Active')}
                  className="sr-only"
                />
                Active
              </label>
              <label
                className={`px-3 py-2 rounded text-sm cursor-pointer border ${
                  statusValue === 'Inactive'
                    ? 'bg-red-600 text-white border-red-600'
                    : 'bg-white text-red-700 border-red-600 hover:bg-red-50'
                }`}
                style={styles.outfitFont}
              >
                <input
                  type="radio"
                  name="status"
                  value="Inactive"
                  checked={statusValue === 'Inactive'}
                  onChange={() => handleStatusChange('Inactive')}
                  className="sr-only"
                />
                Inactive
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 text-sm cursor-pointer"
              style={styles.outfitFont}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-[#017ACB] text-white rounded hover:bg-blue-700 text-sm cursor-pointer"
              style={styles.outfitFont}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
