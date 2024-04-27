import RegisterFormComponent from "@/components/register/registerForm.component";
import FormLogoComponent from "@/components/shared/formLogo.component";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <section className="flex flex-row items-center  w-full h-screen">
      {/* Logo */}
      <div className="w-1/3 flex justify-center">
        <FormLogoComponent/>
      </div>
      {/* Form */}
      <div className="w-2/3 ">
        <RegisterFormComponent />
      </div>
    </section>
  );
}
