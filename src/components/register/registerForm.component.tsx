"use client";
import Link from "next/link";
import { RegisterSchema } from "@/lib/schemas/register/registerSchema";
import { registerAction } from "@/lib/actions/register/register.actions";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { EyeSlashFilledIcon } from "@/lib/svg/EyeSlashFilled";
import { EyeFilledIcon } from "@/lib/svg/EyeFilled";

export default function RegisterFormComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [isSubmitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ resolver: zodResolver(RegisterSchema) });

  const countries = [{ value: "CRI", label: "Costa Rica" }];

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setSubmitting(true);

    const actionResults = await registerAction({}, data);

    if (actionResults?.errors.path) {
      actionResults.errors.path === "general"
        ? toast.error(actionResults.errors.message)
        : setError(actionResults.errors.path, {
            type: "custom",
            message: actionResults.errors.message,
          });
    } else {
      toast.success("Registro exitoso");
    }
    setSubmitting(false);
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 m-10"
      >
        <h1 className="text-4xl text-center">Registro</h1>

        <section className="flex gap-5">
          <Input
            type="text"
            label="Nombre del Restaurante"
            placeholder="Ej: McDonald's"
            className="max-w-sm w-96"
            variant="bordered"
            {...register("restName")}
            isInvalid={errors.restName ? true : false}
            errorMessage={`${errors.restName ? errors.restName.message : ""}`}
          />

          <Input
            type="email"
            label="Correo Electrónico"
            placeholder="Ej: jhon@mydomain.com"
            className="max-w-sm w-96"
            variant="bordered"
            {...register("email")}
            isInvalid={errors.email ? true : false}
            errorMessage={`${errors.email ? errors.email.message : ""}`}
          />
        </section>

        <section className="flex gap-5">
          <Select
            label="País"
            placeholder="Seleccione un país"
            className="max-w-sm w-96"
            {...register("country")}
            isInvalid={errors.country ? true : false}
            errorMessage={`${errors.country ? errors.country.message : ""}`}
          >
            {countries.map((country) => (
              <SelectItem key={country.value} value={country.value}>
                {country.label}
              </SelectItem>
            ))}
          </Select>
          <Input
            type="text"
            label="Teléfono"
            placeholder="Ej: 8000-0000"
            className="max-w-sm w-96"
            variant="bordered"
            {...register("phone")}
            isInvalid={errors.phone ? true : false}
            errorMessage={`${errors.phone ? errors.phone.message : ""}`}
          />
        </section>

        <Input
          type="text"
          label="Dirección"
          placeholder="Ej: San Jose, calle 34"
          className="w-full"
          variant="bordered"
          {...register("address")}
          isInvalid={errors.address ? true : false}
          errorMessage={`${errors.address ? errors.address.message : ""}`}
        />

        <section className="flex gap-5">
          <Input
            type="text"
            label="Su nombre Completo"
            placeholder="Ej: jhon Doew"
            className="max-w-sm w-96"
            variant="bordered"
            {...register("fullName")}
            isInvalid={errors.fullName ? true : false}
            errorMessage={`${errors.fullName ? errors.fullName.message : ""}`}
          />

          <Input
            type="text"
            label="Nombre de usuario"
            placeholder="Ej: jdoew23"
            className="max-w-sm w-96"
            variant="bordered"
            {...register("username")}
            isInvalid={errors.username ? true : false}
            errorMessage={`${errors.username ? errors.username.message : ""}`}
          />
        </section>

        <section className="flex gap-5">
          <Input
            label="Contraseña"
            variant="bordered"
            placeholder="Ingrese su contraseña"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            className="max-w-sm w-96"
            {...register("password")}
            isInvalid={errors.password ? true : false}
            errorMessage={`${errors.password ? errors.password.message : ""}`}
          />

          <Input
            label="Confirmar Contraseña"
            variant="bordered"
            placeholder="Confirme su contraseña"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            className="max-w-sm w-96"
            {...register("confirmPassword")}
            isInvalid={errors.confirmPassword ? true : false}
            errorMessage={`${
              errors.confirmPassword ? errors.confirmPassword.message : ""
            }`}
          />
        </section>

        {/* button */}
        <Button type="submit" color="primary" isLoading={isSubmitting}>
          Registrarse
        </Button>

        {/* Login */}
        <section className="flex justify-center">
          <p className="font-extralight">
            Ya tienes cuenta? Inicie sesión{" "}
            <Link className="font-bold  hover:underline" href={`/login`}>
              aquí
            </Link>
          </p>
        </section>
      </form>
    </section>
  );
}
