import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
  imgSrc?: string;
  imgAlt?: string;
  overlay?: boolean;
}

const ParallaxSection = ({
  children,
  className = "",
  speed = 0.3,
  direction = "up",
  imgSrc,
  imgAlt = "",
  overlay = true,
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const factor = direction === "up" ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], [factor * speed * 200, factor * -speed * 200]);

  if (imgSrc) {
    return (
      <div ref={ref} className={`relative overflow-hidden ${className}`}>
        <motion.div style={{ y }} className="absolute inset-0 -inset-y-[20%]">
          <img src={imgSrc} alt={imgAlt} className="w-full h-full object-cover" />
        </motion.div>
        {overlay && (
          <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]" />
        )}
        <div className="relative z-10">{children}</div>
      </div>
    );
  }

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="relative">
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxSection;
