import React from "react";
import { LucideIcon } from "lucide-react";

interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const ProcessCard: React.FC<ProcessCardProps> = ({
  number,
  title,
  description,
  icon: Icon,
}) => {
  return (
    <div className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/30 transition-all duration-300 group flex flex-col justify-between h-full overflow-hidden">
      {/* Decorative hover bg glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div>
        {/* Header containing Numbered Red Circle & Icon */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 text-primary flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(229,57,53,0.2)]">
            {number}
          </div>
          <Icon className="w-6 h-6 text-white/30 group-hover:text-primary transition-colors duration-300" />
        </div>

        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-white/60 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
