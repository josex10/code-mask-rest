"use client";

import Link from "next/link";
import { loginAction } from "@/lib/actions/login/loginActions";
import { toast } from "react-hot-toast";

import { Input } from "@nextui-org/input";
import { EyeSlashFilledIcon } from "@/lib/svg/EyeSlashFilled";
import { EyeFilledIcon } from "@/lib/svg/EyeFilled";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "../../lib/schemas/login/login.schema";
import { Button } from "@nextui-org/button";

export default function LoginFormComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [isSubmitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ resolver: zodResolver(LoginSchema) });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setSubmitting(true);

    const actionResults = await loginAction({}, data);

    if (actionResults?.errors.path) {
      actionResults.errors.path === "general"
        ? toast.error(actionResults.errors.message)
        : setError(actionResults.errors.path, {
            type: "custom",
            message: actionResults.errors.message,
          });
    }
    setSubmitting(false);
  };

  return (
    <section className="text-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 bg-content1 p-6 rounded-xl">
        <h1 className="text-4xl">Bienvenido</h1>

        <Input
          type="text"
          label="Nombre de Usuario"
          placeholder="Ej: johndoe"
          className="max-w-sm w-96"
          variant="bordered"
          {...register("username")}
          isInvalid={errors.username ? true : false}
          errorMessage={`${errors.username ? errors.username.message : ""}`}
        />

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

        <section className="flex w-full justify-center">
          <Button type="submit" color="primary" isLoading={isSubmitting}>
            Ingresar
          </Button>
        </section>

        {/* Register */}
        <section>
          <p className="font-extralight">
            No tienes cuenta? Regístrese{" "}
            <Link className="font-bold  hover:underline" href={`/register`}>
              aquí
            </Link>
          </p>
        </section>
      </form>
    </section>
  );
}
