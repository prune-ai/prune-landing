
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
      image: "./images/meet_the_team_linus.jpeg",
    },
    {
      name: "Linus Mixson",
      title: "Backend Engineer",
      role: "",
      image: "./images/meet_the_team_charles.jpg",
    },
    {
      name: "Kayla",
      title: "Survivor Advocate",
      role: "",
      image: "./images/meet_the_team_charles.jpg", // generic placeholder
    },
  ];

  return (
    <div className="min-h-screen bg-[#2e6f7a] text-white py-16 px-4 text-center font-sans">
      <h2 className="text-4xl italic font-semibold mb-12">Meet the Team</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 max-w-7xl mx-auto">
        {team.map((member, i) => (
          <div key={i} className="flex flex-col items-center space-y-1">
            <img
              src={member.image}
              alt={member.name}
              className="w-28 h-28 rounded-full object-cover border-1 border-white"
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

