'use client';
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const subheadRef = useRef<HTMLDivElement>(null);
    const pinRef = useRef<HTMLDivElement>(null);
    const gradientRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoReady, setVideoReady] = useState(false);

    useEffect(() => {
        gsap.set([headlineRef.current, subheadRef.current], {
            opacity: 0,
            y: 20,
        });

        gsap.set(gradientRef.current, {
            opacity: 0,
        });

        const tl = gsap.timeline();

        tl.to(headlineRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
        }).to(
            subheadRef.current,
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
            },
            "-=0.4"
        );

        ScrollTrigger.create({
            trigger: pinRef.current,
            start: "top top",
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            endTrigger: "html",
            end: "bottom top",
        });

        ScrollTrigger.create({
            trigger: document.body,
            start: "top top",
            end: "+=100vh",
            onUpdate: (self) => {
                const progress = Math.max(0, (self.progress - 0.2) / 0.8);
                gsap.set(gradientRef.current, {
                    opacity: Math.min(1, progress),
                });
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    const handleVideoCanPlay = () => {
        setVideoReady(true);
    };

    return (
        <div className="relative w-screen h-screen lg:h-[1039px] overflow-hidden">
            {/* Gradient Overlay */}
            <div
                ref={gradientRef}
                className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(24,24,57,0.5)] to-[#181839] z-20 pointer-events-none"
            />

            <div ref={pinRef} className="relative w-full h-full">
                {/* ✅ Mobile fallback image ONLY for mobile */}
                <Image
                    src="/images/mobilefinal.png"
                    alt="Mobile Poster"
                    fill
                    priority
                    className={`object-cover z-0 block lg:hidden transition-opacity duration-500 ${
                        videoReady ? "opacity-0" : "opacity-100"
                    }`}
                />

                {/* 🎥 Video over everything */}
                <video
                    ref={videoRef}
                    src="/background hero.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onCanPlayThrough={handleVideoCanPlay}
                    className="absolute top-0 left-0 w-full h-full object-cover z-10"
                />
             </div>

            {/* Hero Text */}
            <div className="absolute w-full text-center top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                <h1
                    ref={headlineRef}
                    className="text-2xl md:text-4xl lg:text-5xl font-bold text-white"
                >
                    AI-powered enforcement
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
