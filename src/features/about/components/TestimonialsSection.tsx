"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  rating: number;
  message: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Usman Tariq",
    role: "Startup Founder",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    message:
      "Their full stack development skills. The ecommerce they built works smoothly from frontend to backend.",
  },
  {
    name: "Ayesha Noor",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    rating: 5,
    message:
      "Clean UI, strong logic, and proper structure. They truly understand web development at a deep level.",
  },
  {
    name: "Hamza Shah",
    role: "Business Owner",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
    rating: 4,
    message:
      "Very professional collaboration. Muhammad Niaz Ali and Ahsaan Khan delivered exactly what they promised.",
  },
  {
    name: "Sara Malik",
    role: "Tech Consultant",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    rating: 5,
    message:
      "Strong problem-solving skills and great communication. Their animations and UX work stand out.",
  },
];

const TestimonialsSection: React.FC = () => {
  const paginationRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3.5">
            What People Say <span className="text-orange-500">About Our Work</span>
          </h2>
            <div className="mt-1 flex justify-center">
            <span className="h-0.5 w-68 bg-orange-600" />
          </div>
          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            Feedback from clients and collaborators
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          spaceBetween={24}
          speed={700}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".testimonial-pagination",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-8 flex justify-center">
          <div ref={paginationRef} className="testimonial-pagination" />
        </div>
      </div>

      <style jsx global>{`
        .testimonial-pagination {
          position: static !important;
          display: flex !important;
          justify-content: center;
          align-items: center;
          gap: 6px;
        }

        .testimonial-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #d1d5db;
          opacity: 1;
          cursor: pointer;
        }

        .testimonial-pagination .swiper-pagination-bullet-active {
          background: #ff532e;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;

const TestimonialCard = ({
  name,
  role,
  image,
  rating,
  message,
}: Testimonial) => {
  return (
    <div className="bg-white rounded-2xl p-6 h-full border hover:shadow-md transition flex flex-col">
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      <p className="text-gray-700 text-[13px] leading-relaxed grow">
        “{message}”
      </p>

      <div className="flex items-center mt-6">
        <img
          src={image}
          alt={name}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="ml-4">
          <h4 className="text-sm font-semibold text-gray-900">{name}</h4>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};
