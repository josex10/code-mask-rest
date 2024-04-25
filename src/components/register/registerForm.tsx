// "use client";
// import {
//   LockClosedIcon,
//   UserIcon,
//   BuildingStorefrontIcon,
//   AtSymbolIcon,
//   GlobeAltIcon,
//   PhoneIcon,
//   MapIcon,
// } from "@heroicons/react/24/outline";
// import Link from "next/link";
// import { useForm } from "react-hook-form";
// import InputComponent, { EInputType } from "../shared/input";
// import { zodResolver } from "@hookform/resolvers/zod";
// import SelectComponent from "../shared/select";
// import { RegisterSchema } from "@/lib/schemas/register/registerSchema";
// import { TRegisterInputDefinitions } from "@/lib/definitions/register/registerDefinitions";
// import { actionRegister } from "@/lib/actions/register/registerActions";

// export default function RegisterFormComponent() {
//   const {
//     register,
//     handleSubmit,
//     setError,
//     formState: { errors },
//   } = useForm<TRegisterInputDefinitions>({
//     resolver: zodResolver(RegisterSchema),
//   });

//   const action: () => void = handleSubmit(async (data) => {
//     const response = await actionRegister(data);
//     setError(response.path, { message: response.message });
//   });

//   return (
//     <>
//       <section>
//         <form
//           // onSubmit={handleSubmit(onSubmit)}
//           action={action}
//           className="w-full p-10 flex flex-col gap-5"
//         >
//           <h1 className="text-4xl my-6 text-center">Registro</h1>

//           {/* Restaurant Name */}
//           {/* Email */}
//           <section className="flex flex-row gap-5 justify-between">
//             <div className="w-full">
//               <InputComponent
//                 name="restName"
//                 error={
//                   errors.restName?.message
//                     ? String(errors.restName.message)
//                     : null
//                 }
//                 register={register}
//                 icon={<BuildingStorefrontIcon />}
//                 placeholder="Nombre"
//               />
//             </div>

//             <div className="relative w-full">
//               <InputComponent
//                 name="email"
//                 error={
//                   errors.email?.message ? String(errors.email.message) : null
//                 }
//                 register={register}
//                 icon={<AtSymbolIcon />}
//                 placeholder="Correo Electrónico"
//               />
//             </div>
//           </section>

//           {/* Country */}
//           {/* Phone */}
//           <section className="flex flex-row gap-5 justify-between">
//             <div className="relative w-full">
//               <SelectComponent
//                 name="country"
//                 error={
//                   errors.country?.message
//                     ? String(errors.country.message)
//                     : null
//                 }
//                 register={register}
//                 icon={<GlobeAltIcon />}
//                 placeholder=" Seleccione un País"
//                 options={[{ value: "CRI", label: "Costa Rica" }]}
//               />
//             </div>
//             <div className="relative w-full">
//               <InputComponent
//                 name="phone"
//                 type={EInputType.number}
//                 error={
//                   errors.phone?.message ? String(errors.phone.message) : null
//                 }
//                 register={register}
//                 icon={<PhoneIcon />}
//                 placeholder="Número Telefónico"
//               />
//             </div>
//           </section>

//           {/* Address */}
//           <section className="flex flex-row gap-5 justify-between">
//             <div className="relative w-full">
//               <InputComponent
//                 name="address"
//                 error={
//                   errors.address?.message
//                     ? String(errors.address.message)
//                     : null
//                 }
//                 register={register}
//                 icon={<MapIcon />}
//                 placeholder="Dirección"
//               />
//             </div>
//           </section>

//           <section className="flex flex-row gap-5 justify-between">
//             <div className="relative w-full">
//               <InputComponent
//                 name="fullName"
//                 error={
//                   errors.fullName?.message
//                     ? String(errors.fullName.message)
//                     : null
//                 }
//                 register={register}
//                 icon={<UserIcon />}
//                 placeholder="Nombre Completo"
//               />
//             </div>
//             <div className="relative w-full">
//               <InputComponent
//                 name="username"
//                 error={
//                   errors.username?.message
//                     ? String(errors.username.message)
//                     : null
//                 }
//                 register={register}
//                 icon={<UserIcon />}
//                 placeholder="Nombre de usuario"
//               />
//             </div>
//           </section>

//           {/* Password */}
//           <section className="flex flex-row gap-5 justify-between">
//             <div className="relative w-full">
//               <InputComponent
//                 name="password"
//                 type={EInputType.password}
//                 error={
//                   errors.password?.message
//                     ? String(errors.password.message)
//                     : null
//                 }
//                 register={register}
//                 icon={<LockClosedIcon />}
//                 placeholder="Contraseña"
//               />
//             </div>
//             <div className="relative w-full">
//               <InputComponent
//                 name="confirmPassword"
//                 type={EInputType.password}
//                 error={
//                   errors.confirmPassword?.message
//                     ? String(errors.confirmPassword.message)
//                     : null
//                 }
//                 register={register}
//                 icon={<LockClosedIcon />}
//                 placeholder="Confirmar Contraseña"
//               />
//             </div>
//           </section>

//           {/* button */}
//           <section className="flex flex-row justify-center">
//             <input
//               type="submit"
//               value={`Regístrarme`}
//               className="bg-black py-[15px] rounded-2xl w-1/3 text-white hover:font-bold shadow-lg"
//             />
//           </section>

//           {/* Login */}
        //   <div className="flex flex-col items-center my-6">
        //     <p className="font-extralight">
        //       Ya tienes cuenta? Inicie sesión{" "}
        //       <Link className="font-bold  hover:underline" href={`/login`}>
        //         aquí
        //       </Link>
        //     </p>
        //   </div>
//         </form>

//         <div>

//         </div>
//       </section>
//     </>
//   );
// }
