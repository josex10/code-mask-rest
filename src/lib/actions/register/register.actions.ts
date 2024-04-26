"use server";

import prismaConfig from "@/lib/config/prisma.config";
import {
  RegisterSchema,
  TRegisterState,
} from "@/lib/schemas/register/registerSchema";

export async function registerAction(
  prevState: TRegisterState,
  formData: FormData
) {
  const validatedFields = RegisterSchema.safeParse({
    restName: formData.get("restName"),
    email: formData.get("email"),
    country: formData.get("country"),
    phone: formData.get("phone"),
    address: formData.get("address"),
    fullName: formData.get("fullName"),
    username: formData.get("username"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Error en la validación de los datos",
    };
  }

  const {
    restName,
    email,
    country,
    phone,
    address,
    fullName,
    username,
    password,
  } = validatedFields.data;

  try {
    const checkRestName = await prismaConfig.restaurant.findFirst({
      where: {
        name: restName.toUpperCase(),
      },
    });

    if (checkRestName) {
      return {
        errors: {
          restName: ["El nombre del restaurante ya se encuentra registrado"],
        },
        message:
          "El nombre del restaurante no ha sido encontrado en la base de datos",
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
          email: ["El correo electrónico ya se encuentra registrado"],
        },
        message:
          "El correo electrónico no ha sido encontrado en la base de datos",
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
          username: ["El nombre de usuario ya se encuentra registrado"],
        },
        message:
          "El nombre de usuario no ha sido encontrado en la base de datos",
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

    await prismaConfig.user.create({
      data: {
        fullname: fullName,
        username,
        password,
        restaurantId: newRestaurant.id,
      },
    });

    return {
      errors: {},
      message: "El restaurante se ha registrado correctamente",
    };
  } catch (error) {
    return {
      errors: {},
      message: "Ha ocurrido un error en el servidor",
    };
  }
}
