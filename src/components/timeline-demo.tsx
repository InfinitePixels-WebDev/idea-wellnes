import React from "react";
import { Timeline, TimelineWordReveal } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "2011",
      content: (
        <div>
          <TimelineWordReveal
            text="Idea Wellness opened its first performance club with one mission: make elite coaching and disciplined training accessible to everyday athletes."
            className="mb-6 text-xl md:text-2xl lg:text-3xl font-display uppercase leading-tight"
          />
          <div className="mb-8">
            <TimelineWordReveal
              text="Opened the first Idea Wellness location"
              className="mb-3 text-xl md:text-2xl lg:text-3xl font-display uppercase leading-tight"
            />
            <TimelineWordReveal
              text="Built the original strength and conditioning blueprint"
              className="mb-3 text-xl md:text-2xl lg:text-3xl font-display uppercase leading-tight"
            />
            <TimelineWordReveal
              text="Launched personalized onboarding for new members"
              className="text-xl md:text-2xl lg:text-3xl font-display uppercase leading-tight"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2014",
      content: (
        <div>
          <TimelineWordReveal
            text="The community crossed 1,000 active members and Idea Wellness launched its second location with dedicated strength, conditioning, and recovery zones."
            className="mb-6 text-xl md:text-2xl lg:text-3xl font-display uppercase leading-tight"
          />
          <TimelineWordReveal
            text="Group classes and one-on-one coaching became the core of our member experience, improving consistency, confidence, and long-term results."
            className="mb-6 text-xl md:text-2xl lg:text-3xl font-display uppercase leading-tight"
          />
          <div className="mb-8">
            <TimelineWordReveal
              text="Crossed 1,000 active members"
              className="mb-3 text-xl md:text-2xl lg:text-3xl font-display uppercase leading-tight"
            />
            <TimelineWordReveal
              text="Opened a second location"
              className="mb-3 text-xl md:text-2xl lg:text-3xl font-display uppercase leading-tight"
            />
            <TimelineWordReveal
              text="Added structured group and coaching programs"
              className="text-xl md:text-2xl lg:text-3xl font-display uppercase leading-tight"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <TimelineWordReveal
            text="Idea Wellness reached 12 locations nationwide and was recognized as a leading premium gym experience."
            className="mb-4 text-xl md:text-2xl lg:text-3xl font-display uppercase leading-tight"
          />
          <div className="mb-8">
            <TimelineWordReveal
              text="Expanded to 12 high-performance clubs"
              className="mb-3 text-xl md:text-2xl lg:text-3xl font-display uppercase leading-tight"
            />
            <TimelineWordReveal
              text="Launched science-backed recovery programs"
              className="mb-3 text-xl md:text-2xl lg:text-3xl font-display uppercase leading-tight"
            />
            <TimelineWordReveal
              text="Built a 50+ coach education system"
              className="mb-3 text-xl md:text-2xl lg:text-3xl font-display uppercase leading-tight"
            />
            <TimelineWordReveal
              text="Introduced member journey analytics"
              className="mb-3 text-xl md:text-2xl lg:text-3xl font-display uppercase leading-tight"
            />
            <TimelineWordReveal
              text="Maintained 98% member satisfaction"
              className="text-xl md:text-2xl lg:text-3xl font-display uppercase leading-tight"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}