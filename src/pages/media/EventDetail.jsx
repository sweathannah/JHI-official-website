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
      <section className="border-t-[1px] py-[2.5rem] px-[4rem]">
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
        <p className="text-gray-600 text-[13px] mt-[1rem]">
          <span>{event.date}</span>
          <span>{event.platform}</span>
        </p>
      </section>
        
      <section className="pt-10 px-[6.25rem]">
        <img
          src={event.image}
          alt={event.title}
          className="w-full object-cover mb-[6.25rem] "
        />
      </section>

      <section className="flex flex-rol px-[4rem] justify-between items-start my-[5rem] ">
        <article className="w-[60%]">
          <h2 className="font-semibold text-[#292666] text-[2.5rem]">
            About {event.title}
          </h2>
          <p className="font-[400] text-[1rem] text-left text-[#333333] py-[1.1rem]">
            {event.about}
          </p>
        </article>
        <article>
          <img
            src={event.aboutimage}
            alt={event.title}
            className="h-[25rem]"
          />
        </article>
      </section>

      <section style={{ backgroundImage: 'url(/images/bgs/media_background.svg)'}} className='w-full bg-cover bg-no-repeat px-[4rem] flex flex-row py-[6rem] justify-between items-center'>
        <article>
          <img
            src={event.aboutspeakerimage}
            alt={event.title}
            className="h-[25rem]"
          />
        </article>
        <article className="w-[60%]">
          <h2 className="font-semibold text-[#292666] text-[2.5rem]">
            About The Speaker
          </h2>
          <p className="font-[400] text-[1rem] text-left text-[#333333] py-[1.1rem]">
            {event.aboutspeaker}
          </p>
        </article>
      </section>

      {event.status === "past" && (
        <section className="flex flex-col px-[4rem] justify-between items-start my-[5rem]">
          <h2 className="font-semibold text-[#292666] text-[2.25rem]">
            Gallery From {event.title}
          </h2>
          <div className="lg:flex hidden flex-wrap gap-4 mt-10">
            {event.gallery && event.gallery.length > 0 ? (
              event.gallery.map((item, index) =>
                item.type === "image" ? (
                  <img
                    key={index}
                    src={item.src}
                    alt={`Gallery item ${index + 1}`}
                    loading="lazy"
                    className="h-auto object-cover w-[20rem]"
                  />
                ) : (
                  <video
                    key={index}
                    src={item.src}
                    controls
                    loading="lazy"
                    className="h-[20rem] w-[13rem] object-cover"
                  />
                )
              )
            ) : (
              <p>No gallery available for this event.</p>
            )}
          </div>
        </section>
      )}

    </>
  );
};

export default EventDetail;
