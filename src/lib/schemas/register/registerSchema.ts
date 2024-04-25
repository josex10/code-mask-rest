import { z } from "zod";

export const RegisterSchema = z
  .object({
    restName: z
      .string({ message: "Campo de tipo caracter" })
      .min(1, { message: "Campo Requerido" })
      .max(100, { message: "Máx. 100 caracteres." }),
    email: z
      .string({ message: "Campo de tipo caracter" })
      .min(1, { message: "Campo Requerido" })
      .max(100, { message: "Máx. 100 caracteres." })
      .email({ message: "Correo electrónico inválido" }),
    country: z
      .string({ message: "Campo de tipo caracter" })
      .min(1, { message: "Campo Requerido" })
      .max(3, { message: "Máx. 3 caracteres." }),
    phone: z
      .string({ message: "Campo de tipo numérico" })
      .min(1, { message: "Campo Requerido" })
      .max(8, { message: "Máx. 8 caracteres." }),
    address: z
      .string({ message: "Campo de tipo caracter" })
      .min(1, { message: "Campo Requerido" })
      .max(255, { message: "Máx. 255 caracteres." }),
    fullName: z
      .string({ message: "Campo de tipo caracter" })
      .min(1, { message: "Campo Requerido" })
      .max(100, { message: "Máx. 100 caracteres." }),
    username: z
      .string({ message: "Campo de tipo caracter" })
      .min(1, { message: "Campo Requerido" })
      .max(25, { message: "Máx. 50 caracteres." }),
    password: z
      .string({ message: "Campo de tipo caracter" })
      .min(8, { message: "Campo Requerido, Min 8 caracteres" })
      .max(16, { message: "Máx. 16 caracteres." }),
    confirmPassword: z
      .string({ message: "Campo de tipo caracter" })
      .min(8, { message: "Campo Requerido, Min 8 caracteres" })
      .max(16, { message: "Máx. 16 caracteres." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "La contraseña no coincide.",
    path: ["confirmPassword"],
  });

export type TRegisterState = {
  errors?: {
    restName?: string[];
    email?: string[];
    country?: string[];
    phone?: string[];
    address?: string[];
    fullName?: string[];
    username?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
  message?: string | null;
};
