"use client";
import Image from "next/image";

const SellerHeader = () => {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-white border-b shadow-sm flex items-center justify-between px-6 lg:px10 z-50 -ml-65">
      <div className="flex items-center">
        <Image src="/assets/logo.svg" alt="Logo" width={120} height={40} />
      </div>
      <div>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
          Logout
        </button>
      </div>
    </header>
  );
};

export default SellerHeader;
