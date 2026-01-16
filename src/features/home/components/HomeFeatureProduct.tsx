"use client";

import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

const ExternalIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path d="M14 5h5v5" stroke="currentColor" strokeWidth="2" />
    <path d="M10 14L19 5" stroke="currentColor" strokeWidth="2" />
    <path
      d="M19 14v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"
      stroke="currentColor"
      strokeWidth="2"
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
    <div className="relative h-95 rounded-[5px] overflow-hidden bg-gray-200">
      <DirectionAwareHover imageUrl={image}>
        <div className="px-8 pb-5">
          <h3 className="text-white text-[21px] font-medium font-outfit">
            {title}
          </h3>

          <p className="mt-3 -mb-3.5 text-white/90 text-[14px] leading-6 max-w-[320px]">
            {desc}
          </p>

          <button
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-[5px]
              bg-[#EA580C] text-white text-sm transition-all duration-300
              hover:bg-orange-600 hover:scale-[1.03]"
          >
            {buttonText}
            <ExternalIcon />
          </button>
        </div>
      </DirectionAwareHover>
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
      <div className="max-w-250 mx-auto px-7.5">
        <div className="text-center pt-10">
          <h2 className="text-[#374151] text-[30px] font-medium">
            Featured Products
          </h2>
          <div className="mt-1 flex justify-center">
            <span className="h-0.5 w-27.5 bg-orange-600" />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featureCardsData.map((card, index) => (
            <FeatureCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatureProduct;
