import NavbarComponent from "@/components/main/navbar.component";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <NavbarComponent />
      {children}
    </section>
  );
}
