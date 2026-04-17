"use client";

import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface TimelineWordRevealProps {
  text?: string;
  lines?: string[];
  showBullets?: boolean;
  className?: string;
}

export const TimelineWordReveal = ({
  text,
  lines,
  showBullets = false,
  className = "",
}: TimelineWordRevealProps) => {
  const textRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 0.82", "end 0.25"],
  });

  const revealLines = lines ?? [text ?? ""];
  const lineCount = Math.max(revealLines.length, 1);

  return (
    <div ref={textRef} className={className}>
      <div className={revealLines.length > 1 ? "space-y-4" : ""}>
        {revealLines.map((line, lineIndex) => {
          const words = line.split(" ");
          const lineStart = lineIndex / lineCount;
          const lineEnd = (lineIndex + 1) / lineCount;
          const lineRange = lineEnd - lineStart;

          return (
            <div key={`line-${lineIndex}`} className={showBullets ? "relative pl-6" : ""}>
              {showBullets ? (
                <span className="absolute left-0 top-3 h-3 w-3 rounded-full border border-border bg-background" />
              ) : null}
              <p className="flex flex-wrap gap-x-2 gap-y-1">
                {words.map((word, wordIndex) => {
                  const wordStart = lineStart + (wordIndex / words.length) * lineRange;
                  const wordEnd = lineStart + ((wordIndex + 1) / words.length) * lineRange;

                  return (
                    <TimelineWord
                      key={`${lineIndex}-${word}-${wordIndex}`}
                      word={word}
                      range={[wordStart, wordEnd]}
                      progress={scrollYProgress}
                    />
                  );
                })}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const TimelineWord = ({
  word,
  range,
  progress,
}: {
  word: string;
  range: [number, number];
  progress: any;
}) => {
  const color = useTransform(progress, range, [
    "hsl(var(--muted-foreground))",
    "hsl(var(--foreground))",
  ]);
  const y = useTransform(progress, range, [8, 0]);
  const opacity = useTransform(progress, range, [0.5, 1]);

  return (
    <motion.span style={{ color, y, opacity }} className="inline-block">
      {word}
    </motion.span>
  );
};

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="display-lg mb-4 text-foreground max-w-4xl">
          Idea Wellness journey
        </h2>
        <p className="text-muted-foreground text-sm md:text-base max-w-sm font-body leading-relaxed">
          From one club to a nationwide performance community, this timeline
          highlights the milestones that shaped our training culture.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="relative grid grid-cols-1 md:grid-cols-2 md:gap-16 pt-10 md:pt-24">
            <div
              className={`relative pl-12 md:pl-0 ${
                index % 2 === 0 ? "md:col-start-1 md:pr-12" : "md:col-start-2 md:pl-12"
              }`}
            >
              <TimelineWordReveal
                text={item.title}
                className="text-2xl md:text-5xl mb-4 font-display uppercase leading-tight"
              />
              {item.content}
            </div>

            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-2 z-10">
              <div className="h-10 w-10 rounded-full bg-background flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-muted border border-border" />
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-1/2 md:-translate-x-1/2 left-4 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-orange-500 via-amber-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};