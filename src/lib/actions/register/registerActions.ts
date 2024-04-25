"use server";

import { TRegisterInputDefinitions } from "@/lib/definitions/register/registerDefinitions";
import { FieldValues } from "react-hook-form";

export type stateActionRegister = {
      status: "success" | "error";
      message: string;
      path: "restName" | "email" | "country" | "phone" | "address" | "fullName" | "username" | "password" | "confirmPassword" ;
    }

export async function actionRegister(
  data: TRegisterInputDefinitions,
): Promise<stateActionRegister> {
  // we're gonna put a delay in here to simulate some kind of data processing like persisting data
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("server action", data);
  
  return {
    status: "error",
    message: `El nombre del restaurante ya existe.`,
    path: "restName"
  };
//   return {
//     status: "success",
//     message: `Welcome, ${data.fullName}!`,
//     path: ""
//   };
}