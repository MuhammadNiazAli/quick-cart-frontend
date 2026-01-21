"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const records = [
  {
    id: 1,
    role: "Partner",
    status: "pending",
    details: "Requested partnership on 21-Jan-2026",
  },
  {
    id: 2,
    role: "Viewer",
    status: "accepted",
    details: "Viewer access granted on 20-Jan-2026",
  },
];

const statusStyles: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-700",
  accepted: "bg-green-100 text-green-700",
  rejected: "bg-red-100 text-red-700",
};

const Record = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const router = useRouter();

  return (
    <div className="bg-white p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">Your Records</h1>

        <div className="space-y-4">
          {records.map((rec) => {
            const isApproved = rec.status === "accepted";

            return (
              <div
                key={rec.id}
                className="bg-white p-5 rounded-xl shadow-sm border"
              >
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600">Role</p>
                    <p className="text-lg font-medium">{rec.role}</p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm text-gray-600">Status</p>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${statusStyles[rec.status]}`}
                    >
                      {rec.status === "pending" && "Pending"}
                      {rec.status === "accepted" && "Accepted"}
                      {rec.status === "rejected" && "Rejected"}
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() =>
                        setOpenId(openId === rec.id ? null : rec.id)
                      }
                      className="px-4 py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-500 transition cursor-pointer"
                    >
                      {openId === rec.id ? "Hide Details" : "More Details"}
                    </button>

                    <button
                      disabled={!isApproved}
                      onClick={() => router.push("/access/account")}
                      className={`px-4 py-2 rounded-lg font-medium transition
                        ${
                          isApproved
                            ? "bg-green-600 text-white hover:bg-green-500 cursor-pointer"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }
                      `}
                    >
                      Create Account
                    </button>
                  </div>
                </div>

                {openId === rec.id && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg text-sm text-gray-700 border">
                    {rec.details}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8">
          <Link href="/">
            <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition cursor-pointer">
              ← Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Record;
