"use client";

import { useRef, type MouseEvent } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FIGMA_W = 1464;

const pctX = (value: number) => `${(value / FIGMA_W) * 100}%`;

export default function Testimonies() {
    const testimoniesRef = useRef<HTMLDivElement>(null);

    const { contextSafe } = useGSAP(
        () => {
            gsap.set(".testimony-reveal-text", {
                color: "#9A9A9A",
            });

            gsap.to(".testimony-reveal-text", {
                color: "#000000",
                ease: "none",
                stagger: 0.12,
                scrollTrigger: {
                    trigger: ".testimonies-content",
                    start: "top 75%",
                    end: "top 35%",
                    scrub: 1,
                },
            });

            gsap.from(".testimonies-left-panel", {
                y: 40,
                opacity: 0,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".testimonies-content",
                    start: "top 78%",
                },
            });

            gsap.from(".testimonies-project-card", {
                y: 54,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".testimonies-content",
                    start: "top 72%",
                },
            });
        },
        { scope: testimoniesRef }
    );

    const handleProjectHover = contextSafe(
        (e: MouseEvent<HTMLAnchorElement>, isEnter: boolean) => {
            const img = e.currentTarget.querySelector(".testimonies-project-image");
            const view = e.currentTarget.querySelector(".testimonies-view-text");
            const arrow = e.currentTarget.querySelector(".testimonies-arrow");

            gsap.to(img, {
                scale: isEnter ? 1.035 : 1,
                filter: isEnter
                    ? "grayscale(0%) brightness(100%)"
                    : "grayscale(100%) brightness(92%)",
                duration: 0.7,
                ease: "power2.out",
            });

            gsap.to(view, {
                x: isEnter ? -6 : 0,
                color: isEnter ? "#000000" : "#4F4F4F",
                duration: 0.35,
                ease: "power3.out",
            });

            gsap.to(arrow, {
                x: isEnter ? 5 : 0,
                y: isEnter ? -5 : 0,
                rotate: isEnter ? 45 : 0,
                color: isEnter ? "#000000" : "#3D3D3D",
                duration: 0.35,
                ease: "power3.out",
            });
        }
    );

    const handleClientHover = contextSafe(
        (e: MouseEvent<HTMLDivElement>, isEnter: boolean) => {
            const name = e.currentTarget.querySelector(".testimonies-client-name");
            const role = e.currentTarget.querySelector(".testimonies-client-role");
            const line = e.currentTarget.querySelector(".testimonies-client-line");

            gsap.to(name, {
                x: isEnter ? 8 : 0,
                duration: 0.35,
                ease: "power3.out",
            });

            gsap.to(role, {
                x: isEnter ? 8 : 0,
                color: isEnter ? "#000000" : "#3D3D3D",
                duration: 0.35,
                ease: "power3.out",
            });

            gsap.to(line, {
                backgroundColor: isEnter ? "#000000" : "#DCDDDE",
                duration: 0.35,
                ease: "power2.out",
            });
        }
    );

    return (
        <section
            ref={testimoniesRef}
            id="testimonies"
            className="relative z-20 flex w-full flex-col items-center bg-[#FCFCFC] py-[clamp(60px,6.61vw,100px)]"
        >
            <div className="flex w-full flex-col px-6 lg:px-[30px]">
                <div className="flex w-full flex-col gap-[clamp(28px,2.64vw,38.64px)]">

                    {/* ================= TITLE ================= */}
                    <div className="w-full select-none [container-type:inline-size]">
                        <h2 className="font-sans text-[clamp(48px,10.38cqw,152px)] font-medium capitalize leading-[clamp(52px,10.93cqw,160px)] tracking-[-0.171px] text-black">
                            TESTIMONIALS
                        </h2>
                    </div>

                    {/* ================= DESKTOP / TABLET LAYOUT ================= */}
                    <div className="testimonies-content hidden aspect-[1464/930] w-full [container-type:inline-size] md:block">
                        <div className="relative h-full w-full">

                            {/* LEFT SIDE */}
                            <div
                                className="testimonies-left-panel absolute left-0 top-0 flex flex-col items-start justify-center gap-[clamp(8px,1.093cqw,16px)] pb-[clamp(10px,1.366cqw,20px)]"
                                style={{
                                    width: pctX(600.67),
                                    height: "96.67%",
                                }}
                            >
                                <div className="font-sans text-[clamp(10px,1.161cqw,17px)] font-bold uppercase leading-[clamp(12px,1.366cqw,20px)] tracking-[-0.171px] text-[#242424]">
                                    [HEAR FROM OUR CLIENT]
                                </div>

                                <div
                                    className="relative w-full overflow-hidden bg-[#DCDDDE]"
                                    style={{
                                        aspectRatio: "600.67 / 488",
                                    }}
                                >
                                    <Image
                                        src="/images/Iced Beverage on Stone.png"
                                        alt="Cocktail served during a client event"
                                        fill
                                        className="object-cover grayscale brightness-90 transition-all duration-700 ease-out hover:grayscale-0 hover:brightness-100"
                                        sizes="42vw"
                                        unoptimized
                                    />
                                </div>

                                <div className="flex w-full flex-col justify-center gap-[clamp(10px,1.093cqw,16px)]">
                                    <p className="testimony-reveal-text font-sans text-[clamp(16px,1.714cqw,21px)] font-medium capitalize leading-[clamp(20px,2.049cqw,30px)] tracking-[-0.251px]">
                                        "Fluid Alchemy transformed our wedding bar into one of the most memorable parts of the celebration. Every cocktail felt considered, beautiful, and perfectly matched to the mood of the evening.
                                    </p>

                                    <p className="testimony-reveal-text font-sans text-[clamp(16px,1.714cqw,21px)] font-medium capitalize leading-[clamp(20px,2.049cqw,30px)] tracking-[-0.251px]">
                                        The service was calm, polished, and personal. Our guests still talk about the signature drinks. Treating liquids as volatile raw elements. We study density shifts, thermal dissipation, and optical refractions across glass vessels."
                                    </p>

                                    <div
                                        onMouseEnter={(e) => handleClientHover(e, true)}
                                        onMouseLeave={(e) => handleClientHover(e, false)}
                                        className="flex w-full cursor-pointer flex-col gap-[clamp(6px,0.546cqw,8px)] pt-[clamp(4px,0.546cqw,8px)]"
                                    >
                                        <div className="testimonies-client-line h-px w-full bg-[#DCDDDE]" />

                                        <div className="flex w-full flex-col gap-[clamp(4px,0.546cqw,8px)] pt-[clamp(6px,0.546cqw,8px)]">
                                            <div className="testimonies-client-name font-sans text-[clamp(13px,1.229cqw,18px)] font-bold capitalize leading-[clamp(16px,1.366cqw,20px)] tracking-[-0.251px] text-black">
                                                JOSEPH & DIANA
                                            </div>

                                            <div className="testimonies-client-role font-sans text-[clamp(13px,1.229cqw,18px)] font-medium capitalize leading-[clamp(16px,1.366cqw,20px)] tracking-[-0.251px] text-[#3D3D3D]">
                                                WEDDING COUPLE
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT PROJECT CARD */}
                            <a
                                href="#portfolio-index"
                                onMouseEnter={(e) => handleProjectHover(e, true)}
                                onMouseLeave={(e) => handleProjectHover(e, false)}
                                className="testimonies-project-card absolute top-0 flex h-full flex-col items-start gap-[clamp(6px,0.82cqw,12px)]"
                                style={{
                                    left: pctX(863.33),
                                    width: pctX(600.67),
                                }}
                            >
                                <div
                                    className="relative w-full overflow-hidden bg-[#DCDDDE]"
                                    style={{
                                        aspectRatio: "600.67 / 900",
                                    }}
                                >
                                    <Image
                                        src="/images/Colorful Cocktails Display.png"
                                        alt="Dar es Salaam wedding cocktail project"
                                        fill
                                        className="testimonies-project-image object-cover grayscale brightness-90 will-change-transform"
                                        sizes="42vw"
                                        unoptimized
                                    />
                                </div>

                                <div className="flex w-full items-start justify-between gap-4 font-sans text-[clamp(10px,1.168cqw,17.1px)] font-bold uppercase leading-[clamp(10px,1.161cqw,17px)] tracking-[-0.171px]">
                                    <div className="flex items-start gap-[clamp(12px,1.64cqw,24px)] text-black">
                                        <span>(2024)</span>
                                        <span>Dar Es Salaam Wedding</span>
                                    </div>

                                    <div className="flex items-center justify-end gap-[clamp(8px,0.82cqw,12px)] text-[#4F4F4F]">
                                        <span className="testimonies-view-text whitespace-nowrap">
                                            View Project
                                        </span>

                                        <span className="testimonies-arrow text-[clamp(12px,1.229cqw,18px)] leading-none text-[#3D3D3D]">
                                            ↗
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* ================= MOBILE STACKED LAYOUT ================= */}
                    <div className="testimonies-content flex w-full flex-col gap-10 md:hidden">

                        <div className="flex flex-col gap-4">
                            <div className="font-sans text-[14px] font-bold uppercase leading-[18px] tracking-[-0.171px] text-[#242424]">
                                [HEAR FROM OUR CLIENT]
                            </div>

                            <div
                                className="relative w-full overflow-hidden bg-[#DCDDDE]"
                                style={{
                                    aspectRatio: "600.67 / 488",
                                }}
                            >
                                <Image
                                    src="/images/Iced Beverage on Stone.png"
                                    alt="Cocktail served during a client event"
                                    fill
                                    className="object-cover grayscale brightness-90 transition-all duration-700 ease-out hover:grayscale-0 hover:brightness-100"
                                    sizes="100vw"
                                    unoptimized
                                />
                            </div>

                            <p className="testimony-reveal-text font-sans text-[24px] font-medium capitalize leading-[30px] tracking-[-0.251px]">
                                Fluid Alchemy transformed our wedding bar into one of the most memorable parts of the celebration. Every cocktail felt considered, beautiful, and perfectly matched to the mood of the evening.
                            </p>

                            <p className="testimony-reveal-text font-sans text-[20px] font-medium capitalize leading-[26px] tracking-[-0.251px]">
                                The service was calm, polished, and personal. Our guests still talk about the signature drinks.
                            </p>

                            <div
                                onMouseEnter={(e) => handleClientHover(e, true)}
                                onMouseLeave={(e) => handleClientHover(e, false)}
                                className="flex w-full cursor-pointer flex-col gap-3 pt-2"
                            >
                                <div className="testimonies-client-line h-px w-full bg-[#DCDDDE]" />

                                <div className="flex flex-col gap-1">
                                    <div className="testimonies-client-name font-sans text-[18px] font-bold capitalize leading-[20px] tracking-[-0.251px] text-black">
                                        Joseph & Diana
                                    </div>

                                    <div className="testimonies-client-role font-sans text-[18px] font-medium capitalize leading-[20px] tracking-[-0.251px] text-[#3D3D3D]">
                                        Wedding Couple
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a
                            href="#portfolio-index"
                            onMouseEnter={(e) => handleProjectHover(e, true)}
                            onMouseLeave={(e) => handleProjectHover(e, false)}
                            className="testimonies-project-card flex w-full flex-col gap-3"
                        >
                            <div
                                className="relative w-full overflow-hidden bg-[#DCDDDE]"
                                style={{
                                    aspectRatio: "600.67 / 900",
                                }}
                            >
                                <Image
                                    src="/images/Colorful Cocktails Display.png"
                                    alt="Dar es Salaam wedding cocktail project"
                                    fill
                                    className="testimonies-project-image object-cover grayscale brightness-90 will-change-transform"
                                    sizes="100vw"
                                    unoptimized
                                />
                            </div>

                            <div className="flex w-full items-start justify-between gap-4 font-sans text-[11px] font-bold uppercase leading-[12px] tracking-[-0.171px]">
                                <div className="flex min-w-0 items-start gap-3 text-black">
                                    <span className="shrink-0">(2024)</span>
                                    <span className="truncate">Dar Es Salaam Wedding</span>
                                </div>

                                <div className="flex shrink-0 items-center justify-end gap-2 text-[#4F4F4F]">
                                    <span className="testimonies-view-text whitespace-nowrap">
                                        View Project
                                    </span>

                                    <span className="testimonies-arrow text-[14px] leading-none text-[#3D3D3D]">
                                        ↗
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
