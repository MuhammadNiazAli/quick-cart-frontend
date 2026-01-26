/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useInformAdmin } from "@/hooks/membership/member_model_inform/useInformAdmin";

interface MembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
  membership: {
    role: "Admin" | "Partner";
    status: "accepted" | "rejected" | "pending";
  };
}

const MembershipModal: React.FC<MembershipModalProps> = ({
  isOpen,
  onClose,
  membership,
}) => {
  const [message, setMessage] = useState("");
  const [role, setRole] = useState<"viewer" | "partner">("viewer");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const { mutate: informAdmin, isPending } = useInformAdmin();
  const router = useRouter();

  const handleSubmit = () => {
    if (!message.trim()) {
      setToastMessage("Please enter a message before submitting.");
      setTimeout(() => setToastMessage(null), 3000);
      return;
    }

    informAdmin(
      { role, message },
      {
        onSuccess: () => {
          setToastMessage("Request sent to admin successfully.");
          setMessage("");
          setTimeout(() => setToastMessage(null), 3000);
        },
        onError: (error: any) => {
          setToastMessage(error?.message || "Something went wrong");
          setTimeout(() => setToastMessage(null), 3000);
        },
      }
    );
  };

  const handleViewRecord = () => {
    onClose();
    router.push("/record");
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-40 px-4">
        <div className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6 relative">
          <h2 className="text-xl font-semibold mb-2">
            Partner with Us
          </h2>

          <p className="text-sm text-gray-600 mb-4">
            Your current status:{" "}
            <span className="font-medium">
              {membership.role} - {membership.status}
            </span>
          </p>

          {/* Role selection */}
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Select Your Role
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setRole("viewer")}
                className={`flex-1 py-2 rounded-lg border font-semibold transition
                  ${
                    role === "viewer"
                      ? "bg-orange-600 text-white border-orange-600"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
              >
                Viewer
              </button>

              <button
                onClick={() => setRole("partner")}
                className={`flex-1 py-2 rounded-lg border font-semibold transition
                  ${
                    role === "partner"
                      ? "bg-orange-600 text-white border-orange-600"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
              >
                Partner
              </button>
            </div>
          </div>

          <p className="mb-4 text-gray-700 text-sm">
            Send a request to admin for partnership approval.
          </p>

          <textarea
            placeholder="Write your message to admin..."
            className="w-full border border-gray-300 rounded-md p-3 mb-4 resize-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
          />

          <button
            onClick={handleSubmit}
            disabled={isPending}
            className="w-full px-5 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-500 transition mb-3 disabled:opacity-60"
          >
            {isPending ? "Sending..." : "Inform Admin"}
          </button>

          <button
            onClick={handleViewRecord}
            className="w-full px-5 py-2 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            View Your Record
          </button>

          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            ✖
          </button>
        </div>
      </div>

      {toastMessage && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white text-black px-6 py-3 rounded-lg shadow-xl border">
          {toastMessage}
        </div>
      )}
    </>
  );
};

export default MembershipModal;
