"use client";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";

export interface MenuItem {
  title: string;
  route?: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: "Issue",
    route: "https://phoenixpitchdeck.webflow.io/",
  },
  {
    title: "Tools",
    children: [
      {
        title: "PruneGPT",
        route: "/",
      },
      {
        title: "MommyLongLegs",
        route: "/",
      },
      {
        title: "Leechi",
        route: "/",
      },
      {
        title: "BonsAI",
        route: "/",
      },
    ],
  },
  {
    title: "Team",
    route: "/team",
  },
  {
    title: "Resources",
    route: "https://pruneai.substack.com/",
  },
];

export default function Header() {
  const menuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const menuItemsRef = useRef<Array<HTMLAnchorElement | HTMLDivElement | null>>(
    []
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  

  // Handle scroll effect
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    gsap.set(header, {
      backgroundColor: "transparent",
      backdropFilter: "none"
    });

    const tl = gsap.timeline({ paused: true });
    tl.to(header, {
      backgroundColor: "rgba(24,24,59,1)",
      backdropFilter: "blur(10px)",
      duration: 0.3,
      ease: "power2.out"
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        tl.play();
      } else {
        tl.reverse();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Remove isScrolled dependency

  // Animation for menu items on load
  useEffect(() => {
    const elements = menuItemsRef.current.filter((el) => el !== null);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        elements,
        {
          y: -20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className="flex w-full px-4 md:px-10 justify-between font-avenir fixed top-0 left-0 items-center py-4 z-40 transition-colors duration-300"
    >

      <div className="flex gap-60  lg:max-w-[1314px] lg:gap-40 mx-auto justify-between items-center">
      <Link href="/" className="relative z-10">
        <Image
          src="/images/logo.png"
          width={120}
          height={20}
          alt="logo"
          priority
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-7 items-center text-md font-main text-white">
        {menuItems.map((item, index) => {
          const isActive =
            typeof window !== "undefined" &&
            window.location.pathname === item.route;
          return item.hasOwnProperty("children") ? (
            <div
              key={index}
              ref={(el) => {
                menuItemsRef.current[index] = el;
              }}
            >
              <Dropdown item={item} />
            </div>
          ) : (
            <Link
              key={index}
              ref={(el) => {
                menuItemsRef.current[index] = el;
              }}
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

      {/* Desktop CTA */}
      <div className="hidden lg:flex gap-6">
        <a href="mailto:contact@prune.co" target="_blank" className="relative z-10">
          <div className="relative group/button">
            <div className="relative flex items-center px-6 text-md font-main text-white group-hover:bg-[#41889c] transition-colors duration-300 rounded-lg h-12 bg-[#357889]">
              Request Demo
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 group-hover/button:opacity-100 transition-opacity duration-500 rounded-[inherit] bg-[length:200%_100%] bg-[linear-gradient(110deg,transparent,35%,rgba(255,255,255,.1),65%,transparent)]"
              ></div>
            </div>
          </div>
        </a>
      </div>
       {/* Mobile Hamburger Button */}
       <button
        className="lg:hidden flex flex-col justify-center items-end w-10 h-10 relative z-50"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-white mb-1.5 transition-transform duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
        ></span>
        <span
          className={`block w-8 h-0.5 bg-white mb-1.5 transition-opacity duration-300 ${mobileMenuOpen ? "opacity-0" : ""
            }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
        ></span>
      </button>
      </div>
    

     

      {/* Mobile Slide-in Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 w-full  
           shadow-lg bg-[#7964CC] h-screen transform transition-transform duration-300 ease-in-out z-50 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden overflow-y-auto`}
      >
        <div className="p-6 bg-[#7964CC] flex flex-col gap-6">
          <div className="flex justify-end">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-xl p-2"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col items-center gap-5 mt-10">
            {menuItems.map((item, index) => {
              if (item.hasOwnProperty("children")) {
                return (
                  <div key={index} className="flex flex-col gap-2">
                    <p className="text-white text-lg font-semibold">
                      {item.title}
                    </p>
                    {/* <div className="pl-4 flex flex-col gap-3">
                      {item.children?.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          href={child.route || ""}
                          className="text-gray-300 hover:text-white transition-colors relative z-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div> */}
                  </div>
                );
              }

              return (
                <Link
                  key={index}
                  href={item.route || ""}
                  className="text-white text-lg font-semibold hover:text-gray-300 transition-colors relative z-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Mobile CTA Button */}
          <div className="mt-6">
            <Link
              href="mailto:contact@prune.co"
              className="block w-full relative z-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="relative group/button w-full">
                <div className="relative flex items-center justify-center px-6 py-3 text-lg font-main text-white group-hover:bg-[#41889c] transition-colors duration-300 rounded-lg bg-[#357889]">
                  Request Demo
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}
