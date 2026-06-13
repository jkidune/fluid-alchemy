"use client";

import { useRef, type MouseEvent } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FIGMA_W = 1464;
const FIGMA_H = 3256.93;

const pctX = (value: number) => `${(value / FIGMA_W) * 100}%`;
const pctY = (value: number) => `${(value / FIGMA_H) * 100}%`;

const WORKS = [
    {
        id: "01",
        title: "BLOODY MARY COCKTAIL",
        year: "2026",
        img: "/images/Iced Coffee Close-Up.png",
        x: 0,
        y: 0,
        w: 724,
        imageH: 487.5,
        priority: true,
    },
    {
        id: "02",
        title: "VIBRANT BLUE LAGOON COCKTAIL",
        year: "2026",
        img: "/images/Vibrant Cocktail Trio.png",
        x: 740,
        y: 0,
        w: 724,
        imageH: 975,
        priority: false,
    },
    {
        id: "03",
        title: "VIBRANT BLUE LAGOON COCKTAIL",
        year: "2026",
        img: "/images/Iced Cocktail Display.png",
        x: 0,
        y: 1404.33,
        w: 600.67,
        imageH: 815,
        priority: false,
    },
    {
        id: "04",
        title: "VIBRANT BLUE LAGOON COCKTAIL",
        year: "2026",
        img: "/images/Vibrant Cocktails Display.png",
        x: 740,
        y: 1404.33,
        w: 724,
        imageH: 495,
        priority: false,
    },
    {
        id: "05",
        title: "VIBRANT BLUE LAGOON COCKTAIL",
        year: "2026",
        img: "/images/Colorful Cocktails Display.png",
        x: 0,
        y: 2598.05,
        w: 724,
        imageH: 495,
        priority: false,
    },
    {
        id: "06",
        title: "VIBRANT BLUE LAGOON COCKTAIL",
        year: "2026",
        img: "/images/Vibrant Cocktails Display.png",
        x: 863.33,
        y: 2598.05,
        w: 600.67,
        imageH: 400,
        priority: false,
    },
];

