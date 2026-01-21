"use client";

import React from "react";
import Image from "next/image";
import webimage from '../../../../public//assets/about.png'

const MissionSection: React.FC = () => {
  return (
    <section className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2.5">
            Our <span className="text-orange-500">Mission</span>
          </h2>
          <div className="mt-1 flex justify-center">
            <span className="h-0.5 w-28.5 bg-orange-600" />
          </div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
