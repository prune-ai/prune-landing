import Image from "next/image";

export default function MeetTheTeam() {
  const team = [
    {
      name: "Charles DeBarber",
      title: "Founder",
      role: "Director of Operations",
      image: "/images/meet_the_team_charles.jpg",
    },
    {
      name: "Justine J. Li",
      title: "Founder",
      role: "Product",
      image: "/images/meet_the_team_justine.jpg",
    },
    {
      name: "Michael Smith",
      title: "Lead Engineer",
      role: "",
      image: "/images/meet_the_team_michael.jpg",
    },
    {
      name: "Linus Mixson",
      title: "Backend Engineer",
      role: "",
      image: "/images/meet_the_team_linus.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#18183B] text-white flex justify-center items-center flex-col py-16 px-4 text-center font-sans">
      <h2 className="text-4xl italic font-semibold mb-12">Meet the Team</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl w-full">
        {team.map((member, i) => (
          <div key={i} className="flex flex-col items-center space-y-3">
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
