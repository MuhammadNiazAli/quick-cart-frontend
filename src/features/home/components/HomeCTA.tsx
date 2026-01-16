import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomeCTA = () => {
  return (
    <div className="w-full bg-white py-16 md:py-20 lg:py-24 lg:-mb-40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-15">
        <div className="rounded-2xl bg-[#E6E9F2] px-0 py-10 md:px-12 lg:px-16 xl:px-0">
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-8 lg:gap-12">
            <div className="w-full max-w-55 md:max-w-65 lg:ml-20 lg:max-w-50 flex justify-center md:justify-start">
              <Image
                src="/assets/jbl_soundbox_image.png"
                alt="JBL Soundbox"
                width={200}
                height={500}
                className="h-auto w-full object-contain"
                priority
              />
            </div>

            <div className="text-center max-w-xl flex flex-col justify-center">
              <h2 className="text-3xl font-bold leading-tight text-[#374151] md:text-4xl lg:text-3xl -mb-3">
                Level Up Your
                <br />
                Gaming Experience
              </h2>

              <p className="mt-5 text-base text-[#374151ac] md:text-lg lg:text-[15px] -mb-6">
                From immersive sound to precise controls—
                <br className="hidden sm:block" />
                everything you need to win
              </p>

              <div className="mt-8 mb-10">
                <Link
                  href="/"
                  className="inline-flex items-center gap-3 rounded-[5px] bg-orange-600 px-10 py-2.5 text-base font-semibold text-white shadow-md transition-all md:px-10 md:py-2.5 md:text-sm group"
                >
                  Buy now
                  <Image
                    src="/assets/arrow_icon_white.svg"
                    alt="Arrow"
                    width={16}
                    height={20}
                    className="transition-transform duration-300 group-hover:translate-x-1.5 -ml-2"
                  />
                </Link>
              </div>
            </div>

            <div className="w-full max-w-100 md:max-w-65 lg:max-w-75 flex justify-center -mt-11 md:justify-end">
              <Image
                src="/assets/md_controller_image.png"
                alt="Xbox Controller"
                width={400}
                height={400}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-medium text-[#374151] md:text-4xl">
            Subscribe now & get 20% off
          </h3>

          <p className="mt-3 text-base text-gray-600/70 font-medium md:text-[16px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <div className="mt-8 flex items-center justify-center">
            <input
              type="email"
              placeholder="Enter your email id"
              className="w-full max-w-md rounded-l-[5px] rounded-r-none border border-gray-300 px-5 py-2.5 text-base md:py-2.75"
            />
            <button className="rounded-r-[5px] bg-orange-600 px-8 py-2.5 text-base font-normal text-white shadow-md transition-all md:px-10 md:py-2.5 md:text-lg cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCTA;
