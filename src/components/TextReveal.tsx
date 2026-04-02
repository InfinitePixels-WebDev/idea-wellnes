import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
}

const TextReveal = ({ text, className = "" }: TextRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"],
  });

  const words = text.split(" ");

  return (
    <div ref={ref} className={className}>
      <p className="flex flex-wrap gap-x-2 gap-y-1">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return <Word key={i} word={word} range={[start, end]} progress={scrollYProgress} />;
        })}
      </p>
    </div>
  );
};

const Word = ({
  word,
  range,
  progress,
}: {
  word: string;
  range: [number, number];
  progress: any;
}) => {
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block">
      {word}
    </motion.span>
  );
};

export default TextReveal;
