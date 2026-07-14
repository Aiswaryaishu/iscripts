import React from "react";

interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  light?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  description,
  light = false,
}) => {
  return (
    <div
      className={`p-6 rounded-2xl border transition-all duration-300 ${
        light
          ? "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
          : "bg-white border-border hover:border-primary/20 hover:shadow-lg"
      }`}
    >
      <div className="text-3xl md:text-4xl font-black tracking-tight text-primary">
        {value}
      </div>
      <div
        className={`text-sm font-semibold mt-2 ${
          light ? "text-white/85" : "text-dark"
        }`}
      >
        {label}
      </div>
      {description && (
        <div
          className={`text-xs mt-1 leading-relaxed ${
            light ? "text-white/60" : "text-foreground/70"
          }`}
        >
          {description}
        </div>
      )}
    </div>
  );
};
