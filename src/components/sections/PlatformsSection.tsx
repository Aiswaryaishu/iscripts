import React from "react";
import { Button } from "../ui/Button";
import CircularGallery from "../ui/CircularGallery";

export const PlatformsSection: React.FC = () => {
  const items = [
    {
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&h=600&q=80",
      text: "iScripts UberforX"
    },
    {
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&h=600&q=80",
      text: "iScripts NetMenus"
    },
    {
      image: "https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&w=800&h=600&q=80",
      text: "iScripts MultiCart"
    },
    {
      image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&h=600&q=80",
      text: "iScripts PrintLogic"
    },
    {
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&h=600&q=80",
      text: "iScripts GoStores"
    },
    {
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&h=600&q=80",
      text: "iScripts eSwap"
    },
    {
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&h=600&q=80",
      text: "iScripts Locologic"
    },
    {
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&h=600&q=80",
      text: "iScripts SocialWare"
    }
  ];

  return (
    <section id="products" className="bg-white pt-10 md:pt-12 pb-20 md:pb-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-[1.1] text-dark mt-3">
            Our Technology Platforms
          </h2>
          <p className="text-sm md:text-base text-foreground/60 mt-3 leading-relaxed font-medium">
            Choose from our pre-packaged web and mobile applications designed to meet modern web guidelines and scale.
          </p>
        </div>
      </div>

      {/* 3D Circular Rotating Gallery - FULL WIDTH */}
      <div className="w-full relative h-[480px] md:h-[580px] overflow-hidden flex items-center justify-center animate-fade-up [animation-delay:100ms] my-6">
        <div className="absolute inset-0 z-10 w-full h-full">
          <CircularGallery
            items={items}
            bend={3}
            textColor="#0f172a"
            borderRadius={0.06}
            scrollEase={0.025}
            scrollSpeed={2}
            font="bold 20px 'DM Serif Text', Georgia, serif"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Centered CTA */}
        <div className="mt-12 text-center animate-fade-up [animation-delay:200ms]">
          <Button variant="dark" size="lg" showArrow={true}>
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};
