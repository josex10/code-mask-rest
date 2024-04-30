import NavbarComponent from "@/components/main/navbar.component";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className=" h-screen">
      <NavbarComponent />
      <section className="h-[92vh]">{children}</section>
    </section>
  );
}
