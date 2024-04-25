import Image from "next/image";
import LoginFormComponent from "@/components/login/loginForm";

export default function LoginPage() {
  return (
    <section className="flex flex-row items-center  w-full h-screen">
      <div className="w-1/2 flex justify-center">
        <Image
          priority
          src="/logo-black.svg"
          width={600}
          height={600}
          alt="Logo"
        />
      </div>
      <div className="w-1/2 ">
        <LoginFormComponent/>
      </div>
    </section>
  );
}
