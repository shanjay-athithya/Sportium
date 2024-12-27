import React from "react";
import Image from "next/image";

export default function Visual() {
  const teams = [
    {
        "id": 4,
        "name": "Visuals & Design Team",
        "members": [
          { "id": 0, "name": "Dhanushram", "role": "Head", "year": "3rd Year, EEE", "image": "https://drive.google.com/uc?export=view&id=16L1ysAFcQuIj_mnxTU5bxfK1-SLwcb1d" },
          { "id": 1, "name": "Adwin Jesusston", "role": "Sub Head", "year": "2nd Year, Chem", "image":"https://drive.google.com/uc?export=view&id=1bG1AEp55QyjizahyO4-yPUPGrG-7Xivq"},
          { "id": 2, "name": "Yukesh D", "role": "Designer", "year": "2nd Year, CSE", "image": "https://drive.google.com/uc?export=view&id=1gtyEbEy0RDFo6bkq9gqU_G59akFAz-0z" },
          { "id": 3, "name": "Rahul Malai Kani", "role": "Designer", "year": "2nd Year, CSE", "image": "https://drive.google.com/uc?export=view&id=1KelhHR8JQyiGfVnRr8F31MNDSq1fec6h" },
          { "id": 4, "name": "Harshvant Raj M", "role": "Photographer", "year": "2nd Year, Chem", "image": "https://drive.google.com/uc?export=view&id=1_HTpEJp5ropLbZHUe6tT9dCM4E14JLHt" },
          { "id": 5, "name": "Kiruthik", "role": "Photographer", "year": "1st Year, CSE", "image": "https://drive.google.com/uc?export=view&id=1LoCyYv1NNrymupg3H5tAW0bxpR9gLmcZ" }
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
                Visuals & Design Team
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
                              width={150}
                              height={150}
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