import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import * as jose from "jose";
import { getCookie } from "./lib/helpers/cookies.helper";

export async function middleware(request: NextRequest) {
  const cookie = getCookie();
  if (!cookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const jwt = cookie.value;

  try {
    //TODO ADD VALIDATION OF THE TOKEN
    const { payload } = await jose.jwtVerify(jwt, secret, {});
  } catch (err) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: "/dashboard/:path*",
};