export default function Works() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { contextSafe } = useGSAP({ scope: sectionRef });

    const handleCardHover = contextSafe(
        (e: MouseEvent<HTMLDivElement>, isEnter: boolean) => {
            const img = e.currentTarget.querySelector(".work-card-image");
            const year = e.currentTarget.querySelector(".work-card-year");
            const btn = e.currentTarget.querySelector(".work-card-btn");

            if (img) {
                gsap.to(img, {
                    scale: isEnter ? 1.03 : 1,
                    filter: isEnter
                        ? "grayscale(0%) brightness(100%)"
                        : "grayscale(100%) brightness(90%)",
                    duration: 0.6,
                    ease: "power2.out",
                });
            }

            if (year && btn) {
                gsap.to(year, {
                    yPercent: isEnter ? -100 : 0,
                    duration: 0.4,
                    ease: "power3.out",
                });

                gsap.to(btn, {
                    yPercent: isEnter ? -100 : 0,
                    duration: 0.4,
                    ease: "power3.out",
                });
            }
        }
    );

    const handleButtonHover = contextSafe(
        (e: MouseEvent<HTMLAnchorElement>, isEnter: boolean) => {
            const primary = e.currentTarget.querySelector(".works-btn-primary");
            const secondary = e.currentTarget.querySelector(".works-btn-secondary");
            const dot = e.currentTarget.querySelector(".works-btn-dot");

            gsap.to(primary, {
                yPercent: isEnter ? -100 : 0,
                duration: 0.35,
                ease: "power3.out",
            });

            gsap.to(secondary, {
                yPercent: isEnter ? -100 : 0,
                duration: 0.35,
                ease: "power3.out",
            });

            gsap.to(dot, {
                backgroundColor: isEnter ? "#FCFCFC" : "transparent",
                scale: isEnter ? 0.6 : 1,
                duration: 0.3,
                ease: "power2.out",
            });
        }
    );

    return (
        <section
            ref={sectionRef}
            id="index"
            className="relative z-30 flex w-full flex-col items-center bg-[#0B0B0C] py-[clamp(40px,6.83vw,100px)]"
        >
            <div className="flex w-full flex-col px-[clamp(10px,2.05vw,30px)]">

                {/* ================= TITLE BLOCK ================= */}
                <div className="mx-auto w-full max-w-[1464px] select-none [container-type:inline-size]">
                    <h2 className="font-sans text-[clamp(42px,10.38cqw,152px)] font-medium uppercase leading-[clamp(42px,10.93cqw,160px)] tracking-[-0.171px] text-[#FCFCFC]">
                        Featured
                    </h2>

                    <div className="relative h-[clamp(42px,10.93cqw,160px)] w-full">
                        <h2 className="absolute left-[33.5%] top-0 font-sans text-[clamp(42px,10.38cqw,152px)] font-medium uppercase leading-[clamp(42px,10.93cqw,160px)] tracking-[-0.171px] text-[#FCFCFC]">
                            Works
                        </h2>

                        <span className="absolute right-0 top-0 font-sans text-[clamp(42px,10.38cqw,152px)] font-medium leading-[clamp(42px,10.93cqw,160px)] tracking-[-0.171px] text-studio-accent/20">
                            (07)
                        </span>
                    </div>
                </div>

                {/* ================= DESKTOP / TABLET: EXACT FIGMA WORK CONTAINER ================= */}
                <div className="mx-auto mt-[clamp(40px,4.37vw,64px)] hidden aspect-[1464/3256.93] w-full max-w-[1464px] [container-type:inline-size] md:block">
                    <div className="relative h-full w-full">
                        {WORKS.map((work) => (
                            <div
                                key={work.id}
                                onMouseEnter={(e) => handleCardHover(e, true)}
                                onMouseLeave={(e) => handleCardHover(e, false)}
                                className="group absolute flex cursor-pointer flex-col gap-[clamp(3px,0.82cqw,12px)]"
                                style={{
                                    left: pctX(work.x),
                                    top: pctY(work.y),
                                    width: pctX(work.w),
                                }}
                            >
                                <div
                                    className="relative w-full overflow-hidden bg-[#121214]"
                                    style={{
                                        aspectRatio: `${work.w} / ${work.imageH}`,
                                    }}
                                >
                                    <Image
                                        src={work.img}
                                        alt={work.title}
                                        fill
                                        priority={work.priority}
                                        className="work-card-image object-cover grayscale brightness-90 will-change-transform"
                                        sizes="(max-width: 1464px) 50vw, 724px"
                                        unoptimized
                                    />
                                </div>

                                <div className="flex w-full items-start justify-between font-sans text-[clamp(5px,1.168cqw,17.1px)] font-bold uppercase leading-[clamp(5px,1.161cqw,17px)] tracking-[-0.171px]">
                                    <div className="flex items-center gap-[clamp(7px,1.64cqw,24px)] text-[#FCFCFC]">
                                        <span className="text-studio-accent opacity-60">
                                            ({work.id})
                                        </span>

                                        <h3 className="work-card-title transition-colors duration-300 group-hover:text-studio-accent">
                                            {work.title}
                                        </h3>
                                    </div>

                                    <div className="relative block h-[clamp(5px,1.161cqw,17px)] min-w-[clamp(40px,9.56cqw,140px)] overflow-hidden text-right leading-none">
                                        <span className="work-card-year block h-full pr-1 text-[#4F4F4F] transition-transform duration-300">
                                            {work.year}
                                        </span>

                                        <span className="work-card-btn absolute right-0 top-full block h-full whitespace-nowrap pl-2 font-medium text-[#FCFCFC]/80 transition-transform duration-300">
                                            VIEW PROJECT →
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ================= MOBILE: STACKED RESPONSIVE VERSION ================= */}
                <div className="mt-10 flex w-full flex-col gap-12 md:hidden">
                    {WORKS.map((work) => (
                        <div
                            key={work.id}
                            onMouseEnter={(e) => handleCardHover(e, true)}
                            onMouseLeave={(e) => handleCardHover(e, false)}
                            className="group flex w-full cursor-pointer flex-col gap-3"
                        >
                            <div
                                className="relative w-full overflow-hidden bg-[#121214]"
                                style={{
                                    aspectRatio: `${work.w} / ${work.imageH}`,
                                }}
                            >
                                <Image
                                    src={work.img}
                                    alt={work.title}
                                    fill
                                    priority={work.priority}
                                    className="work-card-image object-cover grayscale brightness-90 will-change-transform"
                                    sizes="100vw"
                                    unoptimized
                                />
                            </div>

                            <div className="flex w-full items-start justify-between gap-4 font-sans text-[11px] font-bold uppercase leading-[11px] tracking-[-0.171px]">
                                <div className="flex min-w-0 items-center gap-3 text-[#FCFCFC]">
                                    <span className="shrink-0 text-studio-accent opacity-60">
                                        ({work.id})
                                    </span>

                                    <h3 className="work-card-title truncate transition-colors duration-300 group-hover:text-studio-accent">
                                        {work.title}
                                    </h3>
                                </div>

                                <div className="relative block h-[11px] min-w-[70px] shrink-0 overflow-hidden text-right leading-none">
                                    <span className="work-card-year block h-full text-[#4F4F4F] transition-transform duration-300">
                                        {work.year}
                                    </span>

                                    <span className="work-card-btn absolute right-0 top-full block h-full whitespace-nowrap font-medium text-[#FCFCFC]/80 transition-transform duration-300">
                                        VIEW →
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ================= BOTTOM ACTION ROW ================= */}
                <div className="flex w-full items-center justify-center pt-[clamp(60px,6.83vw,100px)]">
                    <a
                        href="#portfolio-index"
                        onMouseEnter={(e) => handleButtonHover(e, true)}
                        onMouseLeave={(e) => handleButtonHover(e, false)}
                        className="flex h-[50px] w-[193.7px] cursor-pointer select-none items-center justify-center gap-[16px] overflow-hidden rounded-[1920px] border border-[#FCFCFC]/20 bg-[#080807] font-sans text-[16px] font-medium text-[#FCFCFC]"
                    >
                        <div className="relative block h-[16px] overflow-hidden leading-none">
                            <span className="works-btn-primary block h-full">
                                ALL PROJECTS
                            </span>

                            <span className="works-btn-secondary absolute left-0 top-full block h-full text-studio-accent">
                                ALL PROJECTS
                            </span>
                        </div>

                        <div className="works-btn-dot h-2 w-2 rounded-full border border-[#FCFCFC]" />
                    </a>
                </div>
            </div>
        </section>
    );
}