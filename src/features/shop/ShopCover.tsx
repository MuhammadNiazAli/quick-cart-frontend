"use client";

import React, { useEffect, useState } from "react";
import Card from "./components/Shop";
import { products } from "../../../public/assets/cartdata";
import { GetAllProducts } from "@/services/product";
import { error } from "console";

type ShopCoverProps = {
  showTitle?: boolean;
};

type data = {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string | null;
  offer?: number;
  __v?: number;
}

const ShopCover = ({ showTitle = true }: ShopCoverProps) => {
  const [Data, setdata] = useState<data[]>([])
  useEffect(() => {
    const getdata = async () => {
      const data = await GetAllProducts() as data[]
      if (!data || data.length === 0) return console.log('data not fetched');

      setdata(data)
      console.log(data);
    }
    getdata()
  }, [])
  return (
    <section className="w-full flex flex-col items-center justify-center mb-10">
      <div className="w-full max-w-290 px-7.5 mt-8">
        {showTitle && (
          <h2 className="text-[22px] font-medium text-gray-700 mb-5">
            All{" "}<span className="text-orange-500">Pr<span className="border-b-2 border-orange-600">oducts</span></span>
          </h2>
        )}

        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-5 mt-2">
          {Data?.map((item:any) => (
            <Card
              key={item._id}
              id={item._id}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopCover;
