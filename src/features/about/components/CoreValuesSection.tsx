import React from "react";
import { ShieldCheck, Sparkles, Users, Smile } from "lucide-react";

const CoreValuesSection: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Core Values
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            These values guide everything we do — from product selection to
            customer experience and long-term relationships.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="group rounded-2xl border border-gray-100 bg-gray-50 p-8 text-center transition hover:shadow-md">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 group-hover:bg-orange-600 transition">
              <ShieldCheck className="h-7 w-7 text-orange-600 group-hover:text-white transition" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Trust & Transparency
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We believe in honest communication, clear pricing, and delivering
              exactly what we promise.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-100 bg-gray-50 p-8 text-center transition hover:shadow-md">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 group-hover:bg-orange-600 transition">
              <Sparkles className="h-7 w-7 text-orange-600 group-hover:text-white transition" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Quality First
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Every product is carefully curated to meet high standards of
              quality, performance, and durability.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-100 bg-gray-50 p-8 text-center transition hover:shadow-md">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 group-hover:bg-orange-600 transition">
              <Users className="h-7 w-7 text-orange-600 group-hover:text-white transition" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Customer Centric
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our customers are at the heart of every decision we make — your
              satisfaction drives our success.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-100 bg-gray-50 p-8 text-center transition hover:shadow-md">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 group-hover:bg-orange-600 transition">
              <Smile className="h-7 w-7 text-orange-600 group-hover:text-white transition" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Positive Experience
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We focus on creating smooth, enjoyable shopping experiences from
              browsing to delivery and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
