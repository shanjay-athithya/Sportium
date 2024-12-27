import React from "react";
import Image from "next/image";

export default function Market() {
  const teams = [
    {
        "id": 2,
        "name": "Marketing & Editing Team",
        "members": [
          { "id": 0, "name": "Vijay R S", "role": "Head", "year": "3rd Year, IT", "image": "https://drive.google.com/uc?export=view&id=1x49QLbG-TyweIOu1MV1uRZFIQ2wnzYqP" },
          { "id": 1, "name": "Olin Jeremiaah", "role": "Sub Head", "year": "2nd Year, Mech", "image": "https://drive.google.com/uc?export=view&id=1z5760lCFP2jYhzTGYFujjTf6JofgFxES" },
          { "id": 2, "name": "Harish Kanna V K", "role": "Editor", "year": "2nd Year, Civil", "image": "https://drive.google.com/uc?export=view&id=10VgMazurmCfm4rsxvAxwWLnFTkBBlHPm" },
          { "id": 3, "name": "Boobesh IR", "role": "Editor", "year": "1st Year, EEE", "image": "https://drive.google.com/uc?export=view&id=1uRNmxsLBIz_bRSwSN2Iq8AZD_5XDv7s8" },
          // { "id": 4, "name": "Srikanth S", "role": "Editor", "year": "3rd Year, CSE", "image": "https://drive.google.com/uc?export=view&id=1VkcMGxpIj9Wis7k7J9anQxxjHjhoq29-" },
          { "id": 5, "name": "S Dhanu Prasath", "role": "Marketer", "year": "2nd Year, EEE", "image": "https://drive.google.com/uc?export=view&id=1eTSpdCaqsBN0dVfvQHDQVOcg2xLM1mFX" },
          { "id": 6, "name": "Jayasimman", "role": "Marketer", "year": "2nd Year, CSE", "image": "https://drive.google.com/uc?export=view&id=1tiGrsCpGuMCMVm5lfHFtOqZ4qdpBAII6" }
        ]
      } 
  ];
  

  return (
    <main>
          <section
            id="team"
            className="bg-primaryOrange py-16 relative"
            
          >
            <div className="container mx-auto px-6 text-center relative z-10">
              <h1 className="text-4xl font-extrabold text-darkGrey mb-16">
                Marketing & Editing Team
              </h1>
    
              {teams.map((team) => (
                <div key={team.id} className="mb-16">
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.members.map((member) => (
                      <div
                        key={member.id}
                        className="team-card w-full max-w-[320px] sm:max-w-[360px] h-auto sm:h-[400px] lg:h-[320px] mx-auto bg-darkGrey rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 hover:border hover:border-opacity-90 hover:border-primaryOrange p-6"
                      >
                        <div className="flex justify-center mb-4">
                          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primaryOrange">
                            <Image
                              src={member.image}
                              alt={member.name}
                              width={153}
                              height={148}
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <h4 className="text-xl font-bold text-white mt-3 mb-1">{member.name}</h4>
                        <p className="text-xl font-semibold text-primaryOrange mb-2">{member.role}</p>
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