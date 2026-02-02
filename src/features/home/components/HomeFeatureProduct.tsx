// HomeFeatureProduct.tsx
"use client";

import { useEffect, useState } from "react";
import FeatureCard from "../FeatureCart";
import api from "@/lib/axios";

// 1. Interface banaya wahi exact keys ke sath
interface FeatureProduct {
  _id: string;
  title: string;
  description: string;
  image: string;
  createdAt: string;
}

const HomeFeatureProduct = () => {
  // 2. State banayi jo FeatureProduct ka array (arr) store karegi
  const [data, setData] = useState<FeatureProduct[]>([]);

  useEffect(() => {
    const Getallproduct = async () => {
      try {
        const res = await api.get('/product/allfeatureproducts');
        
        // 3. API ka data state mein add kar diya
        // Axios mein data hamesha res.data mein hota hai
        setData(res.data as FeatureProduct[]); 
        
        console.log("Data added to state:", res.data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    
    Getallproduct();
  }, []);

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
          {/* 4. State (data) ko map kiya cards dikhane ke liye */}
          {data.length > 0 ? (
            data.map((product) => (
              <FeatureCard 
                key={product._id} 
                id={product._id}
                title={product.title}
                desc={product.description} // description key use ki hai
                image={product.image}
                buttonText="Buy now"
              />
            ))
          ) : (
            <p className="text-center col-span-full">Loading feature products...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatureProduct;