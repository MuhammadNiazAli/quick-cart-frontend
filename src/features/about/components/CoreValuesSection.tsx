"use client";

import React from "react";
import { ShieldCheck, Sparkles, Users, Smile } from "lucide-react";

const CoreValuesSection: React.FC = () => {
  return (
    <section className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2.5">
            Our Core <span className="text-orange-500">Values</span>
          </h2>
          <div className="mt-1 flex justify-center">
            <span className="h-0.5 w-34 bg-orange-600" />
          </div>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            These values shape how we build, how we collaborate, and how we
            deliver. They keep our work clean, reliable, and worth sharing.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-8 text-center transition-all duration-300 ease-in-out hover:shadow-md hover:scale-103">
            <div className="mx-auto mb-4 sm:mb-5 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-orange-100 group-hover:bg-orange-600 transition">
              <ShieldCheck className="h-6 w-6 sm:h-7 sm:w-7 text-orange-600 group-hover:text-white transition" />
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
              Clean & Honest Work
            </h3>

            <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed">
              We keep our code readable, our commits clear, and our promises
              realistic. What we build matches what we say.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-8 text-center transition-all duration-300 ease-in-out hover:shadow-md hover:scale-103">
            <div className="mx-auto mb-4 sm:mb-5 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-orange-100 group-hover:bg-orange-600 transition">
              <Sparkles className="h-6 w-6 sm:h-7 sm:w-7 text-orange-600 group-hover:text-white transition" />
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
              Quality First
            </h3>

            <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed">
              We focus on solid UI, smooth animations, and reliable features. We
              refine details until the experience feels right.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-8 text-center transition-all duration-300 ease-in-out hover:shadow-md hover:scale-103">
            <div className="mx-auto mb-4 sm:mb-5 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-orange-100 group-hover:bg-orange-600 transition">
              <Users className="h-6 w-6 sm:h-7 sm:w-7 text-orange-600 group-hover:text-white transition" />
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
              Team Collaboration
            </h3>

            <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed">
              We build as a team. We share ideas, review code, and support each
              other so the final output stays strong.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-8 text-center transition-all duration-300 ease-in-out hover:shadow-md hover:scale-103">
            <div className="mx-auto mb-4 sm:mb-5 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-orange-100 group-hover:bg-orange-600 transition">
              <Smile className="h-6 w-6 sm:h-7 sm:w-7 text-orange-600 group-hover:text-white transition" />
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
              Great User Experience
            </h3>

            <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed">
              We care about how it feels to use the product. Fast, simple, and
              enjoyable from the first click to the last.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
