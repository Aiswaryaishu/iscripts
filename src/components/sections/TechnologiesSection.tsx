import React from "react";

export const TechnologiesSection: React.FC = () => {
  const technologies = [
    { name: "PHP", category: "Backend" },
    { name: "MySQL", category: "Database" },
    { name: "React Native", category: "Mobile" },
    { name: "Node.js", category: "Runtime" },
    { name: "Angular", category: "Frontend" },
    { name: "iOS", category: "Mobile" },
    { name: "Android", category: "Mobile" },
    { name: "AWS", category: "Cloud" },
    { name: ".NET", category: "Enterprise" },
  ];

  return (
    <section className="bg-white py-12 border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Section heading context */}
          <div className="shrink-0 text-center md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/40">
              Modern Tech Stack
            </h4>
            <p className="text-sm font-extrabold text-dark mt-1">
              Built on Reliable Foundations
            </p>
          </div>

          {/* Scrolling-like Pill Strip */}
          <div className="flex flex-wrap justify-center md:justify-end gap-3 max-w-4xl">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="group flex items-center gap-2 bg-muted border border-border px-4 py-2 rounded-full hover:border-primary/20 hover:bg-white hover:shadow-md transition-all duration-300 cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                <span className="text-xs font-bold text-dark">{tech.name}</span>
                <span className="text-[9px] text-foreground/45 group-hover:text-primary transition-colors font-mono">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
