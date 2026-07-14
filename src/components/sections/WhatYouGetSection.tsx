import React from "react";

export const WhatYouGetSection: React.FC = () => {
  const items = [
    {
      title: "Turnkey Platforms",
      description:
        "Get your platform up and running quickly. Simply configure it with your business data.",
      icon: (
        <svg
          className="w-14 h-14 text-[#e53935] transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="16" cy="8" r="4" />
          <path d="M13.2 10.8L4 20v2h2v-2h2v-2h2v-2h2.8l2-2" />
          <path d="M18 6h.01" />
          <path d="M15 9h.01" />
        </svg>
      ),
    },
    {
      title: "Free Installation",
      description:
        "Get operational in hours with our free, professional installation service.",
      icon: (
        <svg
          className="w-14 h-14 text-[#e53935] transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Stars */}
          <path d="M12 2l.4 1.2h1.2l-1 .7.4 1.2-1-.7-1 .7.4-1.2-1-.7h1.2L12 2z" />
          <path d="M6 4l.3.9h.9l-.8.6.3.9-.8-.6-.8.6.3-.9-.8-.6h.9L6 4z" />
          <path d="M18 4l.3.9h.9l-.8.6.3.9-.8-.6-.8.6.3-.9-.8-.6h.9L18 4z" />
          {/* User outline */}
          <circle cx="12" cy="13" r="3" />
          <path d="M6 21v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1" />
        </svg>
      ),
    },
    {
      title: "Companion Apps",
      description:
        "Access white-labeled companion mobile apps alongside your web platforms.",
      icon: (
        <svg
          className="w-14 h-14 text-[#e53935] transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="6" y="2" width="12" height="20" rx="2" />
          <path d="M9 10l-2 2 2 2" />
          <path d="M15 10l2-2-2 2" />
          <line x1="11" y1="5" x2="13" y2="5" />
          <circle cx="12" cy="19" r="0.5" />
        </svg>
      ),
    },
    {
      title: "Option to Customize",
      description:
        "Fully customize our unencrypted software, supported by our expert team.",
      icon: (
        <svg
          className="w-14 h-14 text-[#e53935] transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="4" width="20" height="12" rx="1.5" />
          <path d="M7 20h10" />
          <path d="M12 16v4" />
          <path d="M18 6l-6 6H10v-2l6-6z" />
          <path d="M16 4l2 2" />
        </svg>
      ),
    },
    {
      title: "White Label Solutions",
      description:
        "Present a fully branded experience so customers only see your identity.",
      icon: (
        <svg
          className="w-14 h-14 text-[#e53935] transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="8" strokeDasharray="3 3" />
          <path d="M10 14.5v-3a1.5 1.5 0 0 1 1.5-1.5h1.5a1 1 0 0 0 1-1V7.5a1.5 1.5 0 0 1 3 0v2h1a1.5 1.5 0 0 1 1.5 1.5v3.5a1.5 1.5 0 0 1-1.5 1.5H11.5a1.5 1.5 0 0 1-1.5-1.5z" />
          <path d="M8 11.5h2v4H8z" />
        </svg>
      ),
    },
    {
      title: "Exceptional Tech Support",
      description:
        "Enjoy dependable support to resolve any web or mobile platform issues.",
      icon: (
        <svg
          className="w-14 h-14 text-[#e53935] transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="9" r="4" />
          <path d="M6 21v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1" />
          <path d="M8 10V9a4 4 0 0 1 8 0v1" />
          <path d="M6 10a1 1 0 0 1 1-1h1v3H7a1 1 0 0 1-1-1z" />
          <path d="M16 9h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1V9z" />
          <path d="M17 11c0 1.5-1.5 2.5-5 2.5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#f3f4f6] py-16 md:py-24 border-t border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3.5xl font-sans tracking-tight text-slate-800 uppercase mb-10 text-left">
          WHAT <span className="font-extrabold text-[#0f172a]">YOU GET</span>
        </h2>

        {/* Seamless Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-slate-200 border border-slate-200 overflow-hidden rounded-2xl shadow-sm">
          {items.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-8 md:p-10 flex flex-col items-center text-center transition-all duration-300 hover:bg-slate-50/50"
            >
              {/* Icon Container */}
              <div className="mb-6 flex items-center justify-center h-16 w-16">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-extrabold text-[#0f172a] mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-semibold max-w-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
