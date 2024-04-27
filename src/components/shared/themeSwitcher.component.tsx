// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/switch";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export function ThemeSwitcherComponent() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(theme === "dark" ? true : false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleChanges = (e: boolean) => {
    if (e) {
      setTheme("dark");
      setIsDark(true);
    } else {
      setTheme("light");
      setIsDark(false);
    }
  };
  return (
    <section className="flex justify-end m-4">
      {mounted && (
        <Switch
          defaultSelected={isDark}
          onValueChange={handleChanges}
          startContent={<SunIcon />}
          endContent={<MoonIcon />}
          
        />
      )}
    </section>
  );
}
