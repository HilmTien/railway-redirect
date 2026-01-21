import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  // The original path and query
  const { pathname, search } = request.nextUrl;

  // Define your target hostname
  const targetHost = "it1901-itp-production-563d.up.railway.app";

  // Construct new URL
  const redirectUrl = new URL(`https://${targetHost}${pathname}${search}`);

  // Return a redirect response
  return NextResponse.redirect(redirectUrl);
}

// Optionally limit which paths the middleware runs on
export const config = {
  matcher: "/:path*",
};
