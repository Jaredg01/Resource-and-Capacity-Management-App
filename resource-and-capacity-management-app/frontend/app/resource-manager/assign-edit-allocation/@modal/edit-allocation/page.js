"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

/* ---------------------------------------------------------
   EDIT ALLOCATION MODAL
   ---------------------------------------------------------
   PURPOSE:
   • Displays allocation details for a selected employee
   • Loads employee, assignment, and allocation metadata
   • Provides a clean, read‑only modal with a Close button
   • Integrates with parallel route modal system

   DESIGN NOTES:
   • No UI changes — layout preserved exactly as provided
   • Fully defensive fetch logic
   • Safe JSON parsing + null guards
   • Consistent with AddAllocationModal + Initiative modals
--------------------------------------------------------- */
export default function EditAllocationModal() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const apiUrl = "http://localhost:3001";

  // Correct param name
  const emp_id = searchParams.get("emp_id");

  /* ---------------------------------------------------------
     STATE
  --------------------------------------------------------- */
  const [loading, setLoading] = useState(true);
  const [employee, setEmployee] = useState(null);
  const [allocations, setAllocations] = useState([]);
  const [assignment, setAssignment] = useState(null);
  const [managers, setManagers] = useState([]);
  const [error, setError] = useState(null);

  /* ---------------------------------------------------------
     LOAD ALLOCATION DETAILS
  --------------------------------------------------------- */
  useEffect(() => {
    if (!emp_id) {
      setError("No employee ID provided");
      setLoading(false);
      return;
    }

    async function load() {
      try {
        const res = await fetch(`${apiUrl}/api/assignments-allocations/${emp_id}`);

        const json = await res.json();

        if (!res.ok) {
          setError(json.error || "Failed to load data");
          return;
        }

        // Expected backend response shape
        setEmployee(json.row.employee || null);
        setAllocations(json.row.allocations || []);
        setAssignment(json.row.assignment || null);
        setManagers(json.dropdowns.managers || []);

      } catch (err) {
        console.error("Modal load error:", err);
        setError("Unexpected error");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [emp_id]);

  /* ---------------------------------------------------------
     LOADING STATE
  --------------------------------------------------------- */
  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <div className="bg-white text-black p-6 rounded-lg shadow-xl w-[450px] border border-black">
          Loading…
        </div>
      </div>
    );
  }

  /* ---------------------------------------------------------
     ERROR STATE
  --------------------------------------------------------- */
  if (error || !employee) {
    return (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <div className="bg-white text-black p-6 rounded-lg shadow-xl w-[450px] border border-black">
          <h2 className="text-xl font-bold mb-4">Error</h2>
          <p>{error || "No employee data returned"}</p>

          <button
            className="mt-4 px-4 py-2 border border-black text-black rounded hover:bg-black hover:text-white transition"
            onClick={() => router.back()}
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  /* ---------------------------------------------------------
     MODAL UI
  --------------------------------------------------------- */
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white text-black p-6 rounded-lg shadow-xl w-[450px] border border-black">

        <h2 className="text-xl font-bold mb-4">
          Edit Allocation — {employee.emp_name}
        </h2>

        <div className="mb-4 space-y-1">
          <p><strong>Department:</strong> {assignment?.department || "N/A"}</p>
          <p><strong>Requesting Dept:</strong> {assignment?.requesting_dept || "N/A"}</p>
          <p><strong>Project:</strong> {allocations[0]?.activity || "N/A"}</p>
        </div>

        <button
          className="px-4 py-2 border border-black text-black rounded hover:bg-black hover:text-white transition"
          onClick={() => router.back()}
        >
          Close
        </button>

      </div>
    </div>
  );
}