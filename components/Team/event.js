import React from "react";
import Image from "next/image";

export default function Event() {
  const teams = [
    {
        "id": 1,
        "name": "Event Management Team",
        "members": [
          { "id": 0, "name": "Srinivas S", "role": "Event Manager", "year": "3rd Year, IT", "image": "/images/events/kick_off.jpg" },
          { "id": 1, "name": "S Karthik", "role": "Event Planner", "year": "3rd Year, Civil", "image": "/images/events/kick_off.jpg" },
          { "id": 2, "name": "Sudhir K", "role": "Event Coordinator", "year": "3rd Year, EEE", "image": "/images/events/kick_off.jpg" },
          { "id": 3, "name": "Kishore", "role": "Event Coordinator", "year": "3rd Year, EEE", "image": "/images/events/kick_off.jpg" },
          { "id": 4, "name": "Monish", "role": "Event Coordinator", "year": "3rd Year, IT", "image": "/images/events/kick_off.jpg" },
          { "id": 5, "name": "Vansh Sharma", "role": "Event Coordinator", "year": "3rd Year, IT", "image": "/images/events/kick_off.jpg" },
          { "id": 6, "name": "K Shri Bharathan", "role": "Event Coordinator", "year": "3rd Year, Civil", "image": "/images/events/kick_off.jpg" },
          { "id": 7, "name": "Nithin G", "role": "Event Coordinator", "year": "3rd Year, Mech", "image": "/images/events/kick_off.jpg" },
          { "id": 8, "name": "Pranesh TT", "role": "CCM", "year": "2nd Year, M Tech", "image": "/images/events/kick_off.jpg" },
          { "id": 9, "name": "Muthuveal V", "role": "CCM", "year": "2nd Year, IT", "image": "/images/events/kick_off.jpg" },
          { "id": 10, "name": "Harish D", "role": "CCM", "year": "2nd Year, CSE", "image": "/images/events/kick_off.jpg" },
          { "id": 11, "name": "Balaji G", "role": "CCM", "year": "2nd Year, Mech", "image": "/images/events/kick_off.jpg" },
          { "id": 12, "name": "Varun Senthil", "role": "CCM", "year": "2nd Year, Mech", "image": "/images/events/kick_off.jpg" },
          { "id": 13, "name": "Tarun", "role": "CCM", "year": "1st Year, Mech", "image": "/images/events/kick_off.jpg" },
          { "id": 14, "name": "Vanavan U", "role": "CCM", "year": "1st Year, EEE", "image": "/images/events/kick_off.jpg" },
          { "id": 15, "name": "Sabariesh M", "role": "CCM", "year": "1st Year, EEE", "image": "/images/events/kick_off.jpg" },
          { "id": 16, "name": "Kallur Yathin", "role": "CCM", "year": "1st Year, IT", "image": "/images/events/kick_off.jpg" },
          { "id": 17, "name": "Guru Abijeth S", "role": "CCM", "year": "1st Year, IT", "image": "/images/events/kick_off.jpg" }
        ]
      }, 
  ];
  

  return (
    <main>
          <section
            id="team"
            className="bg-darkGrey bg-opacity-80 py-16 relative"
            style={{
              background: "linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))",
            }}
          >
            <div className="container mx-auto px-6 text-center relative z-10">
              <h1 className="text-4xl font-extrabold text-primaryOrange mb-16">
                Event ManagementTeam
              </h1>
    
              {teams.map((team) => (
                <div key={team.id} className="mb-16">
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.members.map((member) => (
                      <div
                        key={member.id}
                        className="team-card w-full max-w-[320px] sm:max-w-[360px] h-auto sm:h-[400px] lg:h-[300px] mx-auto bg-darkGrey rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 hover:border hover:border-opacity-90 hover:border-primaryOrange p-6"
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
                        <p className="text-md font-semibold text-primaryOrange mb-4">{member.role}</p>
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
