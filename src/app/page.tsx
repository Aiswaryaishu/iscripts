import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { StorySection } from "@/components/sections/StorySection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { LaunchParallaxSection } from "@/components/sections/LaunchParallaxSection";
import { PlatformsSection } from "@/components/sections/PlatformsSection";
import { CustomizationSection } from "@/components/sections/CustomizationSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StorySection />
        <BenefitsSection />
        <CustomizationSection />
        <LaunchParallaxSection />
        <PlatformsSection />
        <TeamSection />
      </main>
      <Footer />
    </>
  );
}
