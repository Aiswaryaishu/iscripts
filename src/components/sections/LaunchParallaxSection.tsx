"use client";

import React from "react";
import { ZoomParallax } from "@/components/ui/zoom-parallax";

const images = [
  {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
    alt: "Modern startup workspace",
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
    alt: "Technology circuit board close up",
  },
  {
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
    alt: "Developer working with code",
  },
  {
    src: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
    alt: "Immersive digital technology experience",
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
    alt: "Modern architecture building",
  },
  {
    src: "https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80",
    alt: "Abstract geometric pattern",
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
    alt: "Forest trees and sunlight",
  },
];

export const LaunchParallaxSection: React.FC = () => {
  return (
    <section className="relative bg-dark text-white">
      <ZoomParallax images={images} />
    </section>
  );
};
