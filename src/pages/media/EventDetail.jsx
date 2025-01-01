import React from "react";
import { useParams } from "react-router-dom";
import { eventsData } from "./data";
import { useLocation } from "react-router-dom";

const EventDetail = () => {
  const { id } = useParams();
  const event = [...eventsData.pastEvents, ...eventsData.upcomingEvents].find(
    (e) => e.id === id // Match `id` as a string
  );
  const location = useLocation();
  const currentUrl = `${window.location.origin}${location.pathname}`;

  if (!event) return <p>Event not found!</p>;

  return (
    <>
      <section className="border-t-[1px] p-[2.5rem]">
        <div className=" text-[1.125rem] mb-[2.5rem] flex items-center">
          <span className="font-[500] text-[#258CCF] ">
            {event.status === "past" ? "Past Events" : "Upcoming Events"}
          </span>
          <span className="px-[0.75rem]">
            <img src="/images/Events_images/events_icons/arrow_right.svg" alt="arrow_right"  />
          </span>
          <span className="font-[400] text-[#33333380]">
            {event.title}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[#292666] bg-[#05175F40] w-fit text-[0.8rem] py-[0.5rem] px-[1.16rem] font-[600] rounded-[0.3rem] ">
                    {event.type}
          </p>
          <div className="flex items-center gap-[0.5rem]">
            <p className="font-[700] text-[#008001] text-[1.125rem] px-[1rem]">
              Share via: 
            </p>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`Check out this event: ${currentUrl}`)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/Events_images/events_icons/whatsapp_icon.svg" alt="whatsapp_icon" />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/Events_images/events_icons/Facebook_icon.svg" alt="facebook_icon" />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out this event: ${currentUrl}`)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/Events_images/events_icons/x_icon.svg" alt="x_icon" />
            </a>
          </div>
        </div>
        <h1 className="font-semibold text-[#292666] text-[3rem] mt-[1.5rem]">
          {event.title}
        </h1>
        <p className="text-gray-600 text-[13px] mb-1">
                  <span>{event.date}</span>
                  <span>{event.platform}</span>
                </p>
      </section>
        
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
    </>
  );
};

export default EventDetail;
