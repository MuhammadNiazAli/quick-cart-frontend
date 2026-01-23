/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect, ChangeEvent } from "react";

interface Profile {
  name: string;
  email: string;
  password: string;
  contact: string;
  role: string;
  image: string;
}

const AdminProfile: React.FC = () => {
  const [profile, setProfile] = useState<Profile>({
    name: "",
    email: "",
    password: "",
    contact: "",
    role: "",
    image: "",
  });

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/admin/me`,
          {
            method: "GET",
            credentials: "include",
          },
        );

        if (!res.ok) {
          throw new Error("Failed to fetch profile");
        }

        const data = await res.json();

        setProfile({
          name: data.name,
          email: data.email,
          password: "",
          contact: data.contact || "",
          role: data.role,
          image: data.avatar || "",
        });
      } catch (err) {
        console.error(err);
        alert("Unable to load admin profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setProfile((prev) => ({ ...prev, image: preview }));
    }
  };

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleSave = async () => {
    try {
      const payload: any = {
        name: profile.name,
        contact: profile.contact,
        avatar: profile.image,
      };

      if (profile.password.trim().length >= 6) {
        payload.password = profile.password;
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/me`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(payload),
        },
      );

      if (!res.ok) {
        throw new Error("Update failed");
      }

      const result = await res.json();

      setProfile((prev) => ({
        ...prev,
        password: "",
        name: result.data.name,
        contact: result.data.contact,
        image: result.data.avatar,
      }));

      alert("Profile updated successfully");
      setIsEditing(false);
    } catch (err) {
      console.error(err);
      alert("Failed to update profile");
    }
  };

  if (loading) {
    return <div className="p-10 text-center">Loading profile...</div>;
  }

  return (
    <div className="bg-white mt-10 p-6 lg:p-12">
      <div className="max-w-4xl mx-auto bg-white shadow-xl border border-neutral-300 rounded-xl p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
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
              <span className="mt-2 text-sm text-blue-500 cursor-pointer">
                Change Photo
              </span>
            )}
          </div>

          <div className="flex-1 w-full">
            <h2 className="text-2xl font-semibold mb-6">Admin Profile</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-600 text-sm mb-1">Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                ) : (
                  <p className="font-medium">{profile.name}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-600 text-sm mb-1">
                  Email
                </label>
                <p className="font-medium">{profile.email}</p>
              </div>

              <div>
                <label className="block text-gray-600 text-sm mb-1">
                  New Password
                </label>
                {isEditing ? (
                  <input
                    type="password"
                    name="password"
                    value={profile.password}
                    onChange={handleChange}
                    placeholder="Leave blank to keep current"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                ) : (
                  <p className="font-medium">********</p>
                )}
              </div>

              <div>
                <label className="block text-gray-600 text-sm mb-1">
                  Contact No
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="contact"
                    value={profile.contact}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                ) : (
                  <p className="font-medium">{profile.contact}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-600 text-sm mb-1">Role</label>
                <p className="font-medium">{profile.role}</p>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              {isEditing ? (
                <>
                  <button
                    onClick={handleSave}
                    className="px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-500"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleEditToggle}
                    className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={handleEditToggle}
                  className="px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-500"
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
