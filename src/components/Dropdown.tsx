"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { MenuItem } from "./Header";

interface DropdownProps {
  item: MenuItem;
}

const descriptions: { [key: string]: string } = {
  PruneGPT: "LLM that helps write takedown notices tailored for each case",
  MommyLongLegs:
    "Web crawler designed to continuously monitor shadow sites for previously flagged content violations",
  Leechi:
    "Scraper that continuously monitors targeted shadow sites for critical metadata",
  BonsAI:
    "Scraper that continuously monitors targeted shadow sites for critical metadata",
};

export default function Dropdown({ item }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={dropdownRef} className="relative group">
      <div
        className={`relative px-7 py-1.5 transition-all duration-200 ease-in-out rounded-full cursor-pointer
          ${isOpen ? "text-white " : "text-white hover:text-white"}
          group flex items-center`}
      >
        {item.title}
        <div className="absolute inset-0 rounded-lg bg-[#1B1A3C] opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100 -z-10"></div>
      </div>

      {/* Transparent bridge element with increased height */}
      <div className="absolute -inset-x-4 h-8 top-full bg-transparent"></div>

      <div
        className={`absolute left-0 mt-2 w-[800px] px-7 py-5 rounded-xl bg-[#7a64ce]  shadow-xl transition-all duration-200 ease-in-out opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto`}
      >
        <div className="flex gap-5">
          <div>
            <ul className="flex flex-col gap-5 py-4 text-nowrap">
              <li>For victims</li>
              <li>For content creators</li>
              <li>For law enforcement</li>
              <li>For policymakers</li>
              <li>For NGOs</li>
            </ul>
          </div>
          <div className="w-[.5px] block bg-white/20"></div>
          <div>
            {item.children?.map((child, index) => (
              <Link
                key={index}
                href={child.route || ""}
                className="block px-6 py-4 hover:bg-[#503FA9] rounded-2xl transition-colors"
              >
                <div className="text-white font-medium">{child.title}</div>
                {descriptions[child.title] && (
                  <div className="text-[#A093E3] text-md mt-1">
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
