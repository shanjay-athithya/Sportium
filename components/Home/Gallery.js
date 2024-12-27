// components/Gallery.js
import Image from "next/image";

export default function Gallery() {
  const highlights = [
    {
      id: 1,
      image: "https://drive.google.com/uc?id=1RO3r5ReDE_sna-pvnviSCw0em3tTpcm-",
      alt: "KICK OFF EVENT",
      caption: "Winners Team",
    },
    {
      id: 2,
      image: "https://drive.google.com/uc?id=1NU8d-S_gsq3umrw5eaXjUVK7R11_z1an",
      alt: "KICK OFF EVENT",
      caption: "Our trophy, a proud moment of hard work and teamwork!",
    },
    {
      id: 3,
      image: "https://drive.google.com/uc?id=17DFx1-Ezqg1SmuTraGFTNP89IxWESBt6",
      alt: "KICK OFF EVENT",
      caption: "Runner up",
    },
    {
      id: 4,
      image: "https://drive.google.com/uc?id=1KXAmyPVtL4M8vR4FDgQEVRQhySRr55Ma",
      alt: "KICK OFF EVENT",
      caption: "The Champions",
    },
    {
      id: 5,
      image: "https://drive.google.com/uc?id=1oQnovEFrV9P0KqHwZOEm6TRrF16_lhix",
      alt: "SSN-Sportium",
      caption: "Together we compete, Together we conquer",
    },
  ];

  return (
    <section id="gallery" className="bg-darkGrey py-16">
      <section className="bg-primaryOrange py-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-extrabold text-darkGrey mt-8 mb-12">
            Club Highlights
          </h3>

          {/* Horizontal Scrollable Animated Gallery */}
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-scroll space-x-8 group">
              {highlights.map((highlight) => (
                <div
                  key={highlight.id}
                  className="relative flex-shrink-0 rounded-lg overflow-hidden shadow-lg"
                  style={{
                    width: "300px",
                    height: "400px",
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
        </div>

        {/* Add keyframes animation */}
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
            display: flex; /* Ensure flex container allows all items to scroll */
          }
        `}</style>
      </section>
    </section>
  );
}
