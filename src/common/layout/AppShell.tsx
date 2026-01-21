"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/common/header/navbar";
import Footer from "@/common/footer/footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideChromeRoutes = ["/account" , "/seller", "/seller/product-list", "/seller/orders" , "/seller/analytics" , "/seller/membership" , "/seller/notification" , "/admin", "/admin/profile" ];
  const shouldHide = hideChromeRoutes.includes(pathname);

  return (
    <>
      {!shouldHide && <Navbar />}
      {children}
      {!shouldHide && <Footer />}
    </>
  );
}
