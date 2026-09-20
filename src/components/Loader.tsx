import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/idea-wellness-logo.svg";

const loadingTexts = [
  "Igniting Discipline",
  "Forging Strength",
  "Building Community",
  "Elevating Wellness"
];

export const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    // Animate progress smoothly from 0 to 100 over 2.7 seconds (leaving 0.3s for completion)
    const startTime = Date.now();
    const duration = 2700; 

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progressPercent = Math.min((elapsed / duration) * 100, 100);
      setProgress(progressPercent);

      if (progressPercent >= 100) {
        clearInterval(interval);
      }
    }, 16); // ~60fps

    // Rotate texts during loading
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingTexts.length);
    }, 1500);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 0.98,
        filter: "blur(8px)",
        transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070707] text-white select-none px-6"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-orange-500/5 blur-[80px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-sm w-full text-center">
        {/* Glowing Logo */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mb-12"
        >
          <img
            src={logo}
            alt="Idea Wellness Logo"
            className="h-16 md:h-20 w-auto invert drop-shadow-[0_0_20px_rgba(255,102,0,0.2)]"
          />
        </motion.div>

        {/* Animated Subtitle */}
        <div className="h-6 mb-8 overflow-hidden relative w-full">
          <motion.p
            key={textIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 0.9 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-[10px] tracking-[0.25em] text-primary font-semibold font-body"
          >
            {loadingTexts[textIndex]}
          </motion.p>
        </div>

        {/* Loading Bar Container */}
        <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden mb-4 relative">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-orange-500 rounded-full relative"
            style={{ width: `${progress}%` }}
          />
          {/* Subtle neon glow trailing the bar */}
          <div 
            className="absolute top-0 bottom-0 right-0 w-8 bg-primary blur-[4px] opacity-75"
            style={{ left: `calc(${progress}% - 32px)` }}
          />
        </div>

        {/* Percentage Counter */}
        <motion.span 
          className="font-display text-lg tracking-wider text-white/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {Math.round(progress)}%
        </motion.span>
      </div>
    </motion.div>
  );
};
