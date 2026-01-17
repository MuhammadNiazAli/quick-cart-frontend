/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { Star } from "lucide-react";

type Product = {
  id: string;
  name: string;
  image: string;
  price: string;
  rating: number; // 1-5
};

const mockProducts: Product[] = [
  {
    id: "prod-001",
    name: "Wireless Headphones",
    image: "https://via.placeholder.com/300x300.png?text=Headphones",
    price: "$120.00",
    rating: 5,
  },
  {
    id: "prod-002",
    name: "Smartwatch Series 7",
    image: "https://via.placeholder.com/300x300.png?text=Smartwatch",
    price: "$250.00",
    rating: 4,
  },
  {
    id: "prod-003",
    name: "Gaming Laptop",
    image: "https://via.placeholder.com/300x300.png?text=Laptop",
    price: "$1,450.00",
    rating: 5,
  },
  {
    id: "prod-004",
    name: "Bluetooth Speaker",
    image: "https://via.placeholder.com/300x300.png?text=Speaker",
    price: "$75.00",
    rating: 4,
  },
  {
    id: "prod-005",
    name: "Portable Charger",
    image: "https://via.placeholder.com/300x300.png?text=Charger",
    price: "$35.00",
    rating: 4,
  },
  {
    id: "prod-006",
    name: "Action Camera",
    image: "https://via.placeholder.com/300x300.png?text=Camera",
    price: "$300.00",
    rating: 5,
  },
];

const ProductList: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Products
          </h2>
          <p className="mt-3 text-gray-600">
            Explore our collection of premium products curated just for you.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {mockProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-4 flex flex-col"
            >
              {/* Image */}
              <div className="w-full h-48 flex items-center justify-center mb-4 overflow-hidden rounded-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col grow">
                <h3 className="text-gray-900 font-semibold text-sm md:text-base mb-1">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < product.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-gray-900 font-medium mb-3">{product.price}</p>

                <button className="mt-auto w-full bg-orange-600 text-white text-sm font-semibold py-2 rounded-full hover:bg-orange-500 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
