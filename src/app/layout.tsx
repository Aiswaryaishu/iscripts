import type { Metadata } from "next";
import { DM_Serif_Text, Roboto } from "next/font/google";
import "./globals.css";

const dmSerifText = DM_Serif_Text({
  variable: "--font-dm-serif-text",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "iScripts - Ready-to-Go Technology Platforms to Start & Scale",
  description: "iScripts helps startups and businesses launch faster with ready-made web and mobile platforms, custom front-end UI, admin dashboards, and customization support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerifText.variable} ${roboto.variable} scroll-smooth`}>
      <body className="antialiased text-foreground bg-background min-h-screen">
        {children}
      </body>
    </html>
  );
}
