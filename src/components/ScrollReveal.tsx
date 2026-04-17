import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  /** Distance offset in px. Larger = more dramatic. */
  distance?: number;
  /** Initial blur in px (0 to disable). Adds a cinematic focus-in feel. */
  blur?: number;
  /** Duration in seconds. */
  duration?: number;
}

const directionMap = {
  up: { y: 1, x: 0 },
  down: { y: -1, x: 0 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
};

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 50,
  blur = 8,
  duration = 0.9,
}: ScrollRevealProps) => {
  const dir = directionMap[direction];
  const offset = { x: dir.x * distance, y: dir.y * distance };

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
        filter: blur > 0 ? `blur(${blur}px)` : "blur(0px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
