"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);
    const lastScrollY = useRef(0);
    const { contextSafe } = useGSAP({ scope: navRef });

    useGSAP(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY < 10) {
                gsap.to(navRef.current, { y: 0, duration: 0.4, ease: "power2.out" });
                return;
            }
            if (currentScrollY > lastScrollY.current) {
                gsap.to(navRef.current, { y: "-120%", duration: 0.4, ease: "power2.out" });
            } else {
                gsap.to(navRef.current, { y: 0, duration: 0.3, ease: "power2.out" });
            }
            lastScrollY.current = currentScrollY;
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleNavLinkHover = contextSafe((e: React.MouseEvent<HTMLAnchorElement>, isEnter: boolean) => {
        const primary = e.currentTarget.querySelector(".nav-primary");
        const secondary = e.currentTarget.querySelector(".nav-secondary");

        gsap.to(primary, { yPercent: isEnter ? -100 : 0, duration: 0.35, ease: "power3.out" });
        gsap.to(secondary, { yPercent: isEnter ? -100 : 0, duration: 0.35, ease: "power3.out" });
    });

    const handleButtonHover = contextSafe((e: React.MouseEvent<HTMLAnchorElement>, isEnter: boolean) => {
        const primary = e.currentTarget.querySelector(".btn-primary");
        const secondary = e.currentTarget.querySelector(".btn-secondary");
        const dot = e.currentTarget.querySelector(".btn-dot");

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
        <header ref={navRef} className="fixed top-0 left-0 w-full h-[89px] flex items-center justify-center z-50 bg-transparent">
            <div className="w-full h-[59px] flex items-center justify-between px-6 md:px-[24px] lg:px-[30px]">
                <Link href="/" className="font-sans font-medium text-[32px] sm:text-[42px] md:text-[56px] tracking-[-1.68px] text-[#FCFCFC] select-none">
                    Fluid Alchemy
                </Link>

                {/* Dynamic Nav List without leakage */}
                <nav className="hidden lg:flex items-center gap-8 h-[22px]">
                    {["INDEX", "LAB", "JOURNAL", "GALLERY"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onMouseEnter={(e) => handleNavLinkHover(e, true)}
                            onMouseLeave={(e) => handleNavLinkHover(e, false)}
                            className="h-[22px] overflow-hidden relative block cursor-pointer select-none font-sans font-medium text-[17.1px] tracking-[-0.171px] text-[#FCFCFC]"
                        >
                            {/* Primary View text block */}
                            <span className="nav-primary block h-full">
                                {item}
                            </span>
                            {/* Secondary text block hidden perfectly below the container cut line */}
                            <span className="nav-secondary block h-full absolute top-full left-0 text-studio-accent">
                                {item}
                            </span>
                        </a>
                    ))}
                </nav>

                <a
                    href="#contact"
                    onMouseEnter={(e) => handleButtonHover(e, true)}
                    onMouseLeave={(e) => handleButtonHover(e, false)}
                    className="w-[172.54px] h-[50px] bg-[#080807] border border-[#FCFCFC]/20 rounded-[1920px] flex items-center justify-center gap-[16px] text-[#FCFCFC] font-sans font-medium text-[16px] overflow-hidden cursor-pointer select-none"
                >
                    <div className="h-[16px] overflow-hidden relative block leading-none">
                        <span className="btn-primary block h-full">
                            GET IN TOUCH
                        </span>
                        <span className="btn-secondary block h-full absolute top-full left-0 text-studio-accent">
                            GET IN TOUCH
                        </span>
                    </div>
                    <div className="btn-dot w-2 h-2 border border-[#FCFCFC] rounded-full" />
                </a>
            </div>
        </header>
    );
}