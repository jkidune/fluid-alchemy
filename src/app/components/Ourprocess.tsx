"use client";

import { useRef, type MouseEvent } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FIGMA_W = 1464;

const pctX = (value: number) => `${(value / FIGMA_W) * 100}%`;

const PROCESS_STEPS = [
    {
        id: "01",
        title: "Prepare Ingredient",
    },
    {
        id: "02",
        title: "Mix All Ingredient",
    },
    {
        id: "03",
        title: "Stir Well The Ingredients",
    },
    {
        id: "04",
        title: "Pour The Drink",
    },
    {
        id: "05",
        title: "Serve To The Customer",
    },
];

export default function Process() {
    const processRef = useRef<HTMLDivElement>(null);

    const { contextSafe } = useGSAP(
        () => {
            gsap.set(".process-reveal-text", {
                color: "#A3A3A3",
            });

            gsap.to(".process-reveal-text", {
                color: "#000000",
                ease: "none",
                stagger: 0.12,
                scrollTrigger: {
                    trigger: ".process-content",
                    start: "top 72%",
                    end: "top 35%",
                    scrub: 1,
                },
            });

            gsap.from(".process-left-panel", {
                y: 36,
                opacity: 0,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".process-content",
                    start: "top 78%",
                },
            });

            gsap.from(".process-button", {
                y: 20,
                opacity: 0,
                duration: 0.7,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".process-content",
                    start: "top 58%",
                },
            });
        },
        { scope: processRef }
    );

    const handleButtonHover = contextSafe(
        (e: MouseEvent<HTMLAnchorElement>, isEnter: boolean) => {
            const primary = e.currentTarget.querySelector(".process-btn-primary");
            const secondary = e.currentTarget.querySelector(".process-btn-secondary");
            const dot = e.currentTarget.querySelector(".process-btn-dot");

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

    const handleStepHover = contextSafe(
        (e: MouseEvent<HTMLDivElement>, isEnter: boolean) => {
            const number = e.currentTarget.querySelector(".process-step-number");
            const title = e.currentTarget.querySelector(".process-step-title");
            const line = e.currentTarget.querySelector(".process-step-line");

            gsap.to(number, {
                x: isEnter ? 4 : 0,
                color: isEnter ? "#080807" : "#545454",
                duration: 0.3,
                ease: "power3.out",
            });

            gsap.to(title, {
                x: isEnter ? 8 : 0,
                color: isEnter ? "#000000" : "#242424",
                duration: 0.3,
                ease: "power3.out",
            });

            if (line) {
                gsap.to(line, {
                    backgroundColor: isEnter ? "#080807" : "#DCDDDE",
                    opacity: isEnter ? 1 : 0.9,
                    duration: 0.3,
                    ease: "power2.out",
                });
            }
        }
    );

    return (
        <section
            ref={processRef}
            id="process"
            className="relative z-20 flex w-full flex-col items-center bg-[#FCFCFC] py-[clamp(60px,6.61vw,100px)]"
        >
            <div className="flex w-full flex-col items-center px-6">
                <div className="w-full max-w-[1464px]">

                    {/* ================= DESKTOP / TABLET LAYOUT ================= */}
                    <div className="process-content hidden aspect-[1464/792] w-full [container-type:inline-size] md:block">
                        <div className="relative h-full w-full">

                            {/* LEFT SIDE */}
                            <div
                                className="process-left-panel absolute left-0 top-0 flex h-full flex-col items-start justify-center gap-[clamp(8px,1.093cqw,16px)] pb-[clamp(10px,1.366cqw,20px)]"
                                style={{
                                    width: pctX(354),
                                }}
                            >
                                <div className="font-sans text-[clamp(10px,1.161cqw,17px)] font-bold uppercase leading-[clamp(12px,1.366cqw,20px)] tracking-[-0.171px] text-[#242424]">
                                    [OUR PROCESS]
                                </div>

                                <div
                                    className="relative w-full overflow-hidden bg-[#DCDDDE]"
                                    style={{
                                        aspectRatio: "354 / 488",
                                    }}
                                >
                                    <Image
                                        src="/images/Iced Beverage on Stone.png"
                                        alt="Cocktail preparation process"
                                        fill
                                        className="object-cover grayscale brightness-90 transition-all duration-700 ease-out hover:grayscale-0 hover:brightness-100"
                                        sizes="354px"
                                        unoptimized
                                    />
                                </div>

                                <div className="flex w-full flex-col justify-center gap-[clamp(8px,1.093cqw,16px)]">
                                    {PROCESS_STEPS.map((step, index) => (
                                        <div
                                            key={step.id}
                                            onMouseEnter={(e) => handleStepHover(e, true)}
                                            onMouseLeave={(e) => handleStepHover(e, false)}
                                            className="group flex w-full cursor-pointer flex-col gap-[clamp(8px,1.093cqw,16px)]"
                                        >
                                            <div className="flex items-start gap-[clamp(12px,1.64cqw,24px)] font-sans text-[clamp(12px,1.434cqw,21px)] font-medium capitalize leading-[clamp(12px,1.366cqw,20px)] tracking-[-0.171px]">
                                                <span className="process-step-number text-[#545454]">
                                                    ({step.id})
                                                </span>

                                                <span className="process-step-title text-[#242424]">
                                                    {step.title}
                                                </span>
                                            </div>

                                            {index !== PROCESS_STEPS.length - 1 && (
                                                <div className="process-step-line h-px w-full bg-[#DCDDDE]" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* RIGHT CONTENT */}
                            <div
                                className="absolute top-0 flex h-full flex-col items-start gap-[clamp(24px,2.45cqw,36px)] pt-[clamp(18px,2.05cqw,30px)]"
                                style={{
                                    left: pctX(493.33),
                                    width: pctX(970.67),
                                }}
                            >
                                <p className="process-reveal-text font-sans text-[clamp(30px,3.005cqw,44px)] font-medium capitalize leading-[clamp(36px,3.55cqw,52px)] tracking-[-0.171px]">
                                    Our approach at Fluid Alchemy is designed to turn fresh ingredients, flavour ideas, and visual presentation into cocktails that feel smooth, refined, and memorable.
                                </p>

                                <p className="process-reveal-text font-sans text-[clamp(30px,3.005cqw,44px)] font-medium capitalize leading-[clamp(36px,3.55cqw,52px)] tracking-[-0.171px]">
                                    Through our five-stage process, we prioritise clarity, balance, and craft. From preparation to the final serve, every step keeps the drink expressive, elegant, and ready for the guest.
                                </p>

                                <a
                                    href="#contact"
                                    onMouseEnter={(e) => handleButtonHover(e, true)}
                                    onMouseLeave={(e) => handleButtonHover(e, false)}
                                    className="process-button inline-flex h-[50px] w-fit cursor-pointer select-none items-center justify-center gap-[14px] overflow-hidden rounded-[1920px] bg-[#080807] px-[18px] font-sans text-[14px] font-medium uppercase leading-[17px] tracking-[-0.171px] text-[#FCFCFC]"
                                >
                                    <div className="relative block h-[17px] overflow-hidden leading-none">
                                        <span className="process-btn-primary block h-full whitespace-nowrap">
                                            GET TO KNOW OUR PROCESS
                                        </span>

                                        <span className="process-btn-secondary absolute left-0 top-full block h-full whitespace-nowrap text-studio-accent">
                                            GET TO KNOW OUR PROCESS
                                        </span>
                                    </div>

                                    <div className="process-btn-dot h-2 w-2 shrink-0 rounded-full border border-[#FCFCFC]" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ================= MOBILE STACKED LAYOUT ================= */}
                    <div className="process-content flex w-full flex-col gap-10 md:hidden">

                        <div className="flex flex-col gap-5">
                            <div className="font-sans text-[14px] font-bold uppercase leading-[18px] tracking-[-0.171px] text-[#242424]">
                                [OUR PROCESS]
                            </div>

                            <p className="process-reveal-text font-sans text-[34px] font-medium capitalize leading-[38px] tracking-[-0.171px]">
                                Our process turns fresh ingredients into cocktails made for the perfect pour.
                            </p>

                            <p className="process-reveal-text font-sans text-[23px] font-medium capitalize leading-[29px] tracking-[-0.171px]">
                                From the first flavour idea to the final serve, every step is designed for balance, elegance, and a memorable guest experience.
                            </p>
                        </div>

                        <div
                            className="process-left-panel relative w-full overflow-hidden bg-[#DCDDDE]"
                            style={{
                                aspectRatio: "354 / 488",
                            }}
                        >
                            <Image
                                src="/images/Iced Beverage on Stone.png"
                                alt="Cocktail preparation process"
                                fill
                                className="object-cover grayscale brightness-90 transition-all duration-700 ease-out hover:grayscale-0 hover:brightness-100"
                                sizes="100vw"
                                unoptimized
                            />
                        </div>

                        <div className="flex w-full flex-col gap-4">
                            {PROCESS_STEPS.map((step, index) => (
                                <div
                                    key={step.id}
                                    onMouseEnter={(e) => handleStepHover(e, true)}
                                    onMouseLeave={(e) => handleStepHover(e, false)}
                                    className="group flex w-full cursor-pointer flex-col gap-4"
                                >
                                    <div className="flex items-start gap-5 font-sans text-[21px] font-medium capitalize leading-[24px] tracking-[-0.171px]">
                                        <span className="process-step-number text-[#545454]">
                                            ({step.id})
                                        </span>

                                        <span className="process-step-title text-[#242424]">
                                            {step.title}
                                        </span>
                                    </div>

                                    {index !== PROCESS_STEPS.length - 1 && (
                                        <div className="process-step-line h-px w-full bg-[#DCDDDE]" />
                                    )}
                                </div>
                            ))}
                        </div>

                        <a
                            href="#contact"
                            onMouseEnter={(e) => handleButtonHover(e, true)}
                            onMouseLeave={(e) => handleButtonHover(e, false)}
                            className="process-button inline-flex h-[48px] w-fit max-w-full cursor-pointer select-none items-center justify-center gap-[14px] overflow-hidden rounded-[1920px] bg-[#080807] px-[17px] font-sans text-[13.5px] font-medium uppercase leading-[16px] tracking-[-0.171px] text-[#FCFCFC]"
                        >
                            <div className="relative block h-[16px] overflow-hidden leading-none">
                                <span className="process-btn-primary block h-full whitespace-nowrap">
                                    GET TO KNOW OUR PROCESS
                                </span>

                                <span className="process-btn-secondary absolute left-0 top-full block h-full whitespace-nowrap text-studio-accent">
                                    GET TO KNOW OUR PROCESS
                                </span>
                            </div>

                            <div className="process-btn-dot h-2 w-2 shrink-0 rounded-full border border-[#FCFCFC]" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}