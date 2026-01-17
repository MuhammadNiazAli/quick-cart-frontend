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
    name: "Ayesha Khan",
    role: "Verified Buyer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    message:
      "Absolutely loved the product! Quality was top-notch and delivery was super fast. Highly recommended.",
  },
  {
    name: "Ali Raza",
    role: "Repeat Customer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    message:
      "Great experience overall. Customer support was responsive and the product matched the description perfectly.",
  },
  {
    name: "Sara Ahmed",
    role: "Happy Client",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    message:
      "One of the best ecommerce stores I’ve shopped from. Clean UI, fair pricing, and amazing quality.",
  },
  {
    name: "Hamza Ali",
    role: "Loyal Customer",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    message:
      "Amazing shopping experience. Prices are fair and product quality exceeded expectations.",
  },
];

const TestimonialsSection: React.FC = () => {
  const paginationRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 mt-3">
            Trusted by thousands of happy shoppers
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

        {/* Pagination */}
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
              i < rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>

      
      <p className="text-gray-700 text-[12px] leading-relaxed grow">
        “{message}”
      </p>

    
      <div className="flex items-center mt-6">
        <img
          src={image}
          alt={name}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="ml-4">
          <h4 className="text-sm font-semibold text-gray-900">
            {name}
          </h4>
          <p className="text-xs text-gray-500">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};
