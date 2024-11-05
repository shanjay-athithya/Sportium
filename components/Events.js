// components/Events.js

export default function Events() {
    const events = [
      {
        id: 1,
        title: "Inter-college Cricket Tournament",
        dateRange: "November 10 - November 15, 2024",
        description: "Experience competitive cricket and cheer for our club!",
        location: "College Grounds",
        isCurrent: true, // Flag to indicate if it's a current event
      },
      {
        id: 2,
        title: "Annual Sports Day",
        dateRange: "November 20, 2024",
        description: "Celebrate sportsmanship with various games and competitions.",
        location: "Main Stadium",
        isCurrent: false,
      },
      {
        id: 3,
        title: "Football Friendly Match",
        dateRange: "December 2, 2024",
        description: "A friendly football match open to all members.",
        location: "Main Field",
        isCurrent: false,
      },
      {
        id: 4,
        title: "Basketball Training Session",
        dateRange: "December 10 - December 15, 2024",
        description: "Join our training session to hone your basketball skills.",
        location: "Sports Hall B",
        isCurrent: false,
      },
    ];
  
    const currentEvents = events.filter(event => event.isCurrent);
    const upcomingEvents = events.filter(event => !event.isCurrent);
  
    return (
      <section className="bg-lightGrey py-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-extrabold text-primaryOrange mb-12">Events</h3>
  
          {/* Current Events */}
          {currentEvents.length > 0 && (
            <>
              <h4 className="text-3xl font-bold text-darkGrey mb-8">Current Events</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {currentEvents.map(event => (
                  <div
                    key={event.id}
                    className="bg-white border-l-4 border-primaryOrange rounded-lg p-6 shadow-lg"
                  >
                    <h4 className="text-2xl font-semibold text-darkGrey mb-2">{event.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-bold">Date:</span> {event.dateRange}
                    </p>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    <p className="text-sm text-gray-600">
                      <span className="font-bold">Location:</span> {event.location}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
  
          {/* Upcoming Events */}
          {upcomingEvents.length > 0 && (
            <>
              <h4 className="text-3xl font-bold text-darkGrey mb-8">Upcoming Events</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map(event => (
                  <div
                    key={event.id}
                    className="bg-white border-l-4 border-gray-300 rounded-lg p-6 shadow-lg"
                  >
                    <h4 className="text-2xl font-semibold text-darkGrey mb-2">{event.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-bold">Date:</span> {event.dateRange}
                    </p>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    <p className="text-sm text-gray-600">
                      <span className="font-bold">Location:</span> {event.location}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    );
  }
  