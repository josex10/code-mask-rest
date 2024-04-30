"use server";

import { LoginSchema } from "@/lib/schemas/login/login.schema";
import { FieldValues } from "react-hook-form";
import prismaConfig from "@/lib/config/prisma.config";
import { redirect } from "next/navigation";
const bcrypt = require("bcrypt");
import { removeCookie, setCokkie } from "@/lib/helpers/cookies.helper";
import { TCookie } from "@/lib/definitions/shared/cookie.definitions";
import { setToken } from "@/lib/helpers/jwt.herlper";

export type TLoginState = {
  errors?: {
    path?: string;
    message?: string;
  };
  message?: string;
};

export async function loginAction(
  prevState: TLoginState,
  formData: FieldValues
) {
  const { username, password } = formData;
  const validatedFields = LoginSchema.safeParse({
    username,
    password,
  });

  if (!validatedFields.success) {
    return {
      errors: { path: "general", message: "Error en la validación de los datos" },
    };
  }

  try {
    const dbUser = await prismaConfig.user.findFirst({
      where: {
        username: username.toLowerCase(),
      },
    });

    if (!dbUser) {
      return {
        errors: {
          path: "username",
          message: "Credeciales incorrectas",
        },
      };
    }
    const comparePwd = await bcrypt.compare(password, dbUser.password);

    if (!comparePwd) {
      return {
        errors: {
          path: "password",
          message: "Credeciales incorrectas",
        },
      };
    }

    const dbRestaurant = await prismaConfig.restaurant.findFirst({
      where: {
        id: dbUser.restaurantId,
      },
    });

    if (!dbRestaurant) {
      return {
        errors: {
          path: "general",
          message: "Información del Restaurante erronea",
        },
      };
    }

    const payload: TCookie = {
      username: dbUser.username,
      restaurantId: dbUser.restaurantId,
      restaurantName: dbRestaurant.name,
    };

    const jwt = await setToken(payload);

    if (!setCokkie(jwt)) {
      return {
        errors: {
          path: "general",
          message: "Error en el proceso de autenticación",
        },
      };
    } 

    
  } catch (error) {
    return {
      errors: {
        path: "general",
        message: "Ha ocurrido un error en el sistema. Intente mas tarde",
      },
    };
  }

  redirect("/dashboard");
}

export async function logoutAction() {
  removeCookie();
  redirect("/login");
}
