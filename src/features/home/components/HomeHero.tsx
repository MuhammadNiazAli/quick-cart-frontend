"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const HomeHero: React.FC = () => {
  const paginationRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="w-full flex justify-center">
      <div className="w-full max-w-290 px-7.5 mt-6">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          speed={700}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true, el: ".hero-pagination" }}
        >
          <SwiperSlide>
            <HeroSlide
              badge="Limited Time Offer 30% Off"
              title="Experience Pure Sound - Your Perfect Headphones Awaits!"
              cta="Buy now"
              link="Find more"
              image="/assets/header_headphone_image.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <HeroSlide
              badge="Hurry up only few lefts!"
              title="Next-Level Gaming Starts Here - Discover PlayStation 5 Today!"
              cta="Shop Now"
              link="Explore Deals"
              image="/assets/header_playstation_image.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <HeroSlide
              badge="Exclusive Deal 40% Off"
              title="Power Meets Elegance - Apple MacBook Pro is Here for you!"
              cta="Order Now"
              link="Learn More"
              image="/assets/header_macbook_image.png"
            />
          </SwiperSlide>
        </Swiper>

        <div className="mt-6 sm:mt-8 lg:mt-10 w-full flex justify-center">
          <div ref={paginationRef} className="hero-pagination" />
        </div>

        <style jsx global>{`
          .hero-pagination {
            position: static !important;
            display: flex !important;
            justify-content: center;
            align-items: center;
            gap: 8px;
            width: 100%;
          }

          .hero-pagination .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            opacity: 1;
            background: #d1d5db;
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

type HeroSlideProps = {
  badge: string;
  title: string;
  cta: string;
  link: string;
  image: string;
};

const HeroSlide = ({ badge, title, cta, link, image }: HeroSlideProps) => {
  return (
    <div
      className="bg-[#E6E9F2] rounded-2xl px-6 sm:px-10 lg:px-15 py-8 sm:py-10 lg:py-11
      flex flex-col-reverse md:flex-row items-center
      gap-14 md:gap-8 lg:gap-0
      justify-center lg:justify-between
      h-auto lg:h-100"
    >
      <div className="w-full md:max-w-[60%] lg:max-w-[50%] font-outfit">
        <p className="text-orange-600 mb-2 font-light">{badge}</p>

        <h2
          className="
            text-[18px]
            sm:text-[22px]
            md:text-[26px]
            lg:text-[32px]
            leading-[1.2]
            lg:leading-12
            font-extrabold
            text-[#374151]
            mb-5 sm:mb-7 lg:mb-8
          "
        >
          {title}
        </h2>

        <div className="flex items-center gap-3 sm:gap-6 lg:gap-8">
          <button
            className="px-10 py-2.5 bg-orange-600 hover:bg-[#FF600E]
            transition-all duration-300 text-white rounded-full text-[14px] font-semibold cursor-pointer"
          >
            {cta}
          </button>

          <button className="group flex items-center gap-3 text-[#374151] font-semibold cursor-pointer">
            {link}
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
      <div className="flex justify-center">
        <div
          className="
            w-full
            max-w-65
            sm:max-w-75
            md:max-w-[320px]
            lg:w-105 lg:h-80
            h-50 sm:h-60 md:h-65
            flex items-center justify-center
          "
        >
          <Image
            src={image}
            alt="Hero Image"
            width={420}
            height={320}
            className="object-contain w-full h-full"
            priority
          />
        </div>
      </div>
    </div>
  );
};
