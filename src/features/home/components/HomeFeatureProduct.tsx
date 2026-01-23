// HomeFeatureProduct.tsx
"use client";

import FeatureCard from "../FeatureCart";
import { featureCardsData } from "../featureData"; 

const HomeFeatureProduct = () => {
  return (
    <section className="w-full mb-10">
      <div className="max-w-250 mx-auto px-7.5">
        <div className="text-center pt-10">
          <h2 className="text-[#374151] text-[30px] font-medium">
            Featured <span className="text-orange-500">Products</span>
          </h2>
          <div className="mt-1 flex justify-center">
            <span className="h-0.5 w-28.5 bg-orange-600" />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featureCardsData.map((card, index) => (
            <FeatureCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatureProduct;
