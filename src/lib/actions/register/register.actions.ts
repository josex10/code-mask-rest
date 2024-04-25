"use server";


import { RegisterSchema, TRegisterState } from "@/lib/schemas/register/registerSchema";

export async function registerAction(prevState: TRegisterState, formData: FormData) {
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

  return {
    errors: {
        restName: ['El nombre del restaurante ya se encuentra registrado']
    },
    message: "El nombre del restaurante no ha sido encontrado en la base de datos",
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
