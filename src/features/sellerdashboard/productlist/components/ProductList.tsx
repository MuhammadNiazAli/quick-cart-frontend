/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { products } from "../../../../../public/assets/cartdata";

const getCategory = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("ear") || t.includes("airpods") || t.includes("bose"))
    return "Headphone";
  if (t.includes("galaxy")) return "Smartphone";
  if (t.includes("macbook") || t.includes("asus")) return "Laptop";
  if (t.includes("playstation")) return "Accessories";
  if (t.includes("camera")) return "Camera";
  if (t.includes("watch") || t.includes("venu")) return "Watch";
  if (t.includes("projector")) return "Accessories";
  return "Accessories";
};

const ProductList = () => {
  return (
    <div className="bg-white rounded-lg border p-4 mt-5">
      {/* Title */}
      <h2 className="text-xl font-semibold mb-4">All Product</h2>

      {/* Header */}
      <div className="grid grid-cols-4 text-sm font-medium text-gray-700 border-b pb-3">
        <span>Product</span>
        <span>Category</span>
        <span>Price</span>
        <span className="text-right">Action</span>
      </div>

      {/* Rows */}
      {products.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-4 items-center py-5 border-b last:border-none"
        >
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-gray-100 rounded-md flex items-center justify-center">
              <img
                src={item.image.src}
                alt={item.title}
                className="w-10 object-contain"
              />
            </div>
            <span className="text-sm text-gray-700">{item.title}</span>
          </div>

          <span className="text-sm text-gray-600">
            {getCategory(item.title)}
          </span>

          <span className="text-sm text-gray-600">${item.price}</span>

          <div className="flex justify-end">
            <button className="bg-orange-600 text-white text-sm px-4 py-2 rounded-md flex items-center gap-2 hover:bg-orange-500">
              Visit
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 3h7v7M10 14L21 3M5 7v14h14"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
