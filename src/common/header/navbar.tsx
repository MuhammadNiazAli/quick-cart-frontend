/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const Navbar: React.FC = () => {
  const pathname = usePathname(); 
  const router = useRouter();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => pathname === href;

  // Check role from cookies
  const getRole = () => {
    if (typeof document !== "undefined") {
      return document.cookie
        .split("; ")
        .find((row) => row.startsWith("role="))
        ?.split("=")[1];
    }
    return null;
  };

  const handleSellerClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const role = getRole();
    if (role !== "admin") {
      e.preventDefault();
      toast.error("Please join membership to access Seller Dashboard!");
    }
  };

  return (
    <header className="w-full h-15 bg-white border-b border-gray-300 flex items-center px-8 lg:px-32">
      <div className="w-full flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={128.5}
            height={128}
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-gray-900 font-lg transition-all duration-300 ease-out transform
                ${isActive(link.href) ? "text-[#ff542ed4] border-b-2 border-[#ff542ed4] pb-1" : "hover:text-[#ff542ed4]"}`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/seller"
            onClick={handleSellerClick}
            className="px-4 py-1 border border-gray-300/70 rounded-[100px] text-xs font-normal text-gray-700 bg-white hover:border-[#ff522f30] hover:text-[#ff522fc9] transition-all duration-300 ease-out transform"
          >
            Seller Dashboard
          </Link>
        </nav>

        <div className="flex items-center gap-5">
          <Image
            src="/assets/search_icon.svg"
            alt="Search"
            width={16}
            height={16}
            className="cursor-pointer"
          />

          <div className="flex items-center gap-2 cursor-pointer hover:text-[#ff542ed4] transition-all duration-300 ease-out transform">
            <Image
              src="/assets/user_icon.svg"
              alt="User"
              width={16}
              height={16}
            />
            <Link href="/account">
              <span className="font-lg text-gray-900 hover:text-gray-600 transition-all duration-300 ease-out transform">
                Account
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
