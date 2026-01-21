/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, ChangeEvent } from "react";

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
    name: "Admin User",
    email: "admin@example.com",
    password: "********",
    contact: "+91 9876543210",
    role: "Administrator",
    image: "/assets/box_icon.svg",
  });

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfile((prev) => ({
        ...prev,
        image: URL.createObjectURL(file),
      }));
    }
  };

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile updated successfully!");
    
  };

  return (
    <div className=" bg-white mt-10 p-6 lg:p-12">
      <div className="max-w-4xl mx-auto bg-white shadow-xl border border-neutral-300 rounded-xl p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
         
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
                  className="absolute bottom-0 right-0 w-10 h-10 opacity-0 cursor-pointer"
                />
              )}
            </div>
            {isEditing && (
              <label className="mt-2 text-sm text-blue-500 cursor-pointer">
                Change Photo
              </label>
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
                  <p className="text-gray-900 font-medium">{profile.name}</p>
                )}
              </div>

              
              <div>
                <label className="block text-gray-600 text-sm mb-1">Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                ) : (
                  <p className="text-gray-900 font-medium">{profile.email}</p>
                )}
              </div>

            
              <div>
                <label className="block text-gray-600 text-sm mb-1">Password</label>
                {isEditing ? (
                  <input
                    type="password"
                    name="password"
                    value={profile.password}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                ) : (
                  <p className="text-gray-900 font-medium">{profile.password}</p>
                )}
              </div>

   
              <div>
                <label className="block text-gray-600 text-sm mb-1">Contact No</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="contact"
                    value={profile.contact}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2 "
                  />
                ) : (
                  <p className="text-gray-900 font-medium">{profile.contact}</p>
                )}
              </div>

         
              <div>
                <label className="block text-gray-600 text-sm mb-1">Role</label>
                {isEditing ? (
                  <select
                    name="role"
                    value={profile.role}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                  >
                    <option>Administrator</option>
                    <option>Editor</option>
                    <option>Viewer</option>
                  </select>
                ) : (
                  <p className="text-gray-900 font-medium">{profile.role}</p>
                )}
              </div>
            </div>

          
            <div className="mt-6 flex gap-4">
              {isEditing ? (
                <>
                  <button
                    onClick={handleSave}
                    className="px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-500 transition cursor-pointer"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleEditToggle}
                    className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-200 transition cursor-pointer"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={handleEditToggle}
                  className="px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-500 transition cursor-pointer"
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
