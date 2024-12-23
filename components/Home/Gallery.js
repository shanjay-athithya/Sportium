// components/Gallery.js
import Image from 'next/image';

export default function Gallery() {
  const highlights = [
    {
      id: 1,
      image: "/images/sports.jpg",
      alt: "Football Match Celebration",
      caption: "Celebrating a hard-fought football victory!",
    },
    {
      id: 2,
      image: "/images/highlight2.jpg",
      alt: "Cricket Tournament",
      caption: "Our cricket team after winning the inter-college tournament.",
    },
    {
      id: 3,
      image: "/images/highlight3.jpg",
      alt: "Basketball Team",
      caption: "Basketball squad ready for the big game!",
    },
    {
      id: 4,
      image: "/images/highlight4.jpg",
      alt: "Badminton Winners",
      caption: "Winners of the annual badminton championship.",
    },
    // Add more highlights as needed
  ];

  return (
    <section className="bg-primaryOrange py-16">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-4xl font-extrabold text-darkGrey mt-8 mb-12">
          Club Highlights
        </h3>
        
        {/* Horizontal Scrollable Gallery */}
        <div className="flex overflow-x-auto space-x-8 md:space-x-10 pb-4 scrollbar-hide">
          {highlights.map((highlight) => (
            <div
              key={highlight.id}
              className="relative group flex-shrink-0 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              style={{
                width: '87vw', // Take up most of the viewport width on small screens
                maxWidth: '500px', // Limit width on larger screens
                height: '400px', // Adjust height as needed
              }}
            >
              <Image
                src={highlight.image}
                alt={highlight.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center text-white text-lg font-bold px-4 text-center">
                {highlight.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}