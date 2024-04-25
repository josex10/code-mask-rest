import RegisterFormComponent from "@/components/register/registerForm.component";
import Image from "next/image";
import { Suspense } from "react";
import RegisterLoadingPage from "./loading";

export default function RegisterPage() {
  return (
    <section className="flex flex-row items-center  w-full h-screen">
      {/* Logo */}
      <div className="w-1/3 flex justify-center">
        <Image
          priority
          src="/logo-black.svg"
          width={600}
          height={600}
          alt="Logo"
        />
      </div>
      {/* Form */}
      <div className="w-2/3 ">
        <Suspense fallback={<RegisterLoadingPage/>}>
          <RegisterFormComponent />
        </Suspense>
      </div>
    </section>
  );
}
