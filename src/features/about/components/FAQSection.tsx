"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What type of work do you do?",
    answer:
      "We build functional websites, animated websites, and full-stack web applications. We focus on clean UI, strong logic, and smooth user experience.",
  },
  {
    question: "Do you build full-stack projects with backend too?",
    answer:
      "Yes. We build complete full-stack solutions where frontend and backend are connected properly, and core flows work end-to-end.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "We mainly work with modern web stacks like Next.js, TypeScript, Tailwind CSS, and scalable backend setups. The stack depends on project needs.",
  },
  {
    question: "Can you build ecommerce websites with all features working?",
    answer:
      "Yes. We recently built a full-stack ecommerce project together. It includes working features and will continue to receive improvements and updates.",
  },
  {
    question: "How can we contact you for a project or collaboration?",
    answer:
      "You can contact Muhammad Niaz Ali at mrniazali132@gmail.com or 0320 8050617. You can also contact Ahsaan Khan at ahsaankhan.div@gmail.com or 0308 5856344.",
  },
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-10">
            Freq<span className="border-b-3 border-orange-500 pb-2">uently Asked Quest</span>ions
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            Quick answers about our services, process, and how to reach us.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl border bg-white px-5 sm:px-6 py-4 sm:py-5 transition hover:shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between text-left gap-4"
                >
                  <span className="text-sm sm:text-base font-semibold text-gray-900">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="mt-3 sm:mt-4 text-sm text-gray-600 leading-relaxed">
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
