"use client";

import React from "react";
import { Calendar, Store, TrendingUp, Globe } from "lucide-react";

const HistorySection: React.FC = () => {
  return (
    <section className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2.5">
            Our Journey <span className="text-orange-500">So Far</span>
          </h2>
          <div className="mt-1 flex justify-center">
            <span className="h-0.5 w-42 bg-orange-600" />
          </div>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            This journey started with learning web development the right way.
            Over time, we turned that learning into real projects and a full
            stack ecommerce build with working features.
          </p>
        </div>

        <div className="relative border-l border-gray-200 max-w-4xl mx-auto">
          <div className="mb-10 sm:mb-12 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-600">
              <Calendar className="h-3.5 w-3.5 text-white" />
            </span>

            <h3 className="text-base sm:text-lg font-semibold text-gray-900">
              2024 – The Start of Serious Building
            </h3>

            <p className="mt-2 text-gray-600 text-sm sm:text-[15px] leading-relaxed">
              We shifted from tutorials to real development. We focused on
              fundamentals, clean UI, and writing code that stays maintainable.
            </p>
          </div>

          <div className="mb-10 sm:mb-12 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-600">
              <Store className="h-3.5 w-3.5 text-white" />
            </span>

            <h3 className="text-base sm:text-lg font-semibold text-gray-900">
              2025 – Full Stack Ecommerce Collaboration
            </h3>

            <p className="mt-2 text-gray-600 text-sm sm:text-[15px] leading-relaxed">
              Muhammad Niaz Ali and Ahsaan Khan worked together to build a
              full-stack ecommerce website. The core flows are working end to
              end, from UI to backend.
            </p>
          </div>

          <div className="mb-10 sm:mb-12 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-600">
              <TrendingUp className="h-3.5 w-3.5 text-white" />
            </span>

            <h3 className="text-base sm:text-lg font-semibold text-gray-900">
              2026 – Improving, Optimizing, Scaling
            </h3>

            <p className="mt-2 text-gray-600 text-sm sm:text-[15px] leading-relaxed">
              We are improving performance, polishing the UX, and adding more
              features based on real needs. Each update is planned to keep the
              codebase clean and scalable.
            </p>
          </div>

          <div className="ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-600">
              <Globe className="h-3.5 w-3.5 text-white" />
            </span>

            <h3 className="text-base sm:text-lg font-semibold text-gray-900">
              Next – More Products, More Builds, More Learning
            </h3>

            <p className="mt-2 text-gray-600 text-sm sm:text-[15px] leading-relaxed">
              Going forward, we will keep exploring new ideas and shipping
              better web products. This is a long journey, and the best part is
              we build it together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
