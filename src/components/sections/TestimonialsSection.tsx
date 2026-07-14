import React from "react";
import { SectionLabel } from "../ui/SectionLabel";
import { Quote, Star } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        "I really appreciate you from the initial point of contact all the way through the thorough detail you and your team at iScripts have given me on my project. I couldn't be a happier client!",
      author: "Garrett Richardson",
      company: "HoopCliq.com",
      initials: "GR",
    },
    {
      quote:
        "I engaged iScripts to design a customized version of PrintLogic for my company and the follow up from contract initiation to go live was a very smooth process.",
      author: "Kai Lo",
      company: "Scubadge.com",
      initials: "KL",
    },
    {
      quote:
        "iScripts was a game changer for me. I knew what I wanted to do and how I wanted to do it. The challenge was to cost-effectively build the application.",
      author: "Mike Serrano",
      company: "Classroom2Classroom.com",
      initials: "MS",
    },
  ];

  return (
    <section id="testimonials" className="bg-white py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16 animate-fade-up">
          <SectionLabel>Client Success</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark tracking-tight mt-3">
            What iScripts Customers Say
          </h2>
          <p className="text-sm text-foreground/60 mt-3 leading-relaxed">
            Read verified feedback from founders and enterprises who launched
            their platforms using our turnkey solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((test) => (
            <div
              key={test.author}
              className="group bg-muted/30 border border-border p-8 rounded-2xl transition-all duration-300 hover:border-primary/20 hover:bg-white hover:shadow-xl relative flex flex-col justify-between"
            >
              {/* Quotes icon overlay */}
              <div className="absolute top-6 right-8 text-primary/10 group-hover:text-primary/20 transition-colors pointer-events-none">
                <Quote className="w-10 h-10 rotate-180 fill-current" />
              </div>

              <div>
                {/* 5-Star Ratings */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary shrink-0"
                    />
                  ))}
                </div>

                <p className="text-sm md:text-base text-foreground/80 leading-relaxed italic mb-8 relative z-10">
                  “{test.quote}”
                </p>
              </div>

              {/* Author Row */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-border/60">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm flex items-center justify-center">
                  {test.initials}
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-dark">
                    {test.author}
                  </h4>
                  <p className="text-xs text-foreground/50 font-medium">
                    {test.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
