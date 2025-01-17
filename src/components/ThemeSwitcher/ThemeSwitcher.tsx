import { useEffect, useState } from "react";

import { RadioBtn } from "@/shared/ui/RadioBtn.tsx";

export type ThemeMode = "light" | "dark" | "system";

const buttons: ThemeMode[] = ["light", "dark", "system"];

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<ThemeMode>("system");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  useEffect(() => {
    if (theme === "dark" || (theme === "system" && systemPrefersDark)) {
      document.documentElement.classList.add("dark");
    }
    if (theme === "light" || (theme === "system" && !systemPrefersDark)) {
      document.documentElement.classList.remove("dark");
    }
  }, [systemPrefersDark, theme]);

  return (
    <div className="container mx-auto">
      <div className="flex gap-4">
        {buttons.map((mode) => (
          <RadioBtn key={mode} mode={mode} onClick={() => setTheme(mode)} isActive={theme === mode} />
        ))}
      </div>
      <div className="bg-light p-4 text-dark dark:bg-dark dark:text-light">
        <p>
          Це приклад тексту у світлій темі з світлим фоном (світло-сірий) і темним текстом, та в темній темі з темним
          фоном (темно-сірий) і світлим текстом.
        </p>
      </div>
    </div>
  );
};
