import { cookies } from "next/headers";
import * as jose from "jose";
import { NextResponse } from "next/server";

export type TCookiePayload = {
  username: string;
  restaurantId: string;
  restaurantName: string;
}

const getCookieName = (): string => {
  return process.env.COOKIE_NAME || "TMC_AUTH";
};

export const getCookie = () => {
  const cookieName = getCookieName();
  return cookies().get(cookieName);
};

export const setCokkie = (jwt: string): boolean => {
  const cookieName = getCookieName();
  cookies().set(cookieName, jwt, {
    secure: true,
    httpOnly: true,
    expires: Date.now() + 24 * 60 * 60 * 1000 * 1,
    path: "/",
    sameSite: "strict",
  });
  return true;
};

export const getCookiePayload = async (): Promise<TCookiePayload | undefined> => {
  const cookie = getCookie();
  try {
    if (!cookie) {
      throw new Error('Invalid cookie')
    }
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const jwt = cookie.value;
    const { payload } = await jose.jwtVerify(jwt, secret, {});
    if(!payload.sub){
      throw NextResponse.redirect(new URL("/login"));
      
    } 

    return JSON.parse(payload.sub) as TCookiePayload;
  } catch (err) {
    NextResponse.redirect(new URL("/login"));
  }
};

export const removeCookie = () => {
  const cookieName = getCookieName();
  cookies().delete(cookieName);
};
