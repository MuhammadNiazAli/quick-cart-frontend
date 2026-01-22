"use client";

import { useEffect } from "react";
import { getProfile } from "@/services/user";

export default function AppBootstrap({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    getProfile().catch(() => {
     
    });
  }, []);

  return <>{children}</>;
}
