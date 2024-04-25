"use client";

import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";
import { EInputType } from "@/lib/definitions/shared/input.definitions";
import { TLoginState, loginAction } from "@/lib/actions/login/loginActions";
import InputComponent from "../shared/input.component";

function LoaderComponent() {
  const { pending } = useFormStatus();
  return (
    <section
      className={`w-full h-full absolute top-0 bg-blue-500 ${
        !pending && "hidden"
      }`}
    >
      {pending && <h1>Loader</h1>}
    </section>
  );
}

export default function LoginFormComponent() {
  const initialState: TLoginState = { errors: {}, message: null };
  const [state, dispatch] = useFormState(loginAction, initialState);
  return (
    <section>
      <form action={dispatch} className="flex flex-col gap-5 m-48">
        <h1 className="text-4xl text-center">Bienvenido</h1>

        {/* Username */}
        <InputComponent
          name="username"
          id="username"
          icon={<UserIcon />}
          errors={state.errors?.username}
          placeholder="Nombre de Usuario"
        />

        {/* Password */}
        <InputComponent
          name="password"
          id="password"
          icon={<LockClosedIcon />}
          errors={state.errors?.password}
          placeholder="Contraseña"
          type={EInputType.password}
        />

        {/* button */}
        <button className="bg-black py-[15px] rounded-2xl w-full text-white hover:font-bold shadow-lg">
          Ingresar
        </button>

        {/* Register */}
        <section>
          <p className="font-extralight text-center    ">
            No tienes cuenta? Regístrese{" "}
            <Link className="font-bold  hover:underline" href={`/register`}>
              aquí
            </Link>
          </p>
        </section>

        {/* Loader */}
        {/* <LoaderComponent /> */}
      </form>
    </section>
  );
}
