"use client";

import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface TimelineWordRevealProps {
  text: string;
  className?: string;
}

export const TimelineWordReveal = ({
  text,
  className = "",
}: TimelineWordRevealProps) => {
  const textRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 0.7", "start 0.2"],
  });
  const words = text.split(" ");

  return (
    <div ref={textRef} className={className}>
      <p className="flex flex-wrap gap-x-2 gap-y-1">
        {words.map((word, index) => {
          const start = index / words.length;
          const end = start + 1 / words.length;

          return (
            <TimelineWord
              key={`${word}-${index}`}
              word={word}
              range={[start, end]}
              progress={scrollYProgress}
            />
          );
        })}
      </p>
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
  const color = useTransform(progress, range, ["rgb(148 163 184)", "rgb(255 255 255)"]);
  const y = useTransform(progress, range, [8, 0]);

  return (
    <motion.span style={{ color, y }} className="inline-block">
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
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-background flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-muted border border-border p-2" />
              </div>
              <TimelineWordReveal
                text={item.title}
                className="hidden md:block md:pl-20 text-2xl md:text-5xl font-display uppercase leading-tight"
              />
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <TimelineWordReveal
                text={item.title}
                className="md:hidden block text-2xl mb-4 text-left font-display uppercase leading-tight"
              />
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
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