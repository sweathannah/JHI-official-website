import React, { useState } from 'react';
import './styles/home.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Swiper modules
import { Pagination, Navigation } from 'swiper/modules';


const Home = () => {
  

  return (
    <div className="font-[Montserrat]">
      
      <section className="w-full h-[100vh] bg-cover bg-no-repeat flex flex-col justify-between" style={{ backgroundImage: 'url(../public/images/header.jpeg)' }}>
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-45 lg:mt-[10rem] mt-[6rem] h-full"></div>

        {/* Content Section */}
        <div className="relative z-10 h-fit flex flex-col justify-center items-start text-start lg:px-[6.25rem] px-[1rem] lg:space-y-[2.5rem]">
          <h1 className="text-white text-[1.8rem] lg:text-[3.25rem] font-bold lg:mt-[7rem] mt-[5rem] leading-[2rem] lg:leading-[3.875rem] ">
            Empowering Individuals & Communities to thrive through Mentorship, Impact Projects & Community Building
          </h1>
          <p className="text-white text-lg lg:text-[1.4rem] lg:mt-[1.5rem] mt-[3rem] max-w-2xl">
            The Jimoh Habibullah Initiative is an NGO dedicated to fostering empathy,
            empowerment, and community growth. We offer ...
          </p>
          <button className="my-[2.125rem] lg:px-[3.06rem] px-[2rem] py-[1.25rem] bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-[700]">
            Learn More
          </button>
        </div>

        {/* Arrows and Tabs Section */}
        <div className="relative z-10 flex justify-end items-center space-x-[1.3rem] px-4 pb-4">
          <img src="./images/arrow_left.svg" alt="" className="w-fit" />
          <img src="./images/tab1.svg" alt="" />
          <img src="./images/tab2.svg" alt="" />
          <img src="./images/tab1.svg" alt="" />
          <img src="./images/arrow_right.svg" alt="" className="w-fit" />
        </div>
      </section>

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
        <article className='flex flex-row flex-wrap items-center lg:gap-[10.56rem] gap-[3rem]'>
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
            navigation
            spaceBetween={30}
            slidesPerView={1}
            className="w-full h-fit"
          >
            <SwiperSlide>
              <div className="flex justify-center">
                <img src="/images/header_image2.svg" alt="slide-2" className='w-[50%] rounded-s-[1.875rem] h-fit' />
                <div className="p-[1.875rem] bg-[#292666] rounded-e-[1.875rem] w-[50%]">
                  <div className='bg-white rounded-[1.875rem] p-[1.875rem] h-full text-[#333333]'>
                    <h3 className=' font-[600] text-[1.5rem] mb-[0.75rem] '>Mentorship Programs</h3>
                    <p className='font-[400] text-[1rem] leading-[1.93rem]'>
                      Our Positive Impact Projects tackle social, economic, and environmental issues, while our Community Building Initiatives promote social cohesion through events and training. Our approach emphasizes collaboration, sustainability, cultural sensitivity, and empowerment. By focusing on these principles, we aim to drive transformative change and enable individuals and communities to reach their full potential.
                    </p>
                    <a href="#" className='text-[#FFAA00] font-normal text-[1rem] my-[1.5rem] '>
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center space-x-4">
                <img src="/images/about_image.svg" alt="slide-1" />
                <div className="p-4 bg-[#f3f3f3] rounded-lg">
                  <h3>Mentorship Programs</h3>
                  <p>Your slide content goes here.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center space-x-4">
                <img src="/images/header_image3.svg" alt="slide-3" />
                <div className="p-4 bg-[#f3f3f3] rounded-lg">
                  <h3>Impact Projects</h3>
                  <p>Your slide content goes here.</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </article>
      </section>
    </div>
  );
};

export default Home;
