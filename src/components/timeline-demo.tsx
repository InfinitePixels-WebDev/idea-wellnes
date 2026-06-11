import React from "react";
import { Timeline, TimelineWordReveal } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "2014",
      content: (
        <div>
          <TimelineWordReveal
            lines={[
              "IDEA® Wellness was founded in 2014 by Marc T. Bahoury, a pharmacy graduate from GUC and ex-Novartis pharmacist.",
              "Established with a core vision that exercise is essential to a healthy, well-balanced life.",
              "Launched Heliopolis premier venue, integrating physical strength, performance, and enjoyment.",
              "Introduced holistic personal training tailored to individual client needs.",
            ]}
            showBullets
            className="mb-8 text-xl md:text-2xl lg:text-3xl font-display leading-tight"
          />
        </div>
      ),
    },
    {
      title: "2018",
      content: (
        <div>
          <TimelineWordReveal
            lines={[
              "Organically grew the community to over 600 active members, building a highly comfortable and supportive family atmosphere.",
              "Expanded the fitness portfolio to over 15 class types, ranging from Kids Fit & Ballet to adult CrossFit, Pilates, and Bodybuilding.",
              "Assembled an elite team of 18 highly educated, certified, and passionate fitness coaches.",
              "Limited class sizes to a maximum of 30 trainees to guarantee personalized training guidance.",
            ]}
            showBullets
            className="mb-8 text-xl md:text-2xl lg:text-3xl font-display leading-tight"
          />
        </div>
      ),
    },
    {
      title: "2024 & Beyond",
      content: (
        <div>
          <TimelineWordReveal
            lines={[
              "Expanded presence to premium indoor and outdoor fitness destinations in New Cairo and North Coast (Ramla North Coast).",
              "Launched specialized Corporate Wellness programs for multinationals, including stress management workshops and travel retreats.",
              "Introduced 24/7 client accessibility and full-spectrum nutritional lifestyle support, including meal planning, customized prep tips, and recipes.",
              "Pioneered high-energy Summer Beach Competitions in North Coast, transforming member expectations into measurable results.",
            ]}
            showBullets
            className="mb-8 text-xl md:text-2xl lg:text-3xl font-display leading-tight"
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