"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Lab() {
    const labRef = useRef<HTMLDivElement>(null);
    const { contextSafe } = useGSAP({ scope: labRef });

    const handleButtonHover = contextSafe((e: React.MouseEvent<HTMLAnchorElement>, isEnter: boolean) => {
        const primary = e.currentTarget.querySelector(".lab-btn-primary");
        const secondary = e.currentTarget.querySelector(".lab-btn-secondary");
        const dot = e.currentTarget.querySelector(".lab-btn-dot");

        gsap.to(primary, { yPercent: isEnter ? -100 : 0, duration: 0.35, ease: "power3.out" });
        gsap.to(secondary, { yPercent: isEnter ? -100 : 0, duration: 0.35, ease: "power3.out" });
        gsap.to(dot, {
            backgroundColor: isEnter ? "#FCFCFC" : "transparent",
            scale: isEnter ? 0.6 : 1,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    return (
        <section
            ref={labRef}
            id="lab"
            /* 
              CRITICAL FIXES: 
              1. Raised z-index to z-20 so it naturally steps over the Hero layer.
              2. Ensured it has a solid, opaque bg-[#0B0B0C] so the Hero text doesn't show through it.
            */
            className="w-full bg-[#0B0B0C] flex flex-col items-center py-[60px] md:py-[100px] z-20 relative"
        >
            <div className="w-full px-6 md:px-[24px] lg:px-[30px] flex flex-col items-start gap-[25.76px]">

                {/* TITLE BLOCK */}
                <div className="w-full flex flex-col justify-center items-start py-6 md:h-[320px] select-none">
                    <h2 className="font-sans font-medium text-[64px] sm:text-[100px] md:text-[152px] leading-[0.95] tracking-[-0.171px] text-[#FCFCFC] uppercase">
                        Alchemy
                    </h2>
                    <h2 className="font-sans font-medium text-[48px] sm:text-[90px] md:text-[152px] leading-[0.95] tracking-[-0.171px] text-[#FCFCFC] uppercase opacity-90">
                        Molecular Liquid
                    </h2>
                </div>

                {/* CONTAINER CONTENT BLOCK */}
                <div className="w-full flex flex-col items-end">
                    <div className="w-full lg:max-w-[1010px] flex flex-col items-start gap-10">

                        {/* Image Box */}
                        <div className="relative w-full md:w-[524px] h-[349px] bg-[#121214] overflow-hidden">
                            <Image
                                src="/images/Green Margarita Delight.png"
                                alt="Green Margarita Delight context verification representation"
                                fill
                                className="object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700 ease-out"
                                sizes="(max-width: 768px) 100vw, 524px"
                            />
                        </div>

                        {/* BELOW PANEL */}
                        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-10 md:h-[368px]">
                            <div className="w-full md:max-w-[524px] flex flex-col items-start gap-[23px]">
                                <p className="w-full font-sans font-normal text-[20px] md:text-[25.1px] leading-[1.3] md:leading-[30px] tracking-[-0.251px] text-[#FCFCFC]/90">
                                    Treating liquids as volatile raw elements. We study density shifts, thermal dissipation, and optical refractions across glass vessels. Every creation maps a distinct structural volume designed to balance taste, texture, and physical geometry.
                                </p>

                                <p className="w-full font-sans font-normal text-[20px] md:text-[25.1px] leading-[1.3] md:leading-[30px] tracking-[-0.251px] text-[#FCFCFC]/60">
                                    Formulating precise combinations where viscosity and balance intersect seamlessly, allowing flavor notes to unfold chronologically as the temperature shifts.
                                </p>

                                <a
                                    href="#research"
                                    onMouseEnter={(e) => handleButtonHover(e, true)}
                                    onMouseLeave={(e) => handleButtonHover(e, false)}
                                    className="w-[289px] h-[50px] bg-[#080807] border border-[#FCFCFC]/20 rounded-[1920px] flex items-center justify-center gap-[16px] text-[#FCFCFC] font-sans font-medium text-[16px] overflow-hidden cursor-pointer select-none mt-4"
                                >
                                    <div className="h-[16px] overflow-hidden relative block leading-none">
                                        <span className="lab-btn-primary block h-full">
                                            EXPLORE OUR RESEARCH LAB
                                        </span>
                                        <span className="lab-btn-secondary block h-full absolute top-full left-0 text-studio-accent">
                                            EXPLORE OUR RESEARCH LAB
                                        </span>
                                    </div>
                                    <div className="lab-btn-dot w-2 h-2 border border-[#FCFCFC] rounded-full" />
                                </a>
                            </div>

                            <div className="font-sans font-bold text-[17px] leading-[20px] tracking-[-0.171px] text-[#FCFCFC]/40 uppercase shrink-0 select-none md:pt-2">
                                [OUR LAB]
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}