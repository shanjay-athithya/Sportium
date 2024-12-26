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
    <section id="events"  className="bg-darkGrey py-16">
      <div className="container mx-auto px-6 p-10 text-center">
        <h3 className="text-4xl font-extrabold text-primaryOrange mb-16">
          Events
        </h3>

        <div
          className={`${
            events.length <= 2
              ? "flex justify-center gap-8 flex-wrap"
              : "flex gap-8 md:gap-16 overflow-x-auto scrollbar-hide"
          }`}
        >
          {events.map((event) => (
            <div
              key={event.id}
              className="flex-shrink-0 w-[87vw] sm:w-[400px] md:w-[500px] h-[450px] sm:h-[500px] relative group rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105 bg-darkGrey"
            >
              {/* Image Section */}
              <div className="relative h-[75%] overflow-hidden">
                <Image
                  src={event.icon}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110 opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-80 transition duration-300"></div>
              </div>

              {/* Content Section */}
              <div className="absolute bottom-0 w-full px-4 sm:px-6 py-2 sm:py-3 bg-primaryOrange bg-opacity-90 text-left h-[45%]">
                <h4 className="text-lg sm:text-3xl font-bold text-darkGrey mb-3 sm:mb-3">
                  {event.title}
                </h4>
                <p className="text-md font-bold sm:text-md text-white mb-2">
                  Date: {event.dateRange}
                </p>
                <p className="text-md font-bold sm:text-md text-darkGrey mb-2">
                  {event.description}
                </p>
                <p className="text-md font-bold sm:text-md text-white mb-2">
                  Venue: {event.location}
                </p>
                <Link href={event.link}>
                  <button className="inline-block text-primaryOrange bg-darkGrey py-1 px-4 sm:py-2 sm:px-6 rounded-full font-bold hover:bg-white text-primaryOrange transition duration-200">
                    Explore
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}