import Image from "next/image";
import Link from "next/link";

export default function Events() {
  const events = [
    {
      id: 1,
      title: "KICK OFF EVENT",
      dateRange: "November 4 - November 9, 2024",
      description: "Experience the thrill of cricket with knockout.",
      location: "Basketball court , Hostel",
      isCurrent: true,
      icon: "/images/events/kick_off1.png",
      link: "/matches/table-tennis",
    },
    {
      id: 2,
      title: "Annual Tech Fest",
      dateRange: "December 5 - December 7, 2024",
      description: "Explore innovations and tech exhibitions.",
      location: "Main Auditorium",
      isCurrent: false,
      icon: "/images/tech.jpg",
      link: "/matches/table-tennis",
    },
    {
      id: 3,
      title: "Annual Tech Fest",
      dateRange: "December 5 - December 7, 2024",
      description: "Explore innovations and tech exhibitions.",
      location: "Main Auditorium",
      isCurrent: false,
      icon: "/images/tech.jpg",
      link: "/matches/table-tennis",
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
                event.isCurrent ? 'border-primaryOrange' : 'border-gray-500'
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
                  className="mx-auto"
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