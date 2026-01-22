/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const accessToken = req.cookies.get("accessToken")?.value;
  const role = req.cookies.get("role")?.value;

  const publicPaths = ["/", "/about", "/shop", "/contact"];
  const accountPath = "/account";
  const sellerPath = "/seller";
  const userProfilePath = "/user-profile";

  if (accessToken) {
    if (req.nextUrl.pathname === accountPath) {
      url.pathname = userProfilePath;
      return NextResponse.redirect(url);
    }

    if (req.nextUrl.pathname === sellerPath && role !== "admin") {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  } else {
    if (req.nextUrl.pathname !== accountPath) {
      url.pathname = accountPath;
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/", "/about", "/shop", "/contact", "/account", "/seller"],
};
