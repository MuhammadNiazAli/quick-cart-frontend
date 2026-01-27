"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SingleProduct from "@/features/single product/SingleProduct";
import { getSingleProduct, Product } from "@/services/product";

const Page = () => {
  const params = useParams(); // ✅ CORRECT WAY
  const id = params.id as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const loadProduct = async () => {
      try {
        const res = await getSingleProduct(id);
        setProduct(res);
      } catch (error) {
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) {
    return <div className="p-10 text-center">Loading product...</div>;
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-14">
        Product not found
      </div>
    );
  }

  return <SingleProduct product={product} />;
};

export default Page;
