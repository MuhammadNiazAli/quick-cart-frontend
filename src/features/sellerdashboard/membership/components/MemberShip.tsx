"use client";
import React, { useState } from "react";

type MemberRequest = {
  id: number;
  name: string;
  email: string;
  date: string;
  status: "Pending" | "Accepted" | "Rejected";
};

// Mock data for now
const mockRequests: MemberRequest[] = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoeofficel@gmail.com",
    date: "21/01/2026",
    status: "Pending",
  },
  {
    id: 2,
    name: "Boby obroy",
    email: "jaklinobroy01102@gmail.com",
    date: "20/01/2026",
    status: "Pending",
  },
];

const MemberShip = () => {
  const [requests, setRequests] = useState<MemberRequest[]>(mockRequests);

  // Handle Accept/Reject actions
  const handleAction = (id: number, action: "Accepted" | "Rejected") => {
    setRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: action } : req)),
    );
  };

  return (
    <div className="bg-white -ml-50 lg:ml-0 rounded-lg p-6 mt-5">
      <h2 className="text-xl font-semibold mb-4">Membership Requests</h2>

      <div className="divide-y divide-gray-200 border border-gray-200 rounded-md">
        {requests.map((req) => (
          <div
            key={req.id}
            className="grid grid-cols-1 sm:grid-cols-6 items-center gap-4 p-4"
          >
            <div className="sm:col-span-2 font-medium text-gray-900">
              {req.name}
            </div>

            <div className="sm:col-span-2 text-gray-600">{req.email}</div>

            <div className="sm:col-span-1 text-gray-500">{req.date}</div>

            <div className="sm:col-span-1 flex gap-2 justify-end">
              {req.status === "Pending" ? (
                <>
                  <button
                    onClick={() => handleAction(req.id, "Accepted")}
                    className="px-3 py-1 bg-green-600 text-white text-sm rounded-md hover:bg-green-500 cursor-pointer"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleAction(req.id, "Rejected")}
                    className="px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-500 cursor-pointer"
                  >
                    Reject
                  </button>
                </>
              ) : (
                <span
                  className={`px-3 py-1 text-white text-sm rounded-md cursor-pointer ${
                    req.status === "Accepted" ? "bg-orange-500" : "bg-red-600"
                  }`}
                >
                  {req.status}
                </span>
              )}
            </div>
          </div>
        ))}

        {requests.length === 0 && (
          <div className="p-4 text-gray-500 text-center">
            No membership requests at the moment.
          </div>
        )}
      </div>
    </div>
  );
};

export default MemberShip;
