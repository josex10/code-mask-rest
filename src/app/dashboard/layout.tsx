import { DashboardSidebarComponent } from "@/components/dashboard/shared/dashboardSidebar.component";
import { DashboardNavbarComponent } from "@/components/dashboard/shared/dashboardNavbar.component";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="h-screen flex">
      <div>
        <DashboardSidebarComponent />
      </div>
      <div className="w-full">
        <DashboardNavbarComponent />
        <section className="h-[92vh] overflow-auto">{children}</section>
      </div>
    </section>
  );
}
