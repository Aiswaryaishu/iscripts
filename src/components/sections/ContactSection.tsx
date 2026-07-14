"use client";

import React, { useState } from "react";
import { SectionLabel } from "../ui/SectionLabel";
import { Button } from "../ui/Button";
import { Phone, Mail, MapPin, Send, HelpCircle } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: "Turnkey Platform Setup",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        requirement: "Turnkey Platform Setup",
        message: "",
      });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="bg-dark text-white py-20 md:py-28 relative overflow-hidden"
    >
      {/* Decorative gradient red glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-24 right-0 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:30px_30px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Side: Contact Information Info Block */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="flex flex-col items-start">
            <SectionLabel light={true}>Let's Connect</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mt-2 mb-6">
              Connect With Our Experts
            </h2>
            <p className="text-sm md:text-base text-white/70 leading-relaxed mb-8">
              Let us choose the best technology for your next web project. Ask
              questions about customization features, pricing frameworks, server
              configurations, and native companion apps.
            </p>

            <div className="space-y-6 w-full">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-white/40 font-bold uppercase tracking-wider">
                    Sales Phone
                  </div>
                  <a
                    href="tel:13124236728"
                    className="text-sm font-semibold text-white hover:text-primary transition-colors"
                  >
                    1-(312)-423-6728
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-white/40 font-bold uppercase tracking-wider">
                    Email Address
                  </div>
                  <a
                    href="mailto:sales@iscripts.com"
                    className="text-sm font-semibold text-white hover:text-primary transition-colors"
                  >
                    sales@iscripts.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-white/40 font-bold uppercase tracking-wider">
                    Corporate Office
                  </div>
                  <span className="text-sm font-semibold text-white/80">
                    Chicago, IL, United States
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 hidden lg:block">
            <p className="text-xs text-white/40 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-primary shrink-0" />
              Typically replies within 2 business hours.
            </p>
          </div>
        </div>

        {/* Right Side: Contact Form Grid */}
        <div className="lg:col-span-7">
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-md">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Request Sent Successfully!
                </h3>
                <p className="text-xs md:text-sm text-white/60 max-w-sm mx-auto">
                  Our script architects will review your project details and get
                  back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-xs font-bold uppercase tracking-widest text-white/60"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Garrett Richardson"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-bold uppercase tracking-widest text-white/60"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="garrett@hoopcliq.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-xs font-bold uppercase tracking-widest text-white/60"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="1-(312)-423-6728"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all"
                    />
                  </div>

                  {/* Requirement Type */}
                  <div className="space-y-2">
                    <label
                      htmlFor="requirement"
                      className="text-xs font-bold uppercase tracking-widest text-white/60"
                    >
                      Requirement Type
                    </label>
                    <select
                      id="requirement"
                      value={formData.requirement}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          requirement: e.target.value,
                        })
                      }
                      className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all [&>option]:bg-dark"
                    >
                      <option value="Turnkey Platform Setup">
                        Turnkey Platform Setup
                      </option>
                      <option value="Custom Programming Support">
                        Custom Programming Support
                      </option>
                      <option value="Companion Mobile Apps">
                        Companion Mobile Apps
                      </option>
                      <option value="Server/Installation Help">
                        Server/Installation Help
                      </option>
                      <option value="Other Startup Assistance">
                        Other Startup Assistance
                      </option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-bold uppercase tracking-widest text-white/60"
                  >
                    Your Project Requirements
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your startup idea or customization requirement..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  showArrow={true}
                  className="w-full animate-pulse-glow"
                >
                  Contact Our Experts
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
