"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/common/header/navbar";
import Footer from "@/common/footer/footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideChromeRoutes = ["/account"];
  const shouldHide = hideChromeRoutes.includes(pathname);

  return (
    <>
      {!shouldHide && <Navbar />}
      {children}
      {!shouldHide && <Footer />}
    </>
  );
}
