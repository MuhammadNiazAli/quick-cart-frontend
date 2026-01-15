"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const HomeHero: React.FC = () => {
  const paginationRef = useRef<HTMLDivElement | null>(null);
// hello new change tu ye hei 23231
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
            reverseDirection: false,
          }}
          pagination={{ clickable: true, el: ".hero-pagination" }}
          className="hero-swiper"
        >
          <SwiperSlide>
            <div className="bg-[#E6E9F2] rounded-2xl px-6 sm:px-10 lg:px-15 py-8 sm:py-10 lg:py-11 flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between h-auto lg:h-100">
              <div className="max-w-[50%] font-outfit w-full">
                <p className="text-[#FF532E] mb-2 font-light">
                  Limited Time Offer 30% Off
                </p>

                <h2 className="text-[28px] sm:text-[36px] lg:text-[39px] leading-[0.7] lg:leading-12 font-extrabold text-[#374151] mb-5 sm:mb-7 lg:mb-8">
                  Experience Pure Sound - Your Perfect Headphones Awaits!
                </h2>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 lg:gap-8 w-full">
                  <button className="w-full sm:w-auto px-10 py-2.5 bg-orange-600 hover:bg-[#FF600E] hover:scale-105 transition-all duration-300 ease-out transform text-white rounded-full text-[14px] font-semibold cursor-pointer">
                    Buy now
                  </button>

                  <button className="w-full sm:w-auto group flex items-center justify-center sm:justify-start gap-3 text-[#374151] font-semibold cursor-pointer">
                    Find more
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

              <div className="mt-6 lg:mt-0 w-fit flex justify-center items-center lg:block">
                <div className="w-full max-w-[320px] sm:max-w-95 h-50 sm:h-60 lg:w-105 lg:h-80 shrink-0 flex items-center justify-center">
                  <Image
                    src="/assets/header_headphone_image.png"
                    alt="Headphones"
                    width={420}
                    height={320}
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-[#E6E9F2] rounded-2xl px-6 sm:px-10 lg:px-15 py-8 sm:py-10 lg:py-11 flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between h-auto lg:h-100">
              <div className="max-w-[50%] font-outfit w-full">
                <p className="text-orange-600 font-light mb-2 sm:mb-4">
                  Hurry up only few lefts!
                </p>

                <h2 className="text-[28px] sm:text-[36px] lg:text-[36px] leading-[1.2] lg:leading-12 font-extrabold text-[#374151] mb-5 sm:mb-7 lg:mb-8">
                  Next-Level Gaming Starts Here - Discover PlayStation 5 Today!
                </h2>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 lg:gap-8 w-full">
                  <button className="w-full sm:w-auto px-10 py-2.5 bg-orange-600 hover:bg-[#FF600E] hover:scale-105 transition-all duration-300 ease-out transform text-white rounded-full text-[14px] font-semibold cursor-pointer">
                    Shop Now
                  </button>

                  <button className="w-full sm:w-auto group flex items-center justify-center sm:justify-start gap-3 text-[#374151] font-semibold cursor-pointer">
                    Explore Deals
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

              <div className="mt-6 lg:mt-0 w-fit flex justify-center lg:block">
                <div className="w-full max-w-[320px] sm:max-w-95 h-50 sm:h-60 lg:w-105 lg:h-80 shrink-0 flex items-center justify-center">
                  <Image
                    src="/assets/header_playstation_image.png"
                    alt="PlayStation"
                    width={420}
                    height={320}
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-[#E6E9F2] rounded-2xl px-6 sm:px-10 lg:px-15 py-8 sm:py-10 lg:py-11 flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between h-auto lg:h-100">
              <div className="max-w-[50%] font-outfit w-full">
                <p className="text-orange-600 font-light mb-2 sm:mb-4">
                  Exclusive Deal 40% Off
                </p>

                <h2 className="text-[28px] sm:text-[36px] lg:text-[37px] leading-[1.2] lg:leading-12 font-extrabold text-[#374151] mb-5 sm:mb-7 lg:mb-8">
                  Power Meets Elegance - Apple MacBook Pro is Here for you!
                </h2>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 lg:gap-8 w-full">
                  <button className="w-full sm:w-auto px-10 py-2.5 bg-orange-600 hover:bg-[#FF600E] hover:scale-105 transition-all duration-300 ease-out transform text-white rounded-full text-[14px] font-semibold cursor-pointer">
                    Order Now
                  </button>

                  <button className="w-full sm:w-auto group flex items-center justify-center sm:justify-start gap-3 text-[#374151] font-semibold cursor-pointer">
                    Learn More
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

              <div className="mt-6 lg:mt-0 w-fit flex justify-center lg:block">
                <div className="w-full max-w-[320px] sm:max-w-95 h-50 sm:h-60 lg:w-105 lg:h-80 shrink-0 flex items-center justify-center">
                  <Image
                    src="/assets/header_macbook_image.png"
                    alt="MacBook"
                    width={420}
                    height={320}
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="mt-6 sm:mt-8 lg:mt-10 w-full flex justify-center">
          <div ref={paginationRef} className="hero-pagination" />
        </div>

        <style jsx global>{`
          /* keep Swiper from trying to absolutely position our custom pagination */
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
            background: #d1d5db; /* gray */
            margin: 0 4px !important;
          }

          .hero-pagination .swiper-pagination-bullet-active {
            background: #ff532e; /* orange */
          }
        `}</style>
      </div>
    </section>
  );
};

export default HomeHero;
