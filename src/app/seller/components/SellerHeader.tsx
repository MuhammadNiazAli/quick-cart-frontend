"use client";
import Image from "next/image";

const SellerHeader = () => {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-white border-b shadow-sm flex items-center justify-between px-6 lg:px10 z-50 -ml-65">
      <div className="flex items-center">
        <Image src="/assets/logo.svg" alt="Logo" width={120} height={40} />
      </div>
      <div>
        <button className="bg-[#4B5563] text-white px-8 py-2 rounded-full text-sm cursor-pointer">
          Logout
        </button>
      </div>
    </header>
  );
};

export default SellerHeader;
