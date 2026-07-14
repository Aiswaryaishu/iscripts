"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "../ui/Button";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Solutions", href: "#solutions", hasDropdown: true },
    { label: "Platforms", href: "#platforms", hasDropdown: true },
    { label: "Services", href: "#services", hasDropdown: true },
    { label: "Industries", href: "#industries", hasDropdown: true },
    { label: "Company", href: "#company", hasDropdown: true },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-md border-b border-white/10 shadow-lg py-4"
            : "bg-black/90 backdrop-blur-sm border-b border-white/5 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Left Side: Logo & Desktop Links Grouped */}
          <div className="flex items-center gap-10">
            {/* Logo */}
            <a href="#" className="flex items-center gap-1.5 group">
              <img
                src="/iscripts-logo-wyt.webp"
                alt="iScripts Logo"
                className="h-11 w-auto object-contain transition-all duration-300"
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[13px] font-bold transition-colors duration-200 flex items-center gap-1 text-white/80 hover:text-primary"
                >
                  <span>{link.label}</span>
                  {link.hasDropdown && (
                    <ChevronDown className="w-3.5 h-3.5 transition-colors text-white/40 group-hover:text-primary" />
                  )}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Side: Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#login"
              className="px-5 py-2 text-sm font-semibold text-white/90 border border-white/20 rounded-full hover:bg-white/5 transition-all duration-200"
            >
              Login
            </a>
            <Button 
              variant="primary" 
              size="sm" 
              showArrow={false} 
              className="bg-primary hover:bg-[#d32f2f] text-white shadow-[0_4px_14px_rgba(229,57,53,0.35)] border-transparent py-2.5 px-5 flex items-center font-bold text-sm tracking-wide"
            >
              Get Free Consultation <span className="ml-1 text-xs font-black">↗</span>
            </Button>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white/90 hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-dark/95 backdrop-blur-lg lg:hidden transition-all duration-300 flex flex-col justify-between p-8 pt-28 ${
          mobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-bold text-white hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-4 mt-8">
          <a
            href="#login"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-3 text-base font-semibold text-white border border-white/20 rounded-full hover:bg-white/5 transition-all"
          >
            Login
          </a>
          <Button
            variant="primary"
            size="md"
            showArrow={true}
            onClick={() => setMobileMenuOpen(false)}
            className="w-full"
          >
            Get Free Consultation
          </Button>
        </div>
      </div>
    </>
  );
};
