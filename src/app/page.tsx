"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import HeroSection from "@/components/HeroSection";
import PruneImage from "@/components/PrueImage";
import PruneInfo from "@/components/PruneInfo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
      <Header />
      <HeroSection />
      <PruneInfo />
      <PruneImage />
      <Footer />
    </main>
  );
}
