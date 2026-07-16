"use client";

import React from "react";
import BackgroundScene from "@/components/ui/aurora-section-hero";
import { Button } from "@/components/ui/Button";
import {
  Settings,
  Terminal,
  Cpu,
  Workflow,
  Share2,
  CheckCircle,
  Layers,
  Smartphone,
  Rocket,
} from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <>
      <section className="relative bg-white text-dark overflow-hidden pt-28 pb-0">
      {/* Background split layout */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Dark Background with Multi-Segment Contour Split wrapping the robot silhouette */}
        <div className="absolute inset-0 bg-dark [clip-path:polygon(65%_0,55%_30%,55%_75%,0_88%,0_100%,100%_100%,100%_0)] hidden lg:block" />
        {/* Mobile fallback: top white, bottom half dark */}
        <div className="absolute inset-x-0 bottom-0 top-[55%] bg-dark lg:hidden" />

        {/* Subtle grid on right dark area conforming to clip-path */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 [clip-path:polygon(65%_0,55%_30%,55%_75%,0_88%,0_100%,100%_100%,100%_0)] hidden lg:block" />

        {/* Dynamic contour line overlay matching the split boundary */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block z-10">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Double path for a glowing red/white edge */}
            <path 
              d="M 65,0 L 55,30 L 55,75 L 0,88" 
              stroke="#e53935" 
              strokeWidth="0.3" 
              strokeOpacity="0.5"
              fill="none" 
            />
            <path 
              d="M 65,0 L 55,30 L 55,75 L 0,88" 
              stroke="#ffffff" 
              strokeWidth="0.1" 
              fill="none" 
            />
            <circle cx="65" cy="0" r="0.4" fill="#eaeaea" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Grid layout matching the image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* LEFT SIDE CONTENT (White Background) */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-8 relative lg:mt-20">
            
            {/* Far-left vertical HUD system status line */}
            <div className="absolute -left-6 top-[15%] bottom-[15%] w-[1px] bg-slate-100 hidden xl:flex flex-col justify-between items-center py-6 z-20">
              <span className="text-[7px] font-bold text-slate-300 tracking-[0.2em] [writing-mode:vertical-lr] rotate-180">SYSTEM HUD STATUS</span>
              <div className="flex flex-col gap-3 items-center">
                <span className="w-1 h-1 rounded-full bg-primary/40 animate-pulse" />
                <span className="w-0.5 h-0.5 rounded-full bg-slate-300" />
                <span className="w-0.5 h-0.5 rounded-full bg-slate-300" />
                <span className="w-1 h-1 rounded-full bg-primary/40 animate-pulse" />
              </div>
              <span className="text-[7px] font-mono text-slate-300">V4.0</span>
            </div>

            {/* Soft Ambient Text Glow */}
            <div className="absolute -top-12 -left-24 w-[360px] h-[360px] bg-primary/5 rounded-full blur-[100px] pointer-events-none z-0" />
            


            {/* Elegant Bold Serif Title with Shimmer animations */}
            <h1 className="relative z-10 text-4xl md:text-6xl lg:text-[68px] font-serif font-light tracking-tight leading-[1.05] mb-3 animate-fade-up text-left">
              <span className="text-[#0f172a] font-light">DIGITAL PRODUCT</span>
              <br />
              <span className="text-[#e53935] font-light">DEVELOPMENT</span>
            </h1>

            {/* Horizontal HUD Line */}
            <div className="relative w-full max-w-[200px] h-[1px] bg-slate-100 mb-8 mt-2 animate-fade-up [animation-delay:50ms] text-left">
              <div className="absolute left-0 top-0 w-full h-[1px] bg-gradient-to-r from-[#e53935] to-transparent" />
              <span className="absolute left-0 top-[-3.5px] w-2 h-2 rounded-full border border-[#e53935] bg-white flex items-center justify-center">
                <span className="w-0.5 h-0.5 rounded-full bg-[#e53935]" />
              </span>
            </div>

            {/* Subcopy text */}
            <div className="relative mb-8 animate-fade-up [animation-delay:100ms] w-full max-w-xl text-left">
              <p className="text-sm md:text-[15px] text-slate-500 leading-relaxed font-semibold">
                We build high-performance, scalable software platforms and digital products that help businesses move faster, reduce time-to-market, and create lasting impact. From idea to launch and beyond—we engineer solutions that are secure, reliable, and built for growth.
              </p>
            </div>

            {/* Three-Column Feature Grid */}
            <div className="relative z-10 grid grid-cols-3 gap-3 sm:gap-4 py-4 mb-8 w-full max-w-xl animate-fade-up [animation-delay:150ms]">
              {/* Col 1 */}
              <div className="group relative flex flex-col md:flex-row items-center md:items-start gap-3 p-3.5 rounded-2xl bg-slate-50/50 backdrop-blur-sm border border-slate-100/70 hover:bg-white hover:border-slate-200/80 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.03)] transition-all duration-300 cursor-pointer">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#e53935]/5 border border-[#e53935]/10 flex items-center justify-center text-[#e53935] group-hover:bg-[#e53935] group-hover:text-white transition-all duration-300">
                  <Rocket className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="text-center md:text-left">
                  <div className="text-[12.5px] font-bold text-[#0f172a] leading-tight group-hover:text-[#e53935] transition-colors duration-300">Ready-to-launch</div>
                  <div className="text-[11px] font-semibold text-slate-400 mt-0.5">platforms</div>
                </div>
              </div>

              {/* Col 2 */}
              <div className="group relative flex flex-col md:flex-row items-center md:items-start gap-3 p-3.5 rounded-2xl bg-slate-50/50 backdrop-blur-sm border border-slate-100/70 hover:bg-white hover:border-slate-200/80 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.03)] transition-all duration-300 cursor-pointer">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#e53935]/5 border border-[#e53935]/10 flex items-center justify-center text-[#e53935] group-hover:bg-[#e53935] group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-[12.5px] font-bold text-[#0f172a] leading-tight group-hover:text-[#e53935] transition-colors duration-300">Custom</div>
                  <div className="text-[11px] font-semibold text-slate-400 mt-0.5">development</div>
                </div>
              </div>

              {/* Col 3 */}
              <div className="group relative flex flex-col md:flex-row items-center md:items-start gap-3 p-3.5 rounded-2xl bg-slate-50/50 backdrop-blur-sm border border-slate-100/70 hover:bg-white hover:border-slate-200/80 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.03)] transition-all duration-300 cursor-pointer">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#e53935]/5 border border-[#e53935]/10 flex items-center justify-center text-[#e53935] group-hover:bg-[#e53935] group-hover:text-white transition-all duration-300">
                  <Layers className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="text-center md:text-left">
                  <div className="text-[12.5px] font-bold text-[#0f172a] leading-tight group-hover:text-[#e53935] transition-colors duration-300">Scalable</div>
                  <div className="text-[11px] font-semibold text-slate-400 mt-0.5">architecture</div>
                </div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="relative z-10 flex items-center flex-wrap gap-6 w-full mb-10 animate-fade-up [animation-delay:200ms]">
              <a href="#products">
                <Button 
                  variant="primary" 
                  size="md" 
                  showArrow={true}
                  className="bg-gradient-to-r from-[#e53935] to-[#ef5350] hover:from-[#d32f2f] hover:to-[#e53935] shadow-[0_6px_20px_rgba(229,57,53,0.25)] border-0 text-white font-serif font-bold text-sm tracking-wide"
                >
                  Explore Platforms
                </Button>
              </a>
              <a href="#contact">
                <Button 
                  variant="ghost" 
                  size="md" 
                  showArrow={true}
                  className="bg-slate-50/60 border border-slate-200/80 hover:border-primary/25 text-slate-800 hover:text-primary font-serif font-bold text-sm tracking-wide px-6 py-3 rounded-full shadow-sm hover:shadow transition-all duration-300"
                >
                  Get in Touch
                </Button>
              </a>
            </div>


          </div>
          {/* RIGHT SIDE CONTENT (Dark Background) */}
          <div className="lg:col-span-5 relative flex flex-col justify-center items-center py-10 lg:py-20 min-h-[600px]">

            {/* Professional Neural Circuit Bus connecting the CPU and Head */}
            <svg 
              className="absolute top-[33%] bottom-[22%] w-44 z-10 pointer-events-none overflow-visible lg:translate-x-18" 
              viewBox="0 0 120 200" 
              fill="none" 
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="circuit-glow" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#e53935" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#e53935" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#e53935" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* Tightly Congested PCB Parallel Traces (15 Paths) */}
              <path d="M 55 0 L 55 40 L 95 80 L 95 140 L 110 155 L 110 200" stroke="#e53935" strokeWidth="1.2" strokeOpacity="0.45" />
              <path d="M 57 0 L 57 40 L 97 80 L 97 140 L 112 155 L 112 200" stroke="#e53935" strokeWidth="1.2" strokeOpacity="0.45" />
              <path d="M 59 0 L 59 40 L 99 80 L 99 140 L 114 155 L 114 200" stroke="#e53935" strokeWidth="1.2" strokeOpacity="0.45" />
              <path d="M 61 0 L 61 40 L 101 80 L 101 140 L 116 155 L 116 200" stroke="#e53935" strokeWidth="1.2" strokeOpacity="0.45" />
              <path d="M 63 0 L 63 40 L 103 80 L 103 140 L 118 155 L 118 200" stroke="#e53935" strokeWidth="1.2" strokeOpacity="0.45" />
              <path d="M 65 0 L 65 40 L 105 80 L 105 140 L 120 155 L 120 200" stroke="#e53935" strokeWidth="1.2" strokeOpacity="0.45" />
              <path d="M 67 0 L 67 40 L 107 80 L 107 140 L 122 155 L 122 200" stroke="#e53935" strokeWidth="1.2" strokeOpacity="0.45" />
              
              {/* Center Bright Track */}
              <path d="M 69 0 L 69 40 L 109 80 L 109 140 L 124 155 L 124 200" stroke="#e53935" strokeWidth="1.8" strokeOpacity="0.75" strokeDasharray="3 2" />
              
              <path d="M 71 0 L 71 40 L 111 80 L 111 140 L 126 155 L 126 200" stroke="#e53935" strokeWidth="1.2" strokeOpacity="0.45" />
              <path d="M 73 0 L 73 40 L 113 80 L 113 140 L 128 155 L 128 200" stroke="#e53935" strokeWidth="1.2" strokeOpacity="0.45" />
              <path d="M 75 0 L 75 40 L 115 80 L 115 140 L 130 155 L 130 200" stroke="#e53935" strokeWidth="1.2" strokeOpacity="0.45" />
              <path d="M 77 0 L 77 40 L 117 80 L 117 140 L 132 155 L 132 200" stroke="#e53935" strokeWidth="1.2" strokeOpacity="0.45" />
              <path d="M 79 0 L 79 40 L 119 80 L 119 140 L 134 155 L 134 200" stroke="#e53935" strokeWidth="1.2" strokeOpacity="0.45" />
              <path d="M 81 0 L 81 40 L 121 80 L 121 140 L 136 155 L 136 200" stroke="#e53935" strokeWidth="1.2" strokeOpacity="0.45" />
              <path d="M 83 0 L 83 40 L 123 80 L 123 140 L 138 155 L 138 200" stroke="#e53935" strokeWidth="1.2" strokeOpacity="0.45" />

              {/* Glowing Junction Dots */}
              <circle cx="69" cy="40" r="2" fill="#e53935" fillOpacity="0.8" className="animate-pulse" />
              <circle cx="109" cy="80" r="2" fill="#e53935" fillOpacity="0.8" className="animate-pulse" />
              <circle cx="109" cy="140" r="2" fill="#e53935" fillOpacity="0.8" className="animate-pulse" />

              {/* Animated pulses travelling UP the congested bundle */}

              {/* Pulse 2 */}
              <circle r="2.4" fill="#e53935">
                <animateMotion path="M 57 0 L 57 40 L 97 80 L 97 140 L 112 155 L 112 200" dur="2.4s" repeatCount="indefinite" />
              </circle>

              {/* Pulse 3 */}
              <circle r="2.2" fill="#e53935">
                <animateMotion path="M 61 0 L 61 40 L 101 80 L 101 140 L 116 155 L 116 200" dur="2.1s" repeatCount="indefinite" />
              </circle>

              {/* Pulse 4 */}
              <circle r="2.2" fill="#e53935">
                <animateMotion path="M 65 0 L 65 40 L 105 80 L 105 140 L 120 155 L 120 200" dur="2.7s" repeatCount="indefinite" />
              </circle>

              {/* Pulse 5 */}
              <circle r="2.0" fill="#e53935">
                <animateMotion path="M 73 0 L 73 40 L 113 80 L 113 140 L 128 155 L 128 200" dur="2.5s" repeatCount="indefinite" />
              </circle>

              {/* Pulse 6 */}
              <circle r="2.0" fill="#e53935">
                <animateMotion path="M 77 0 L 77 40 L 117 80 L 117 140 L 132 155 L 132 200" dur="2.3s" repeatCount="indefinite" />
              </circle>

              {/* Pulse 7 */}
              <circle r="2.0" fill="#e53935">
                <animateMotion path="M 81 0 L 81 40 L 121 80 L 121 140 L 136 155 L 136 200" dur="2.0s" repeatCount="indefinite" />
              </circle>
            </svg>

            {/* Stacked visual images matching layout */}
            <div className="relative z-20 w-full max-w-md flex flex-col gap-4 px-4 items-center lg:translate-x-18 -mt-10 lg:-mt-16">
              
              {/* Top Robot Head Image */}
              <div className="relative w-full flex justify-center lg:translate-x-4 animate-float-slow">
                
                {/* Neural Aura Background Lines */}
                <svg className="absolute w-[160%] h-[160%] -top-[30%] -left-[30%] pointer-events-none z-0 overflow-visible" viewBox="0 0 200 200">
                  <defs>
                    <radialGradient id="mask-grad" cx="50%" cy="50%" r="50%">
                      <stop offset="30%" stopColor="#ffffff" stopOpacity="1" />
                      <stop offset="75%" stopColor="#ffffff" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                    </radialGradient>
                    <mask id="fade-mask">
                      <circle cx="100" cy="110" r="95" fill="url(#mask-grad)" />
                    </mask>
                  </defs>
                  
                  <g mask="url(#fade-mask)">
                    {/* Neural branch paths radiating outwards (13 paths) */}
                    <path d="M 100 110 L 125 85 L 165 85 L 195 55" stroke="#e53935" strokeWidth="1.2" strokeOpacity="0.4" fill="none" />
                    <path d="M 105 115 L 135 100 L 175 100 L 195 80" stroke="#e53935" strokeWidth="0.8" strokeOpacity="0.3" fill="none" />
                    <path d="M 100 100 L 100 55 L 125 30" stroke="#e53935" strokeWidth="1.0" strokeOpacity="0.35" fill="none" />
                    <path d="M 95 105 L 70 80 L 35 80 L 10 55" stroke="#e53935" strokeWidth="1.2" strokeOpacity="0.4" fill="none" />
                    <path d="M 110 115 L 140 115 L 170 85 L 195 85" stroke="#e53935" strokeWidth="1.0" strokeOpacity="0.35" fill="none" />
                    <path d="M 110 125 L 145 125 L 170 150 L 195 150" stroke="#e53935" strokeWidth="0.8" strokeOpacity="0.3" fill="none" />
                    <path d="M 90 120 L 65 145 L 30 145 L 10 165" stroke="#e53935" strokeWidth="1.0" strokeOpacity="0.35" fill="none" />
                    
                    <path d="M 95 110 L 60 95 L 30 95 L 5 70" stroke="#e53935" strokeWidth="0.8" strokeOpacity="0.3" fill="none" />
                    <path d="M 100 95 L 85 80 L 85 45 L 70 30" stroke="#e53935" strokeWidth="0.8" strokeOpacity="0.25" fill="none" />
                    <path d="M 105 105 L 115 70 L 140 45 L 155 30" stroke="#e53935" strokeWidth="1.0" strokeOpacity="0.3" fill="none" />
                    <path d="M 105 120 L 130 140 L 155 140 L 180 165" stroke="#e53935" strokeWidth="0.8" strokeOpacity="0.25" fill="none" />
                    <path d="M 95 125 L 70 150 L 50 150 L 25 175" stroke="#e53935" strokeWidth="0.8" strokeOpacity="0.25" fill="none" />
                    <path d="M 90 115 L 60 115 L 40 95 L 15 95" stroke="#e53935" strokeWidth="1.0" strokeOpacity="0.3" fill="none" />

                    {/* Animated signals firing outwards (11 active pulses, sizes reduced) */}
                    <circle r="1.2" fill="#ffffff" className="shadow-[0_0_5px_#ffffff]">
                      <animateMotion path="M 100 110 L 125 85 L 165 85 L 195 55" dur="1.7s" repeatCount="indefinite" />
                    </circle>
                    <circle r="0.8" fill="#e53935">
                      <animateMotion path="M 105 115 L 135 100 L 175 100 L 195 80" dur="2.3s" repeatCount="indefinite" />
                    </circle>
                    <circle r="0.8" fill="#e53935">
                      <animateMotion path="M 100 100 L 100 55 L 125 30" dur="1.9s" repeatCount="indefinite" />
                    </circle>
                    <circle r="1.2" fill="#ffffff" className="shadow-[0_0_5px_#ffffff]">
                      <animateMotion path="M 95 105 L 70 80 L 35 80 L 10 55" dur="2.1s" repeatCount="indefinite" />
                    </circle>
                    <circle r="0.8" fill="#e53935">
                      <animateMotion path="M 110 115 L 140 115 L 170 85 L 195 85" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                    <circle r="0.8" fill="#e53935">
                      <animateMotion path="M 110 125 L 145 125 L 170 150 L 195 150" dur="1.8s" repeatCount="indefinite" />
                    </circle>
                    <circle r="0.8" fill="#e53935">
                      <animateMotion path="M 90 120 L 65 145 L 30 145 L 10 165" dur="2.2s" repeatCount="indefinite" />
                    </circle>
                    
                    <circle r="0.8" fill="#e53935">
                      <animateMotion path="M 95 110 L 60 95 L 30 95 L 5 70" dur="2.0s" repeatCount="indefinite" />
                    </circle>
                    <circle r="0.8" fill="#e53935">
                      <animateMotion path="M 105 105 L 115 70 L 140 45 L 155 30" dur="2.4s" repeatCount="indefinite" />
                    </circle>
                    <circle r="0.8" fill="#e53935">
                      <animateMotion path="M 105 120 L 130 140 L 155 140 L 180 165" dur="2.6s" repeatCount="indefinite" />
                    </circle>
                    <circle r="0.8" fill="#e53935">
                      <animateMotion path="M 90 115 L 60 115 L 40 95 L 15 95" dur="1.9s" repeatCount="indefinite" />
                    </circle>
                  </g>
                </svg>

                <img
                  src="/iscripts_robot_head.png"
                  alt="iScripts Robot Head Core"
                  className="w-full h-auto max-w-[310px] object-contain drop-shadow-[0_0_25px_rgba(229,57,53,0.45)] relative z-10"
                />
              </div>
              
              {/* Bottom CPU Chip Box Image */}
              <div className="relative w-full flex justify-center -mt-32 lg:translate-x-22 animate-float-slow-reverse">
                <img
                  src="/iscripts_cpu_box.png"
                  alt="iScripts CPU Core Box"
                  className="w-full h-auto max-w-[340px] object-contain drop-shadow-[0_0_20px_rgba(229,57,53,0.35)]"
                />
              </div>
            </div>            {/* Floating Widget 1: Top-Left (PERFORMANCE) */}
            <div className="absolute z-20 top-[17%] left-2 lg:-left-[82px] xl:-left-[128px] animate-float-slow hidden md:block transition-all duration-300">
              <div className="relative w-[168px] overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(19,25,39,0.96),rgba(8,11,18,0.86))] p-4 text-left shadow-[0_22px_55px_rgba(0,0,0,0.55),0_0_34px_rgba(229,57,53,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_26px_70px_rgba(0,0,0,0.62),0_0_42px_rgba(229,57,53,0.22)]">
                <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
                <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-primary/15 blur-2xl" />
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase tracking-[0.22em] text-slate-400">EXPERIENCE</span>
                  <svg className="w-4 h-4 text-[#e53935]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V12L15 15M21 12A9 9 0 113 12 9 9 0 0121 12z" />
                  </svg>
                </div>
                <div className="mb-1 text-2xl font-black leading-none text-white">20+ Yrs</div>
                <div className="mb-2 border-b border-white/10 pb-2 text-[8px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  ESTABLISHED SINCE 2003
                </div>
                <div className="h-9 flex items-end">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 100 25">
                    <path
                      d="M0 18 Q15 22 25 12 T50 15 T75 5 T100 10"
                      fill="none"
                      stroke="url(#sparkline-grad)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="100" cy="10" r="3" fill="#e53935" className="animate-ping" />
                    <circle cx="100" cy="10" r="2" fill="#e53935" />
                    <defs>
                      <linearGradient id="sparkline-grad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#e53935" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#e53935" stopOpacity="1" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            {/* Floating Widget 2: Bottom-Left (AUTOMATION) */}
            <div className="absolute z-20 top-[53%] left-6 lg:-left-[92px] xl:-left-[138px] animate-float-slow-reverse hidden md:block transition-all duration-300">
              <div className="relative w-[168px] overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(19,25,39,0.96),rgba(8,11,18,0.86))] p-4 text-left shadow-[0_22px_55px_rgba(0,0,0,0.55),0_0_34px_rgba(229,57,53,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_26px_70px_rgba(0,0,0,0.62),0_0_42px_rgba(229,57,53,0.22)]">
                <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
                <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-primary/15 blur-2xl" />
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase tracking-[0.22em] text-slate-400">CUSTOMERS</span>
                  <svg className="w-4 h-4 text-[#e53935]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87" />
                    <path d="M16 3.13a4 4 0 010 7.75" />
                  </svg>
                </div>
                <div className="mb-2 text-2xl font-black leading-none text-white">12,000+</div>
                <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[90%] rounded-full bg-gradient-to-r from-primary/70 to-primary shadow-[0_0_12px_rgba(229,57,53,0.55)]" />
                </div>
                <div className="border-t border-white/10 pt-2 text-[8px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  TRUSTED GLOBAL CLIENTS
                </div>
              </div>
            </div>

            {/* Floating Widget 3: Top-Right (ANALYTICS) */}
            <div className="absolute z-20 top-[28%] right-2 lg:-right-[92px] xl:-right-[128px] animate-float-slow hidden md:block transition-all duration-300">
              <div className="relative w-[168px] overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(19,25,39,0.96),rgba(8,11,18,0.86))] p-4 text-left shadow-[0_22px_55px_rgba(0,0,0,0.55),0_0_34px_rgba(229,57,53,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_26px_70px_rgba(0,0,0,0.62),0_0_42px_rgba(229,57,53,0.22)]">
                <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
                <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-primary/15 blur-2xl" />
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase tracking-[0.22em] text-slate-400">PLATFORMS</span>
                  <svg className="w-4 h-4 text-[#e53935]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                  </svg>
                </div>
                <div className="mb-1 text-2xl font-black leading-none text-[#e53935]">10+</div>
                <div className="border-b border-white/10 pb-2 text-[8px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  TURNKEY SOLUTIONS
                </div>
                <div className="flex items-end gap-1.5 h-9 mt-2 px-0.5">
                  <div className="w-2 h-[35%] bg-[#e53935]/30 rounded-t-sm" />
                  <div className="w-2 h-[55%] bg-[#e53935]/45 rounded-t-sm" />
                  <div className="w-2 h-[45%] bg-[#e53935]/40 rounded-t-sm" />
                  <div className="w-2 h-[80%] bg-[#e53935]/70 rounded-t-sm animate-pulse" />
                  <div className="w-2 h-[65%] bg-[#e53935]/60 rounded-t-sm" />
                  <div className="w-2 h-[95%] bg-[#e53935] rounded-t-sm shadow-[0_0_8px_rgba(229,57,53,0.55)]" />
                  <div className="w-2 h-[50%] bg-[#e53935]/50 rounded-t-sm" />
                </div>
              </div>
            </div>

            {/* Floating Widget 4: Bottom-Right (UPTIME) */}
            <div className="absolute z-20 top-[58%] right-6 lg:-right-[72px] xl:-right-[108px] animate-float-slow-reverse hidden md:block transition-all duration-300">
              <div className="relative w-[168px] overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(19,25,39,0.96),rgba(8,11,18,0.86))] p-4 text-left shadow-[0_22px_55px_rgba(0,0,0,0.55),0_0_34px_rgba(229,57,53,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_26px_70px_rgba(0,0,0,0.62),0_0_42px_rgba(229,57,53,0.22)]">
                <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
                <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-primary/15 blur-2xl" />
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase tracking-[0.22em] text-slate-400">SUPPORT</span>
                  <svg className="w-4 h-4 text-[#e53935]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 18v-6a9 9 0 0118 0v6M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
                  </svg>
                </div>
                <div className="mb-1 text-2xl font-black leading-none text-white">24/7</div>
                <div className="border-b border-white/10 pb-2 text-[8px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  TECHNICAL HELP
                </div>
                <div className="flex justify-center items-center h-10 mt-2">
                  <svg className="w-9 h-9 transform -rotate-90 overflow-visible" viewBox="0 0 36 36">
                    <path
                      className="text-[#e53935]/10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-[#e53935]"
                      strokeDasharray="95, 100"
                      strokeWidth="4"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      style={{ filter: "drop-shadow(0 0 3px rgba(229,57,53,0.4))" }}
                    />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Trusted Logo Cloud */}
        <div className="w-full text-center mt-12 pb-8 animate-fade-up [animation-delay:250ms] border-t border-white/5 pt-8 relative z-20">
          <div className="text-[10px] font-bold text-slate-400/70 tracking-widest uppercase mb-6">
            Trusted by forward-thinking companies worldwide
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {/* TechNova */}
            <div className="flex items-center gap-2 text-slate-400 hover:text-white select-none transition-colors duration-300 cursor-pointer">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="6" cy="6" r="2" />
                <circle cx="18" cy="6" r="2" />
                <circle cx="6" cy="18" r="2" />
                <circle cx="18" cy="18" r="2" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span className="font-serif font-black tracking-tight text-[14px]">TechNova</span>
            </div>

            {/* NEXORA */}
            <div className="flex items-center gap-2 text-slate-400 hover:text-white select-none transition-colors duration-300 cursor-pointer">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v16L20 4v16" />
              </svg>
              <span className="font-sans font-black tracking-wider text-[12px] uppercase">NEXORA</span>
            </div>

            {/* quantum. */}
            <div className="flex items-center gap-0.5 text-slate-400 hover:text-white select-none transition-colors duration-300 cursor-pointer">
              <span className="font-serif font-extrabold text-[14px] tracking-tight">quantum</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#e53935] self-end mb-1" />
            </div>

            {/* Cloudify */}
            <div className="flex items-center gap-2 text-slate-400 hover:text-white select-none transition-colors duration-300 cursor-pointer">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
              <span className="font-sans font-black tracking-tight text-[12px]">Cloudify</span>
            </div>

            {/* AURORA */}
            <div className="flex items-center gap-2 text-slate-400 hover:text-white select-none transition-colors duration-300 cursor-pointer">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="12,2 2,22 22,22" />
              </svg>
              <span className="font-sans font-extrabold tracking-widest text-[12px]">AURORA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
