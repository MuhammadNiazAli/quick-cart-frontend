import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomeCTA = () => {
  return (
    <div className="w-full bg-white py-16 md:py-20 lg:py-24 lg:-mb-40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-15">
        <div className="rounded-2xl bg-[#E6E9F2] px-6 py-10 md:px-12 lg:px-16 xl:px-20">
          {/* Flex container */}
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-8 lg:gap-12">
            
            {/* Left Image (Top image) */}
            <div className="w-full max-w-55 md:max-w-65 lg:max-w-50 flex justify-center md:justify-start">
              <Image
                src="/assets/jbl_soundbox_image.png"
                alt="JBL Soundbox"
                width={200}
                height={500}
                className="h-auto w-full object-contain"
                priority
              />
            </div>

            {/* Center Content */}
            <div className="text-center max-w-xl flex flex-col justify-center">
              <h2 className="text-3xl font-bold leading-tight text-[#374151] md:text-4xl lg:text-3xl">
                Level Up Your
                <br />
                Gaming Experience
              </h2>

              <p className="mt-5 text-base text-[#374151ac] md:text-lg lg:text-[15px]">
                From immersive sound to precise controls—
                <br className="hidden sm:block" />
                everything you need to win
              </p>

              <div className="mt-8">
                <Link
                  href="/"
                  className="inline-flex items-center gap-3 rounded-[5px] bg-[#f96d16] px-8 py-4 text-base font-semibold text-white shadow-md transition-all hover:bg-[#f97416f2] md:px-10 md:py-2.5 md:text-sm group"
                >
                  Buy now
                  <Image
                    src="/assets/arrow_icon_white.svg"
                    alt="Arrow"
                    width={20}
                    height={20}
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </Link>
              </div>
            </div>

            {/* Right Image (Below content for large screens) */}
            <div className="w-full max-w-55 md:max-w-65 lg:max-w-70 flex justify-center -mt-11 md:justify-end">
              <Image
                src="/assets/md_controller_image.png"
                alt="Xbox Controller"
                width={200}
                height={400}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Subscription Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-medium text-[#374151] md:text-4xl">
            Subscribe now & get 20% off
          </h3>

          <p className="mt-3 text-base text-gray-600/70 font-medium md:text-[16px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-0">
            <input
              type="email"
              placeholder="Enter your email id"
              className="w-full max-w-md rounded-l-[5px] border border-gray-300 px-5 py-4 text-base ssm:rounded-r-none md:py-3"
            />
            <button className="w-full rounded-lg bg-[#EA580C] px-8 py-4 text-base font-normal text-white shadow-md transition-all hover:bg-orange-600 sm:w-auto sm:rounded-l-none sm:rounded-r-[5px] md:px-10 md:py-2.5 md:text-lg cursor-pointer">
              Subscribe 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCTA;
