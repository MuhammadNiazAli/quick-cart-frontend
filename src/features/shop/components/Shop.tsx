"use client";
import Image, { StaticImageData } from "next/image";
import star from "../../../../public/assets/star_icon.svg";
import heart from "../../../../public/assets/heart_icon.svg";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GetAllProducts } from "@/services/product";
import { get } from "axios";

type CardProps = {
  id: number; 
  image: StaticImageData;
  title: string;
  description: string;
  price: number;
  rating: number;
};

export default function Card({
  id,
  image,
  title,
  description,
  price,
  rating,
}: CardProps) {
  
  const router = useRouter();

  return (
    <div
      className="sm:w-fit w-full rounded-xl bg-white p-4 shadow-sm hover:shadow-md transition mx-auto flex flex-col justify-start cursor-pointer"
      onClick={() => router.push(`/shop/${id}`)} 
    >
      <div className="relative rounded-lg sm:h-52 max-h-40 bg-gray-100 p-4 flex justify-center">
        <button
          onClick={(e) => e.stopPropagation()} 
          className="absolute top-2 right-2 rounded-full bg-white p-1 shadow"
        >
          <Image
            src={heart}
            alt="heart"
            height={12}
            width={12}
            className="cursor-pointer hover:scale-110"
          />
        </button>

        <Image
          src={image}
          alt={title}
          width={160}
          height={160}
          className="object-contain sm:w-40 sm:h-40 w-30 h-30 hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="mt-2 flex flex-col gap-1">
        <h3 className="sm:text-sm text-[14px] font-semibold text-gray-700">
          {title}
        </h3>

        <p className="sm:text-xs text-[10px] text-gray-400">{description}</p>

        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <Image key={i} src={star} alt="Star" width={12} height={12} />
          ))}
          <span className="text-xs text-gray-500 ml-1">{rating}</span>
        </div>

        <div className="flex items-center justify-between mt-1">
          <span className="font-semibold text-gray-700 text-sm tracking-wide">
            {price}
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation(); 
              router.push("/cart");
            }}
            className="rounded-full border px-4 py-1.5 text-xs font-medium
            hover:bg-orange-600 hover:text-white cursor-pointer text-gray-500 transition whitespace-nowrap"
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}
