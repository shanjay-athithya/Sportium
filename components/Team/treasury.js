import React from "react";
import Image from "next/image";

export default function Treasury() {
  const teams = [
    {
      id: 3,
      name: "Treasury Team",
      members: [
        {
          id: 0,
          name: "Vedhanth Keshav",
          role: "Head",
          year: "4th Year, Mech",
          image: "/images/events/kick_off.jpg",
          email: "vedhanth.keshav@example.com",
          linkedin: "https://linkedin.com/in/vedhanth-keshav",
        },
        {
          id: 1,
          name: "Sanjay Sukumar M",
          role: "Sub Head",
          year: "3rd Year, ECE",
          image: "/images/events/kick_off.jpg",
          email: "sanjay.sukumar@example.com",
          linkedin: "https://linkedin.com/in/sanjay-sukumar",
        },
        {
          id: 2,
          name: "Tarun Suresh",
          role: "CCM",
          year: "2nd Year, M Tech",
          image: "/images/events/kick_off.jpg",
          email: "tarun.suresh@example.com",
          linkedin: "https://linkedin.com/in/tarun-suresh",
        },
        {
          id: 3,
          name: "Sanjai Kumaar",
          role: "CCM",
          year: "2nd Year, Mech",
          image: "/images/events/kick_off.jpg",
          email: "sanjai.kumaar@example.com",
          linkedin: "https://linkedin.com/in/sanjai-kumaar",
        },
      ],
    },
  ];

  return (
    <main>
      <section
        id="team"
        className="bg-darkGrey  py-16 relative"
    
      >
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl font-extrabold text-primaryOrange mb-16">
            Treasury Team
          </h1>

          {teams.map((team) => (
            <div key={team.id} className="mb-16">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {team.members.map((member) => (
                 <div
                 key={member.id}
                 className="team-card w-full max-w-[320px] sm:max-w-[360px] h-auto sm:h-[400px] lg:h-[350px] mx-auto bg-primaryOrange rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 hover:border hover:border-opacity-90 hover:border-primaryOrange p-6 group"
               >
                 <div className="flex justify-center mb-4">
                   <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primaryOrange">
                     <Image
                       src={member.image}
                       alt={member.name}
                       width={150}
                       height={150}
                       className="object-cover"
                     />
                   </div>
                 </div>
                 <h4 className="text-xl font-bold text-white mt-3 mb-1">{member.name}</h4>
                 <p className="text-md font-bold text-darkGrey mb-4">{member.role}</p>
                 <p className="text-sm text-white">{member.year}</p>
               
                 {/* Social Icons: Initially Hidden */}
                 <div className="flex justify-center space-x-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <a
                     href={`mailto:${member.email}`}
                     className="text-white hover:text-primaryOrange"
                     title="Email"
                   >
                     <i className="fas fa-envelope text-2xl"></i>
                   </a>
                   <a
                     href={member.linkedin}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-white hover:text-primaryOrange"
                     title="LinkedIn"
                   >
                     <i className="fab fa-linkedin text-2xl"></i>
                   </a>
                 </div>
               </div>
               
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
