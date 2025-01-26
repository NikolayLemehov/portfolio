import { useEffect, useState } from "react";

import { Container } from "@/shared/ui/Container";
import { RadioBtn } from "@/shared/ui/RadioBtn";

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
    <Container>
      <div className="flex gap-4">
        {buttons.map((mode) => (
          <RadioBtn key={mode} mode={mode} onClick={() => setTheme(mode)} isActive={theme === mode} />
        ))}
      </div>
    </Container>
  );
};
