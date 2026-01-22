"use client";
import SellerSidebar from "./components/SellerSidebar";
import SellerHeader from "./components/SellerHeader";
import SellerFooter from "./components/SellerFooter";
import { usePathname } from "next/navigation";

export default function SellerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const showFooter =
    pathname === "/seller/product-list" ||
    pathname === "/seller/orders" ||
    pathname === "/seller/analytics" ||
    pathname === "/seller/membership" ||
    pathname === "/seller/notification";

  return (
    <div className="flex h-screen w-full overflow-hidden bg-white">
      <SellerSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <SellerHeader />

        <main className="flex-1 overflow-y-auto pt-16 px-6">{children}</main>

        {showFooter && <SellerFooter />}
      </div>
    </div>
  );
}
