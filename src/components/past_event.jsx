import React from "react";

const PastEvents = () => {
  // Array of past events
  const pastEvents = [
    {
      image: "/images/Events_images/past_events_images/stem.svg",
      title: "Combining STEM And Social Responsibility Initiatives",
      date: "Saturday, December 10, 2024 | 9:00PM",
      platform: "Google Meet",
    },
    {
      image: "/images/Events_images/past_events_images/past-event-2.svg", 
      title: "World Mental Health Day Webinar",
      date: "Saturday, October 10, 2024 | 9:00PM | ",
      platform: "Google Meet",
    },
    {
      image: "/images/Events_images/past_events_images/past-event-3.svg",
      title: "Skill Acquisition And Development",
      date: "Tuesday, October 8, 2024 | 5:00PM - 7:00PM",
      platform: "Google Meet",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 lg:px-10">
      {pastEvents.map((event, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-[1px] p-4"
        >
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-fit object-cover"
          />
          <div className="py-[1.5rem]">
            <h2 className="text-[#292666] font-semibold text-lg mb-2">
              {event.title}
            </h2>
            <span className="text-gray-600 text-[13px] mb-1">{event.date}</span>
            <span className="text-gray-500 text-[13px] mb-4">{event.platform}</span>
            <button className="bg-[#292666] text-white py-2 px-4 rounded-full text-sm hover:bg-[#1f204d] transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PastEvents;
