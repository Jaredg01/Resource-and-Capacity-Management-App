"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditAllocationModal() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const emp_name = searchParams.get("emp_name");

  const [loading, setLoading] = useState(true);
  const [employee, setEmployee] = useState(null);
  const [allocations, setAllocations] = useState([]);
  const [assignment, setAssignment] = useState(null);
  const [managers, setManagers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!emp_name) {
      setError("No employee name provided");
      setLoading(false);
      return;
    }

    async function load() {
      try {
        const url = `/api/Resource-Manager/assignments-allocations/getone?emp_name=${encodeURIComponent(emp_name)}`;
        console.log("FETCH URL:", url);

        const res = await fetch(url);
        const json = await res.json();

        console.log("MODAL DATA:", json);

        if (!res.ok) {
          setError(json.error || "Failed to load data");
          return;
        }

        setEmployee(json?.row?.employee || null);
        setAllocations(json?.row?.allocations || []);
        setAssignment(json?.row?.assignment || null);
        setManagers(json?.dropdowns?.managers || []);
      } catch (err) {
        console.error("Modal load error:", err);
        setError("Unexpected error");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [emp_name]);

  // ---------------------------
  // LOADING STATE
  // ---------------------------
  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <div className="bg-white text-black p-6 rounded-lg shadow-xl w-[450px] border border-black">
          Loading…
        </div>
      </div>
    );
  }

  // ---------------------------
  // ERROR STATE
  // ---------------------------
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

  // ---------------------------
  // MAIN MODAL
  // ---------------------------
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