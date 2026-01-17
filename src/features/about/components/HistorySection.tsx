import React from "react";
import { Calendar, Store, TrendingUp, Globe } from "lucide-react";

const HistorySection: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Journey So Far
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            From a small idea to a growing ecommerce brand — here’s how our
            story has evolved over the years.
          </p>
        </div>

        <div className="relative border-l border-gray-200 max-w-4xl mx-auto">
          <div className="mb-12 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-600">
              <Calendar className="h-3.5 w-3.5 text-white" />
            </span>
            <h3 className="text-lg font-semibold text-gray-900">
              2021 – The Beginning
            </h3>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              Our journey started with a simple goal: make quality products
              accessible through a reliable and user-friendly online platform.
            </p>
          </div>

          <div className="mb-12 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-600">
              <Store className="h-3.5 w-3.5 text-white" />
            </span>
            <h3 className="text-lg font-semibold text-gray-900">
              2023 – Building Trust
            </h3>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              We expanded our product range and focused on fast delivery,
              transparent pricing, and exceptional customer support.
            </p>
          </div>

          <div className="mb-12 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-600">
              <TrendingUp className="h-3.5 w-3.5 text-white" />
            </span>
            <h3 className="text-lg font-semibold text-gray-900">
              2024 – Rapid Growth
            </h3>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              With thousands of satisfied customers, our platform scaled rapidly
              while maintaining quality and service standards.
            </p>
          </div>

          <div className="ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-600">
              <Globe className="h-3.5 w-3.5 text-white" />
            </span>
            <h3 className="text-lg font-semibold text-gray-900">
              2026 – Looking Ahead
            </h3>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              Today, we continue to innovate, expand globally, and deliver
              experiences that customers love and trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
