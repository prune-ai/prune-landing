import Image from "next/image";
export default function MeetTheTeam() {
  const team = [
    {
      name: "Charles DeBarber",
      title: "Founder",
      role: "Director of Operations",
      image: "./images/meet_the_team_charles.jpg",
    },
    {
      name: "Justine J. Li",
      title: "Founder",
      role: "Product",
      image: "./images/meet_the_team_justine.jpg",
    },
    {
      name: "Michael Smith",
      title: "Lead Engineer",
      role: "",
      image: "./images/meet_the_team_michael.jpg",
    },
    {
      name: "Linus Mixson",
      title: "Backend Engineer",
      role: "",
      image: "./images/meet_the_team_linus.jpeg",
    },
  ];

  return (
    <div className="min-h-[69vh] bg-[#18183B] text-white flex justify-center items-center flex-col py-16 px-4 text-center font-sans">
      <h2 className="text-4xl italic font-semibold mb-12">Meet the Team</h2>
      <div className="flex flex-col md:flex-row  gap-10 max-w-7xl mx-auto">
        {team.map((member, i) => (
          <div key={i} className="flex flex-col  items-center space-y-1">
            <Image
              src={member.image}
              alt={member.name}
              width={30}
              height={30}
              className="w-30 h-30 rounded-full object-cover "
            />
            <div className="text-base font-main">{member.name}</div>
            <div className="text-sm text-gray-200">
              {member.title && <div>{member.title}</div>}
              {member.role && <div>{member.role}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
