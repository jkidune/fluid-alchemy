"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "./components/hero";
import Lab from "./components/Lab";
import Works from "./components/Works";
import Process from "./components/Ourprocess";
import Testimonial from "./components/Testimonial";
import CTA from "./components/CTA";
//import Manifesto from "./components/Manifesto";
//import SelectedWorks from "./components/SelectedWorks";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
    const scrollWrapperRef = useRef<HTMLDivElement>(null);
    const heroPinWrapperRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!heroPinWrapperRef.current) return;

        // Architectural Pin Matrix Workflow
        ScrollTrigger.create({
            trigger: heroPinWrapperRef.current,
            start: "top top",
            end: "bottom top",
            pin: true,           // Locks the Hero frame securely at y:0
            pinSpacing: false,   // Crucial: lets the Lab flow underneath and overlap natively
            scrub: true,
        });

        // Handle the micro-dimming and subtle scale recession of the fixed Hero background
        gsap.fromTo(heroPinWrapperRef.current,
            { opacity: 1, scale: 1 },
            {
                opacity: 0.15,     // Dims beautifully out of view
                scale: 0.96,       // Gives a luxurious deep structural recession effect
                ease: "none",
                scrollTrigger: {
                    trigger: heroPinWrapperRef.current,
                    start: "top top",
                    end: "bottom top", // Animates perfectly across the first viewport descent phase
                    scrub: true,
                    invalidateOnRefresh: true,
                }
            }
        );

        // Opposing sinking motion for the Hero text elements
        gsap.to(".hero-content-container", {
            yPercent: 30,       // Moves downward while Lab goes up
            ease: "none",
            scrollTrigger: {
                trigger: heroPinWrapperRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
                invalidateOnRefresh: true,
            }
        });

        // Layered background parallax sink
        gsap.to(".hero-bg-canvas", {
            yPercent: 15,       // Moves downward at a slower speed
            ease: "none",
            scrollTrigger: {
                trigger: heroPinWrapperRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
                invalidateOnRefresh: true,
            }
        });

    }, { scope: scrollWrapperRef });

    return (
        <div ref={scrollWrapperRef} className="w-full bg-[#0B0B0C] flex flex-col relative">
            {/* 
              LAYER 1: The Pinning Canvas Wrapper. 
              It sits at z-10 so it cleanly disappears beneath following sections.
            */}
            <div ref={heroPinWrapperRef} className="w-full h-screen z-10 bg-[#0B0B0C]">
                <Hero />
            </div>

            {/* 
              LAYER 2: The Lab & subsequent blocks (Opaque, High Stack Elevation).
              z-20 and solid styling ensure they smoothly slide over the pinned hero.
            */}
            <div className="relative z-20 w-full bg-[#0B0B0C]">
                <Lab />
                <Works />
                <Process />
                <Testimonial />
                <CTA />

                {/*  <Manifesto /> */}
                {/*  <SelectedWorks /> */}
            </div>
        </div>
    );
}
