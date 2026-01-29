/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { getAllProducts } from "@/services/product"; // Assuming getAllProducts is exported from the correct path

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
  // State to store products, loading, and error
  const [products, setProducts] = useState<any[]>([]);  // Replace `any` with `Product` type
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getAllProducts();
        setProducts(fetchedProducts);
      } catch (err) {
        setError("Failed to fetch products");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Show loading or error messages if needed
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-white -ml-50 lg:ml-0 rounded-lg border p-4 mt-5">
      <h2 className="text-xl font-semibold mb-4">All Products</h2>

      {/* Table headers */}
      <div className="grid grid-cols-4 text-sm font-medium text-gray-700 border-b pb-3">
        <span>Product</span>
        <span>Category</span>
        <span>Price</span>
        <span className="text-right">Action</span>
      </div>

      {/* Iterate over fetched products */}
      {products.map((item: any) => (  // Use correct type instead of `any`
        <div
          key={item._id}  // Use the product's unique id
          className="grid grid-cols-4 items-center py-5 border-b last:border-none"
        >
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-gray-100 rounded-md flex items-center justify-center">
              <img
                src={item.image}  // Assuming `item.image` is the correct URL string
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
