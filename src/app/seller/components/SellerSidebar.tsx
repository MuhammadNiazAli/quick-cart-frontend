"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi2";
import toast from "react-hot-toast";
import React from "react";

const menu = [
  { label: "Add Product", href: "/seller", icon: "/assets/add_icon.svg", roles: ["admin", "partner"] },
  {
    label: "Product List",
    href: "/seller/product-list",
    icon: "/assets/product_list_icon.svg",
    roles: ["admin", "partner", "viewer"],
  },
  {
    label: "Orders",
    href: "/seller/orders",
    icon: "/assets/order_icon.png",
    roles: ["admin", "partner", "viewer"],
  },
  {
    label: "Analytics",
    href: "/seller/analytics",
    icon: "react-icon",
    roles: ["admin"],
  },
  {
    label: "Membership",
    href: "/seller/membership",
    icon: "membership-icon",
    roles: ["admin"],
  },
];

const SellerSidebar = () => {
  const pathname = usePathname();

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

  const handleProtectedClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    allowedRoles: string[]
  ) => {
    if (!allowedRoles.includes(role ?? "")) {
      e.preventDefault();
      toast.error("You are not authorized to access this section.");
    }
  };

  return (
    <aside className="w-15 lg:w-64 shrink-0 bg-white border-r border-neutral-400/50 fixed left-0 top-16 h-screen z-30">
      <nav className="mt-2 flex flex-col">
        {menu
          .filter((item) => item.roles.includes(role ?? ""))
          .map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleProtectedClick(e, item.roles)}
                className={clsx(
                  "group relative flex items-center gap-3 px-4 py-3.5 text-sm font-medium transition-all",
                  isActive
                    ? "bg-orange-600/10"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                )}
              >
                <div
                  className={clsx(
                    "absolute right-0 top-1/2 h-12.5 w-1.5 -translate-y-1/2 bg-orange-400 transition-all",
                    isActive ? "opacity-100" : "opacity-0"
                  )}
                />

                {item.icon === "react-icon" ? (
                  <TbBrandGoogleAnalytics className="w-6 h-6 text-gray-700" />
                ) : item.icon === "membership-icon" ? (
                  <HiOutlineUsers className="w-6 h-6 text-gray-700" />
                ) : (
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={23}
                    height={23}
                    className="opacity-90"
                  />
                )}

                <span className="hidden lg:block">{item.label}</span>

                <div
                  className={clsx(
                    "absolute inset-0 bg-orange-50/0 transition-colors",
                    !isActive && "group-hover:bg-neutral-300/15"
                  )}
                />
              </Link>
            );
          })}
      </nav>
    </aside>
  );
};

export default SellerSidebar;
