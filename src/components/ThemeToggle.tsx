import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return true;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="relative p-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:shadow-[0_0_15px_hsl(var(--glow-primary))]"
      aria-label="Toggle theme"
    >
      {dark ? <Sun className="h-5 w-5 text-primary" /> : <Moon className="h-5 w-5 text-foreground" />}
    </button>
  );
};

export default ThemeToggle;
