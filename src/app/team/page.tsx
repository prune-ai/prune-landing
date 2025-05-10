import Image from "next/image";

export default function MeetTheTeam() {
  const team = [
 
    {
      name: "Justine J. Li",
      role: "CEO",
      image: "/images/meet_the_team_justine.webp",
    },
    {
      name: "Charles DeBarber",
      role: "CTO",
      image: "/images/meet_the_team_charles.jpg",
    },
    {
      name: "Michael Smith",
      role: "Lead Engineer",
      image: "/images/meet_the_team_michael.jpg",
    },
    {
      name: "Linus Mixson",
      role: "Chief Architect",
      image: "/images/meet_the_team_linus.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#18183B] text-white flex justify-center items-center flex-col py-16 px-4 text-center font-sans">
      <h2 className="text-4xl italic font-semibold mb-12">Meet the Team</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl w-full">
        {team.map((member, i) => (
          <div key={i} className="flex flex-col items-center space-y-3">
            <div className="h-[10vmax] aspect-[1/1]  relative ">
              <Image
                src={member.image}
                alt={member.name}
                fill
                loading="lazy"
                className="rounded-full w-full h-full object-cover bg-black/50"
              />
            </div>
            <div className="text-lg font-medium">{member.name}</div>
            <div className="text-sm text-gray-300">
              {member.role && <div>{member.role}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
