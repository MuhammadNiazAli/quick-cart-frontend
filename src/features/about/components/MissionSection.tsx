"use client";

import React from "react";
import Image from "next/image";
import webimage from '../../../../public//assets/about.png'

const MissionSection: React.FC = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            O<span className="border-b-3 border-orange-500 pb-1">ur Missio</span>n
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <Image
              src={webimage}
              alt="Our Mission"
              width={500}
              height={350}
              className="w-full object-cover rounded-lg"
            />
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
              Building Modern, Functional & Animated Web Experiences
            </h3>

            <p className="text-base sm:text-lg text-gray-600 mb-5 leading-relaxed">
              We design and develop websites and web applications with a strong
              focus on functionality, performance, and animation. Our work
              includes interactive web apps, animated user interfaces, and
              highly functional business websites.
            </p>

            <p className="text-base sm:text-lg text-gray-600 mb-5 leading-relaxed">
              Recently, we completed this QuickCart a full-stack eCommerce
              project where every feature is fully functional. This project was
              collaboratively built by Muhammad Niaz Ali and Ahsaan Khan. We
              worked together to design, develop, and integrate all backend and
              frontend functionalities.
            </p>

            <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
              This platform is fully dynamic and scalable. More features and
              updates will be added in the future to enhance performance and
              user experience.
            </p>

            <a
              href="/about"
              className="inline-flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-semibold text-white bg-orange-600 px-6 sm:px-8 py-3 rounded-full shadow-md hover:bg-orange-500 transition-all"
            >
              Learn More About Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 20 20"
                className="text-white transition-transform duration-300 group-hover:translate-x-1"
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

export default MissionSection;
