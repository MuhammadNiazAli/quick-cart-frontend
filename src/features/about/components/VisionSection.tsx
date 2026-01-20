"use client";

import React from "react";
import { Eye, Target, HeartHandshake } from "lucide-react";

const VisionSection: React.FC = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

       
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-10">
            Ou<span className="border-b-3 border-orange-500 pb-1.5">r Vision & Purpo</span>se
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            Our purpose is to master web development and keep exploring what we
            can build with it. We create functional websites, animated web apps,
            and modern interfaces that feel fast and smooth.
          </p>
        </div>

       
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">

          
          <div className="group rounded-2xl border p-6 sm:p-8 text-center hover:shadow-md transition-all duration-300 ease-in-out hover:scale-105">
            <div className="mx-auto mb-4 sm:mb-5 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-orange-50 group-hover:bg-orange-600">
              <Eye className="h-6 w-6 p-0.5 sm:h-9 sm:w-9 text-orange-500 transition-all duration-300 group-hover:text-gray-200" />
            </div>

            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
              Our Vision
            </h3>

            <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">
              To grow as a trusted development team known for clean UI, strong
              performance, and creative web experiences that users enjoy.
            </p>
          </div>

        
          <div className="group rounded-2xl border p-6 sm:p-8 text-center hover:shadow-md transition-all duration-300 ease-in-out hover:scale-105">
            <div className="mx-auto mb-4 sm:mb-5 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-orange-100 group-hover:bg-orange-600">
              <Target className="h-8 w-8 sm:h-7 sm:w-7 text-orange-500  transition-all duration-300 group-hover:text-gray-200" />
            </div>

            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
              Our Mission
            </h3>

            <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">
              To deeply understand web technologies and deliver full-stack
              solutions. We build websites and web apps with real features, and
              we keep improving them with future updates.
            </p>
          </div>

          
          <div className="group rounded-2xl border p-6 sm:p-8 text-center hover:shadow-md transition-all duration-300 ease-in-out hover:scale-105">
            <div className="mx-auto mb-4 sm:mb-5 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-orange-50 text-orange-600 group-hover:bg-orange-600">
              <HeartHandshake className="h-6 w-6 p-0.5 sm:h-7 sm:w-7 text-orange-500 transition-all duration-300 group-hover:text-gray-200" />
            </div>

            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
              Our Values
            </h3>

            <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">
              We value teamwork, honest communication, clean code, and reliable
              delivery. We build together, learn together, and ship work we are
              proud to put our names on.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionSection;
