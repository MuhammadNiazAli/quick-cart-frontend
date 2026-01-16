"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const menu = [
  { label: "Add Product", href: "/seller", icon: "/assets/add_icon.svg" },
  {
    label: "Product List",
    href: "/seller/product-list",
    icon: "/assets/product_list_icon.svg",
  },
  { label: "Orders", href: "/seller/orders", icon: "/assets/order_icon.png" },
];

const SellerSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-15 lg:w-64 shrink-0 bg-white border-r border-gray-200 shadow-sm fixed left-0 top-16 h-screen z-30">
      <nav className="mt-2 flex flex-col">
        {menu.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "group relative flex items-center gap-3 px-4 py-3.5 text-sm font-medium transition-all",
                isActive
                  ? "bg-orange-600/15"
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
              )}
            >
              <div
                className={clsx(
                  "absolute right-0 top-1/2 h-12 w-1 -translate-y-1/2 bg-orange-500 transition-all",
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-0"
                )}
              />
              <Image
                src={item.icon}
                alt={item.label}
                width={20}
                height={20}
                className="opacity-90"
              />
              <span>{item.label}</span>
              <div
                className={clsx(
                  "absolute inset-0 bg-orange-50/0 transition-colors",
                  !isActive && "group-hover:bg-gray-200/40"
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
