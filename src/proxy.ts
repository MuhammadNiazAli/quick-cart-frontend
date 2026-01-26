import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  const url = req.nextUrl.clone();
  const pathname = req.nextUrl.pathname;

  const accessToken = req.cookies.get("accessToken")?.value;
  const refreshToken = req.cookies.get("refreshToken")?.value;
  const role = (req.cookies.get("role")?.value || "").toLowerCase();

  const isAuthenticated = !!accessToken && !!refreshToken;

  if (!isAuthenticated) {
    if (pathname !== "/account") {
      url.pathname = "/account";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  if (pathname === "/account") {
    url.pathname = "/user-profile";
    return NextResponse.redirect(url);
  }

  if (role === "admin") {
    if (!pathname.startsWith("/seller")) {
      url.pathname = "/seller";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  if (role === "user") {
    const allowed = [
      "/",
      "/about",
      "/shop",
      "/contact",
      "/privacy",
      "/user-profile",
    ];
    if (!allowed.includes(pathname)) {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  if (role === "viewer") {
    const allowed = [
      "/",
      "/about",
      "/shop",
      "/contact",
      "/privacy",
      "/user-profile",

      "/seller",
      "/seller/product-list",
      "/seller/orders",
    ];

    if (pathname === "/seller") {
      url.pathname = "/seller/product-list";
      return NextResponse.redirect(url);
    }

    if (
      pathname.startsWith("/seller/analytics") ||
      pathname.startsWith("/seller/membership")
    ) {
      url.pathname = "/seller/product-list";
      return NextResponse.redirect(url);
    }

    if (!allowed.some((p) => pathname === p || pathname.startsWith(p + "/"))) {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  }

  if (role === "partner") {
    const allowed = [
      "/",
      "/shop",
      "/user-profile",
      "/seller",
      "/seller/product-list",
      "/seller/orders",
    ];

    if (
      pathname.startsWith("/seller/analytics") ||
      pathname.startsWith("/seller/membership")
    ) {
      url.pathname = "/seller";
      return NextResponse.redirect(url);
    }

    if (!allowed.some((p) => pathname === p || pathname.startsWith(p + "/"))) {
      url.pathname = "/seller";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  url.pathname = "/";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/",
    "/about",
    "/shop",
    "/contact",
    "/privacy",
    "/account",
    "/user-profile",
    "/seller/:path*",
  ],
};
