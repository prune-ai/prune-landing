// 'use client';
// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Dropdown from "./Dropdown";
// import gsap from "gsap";

// export interface MenuItem {
//   title: string;
//   route?: string;
//   children?: MenuItem[];
// }

// const menuItems: MenuItem[] = [
//   {
//     title: "Issues",
//     route: "/",
//   },
//   {
//     title: "Tools",
//     children: [
//       {
//         title: "Hinkle Horns",
//         route: "/products/hinkle-horns",
//       },
//       {
//         title: "Doozers",
//         route: "/products/doozers",
//       },
//       {
//         title: "Zizzer-zazzers",
//         route: "/products/zizzer-zazzers",
//       },
//     ],
//   },
//   {
//     title: "Team",
//     route: "/team",
//   },
//   {
//     title: "Resources",
//   },
// ];

// export default function Header() {
//   const menuRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (menuRef.current) {
//       const menuItems = menuRef.current.querySelectorAll('a');
//       gsap.from(menuItems, {
//         opacity: 0,
//         scale: 0.95,
//         duration: 0.4,
//         ease: "power2.out",
//         stagger: 0.4,
//       });
//     }
//   }, []);

//   return (
//     <header className="flex w-full px-10 justify-between font-avenir absolute bg-transparent items-center py-4 ">
//       <Link href="/" target="_blank">
//         <Image src="/images/logo.png" width={120} height={20} alt="logo" />
//       </Link>
//       <div ref={menuRef} className="flex gap-16 items-center text-lg font-main text-white">
//         {menuItems.map((item) => {
//           return item.hasOwnProperty("children") ? (
//             <Dropdown item={item} />
//           ) : (
//             <Link className="hover:" href={item?.route || ""}>
//               {item.title}
//             </Link>
//           );
//         })}
//       </div>
//       <div className="flex gap-6 ">
//         <a href="https://app.unkey.com">
//           <div className="relative group/button">
          
//             <div className="relative flex items-center px-4 gap-2 text-lg font-main text-white group-hover:bg-white/90 duration-1000 rounded-lg h-14 bg-gradient-to-r from-[#357889] to-[#357889]">
//               Request Demo
//               <div
//                 aria-hidden="true"
//                 className="pointer-events-none absolute inset-0 opacity-0 group-hover/button:[animation-delay:.2s] group-hover/button:animate-button-shine rounded-[inherit] bg-[length:200%_100%] bg-[linear-gradient(110deg,transparent,35%,rgba(255,255,255,.7),75%,transparent)]"
//               ></div>
//             </div>
//           </div>
//         </a>
        
//       </div>
//     </header>
//   );
// }
