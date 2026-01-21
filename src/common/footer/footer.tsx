/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <div className="w-full max-w-400 mx-auto px-6 sm:px-6 lg:px-30 pt-10 sm:pt-16 lg:pt-20 pb-10 sm:pb-14 lg:pb-0">
        <div className="grid grid-cols-1 md:grid-cols-[2.2fr_1fr_1fr] gap-y-10 sm:gap-y-14 md:gap-y-0 md:gap-x-40 items-start">
          <div className="mt-0 md:mt-20">
            <Image
              src="/assets/logo.svg"
              alt="QuickCart"
              width={170}
              height={44}
              className="h-auto w-auto"
              priority
            />

            <p className="mt-5 max-w-none md:max-w-400 lg:w-100 text-[#6B7280] text-[13px] leading-5.5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="md:my-20">
            <h4 className="text-[#111827] text-[16px] font-semibold -mb-5">
              Company
            </h4>

            <ul className="mt-10 w-20 space-y-1.5 text-[#6B7280] text-[14px]">
              <Link href="/">
                <li className="cursor-pointer hover:text-[#ff6f00] hover:underline transition-colors duration-200">
                  Home
                </li>
              </Link>
              <Link href="/about">
                <li className="cursor-pointer hover:text-[#ff6f00] hover:underline transition-colors duration-200">
                  About us
                </li>
              </Link>
              <Link href="/contact">
                <li className="cursor-pointer hover:text-[#ff6f00] hover:underline transition-colors duration-200">
                  Contact us
                </li>
              </Link>
              <li className="cursor-pointer hover:text-[#ff6f00] hover:underline transition-colors duration-200 whitespace-nowrap">
                Privacy policy
              </li>
            </ul>
          </div>

          <div className="md:mt-20">
            <h4 className="text-[#111827] text-[16px] -mb-5 font-semibold">
              Get in touch
            </h4>

            <div className="mt-10 space-y-3 text-[#6B7280] text-[14px]">
              <p>+1-234-567-890</p>
              <p>contact@greatstack.dev</p>
              <button className="w-full sm:w-auto px-6 py-3 bg-orange-600 text-white font-medium rounded-lg shadow-md hover:scale-103 text-[13px] transition transform duration-200 cursor-pointer hover:bg-orange-500">
                Join Membership
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-neutral-300" />

      <div className="w-full flex items-center justify-center px-4 py-4 lg:h-13 lg:py-0">
        <p className="text-center text-[#111827de] text-sm leading-5">
          Copyright 2025 © GreatStack.dev All Right Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
