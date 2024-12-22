import React from "react";
import Image from "next/image";

export default function Document() {
  const teams = [
    {
        "id": 5,
        "name": "Documentation Team",
        "members": [
          { "id": 0, "name": "Ashuwin P", "role": "Secretary", "year": "3rd Year, IT", "image": "/images/events/kick_off.jpg" },
          { "id": 1, "name": "Satthish Murugan B", "role": "Associate Secretary", "year": "3rd Year, IT", "image": "/images/events/kick_off.jpg" },
          { "id": 2, "name": "Vikraman S", "role": "CCM", "year": "2nd Year, CSE", "image": "/images/events/kick_off.jpg" },
          { "id": 3, "name": "Nivesh Varsan R", "role": "CCM", "year": "3rd Year, Mech", "image": "/images/events/kick_off.jpg" },
          { "id": 4, "name": "Harsha Vardhan R", "role": "CCM", "year": "2nd Year, EEE", "image": "/images/events/kick_off.jpg" }
        ]
      } 
  ];
  

  return (
    <main>
          <section
            id="team"
            className="bg-darkGrey py-16 relative"
            
          >
            <div className="container mx-auto px-6 text-center relative z-10">
              <h1 className="text-4xl font-extrabold text-darkGrey mb-16">
                Documentation Team
              </h1>
    
              {teams.map((team) => (
                <div key={team.id} className="mb-16">
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.members.map((member) => (
                      <div
                        key={member.id}
                        className="team-card w-full max-w-[320px] sm:max-w-[360px] h-auto sm:h-[400px] lg:h-[320px] mx-auto bg-primaryOrange rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 hover:border hover:border-opacity-90 hover:border-primaryOrange p-6"
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
                        <p className="text-xl font-semibold text-darkGrey mb-2">{member.role}</p>
                        <p className="text-sm text-white">{member.year}</p>
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
