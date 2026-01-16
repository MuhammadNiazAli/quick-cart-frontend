"use client";
import Image from "next/image";

const SellerFooter = () => {
  return (
    <footer className="w-full bg-white border-t shadow-inner flex items-center justify-between px-6 py-4 mt-6 ml-64">
      {/* Left Section (Logo and Copyright) */}
      <div className="flex items-center gap-4">
        <Image src="/assets/logo.svg" alt="Logo" width={80} height={24} />
        <span className="border-l border-gray-300 h-6"></span>
        <p className="text-gray-500 text-sm">
          Copyright 2025 © greatstack.dev All Right Reserved.
        </p>
      </div>

      {/* Right Section (Social Media Icons) */}
      <div className="flex items-center gap-3">
        <Image src="/assets/facebook_icon.svg" alt="Facebook" width={24} height={24} />
        <Image src="/assets/twitter_icon.svg" alt="Twitter" width={24} height={24} />
        <Image src="/assets/instagram_icon.svg" alt="Instagram" width={24} height={24} />
      </div>
    </footer>
  );
};

export default SellerFooter;
