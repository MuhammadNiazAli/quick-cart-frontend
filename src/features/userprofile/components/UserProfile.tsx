/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect, ChangeEvent, useRef } from "react";
import toast from "react-hot-toast";

interface UserProfileData {
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<UserProfileData>({
    name: "",
    email: "",
    role: "user",
    avatar: "",
  });
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchProfile = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/user/profile", {
        method: "GET",
        credentials: "include",
      });
      if (!res.ok) throw new Error("Failed to fetch profile");

      const data = await res.json();
      setUser(data);
      setName(data.name);
      setAvatarPreview(data.avatar || null);
    } catch (err: any) {
      console.error(err);
      toast.error(err.message || "Error fetching profile");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleEditToggle = () => {
    setEditing(!editing);
  };

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAvatarFile(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const openFilePicker = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", name);
      if (avatarFile) formData.append("avatar", avatarFile);

      const res = await fetch("http://localhost:8000/api/user/profile", {
        method: "PUT",
        body: formData,
        credentials: "include",
      });

      if (!res.ok) throw new Error("Failed to update profile");

      const updatedUser = await res.json();
      setUser(updatedUser);
      setAvatarPreview(updatedUser.avatar || null);
      setEditing(false);
      toast.success("Profile updated successfully!");
    } catch (err: any) {
      console.error(err);
      toast.error(err.message || "Error updating profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white mt-10 p-6 lg:p-12 max-w-3xl mx-auto shadow-xl border border-neutral-300 rounded-xl">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="flex flex-col items-center">
          <div
            className={`w-36 h-36 relative cursor-pointer`}
            onClick={editing ? openFilePicker : undefined}
          >
            <img
              src={avatarPreview || user.avatar || "/assets/default-avatar.png"}
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-2 border-orange-400"
            />
            {editing && (
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                ref={fileInputRef}
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
            )}
          </div>
          {editing && (
            <label
              onClick={openFilePicker}
              className="mt-2 text-sm text-orange-500 cursor-pointer"
            >
              Change Photo
            </label>
          )}
        </div>

        <div className="flex-1 w-full">
          <h2 className="text-2xl font-semibold mb-6">Your Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-600 text-sm mb-1">
                Full Name
              </label>
              {editing ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2 text-gray-900"
                />
              ) : (
                <p className="text-gray-900 font-medium">{user.name}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-600 text-sm mb-1">Email</label>
              <p className="text-gray-900 font-medium">{user.email}</p>
            </div>

            <div>
              <label className="block text-gray-600 text-sm mb-1">Role</label>
              <p className="text-gray-900 font-medium">{user.role}</p>
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            {editing ? (
              <>
                <button
                  onClick={handleSave}
                  disabled={loading}
                  className="px-6 py-2 bg-orange-600 text-white rounded-md cursor-pointer"
                >
                  {loading ? "Saving..." : "Save"}
                </button>
                <button
                  onClick={handleEditToggle}
                  className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md cursor-pointer"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={handleEditToggle}
                className="px-6 py-2 bg-orange-600 text-white rounded-md cursor-pointer"
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
