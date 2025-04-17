'use client';
import Image from "next/image";
// import Header from "./Header";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const subheadRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const timeline = gsap.timeline();

        timeline
            .fromTo(
                headlineRef.current,
                {
                    opacity: 0,
                    y: 40,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out",
                }
            )
            .fromTo(
                subheadRef.current,
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out",
                },
                "-=0.3" // This creates a 300ms delay after the headline
            );
    }, []);

    return (
        <div className="w-screen "> 
            {/* <Header/> */}
            
            <Image
                src="/images/backgroundfinal.png"
                width={1920}
                height={1080}
                alt="prune"
                className="w-screen h-[140vh] hidden lg:block"
            />
            <Image
                src="/images/background.png"
                width={500}
                height={500}
                alt="prune"
                className="w-screen h-screen block lg:hidden"
                />
            <div className="absolute w-full text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 ref={headlineRef} className="text-2xl md:text-3xl lg:text-5xl font-bold text-white">
                    AI-powered takedowns
                </h1>
                <h1 ref={subheadRef} className="mt-4 text-3xl w-full  lg:text-6xl text-center text-white font-mono">
                    We weaponize LLMs against 
                </h1>
                <h1 ref={subheadRef} className=" text-3xl w-full  lg:text-6xl text-center text-white font-mono">
                digital exploitation
                </h1>
            </div>
        </div>
    );
}