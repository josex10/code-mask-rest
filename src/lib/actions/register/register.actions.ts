"use server";

import prismaConfig from "@/lib/config/prisma.config";
import {
  RegisterSchema,
  TRegisterState,
} from "@/lib/schemas/register/registerSchema";
import { redirect } from "next/navigation";
import { FieldValues } from "react-hook-form";
const bcrypt = require("bcrypt");

export type TLoginState = {
  errors?: {
    path?: string;
    message?: string;
  };
  message?: string;
};

export async function registerAction(
  prevState: TRegisterState,
  formData: FieldValues
) {

  const { 
    restName, 
    email,
    country,
    phone,
    address,
    fullName,
    username, 
    password, 
    confirmPassword
  } = formData;

  const validatedFields = RegisterSchema.safeParse({
    restName,
    email,
    country,
    phone,
    address,
    fullName,
    username,
    password,
    confirmPassword,
  });

  if (!validatedFields.success) {
    return {
      errors: { path: "general", message: "Error en la validación de los datos" },
    };
  }

  try {
    const checkRestName = await prismaConfig.restaurant.findFirst({
      where: {
        name: restName.toUpperCase(),
      },
    });

    if (checkRestName) {
      return {
        errors: {
          path: "restName",
          message: "El nombre del restaurante ya se encuentra registrado",
        },
      };
    }

    const checkEmail = await prismaConfig.restaurant.findFirst({
      where: {
        email: email.toLowerCase(),
      },
    });

    if (checkEmail) {
      return {
        errors: {
          path: "email",
          message: "El correo electrónico ya se encuentra registrado",
        },
      };
    }

    const checkUsername = await prismaConfig.user.findFirst({
      where: {
        username: username.toLowerCase(),
      },
    });

    if (checkUsername) {
      return {
        errors: {
          path: "username",
          message: "El nombre de usuario ya se encuentra registrado",
        },
      };
    }

    const newRestaurant = await prismaConfig.restaurant.create({
      data: {
        name: restName.toUpperCase(),
        email: email,
        country: country,
        phone: phone,
        address: address,
      },
    });

    const hashPwd = await bcrypt.hash(password, 10);
    await prismaConfig.user.create({
      data: {
        fullname: fullName,
        username,
        password: hashPwd,
        restaurantId: newRestaurant.id,
      },
    });

    
  } catch (error) {
    return {
      errors: {
        path: "general",
        message: "Ha ocurrido un error en el sistema. Intente mas tarde",
      },
    };
  }

  redirect("/login");
}
