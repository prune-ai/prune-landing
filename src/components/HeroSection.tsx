'use client';
import Image from "next/image";
// import Header from "./Header";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const subheadRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        // Set initial states
        gsap.set([headlineRef.current, subheadRef.current], {
            opacity: 0,
            y: 20
        });

        // Create timeline
        const tl = gsap.timeline();

        // Animate headline
        tl.to(headlineRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        })
        // Animate subhead with a slight delay
        .to(subheadRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.4"); // Start slightly before the previous animation ends

    }, []);

    return (
        <div className="w-screen"> 
            <video
                src={"/background hero.mp4"}
                autoPlay
                loop
                playsInline
                muted
                preload="auto"
                className="w-screen h-full hidden lg:block"
                poster="/images/hero.jpg"
                style={{ objectFit: 'cover' }}
            >
                <source src="/background hero.mp4" type="video/mp4" />
            </video>
            
            <Image
                src="/images/mobile.svg"
                width={500}
                height={500}
                alt="prune"
                className="w-full h-full block lg:hidden"
            />
            <div className="absolute w-full text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 ref={headlineRef} className="text-2xl md:text-3xl lg:text-5xl font-bold text-white">
                    AI-powered takedowns
                </h1>
                <div ref= {subheadRef}>
                <h1  className="mt-4 text-3xl w-full lg:text-6xl text-center text-white font-mono">
                    We weaponize LLMs against 
                </h1>
                <h1  className="text-3xl w-full lg:text-6xl text-center text-white font-mono">
                    digital exploitation
                </h1>
                </div>
            
            </div>
        </div>
    );
}