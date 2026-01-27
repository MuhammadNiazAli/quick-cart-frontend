"use client";

import { useEffect, useState } from "react";
import FeatureCard from "../FeatureCart";
import { getFeaturedProducts } from "@/services/product";
import type { FeaturedDoc } from "@/services/product";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

const joinUrl = (base: string, path: string) => {
  if (!base) return path || "";
  if (!path) return "";
  const b = base.endsWith("/") ? base.slice(0, -1) : base;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${b}${p}`;
};

const HomeFeatureProduct = () => {
  const [featured, setFeatured] = useState<FeaturedDoc[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFeatured = async () => {
      try {
        const data = await getFeaturedProducts();
        setFeatured(data);
      } catch (err) {
        console.error("Failed to load featured products", err);
      } finally {
        setLoading(false);
      }
    };

    loadFeatured();
  }, []);

  if (loading) return null;
  if (!featured.length) return null;

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
          {featured.map((f) => {
            const p = f.productId;

            const imageUrl = p.image?.startsWith("http")
              ? p.image
              : joinUrl(API_URL, p.image); // ✅ makes http://localhost:8000/uploads/...

            return (
              <FeatureCard
                key={f._id}
                image={imageUrl}
                title={p.title}
                desc={p.description}
                buttonText="Buy now"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatureProduct;
