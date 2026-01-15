/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      {/* Top content (same width as page content) */}
      <div className="w-full max-w-275 mx-auto px-[30px] pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-[2.2fr_1fr_1fr] gap-y-14 md:gap-y-0 md:gap-x-40 items-start">
          {/* Left */}
          <div>
            <Image
              src="/assets/logo.svg"
              alt="QuickCart"
              width={190}
              height={44}
              className="h-auto w-auto"
              priority
            />

            <p className="mt-10 max-w-[720px] text-[#6B7280] text-[18px] leading-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

        
          <div>
            <h4 className="text-[#111827] text-[20px] font-semibold">
              Company
            </h4>

            <ul className="mt-10 space-y-4 text-[#6B7280] text-[18px]">
              <li className="cursor-pointer hover:text-[#111827] transition-colors duration-200">
                Home
              </li>
              <li className="cursor-pointer hover:text-[#111827] transition-colors duration-200">
                About us
              </li>
              <li className="cursor-pointer hover:text-[#111827] transition-colors duration-200">
                Contact us
              </li>
              <li className="cursor-pointer hover:text-[#111827] transition-colors duration-200">
                Privacy policy
              </li>
            </ul>
          </div>

        
          <div>
            <h4 className="text-[#111827] text-[20px] font-semibold">
              Get in touch
            </h4>

            <div className="mt-10 space-y-4 text-[#6B7280] text-[18px]">
              <p>+1-234-567-890</p>
              <p>contact@greatstack.dev</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="w-full border-t border-neutral-300" />

    
      <div className="w-full h-13 flex items-center justify-center">
        <p className="text-center text-[#111827de] text-[14px]">
          Copyright 2025 © GreatStack.dev All Right Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
