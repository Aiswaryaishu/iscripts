"use client";

import React from "react";
import TeamShowcase from "../ui/team-showcase";

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Premium Multi-Layered Section Divider */}
      <div className="absolute top-0 inset-x-0 h-px flex items-center justify-center pointer-events-none z-20">
        {/* Base Faded Slate Line */}
        <div className="w-[85%] max-w-6xl h-[1px] bg-gradient-to-r from-transparent via-slate-200/80 to-transparent" />
        
        {/* Centered Primary Accent Flare */}
        <div className="absolute w-80 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-[1.1] text-dark mt-3">
            Platform Capabilities
          </h2>
          <p className="text-sm md:text-base text-foreground/65 mt-4 leading-relaxed font-medium max-w-lg mx-auto">
            Discover the turnkey features, unencrypted source code, and dedicated technical support powering our digital business platforms.
          </p>
        </div>

        {/* Team Showcase */}
        <div className="w-full">
          <TeamShowcase />
        </div>
      </div>
    </section>
  );
};
