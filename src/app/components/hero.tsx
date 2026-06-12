"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const { contextSafe } = useGSAP({ scope: heroRef });

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.fromTo(".hero-bg-canvas",
            { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
            { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1.5 }
        );

        tl.fromTo(".hero-bg-asset",
            { scale: 1.12 },
            { scale: 1, duration: 2 },
            "-=1.2"
        );

        tl.fromTo(".f-reveal",
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, stagger: 0.08 },
            "-=1.1"
        );
    }, { scope: heroRef });

    const handleButtonHover = contextSafe((e: React.MouseEvent<HTMLDivElement>, isEnter: boolean) => {
        const primary = e.currentTarget.querySelector(".btn-primary");
        const secondary = e.currentTarget.querySelector(".btn-secondary");
        const dot = e.currentTarget.querySelector(".btn-dot");

        gsap.to(primary, { yPercent: isEnter ? -100 : 0, duration: 0.35, ease: "power3.out" });
        gsap.to(secondary, { yPercent: isEnter ? -100 : 0, duration: 0.35, ease: "power3.out" });
        gsap.to(dot, {
            backgroundColor: isEnter ? "#FFFFFF" : "transparent",
            scale: isEnter ? 0.6 : 1,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    return (
        <section
            ref={heroRef}
            className="relative w-full h-screen bg-[#0B0B0C] flex flex-col items-center pt-[100px] pb-[40px] z-10 overflow-hidden will-change-transform"
        >
            {/* Full Bleed Backdrop Image Canvas */}
            <div className="hero-bg-canvas absolute inset-0 w-full h-full bg-[#121214] z-0">
                <Image
                    className="hero-bg-asset object-cover brightness-[0.70] contrast-[1.03]"
                    src="/images/hero-bg.jpg"
                    alt="hero-background-image"
                    fill
                    priority
                    sizes="100vw"
                />
            </div>

            {/* Responsive Container Boundaries */}
            <div className="hero-content-container relative z-10 w-full h-full flex flex-col justify-end items-start px-6 md:px-[24px] lg:px-[30px] mt-auto">
                <div className="w-full flex flex-col items-start gap-[8vh] md:gap-[12vh] lg:gap-[18vh]">

                    {/* MID: Row Metadata Track */}
                    <div className="w-full grid grid-cols-2 md:grid-cols-4 items-start gap-4 font-sans font-bold text-[15px] md:text-[17px] leading-[20px] tracking-[-0.171px] text-[#FFFFFF] capitalize">
                        <div className="f-reveal">[FEATURED COCKTAIL]</div>
                        <div className="f-reveal hidden md:block">GREEN MARGARITA DELIGHT</div>
                        <div className="f-reveal hidden md:block text-center">2026</div>
                        <div
                            onMouseEnter={(e) => handleButtonHover(e, true)}
                            onMouseLeave={(e) => handleButtonHover(e, false)}
                            className="f-reveal flex items-center justify-end gap-3 cursor-pointer select-none group text-right overflow-hidden"
                        >
                            <div className="h-[15px] md:h-[17px] overflow-hidden relative block leading-none font-sans font-medium text-[15px] md:text-[17px] tracking-[-0.171px] text-[#FFFFFF]">
                                <span className="btn-primary block h-full">
                                    VIEW PROJECT
                                </span>
                                <span className="btn-secondary block h-full absolute top-full left-0 text-studio-accent">
                                    VIEW PROJECT
                                </span>
                            </div>
                            <div className="btn-dot w-[9px] h-[9px] border border-[#FFFFFF] rounded-full" />
                        </div>
                    </div>

                    {/* BOTTOM: Typography Headline Matrix */}
                    <div className="w-full flex flex-col md:flex-row justify-between items-end gap-8">
                        <h2 className="f-reveal w-full max-w-[670px] font-sans font-medium text-[24px] sm:text-[30px] md:text-[36.3px] leading-[1.25] md:leading-[50px] tracking-[-0.171px] text-[#FFFFFF]">
                            The FLUID Studio style is defined by strong, solid forms with subtle elegance, natural balance and enduring appeal.
                        </h2>
                        <div className="f-reveal shrink-0 font-sans font-medium text-[15px] md:text-[17px] tracking-[-0.171px] text-[#FFFFFF] uppercase opacity-70 select-none animate-pulse pb-2">
                            [SCROLL DOWN]
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}