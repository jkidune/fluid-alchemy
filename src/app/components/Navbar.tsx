"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import RollingButton from "./RollingButton";

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);
    const lastScrollY = useRef(0);

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

    return (
        <header
            ref={navRef}
            /* CRITICAL FIX: Removed border-b entirely to keep the hero composition completely clean */
            className="fixed top-0 inset-x-0 z-40 px-6 md:px-8 py-6 flex justify-between items-center bg-transparent mix-blend-difference"
        >
            {/* Logo Typography Branding */}
            <Link href="/" className="text-xl sm:text-2xl font-bold tracking-tighter text-studio-text select-none">
                FLUID Alchemy
            </Link>

            {/* Navigation Map */}
            <nav className="hidden md:flex items-center gap-10 text-[13px] font-normal tracking-wide opacity-90 text-studio-text">
                <Link href="#index" className="hover:text-studio-accent transition-colors duration-300">INDEX</Link>
                <Link href="#lab" className="hover:text-studio-accent transition-colors duration-300">THE LAB</Link>
                <Link href="#journal" className="hover:text-studio-accent transition-colors duration-300">JOURNAL</Link>
            </nav>

            {/* Micro Interaction Rolling Trigger */}
            <RollingButton text="Get In Touch" href="#contact" />
        </header>
    );
}