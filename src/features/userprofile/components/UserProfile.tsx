/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, ChangeEvent, useRef } from "react";
import toast from "react-hot-toast";
import { useUserProfile } from "@/hooks/user/useUserProfile";
import { useUpdateUserProfile } from "@/hooks/user/useUpdateUserProfile";

const UserProfile: React.FC = () => {
  const { data, isLoading } = useUserProfile();
  const { mutate: updateProfile, isPending } = useUpdateUserProfile();

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

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

  if (isLoading) {
    return <div className="p-10 text-center">Loading profile...</div>;
  }

  return (
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
                avatarPreview ||
                data?.avatar ||
                "/assets/default-avatar.png"
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

        {/* Details */}
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

          <div className="mt-6 flex gap-4">
            {editing ? (
              <>
                <button
                  disabled={isPending}
                  onClick={handleSave}
                  className="px-6 py-2 bg-orange-600 text-white rounded"
                >
                  {isPending ? "Saving..." : "Save"}
                </button>
                <button
                  onClick={cancelEditing}
                  className="px-6 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={startEditing}
                className="px-6 py-2 bg-orange-600 text-white rounded"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
