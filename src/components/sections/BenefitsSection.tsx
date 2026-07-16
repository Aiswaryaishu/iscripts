"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/Button";
import { CheckCircle2 } from "lucide-react";

export const BenefitsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1.35);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Visibility percentage from 0 to 1 based on position in viewport
      const scrollPercent = (rect.top + rect.height) / (viewportHeight + rect.height);
      const clampedPercent = Math.min(Math.max(scrollPercent, 0), 1);
      
      // Scale ranges from 1.0 (fully scrolled past) to 1.35 (fully visible/entering)
      const newScale = 1.0 + clampedPercent * 0.35;
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabs = [
    {
      name: "Turnkey Launch",
      title: "Launch Instantly",
      description:
        "Skip months of expensive development and design iteration. Get fully complete, pre-packaged script solutions that allow you to launch your multi-vendor marketplace or e-commerce store in just a couple of days.",
      bullets: [
        "100% Owned Source Code",
        "Fully production-ready core",
        "Zero developer licensing fees"
      ],
      image: "/iscripts_ai_generator.png",
    },
    {
      name: "Free Installation",
      title: "Zero-Stress Setup",
      description:
        "Leave all server-side complexity to our engineering specialists. We will handle the database creation, script uploading, environment variables, and initial configuration on your server completely free of cost.",
      bullets: [
        "Server check & compatibility",
        "Database mapping & installation",
        "Domain mapping assistance"
      ],
      image: "/iscripts_cpu_box.png",
    },
    {
      name: "White Label Control",
      title: "100% Brand Ownership",
      description:
        "Make it entirely your own company. Remove all traces of iScripts vendor branding, set up your custom domain, customize headers and footers, and serve your clients under your unique brand identity.",
      bullets: [
        "Complete branding removal",
        "Custom domain configuration",
        "Full brand layout control"
      ],
      image: "/iscripts_robot_head.png",
    },
    {
      name: "Easy Customization",
      title: "Tailored to Your Vision",
      description:
        "Adjust workflows, add localized payment gateways, or integrate custom third-party APIs. Our in-house technical team is available to help you build bespoke features tailored directly to your business plan.",
      bullets: [
        "Bespoke feature development",
        "Third-party API integrations",
        "Custom workflow adjustments"
      ],
      image: "/iscripts_laptop_code.png",
    },
  ];

  return (
    <section ref={sectionRef} id="benefits" className="relative bg-white text-dark py-20 md:py-32 overflow-hidden z-10">
      
      {/* Subtle ambient overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT COLUMN: Clickable Advantage Tabs and Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-[1.1] text-black mb-8 mt-3">
              Use iScripts Today And Launch Fast
            </h2>

            {/* Horizontal Tabs Selection */}
            <div className="flex flex-wrap gap-2.5 mb-8 border-b border-slate-100 pb-5 w-full">
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-wider transition-all duration-300 ${
                    activeTab === idx
                      ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105"
                      : "bg-slate-50 text-foreground/75 hover:bg-slate-100 hover:text-dark border border-slate-200"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Dynamic Active Tab Content */}
            <div key={activeTab} className="animate-fade-up w-full">
              
              <p className="text-sm md:text-base text-foreground/75 leading-relaxed font-semibold mb-6">
                {tabs[activeTab].description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {tabs[activeTab].bullets.map((bullet, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-xs md:text-sm font-bold text-dark/95">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href="#contact">
              <Button variant="primary" size="md" showArrow={true}>
                Get Started Now
              </Button>
            </a>
          </div>

          {/* RIGHT COLUMN: Dynamic 3D Illustration transition */}
          <div className="lg:col-span-7 relative flex items-center justify-center w-full">
            
            {/* Dynamic Card Container */}
            <div key={activeTab} className="relative w-full max-w-2xl xl:max-w-3xl aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-slate-100 bg-white/80 p-2 animate-fade-up">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src={tabs[activeTab].image}
                  alt={tabs[activeTab].name}
                  fill
                  className="object-cover transition-transform duration-300 ease-out"
                  style={{ transform: `scale(${scale})` }}
                  priority
                />
              </div>
            </div>

            {/* Subtle glow floater behind image */}
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-[80px] z-0 pointer-events-none" />

          </div>

        </div>
      </div>
    </section>
  );
};
