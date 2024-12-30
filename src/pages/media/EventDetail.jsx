import React from "react";
import { useParams } from "react-router-dom";
import { eventsData } from "./data"; // Ensure correct import path

const EventDetail = () => {
  const { id } = useParams();
  const event = [...eventsData.pastEvents, ...eventsData.upcomingEvents].find(
    (e) => e.id === id // Match `id` as a string
  );

  if (!event) return <p>Event not found!</p>;

  return (
    <div className="py-10 px-6">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-[400px] object-cover mb-6"
      />
      <h1 className="text-3xl font-bold">{event.title}</h1>
      <p className="text-lg text-gray-600">{event.date}</p>
      <p className="text-lg text-gray-600">{event.platform}</p>
      <p className="mt-4 text-gray-800">{event.description}</p>
    </div>
  );
};

export default EventDetail;
