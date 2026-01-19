"use client";
import Image from "next/image";

const SellerFooter = () => {
  return (
    <footer className="w-full bg-white border-t shadow-inner flex items-center px-6 py-4 mt-6">
      <div className="flex items-center gap-4 ml-14 lg:ml-64 ">
        <Image src="/assets/logo.svg" alt="Logo" width={80} height={24} />
        <span className="border-l border-gray-300 h-6"></span>
        <p className="text-gray-500 lg:text-sm text-[10px]">
          Copyright 2025 © greatstack.dev All Right Reserved.
        </p>
      </div>

      <div className="flex items-center gap-3 ml-auto">
        <Image
          src="/assets/facebook_icon.svg"
          alt="Facebook"
          width={35}
          height={35}
          className="cursor-pointer"
        />
        <Image
          src="/assets/twitter_icon.svg"
          alt="Twitter"
          width={35}
          height={35}
          className="cursor-pointer"
        />
        <Image
          src="/assets/instagram_icon.svg"
          alt="Instagram"
          width={35}
          height={35}
          className="cursor-pointer"
        />
      </div>
    </footer>
  );
};

export default SellerFooter;
