import { Moon, SunDim } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export const AnimatedThemeToggler = ({ className }: Props) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    return document.documentElement.classList.contains("dark");
  });
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const changeTheme = async () => {
    if (!buttonRef.current) return;

    const apply = () => {
      const dark = document.documentElement.classList.toggle("dark");
      setIsDark(dark);
    };

    // Fallback for browsers without View Transitions API
    if (!("startViewTransition" in document)) {
      apply();
      return;
    }

    // @ts-ignore - startViewTransition not yet typed in all TS lib versions
    await document.startViewTransition(() => {
      flushSync(() => {
        apply();
      });
    }).ready;

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 700,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  };

  return (
    <button
      ref={buttonRef}
      onClick={changeTheme}
      aria-label="Toggle theme"
      className={cn(
        "relative inline-flex items-center justify-center w-9 h-9 rounded-full text-foreground/70 transition-colors duration-300 hover:text-primary",
        className,
      )}
    >
      {isDark ? <SunDim className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
};

export default AnimatedThemeToggler;
