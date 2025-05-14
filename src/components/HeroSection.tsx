'use client';
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const subheadRef = useRef<HTMLDivElement>(null);
    const pinRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Animate text in
        gsap.set([headlineRef.current, subheadRef.current], {
            opacity: 0,
            y: 20
        });

        const tl = gsap.timeline();

        tl.to(headlineRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        }).to(subheadRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.4");

        // Pin the hero section
        ScrollTrigger.create({
            trigger: pinRef.current,
            start: "top top",
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            endTrigger: "html",
            end: "bottom top"
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="relative w-screen h-screen lg:h-[1039px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(24,24,57,0.5)] to-[#181839] z-10 pointer-events-none" />

            <div ref={pinRef}>
                <video
                    src="/background hero.mp4"
                    autoPlay
                    loop
                    playsInline
                    muted
                    preload="true"
                
                    className="w-full h-screen object-cover hidden lg:flex"
                    // poster="/images/hero.jpg"
                />
                <Image
                    src="/images/mobilefinal.png"
                    width={500}
                    height={500}
                    alt="prune"
                    className="w-full h-screen lg:hidden"
                    
                    loading="lazy"
                />
            </div>

            <div className="absolute w-full text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <h1 ref={headlineRef} className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
                    AI-powered takedowns
                </h1>
                <div ref={subheadRef}>
                    <h1 className="mt-4 text-3xl md:text-4xl w-full lg:text-6xl text-center text-white font-mono">
                        We weaponize LLMs against 
                    </h1>
                    <h1 className="text-3xl md:text-4xl w-full lg:text-6xl text-center text-white font-mono">
                        digital exploitation
                    </h1>
                </div>
            </div>
        </div>
    );
}