/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Star, Users } from "lucide-react";

type SellerData = {
  name: string;
  products: number;
  rating: number;
  image: string;
};

const mockSellers: SellerData[] = [
  {
    name: "TechHub Store",
    products: 120,
    rating: 5,
    image: "https://via.placeholder.com/80x80.png?text=TH",
  },
  {
    name: "GadgetWorld",
    products: 85,
    rating: 4,
    image: "https://via.placeholder.com/80x80.png?text=GW",
  },
  {
    name: "HomeEssentials",
    products: 60,
    rating: 5,
    image: "https://via.placeholder.com/80x80.png?text=HE",
  },
  {
    name: "Fashionista",
    products: 90,
    rating: 4,
    image: "https://via.placeholder.com/80x80.png?text=F",
  },
];

const Seller: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Top Sellers
          </h2>
          <p className="mt-3 text-gray-600">
            Meet our trusted sellers who provide premium products and great service.
          </p>
        </div>

        {/* Sellers Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {mockSellers.map((seller, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 mb-4 rounded-full overflow-hidden">
                <img
                  src={seller.image}
                  alt={seller.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-gray-900 font-semibold text-lg mb-1">
                {seller.name}
              </h3>
              <p className="text-gray-500 text-sm mb-2">
                <Users className="inline h-4 w-4 mr-1 text-orange-600" />
                {seller.products} Products
              </p>
              <div className="flex items-center justify-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < seller.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <button className="mt-auto w-full rounded-full bg-orange-600 text-white py-2 font-semibold text-sm hover:bg-orange-500 transition">
                Visit Store
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Seller;
