import { logoutAction } from "@/lib/actions/login/loginActions";
import { Button } from "@nextui-org/react";
import React from "react";

const DashboardPage = () => {
  return (
    <section>
      <h1>Dashboard</h1>

      <form action={logoutAction}>
        <Button type="submit">Salir</Button>
      </form>
    </section>
  );
};

export default DashboardPage;
