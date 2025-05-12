"use client";
import Link from "next/link";
import { useRef } from "react";
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
    "Internal analytics interface to surface takedown insights over time",
  Trellis:
  "Infrastructure software for handling takedown and proving compliance",  

};

export default function Dropdown({ item }: DropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={dropdownRef} className="relative group">
      <div
        className={`relative px-7 py-1.5 transition-all duration-500 ease-in-out rounded-full cursor-pointer
          text-white hover:text-white
          group flex items-center`}
      >
        {item.title}
        <div className="absolute inset-0 rounded-lg bg-[#41889c] opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100 -z-10"></div>
      </div>

      {/* Transparent bridge element with increased height */}
      <div className="absolute -inset-x-4 h-8 top-full bg-transparent"></div>

      <div
        className={`absolute left-0 mt-5 w-[800px] px-4 py-3 rounded-xl bg-[#7a64ce]  shadow-xl transition-all duration-400 ease-in-out opacity-0 translate-y-4 pointer-events-none font-inter  group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto`}
      >
        <div className="flex gap-5">
          <div>
            <ul className="flex flex-col gap-4 py-3 text-[#f9f9f9] text-[18px] text-nowrap">
              <a href="/coming-soon"><li>For victims</li></a>
              <a href="/coming-soon"> <li>For law enforcement</li></a>
              <a href="/coming-soon">   <li>For policymakers</li></a>
              <a href="/coming-soon">  <li>For NGOs</li></a>
              <a href="/coming-soon"> <li>For legal professionals</li></a>
              <a href="/coming-soon">  <li>For legal professionals</li></a> 
              <a href="/coming-soon">   <li>For DMCA enforcers</li></a>   
              <a href="/coming-soon">   <li>For trust and safety</li></a>   
              
             
            
             
             
           
              

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
                <div className="text-white font-semibold font-inter">{child.title}</div>
                {descriptions[child.title] && (
                  <div className="text-[#f9f9f9]/40 font-inter font-normal text-md ">
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
