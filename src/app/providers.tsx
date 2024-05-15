"use client";
import React, { useEffect, useState } from 'react';
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <NextUIProvider>
      {mounted && (
        <NextThemesProvider attribute="class" defaultTheme="mask-light">
          {children}
        </NextThemesProvider>
      )}
    </NextUIProvider>
  );
}
