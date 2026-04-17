import { ChevronUp } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight <= 0) {
        setProgress(0);
        return;
      }

      const value = Math.min(Math.max(scrollTop / scrollHeight, 0), 1);
      setProgress(value);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [pathname]);

  const circumference = useMemo(() => 2 * Math.PI * 18, []);
  const dashOffset = circumference * (1 - progress);
  const showButton = progress > 0;

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label={`Scroll to top (${Math.round(progress * 100)}% scrolled)`}
      onClick={scrollTop}
      className={`fixed bottom-6 right-6 z-[60] h-14 w-14 rounded-full border border-border bg-background/80 text-foreground backdrop-blur-md transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-[0_0_20px_hsl(var(--glow-primary))] ${
        showButton
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <svg
        className="absolute inset-0 -rotate-90"
        viewBox="0 0 44 44"
        aria-hidden="true"
      >
        <circle
          cx="22"
          cy="22"
          r="18"
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="2"
        />
        <circle
          cx="22"
          cy="22"
          r="18"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          style={{ transition: "none" }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center">
        <ChevronUp className="h-5 w-5" />
      </span>
    </button>
  );
};

export default ScrollToTop;
