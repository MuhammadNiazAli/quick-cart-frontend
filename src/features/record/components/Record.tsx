"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type RecordItem = {
  _id: string;
  requestedRole: "viewer" | "partner";
  status: "pending" | "accepted" | "rejected";
  message: string;
  createdAt: string;
};

const statusStyles: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-700",
  accepted: "bg-green-100 text-green-700",
  rejected: "bg-red-100 text-red-700",
};

const Record = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  const [openId, setOpenId] = useState<string | null>(null);
  const router = useRouter();

  const fetchRecords = async () => {
    try {
      const res = await fetch(
        "http://localhost:8000/api/membership/my-records",
        {
          credentials: "include",
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to fetch records");
      }

      setRecords(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div className="bg-white p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">Your Records</h1>

        <div className="space-y-4">
          {records.map((rec) => {
            const isApproved = rec.status === "accepted";

            return (
              <div
                key={rec._id}
                className="bg-white p-5 rounded-xl shadow-sm border"
              >
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600">Role Requested</p>
                    <p className="text-lg font-medium">
                      {rec.requestedRole}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm text-gray-600">Status</p>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${statusStyles[rec.status]}`}
                    >
                      {rec.status}
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() =>
                        setOpenId(openId === rec._id ? null : rec._id)
                      }
                      className="px-4 py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-500 transition"
                    >
                      {openId === rec._id ? "Hide Details" : "More Details"}
                    </button>

                    <button
                      disabled={!isApproved}
                      onClick={() => router.push("/access/account")}
                      className={`px-4 py-2 rounded-lg font-medium transition
                        ${
                          isApproved
                            ? "bg-green-600 text-white hover:bg-green-500"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }
                      `}
                    >
                      Create Account
                    </button>
                  </div>
                </div>

                {openId === rec._id && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg text-sm text-gray-700 border">
                    <p>
                      <b>Requested on:</b>{" "}
                      {new Date(rec.createdAt).toLocaleString()}
                    </p>
                    <p className="mt-2">
                      <b>Message:</b> {rec.message}
                    </p>
                  </div>
                )}
              </div>
            );
          })}

          {records.length === 0 && (
            <div className="text-center text-gray-500">
              No membership requests found.
            </div>
          )}
        </div>

        <div className="mt-8">
          <Link href="/">
            <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition">
              ← Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Record;
