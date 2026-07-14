import React from "react";
import { LucideIcon, ArrowUpRight } from "lucide-react";

interface PlatformCardProps {
  name: string;
  category: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

export const PlatformCard: React.FC<PlatformCardProps> = ({
  name,
  category,
  description,
  icon: Icon,
  gradient,
}) => {
  return (
    <div className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:border-primary/20 transition-all duration-300 flex flex-col h-full">
      {/* Gradient Image Placeholder with Hover Zoom */}
      <div className="relative h-44 w-full overflow-hidden bg-muted">
        <div
          className={`absolute inset-0 bg-gradient-to-tr ${gradient} opacity-90 transition-transform duration-500 group-hover:scale-105`}
        />

        {/* Subtle abstract grid inside mockup */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:20px_20px] opacity-40" />

        {/* Red icon circle overlapping image */}
        <div className="absolute -bottom-6 left-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white border-4 border-white shadow-[0_4px_12px_rgba(229,57,53,0.35)] transition-transform duration-300 group-hover:scale-105">
          <Icon className="w-5 h-5" />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 pt-8 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[10px] font-bold text-primary uppercase tracking-wider bg-primary/5 px-2 py-0.5 rounded-md">
            {category}
          </span>
          <h3 className="text-lg font-bold text-dark mt-2 group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
          <p className="text-sm text-foreground/70 mt-2 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
          <a
            href="#"
            className="inline-flex items-center text-sm font-semibold text-dark hover:text-primary transition-colors duration-300 group/link"
          >
            View Details
            <ArrowUpRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
