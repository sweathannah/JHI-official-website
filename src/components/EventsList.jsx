import React from "react";
import { NavLink } from "react-router-dom";

const EventsList = ({ events, title }) => {
  return (
    <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 lg:px-10">
          {events.map((event, index) => (  
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
                <p className="text-[#292666] bg-[#05175F40] w-fit text-[0.8rem] py-[0.5rem] px-[1.16rem] font-[600] rounded-[0.3rem] ">
                  {event.type}
                </p>
                <h2 className="text-[#292666] font-semibold text-[1.25rem] my-2">
                  {event.title}
                </h2>
                <p className="text-gray-600 text-[13px] mb-1">
                  <span>{event.date}</span>
                  <span>{event.platform}</span>
                </p>
                <NavLink to={`/events/${event.id}`} key={event.id}>
                  <button className="bg-[#258CCF] text-white py-[1.13rem] px-4 w-full rounded-[0.5rem] mt-[1rem] text-sm hover:bg-[#085181] transition-colors  font-[600] duration-300">
                    Learn More
                  </button>
                </NavLink>
              </div>
            </div>
          ))}
            
        </div>
    </section>
  );
};

export default EventsList;
