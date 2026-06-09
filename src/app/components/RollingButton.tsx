"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface RollingButtonProps {
    text: string;
    href: string;
}

export default function RollingButton({ text, href }: RollingButtonProps) {
    const buttonRef = useRef<HTMLAnchorElement>(null);
    const dotRef = useRef<SVGCircleElement>(null);

    const { contextSafe } = useGSAP({ scope: buttonRef });

    const onMouseEnter = contextSafe(() => {
        // 1. Roll text blocks upward inside their overflow masks
        gsap.to(".text-layer-primary", { yPercent: -100, duration: 0.4, ease: "power2.out" });
        gsap.to(".text-layer-secondary", { yPercent: -100, duration: 0.4, ease: "power2.out" });

        // 2. Animate the hollow vector dot to fill solid white instantly
        gsap.to(dotRef.current, { fill: "rgb(252, 252, 252)", r: 4, duration: 0.3, ease: "power2.out" });
    });

    const onMouseLeave = contextSafe(() => {
        // Reset positions smoothly
        gsap.to(".text-layer-primary", { yPercent: 0, duration: 0.4, ease: "power2.out" });
        gsap.to(".text-layer-secondary", { yPercent: 0, duration: 0.4, ease: "power2.out" });
        gsap.to(dotRef.current, { fill: "transparent", r: 3, duration: 0.3, ease: "power2.out" });
    });

    return (
        <Link
            href={href}
            ref={buttonRef}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="bg-studio-bg border border-studio-text/30 rounded-full px-5 py-2.5 flex items-center gap-3 overflow-hidden group select-none shrink-0"
        >
            {/* Moving Text Layer Container */}
            <div className="relative h-[16px] overflow-hidden text-xs uppercase font-medium tracking-wider text-studio-text">
                <div className="text-layer-primary block h-full">
                    {text}
                </div>
                <div className="text-layer-secondary block h-full absolute top-full left-0 w-full text-studio-accent">
                    {text}
                </div>
            </div>

            {/* Dynamic Vector Core Ring Toggle */}
            <svg width="10" height="10" viewBox="0 0 10 10" className="inline-block">
                <circle
                    ref={dotRef}
                    cx="5"
                    cy="5"
                    r="3"
                    stroke="rgb(252, 252, 252)"
                    strokeWidth="1"
                    fill="transparent"
                    className="transition-colors duration-150"
                />
            </svg>
        </Link>
    );
}