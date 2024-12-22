import React, { useEffect, useState } from 'react';
import './styles/home.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Swiper modules
import { Pagination, Navigation } from 'swiper/modules';
import Hero from '../../components/Hero';


const Home = () => {
  

  useEffect(() => {
    // Ensure Swiper binds custom buttons to navigation
    const prevButton = document.querySelector(".swiper-button-prev");
    const nextButton = document.querySelector(".swiper-button-next");
    
    // Attach Swiper's navigation handlers
    if (prevButton && nextButton) {
      prevButton.addEventListener("click", () => {
        document.querySelector(".swiper").swiper.slidePrev();
      });
      nextButton.addEventListener("click", () => {
        document.querySelector(".swiper").swiper.slideNext();
      });
    }

    // Cleanup event listeners on component unmount
    return () => {
      if (prevButton) prevButton.removeEventListener("click", () => {});
      if (nextButton) nextButton.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <div className="font-[Montserrat]">
      
      <Hero />

      <section className='w-full flex justify-between flex-row overflow-x-scroll'>
        <div className='bg-[#258CCF] px-[2.43rem] py-[3rem] '>
          <h2 className='font-[600] text-[1.375rem] leading-[1.875rem] text-white mb-[1.25rem] min-w-[19rem] '>The JHI call for application into the inaugural cohort set for 3 months</h2>
          <a href="#" className='text-[1rem] text-[#FFAA00] flex items-center space-x-[0.5rem] '>
            Learn More
            <img src="./images/yellow_arrow.svg" alt="" className='' />
          </a>
        </div>
        <div className='bg-[#000000] px-[2.43rem] py-[3rem] '>
          <h2 className='font-[600] text-[1.375rem] leading-[1.875rem] text-white mb-[1.25rem] min-w-[22rem] '>
            Help JHI to in her impacting of projects and community building
          </h2>
          <a href="#" className='text-[1rem] text-[#FFAA00] flex items-center space-x-[0.5rem] '>
            Donate Now
            <img src="./images/yellow_arrow.svg" alt="" className='' />
          </a>
        </div>
        <div className='bg-[#258CCF] px-[2.43rem] py-[3rem] '>
          <h2 className='font-[600] text-[1.375rem] leading-[1.875rem] text-white mb-[1.25rem] min-w-[22rem] '>
          Join our community to help empower individuals & communities
          </h2>
          <a href="https://chat.whatsapp.com/BFpOuckjmpE5djRguCgf51" className='text-[1rem] text-[#FFAA00] flex items-center space-x-[0.5rem] '>
            Join Now
            <img src="./images/yellow_arrow.svg" alt="" className='' />
          </a>
        </div>
      </section>

      <section className='lg:px-[4rem] p-[2rem] lg:pt-[10rem] flex flex-row space-x-[3rem] '>
        <article className='lg:w-[55%]'>
          <h3 className='font-[600] text-[#292666] text-[0.8rem] px-[1rem] py-[0.5rem] bg-[#05175F40] w-fit rounded-[0.3rem] '>About Us</h3>
          <h4 className='my-[1.25rem] text-[#292666] font-[600] lg:text-[2.5rem] text-[1.2rem] '>
            Founded On Principles Of Empathy, Empowerment & Community
          </h4>
          <ul className='space-y-[1.25rem]  mb-[3rem]'>
            <div className='flex flex-wrap text-[#333333] '>
              <img src="./images/list_star.svg" alt="list_star" className='mx-[0.625rem]'/>
              <li className='font-[600] text-[1.125rem] '>Mentorship Programs</li>
              <li className='ml-[0.6rem] mt-[0.7rem] font-[400] text-[1rem] leading-[1.8rem] '>We offer one-on-one mentoring, group coaching, and workshops to equip individuals with the skills, knowledge, and confidence...</li>
            </div>
            <div className='flex flex-wrap text-[#333333] '>
              <img src="./images/list_star.svg" alt="list_star" className='mx-[0.625rem]'/>
              <li className='font-[600] text-[1.125rem] '>Positive Impact Projects</li>
              <li className='ml-[0.6rem] mt-[0.7rem] font-[400] text-[1rem] leading-[1.8rem] '>
                We design and implement initiatives addressing critical social, economic, and environmental issues...
              </li>
            </div>
            <div className='flex flex-wrap text-[#333333] '>
              <img src="./images/list_star.svg" alt="list_star" className='mx-[0.6rem]'/>
              <li className='font-[600] text-[1.01rem]'>Community Building Initiatives</li>
              <li className='ml-[0.6rem] mt-[0.7rem] font-[400] text-[1rem] leading-[1.8rem] '>
                We foster inclusive communities through events, training, and capacity-building programs, promoting social cohesion, collective...
              </li>
            </div>
          </ul>
          <a href="#" className='bg-[#258CCF] rounded-[0.5rem] py-[1.25rem] px-[3.06rem]'>
            <button className='text-[#FFFFFF] font-[700] text-[1rem] Mulish'>
              Read More
            </button>
          </a>
        </article>
        <article className='lg:flex hidden'>
          <img src="./images/about_image.svg" alt="about_image" />
        </article>
      </section>

      <section style={{ backgroundImage: 'url(/images/impact_image.svg)'}} className='w-full h-fit bg-cover bg-no-repeat py-[10rem]'>
        <h2 className='w-fit m-auto lg:pt-0 pt-[8rem] lg:text-[2.5rem] text-[2rem] text-[#292666] font-semibold '>Our Impact</h2>
        <article className="w-fit m-auto mt-[5rem] flex flex-wrap justify-center items-center lg:flex-row flex-col text-[#292666] lg:space-x-[2.75rem] space-x-0 space-y-[2.75rem] lg:space-y-0 px-1">
          <div className="flex flex-col items-center transform transition duration-300 hover:scale-125">
            <img src="./images/people_icon.svg" alt="people_icon"className='mb-[1.19rem]' />
            <h3 className='font-medium bold text-[1.5rem] mb-[0.25rem] '>More than 500+</h3>
            <p className='font-normal text-[1rem] '>People Reached</p>
          </div>
          <div className="flex flex-col items-center transform transition duration-300 hover:scale-125">
            <img src="./images/program_icon.svg" alt="program_icon"className='mb-[1.19rem]' />
            <h3 className='font-medium bold text-[1.5rem] mb-[0.25rem] '>Over 25+</h3>
            <p className='font-normal text-[1rem] '>Programs Organized</p>
          </div>
          <div className="flex flex-col items-center transform transition duration-300 hover:scale-125">
            <img src="./images/events_icon.svg" alt="event_icon"className='mb-[1.19rem]' />
            <h3 className='font-medium bold text-[1.5rem] mb-[0.25rem] '>Over 100+</h3>
            <p className='font-normal text-[1rem] w-[70%] text-center '>Physical & Virtual Events Attendees</p>
          </div>
          <div className="flex flex-col items-center transform transition duration-300 hover:scale-125">
            <img src="./images/community_icon.svg" alt="community_icon"className='mb-[1.19rem]' />
            <h3 className='font-medium bold text-[1.5rem] mb-[0.25rem] '>Across 18+</h3>
            <p className='font-normal text-[1rem] '>Communities Impacted</p>
          </div>
          <div className="flex flex-col items-center transform transition duration-300 hover:scale-125">
            <img src="./images/school_icon.svg" alt="school_icon"className='mb-[1.19rem]' />
            <h3 className='font-medium bold text-[1.5rem] mb-[0.25rem] '>About 20+</h3>
            <p className='font-normal text-[1rem] '>Schools Supported</p>
          </div>
        </article>
      </section>

      <section className='lg:px-[4rem] p-[2rem] lg:pt-[10rem] flex flex-col space-y-[3.4rem] '>
        <article className='flex flex-row flex-wrap items-center lg:gap-[8rem] gap-[3rem]'>
          <div className='max-w-[55.69rem]'>
            <h3 className='font-[600] text-[#292666] text-[0.8rem] px-[1rem] py-[0.5rem] bg-[#05175F40] w-fit rounded-[0.3rem] '>Programs</h3>
            <h4 className='my-[1.25rem] text-[#292666] font-[600] lg:text-[2.5rem] text-[1.8rem] '>
              Nurturing Impactful Initiatives For Positive Change
            </h4>
            <p className='font-[400] text-[1.125rem] leading-[1.9rem] text-[#333333]'>
              Our Positive Impact Projects tackle social, economic, and environmental issues, while our Community Building Initiatives promote social cohesion through events and training. Our approach emphasizes collaboration, sustainability, cultural sensitivity, and empowerment. By focusing on these principles, we aim to drive transformative change and enable individuals and communities to reach their full potential.
            </p>
          </div>
          <div>
            <a href="#" className='bg-[#258CCF] rounded-[0.5rem] py-[1.25rem] px-[3.06rem] '>
              <button className='text-[#FFFFFF] font-[700] text-[1rem] Mulish'>
                See More
              </button>
            </a>
          </div>
        </article>
        <article className="relative w-full">
          

        <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        // className="rounded-lg shadow-lg overflow-hidden"
        className="w-full h-fit"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center bg-white">
            <div className="w-full md:w-1/2 h-64 md:h-auto">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Mentorship Program"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full md:w-1/2 p-6">
              <h3 className="text-xl font-bold mb-4">Mentorship Programs</h3>
              <p className="text-gray-600">
                Our Positive Impact Projects tackle social, economic, and
                environmental issues, while our Community Building Initiatives
                promote social cohesion through events and training.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-500 hover:text-blue-700"
              >
                Read More →
              </a>
            </div>
          </div>
        </SwiperSlide>

        {/* Add more slides as needed */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center bg-white">
            <div className="w-full md:w-1/2 h-64 md:h-auto">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Another Program"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full md:w-1/2 p-6">
              <h3 className="text-xl font-bold mb-4">Another Program</h3>
              <p className="text-gray-600">
                This is an example of another program. Add your content here.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-blue-500 hover:text-blue-700"
              >
                Read More →
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="absolute -bottom-16 right-8 flex space-x-2">
        <button className="swiper-button-prev bg-blue-500 text-white p-2 rounded-full shadow hover:bg-blue-600">
          ◀
        </button>
        <button className="swiper-button-next bg-blue-500 text-white p-2 rounded-full shadow hover:bg-blue-600">
          ▶
        </button>
      </div>
        </article>
      </section>
    </div>
  );
};

export default Home;
