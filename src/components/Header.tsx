"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Dropdown from "./Dropdown";

export interface MenuItem {
  title: string;
  route?: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: "Issue",
    route: "/",
  },
  {
    title: "Tools",
    children: [
      {
        title: "PruneGPT",
        route: "/tools/prune-gpt",
      },
      {
        title: "MommyLongLegs",
        route: "/tools/mommy-long-legs",
      },
      {
        title: "Leechi",
        route: "/tools/leechi",
      },
      {
        title: "BonsAI",
        route: "/tools/bons-ai",
      },
    ],
  },
  {
    title: "Team",
    route: "/team",
  },
  {
    title: "Resources",
    route: "/resources",
  },
];

export default function Header() {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {}, []);

  return (
    <header className="flex w-full px-10 justify-between font-avenir absolute bg-transparent items-center py-4 z-50">
      <Link href="/" className="relative z-10">
        <Image
          src="/images/logo.png"
          width={120}
          height={20}
          alt="logo"
          priority
        />
      </Link>
      <div
        ref={menuRef}
        className="flex gap-7 items-center text-lg font-main text-white"
      >
        {menuItems.map((item, index) => {
          const isActive =
            typeof window !== "undefined" &&
            window.location.pathname === item.route;
          return item.hasOwnProperty("children") ? (
            <Dropdown key={index} item={item} />
          ) : (
            <Link
              key={index}
              className={`relative px-8 py-1.5 transition-all duration-200 ease-in-out
              ${isActive ? "text-white" : "text-white hover:text-white"}
              group`}
              href={item?.route || ""}
            >
              {item.title}
              <div className="absolute inset-0 rounded-lg bg-[#1B1A3C] opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100 -z-10"></div>
            </Link>
          );
        })}
      </div>
      <div className="flex gap-6">
        <a href="#" className="relative z-10">
          <div className="relative group/button">
            <div className="relative flex items-center px-6 text-lg font-main text-white group-hover:bg-[#41889c] transition-colors duration-300 rounded-lg h-12 bg-[#357889]">
              Request Demo
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 group-hover/button:opacity-100 transition-opacity duration-500 rounded-[inherit] bg-[length:200%_100%] bg-[linear-gradient(110deg,transparent,35%,rgba(255,255,255,.1),65%,transparent)]"
              ></div>
            </div>
          </div>
        </a>
      </div>
    </header>
  );
}
