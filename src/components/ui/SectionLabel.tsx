import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  children,
  light = false,
}) => {
  return (
    <div
      className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 border ${
        light
          ? "bg-white/10 text-white border-white/10"
          : "bg-primary/5 text-primary border-primary/10"
      }`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 animate-pulse" />
      {children}
    </div>
  );
};
