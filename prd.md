1. Product Requirement Document (PRD)
Project Overview
A premium, minimal, ultra-high-performance portfolio site for an elite mixologist. The user interface mimics modern architectural portfolios (inspired by OH Architecture): bold typography, rigid 1px grid frameworks, explicit content metadata, and highly fluid, motion-driven transitions powered by GSAP.

Key Target Features
Asymmetric Architecture Grid: Monospaced structural framing using clean borders that dynamically scale to fit the viewport.

Immersive Fluid Transitions: Smooth canvas-like image scaling, marquee text scrolls, and curtain-reveal animations for portfolio single views.

Decoupled Architecture (CMS): Headless workflows utilizing Sanity Studio v3 to instantly publish real-time menu collections, flavor profiles, and R&D logs.

Responsive Desktop-First Design: Strict architectural layouts optimized primarily for large screens, shifting gracefully into neat vertical grids on mobile devices.

Page Profiles & Router Matrix
/ (Home): The Manifesto entry, featuring selected full-bleed alchemy project showcases and horizontal structural scrolling.

/index (Archive): A minimalist matrix listing all drink iterations sorted by index number, category, year, and dominant base profiles.

/lab (About & Services): Biography, laboratory philosophy, consulting packages, and contact module.

/alchemy/[slug] (Dynamic Case Study): Immersive look into a specific liquid design featuring high-resolution galleries, structural profiles, and flavor maps.

/404: Custom errored structural viewport page.

2. Technical Stack & Dependencies
Our tech stack leverages modern web components to ensure optimal page performance, high Core Web Vitals scores, and pixel-perfect rendering layout control.

Framework: Next.js 14+ (App Router)

Styling: Tailwind CSS (Grid layout & customized spatial metrics)

Content Hub: Sanity Studio v3 (Headless CMS)

Motion Engine: GSAP (GreenSock) + ScrollTrigger

Icons & Type Tools: Lucide React + Next/Font (Geist Mono or Space Grotesk)

3. Environment & Dependency Installation Blueprint
Run the following commands sequentially in your terminal to initialize your architecture workspace cleanly.
1. Updated Dependency Installation
We will ensure we are utilizing the latest Tailwind CSS v4 engine along with its native Next.js PostCSS compiler integration:

Bash
cd fluid-alchemy

npm install gsap @gsap/react @sanity/client next-sanity lucide-react clsx tailwind-merge
npm install tailwindcss@next @tailwindcss/postcss@next
2. Streamlined Global System Configuration
We will discard the old configuration files entirely. All architectural design variables, custom color palettes, and structural layouts are declared natively within our primary stylesheet.

Update: src/app/globals.css
Replace your styling declarations with this configuration setup:

CSS
@import "tailwindcss";

@theme {
  /* Architectural Monolithic Color Palette Declaration */
  --color-studio-bg: #0B0B0C;       /* Dark slate canvas */
  --color-studio-surface: #121214;  /* UI components container */
  --color-studio-text: #E5E5E7;     /* Clean muted paper white */
  --color-studio-muted: #707075;    /* Monospaced coordinate typography tone */
  --color-studio-accent: #A38A5E;   /* Metallic gold highlight */

  /* Type Scale System Alignment */
  --font-sans: var(--font-space-grotesk), sans-serif;
  --font-mono: var(--font-geist-mono), monospace;
}

@layer base {
  body {
    background-color: var(--color-studio-bg);
    color: var(--color-studio-text);
    font-family: var(--font-sans);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  /* Crisp 1px Architectural Wireframe Framework Lines */
  .arch-grid-line {
    border: 1px solid rgba(112, 112, 117, 0.2);
  }
}

/* Optimize smooth layout recalculations for GSAP ScrollTrigger */
html.lenis {
  height: auto;
}
.lenis-smooth {
  scroll-behavior: auto !important;
}
Step 4: Landing Page Build — Section by Section
Now that our engine foundations are clean, unified, and strictly compliant with modern documentation, we can begin building the structural shell of our portfolio.

1. Root Layout Wrapper (src/app/layout.tsx)
This handles loading our Google Fonts into CSS custom properties (vars) so Tailwind v4 can read them instantly, while preparing a global viewport frame layer.

TypeScript
import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FLUID / ARCHITECTURE — Premium Mixology Portfolio",
  description: "Structural liquid alchemy, flavor profiling, and drink design portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${geistMono.variable}`}>
      <body className="antialiased selection:bg-studio-accent selection:text-studio-bg">
        {/* Global Structural Viewport Wire Frame Edge Lines */}
        <div className="fixed inset-0 pointer-events-none z-50 border arch-grid-line m-4 md:m-6" />
        
        {/* Global Minimalist Navigation Layout */}
        <header className="fixed top-4 md:top-6 left-4 md:left-6 right-4 md:right-6 mix-blend-difference z-40 p-4 flex justify-between items-start font-mono text-xs uppercase tracking-widest text-studio-text">
          <div>FLUID / ARCHITECTURE</div>
          <nav className="flex flex-col items-end gap-1 md:flex-row md:gap-6">
            <a href="#index" className="hover:text-studio-accent transition-colors">[01] INDEX</a>
            <a href="#lab" className="hover:text-studio-accent transition-colors">[02] THE LAB</a>
            <a href="#journal" className="hover:text-studio-accent transition-colors">[03] JOURNAL</a>
          </nav>
        </header>

        <main className="p-4 md:p-6 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
2. The GSAP-Powered Hero Reveal (src/app/components/Hero.tsx)
We will use @gsap/react for safe hook-based animation lifecycles. This animation targets a massive typographic phrase alongside an architectural scaling layout reveal of your signature drink imagery.

TypeScript
"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Reveal container masking frame smoothly
    tl.fromTo(maskRef.current, 
      { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
      { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1.6 }
    );

    // Subtle parallax push on the underlying structural drink image
    tl.fromTo(imageRef.current,
      { scale: 1.15 },
      { scale: 1, duration: 2 },
      "-=1.4"
    );

    // Structural slide-up for uppercase typographic headline blocks
    tl.fromTo(textRef.current?.children || [],
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.1 },
      "-=1.2"
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] w-full flex flex-col justify-end overflow-hidden">
      {/* Background Media Container Asset Mapping */}
      <div ref={maskRef} className="absolute inset-0 w-full h-full bg-studio-surface overflow-hidden">
        <Image
          ref={imageRef}
          src="/images/Green Margarita Delight.jpg" // Maps cleanly to your crisp blue-sky asset
          alt="Coastal Horizon Composition"
          fill
          priority
          className="object-cover object-center grayscale contrast-115 brightness-90 hover:grayscale-0 transition-all duration-700"
        />
      </div>

      {/* Overlaid Layout Typography Alignment */}
      <div className="relative z-10 p-6 md:p-12 max-w-5xl mix-blend-difference">
        <h1 ref={textRef} className="text-4xl sm:text-6xl md:text-8xl font-sans font-bold tracking-tighter uppercase leading-[0.85] text-studio-text">
          <div className="overflow-hidden block">Liquid Form</div>
          <div className="overflow-hidden block text-studio-accent">& Structural</div>
          <div className="overflow-hidden block">Flavor.</div>
        </h1>
        
        <div className="mt-8 font-mono text-xs text-studio-muted flex gap-12 uppercase tracking-wide">
          <div>[COORD / -6.7924, 39.2083]</div>
          <div>[EDITION / 2026]</div>
        </div>
      </div>
    </section>
  );
}