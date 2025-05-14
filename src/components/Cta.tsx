'use client';
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const rotatingTexts: string[] = [
  "Litigation is one of the great American art forms, and we are teaching AI to do it",
  "DMCA is our love language",
  "Not all heroes wear capes. Some wear compression socks and build scraper tools.",
  "We don't send thoughts and prayers. We send takedowns.",
  "We're not building a unicorn. We're building your pre-litigation package.",
  "TurboTax for getting your images offline",
  "Revenge is a dish best served via Prune"
];

const Cta: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Animate out
      gsap.to(textRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        onComplete: () => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
          // Reset position before animating in
          gsap.set(textRef.current, { y: 20 });
          // Animate in
          gsap.to(textRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5,
          });
        },
      });
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#18183B] relative z-10 w-full h-full overflow-hidden">
      <div className="absolute bottom-0 left-0 bg-gradient-to-b from-[#181839] to-black z-20 h-[87px] w-full opacity-100 md:opacity-0" />
      <div className="max-w-[1314px] h-full mx-auto py-16 relative z-30">
        <div className="relative w-full min-h-[360px] md:h-[650px] lg:h-[1312px] rounded-lg flex items-center justify-center">
          <Image
            src="/Rectangle12.png"
            alt="Rectangle 12"
            width={1312}
            height={1312}
            className="w-[335px] h-[335px] md:w-[650px] md:h-[650px]  mx-auto lg:w-full lg:h-full object-cover absolute top-0 rounded-lg"
            priority
          />
          <div 
            ref={textRef}
            className="max-w-[183px] md:max-w-[350px] lg:max-w-[520px] font-mono text-white text-center z-50 font-[400] italic text-[20px] md:text-[32px] lg:text-[56px]"
          >
            {rotatingTexts[currentIndex]}
          </div>
        </div>
      </div>

      {/* Rotating Circle Text */}
      {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50">
        <div className="relative w-[300px] h-[300px] rounded-full border border-white flex items-center justify-center animate-spin-slow">
          <div className="text-white text-center font-mono w-[240px] h-[240px] flex items-center justify-center text-[16px] p-4">
            {rotatingTexts[currentIndex]}
          </div>
        </div>
      </div> */}

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Cta;
