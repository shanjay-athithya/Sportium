// components/Events.js

import Image from 'next/image';

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Inter-college Cricket Tournament",
      dateRange: "November 10 - November 15, 2024",
      description: "Experience competitive cricket and cheer for our club!",
      location: "College Grounds",
      isCurrent: true,
      icon: "/images/sports.jpg", // Add path to icon image
    },
    {
      id: 2,
      title: "Annual Sports Day",
      dateRange: "November 20, 2024",
      description: "Celebrate sportsmanship with various games and competitions.",
      location: "Main Stadium",
      isCurrent: false,
      icon: "/images/sports-day-icon.png", // Add path to icon image
    },
    {
      id: 3,
      title: "Football Friendly Match",
      dateRange: "December 2, 2024",
      description: "A friendly football match open to all members.",
      location: "Main Field",
      isCurrent: false,
      icon: "/images/football-icon.png", // Add path to icon image
    },
    {
      id: 4,
      title: "Basketball Training Session",
      dateRange: "December 10 - December 15, 2024",
      description: "Join our training session to hone your basketball skills.",
      location: "Sports Hall B",
      isCurrent: false,
      icon: "/images/basketball-icon.png", // Add path to icon image
    },
  ];

  return (
    <section className="bg-darkGrey py-16">
      <div className="container mx-auto px-6 p-10 text-center">
        <h3 className="text-4xl font-extrabold text-primaryOrange mb-16">Events</h3>
        
        {/* Horizontal Scrollable Events */}
        <div className="flex overflow-x-auto space-x-10 pb-4 scrollbar-hide">
          {events.map(event => (
            <div
              key={event.id}
              className={`flex-shrink-0 bg-white rounded-lg p-6 shadow-lg transition duration-300 border-l-8 ${
                event.isCurrent ? 'border-primaryOrange' : 'border-gray-600'
              }`}
              style={{
                width: '87vw', // Adjust for mobile
                maxWidth: '400px', // Max width for larger screens
                height: '400px', // Adjust height as needed
              }}
            >
              {/* Icon Box */}
              <div className="mb-6">
                <Image
                  src={event.icon}
                  alt={`${event.title} icon`}
                  width={200} // Set width for the icon
                  height={200} // Set height for the icon
                  className="mx-auto" // Center the icon
                />
              </div>
              <h4 className="text-2xl font-semibold mb-4 text-primaryOrange">
                {event.title}
              </h4>
              <p className="text-sm mb-2 text-gray-800">
                <span className="font-bold">Date:</span> {event.dateRange}
              </p>
              <p className="mb-4 text-gray-700">{event.description}</p>
              <p className="text-sm text-gray-800">
                <span className="font-bold">Location:</span> {event.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
