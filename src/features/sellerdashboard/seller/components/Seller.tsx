/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import { createProduct } from "@/services/product";

import React, { useRef, useState } from "react";

const Seller: React.FC = () => {
  const fileRef = useRef<HTMLInputElement | null>(null);

  // UI preview
  const [image, setImage] = useState<string | null>(null);

  // actual file
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [Title, setTitle] = useState<string>('');
  const [Description, setDescription] = useState<string>('');
  const [Category, setCategory] = useState<string>('Earphone');
  const [Price, setPrice] = useState<number>(0);
  const [Offer, setOffer] = useState<number>(0);
  
  // 🔹 TWO WAY BINDING STATE

  const handleImageClick = () => fileRef.current?.click();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImage(URL.createObjectURL(file));
    setImageFile(file);
  };

  // 🔹 TWO WAY BINDING HANDLER
  

  // 🔹 FORM SUBMIT
  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
        console.log(image);
        const formdata:any=new FormData();
        formdata.append('title',Title);
        formdata.append('price',Price);
        formdata.append('category',Category);
        formdata.append('description',Description);
        formdata.append('image',imageFile)
        formdata.append('offer',Offer)
       await console.log(formdata);
       
        await createProduct(formdata)
        setImage(null)
        setTitle('')
        setPrice(0)
        setCategory('Earphone')
        setOffer(0)
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl -ml-50 lg:ml-0 mt-6 p-5 bg-white"
    >
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
          value={Title}    
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm text-gray-600 mb-1">Description</label>
        <textarea
          name="desc"
          value={Description}     
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm resize-none"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
        <select
          name="category"
          value={Category}    
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
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

        <input
          name="price"
          type="number"
          value={Price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
        />

        <input
          name="offer"
          type="number"
          value={Offer}
          onChange={(e) => setOffer(Number(e.target.value))}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
        />
      </div>

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
