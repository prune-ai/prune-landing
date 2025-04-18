"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import HeroSection from "@/components/HeroSection";
import PruneImage from "@/components/PrueImage";
import PruneInfo from "@/components/PruneInfo";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="overflow-x-hidden">
      
      <HeroSection />
      <PruneInfo />
      <PruneImage />
     
    </main>
  );
}
