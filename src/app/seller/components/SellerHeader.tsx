"use client";

import Image from "next/image";
import Link from "next/link";
import { HiOutlineBell } from "react-icons/hi2";
import { LuUser } from "react-icons/lu";
import React from "react";

const SellerHeader = () => {
  const unreadNotifications = 3;

  const getRole = () => {
    if (typeof document !== "undefined") {
      return document.cookie
        .split("; ")
        .find((row) => row.startsWith("role="))
        ?.split("=")[1];
    }
    return null;
  };

  const role = getRole();
  const isAdmin = role === "admin";

  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-white border-b border-neutral-400/50 flex items-center justify-between px-6 lg:px-10 z-50 -ml-65">
      <div className="flex items-center">
        <Image src="/assets/logo.svg" alt="Logo" width={120} height={40} />
      </div>

      <div className="flex items-center gap-4">
        {isAdmin && (
          <>
            <Link
              href="/seller/notification"
              className="relative text-gray-700 hover:text-gray-900"
            >
              <HiOutlineBell className="w-6 h-6 cursor-pointer" />
              {unreadNotifications > 0 && (
                <span className="absolute -top-0.5 -right-0.5 inline-flex items-center justify-center px-1 py-0.1 text-[10px] font-bold text-white bg-red-600 rounded-full">
                  {unreadNotifications}
                </span>
              )}
            </Link>

            <Link
              href="/admin/profile"
              className="text-gray-700 hover:text-gray-800 bg-gray-200 p-2 rounded-full"
            >
              <LuUser className="w-6 h-6 cursor-pointer" />
            </Link>

            <button className="bg-[#4B5563] hover:bg-[#2f3439] text-white px-8 py-2 rounded-full text-sm transition-colors duration-300">
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default SellerHeader;
