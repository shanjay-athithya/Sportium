import React from "react";
import Image from "next/image";

export default function Event() {
  const teams = [
    {
        "id": 1,
        "name": "Event Management Team",
        "members": [
          { "id": 0, "name": "Srinivas S", "role": "Event Manager", "year": "3rd Year, IT", "image": "https://drive.google.com/uc?export=view&id=1Ug5POVUXyi_iqXUn_r0yjGAyMbxleKrz" },
          { "id": 1, "name": "S Karthik", "role": "Event Planner", "year": "3rd Year, Civil", "image": "https://drive.google.com/uc?export=view&id=1t0Y_5G0BdbFythwURy5hqvMHqjKYr-5M" },
          { "id": 2, "name": "Sudhir K", "role": "Event Coordinator", "year": "3rd Year, EEE", "image": "https://drive.google.com/uc?export=view&id=1Wsq3QomkZn2QWofRKaY0WouqJ7NIXuXv" },
          { "id": 3, "name": "Kishore", "role": "Event Coordinator", "year": "3rd Year, EEE", "image": "https://drive.google.com/uc?export=view&id=1XWavVJgRTRjqNhV3tEqtWjZWwDjSZh4M" },
          { "id": 4, "name": "Monish", "role": "Event Coordinator", "year": "3rd Year, IT", "image": "https://drive.google.com/uc?export=view&id=1d1WrZySHDZG3U9p8vxb_8rjcd_vo7iFC" },
          { "id": 5, "name": "Vansh Sharma", "role": "Event Coordinator", "year": "3rd Year, IT", "image":"https://drive.google.com/uc?export=view&id=1zeM2IcOYrvFSTy2iwoiLb9ESi0_wZjNr"},
          { "id": 6, "name": "K Shri Bharathan", "role": "Event Coordinator", "year": "3rd Year, Civil", "image": "https://drive.google.com/uc?export=view&id=1jkJDJzo6zVqyl7qw3kFwhmWip9vGeex2" },
          { "id": 7, "name": "Nithin G", "role": "Event Coordinator", "year": "3rd Year, Mech", "image": "https://drive.google.com/uc?export=view&id=1Dp4T2vLPoAoJV5OcqrZH58SrM4Jw0-sd" },
          { "id": 8, "name": "Pranesh TT", "role": "CCM", "year": "2nd Year, M Tech", "image": "https://drive.google.com/uc?export=view&id=1Ur1h4MDb7CYb8f6_43rMLe-xQDXE4HRU" },
          { "id": 9, "name": "Muthuveal V", "role": "CCM", "year": "2nd Year, IT", "image": "https://drive.google.com/uc?export=view&id=1eoixZXi5_VTlMsjh6ubYv-KpGChb8MAv" },
          { "id": 10, "name": "Harish D", "role": "CCM", "year": "2nd Year, CSE", "image": "https://drive.google.com/uc?export=view&id=1iH8gHRfc82ea6YVZoQnTlGJSXeJEjCsZ" },
          { "id": 11, "name": "Balaji G", "role": "CCM", "year": "2nd Year, Mech", "image": "https://drive.google.com/uc?export=view&id=1T7Up4axGiTJCpHNN98neBgDrzk3UuVNP" },
          { "id": 12, "name": "Varun Senthil", "role": "CCM", "year": "2nd Year, Mech", "image": "https://drive.google.com/uc?export=view&id=1htdk5lzzFYDWUjkBt0EKqLo4qT-G7TYT" },
          { "id": 13, "name": "Tarun", "role": "CCM", "year": "1st Year, Mech", "image": "/images/events/kick_off.jpg" },
          { "id": 14, "name": "Vanavan U", "role": "CCM", "year": "1st Year, EEE", "image": "https://drive.google.com/uc?export=view&id=1cmCqjHLKHfeCWBpnw-yMhHQcH_KPzV1L" },
          { "id": 15, "name": "Sabariesh M", "role": "CCM", "year": "1st Year, EEE", "image": "https://drive.google.com/uc?export=view&id=1Bg8v8LgAqffT8uqONS761Xv0uu9lMhpb" },
          { "id": 16, "name": "Kallur Yathin", "role": "CCM", "year": "1st Year, IT", "image": "https://drive.google.com/uc?export=view&id=1MRNSCKgeneEw_r_SW9uuRRPyVuMOZ1VX" },
          { "id": 17, "name": "Guru Abijeth S", "role": "CCM", "year": "1st Year, IT", "image": "https://drive.google.com/uc?export=view&id=1c-F2hqX6kQy3myl2dgntpl0jsyL1n2HS" }
        ]
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
                Event ManagementTeam
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
                          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-darkGrey">
                            <Image
                              src={member.image}
                              alt={member.name}
                              width={154}
                              height={152}
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