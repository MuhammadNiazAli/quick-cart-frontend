"use client";

import React, { useEffect, useState } from "react";

type MemberRequest = {
  _id: string;
  user: {
    name: string;
    email: string;
  } | null;
  requestedRole: "viewer" | "partner";
  message: string;
  createdAt: string;
  status: "pending" | "accepted" | "rejected";
};

const MemberShip = () => {
  const [requests, setRequests] = useState<MemberRequest[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchRequests = async () => {
    try {
      setLoading(true);

      const res = await fetch("http://localhost:8000/api/membership", {
        method: "GET",
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to fetch requests");
      }

      setRequests(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async (id: string, action: "accepted" | "rejected") => {
    try {
      const res = await fetch(`http://localhost:8000/api/membership/${id}`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: action }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Action failed");
      }

      setRequests((prev) =>
        prev.map((req) => (req._id === id ? { ...req, status: action } : req)),
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className="bg-white -ml-50 lg:ml-0 rounded-lg p-6 mt-5">
      <h2 className="text-xl font-semibold mb-4">Membership Requests</h2>

      {loading && <div className="text-gray-500 mb-4">Loading requests...</div>}

      <div className="divide-y divide-gray-200 border border-gray-200 rounded-md">
        {requests.map((req) => (
          <div key={req._id} className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-6 items-center gap-4">
              <div className="sm:col-span-2 font-medium text-gray-900">
                {req.user?.name || "Unknown User"}
              </div>

              <div className="sm:col-span-2 text-gray-600">
                {req.user?.email || "N/A"}
              </div>

              <div className="sm:col-span-1 text-gray-500">
                {new Date(req.createdAt).toLocaleDateString()}
              </div>

              <div className="sm:col-span-1 flex gap-2 justify-end">
                {req.status === "pending" ? (
                  <>
                    <button
                      onClick={() => handleAction(req._id, "accepted")}
                      className="px-3 py-1 bg-green-600 text-white text-sm rounded-md hover:bg-green-500 cursor-pointer"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleAction(req._id, "rejected")}
                      className="px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-500 cursor-pointer"
                    >
                      Reject
                    </button>
                  </>
                ) : (
                  <span
                    className={`px-3 py-1 text-white text-sm rounded-md ${
                      req.status === "accepted" ? "bg-orange-500" : "bg-red-600"
                    }`}
                  >
                    {req.status}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-3 p-3 bg-gray-50 rounded-md border text-sm text-gray-700">
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <p>
                  <span className="font-semibold">Requested Role:</span>{" "}
                  {req.requestedRole}
                </p>
                <p className="w-full">
                  <span className="font-semibold">Message:</span>{" "}
                  {req.message || "—"}
                </p>
              </div>
            </div>
          </div>
        ))}

        {!loading && requests.length === 0 && (
          <div className="p-4 text-gray-500 text-center">
            No membership requests at the moment.
          </div>
        )}
      </div>
    </div>
  );
};

export default MemberShip;
