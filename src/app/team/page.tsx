"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { useEffect } from "react";
import { useRef } from "react";

export default function MeetTheTeam() {
  const teamRef = useRef(null);
  const titleRef = useRef(null);
  const team = [
    {
      name: "Justine J. Li",
      role: "CEO",
      image: "/images/meet_the_team_justine.webp",
    },
    {
      name: "Linus Mixson",
      role: "CTO",
      image: "/images/LINUS.jpeg",
    },
    {
      name: "Charles DeBarber",
      role: "Chief Intelligence Officer",
      image: "/images/meet_the_team_charles.jpg",
    },
    {
      name: "Michael Smith",
      role: "Lead Engineer",
      image: "/images/meet_the_team_michael.jpg",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the title
      gsap.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
      });

      // Animate team members
      gsap.to(".team-member", {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.inOut",
        delay: 0.3,
      });
    }, teamRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={teamRef}
      className="min-h-screen bg-[#18183B] text-white flex justify-center items-center flex-col py-16 px-4 text-center font-sans"
    >
      <h2 ref={titleRef} className="text-4xl translate-y-20 opacity-0 italic font-semibold mb-12">
        Meet the Team
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl w-full">
        {team.map((member, i) => (
          <div
            key={i}
            className="team-member translate-y-20 opacity-0 flex flex-col items-center space-y-3 will-change-transform"
          >
            <div className="w-32 h-32 relative">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="text-lg font-medium">{member.name}</div>
            <div className="text-sm text-gray-300">
              {member.title && <div>{member.title}</div>}
              {member.role && <div>{member.role}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
