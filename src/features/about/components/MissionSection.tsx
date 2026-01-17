"use client";

import React from "react";
import Image from "next/image";

const MissionSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our mission is to deliver exceptional products and services that
            inspire creativity, empower individuals, and make a positive impact
            on the world. We aim to exceed expectations and bring innovative
            solutions to life.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2">
            <Image
              src="/assets/sm_controller_image.png"
              alt="Our Mission"
              width={500}
              height={350}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Empowering People, Transforming Lives
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              We believe in creating meaningful connections through our products
              and services. Our goal is to provide solutions that are not only
              effective but also inspiring and transformative. We are committed
              to making the world a better place through innovation and
              creativity.
            </p>

            <a
              href="/about"
              className="inline-flex items-center gap-3 text-lg font-semibold text-white bg-orange-600 px-8 py-3 rounded-full shadow-md hover:bg-orange-500 transition-all"
            >
              Learn More About Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
                className="text-white transition-transform duration-300 transform group-hover:translate-x-1"
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
