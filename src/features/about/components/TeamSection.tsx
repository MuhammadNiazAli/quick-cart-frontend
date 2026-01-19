"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

type Member = {
  name: string;
  role: string;
  img: string;
  bio: string;
  href?: string;
};

const members: Member[] = [
  {
    name: "Muhammad Niaz Ali",
    role: "Full Stack Web Developer",
    img: "/assets/niaz.png",
    bio: "Muhammad Niaz Ali is a Full Stack Web Developer with strong expertise in building scalable and high-performance web applications. He specializes in frontend engineering, backend architecture, and full-stack ecommerce solutions.",
    href: "#",
  },
  {
    name: "Ahsaan Khan",
    role: "Full Stack Web Developer",
    img: "/assets/ahsaan.jfif",
    bio: "Ahsaan Khan is a skilled Full Stack Web Developer who focuses on building secure, efficient, and visually engaging web applications. He brings strong problem-solving skills and clean architecture practices.",
    href: "#",
  },
];

const TeamSection: React.FC = () => {
  const [openImage, setOpenImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenImage(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!openImage) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [openImage]);

  return (
    <>
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-10">
            Me<span className="border-b-3 border-orange-500 pb-1.5">et Our Te</span>am
          </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a collaborative team of passionate developers who focus on
              building modern, scalable, and user-focused digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
            {members.map((m) => (
              <div
                key={m.name}
                className="group bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden hover:scale-101"
              >
                <div className="flex flex-col sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setOpenImage({ src: m.img, alt: m.name })}
                    className="relative w-full sm:w-44 md:w-52 lg:w-56 shrink-0 cursor-zoom-in"
                    aria-label={`Open image of ${m.name}`}
                  >
                    <div className="relative h-44 sm:h-full sm:min-h-60 md:min-h-65 lg:min-h-70 bg-gray-50">
                      <Image
                        src={m.img}
                        alt={m.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 240px"
                        className="object-cover"
                        priority={false}
                      />

                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    </div>
                  </button>

                  <div className="p-5 sm:p-6 flex-1 min-w-0">
                    <h3 className="text-gray-900 font-bold text-base sm:text-lg lg:text-xl leading-tight">
                      {m.name}
                    </h3>

                    <p className="text-gray-600 text-xs sm:text-sm mt-1">
                      {m.role}
                    </p>

                    <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
                      {m.bio}
                    </p>

                    <a
                      href={m.href ?? "#"}
                      className="mt-4 inline-flex items-center gap-2 text-orange-600 font-semibold text-sm sm:text-base hover:text-orange-800 transition-all"
                    >
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path
                          fill="currentColor"
                          d="M13.4 6.96a1 1 0 0 0 0 1.41l2.63 2.63H5a1 1 0 1 0 0 2h11.03l-2.63 2.63a1 1 0 1 0 1.41 1.41l4.34-4.34a1 1 0 0 0 0-1.41l-4.34-4.34a1 1 0 0 0-1.41 0Z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="h-1 w-full bg-linear-to-r from-orange-500 via-orange-400 to-orange-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {openImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setOpenImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpenImage(null)}
              className="absolute -top-10 right-0 text-white/90 hover:text-white text-sm font-semibold"
            >
              Close ✕
            </button>

            <div className="relative w-full overflow-hidden rounded-2xl bg-white">
              <div className="relative aspect-16/10 w-full bg-black/5">
                <Image
                  src={openImage.src}
                  alt={openImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 900px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TeamSection;
