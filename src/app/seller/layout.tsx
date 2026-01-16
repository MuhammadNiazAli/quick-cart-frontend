"use client";
import SellerSidebar from "./components/SellerSidebar";
import SellerHeader from "./components/SellerHeader";
import SellerFooter from "./components/SellerFooter";
import { usePathname } from "next/navigation";

export default function SellerLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Footer only on Product List & Orders
  const showFooter = pathname === "/seller/product-list" || pathname === "/seller/orders";

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <SellerSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <SellerHeader />

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto pt-16 px-6">{children}</main>

        {/* Footer */}
        {showFooter && <SellerFooter />}
      </div>
    </div>
  );
}
