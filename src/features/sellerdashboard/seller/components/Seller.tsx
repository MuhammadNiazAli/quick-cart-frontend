/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef, useState } from "react";

const Seller: React.FC = () => {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    desc: "",
    category: "Earphone",
    price: 0,
    offer: 0,
  });

  const handleImageClick = () => fileRef.current?.click();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(URL.createObjectURL(file));
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = () => {
    console.log({ image, ...form });
  };

  return (
    <div className="max-w-xl -ml-50 lg:ml-0 mt-6 p-5 bg-white">
      <h2 className="text-sm font-medium text-gray-600 mb-2">Product Image</h2>

      <div
        onClick={handleImageClick}
        className="border-2 border-dashed border-gray-300 rounded-lg h-20 w-30 flex items-center justify-center cursor-pointer hover:border-orange-500 transition"
      >
        {image ? (
          <img
            src={image}
            alt="Preview"
            className="h-full w-full object-contain p-2"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3-3 3 3M12 16v6"
              />
            </svg>
            <span className="text-sm">upload</span>
          </div>
        )}
      </div>

      <input
        ref={fileRef}
        type="file"
        hidden
        accept="image/*"
        onChange={handleImageChange}
      />

      <div className="mt-4">
        <label className="block text-sm text-gray-600 mb-1">Product Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Type here"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 outline-none focus:border-orange-500"
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm text-gray-600 mb-1">Description</label>
        <textarea
          name="desc"
          value={form.desc}
          onChange={handleChange}
          rows={4}
          placeholder="Type here"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 outline-none focus:border-orange-500 resize-none"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-orange-500"
          >
            {[
              "Earphone",
              "Headphone",
              "Watch",
              "Smartphone",
              "Laptop",
              "Camera",
              "Accessories",
            ].map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Price</label>
          <input
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Offer</label>
          <input
            name="offer"
            type="number"
            value={form.offer}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-orange-500"
          />
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-5 px-8 bg-orange-600 text-white py-2 rounded-md text-sm hover:bg-orange-500 transition cursor-pointer"
      >
        ADD
      </button>
    </div>
  );
};

export default Seller;
