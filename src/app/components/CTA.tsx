"use client";

import { useRef, type MouseEvent } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
    const ctaRef = useRef<HTMLDivElement>(null);

    const { contextSafe } = useGSAP(
        () => {
            gsap.from(".cta-line", {
                yPercent: 110,
                opacity: 0,
                duration: 1,
                stagger: 0.12,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".cta-content",
                    start: "top 78%",
                },
            });

            gsap.from(".cta-divider", {
                scaleX: 0,
                transformOrigin: "left center",
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".cta-content",
                    start: "top 70%",
                },
            });

            gsap.from(".cta-button", {
                y: 18,
                opacity: 0,
                duration: 0.7,
                delay: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".cta-content",
                    start: "top 65%",
                },
            });
        },
        { scope: ctaRef }
    );

    const handleButtonHover = contextSafe(
        (e: MouseEvent<HTMLAnchorElement>, isEnter: boolean) => {
            const primary = e.currentTarget.querySelector(".cta-btn-primary");
            const secondary = e.currentTarget.querySelector(".cta-btn-secondary");
            const dot = e.currentTarget.querySelector(".cta-btn-dot");

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
                backgroundColor: isEnter ? "#242424" : "transparent",
                scale: isEnter ? 0.6 : 1,
                duration: 0.3,
                ease: "power2.out",
            });

            gsap.to(e.currentTarget, {
                backgroundColor: isEnter ? "#FCFCFC" : "#D9D9D9",
                duration: 0.35,
                ease: "power2.out",
            });
        }
    );

    return (
        <section
            ref={ctaRef}
            id="cta"
            className="relative z-20 flex w-full flex-col items-center bg-[#0E0E0E] py-[clamp(70px,6.61vw,100px)]"
        >
            <div className="flex w-full flex-col px-6 lg:px-[30px]">
                <div className="cta-content flex w-full flex-col">

                    {/* TEXT BLOCK */}
                    <div className="flex w-full flex-col">
                        <div className="overflow-hidden">
                            <h2 className="cta-line font-sans text-[clamp(46px,8.6vw,130px)] font-medium uppercase leading-[0.95] tracking-[-0.171px] text-[#D9D9D9]">
                                Focused On Quality
                            </h2>
                        </div>

                        <div className="overflow-hidden">
                            <h2 className="cta-line font-sans text-[clamp(46px,8.99vw,136px)] font-medium uppercase leading-[0.95] tracking-[-0.171px] text-[#D9D9D9]">
                                Driven By Creativity
                            </h2>
                        </div>
                    </div>



                    {/* CENTER BUTTON */}
                    <div className="flex w-full justify-center pt-[clamp(18px,2vw,28px)]">
                        <a
                            href="#contact"
                            onMouseEnter={(e) => handleButtonHover(e, true)}
                            onMouseLeave={(e) => handleButtonHover(e, false)}
                            className="cta-button inline-flex h-[clamp(34px,3.3vw,50px)] w-fit cursor-pointer select-none items-center justify-center gap-[10px] overflow-hidden rounded-[1920px] bg-[#D9D9D9] px-[clamp(14px,1.32vw,20px)] font-sans text-[clamp(8px,0.92vw,14px)] font-medium uppercase leading-none tracking-[-0.171px] text-[#242424]"
                        >
                            <div className="relative block h-[1em] overflow-hidden leading-none">
                                <span className="cta-btn-primary block h-full whitespace-nowrap">
                                    TELL US ABOUT YOUR PROJECT
                                </span>

                                <span className="cta-btn-secondary absolute left-0 top-full block h-full whitespace-nowrap text-[#242424]">
                                    TELL US ABOUT YOUR PROJECT
                                </span>
                            </div>

                            <div className="cta-btn-dot h-2 w-2 shrink-0 rounded-full border border-[#080807]" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
