"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NAV_ITEMS = [
    { label: "Home", href: "#home" },
    { label: "Works", href: "#portfolio-index" },
    { label: "In Progress", href: "#in-progress" },
    { label: "Archive", href: "#archive" },
    { label: "Studio", href: "#studio" },
    { label: "Process", href: "#process" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact Us", href: "#contact" },
];

const SOCIAL_ITEMS = [
    { label: "Instagram", href: "#" },
    { label: "Pinterest", href: "#" },
];

function RollingTextLink({
    label,
    href,
    className = "",
    textClassName = "",
}: {
    label: string;
    href: string;
    className?: string;
    textClassName?: string;
}) {
    return (
        <a href={href} className={`group block w-fit overflow-hidden ${className}`}>
            <span className={`relative block overflow-hidden ${textClassName}`}>
                <span className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                    {label}
                </span>

                <span className="absolute left-0 top-full block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                    {label}
                </span>
            </span>
        </a>
    );
}

export default function Footer() {
    const footerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from(".footer-inner", {
                y: 90,
                opacity: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top bottom",
                    end: "top 45%",
                    scrub: 1,
                },
            });

            gsap.from(".footer-nav-item", {
                yPercent: 80,
                opacity: 0,
                stagger: 0.04,
                duration: 0.9,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 88%",
                },
            });
        },
        { scope: footerRef }
    );

    return (
        <footer
            ref={footerRef}
            className="relative z-0 flex min-h-[100svh] w-full flex-col justify-between overflow-hidden border-t border-[#DCDDDE] bg-[#FCFCFC] px-[clamp(16px,2vw,30.56px)] pb-6 pt-[clamp(24px,2.23vw,33.728px)] lg:sticky lg:bottom-0 lg:h-[100svh] lg:max-h-[100svh]"
        >
            <div className="footer-inner flex h-full w-full flex-col justify-between gap-[clamp(28px,5vh,80px)]">

                {/* ================= TOP FOOTER ================= */}
                <div className="grid min-h-0 w-full flex-1 grid-cols-1 gap-10 lg:grid-cols-[minmax(240px,0.85fr)_minmax(300px,1.15fr)_minmax(300px,1.15fr)] lg:gap-[clamp(32px,5vw,96px)] lg:overflow-hidden">

                    {/* LEFT IMAGE / BRAND */}
                    <div className="flex w-full flex-col justify-between gap-5">
                        <div className="relative hidden h-[clamp(260px,44vh,460px)] w-full overflow-hidden bg-[#DCDDDE] lg:block">
                            <Image
                                src="/images/Iced Cocktail Display.png"
                                alt="Fluid Alchemy cocktail presentation"
                                fill
                                className="object-cover grayscale brightness-[0.92] transition-all duration-700 ease-out hover:scale-[1.035] hover:grayscale-0 hover:brightness-100"
                                sizes="30vw"
                                unoptimized
                            />
                        </div>

                        <div className="flex flex-col justify-end">
                            <p className="font-sans text-[clamp(64px,7.2vw,112px)] font-medium uppercase leading-[0.8] tracking-[-0.075em] text-black">
                                Fluid
                                <br />
                                Alchemy
                            </p>
                        </div>
                    </div>

                    {/* CENTER NAV */}
                    <nav className="flex w-full flex-col gap-[clamp(10px,1.3vh,16px)]">
                        <div className="font-sans text-[15px] font-medium uppercase leading-[21px] tracking-[-0.171px] text-black md:text-[17.1px]">
                            Menu
                        </div>

                        <ul className="flex w-full flex-col">
                            {NAV_ITEMS.map((item) => (
                                <li
                                    key={item.label}
                                    className="footer-nav-item w-full pb-[clamp(2px,0.5vh,4.55px)]"
                                >
                                    <RollingTextLink
                                        label={item.label}
                                        href={item.href}
                                        className="w-full"
                                        textClassName="h-[clamp(34px,5.4vh,52px)] font-sans text-[clamp(32px,5vh,46px)] font-medium leading-[clamp(34px,5.4vh,52px)] tracking-[-1.2px] text-black"
                                    />
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* RIGHT INFO */}
                    <div className="flex w-full flex-col justify-start gap-[clamp(34px,5vh,74.23px)]">

                        <div className="flex flex-col gap-[16.04px]">
                            <div className="font-sans text-[15px] font-medium uppercase leading-[21px] tracking-[-0.171px] text-black md:text-[17.1px]">
                                Studio Notes
                            </div>

                            <p className="max-w-[390px] font-sans text-[15px] font-normal leading-[21px] tracking-[-0.171px] text-black md:text-[17.1px]">
                                Fluid Alchemy is a cocktail studio crafting expressive drinks for weddings, private dinners, brand activations, and intimate celebrations.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="font-sans text-[15px] font-medium uppercase leading-[21px] tracking-[-0.171px] text-black md:text-[17.1px]">
                                Contact
                            </div>

                            <div className="flex flex-col gap-[3.5px] pb-3 font-sans text-[15px] font-medium leading-[21px] tracking-[-0.171px] text-black md:text-[17.1px]">
                                <RollingTextLink
                                    label="hello@fluidalchemy.studio"
                                    href="mailto:hello@fluidalchemy.studio"
                                    textClassName="h-[21px]"
                                />

                                <RollingTextLink
                                    label="+255 700 000 000"
                                    href="tel:+255700000000"
                                    textClassName="h-[21px]"
                                />

                                <p>Dar Es Salaam</p>
                                <p>Available For Events</p>
                            </div>

                            <div className="flex h-[88.52px] w-[212px] items-center justify-center border border-black/20 px-5 text-center font-sans text-[12px] font-medium uppercase leading-[14px] tracking-[-0.171px] text-black">
                                Signature Cocktail Studio
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= BOTTOM FOOTER ================= */}
                <div className="grid w-full shrink-0 grid-cols-1 gap-6 border-t border-black/10 pt-5 lg:grid-cols-[minmax(240px,1fr)_minmax(160px,1fr)_minmax(140px,1fr)_minmax(220px,auto)] lg:items-end lg:gap-8 lg:border-t-0 lg:pt-0">

                    <div className="min-w-0 font-sans text-[14px] font-medium uppercase leading-[18px] tracking-[-0.171px] text-black md:text-[17.1px] md:leading-[17px]">
                        <p>© 2026 Fluid Alchemy</p>
                        <p>Dar Es Salaam, We Are Open</p>
                    </div>

                    <div className="flex min-w-0 flex-col gap-1">
                        {SOCIAL_ITEMS.map((item) => (
                            <RollingTextLink
                                key={item.label}
                                label={item.label}
                                href={item.href}
                                textClassName="h-[18px] font-sans text-[14px] font-medium uppercase leading-[17px] tracking-[-0.171px] text-[#080807] md:text-[17.1px]"
                            />
                        ))}
                    </div>

                    <div className="min-w-0">
                        <RollingTextLink
                            label="Instagram"
                            href="#"
                            textClassName="h-[18px] font-sans text-[14px] font-medium uppercase leading-[17px] tracking-[-0.171px] text-[#080807] md:text-[17.1px]"
                        />
                    </div>

                    <div className="flex max-w-full flex-wrap items-center justify-start gap-x-1 gap-y-1 font-sans text-[14px] font-medium uppercase leading-[17px] tracking-[-0.171px] text-black md:text-[17.1px] lg:justify-end">
                        <span className="shrink-0">Design:</span>

                        <a
                            href="#"
                            className="group relative inline-flex max-w-full overflow-hidden pb-[3px]"
                        >
                            <span className="relative z-10 truncate">
                                Joseph Masonda
                            </span>

                            <span className="absolute bottom-0 left-0 h-[1.7px] w-full origin-left bg-[#080807] transition-transform duration-300 ease-out group-hover:scale-x-0" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
