import React from "react";
import { SectionLabel } from "../ui/SectionLabel";
import { ProcessCard } from "../ui/ProcessCard";
import {
  Lightbulb,
  BarChart2,
  Palette,
  Code2,
  CheckSquare,
  Rocket,
} from "lucide-react";

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Concept",
      description:
        "Flesh out features, outline target user profiles, and align core expectations.",
      icon: Lightbulb,
    },
    {
      number: "02",
      title: "Analysis",
      description:
        "Evaluate APIs, choose hosting frameworks, and mapping out the database.",
      icon: BarChart2,
    },
    {
      number: "03",
      title: "Design",
      description:
        "Draft modern Figma frames, prototype dashboards, and refine brand assets.",
      icon: Palette,
    },
    {
      number: "04",
      title: "Develop",
      description:
        "Program custom workflows, integrate payment channels, and build responsive layouts.",
      icon: Code2,
    },
    {
      number: "05",
      title: "QA Testing",
      description:
        "Review cross-browser views, run automation scripts, and audit code quality.",
      icon: CheckSquare,
    },
    {
      number: "06",
      title: "Launch",
      description:
        "Deploy platforms to client servers, launch companion mobile apps, and go live.",
      icon: Rocket,
    },
  ];

  return (
    <section className="bg-dark text-white py-20 md:py-28 relative overflow-hidden">
      {/* Decorative gradient background glows */}
      <div className="absolute top-0 right-12 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-12 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-xl mx-auto mb-16 animate-fade-up">
          <SectionLabel light={true}>Delivery Roadmap</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-3">
            Empowering Your Startup
          </h2>
          <p className="text-sm text-white/60 mt-3 leading-relaxed">
            Converting an idea into a successful business demands domain
            knowledge, technical proficiency, deep understanding, and dedication.
            Our technology platforms and frameworks help startup ideas reach the
            market faster.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step) => (
            <ProcessCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
