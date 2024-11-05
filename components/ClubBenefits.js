// components/ClubBenefits.js
import { FaSmile, FaHeartbeat, FaUsers, FaTrophy } from 'react-icons/fa'; // Updated icons

export default function ClubBenefits() {
  const benefits = [
    {
        id: 1,
        icon: <FaTrophy className="text-primaryOrange text-4xl" />,
        title: "Exciting Competitions",
        description: "Take part in friendly competitions and showcase your skills in a fun environment.",
    },
    {
        id: 2,
        icon: <FaHeartbeat className="text-primaryOrange text-4xl" />,
        title: "Promotes a Healthy Mind",
        description: "Stay active and maintain mental well-being through regular exercise and team activities.",
      },
    {
      id: 3,
      icon: <FaUsers className="text-primaryOrange text-4xl" />,
      title: "Build Friendships",
      description: "Meet like-minded peers and create lasting friendships through sports.",
    },
    
    
    {
      id: 4,
      icon: <FaSmile className="text-primaryOrange text-4xl" />,
      title: "Community & Fun",
      description: "Join a vibrant community that values sports, camaraderie, and a good time.",
    },
  ];

  return (
    <section className="bg-darkGrey py-16">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-4xl font-extrabold text-primaryOrange mb-12">
          Why Join Our Club?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h4 className="text-2xl font-bold text-darkGrey mb-2">{benefit.title}</h4>
              <p className="text-sm text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
