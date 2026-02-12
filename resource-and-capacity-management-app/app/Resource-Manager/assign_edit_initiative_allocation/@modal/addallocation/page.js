"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AddAllocationModal() {
  const router = useRouter();

  const [projects, setProjects] = useState([]);
  const [employees, setEmployees] = useState([]);

  const [selectedProject, setSelectedProject] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState("");

  const [assignmentData, setAssignmentData] = useState(null);
  const [employeeData, setEmployeeData] = useState(null);
  const [managerName, setManagerName] = useState("");
  const [departmentName, setDepartmentName] = useState("");

  const [error, setError] = useState("");

  // Load dropdown data
  useEffect(() => {
    async function load() {
      try {
        const projRes = await fetch(
          "/api/Resource-Manager/assignments-allocations/get-projects"
        );
        const empRes = await fetch(
          "/api/Resource-Manager/assignments-allocations/get-dm-employees"
        );

        const projJson = await projRes.json();
        const empJson = await empRes.json();

        setProjects(projJson.projects || []);
        setEmployees(empJson.employees || []);
      } catch (err) {
        setError("Failed to load dropdown data");
      }
    }

    load();
  }, []);

  // Load assignment when project selected
  useEffect(() => {
    if (!selectedProject) return;

    async function loadAssignment() {
      const res = await fetch(
        `/api/Resource-Manager/assignments-allocations/get-projects?project=${encodeURIComponent(
          selectedProject
        )}`
      );
      const json = await res.json();
      setAssignmentData(json.assignment || null);
    }

    loadAssignment();
  }, [selectedProject]);

  // Load employee + department + manager
  useEffect(() => {
    if (!selectedEmployee) return;

    async function loadEmployee() {
      const res = await fetch(
        `/api/Resource-Manager/assignments-allocations/get-employee?emp_id=${selectedEmployee}`
      );
      const json = await res.json();

      setEmployeeData(json.employee || null);
      setDepartmentName(json.department_name || "");

      if (json.employee?.reports_to) {
        const mgrRes = await fetch(
          `/api/Resource-Manager/assignments-allocations/get-employee?emp_id=${json.employee.reports_to}`
        );
        const mgrJson = await mgrRes.json();
        setManagerName(mgrJson.employee?.emp_name || "");
      }
    }

    loadEmployee();
  }, [selectedEmployee]);

  async function handleSave() {
  if (!selectedProject || !selectedEmployee) {
    setError("Please select both project and employee");
    return;
  }

  const res = await fetch(
    "/api/Resource-Manager/assignments-allocations/add",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        emp_id: Number(selectedEmployee),
        project: selectedProject,
        date: null,
        amount: null
      })
    }
  );

  const json = await res.json();

  if (!res.ok) {
    setError(json.error || "Failed to save allocation");
    return;
  }

  // Close modal
  router.back();

  // Force refresh + redirect to the correct page
  setTimeout(() => {
    router.replace(
      `/Resource-Manager/assign_edit_initiative_allocation?refresh=${Date.now()}`
    );
  }, 100);
}

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white text-black p-6 rounded-lg shadow-xl w-[500px] border border-black">

        <h2 className="text-xl font-bold mb-4">Add Allocation</h2>

        {error && <p className="mb-3 text-red-600 font-semibold">{error}</p>}

        {/* Project Dropdown */}
        <label className="block mb-1 font-semibold">Project</label>
        <select
          className="w-full border border-black rounded px-2 py-1 mb-4 bg-white text-black"
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
        >
          <option value="">-- Choose Project --</option>
          {projects.map((p) => (
            <option key={p.project_name} value={p.project_name}>
              {p.project_name}
            </option>
          ))}
        </select>

        {/* Employee Dropdown */}
        <label className="block mb-1 font-semibold">Employee</label>
        <select
          className="w-full border border-black rounded px-2 py-1 mb-4 bg-white text-black"
          value={selectedEmployee}
          onChange={(e) => setSelectedEmployee(e.target.value)}
        >
          <option value="">-- Choose Employee --</option>
          {employees.map((e) => (
            <option key={e.emp_id} value={e.emp_id}>
              {e.emp_name}
            </option>
          ))}
        </select>

        {/* Auto-populated fields */}
        <div className="space-y-2 mb-4">
          <p><strong>Resource Name:</strong> {employeeData?.emp_name || "—"}</p>
          <p><strong>Department:</strong> {departmentName || "—"}</p>
          <p><strong>Reports To:</strong> {managerName || "—"}</p>

          <p><strong>Activity Category:</strong> {assignmentData?.category || "—"}</p>
          <p><strong>Leader Accountable:</strong> {assignmentData?.leader || "—"}</p>
          <p><strong>Requestor:</strong> {assignmentData?.requestor || "—"}</p>
          <p><strong>Requestor VP:</strong> {assignmentData?.requestor_vp || "—"}</p>
          <p><strong>Requesting Dept:</strong> {assignmentData?.requesting_dept || "—"}</p>
        </div>

        <div className="flex justify-between mt-4">
          <button
            className="px-4 py-2 border border-black text-black rounded hover:bg-black hover:text-white transition"
            onClick={() => router.back()}
          >
            Cancel
          </button>

          <button
            className="px-4 py-2 border border-black text-black rounded hover:bg-black hover:text-white transition"
            onClick={handleSave}
          >
            Save Allocation
          </button>
        </div>

      </div>
    </div>
  );
}