import React, { useState } from "react";
import EventsList from "../../components/EventsList";

const Events = () => {
  const [activeTab, setActiveTab] = useState("photos");

  // Past and upcoming events data
  const pastEvents = [
    {
      type:"conference",
      image: "/images/Events_images/past_events_images/stem.svg",
      title: "Combining STEM And Social Responsibility Initiatives",
      date: "Saturday, November 2, 2024 | 9:00PM | ",
      platform: "NSE Hall",
    },
    {
        type:"webiner",
        image: "/images/Events_images/past_events_images/past-event-2.svg", 
        title: "World Mental Health Day Webinar",
        date: "Saturday, October 10, 2024 | 9:00PM | ",
        platform: "Google Meet",
    },
    {
        type:"seminer",
        image: "/images/Events_images/past_events_images/past-event-3.svg",
        title: "Skill Acquisition And Development",
        date: "Tuesday, October 8, 2024 | 5:00PM | ",
        platform: "Google Meet",
    },
    {
        type:"webiner",
        image: "/images/Events_images/past_events_images/past-event-4.svg",
        title: "Research Writing And Academic Publication Techniques",
        date: "Tuesday, October 19, 2024 | 5:00PM | ",
        platform: "Google Meet",
    },
    {
        type:"Summit",
        image: "/images/Events_images/past_events_images/past-event-5.svg",
        title: "Thriving Youth Summit",
        date: "Tuesday, October 19, 2024 | 5:00PM | ",
        platform: "Banquet Hall",
    },
    {
        type:"Seminar",
        image: "/images/Events_images/past_events_images/past-event-6.svg",
        title: "Teacher’s Day Physical Event",
        date: "Tuesday, October 5, 2024 | 5:00PM | ",
        platform: "Banquet Hall",
    },
  ];

  const upcomingEvents = [
    {
      type: "Webinar",
      image: "/images/Events_images/upcoming_events/upcoming-1.svg",
      title: "Future Innovations in Tech",
      date: "Saturday, December 15, 2024 | 3:00PM | ",
      platform: "Zoom",
    },
    {
      type: "Seminar",
      image: "/images/Events_images/upcoming_events/upcoming-2.svg",
      title: "AI and the Next Generation",
      date: "Monday, January 10, 2025 | 1:00PM | ",
      platform: "Google Meet",
    },
    // Add more upcoming events here
  ];

  return (
    
    <section className="py-10 px-[2rem]">
      {/* Intro Section */}
      <article className="w-fit m-auto text-center flex flex-col items-center">
        <h4 className="my-[1.25rem] text-[#292666] font-[600] lg:text-[2.5rem] text-[1.8rem]">
          Past & Upcoming Events
        </h4>
        <p className="font-[400] text-[1.125rem] leading-[1.9rem] text-[#333333] text-center mb-10 lg:max-w-[70rem] max-w-[20rem]">
          At JHI, every event is a story worth sharing. Explore highlights from
          past events and stay updated on upcoming opportunities. Be part of
          the journey, relive the moments, and create new ones!
        </p>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10 bg-[#05175F26] rounded-[1.88rem] p-[0.3rem]">
          <button
            className={`lg:px-[5.4rem] px-[3rem] py-[1.125rem] rounded-full font-medium text-sm ${
              activeTab === "photos"
                ? "bg-[#292666] text-white"
                : "text-[#333333]"
            }`}
            onClick={() => setActiveTab("photos")}
          >
            Past Events
          </button>
          <button
            className={`lg:px-[5.4rem] px-[3rem] py-[1.125rem] rounded-full font-medium text-sm ${
              activeTab === "videos"
                ? "bg-[#292666] text-white"
                : "text-[#333333]"
            }`}
            onClick={() => setActiveTab("videos")}
          >
            Upcoming Events
          </button>
        </div>
      </article>

      {/* Conditional Rendering */}
      {activeTab === "photos" && <EventsList events={pastEvents} title="Past Events" />}
      {activeTab === "videos" && <EventsList events={upcomingEvents} title="Upcoming Events" />}
    </section>
  );
};

export default Events;
