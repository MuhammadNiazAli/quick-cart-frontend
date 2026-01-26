"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getProfile } from "@/services/user";

export default function AppBootstrap({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
   
    if (
      pathname.startsWith("/account") ||
      pathname.startsWith("/login") ||
      pathname.startsWith("/signup")
    ) {
      return;
    }

    getProfile().catch(() => {
     
    });
  }, [pathname]);

  return <>{children}</>;
}
