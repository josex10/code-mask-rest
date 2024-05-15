import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Mask Checf POS",
  description: "Software for restaurants POS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="mask-light">
      <body>
        <Providers>
          <Toaster position="bottom-right" />
          {children}
        </Providers>
      </body>
    </html>
  );
}
