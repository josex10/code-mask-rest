import LoginFormComponent from "@/components/login/loginForm";
import { getCookie } from "@/lib/helpers/cookies.helper";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const cookie = getCookie();
  if(cookie) redirect("/dashboard");
  return (
    <section className="h-full flex items-center justify-center w-full">
      <LoginFormComponent/>
    </section>
  );
}
