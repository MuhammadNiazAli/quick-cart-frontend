"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import star from "../../../../public/assets/star_icon.svg";
import heart from "../../../../public/assets/heart_icon.svg";
import Link from "next/link";
import { useCart } from "@/context/CartContext/CartContext";

type CardProps = {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
};

export default function Card({
  id,
  image,
  title,
  description,
  price,
}: CardProps) {
 const router = useRouter();
  const { addToCart } = useCart();
  const API_URL = process.env.NEXT_PUBLIC_API_URL!;
  const imageUrl = image.startsWith("http") ? image : `${API_URL}${image}`;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Card navigation rokne ke liye
    addToCart({ _id: id, title, price, image: imageUrl, quantity: 1 });
  };

  return (
    <div
      onClick={() => router.push(`/shop/${id}`)}
      className="group bg-white rounded-xl border hover:scale-102 border-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer"
    >
      <div className="relative h-30 bg-gray-50 rounded-t-xl flex items-center justify-center overflow-hidden">
        <button
          onClick={(e) => e.stopPropagation()}
          className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow hover:scale-110 transition"
        >
          <Image src={heart} alt="wishlist" width={14} height={14} />
        </button>

        <Image
          src={imageUrl}
          alt={title}
          width={100}
          height={100}
          unoptimized
          className="object-contain group-hover:scale-105 transition-transform"
        />
      </div>

      <div className="p-3 space-y-1.5">
        <h3 className="text-sm font-medium text-gray-800 line-clamp-1">{title}</h3>

        <p className="text-xs text-gray-500 line-clamp-2">{description}</p>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Image key={i} src={star} alt="star" width={12} height={12} />
          ))}
          <span className="text-[11px] text-gray-400">(5.0)</span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-1">
          <div>
            <p className="text-base font-semibold text-gray-900">Rs {price}</p>
            <p className="text-[11px] text-green-600">Free Delivery</p>
          </div>

        <Link href="/cart" onClick={(e) => e.stopPropagation()}>
          <button onClick={handleAddToCart} className="text-xs px-5 py-1.5 rounded-full bg-orange-600 text-white mt-2 w-full cursor-pointer">
            Buy Now
          </button>
        </Link>
          
        </div>

      </div>
    </div>
  );
}
