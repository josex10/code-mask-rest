import LoginFormComponent from "@/components/login/loginForm";
import FormLogoComponent from "@/components/shared/formLogo.component";

export default function LoginPage() {
  return (
    <section className="flex flex-row items-center  w-full h-screen">
      {/* Logo */}
      <div className="w-1/2 flex justify-center">
        <FormLogoComponent/>
      </div>
      {/* Form */}
      <div className="w-1/2 ">
        <LoginFormComponent/>
      </div>
    </section>
  );
}
