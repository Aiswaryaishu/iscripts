import React from "react";
import { Button } from "../ui/Button";
import {
  BriefcaseBusiness,
  ChartNoAxesCombined,
  CircleDollarSign,
  Headphones,
  Settings2,
  ShieldCheck,
} from "lucide-react";

export const CustomizationSection: React.FC = () => {
  const services = [
    {
      title: "Business Planning",
      description:
        "Plan your marketplace, workflow, feature set, and launch roadmap with our product specialists.",
      icon: BriefcaseBusiness,
    },
    {
      title: "Tech Strategy",
      description:
        "Choose the right platform architecture, integrations, and scaling path for your business.",
      icon: ChartNoAxesCombined,
    },
    {
      title: "Financial Advice",
      description:
        "Understand launch costs, customization budgets, and ownership advantages before you build.",
      icon: CircleDollarSign,
    },
    {
      title: "Insurance Strategy",
      description:
        "Protect your business with risk planning, support policies, and continuity recommendations.",
      icon: ShieldCheck,
    },
    {
      title: "Start Ups",
      description:
        "Get hands-on product guidance for setup, launch, customization, and growth planning.",
      icon: Settings2,
    },
    {
      title: "Manage Investment",
      description:
        "Use your budget efficiently across product setup, custom features, integrations, and support.",
      icon: Headphones,
    },
  ];

  return (
    <section id="services" className="relative overflow-hidden bg-white py-20 text-dark md:py-28">
      {/* Premium Multi-Layered Section Divider */}
      <div className="absolute top-0 inset-x-0 h-px flex items-center justify-center pointer-events-none z-20">
        {/* Base Faded Slate Line */}
        <div className="w-[85%] max-w-6xl h-[1px] bg-gradient-to-r from-transparent via-slate-200/80 to-transparent" />
        
        {/* Centered Primary Accent Flare */}
        <div className="absolute w-80 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:34px_34px] pointer-events-none" />
      <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="absolute bottom-0 right-0 hidden h-72 w-56 lg:block">
        <div className="absolute right-0 bottom-0 h-0 w-0 border-b-[72px] border-l-[92px] border-b-primary border-l-transparent" />
        <div className="absolute right-0 bottom-[72px] h-0 w-0 border-b-[72px] border-l-[92px] border-b-primary/80 border-l-transparent" />
        <div className="absolute right-[92px] bottom-[36px] h-0 w-0 border-b-[72px] border-l-[92px] border-b-primary/70 border-l-transparent" />
        <div className="absolute right-0 bottom-[144px] h-0 w-0 border-b-[72px] border-l-[92px] border-b-slate-800/20 border-l-transparent" />
        <div className="absolute right-[92px] bottom-[108px] h-0 w-0 border-b-[72px] border-l-[92px] border-b-slate-800/15 border-l-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-black leading-tight tracking-tight text-dark md:text-4xl lg:text-5xl">
              What services we provide to our customers business
            </h2>
          </div>

          <a href="#contact" className="shrink-0">
            <Button variant="primary" size="sm" showArrow={true} className="px-6">
              View More
            </Button>
          </a>
        </div>

        <div className="grid max-w-5xl grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div key={service.title} className="group flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary/15 bg-primary/5 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-base font-black text-dark transition-colors duration-300 group-hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-foreground/60">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
