/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useState } from "react";
import Card from "./components/Shop";
import { getAllProducts } from "@/services/product";

export type Product = {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  offer?: number;
};

type ShopCoverProps = {
  showTitle?: boolean;
};

const ShopCover = ({ showTitle = true }: ShopCoverProps) => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getAllProducts();
        setData(res);
      } catch (error) {
        console.error("Products fetch failed");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="p-10 text-center">Loading products...</div>;
  }

  return (
    <section className="w-full flex flex-col items-center mb-10">
      <div className="w-full max-w-6xl px-6 mt-8">
        {showTitle && (
          <h2 className="text-[22px] font-medium text-gray-700 mb-5">
            All{" "}
            <span className="text-orange-500">
              Pr<span className="border-b-2 border-orange-600">oducts</span>
            </span>
          </h2>
        )}

        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-5">
          {data.map((item) => (
            <Card
              key={item._id}
              id={item._id}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopCover;
