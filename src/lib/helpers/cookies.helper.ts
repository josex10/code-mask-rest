import { cookies } from "next/headers";

const getCookieName = (): string=>{
  return process.env.COOKIE_NAME || "TMC_AUTH";
}

export const getCookie = () =>{
  const cookieName = getCookieName();
  return cookies().get(cookieName);
}

export const setCokkie = (jwt: string): boolean=>{
    const cookieName = getCookieName();
    cookies().set(cookieName, jwt, {
      secure: true,
      httpOnly: true,
      expires: Date.now() + 24 * 60 * 60 * 1000 * 1,
      path: "/",
      sameSite: "strict",
    });
    return true;
}


export const removeCookie = ()=>{
  const cookieName = getCookieName();
  cookies().delete(cookieName);
}