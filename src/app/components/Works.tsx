"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const MOCKED_WORKS = [
    {
        id: "01",
        title: "BLOODY MARY COCKTAIL",
        year: "2026",
        img: "/images/Iced Coffee Close-Up.png",
        heightClass: "h-[487.5px]",
        gridColumnSpan: "col-span-12 md:col-span-6"
    },
    {
        id: "02",
        title: "VIBRANT BLUE LAGOON COCKTAIL",
        year: "2026",
        img: "/images/Iced Beverage on Stone.png",
        heightClass: "h-[975px]",
        gridColumnSpan: "col-span-12 md:col-span-6 lg:translate-y-[66px]"
    },
    {
        id: "03",
        title: "CRIMSON TROPIC COMPOSITION",
        year: "2026",
        img: "/images/Iced Cocktail Display.png",
        heightClass: "h-[815px]",
        gridColumnSpan: "col-span-12 md:col-span-5"
    },
    {
        id: "04",
        title: "SMOKED NEGRONI SILHOUETTE",
        year: "2025",
        img: "/images/Colorful Cocktails Display.png",
        heightClass: "h-[495px]",
        gridColumnSpan: "col-span-12 md:col-span-7"
    }
];

export default function Works() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { contextSafe } = useGSAP({ scope: sectionRef });

    // Premium card sliding interaction controller
    const handleCardHover = contextSafe((e: React.MouseEvent<HTMLDivElement>, isEnter: boolean) => {
        const img = e.currentTarget.querySelector(".work-card-image");
        const year = e.currentTarget.querySelector(".work-card-year");
        const btn = e.currentTarget.querySelector(".work-card-btn");

        // 1. Precise, subtle image scaling bounds
        if (img) {
            gsap.to(img, {
                scale: isEnter ? 1.03 : 1,
                filter: isEnter ? "grayscale(0%) brightness(100%)" : "grayscale(100%) brightness(90%)",
                duration: 0.6,
                ease: "power2.out"
            });
        }

        // 2. Synchronized micro-text roll transition matching other site components
        if (year && btn) {
            gsap.to(year, {
                yPercent: isEnter ? -100 : 0,
                duration: 0.4,
                ease: "power3.out"
            });
            gsap.to(btn, {
                yPercent: isEnter ? -100 : 0,
                duration: 0.4,
                ease: "power3.out"
            });
        }
    });

    const handleButtonHover = contextSafe((e: React.MouseEvent<HTMLAnchorElement>, isEnter: boolean) => {
        const primary = e.currentTarget.querySelector(".works-btn-primary");
        const secondary = e.currentTarget.querySelector(".works-btn-secondary");
        const dot = e.currentTarget.querySelector(".works-btn-dot");

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
            ref={sectionRef}
            id="index"
            className="w-full bg-[#0B0B0C] flex flex-col items-center py-[100px] z-30 relative"
        >
            <div className="w-full px-6 md:px-[24px] lg:px-[30px] flex flex-col gap-[25.76px]">

                {/* ================= TITLE BLOCK ROW ================= */}
                <div className="w-full flex flex-col justify-center items-start h-[320px] select-none border-b border-white/10">
                    <h2 className="w-full font-sans font-medium text-[64px] sm:text-[100px] md:text-[152px] leading-[160px] tracking-[-0.171px] text-[#FCFCFC] uppercase">
                        Featured
                    </h2>
                    <div className="w-full flex justify-between items-baseline h-[160px]">
                        <h2 className="font-sans font-medium text-[64px] sm:text-[100px] md:text-[152px] leading-[160px] tracking-[-0.171px] text-[#FCFCFC] uppercase">
                            Works
                        </h2>
                        <span className="font-sans font-medium text-[64px] sm:text-[100px] md:text-[152px] leading-[160px] tracking-[-0.171px] text-studio-accent/20">
                            (07)
                        </span>
                    </div>
                </div>

                {/* ================= 12-COLUMN MASONRY MATRIX GRID ================= */}
                <div className="w-full grid grid-cols-12 gap-x-4 gap-y-[132px] pt-16">
                    {MOCKED_WORKS.map((work) => (
                        <div
                            key={work.id}
                            onMouseEnter={(e) => handleCardHover(e, true)}
                            onMouseLeave={(e) => handleCardHover(e, false)}
                            className={`${work.gridColumnSpan} flex flex-col gap-3 group cursor-pointer`}
                        >
                            {/* Image Container Window */}
                            <div className={`relative w-full ${work.heightClass} bg-[#121214] overflow-hidden`}>
                                <Image
                                    src={work.img}
                                    alt={work.title}
                                    fill
                                    priority={work.id === "01"}
                                    className="work-card-image object-cover grayscale brightness-90 will-change-transform"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            {/* Detail Outputs Row */}
                            <div className="w-full flex justify-between items-start pt-1.5 font-sans font-bold text-[17.1px] leading-[17px] tracking-[-0.171px]">
                                <div className="flex items-center gap-6 text-[#FCFCFC] uppercase">
                                    <span className="text-studio-accent opacity-60">({work.id})</span>
                                    <h3 className="work-card-title group-hover:text-studio-accent transition-colors duration-300">
                                        {work.title}
                                    </h3>
                                </div>

                                {/* Right Side Context Layer: Clean, overflow-masked rolling container */}
                                <div className="h-[17px] overflow-hidden relative block leading-none text-right min-w-[130px]">
                                    <span className="work-card-year block h-full text-[#4F4F4F] transition-transform duration-300">
                                        {work.year}
                                    </span>
                                    <span className="work-card-btn block h-full absolute top-full right-0 text-[#FCFCFC]/80 font-medium whitespace-nowrap transition-transform duration-300">
                                        VIEW PROJECT →
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ================= BOTTOM ACTION ROW MODULE ================= */}
                <div className="w-full flex justify-center items-center pt-[132px]">
                    <a
                        href="#portfolio-index"
                        onMouseEnter={(e) => handleButtonHover(e, true)}
                        onMouseLeave={(e) => handleButtonHover(e, false)}
                        className="w-[193.7px] h-[50px] bg-[#080807] border border-[#FCFCFC]/20 rounded-[1920px] flex items-center justify-center gap-[16px] text-[#FCFCFC] font-sans font-medium text-[16px] overflow-hidden cursor-pointer select-none"
                    >
                        <div className="h-[16px] overflow-hidden relative block leading-none">
                            <span className="works-btn-primary block h-full">
                                ALL PROJECTS
                            </span>
                            <span className="works-btn-secondary block h-full absolute top-full left-0 text-studio-accent">
                                ALL PROJECTS
                            </span>
                        </div>
                        <div className="works-btn-dot w-2 h-2 border border-[#FCFCFC] rounded-full" />
                    </a>
                </div>

            </div>
        </section>
    );
}