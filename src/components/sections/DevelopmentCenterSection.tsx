import React from "react";
import { SectionLabel } from "../ui/SectionLabel";
import { Users, Monitor, MessageSquareCode, Sparkles } from "lucide-react";

export const DevelopmentCenterSection: React.FC = () => {
  const centers = [
    {
      title: "Core Team",
      label: "Team",
      description: "Dedicated developers, designers, and project experts.",
      icon: Users,
      gradient: "from-red-500 to-orange-600",
    },
    {
      title: "Modern Workspace",
      label: "Workspace",
      description: "Cutting-edge infrastructure for seamless execution.",
      icon: Monitor,
      gradient: "from-indigo-500 to-blue-600",
    },
    {
      title: "Collaboration",
      label: "Collaboration",
      description: "Daily scrums, reviews, and interactive workshops.",
      icon: MessageSquareCode,
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Shared Culture",
      label: "Culture",
      description: "Continuous learning, innovation, and value creation.",
      icon: Sparkles,
      gradient: "from-teal-500 to-emerald-600",
    },
  ];

  return (
    <section className="bg-muted py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16 animate-fade-up">
          <SectionLabel>Our Center</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark tracking-tight mt-3">
            Our Development Center
          </h2>
          <p className="text-sm text-foreground/60 mt-3 leading-relaxed">
            Take a look inside the engineering hubs where our platforms are
            designed, coded, tested, and optimized.
          </p>
        </div>

        {/* Modern Image Grid Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {centers.map((center) => {
            const Icon = center.icon;
            return (
              <div
                key={center.label}
                className="group relative bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Gradient Visual Box */}
                <div className="relative h-44 w-full overflow-hidden bg-muted flex items-center justify-center">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${center.gradient} opacity-90 transition-transform duration-500 group-hover:scale-105`}
                  />

                  {/* Abstract Grid Elements */}
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff20_1px,transparent_1px)] bg-[size:16px_16px]" />

                  {/* Icon */}
                  <div className="relative z-10 w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center backdrop-blur-md border border-white/20 shadow-lg transition-transform duration-300 group-hover:rotate-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Eyebrow Label */}
                  <span className="absolute top-4 left-4 text-[10px] font-bold text-white bg-black/20 border border-white/10 px-2 py-0.5 rounded-full uppercase tracking-widest backdrop-blur-sm">
                    {center.label}
                  </span>
                </div>

                {/* Info Box */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-dark mb-1 group-hover:text-primary transition-colors">
                      {center.title}
                    </h3>
                    <p className="text-xs text-foreground/75 leading-relaxed">
                      {center.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
