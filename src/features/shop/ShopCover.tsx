"use client";

import React from "react";
import Card from "./components/Shop";
import { products } from "../../../public/assets/cartdata";

type ShopCoverProps = {
  showTitle?: boolean;
};

const ShopCover = ({ showTitle = true }: ShopCoverProps) => {
  return (
    <section className="w-full flex flex-col items-center justify-center mb-10">
      <div className="w-full max-w-290 px-7.5 mt-8">
        {showTitle && (
          <h2 className="text-[22px] font-medium text-gray-700 mb-5">
         All{" "}<span className="text-orange-500">Pr<span className="border-b-2 border-orange-600">oducts</span></span>
      </h2>
        )}

        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-5 mt-2">
          {products.map((item) => (
            <Card
              key={item.id}        
              id={item.id}          
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
