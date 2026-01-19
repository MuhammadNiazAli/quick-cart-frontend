"use client";

import React from "react";
import Image from "next/image";

const TeamSection: React.FC = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Meet Our Team
          </h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a collaborative team of passionate developers who focus on
            building modern, scalable, and user-focused digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
          <div className="group p-5 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="relative w-full h-65 sm:h-150">
              <Image
                src="/assets/niaz.png"
                alt="Muhammad Niaz Ali"
                fill
                className="object-cover rounded-lg"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                <h3 className="text-white text-lg sm:text-xl font-semibold">
                  Muhammad Niaz Ali
                </h3>
                <p className="text-white text-xs sm:text-sm">
                  Full Stack Web Developer
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Muhammad Niaz Ali is a Full Stack Web Developer with strong
                expertise in building scalable and high-performance web
                applications. He specializes in frontend engineering, backend
                architecture, and full-stack ecommerce solutions.
              </p>
            </div>

            <a
              href="#"
              className="mt-4 inline-flex items-center gap-2 text-orange-600 font-semibold text-sm sm:text-base hover:text-orange-800 transition-all"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 20 20"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  fill="currentColor"
                  d="M10 3v7H3v2h7v7h2v-7h7V10h-7V3h-2z"
                />
              </svg>
            </a>
          </div>

          <div className="group p-5 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="relative w-full h-65 sm:h-150">
              <Image
                src="/assets/ahsaan.jfif"
                alt="Ahsaan Khan"
                fill
                className="object-cover rounded-lg"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                <h3 className="text-white text-lg sm:text-xl font-semibold">
                  Ahsaan Khan
                </h3>
                <p className="text-white text-xs sm:text-sm">
                  Full Stack Web Developer
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Ahsaan Khan is a skilled Full Stack Web Developer who focuses on
                building secure, efficient, and visually engaging web
                applications. He brings strong problem-solving skills and clean
                architecture practices.
              </p>
            </div>

            <a
              href="#"
              className="mt-4 inline-flex items-center gap-2 text-orange-600 font-semibold text-sm sm:text-base hover:text-orange-800 transition-all"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 20 20"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  fill="currentColor"
                  d="M10 3v7H3v2h7v7h2v-7h7V10h-7V3h-2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
