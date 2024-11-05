// components/FeaturedSports.js
import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedSports() {
  const sports = [
    {
      id: 1,
      name: "Cricket",
      image: "/images/cricket.jpg",
      description: "Experience the thrill of cricket with knockout and round-robin formats.",
      link: "/matches/cricket",
    },
    {
      id: 2,
      name: "Football",
      image: "/images/football.jpg",
      description: "Join our competitive football matches and showcase your skills.",
      link: "/matches/football",
    },
    {
      id: 3,
      name: "Box Cricket",
      image: "/images/box-cricket.jpg",
      description: "Enjoy fast-paced Box Cricket, ideal for limited spaces and high energy.",
      link: "/matches/box-cricket",
    },
    {
      id: 4,
      name: "Basketball",
      image: "/images/basketball.jpg",
      description: "Test your skills on the court and experience the thrill of basketball.",
      link: "/matches/basketball",
    },
    {
      id: 5,
      name: "Volleyball",
      image: "/images/volleyball.jpg",
      description: "Join our volleyball games for team play and intense rallies.",
      link: "/matches/volleyball",
    },
    {
      id: 6,
      name: "Badminton",
      image: "/images/badminton.jpg",
      description: "Play fast and focused games of badminton with top competitors.",
      link: "/matches/badminton",
    },
    {
      id: 7,
      name: "Table Tennis",
      image: "/images/table-tennis.jpg",
      description: "Experience the speed and skill of table tennis matches.",
      link: "/matches/table-tennis",
    },
    {
      id: 8,
      name: "Carrom",
      image: "/images/carrom.jpg",
      description: "Showcase your precision in carrom and aim for the pocket.",
      link: "/matches/carrom",
    },
    {
      id: 9,
      name: "Chess",
      image: "/images/chess.jpg",
      description: "Challenge your mind with strategic chess matches.",
      link: "/matches/chess",
    },
  ];

  return (
    <section className="bg-darkGrey py-16">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h3 className="text-4xl font-extrabold text-primaryOrange mb-12 mt-10">
          Explore Our Sports
        </h3>
        
        {/* Horizontal Scrollable Cards */}
        <div className="flex gap-8 md:gap-16 overflow-x-auto scrollbar-hide">
          {sports.map((sport) => (
            <div
              key={sport.id}
              className="flex-shrink-0 w-[90vw] sm:w-[400px] md:w-[500px] h-[400px] sm:h-[500px] relative group rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105 bg-darkGrey"
            >
              <div className="relative h-full overflow-hidden">
                <Image
                  src={sport.image}
                  alt={sport.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110 opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-80 transition duration-300"></div>
              </div>
              <div className="absolute bottom-0 w-full px-4 sm:px-6 py-4 bg-primaryOrange bg-opacity-90 text-left">
                <h4 className="text-xl sm:text-2xl font-bold text-darkGrey mb-1 sm:mb-2">
                  {sport.name}
                </h4>
                <p className="text-xs sm:text-sm text-white mb-3 sm:mb-4">
                  {sport.description}
                </p>
                <Link href={sport.link}>
                  <button className="inline-block bg-primaryOrange text-white py-1 px-4 sm:py-2 sm:px-6 rounded-full font-bold hover:bg-orange-700 transition duration-200">
                    View Matches
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
