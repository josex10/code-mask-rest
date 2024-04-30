import { z } from "zod";

export const LoginSchema = z.object({
    username: z
      .string({ message: "Campo de tipo caracter" })
      .min(1, { message: "Campo Requerido" })
      .max(25, { message: "Máx. 50 caracteres." }),
    password: z
      .string({ message: "Campo de tipo caracter" })
      .min(8, { message: "Campo Requerido, Min 8 caracteres" })
      .max(16, { message: "Máx. 16 caracteres." }),
  });