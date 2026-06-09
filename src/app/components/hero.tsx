"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const elementsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(".hero-image-wrapper",
            { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
            { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1.4 }
        );

        tl.fromTo(".hero-bg-img",
            { scale: 1.1 },
            { scale: 1, duration: 1.8 },
            "-=1.2"
        );

        tl.fromTo(".animate-fade-up",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.1 },
            "-=1"
        );
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="relative w-full h-screen bg-studio-bg flex flex-col justify-between overflow-hidden"
        >
            {/* CRITICAL FIX: Changed from inner margins to absolute full bleed inset-0.
        This forces the background image to take up 100% of the screen's width and height.
      */}
            <div className="hero-image-wrapper absolute inset-0 w-full h-full bg-studio-surface">
                <Image
                    className="hero-bg-img object-cover brightness-[0.80] contrast-[1.02]"
                    src="/images/hero-bg.png"
                    alt="Green Margarita Delight Full Bleed View"
                    fill
                    priority
                    sizes="100vw"
                />

                {/* Central Intersecting Project Metadata Bar */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 grid grid-cols-2 md:grid-cols-4 px-8 md:px-12 text-studio-text text-xs uppercase tracking-widest pointer-events-none drop-shadow-md font-medium z-10">
                    <div className="animate-fade-up">[FEATURED PROJECT]</div>
                    <div className="animate-fade-up hidden md:block">Green Margarita Delight</div>
                    <div className="animate-fade-up hidden md:block text-center">2026</div>
                    <div className="animate-fade-up text-right flex items-center justify-end gap-1">
                        VIEW PROJECT <span className="text-[10px]">⦿</span>
                    </div>
                </div>
            </div>

            {/* Base Content Row: Placed absolute at the bottom of the screen, floating right over the visual.
        Uses mix-blend-difference so the text flips automatically to high-contrast white depending on your background image!
      */}
            <div
                ref={elementsRef}
                className="absolute bottom-0 inset-x-0 z-20 w-full flex flex-col md:flex-row md:items-end justify-between gap-4 p-8 md:p-12 mt-auto mix-blend-difference"
            >
                <div className="max-w-2xl animate-fade-up">
                    <h2 className="text-[24px] sm:text-[28px] md:text-[33px] font-normal tracking-tight leading-[1.2] text-studio-text max-w-xl">
                        The FLUID Studio style is defined by strong, solid forms with subtle elegance, natural balance and enduring appeal.
                    </h2>
                </div>

                <div className="animate-fade-up text-xs font-semibold tracking-widest opacity-80 uppercase pb-2 self-end md:self-auto text-studio-text">
                    (SCROLL DOWN)
                </div>
            </div>
        </section>
    );
}