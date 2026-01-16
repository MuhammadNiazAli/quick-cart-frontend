"use client";

import React from "react";

const ExternalIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M14 5h5v5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 14L19 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 14v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type CardProps = {
  image: string;
  title: string;
  desc: string;
  buttonText: string;
};

const FeatureCard = ({ image, title, desc, buttonText }: CardProps) => {
  return (
    <div className="group relative overflow-hidden bg-gray-200 h-90 rounded-[5px]">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 transition-colors duration-500 ease-out group-hover:bg-black/40" />
      <div className="relative z-10 h-full flex items-end">
        <div className="w-full px-10 pb-5 transform transition-transform duration-300 ease-out group-hover:-translate-y-3">
          <h3 className="text-white text-[21px] font-medium font-outfit leading-tight">
            {title}
          </h3>
          <p className="mt-3 -mb-3.5 text-white/90 text-[14px] leading-6 max-w-[320px]">
            {desc}
          </p>
          <button
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-[5px] bg-[#EA580C] text-white text-[16px] font-semibold
              transition-all duration-300 ease-out transform hover:bg-orange-600 cursor-pointer hover:scale-[1.03]"
          >
            {buttonText}
            <ExternalIcon className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

const HomeFeatureProduct = () => {
  const featureCardsData = [
    {
      image: "/assets/girl_with_headphone_image.png",
      title: "Unparalleled Sound",
      desc: "Experience crystal-clear audio with premium headphones.",
      buttonText: "Buy now",
    },
    {
      image: "/assets/girl_with_earphone_image.png",
      title: "Stay Connected",
      desc: "Compact and stylish earphones for every occasion.",
      buttonText: "Buy now",
    },
    {
      image: "/assets/boy_with_laptop_image.png",
      title: "Power in Every Pixel",
      desc: "Shop the latest laptops for work, gaming, and more.",
      buttonText: "Buy now",
    },
  ];

  return (
    <section className="w-full mb-10">
      <div className="w-full max-w-245 mx-auto px-7.5">
        <div className="text-center pt-10">
          <h2 className="text-[#374151] text-[30px] font-medium">
            Featured Products
          </h2>

          <div className="mt-1 flex justify-center">
            <span className="h-0.5 bg-orange-600 w-27.5" />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15">
          {featureCardsData.map((card, index) => (
            <FeatureCard
              key={index}
              image={card.image}
              title={card.title}
              desc={card.desc}
              buttonText={card.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatureProduct;
