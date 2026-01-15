import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="w-full h-15 bg-white border-b border-gray-300 flex items-center px-8 lg:px-32">
      <div className="w-full flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={130}
            height={40}
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-black hover:text-[#ff542ed4] transition-all duration-300 ease-out transform font-lg">
            Home
          </Link>
          <Link href="/shop" className="text-black hover:text-[#ff542ed4] transition-all duration-300 ease-out transform font-lg">
            Shop
          </Link>
          <Link href="/about" className="text-black hover:text-[#ff542ed4] transition-all duration-300 ease-out transformfont-lg">
            About Us
          </Link>
          <Link href="/contact" className="text-black hover:text-[#ff542ed4] transition-all duration-300 ease-out transform font-lg">
            Contact
          </Link>

          <Link
            href="/seller/dashboard"
            className="px-4 py-1 border border-gray-300/70 rounded-[100px] text-[12px] font-normal text-black bg-white hover:border-[#ff522f30] hover:text-[#ff522fc9]  transition-all duration-300 ease-out transform"
          >
            Seller Dashboard
          </Link>
        </nav>

        <div className="flex items-center gap-5">
          <Image
            src="/assets/search_icon.svg"
            alt="Search"
            width={20}
            height={20}
            className="cursor-pointer"
          />

          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/assets/user_icon.svg"
              alt="User"
              width={20}
              height={20}
            />
            <span className="text-sm font-lg text-black hover:text-[#ff542ed4] transition-all duration-300 ease-out transform">Account</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
