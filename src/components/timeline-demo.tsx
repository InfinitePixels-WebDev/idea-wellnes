import React from "react";
import { Timeline, TimelineWordReveal } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "2011",
      content: (
        <div>
          <TimelineWordReveal
            lines={[
              "Idea Wellness launched its first performance club with a clear mission: elite coaching for everyday athletes.",
              "First Idea Wellness location opened",
              "Core strength and conditioning method introduced",
              "Personalized member onboarding launched",
            ]}
            showBullets
            className="mb-8 text-xl md:text-2xl lg:text-3xl font-display uppercase leading-tight"
          />
        </div>
      ),
    },
    {
      title: "2014",
      content: (
        <div>
          <TimelineWordReveal
            lines={[
              "The community passed 1,000 active members as Idea Wellness opened a second location.",
              "Group classes and one-on-one coaching became the center of the member journey.",
              "1,000 active members milestone reached",
              "Second location opened",
              "Structured coaching programs expanded",
            ]}
            showBullets
            className="mb-8 text-xl md:text-2xl lg:text-3xl font-display uppercase leading-tight"
          />
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <TimelineWordReveal
            lines={[
              "Idea Wellness reached 12 locations and became a recognized premium fitness brand.",
              "Expanded to 12 performance clubs",
              "Recovery programs launched",
              "Coach education system scaled",
              "Member journey analytics introduced",
              "98% satisfaction maintained",
            ]}
            showBullets
            className="mb-8 text-xl md:text-2xl lg:text-3xl font-display uppercase leading-tight"
          />
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