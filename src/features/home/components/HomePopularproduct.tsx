import React from "react";
import ShopCover from "../../shop/ShopCover";

const HomePopularproduct = () => {
  return (
    <section className="w-full">
      <h2 className="text-[22px] font-medium text-gray-700 px-25 mt-10">
         Popular{" "}<span className="text-orange-500">Pr<span className="border-b-2 border-orange-600">oducts</span></span>
      </h2>
      
      <ShopCover showTitle={false} />
      <div className="w-full h-20 flex justify-center items-center">
        <button className="py-2 px-12 text-white font-normal cursor-pointer bg-orange-600 rounded-full hover:bg-orange-500 hover:scale-102">See more</button>
      </div>
    </section>
  );
};

export default HomePopularproduct;
