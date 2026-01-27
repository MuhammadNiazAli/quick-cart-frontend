"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { Product } from "@/services/product";

type Props = {
  product: Product;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

const SingleProduct = ({ product }: Props) => {
  const imageUrl = product.image.startsWith("http")
    ? product.image
    : `${API_URL}${product.image}`;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mb-12">

        {/* LEFT: Product Gallery */}
        <div className="bg-white border rounded-xl p-6">
          <div className="flex justify-center items-center h-75">
            <Image
              src={imageUrl}
              alt={product.title}
              width={300}
              height={300}
              priority
              unoptimized
              className="object-contain"
            />
          </div>
        </div>

        {/* RIGHT: Product Info */}
        <div className="space-y-5">

          <h1 className="text-2xl font-semibold leading-snug">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 text-sm">
            <div className="flex text-yellow-500">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} />
            </div>
            <span className="text-gray-500">(4.1 rating)</span>
          </div>

          {/* Price */}
          <div className="flex items-end gap-3">
            <span className="text-3xl font-bold text-gray-900">
              ${product.price}
            </span>

            {product.offer && (
              <span className="text-gray-400 line-through text-lg">
                ${Math.round(product.price * 1.25)}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed max-w-xl">
            {product.description}
          </p>

          {/* Delivery & Trust */}
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Truck size={18} />
              <span>Free delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw size={18} />
              <span>7 days return</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} />
              <span>Secure payment</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            {/* Add to Cart */}
            <button
              type="button"
              className="h-11 px-6 rounded-3xl border border-orange-200 bg-orange-50 text-orange-700 font-semibold
               hover:bg-orange-100 hover:scale-102 transition cursor-pointer"
            >
              Add to Cart
            </button>

            {/* Buy Now */}
            <Link href="/cart" className="flex">
              <button
                type="button"
                className="h-11 px-6 rounded-3xl bg-linear-to-r from-orange-500 to-orange-600 text-white text-[0.95rem] font-semibold
                 shadow-sm  hover:scale-102 transition cursor-pointer"
              >
                Buy Now
              </button>
            </Link>
          </div>


          {/* Extra Info */}
          <div className="border-t pt-4 text-sm text-gray-500">
            <p>In stock. Ships within 24 hours.</p>
            <p>Sold by Official Store.</p>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2.5">
            Feature <span className="text-orange-500">Products</span>
          </h2>
          <div className="mt-1 flex justify-center">
            <span className="h-0.5 w-34 bg-orange-600" />
          </div>
        </div>
          <div>
            {/* Dalta ke ba feachure products map ke */}
          </div>
      </div>
      </div>
      
    </section>
  );
};

export default SingleProduct;
