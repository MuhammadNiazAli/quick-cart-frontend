/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef, useState } from "react";
import { createProduct, addFeaturedProduct } from "@/services/product";

const CURRENCIES = [
  "USD",
  "EUR",
  "GBP",
  "JPY",
  "CNY",
  "AED",
  "SAR",
  "PKR",
  "INR",
  "CAD",
];

const CURRENCY_SYMBOL: Record<string, string> = {
  USD: "$",
  EUR: "€",
  GBP: "£",
  JPY: "¥",
  CNY: "¥",
  AED: "د.إ",
  SAR: "﷼",
  PKR: "Rs",
  INR: "₹",
  CAD: "$",
};

const Seller: React.FC = () => {
  const fileRef = useRef<HTMLInputElement | null>(null);

  // image preview
  const [image, setImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  // form fields
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Category, setCategory] = useState("Earphone");

  const [Currency, setCurrency] = useState("PKR");
  const [Price, setPrice] = useState<number>(0);
  const [Offer, setOffer] = useState<number>(0);

  const [Featured, setFeatured] = useState<boolean>(false);

  const handleImageClick = () => fileRef.current?.click();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImage(URL.createObjectURL(file));
    setImageFile(file);
  };

  const normalizePrice = (value: number) => {
    if (isNaN(value) || value < 0) return 0;
    if (value > 1_000_000_000) return 1_000_000_000;
    return value;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!imageFile) {
      alert("Image required");
      return;
    }

    try {
      const formdata = new FormData();
      formdata.append("title", Title);
      formdata.append("description", Description);
      formdata.append("category", Category);
      formdata.append("currency", Currency);
      formdata.append("price", String(Price));
      formdata.append("offer", String(Offer));
      formdata.append("image", imageFile);

      // Create normal product first
      const createdProduct = await createProduct(formdata);

      // If featured checked, mark the product as featured
      if (Featured) {
        await addFeaturedProduct(createdProduct._id); // Call the API to add it to the featured list
      }

      // reset form (same behavior)
      setImage(null);
      setImageFile(null);
      setTitle("");
      setDescription("");
      setCategory("Earphone");
      setCurrency("PKR");
      setPrice(0);
      setOffer(0);
      setFeatured(false);
    } catch (err) {
      console.error("Product create error:", err);
      alert("Failed to create product");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl -ml-50 lg:ml-0 mt-6 p-5 bg-white"
    >
      <h2 className="text-sm font-medium text-gray-600 mb-2">
        Product Image
      </h2>

      {/* Image upload */}
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
          <span className="text-sm text-gray-400">upload</span>
        )}
      </div>

      <input
        ref={fileRef}
        type="file"
        hidden
        accept="image/*"
        onChange={handleImageChange}
      />

      {/* Title */}
      <div className="mt-4">
        <label className="block text-sm text-gray-600 mb-1">
          Product Name
        </label>
        <input
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
        />
      </div>

      {/* Description */}
      <div className="mt-4">
        <label className="block text-sm text-gray-600 mb-1">
          Description
        </label>
        <textarea
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm resize-none"
        />
      </div>

      {/* Category + Currency + Prices */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mt-4">
        <select
          value={Category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm"
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
            <option key={item}>{item}</option>
          ))}
        </select>

        <select
          value={Currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm"
        >
          {CURRENCIES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <input
          type="number"
          value={Price}
          onChange={(e) => setPrice(normalizePrice(Number(e.target.value)))}
          placeholder="Actual price"
          className="border border-gray-300 rounded-md px-3 py-2 text-sm"
        />

        <input
          type="number"
          value={Offer}
          onChange={(e) => setOffer(normalizePrice(Number(e.target.value)))}
          placeholder="Selling price"
          className="border border-gray-300 rounded-md px-3 py-2 text-sm"
        />
      </div>

      {/* Price preview */}
      {Offer >= 0 && (
        <div className="mt-2 text-sm">
          {Price > Offer && (
            <span className="line-through text-gray-400 mr-2">
              {CURRENCY_SYMBOL[Currency]} {Price}
            </span>
          )}
          <span className="text-orange-600 font-semibold">
            {CURRENCY_SYMBOL[Currency]} {Offer}
          </span>
        </div>
      )}

      {/* Featured */}
      <div className="mt-4">
        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            checked={Featured}
            onChange={() => setFeatured(!Featured)}
          />
          Mark as Featured Product
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="mt-5 px-8 bg-orange-600 text-white py-2 rounded-md text-sm hover:bg-orange-500"
      >
        ADD
      </button>
    </form>
  );
};

export default Seller;
