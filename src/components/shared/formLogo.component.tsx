"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

export default function FormLogoComponent() {
  const { theme } = useTheme();
  return (
    <Image priority src={`/logo-${theme === 'light' ? 'dark': 'light'}.svg`} width={600} height={600} alt="Logo" />
  );
}
