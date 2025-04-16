// components/TeamSection.jsx
import Image from 'next/image';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Charles DeBarber',
      role: 'Founder',
      additionalRole: 'Director of Operations',
      imageUrl: '/team/charles-debarber.jpg', // Place your image in public/team folder
    },
    {
      name: 'Justine J. Li',
      role: 'Founder',
      additionalRole: 'Product',
      imageUrl: '/team/justine-li.jpg',
    },
    {
      name: 'Michael Smith',
      role: 'Lead Engineer',
      imageUrl: '/team/michael-smith.jpg',
    },
    {
      name: 'Linus Mixson',
      role: 'Backend Engineer',
      imageUrl: '/team/linus-mixson.jpg',
    },
    {
      name: 'Kayla',
      role: 'Survivor Advocate',
      imageUrl: '/team/kayla.jpg', // For the placeholder image or actual image
    },
  ];

  return (
    <section className="bg-teal-600 py-16 px-4 text-white">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light italic text-center mb-16">
          Meet the Team
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 justify-items-center">
          {teamMembers.slice(0, 3).map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="rounded-full overflow-hidden w-40 h-40 mb-4">
                <Image
                  src={member.imageUrl}
                  alt={`${member.name}`}
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-medium text-center">{member.name}</h3>
              <p className="text-center">{member.role}</p>
              {member.additionalRole && (
                <p className="text-center">{member.additionalRole}</p>
              )}
            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-16 mt-12">
          {teamMembers.slice(3).map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="rounded-full overflow-hidden w-40 h-40 mb-4">
                <Image
                  src={member.imageUrl}
                  alt={`${member.name}`}
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-medium text-center">{member.name}</h3>
              <p className="text-center">{member.role}</p>
              {member.additionalRole && (
                <p className="text-center">{member.additionalRole}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;