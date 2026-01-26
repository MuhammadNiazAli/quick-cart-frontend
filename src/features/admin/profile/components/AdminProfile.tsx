/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, ChangeEvent } from "react";
import {
  useAdminProfile,
} from "@/hooks/admin/useAdminProfile";
import {
  useUpdateAdminProfile,
} from "@/hooks/admin/useUpdateAdminProfile";

interface Profile {
  name: string;
  email: string;
  password: string;
  contact: string;
  role: string;
  image: string;
}

const AdminProfile: React.FC = () => {
  const { data, isLoading } = useAdminProfile();
  const { mutate: updateProfile, isPending } =
    useUpdateAdminProfile();

  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<Profile>({
    name: "",
    email: "",
    password: "",
    contact: "",
    role: "",
    image: "",
  });


  React.useEffect(() => {
    if (!data) return;

    setProfile({
      name: data.name,
      email: data.email,
      password: "",
      contact: data.contact || "",
      role: data.role,
      image: data.avatar || "",
    });
  }, [data]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const preview = URL.createObjectURL(file);
    setProfile((prev) => ({ ...prev, image: preview }));
  };

  const handleSave = () => {
    const payload: {
      name: string;
      contact: string;
      avatar?: string;
      password?: string;
    } = {
      name: profile.name,
      contact: profile.contact,
      avatar: profile.image,
    };

    if (profile.password.trim().length >= 6) {
      payload.password = profile.password;
    }

    updateProfile(payload, {
      onSuccess: () => {
        setProfile((p) => ({ ...p, password: "" }));
        setIsEditing(false);
      },
    });
  };

  if (isLoading) {
    return (
      <div className="p-10 text-center">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="bg-white mt-10 p-6 lg:p-12">
      <div className="max-w-4xl mx-auto bg-white shadow-xl border border-neutral-300 rounded-xl p-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Avatar */}
          <div className="flex flex-col items-center">
            <div className="w-36 h-36 relative">
              <img
                src={profile.image}
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-2 border-orange-400"
              />
              {isEditing && (
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              )}
            </div>
            {isEditing && (
              <span className="mt-2 text-sm text-blue-500">
                Change Photo
              </span>
            )}
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-6">
              Admin Profile
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-600">
                  Name
                </label>
                {isEditing ? (
                  <input
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                  />
                ) : (
                  <p>{profile.name}</p>
                )}
              </div>

              <div>
                <label className="text-sm text-gray-600">
                  Email
                </label>
                <p>{profile.email}</p>
              </div>

              <div>
                <label className="text-sm text-gray-600">
                  New Password
                </label>
                {isEditing ? (
                  <input
                    type="password"
                    name="password"
                    value={profile.password}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                  />
                ) : (
                  <p>********</p>
                )}
              </div>

              <div>
                <label className="text-sm text-gray-600">
                  Contact
                </label>
                {isEditing ? (
                  <input
                    name="contact"
                    value={profile.contact}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                  />
                ) : (
                  <p>{profile.contact}</p>
                )}
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              {isEditing ? (
                <>
                  <button
                    disabled={isPending}
                    onClick={handleSave}
                    className="px-6 py-2 bg-orange-600 text-white rounded"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-6 py-2 bg-gray-300 rounded"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-6 py-2 bg-orange-600 text-white rounded"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;