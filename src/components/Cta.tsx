'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Cta: React.FC = () => {
  return (
    <section className="bg-[#18183B] relative z-10 w-full h-full overflow-hidden">
      <div className="absolute bottom-0 left-0 bg-gradient-to-b from-[#181839] to-black z-20 h-[87px] w-full opacity-100 md:opacity-0" />
      <div className="max-w-[1314px] h-full mx-auto py-16 relative z-30">
        <div className="relative w-full min-h-[360px] md:h-[650px] lg:h-[780px] rounded-lg flex items-center justify-center">
          <Image
            src="/Rectangle12.png"
            alt="Rectangle 12"
            width={780}
            height={780}
            className="w-[335px] h-[335px] md:w-[650px] md:h-[650px]  mx-auto lg:w-[780px] lg:h-[780px] object-cover absolute top-0 rounded-lg"
            priority
          />
          <div className="max-w-[183px] md:max-w-[350px] lg:max-w-[520px] font-mono text-white text-center z-50 font-[400] italic text-[20px] md:text-[32px] lg:text-[40px]">
            <Link href="/issue" className="hover:text-teal-300 transition-colors">
              Weaponizing frontier AI against the proliferation of illegal content online
            </Link>
          </div>
        </div>
      </div>

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
