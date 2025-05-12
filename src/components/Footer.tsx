import React from "react";
import Image from "next/image";
import Link from "next/link";



export const Footer = () => {
  // Navigation links data
  const pageLinks = [
    { title: "What is prune", href: "#what-is-prune" },
    { title: "Automates lifecycle", href: "#automates-lifecycle" },
    { title: "Who we serve", href: "#who-we-serve" },
  ];

  const toolLinks = [
    { title: "PruneGPT", href: "/tools/prunegpt" },
    { title: "BonsAI", href: "/tools/bonsai" },
    { title: "MommyLongLegs", href: "/tools/mommylonglegs" },
    { title: "Leechi", href: "/tools/leechi" },
    { title: "Trellis", href: "/tools/trellis" },
  ];

  const audienceLinks = [
    { title: "For survivors", href: "/audience/survivors" },
    { title: "For law enforcement", href: "/audience/law-enforcement" },
    { title: "For policymakers", href: "/audience/policymakers" },
    { title: "For NGOs", href: "/audience/ngos" },
    { title: "For legal professionals", href: "/audience/legal" },
    { title: "For DMCA enforcers", href: "/audience/dmca" },
    { title: "For trust and safety teams", href: "/audience/trust-safety" },
  ];

  const socialIcons = [
    { src: "/icons.svg", alt: "Icons", href: "#" },
    { src: "/icons-2.svg", alt: "Icons", href: "#" },
    { src: "/icons-4.svg", alt: "Icons", href: "#" },
    { src: "/icons-3.svg", alt: "Icons", href: "#" },
    { src: "/icons-1.svg", alt: "Icons", href: "#" },
    { src: "/frame.svg", alt: "Frame", href: "#" },
  ];

  return (
    <footer className="w-full relative min-h-[728px] bg-black">
      <div className="flex flex-col h-full max-w-[450px]  lg:max-w-[1320px] mx-auto py-[100px] px-4">
        {/* Header section */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between w-full">
          <h1 className="w-full max-w-[630px] font-mono font-normal italic text-white text-[32px] leading-[normal] md:text-[64px]">
            Let&apos;s Prune the internet together.
          </h1>

          <a href="mailto:contact@prune.co" target="_blank" className="relative z-10 transform transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] w-full md:w-auto">
            <div className="relative group/button w-full">
              <div className="relative flex items-center justify-center px-[24px] text-lg font-main text-white group-hover:bg-[#41889c] transition-all duration-300 rounded-lg h-12 bg-[#357889] shadow-md hover:shadow-lg active:shadow-sm w-full">
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
        <div className="flex flex-col md:flex-row items-start mt-[140px] justify-between w-full gap-8">
          {/* Company info */}
          <div className="w-full ml-1.5 md:w-[365px]">
            <div className="flex flex-col items-start gap-4 w-full">
              <Link href="/" className="block">
                <Image
                  className="w-[170px] h-[61px] object-cover"
                  alt="Prune LOGO WHITE"
                  src="/images/logo.png"
                  width={170}
                  height={61}
                />
              </Link>

              <p className="text-[#ECF2ED] text-base font-inter leading-[22px]">
                <span className="block mb-4">
                  From the shadows of the internet, we bring clarity,
                  control, and consent. Prune is building tools to take
                  harmful content down for good.
                </span>
                <span className="font-mono italic">
                  Fighting bad guys with good code since 2023.
                </span>
              </p>
            </div>
          </div>

          {/* Navigation columns */}
          <FooterColumn title="On this page" links={pageLinks} />
          <FooterColumn title="Tools" links={toolLinks} />
          <FooterColumn title="Who we serve" links={audienceLinks} />

          {/* Contact section */}
          <div className="flex flex-col w-full md:w-[231px] items-start gap-6">
            <h3 className="px-2.5 py-1.5 font-mono text-[#ECF2ED] font-normal italic text-light text-[18px] md:text-[22px] leading-[normal]">
              Contact with us
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
      {/* <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center">
        <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#ECF2ED] text-base">
          <span>©2025 by prune.co</span>
          <span className="mx-4">|</span>
          <Link href="/terms" className="hover:text-gray-300 transition-colors">
            Terms & Conditions
          </Link>
        </p>
      </div> */}
    </footer>
  );
};

interface FooterColumnProps {
  title: string;
  links: Array<{ title: string; href: string; }>;
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
        className="flex items-center px-2.5 py-1.5 w-full text-[#ECF2ED]  rounded hover:bg-white/5 transition-colors duration-300"
      >
        <span className="font-inter font-normal text-light text-base leading-[normal]">
          {link.title}
        </span>
      </Link>
    ))}
  </div>
);

export default Footer;
