import React from "react";
import {
  Phone,
  Mail,
  Globe,
  ArrowRight,
} from "lucide-react";
import { FloatingPaths } from "../ui/background-paths";

// Inline brand SVGs for high reliability and compatibility
const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
);

const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const YoutubeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.528 3.545 12 3.545 12 3.545s-7.528 0-9.388.51a3.004 3.004 0 0 0-2.11 2.108C0 8.023 0 12 0 12s0 3.977.502 5.837a3.003 3.003 0 0 0 2.11 2.108c1.86.51 9.388.51 9.388.51s7.528 0 9.388-.51a3.003 3.003 0 0 0 2.11-2.108c.502-1.86.502-5.837.502-5.837s0-3.977-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { label: "UberforX", href: "#products" },
    { label: "NetMenus", href: "#products" },
    { label: "MultiCart", href: "#products" },
    { label: "PrintLogic", href: "#products" },
    { label: "GoStores", href: "#products" },
    { label: "Locologic", href: "#products" },
  ];

  const serviceLinks = [
    { label: "Customization", href: "#services" },
    { label: "Web Development", href: "#services" },
    { label: "Mobile App Dev", href: "#services" },
    { label: "UI/UX Design", href: "#services" },
    { label: "API Integrations", href: "#services" },
  ];

  const supportLinks = [
    { label: "Help Center", href: "#support" },
    { label: "Installation Support", href: "#support" },
    { label: "Submit a Ticket", href: "#support" },
    { label: "Documentation", href: "#support" },
    { label: "FAQs", href: "#support" },
  ];

  const companyLinks = [
    { label: "About Us", href: "#company" },
    { label: "Our Showcase", href: "#showcase" },
    { label: "Client Testimonials", href: "#testimonials" },
    { label: "Press Kit", href: "#company" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <footer className="bg-dark text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Background Paths Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-85">
        <FloatingPaths position={1} className="text-white/25" />
        <FloatingPaths position={-1} className="text-white/25" />
      </div>

      {/* Decorative gradient glowing orb */}
      <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-6">
        {/* Brand Description Column */}
        <div className="lg:col-span-2 flex flex-col justify-between">
          <div>
            <a href="#" className="flex items-center gap-1 mb-4">
              <img
                src="/iscripts-logo-wyt.webp"
                alt="iScripts Logo"
                className="h-11 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-white/50 font-medium mb-1">
              Business model in a script
            </p>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm mt-3">
              Powering digital platforms globally. We build pre-packaged,
              fully customizable business software scripts that accelerate your
              startup time-to-market.
            </p>
          </div>

          <div className="flex items-center gap-3 mt-6">
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="Twitter"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="YouTube"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Link Columns */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5">
            Products
          </h4>
          <ul className="space-y-3">
            {productLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-white/60 hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5">
            Services
          </h4>
          <ul className="space-y-3">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-white/60 hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5">
            Support & Info
          </h4>
          <ul className="space-y-3">
            {supportLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-white/60 hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5">
            Contact Us
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <a
                href="tel:13124236728"
                className="text-sm text-white/70 hover:text-white transition-colors duration-200"
              >
                1-(312)-423-6728
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <a
                href="mailto:sales@iscripts.com"
                className="text-sm text-white/70 hover:text-white transition-colors duration-200"
              >
                sales@iscripts.com
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Globe className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <a
                href="https://www.iscripts.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 hover:text-white transition-colors duration-200"
              >
                www.iscripts.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/40">
          &copy; {currentYear} iScripts. All rights reserved. Powered by Dev
          Center.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-xs text-white/40 hover:text-primary transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-xs text-white/40 hover:text-primary transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-xs text-white/40 hover:text-primary transition-colors"
          >
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
};
