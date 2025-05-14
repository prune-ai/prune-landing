"use client";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { MenuItem } from "./Header";

interface DropdownProps {
  item: MenuItem;
}

const descriptions: { [key: string]: string } = {
  PruneGPT: "LLM that helps write takedown notices tailored for each case",
  MommyLongLegs: "Web crawler designed to continuously monitor shadow sites for previously flagged content violations",
  Leechi: "Scraper that continuously monitors targeted shadow sites for critical metadata",
  BonsAI: "Internal analytics interface to surface takedown insights over time",
  Trellis: "Infrastructure software for handling takedown and proving compliance",
};

export default function Dropdown({ item }: DropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const adjustDropdownPosition = () => {
      const dropdown = dropdownRef.current;
      const container = containerRef.current;
      if (!dropdown || !container) return;

      const parentRect = container.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const dropdownWidth = 773;
      const rightMargin = 24; // 24px margin from the right edge

      // Calculate the left position of the dropdown relative to the viewport
      const dropdownLeft = parentRect.left;
      // Calculate how much the dropdown would overflow, including the margin
      const overflow = dropdownLeft + dropdownWidth + rightMargin - viewportWidth;
      
      // If there's overflow, set the offset to move it left
      if (overflow > 0) {
        setOffset(overflow);
      } else {
        setOffset(0);
      }
    };

    adjustDropdownPosition();
    window.addEventListener("resize", adjustDropdownPosition);

    return () => window.removeEventListener("resize", adjustDropdownPosition);
  }, []);

  return (
    <div ref={containerRef} className="relative group">
      <div
        className={`relative px-7 py-1.5 transition-all duration-500 ease-in-out rounded-full cursor-pointer
        text-white hover:text-white group flex items-center`}
      >
        {item.title}
        <div className="absolute inset-0 rounded-lg bg-[#41889c] opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100 -z-10"></div>
      </div>

      {/* Transparent bridge element with increased height */}
      <div className="absolute -inset-x-4 h-8 top-full bg-transparent"></div>

      <div
        ref={dropdownRef}
        style={{
          transform: `translateX(-${offset}px)`
        }}
        className={`absolute left-0 mt-5 w-[773px] h-[464px] px-[32px] py-[32px] rounded-[12px] bg-[#7964CC] shadow-xl
        transition-all duration-400 ease-in-out opacity-0 translate-y-4 pointer-events-none font-inter
        group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto`}
      >
        <div className="flex gap-[40px]">
          <div>
            <ul className="flex flex-col gap-1 text-[#f9f9f9] text-[16px] font-medium leading-[28px] text-nowrap">
              {[
                "For victims",
                "For law enforcement",
                "For policymakers",
                "For NGOs",
                "For legal professionals",
                "For legal professionals", // maybe duplicate?
                "For DMCA enforcers",
                "For trust and safety",
              ].map((text, idx) => (
                <a key={idx} href="/coming-soon">
                  <li>{text}</li>
                </a>
              ))}
            </ul>
          </div>
          <div className="w-[.5px] block bg-white/20"></div>
          <div>
            {item.children?.map((child, index) => (
              <Link
                key={index}
                href={child.route || ""}
                className="block px-[10px] py-[8px] hover:bg-[#503FA9] w-[407px] rounded-xl transition-colors"
              >
                <div className="text-white font-semibold font-inter">{child.title}</div>
                {descriptions[child.title] && (
                  <div className="text-[#B7B0E6] text-[16px] leading-[18px] font-inter font-normal text-md">
                    {descriptions[child.title]}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
