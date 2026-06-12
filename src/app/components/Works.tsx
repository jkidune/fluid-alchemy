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
        gridColumnSpan: "col-span-12 md:col-span-6" // Takes up exactly half of the 12-column grid
    },
    {
        id: "02",
        title: "VIBRANT BLUE LAGOON COCKTAIL",
        year: "2026",
        img: "/images/Iced Beverage on Stone.png",
        heightClass: "h-[975px]",
        gridColumnSpan: "col-span-12 md:col-span-6 lg:translate-y-[66px]" // Staggered downward offset
    },
    {
        id: "03",
        title: "CRIMSON TROPIC COMPOSITION",
        year: "2026",
        img: "/images/Iced Cocktail Display.png",
        heightClass: "h-[815px]",
        gridColumnSpan: "col-span-12 md:col-span-5" // Custom asymmetric span width
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
    const cursorRef = useRef<HTMLDivElement>(null);
    const { contextSafe } = useGSAP({ scope: sectionRef });

    // Track mouse movement smoothly
    useGSAP(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const onMouseMove = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.4,
                ease: "power3.out",
                overwrite: "auto"
            });
        };

        window.addEventListener("mousemove", onMouseMove);
        return () => window.removeEventListener("mousemove", onMouseMove);
    }, { scope: sectionRef });

    const handleCardHover = contextSafe((e: React.MouseEvent<HTMLDivElement>, isEnter: boolean) => {
        const cursor = cursorRef.current;
        const img = e.currentTarget.querySelector(".work-card-image");
        const title = e.currentTarget.querySelector(".work-card-title");

        if (cursor) {
            gsap.to(cursor, {
                scale: isEnter ? 1 : 0,
                opacity: isEnter ? 1 : 0,
                borderRadius: isEnter ? "12px" : "50%",
                duration: 0.45,
                ease: isEnter ? "power3.out" : "power3.inOut"
            });
        }

        if (img) {
            gsap.to(img, {
                scale: isEnter ? 1.03 : 1,
                filter: isEnter ? "grayscale(0%) brightness(100%)" : "grayscale(100%) brightness(90%)",
                duration: 0.8,
                ease: "power2.out"
            });
        }

        if (title) {
            gsap.to(title, {
                x: isEnter ? 10 : 0,
                duration: 0.35,
                ease: "power2.out"
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
            {/* Global Framework Boundary Layout Wrapper */}
            <div className="w-full px-6 md:px-[24px] lg:px-[30px] flex flex-col gap-[25.76px]">

                {/* ================= TITLE BLOCK ROW ================= */}
                {/* FIXED: Switched align-items to flex-start to establish left axis lock */}
                <div className="w-full flex flex-col justify-center items-start h-[320px] select-none border-b border-white/10">
                    <h2 className="w-full font-sans font-medium text-[64px] sm:text-[100px] md:text-[152px] leading-[160px] tracking-[-0.171px] text-[#FCFCFC] uppercase">
                        Featured
                    </h2>
                    {/* Lower Title Row Track spreading left to right */}
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
                {/* FIXED: Configured strict 12 columns, 16px horizontal gap, 132px vertical gap */}
                <div className="w-full grid grid-cols-12 gap-x-4 gap-y-[132px] pt-16">
                    {MOCKED_WORKS.map((work) => (
                        <div
                            key={work.id}
                            onMouseEnter={(e) => handleCardHover(e, true)}
                            onMouseLeave={(e) => handleCardHover(e, false)}
                            className={`${work.gridColumnSpan} flex flex-col gap-3 group cursor-pointer`}
                        >
                            {/* Image Frame Container (Matches your explicit height rules) */}
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

                            {/* Detail Output Row Block */}
                            <div className="w-full flex justify-between items-start pt-1.5 font-sans font-bold text-[17.1px] leading-[17px] tracking-[-0.171px]">
                                <div className="flex items-center gap-6 text-[#FCFCFC] uppercase">
                                    <span>({work.id})</span>
                                    <h3 className="work-card-title group-hover:text-studio-accent transition-colors duration-300">
                                        {work.title}
                                    </h3>
                                </div>
                                <span className="font-medium text-[#4F4F4F]">
                                    {work.year}
                                </span>
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

            {/* Custom Glassmorphic Cursor Follower */}
            <div
                ref={cursorRef}
                className="pointer-events-none fixed top-0 left-0 w-[110px] h-[110px] bg-[#FCFCFC]/5 backdrop-blur-md border border-[#FCFCFC]/15 rounded-[50%] flex items-center justify-center text-center select-none z-50 scale-0 opacity-0 -translate-x-1/2 -translate-y-1/2 shadow-[0_24px_50px_rgba(0,0,0,0.6)] will-change-transform"
            >
                <span className="font-sans font-medium text-[11px] tracking-[0.15em] text-[#FCFCFC] leading-none uppercase">
                    View Drink
                </span>
            </div>
        </section>
    );
}