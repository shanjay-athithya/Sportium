// components/Hero.js
export default function Hero() {
    return (
      <section className="relative bg-cover bg-center h-[70vh] flex items-center" style={{ backgroundImage: "url('/images/hero-background.jpg')" }}>
        <div className="container mx-auto text-center text-white px-4 md:px-0">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Welcome to the Sports Club</h2>
          <p className="text-lg md:text-2xl mb-8">
            Join us in the pursuit of excellence in sports and camaraderie.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-primaryOrange text-white py-3 px-6 rounded font-bold hover:bg-orange-600 transition duration-200">Join the Club</button>
            <button className="bg-transparent border border-white py-3 px-6 rounded font-bold hover:bg-white hover:text-darkGrey transition duration-200">Learn More</button>
          </div>
        </div>
      </section>
    );
  }
  