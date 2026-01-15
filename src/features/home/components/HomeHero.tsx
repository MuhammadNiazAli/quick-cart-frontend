"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

type HeroSlideProps = {
  badge: string;
  title: string;
  primaryCta: string;
  secondaryCta: string;
  imageSrc: string;
  imageAlt: string;
  badgeColorClass?: string;
};

const HeroSlide: React.FC<HeroSlideProps> = ({
  badge,
  title,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt,
  badgeColorClass = "text-orange-600",
}) => {
  return (
    <div className="bg-[#E6E9F2] rounded-2xl px-6 sm:px-10 lg:px-15 py-8 sm:py-10 lg:py-11 flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between min-h-100 sm:min-h-115 lg:min-h-0">
      <div className="order-1 lg:order-2 w-full flex justify-center lg:block mb-6 sm:mb-8 lg:mb-0">
        <div className="w-full max-w-[320px] sm:max-w-95 h-56 sm:h-64 lg:w-105 lg:h-80 shrink-0 flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={420}
            height={320}
            className="object-contain w-full h-full"
            priority
          />
        </div>
      </div>

      <div className="order-2 lg:order-1 font-outfit w-full max-w-full lg:max-w-[50%]">
        <p className={`${badgeColorClass} font-light mb-2 sm:mb-3`}>{badge}</p>

        <h2 className="text-[26px] sm:text-[32px] lg:text-[39px] leading-[1.18] lg:leading-12 font-extrabold text-[#374151] mb-5 sm:mb-7 lg:mb-8 min-h-24 sm:min-h-26 lg:min-h-24">
          {title}
        </h2>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 lg:gap-8 w-full">
          <button className="w-full sm:w-auto px-10 py-2.5 bg-orange-600 hover:bg-[#FF600E] hover:scale-105 transition-all duration-300 ease-out transform text-white rounded-full text-[14px] font-semibold cursor-pointer">
            {primaryCta}
          </button>

          <button className="w-auto group flex items-center justify-center sm:justify-start gap-3 text-[#374151] font-semibold cursor-pointer">
            {secondaryCta}
            <Image
              src="/assets/arrow_icon.svg"
              alt="Arrow"
              width={16}
              height={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

const HomeHero: React.FC = () => {
  const paginationRef = useRef<HTMLDivElement | null>(null);

  const heroSlides = [
    {
      badge: "Limited Time Offer 30% Off",
      badgeColorClass: "text-[#FF532E]",
      title: "Experience Pure Sound - Your Perfect Headphones Awaits!",
      primaryCta: "Buy now",
      secondaryCta: "Find more",
      imageSrc: "/assets/header_headphone_image.png",
      imageAlt: "Headphones",
    },
    {
      badge: "Hurry up only few lefts!",
      title: "Next-Level Gaming Starts Here - Discover PlayStation 5 Today!",
      primaryCta: "Shop Now",
      secondaryCta: "Explore Deals",
      imageSrc: "/assets/header_playstation_image.png",
      imageAlt: "PlayStation",
    },
    {
      badge: "Exclusive Deal 40% Off",
      title: "Power Meets Elegance - Apple MacBook Pro is Here for you!",
      primaryCta: "Order Now",
      secondaryCta: "Learn More",
      imageSrc: "/assets/header_macbook_image.png",
      imageAlt: "MacBook",
    },
  ];

  return (
    <section className="w-full flex justify-center">
      <div className="w-full max-w-275 px-7.5 mt-6">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          speed={700}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          pagination={{ clickable: true, el: ".hero-pagination" }}
          className="hero-swiper"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <HeroSlide
                badge={slide.badge}
                badgeColorClass={slide.badgeColorClass}
                title={slide.title}
                primaryCta={slide.primaryCta}
                secondaryCta={slide.secondaryCta}
                imageSrc={slide.imageSrc}
                imageAlt={slide.imageAlt}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-6 sm:mt-8 lg:mt-10 w-full flex justify-center">
          <div ref={paginationRef} className="hero-pagination" />
        </div>

        <style jsx global>{`
          .hero-pagination {
            position: static !important;
            width: auto !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
          }

          .hero-pagination .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            opacity: 1;
            background: #d1d5db;
            margin: 0 4px !important;
          }

          .hero-pagination .swiper-pagination-bullet-active {
            background: #ff532e;
          }
        `}</style>
      </div>
    </section>
  );
};

export default HomeHero;
