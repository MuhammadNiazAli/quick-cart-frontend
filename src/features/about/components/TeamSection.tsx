"use client";

import React from "react";
import Image from "next/image";

const TeamSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
      
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our team consists of talented individuals who are dedicated to
            providing the best service and innovative solutions for our
            customers. We work together to make your experience seamless and
            memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          <div className="group relative p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="relative w-full h-150">
              <Image
                src="/assets/niaz.png"
                alt="Team Member 2"
                width={400}
                height={400}
                className="object-cover w-full h-full rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black to-transparent p-4 rounded-b-lg">
                <h3 className="text-white text-xl font-semibold">
                  Muhammad Niaz Ali
                </h3>
                <p className="text-white text-sm">Full Stack Web Developer</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-600 text-sm">
                Muhammad Niaz Ali is a Senior Full Stack Web Developer with deep
                expertise in building scalable, high-performance web
                applications. He specializes in crafting seamless user
                experiences, secure backend systems, and conversion-driven
                ecommerce platforms.
              </p>
            </div>
            <a
              href="#"
              className="mt-4 inline-flex items-center gap-2 text-orange-600 font-semibold group-hover:text-orange-800 transition-all"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
                className="text-orange-600 group-hover:text-orange-800 transition-transform duration-300 transform group-hover:translate-x-1"
              >
                <path
                  fill="currentColor"
                  d="M10 3v7H3v2h7v7h2v-7h7V10h-7V3h-2z"
                />
              </svg>
            </a>
          </div>

          <div className="group relative p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="relative w-full h-150">
              <Image
                src="/assets/ahsaan.jfif"
                alt="Team Member 3"
                width={400}
                height={400}
                className="object-cover w-full h-full rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black to-transparent p-4 rounded-b-lg">
                <h3 className="text-white text-xl font-semibold">
                  Ahsaan Khan
                </h3>
                <p className="text-white text-sm">Full Stack Web Developer</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-600 text-sm">
                Ahsaan Khan is a Senior Full Stack Web Developer with deep
                expertise in building scalable, high-performance web
                applications. He specializes in crafting seamless user
                experiences, secure backend systems, and conversion-driven
                ecommerce platforms.
              </p>
            </div>
            <a
              href="#"
              className="mt-4 inline-flex items-center gap-2 text-orange-600 font-semibold group-hover:text-orange-800 transition-all"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
                className="text-orange-600 group-hover:text-orange-800 transition-transform duration-300 transform group-hover:translate-x-1"
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
