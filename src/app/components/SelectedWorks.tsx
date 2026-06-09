"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Curated data structures mapped directly from your uploaded beverage assets
const ALCHEMY_PROJECTS = [
    {
        id: "001",
        title: "Crimson Eclipse",
        category: "Signature Alchemy",
        year: "2026",
        src: "/images/Colorful Cocktails Display.png",
        meta: "Heavy Tumbler / Amaro Base / Muddled Mint"
    },
    {
        id: "002",
        title: "Neon Meridian",
        category: "Editorial Concept",
        year: "2026",
        src: "/images/Green Margarita Delight.png",
        meta: "Stemmed Coupe / Agave Distillate / Salt Crust"
    },
    {
        id: "003",
        title: "Stark Amber on Stone",
        category: "Liquid Architecture",
        year: "2025",
        src: "/images/Iced Beverage on Stone.png",
        meta: "Crystal Tumbler / Smoked Bourbon / Clear Cube"
    },
    {
        id: "004",
        title: "Cerise Horizon",
        category: "Editorial Concept",
        year: "2026",
        src: "/images/Iced Cocktail Display.png",
        meta: "Highball / Clarified Cherry Extract / Crisp Ice"
    },
];

export default function SelectedWorks() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollSectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const scrollWidth = scrollSectionRef.current?.scrollWidth || 0;
        const viewportWidth = window.innerWidth;
        const totalScrollDistance = scrollWidth - viewportWidth;

        if (totalScrollDistance <= 0) return;

        gsap.to(scrollSectionRef.current, {
            x: -totalScrollDistance,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                start: "top top",
                end: () => `+=${scrollWidth}`,
                invalidateOnRefresh: true,
            },
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative bg-studio-bg overflow-hidden">
            <div className="h-24 flex items-center px-4 md:px-12 border-b arch-grid-line">
                <h2 className="font-mono text-xs uppercase tracking-widest text-studio-muted">
                    [01 / SELECTED ALCHEMY]
                </h2>
            </div>

            {/* Horizontal Strip Container */}
            <div
                ref={scrollSectionRef}
                className="flex h-[75vh] w-max base-scroll-container"
            >
                {ALCHEMY_PROJECTS.map((project) => (
                    <div
                        key={project.id}
                        className="w-[85vw] sm:w-[50vw] md:w-[35vw] h-full border-r arch-grid-line flex flex-col justify-between p-6 md:p-8 group cursor-pointer"
                    >
                        {/* Structural Monospaced Header Label */}
                        <div className="flex justify-between items-baseline font-mono text-xs text-studio-muted">
                            <span>NO. {project.id}</span>
                            <span>{project.year}</span>
                        </div>

                        {/* Scale Image Window */}
                        <div className="relative w-full h-[60%] overflow-hidden bg-studio-surface">
                            <Image
                                src={project.src}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 85vw, 35vw"
                                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                            />
                        </div>

                        {/* Lower Metadata Panel */}
                        <div className="pt-4">
                            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight group-hover:text-studio-accent transition-colors">
                                {project.title}
                            </h3>
                            <div className="flex justify-between items-center mt-2 font-mono text-xs text-studio-muted">
                                <span>{project.category}</span>
                                <span className="text-[10px] opacity-60 hidden lg:inline">{project.meta}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}