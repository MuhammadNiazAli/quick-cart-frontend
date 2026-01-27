/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, ChangeEvent, useRef } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { useUserProfile } from "@/hooks/user/useUserProfile";
import { useUpdateUserProfile } from "@/hooks/user/useUpdateUserProfile";
import { useAuthMutation } from "@/hooks/auth/useAuthMutation";

const UserProfile: React.FC = () => {
  const router = useRouter();

  const { data, isLoading } = useUserProfile();
  const { mutate: updateProfile, isPending } = useUpdateUserProfile();
  const { logoutMutation } = useAuthMutation();

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const startEditing = () => {
    if (!data) return;
    setName(data.name);
    setAvatarPreview(data.avatar || null);
    setEditing(true);
  };

  const cancelEditing = () => {
    setEditing(false);
    setAvatarFile(null);
    setAvatarPreview(null);
  };

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    const file = e.target.files[0];
    setAvatarFile(file);
    setAvatarPreview(URL.createObjectURL(file));
  };

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  const handleSave = () => {
    const formData = new FormData();
    formData.append("name", name);
    if (avatarFile) formData.append("avatar", avatarFile);

    updateProfile(formData, {
      onSuccess: () => {
        setEditing(false);
        setAvatarFile(null);
        toast.success("Profile updated successfully!");
      },
      onError: (err: any) => {
        toast.error(err?.message || "Error updating profile");
      },
    });
  };

  const handleLogout = () => {
    logoutMutation.mutate(undefined, {
      onSuccess: () => {
        toast.success("Logged out successfully");
        router.push("/account");
      },
      onError: (err: any) => {
        toast.error(err?.message || "Logout failed");
      },
      onSettled: () => {
        setShowLogoutModal(false);
      },
    });
  };

  if (isLoading) {
    return <div className="p-10 text-center">Loading profile...</div>;
  }

  return (
    <>
      <div className="bg-white mt-10 p-6 lg:p-12 max-w-3xl mx-auto shadow-xl border border-neutral-300 rounded-xl">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Avatar */}
          <div className="flex flex-col items-center">
            <div
              className="w-36 h-36 relative cursor-pointer"
              onClick={editing ? openFilePicker : undefined}
            >
              <img
                src={
                  avatarPreview || data?.avatar || "/assets/default-avatar.png"
                }
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-2 border-orange-400"
              />
              {editing && (
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              )}
            </div>

            {editing && (
              <span
                onClick={openFilePicker}
                className="mt-2 text-sm text-orange-500 cursor-pointer"
              >
                Change Photo
              </span>
            )}
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-6">Your Profile</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-600">Full Name</label>
                {editing ? (
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border p-2 rounded"
                  />
                ) : (
                  <p className="font-medium">{data?.name}</p>
                )}
              </div>

              <div>
                <label className="text-sm text-gray-600">Email</label>
                <p className="font-medium">{data?.email}</p>
              </div>

              <div>
                <label className="text-sm text-gray-600">Role</label>
                <p className="font-medium">{data?.role}</p>
              </div>
            </div>

            <div className="mt-6 flex justify-between items-center">
              {editing ? (
                <div className="flex gap-4">
                  <button
                    disabled={isPending}
                    onClick={handleSave}
                    className="px-6 py-2 bg-orange-600 text-white rounded cursor-pointer"
                  >
                    {isPending ? "Saving..." : "Save"}
                  </button>
                  <button
                    onClick={cancelEditing}
                    className="px-6 py-2 bg-gray-300 rounded cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={startEditing}
                  className="px-6 py-2 bg-orange-600 text-white rounded cursor-pointer"
                >
                  Edit Profile
                </button>
              )}

              <button
                onClick={() => setShowLogoutModal(true)}
                className="px-6 py-2 bg-orange-500 text-white rounded cursor-pointer"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Confirm Logout
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Are you sure you want to logout?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 bg-gray-200 rounded cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                disabled={logoutMutation.isPending}
                className="px-4 py-2 bg-orange-500 text-white rounded cursor-pointer disabled:opacity-70"
              >
                {logoutMutation.isPending ? "Logging out..." : "Logout"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfile;
