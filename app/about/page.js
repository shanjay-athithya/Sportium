import React from "react";
import { FaSmile, FaHeartbeat, FaUsers, FaTrophy } from "react-icons/fa";

export default function AboutUs() {
  return (
    <main
      className="bg-darkGrey text-white mt-20" // Added margin-top to prevent overlap with header
      style={{
        background:
          "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
      }}
    >
      {/* Description Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primaryOrange">
            What is SPORTIUM?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <FaUsers className="text-primaryOrange text-8xl mx-auto" />
            <h3 className="text-3xl font-bold text-white mt-4 text-center">
              Our vision
            </h3>
            <p className="text-xl text-white mt-4 text-center">
              SPORTIUM aims to inspire students through sports, promoting
              fitness, well-being, teamwork, and personal growth in an inclusive
              environment where everyone can develop skills and explore new
              passions. We compete with integrity, collaborate with purpose, and
              achieve greatness together.
            </p>
          </div>
          <div>
            <FaHeartbeat className="text-primaryOrange text-8xl mx-auto" />
            <h3 className="text-3xl font-bold text-white mt-4 text-center">
              Our Mission
            </h3>
            <p className="text-xl text-white mt-4 text-center">
              Our mission is to provide a platform where sports meet fun,
              offering a space for all skill levels to compete, build
              connections, and enjoy friendly competition. Through tournaments,
              events, and workshops, we inspire students to embrace fitness and
              community, focusing on creating memories and a sense of belonging.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-primaryOrange">
            Why Join SPORTIUM?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
            <div>
              <FaTrophy className="text-primaryOrange text-6xl mx-auto" />
              <h3 className="text-3xl font-semibold text-white mt-4">
                Fun Tournaments
              </h3>
              <p className="text-white mt-4 text-center">
                Turn backyard games into official tournaments with prizes,
                trophies, and bragging rights!
              </p>
            </div>
            <div>
              <FaSmile className="text-primaryOrange text-6xl mx-auto" />
              <h3 className="text-2xl font-semibold text-white mt-4">
                Friendly Competition
              </h3>
              <p className="text-white mt-4 text-center">
                Whether you are a seasoned athlete or just love the thrill of the
                game, there is a spot for you here.
              </p>
            </div>
            <div>
              <FaUsers className="text-primaryOrange text-6xl mx-auto" />
              <h3 className="text-3xl font-semibold text-white mt-4">
                New Connections
              </h3>
              <p className="text-white mt-4 text-center">
                Meet new friends and make lifelong memories through the spirit
                of sportsmanship and teamwork.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to Join the Fun?</h2>
        <p className="text-lg mt-4">
          Whether you are looking for intense competition or just an outlet to
          stay active, SPORTIUM has something for everyone.
        </p>
        <a
          href="https://chat.whatsapp.com/B9hg9wvlMTh87AeRomHK8U"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-8 px-6 py-3 bg-white text-primaryOrange font-bold rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
            Join Us Today
          </button>
        </a>
      </section>
    </main>
  );
}
