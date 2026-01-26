"use client";

import React from "react";
import { useMembershipRequests } from "@/hooks/membership/membership_request_status/useMembershipRequests";
import { useUpdateMembershipStatus } from "@/hooks/membership/membership_request_status/useUpdateMembershipStatus";

const MemberShip = () => {
  const {
    data: requests = [],
    isLoading,
  } = useMembershipRequests();

  const {
    mutate: updateStatus,
    isPending,
  } = useUpdateMembershipStatus();

  return (
    <div className="bg-white -ml-50 lg:ml-0 rounded-lg p-6 mt-5">
      <h2 className="text-xl font-semibold mb-4">
        Membership Requests
      </h2>

      {isLoading && (
        <div className="text-gray-500 mb-4">
          Loading requests...
        </div>
      )}

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
                      disabled={isPending}
                      onClick={() =>
                        updateStatus({
                          id: req._id,
                          status: "accepted",
                        })
                      }
                      className="px-3 py-1 bg-green-600 text-white text-sm rounded-md hover:bg-green-500 disabled:opacity-50"
                    >
                      Accept
                    </button>

                    <button
                      disabled={isPending}
                      onClick={() =>
                        updateStatus({
                          id: req._id,
                          status: "rejected",
                        })
                      }
                      className="px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-500 disabled:opacity-50"
                    >
                      Reject
                    </button>
                  </>
                ) : (
                  <span
                    className={`px-3 py-1 text-white text-sm rounded-md ${
                      req.status === "accepted"
                        ? "bg-orange-500"
                        : "bg-red-600"
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
                  <span className="font-semibold">
                    Requested Role:
                  </span>{" "}
                  {req.requestedRole}
                </p>

                <p className="w-full">
                  <span className="font-semibold">
                    Message:
                  </span>{" "}
                  {req.message || "—"}
                </p>
              </div>
            </div>
          </div>
        ))}

        {!isLoading && requests.length === 0 && (
          <div className="p-4 text-gray-500 text-center">
            No membership requests at the moment.
          </div>
        )}
      </div>
    </div>
  );
};

export default MemberShip;
