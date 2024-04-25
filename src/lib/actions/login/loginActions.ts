"use server";
import { z } from "zod";

const LoginSchema = z.object({
  username: z
    .string({ message: "Campo de tipo caracter" })
    .min(1, { message: "Campo Requerido" })
    .max(25, { message: "Máx. 50 caracteres." }),
  password: z
    .string({ message: "Campo de tipo caracter" })
    .min(8, { message: "Campo Requerido, Min 8 caracteres" })
    .max(16, { message: "Máx. 16 caracteres." }),
});

export type TLoginState = {
  errors?: {
    username?: string[];
    password?: string[];
  };
  message?: string | null;
};

export async function loginAction(prevState: TLoginState, formData: FormData) {
  const validatedFields = LoginSchema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Login.",
    };
  }

  return {
    errors: {
      username: ['Nombre de usuario inválido']
    },
    message: "El nombre de usuario no ha sido encontrado en la base de datos",
  };

  //   const amountInCents = amount * 100;
  //   const date = new Date().toISOString().split("T")[0];
  //   try {
  //     await sql`
  //         INSERT INTO invoices (customer_id, amount, status, date)
  //         VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  //       `;

  //     revalidatePath("/dashboard/invoices");
  //   } catch (error) {
  //     return { message: "Database Error: Failed to Create Invoice." };
  //   }
  //   redirect("/dashboard/invoices");
}
