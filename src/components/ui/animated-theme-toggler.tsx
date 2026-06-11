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
    <div className={cn("flex flex-col items-center justify-center gap-0.5", className)}>
      <button
        ref={buttonRef}
        onClick={changeTheme}
        aria-label="Toggle theme"
        className="relative inline-flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-300 hover:text-primary text-current"
      >
        {isDark ? <SunDim className="h-6 w-6" /> : <Moon className="h-5 w-5" />}
      </button>
      <span className="text-[10px] tracking-wider font-semibold opacity-95 select-none">
        {isDark ? "Dark" : "Light"}
      </span>
    </div>
  );
};

export default AnimatedThemeToggler;
