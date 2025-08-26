import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const toolLinks = [
    { title: "PruneGPT", href: "/coming-soon" },
    { title: "BonsAI", href: "/coming-soon" },
    { title: "MommyLongLegs", href: "/coming-soon" },
    { title: "Leechi", href: "/coming-soon" },
    { title: "Trellis", href: "/coming-soon" },
  ];

  const audienceLinks = [
    { title: "For survivors", href: "/coming-soon" },
    { title: "For law enforcement", href: "/coming-soon" },
    { title: "For policymakers", href: "/coming-soon" },
    { title: "For NGOs", href: "/coming-soon" },
    { title: "For prosecutors", href: "/coming-soon" },
    { title: "For trust and safety teams", href: "/coming-soon" },
  ];

  const socialIcons = [
    { src: "/icons.svg", alt: "Icons", href: "#" },
    { src: "/icons-1.svg", alt: "Icons", href: "#" },
    { src: "/icons-2.svg", alt: "Icons", href: "#" },
    { src: "/icons-3.svg", alt: "Icons", href: "#" },
    { src: "/icons-4.svg", alt: "Icons", href: "#" },
  ];

  return (
    <footer className="w-full relative min-h-[728px] bg-black">
      <div className="flex flex-col  h-full max-w-[1320px] mx-auto py-[100px] px-4 ">
        {/* Header section */}
        <div className="flex flex-col lg:flex-row  gap-10 lg:gap-0 p-4 items-center justify-between w-full">
          <h1 className="w-full max-w-[630px] font-mono font-normal italic text-white text-[32px] leading-[normal] md:text-[64px]">
            Let&apos;s Prune the internet together.
          </h1>

          <a
            href="mailto:contact@prune.co"
            target="_blank"
            className="relative z-10 transform transition-transform duration-300  hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="relative group/button">
              <div className="relative flex items-center px-[24px] w-full  text-[16px] font-main text-white group-hover:bg-[#41889c] transition-all duration-300 rounded-lg h-12 bg-[#357889] shadow-md hover:shadow-lg active:shadow-sm">
                Request Demo
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover/button:opacity-100 transition-all duration-500 rounded-[inherit] bg-[length:200%_100%] bg-[linear-gradient(110deg,transparent,35%,rgba(255,255,255,.1),65%,transparent)] animate-shimmer"
                ></div>
              </div>
            </div>
          </a>
        </div>

        {/* Footer links section */}
        <div className="flex flex-col lg:flex-row items-start mt-[80px] md:mt-[140px]  justify-between w-full md:p-4 gap-8">
          {/* Company info */}
          <div className="w-full md:w-[365px]">
            <div className="flex flex-col items-start gap-4 w-full">
              <Link href="/" className="block">
                <Image
                  className="w-[140px] h-[51px] md:w-[170px] md:h-[61px] object-cover"
                  alt="Prune LOGO WHITE"
                  src="/images/logo.png"
                  width={170}
                  height={61}
                />
              </Link>

              <p className="text-[#ECF2ED] w-[311px] md:w-full text-[16px] ml-1.5 font-inter leading-[22px]">
                <span className="block text-wrap mb-4">
                  From the shadows of the internet, we bring clarity and
                  consent. Prune is building tools to take harmful content down
                  for good.
                </span>
                <span className="font-mono italic">
                  Fighting bad guys with good code since 2023.
                </span>
              </p>
            </div>
          </div>

          {/* Tools section */}

          <FooterColumn title="Tools" links={toolLinks} />
          <FooterColumn title="Who we serve" links={audienceLinks} />

          {/* Contact section */}
          <div className="flex flex-col w-full md:w-[231px] items-start gap-6">
            <h3 className="px-2.5 py-1.5 font-mono text-[#ECF2ED] font-normal italic text-light text-[18px] md:text-[22px] leading-[normal]">
              Connect with us
            </h3>
            <div className="flex flex-wrap items-center gap-4 w-full">
              {socialIcons.map((icon, index) => (
                <Link
                  key={index}
                  href={icon.href}
                  className="transform hover:scale-110 transition-transform duration-300"
                >
                  <Image
                    className="w-6 h-6"
                    alt={icon.alt}
                    src={icon.src}
                    width={24}
                    height={24}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright footer */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center w-[100%]">
        <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#ECF2ED] text-base">
          <span>©2025 by prune.co</span>
          <span className="mx-4">|</span>
          <Link href="/terms" className="hover:text-gray-300 transition-colors">
            Terms & Conditions
          </Link>
        </p>
      </div>
    </footer>
  );
};

interface FooterColumnProps {
  title: string;
  links: Array<{ title: string; href: string }>;
}

const FooterColumn = ({ title, links }: FooterColumnProps) => (
  <div className="flex flex-col items-start">
    <h3 className="px-2.5 py-1.5 font-mono font-normal italic text-[#ECF2ED]  text-light text-[22px] leading-[normal]">
      {title}
    </h3>
    {links.map((link, index) => (
      <Link
        key={index}
        href={link.href}
        className="flex items-center px-2.5 py-1.5 w-full text-[#ECF2ED]  W transition-colors duration-300"
      >
        <span className="font-inter font-normal text-light text-base leading-[normal]">
          {link.title}
        </span>
      </Link>
    ))}
  </div>
);

export default Footer;
