"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "How long does delivery usually take?",
    answer:
      "Delivery typically takes 2–5 business days depending on your location. You’ll receive tracking details once your order is shipped.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a hassle-free return policy within 7 days of delivery, provided the product is unused and in original packaging.",
  },
  {
    question: "Are your products genuine and covered by warranty?",
    answer:
      "Yes, all our products are 100% authentic and come with applicable brand warranties for your peace of mind.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit/debit cards, online banking, and cash on delivery in selected locations.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our support team via email, live chat, or the contact page. We’re available 7 days a week.",
  },
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Find quick answers to common questions about ordering, delivery, and
            support.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl border bg-white px-6 py-5 transition"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="text-base font-semibold text-gray-900">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="mt-4 text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
