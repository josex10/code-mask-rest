import * as jose from "jose";
import { TCookie } from "../definitions/shared/cookie.definitions";

export const setToken = async (payload: TCookie): Promise<string> => {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const alg = "HS256";

  return await new jose.SignJWT({})
    .setProtectedHeader({ alg })
    .setExpirationTime("24h")
    .setSubject(JSON.stringify(payload))
    .sign(secret);
};
