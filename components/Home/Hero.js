// components/Hero.js
export default function Hero() {
    return (
      <section
        className="relative bg-cover bg-center h-screen flex items-center"
        style={{ backgroundImage: "url('/images/sports.jpg')" }}
      >
        <div className="container mx-auto text-center text-white px-4 md:px-0">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Welcome to the SSN Sportium</h2>
          <p className="text-3xl font-bold text-darkGrey md:text-2xl sm:text-xl mb-8">
            Together we compete, Together we conquer
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-transparent border border-white py-3 px-6 rounded font-bold hover:bg-white hover:text-primaryOrange transition duration-200" onClick={() => window.open('https://chat.whatsapp.com/B9hg9wvlMTh87AeRomHK8U', '_blank')}>
              Join the Club
            </button>
            <button className="bg-transparent border border-white py-3 px-6 rounded font-bold hover:bg-white hover:text-primaryOrange transition duration-200" onClick={()=>window.location.href="/about"}>
              Learn More
            </button>
          </div>
        </div>
      </section>
    );
  }
  