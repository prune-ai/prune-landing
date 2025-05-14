'use client';
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const rotatingTexts: string[] = [
  "If you or your client are in need of takedown services, please reach out!",
  "Litigation is one of the great American art forms, and we are teaching AI to do it",
  "DMCA is our love language",
  "We don't send thoughts and prayers. We send takedowns.",
  "We're not building a unicorn. We're building your pre-litigation package.",
  "TurboTax for getting your images offline",
  "Revenge is a dish best served via Prune"
];

const RotatingTextPage = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Animate out
      gsap.to(textRef.current, {
        opacity: 0,
        y: 0,
        duration: 0.5,
        onComplete: () => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
          // Reset position before animating in
          gsap.set(textRef.current, { y: 0 });
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
    <section className="bg-[#18183B] py-10 relative z-10 w-full h-full">
      <div className="max-w-[1314px] h-full mx-auto py-16">
        <div className="relative w-full min-h-[360px] md:h-[650px]  lg:h-[820px] bg-cover bg-center rounded-lg flex items-center justify-center">
          <Image
            src="/Rectangle12.png"
            alt="Rectangle 12"
            width={1312}
            height={1312}
            className="w-[335px] h-[335px] md:w-[650px] md:h-[650px]  mx-auto lg:w-[780px] lg:h-[780px] object-cover absolute top-0 rounded-lg"
            priority
          />
          <div className="text-white relative z-20 flex flex-col gap-4 md:gap-6 lg:gap-10 items-center">
            <h2 className="text-[1rem] md:text-[1.1rem]  lg:text-[1.5rem] uppercase font-semibold">Coming soon</h2>
            <p 
              ref={textRef}
              className="lg:max-w-[600px] md:max-w-[400px] max-w-[240px] font-mono text-white text-center font-[400] italic text-[20px] md:text-[32px] lg:text-[40px]"
            >
              {rotatingTexts[currentIndex]}
            </p>
            <a
              href="mailto:contact@prune.co"
              target="_blank"
              className="relative z-10 transform transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="relative group/button">
                <div className="relative flex justify-center items-center md:px-6 px-4 md:text-lg text-[16px] font-medium font-inter text-white group-hover:bg-[#41889c] transition-all duration-300 rounded-lg h-12 bg-[#357889] shadow-md hover:shadow-lg active:shadow-sm">
                  Contact Us
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover/button:opacity-100 transition-all duration-500 rounded-[inherit] bg-[length:200%_100%] bg-[linear-gradient(110deg,transparent,35%,rgba(255,255,255,.1),65%,transparent)] animate-shimmer"
                  ></div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RotatingTextPage;