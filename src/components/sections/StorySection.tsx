"use client";

import React from "react";
import { Button } from "@/components/ui/Button";

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="relative bg-dark text-white -mt-16 md:-mt-24 pt-0 pb-20 md:pb-32 overflow-hidden z-10">
      
      {/* Background Subtle Gradient & Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          
          {/* LEFT COLUMN: 3D Video Illustration */}
          <div className="lg:col-span-7 relative flex items-center justify-center w-full animate-fade-up">
            <div className="relative w-full max-w-2xl xl:max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-950">
              <video
                src="/1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Copy and Mission details */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[1.1] text-white mb-6">
              Ready-to-Go Platforms Start and Scale Faster
            </h2>

            <div className="space-y-6 text-sm md:text-base text-white/70 leading-relaxed font-medium mb-8">
              <p>
                We help bring your startup idea to life. Our powerful technology platforms make your time to 
                market almost zero. You can get started with your website or mobile apps with custom front-end 
                UI, advanced admin dashboards, and powerful analytics panels in no time. Our customization team 
                can help you make any necessary changes to these feature-rich platforms. Our 24/7 customer 
                support helps you whenever you have a question or issue.
              </p>
            </div>

            <a href="#products">
              <Button variant="primary" size="md" showArrow={true}>
                Explore Platforms
              </Button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
