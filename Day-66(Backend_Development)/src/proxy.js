import { NextResponse } from "next/server";

export default function proxy(req) {
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;
  if (pathname.startsWith("/login") || pathname.startsWith("/register")) {
    return NextResponse.next();
  }
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)"],
};
