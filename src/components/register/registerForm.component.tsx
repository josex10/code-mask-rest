"use client";

import {
  LockClosedIcon,
  UserIcon,
  BuildingStorefrontIcon,
  AtSymbolIcon,
  GlobeAltIcon,
  PhoneIcon,
  MapIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { TRegisterState } from "@/lib/schemas/register/registerSchema";
import { registerAction } from "@/lib/actions/register/register.actions";
import InputComponent from "../shared/input.component";
import { useFormState } from "react-dom";
import { EInputType } from "@/lib/definitions/shared/input.definitions";
import ButtonSubmitComponent from "../shared/submitButton.component";

export default function RegisterFormComponent() {
  const initialState: TRegisterState = { errors: {}, message: null };
  const [state, dispatch] = useFormState(registerAction, initialState);

  return (
    <section>
      <form action={dispatch} className="flex flex-col gap-5 m-10">
        <h1 className="text-4xl text-center">Registro</h1>

        <section className="flex gap-5">
          <div className="w-full">
            <InputComponent
              name="restName"
              id="restName"
              icon={<BuildingStorefrontIcon />}
              errors={state.errors?.restName}
              placeholder="Nombre del Restaurante"
            />
          </div>

          <div className="w-full">
            <InputComponent
              name="email"
              id="email"
              icon={<AtSymbolIcon />}
              errors={state.errors?.email}
              placeholder="Correo Electrónico"
            />
          </div>
        </section>

        <section className="flex gap-5">
          <div className="w-full">
            <InputComponent
              name="country"
              id="country"
              icon={<GlobeAltIcon />}
              errors={state.errors?.country}
              placeholder="País"
            />
          </div>
          <div className="w-full">
            <InputComponent
              name="phone"
              id="phone"
              icon={<PhoneIcon />}
              errors={state.errors?.phone}
              placeholder="Teléfono"
              type={EInputType.number}
            />
          </div>
        </section>

        <InputComponent
          name="address"
          id="address"
          icon={<MapIcon />}
          errors={state.errors?.address}
          placeholder="Dirección"
        />

        <section className="flex gap-5">
          <div className="w-full">
            <InputComponent
              name="fullName"
              id="fullName"
              icon={<UserIcon />}
              errors={state.errors?.fullName}
              placeholder="Nombre Completo"
            />
          </div>
          <div className="w-full">
            <InputComponent
              name="username"
              id="username"
              icon={<UserIcon />}
              errors={state.errors?.username}
              placeholder="Nombre de usuario"
            />
          </div>
        </section>

        <section className="flex gap-5">
          <div className="w-full">
            <InputComponent
              name="password"
              id="password"
              icon={<LockClosedIcon />}
              errors={state.errors?.password}
              placeholder="Contraseña"
              type={EInputType.password}
            />
          </div>
          <div className="w-full">
            <InputComponent
              name="confirmPassword"
              id="confirmPassword"
              icon={<LockClosedIcon />}
              errors={state.errors?.confirmPassword}
              placeholder="Confirmar Contraseña"
              type={EInputType.password}
            />
          </div>
        </section>

        {/* button */}
        <section className="flex justify-center">
          <ButtonSubmitComponent />
        </section>

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
