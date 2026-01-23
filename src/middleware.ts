import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  const accessToken = req.cookies.get("accessToken")?.value;
  const role = (req.cookies.get("role")?.value || "").toLowerCase();

  const publicPaths = ["/", "/about", "/shop", "/contact", "/privacy"];
  const accountPath = "/account";
  const sellerPath = "/seller";
  const userProfilePath = "/user-profile";
  const pathname = req.nextUrl.pathname;

 
  if (!accessToken) {
    if (!publicPaths.includes(pathname) && pathname !== accountPath) {
      url.pathname = accountPath;
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

 
  if (role === "admin") {
    if (!pathname.startsWith(sellerPath)) {
      url.pathname = sellerPath;
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

 
  if (pathname === accountPath) {
    url.pathname = userProfilePath;
    return NextResponse.redirect(url);
  }

 
  if (pathname === userProfilePath) {
    return NextResponse.next();
  }

  
  if (role === "partner") {
    const allowed =
      pathname === "/shop" ||
      pathname.startsWith(sellerPath) ||
      pathname === userProfilePath;

    if (!allowed) {
      url.pathname = "/shop";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  
  if (role === "viewer") {
    const allowed =
      publicPaths.includes(pathname) ||
      pathname.startsWith(sellerPath) ||
      pathname === userProfilePath;

    if (!allowed) {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

 
  if (role === "user") {
    const allowed = publicPaths.includes(pathname) || pathname === userProfilePath;

    if (!allowed) {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

 
  const allowed = publicPaths.includes(pathname) || pathname === userProfilePath;
  if (!allowed) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
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
