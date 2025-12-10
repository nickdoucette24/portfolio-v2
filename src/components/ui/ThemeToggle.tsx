"use client";

import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    const currentlyDark = html.classList.contains("dark");
    if (!currentlyDark) {
      html.classList.add("dark");
    }
    setIsDark(true);
  }, []);

  const handleChange = (checked: boolean) => {
    const html = document.documentElement;
    if (checked) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    setIsDark(checked);
  };

  return (
    <div className="flex items-center gap-2 text-xs text-muted-foreground">
      <span>{isDark ? "Dark" : "Light"}</span>
      <Switch
        checked={isDark}
        onCheckedChange={handleChange}
        aria-label="Toggle dark mode"
      />
    </div>
  );
}
