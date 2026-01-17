import React from "react";
import { Eye, Target, HeartHandshake } from "lucide-react";

const VisionSection: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4">
      
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Vision & Purpose
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We aim to redefine online shopping by delivering premium products,
            exceptional service, and experiences customers genuinely trust.
          </p>
        </div>

        
        <div className="grid gap-8 md:grid-cols-3">
         
          <div className="rounded-2xl border p-8 text-center hover:shadow-md transition">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-50">
              <Eye className="h-7 w-7 text-orange-600" />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Our Vision
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              To become a trusted global ecommerce destination where quality,
              affordability, and innovation come together seamlessly.
            </p>
          </div>

         
          <div className="rounded-2xl border p-8 text-center hover:shadow-md transition">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-50">
              <Target className="h-7 w-7 text-orange-600" />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Our Mission
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              To deliver carefully curated products with transparent pricing,
              fast delivery, and customer-first support at every step.
            </p>
          </div>

        
          <div className="rounded-2xl border p-8 text-center hover:shadow-md transition">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-50">
              <HeartHandshake className="h-7 w-7 text-orange-600" />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Our Values
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              We believe in honesty, customer trust, product excellence, and
              building long-term relationships beyond just transactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
