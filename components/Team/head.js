import React from "react";
import Image from "next/image";

export default function Head() {
  const teams = [
    {
      "id": 0,
      "name": "Club Heads",
      "members": [
        { "id": 0, "name": "Shanjay Athithya G", "role": "Club Head", "year": "3rd Year, IT", "image": "https://drive.google.com/uc?export=view&id=1i0TWYmXNH7TyaH56omhvVgbS8YxLxzjO" },
        { "id": 1, "name": "Singaram P L", "role": "Club Head", "year": "3rd Year, IT", "image": "https://drive.google.com/uc?export=view&id=1HGVl0cCgbR1N62Hpaz4MkFm8cXQR_3hf"        },
        { "id": 2, "name": "Vignesh M", "role": "Club Head", "year": "3rd Year, IT", "image": "https://drive.google.com/uc?export=view&id=1fm-BO2WWDpb5tU_PfuZ7yU8Uhax6C68k" }
      ]
    } 
  ];

  return (
    <main>
      <section
        id="team"
        className="bg-primaryOrange py-16 mt-20 relative"
      >
        <div className="container mx-auto px-6 text-center relative z-10">
          {teams.map((team) => (
            <div key={team.id} className="mb-16">
              <h1 className="text-4xl font-extrabold text-darkGrey mb-16">
                Club Heads
              </h1>
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
                          width={158}
                          height={148}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
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
