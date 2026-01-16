import React from "react";
import ShopCover from "../../shop/ShopCover";

const HomePopularproduct = () => {
  return (
    <section className="w-full">
      <h2 className="text-[22px] font-medium text-gray-700 px-25 mt-10">
         Popular{" "}Pro
        <span className="border-b-2 border-orange-600">
          ducts
        </span>
      </h2>

      <ShopCover showTitle={false} />
      <div className="w-full h-20 flex justify-center items-center">
        <button className="py-2 px-12 border border-gray-500/20 text-gray-500/80 font-normal cursor-pointer rounded-[5px]">See more</button>
      </div>
    </section>
  );
};

export default HomePopularproduct;
