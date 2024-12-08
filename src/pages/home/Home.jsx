import React, { useState } from 'react';
import './styles/home.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Swiper modules
import { Pagination, Navigation } from 'swiper/modules';
import Hero from '../../components/Hero';


const Home = () => {
  

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

      <section style={{ backgroundImage: 'url(/images/bgs/impact_image.svg)'}} className='w-full h-fit bg-cover bg-no-repeat py-[10rem]'>
        <h2 className='w-fit m-auto lg:pt-0 pt-[8rem] lg:text-[2.5rem] text-[2rem] text-[#292666] font-semibold '>Our Impact</h2>
        <article className="w-fit m-auto mt-[5rem] flex flex-wrap justify-center items-center  text-[#292666] gap-[2.75rem] px-1">
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
        navigation
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full h-fit"
>
            <SwiperSlide>
            <div className="flex justify-center h-full">
              <div className="w-[45%] flex items-stretch">
                <img src="/images/header_image2.svg" alt="slide-2" className="w-full h-full object-cover rounded-s-[1.875rem]" />
              </div>
              <div className='flex flex-col  w-[45%]'>
                <div className="flex items-start bg-[#292666] text-white px-4 py-2 rounded-t-[1rem] z-10 text-sm w-fit">
                  Mentorship Programs
                </div>
                <div className="p-[1.875rem] bg-[#292666] rounded-e-[1.875rem] ">
                <div className="bg-white rounded-[1.875rem] p-[1.875rem] h-full text-[#333333] mb-[4rem]">
                  <h3 className="font-[600] text-[1.5rem] mb-[0.9rem]">Mentorship Programs</h3>
                  <p className="font-[400] text-[0.9rem] leading-[1.5rem] w-[90%] mb-[1.5rem]">
                    Our Positive Impact Projects tackle social, economic, and environmental issues, while our Community Building Initiatives promote social cohesion through events and training. Our approach emphasizes collaboration, sustainability, cultural sensitivity, and empowerment. By focusing on these principles, we aim to drive transformative change and enable individuals and communities to reach their full potential.
                  </p>
                  <a href="#" className="text-[#FFAA00] font-normal text-[1rem] my-[1.5rem] flex flex-row">
                    Read More
                    <img src="/images/yellow_arrow.svg" alt="Yellow arrow right" className='px-[0.6rem]' />
                  </a>
                </div>
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

      <section style={{ backgroundImage: 'url(/images/bgs/media_background.svg)'}} className='w-full lg:h-[65rem] h-[140rem] bg-cover bg-no-repeat px-6'>
        <article className='w-fit m-auto text-center flex flex-col items-center max-w-[52rem] pt-[10rem]'>
          <h3 className='font-[600] text-[#292666] text-[0.8rem] px-[1rem] py-[0.5rem] bg-[#05175F40] w-fit rounded-[0.3rem] '>
            Media
          </h3>
          <h4 className='my-[1.25rem] text-[#292666] font-[600] lg:text-[2.3rem] text-[1.8rem]'>
            How We Have Drive Transformative Change And Enable Individuals & Communities
          </h4>
          <p className='font-[400] text-[1.125rem] leading-[1.9rem] text-[#333333]'>
          By focusing on these principles, we aim to drive transformative change and enable individuals and communities to reach their full potential.
          </p>
          <a href="#" className='bg-[#258CCF] rounded-[0.5rem] py-[1rem] px-[3.06rem] my-[2.5rem]'>
            <button className='text-[#FFFFFF] font-[700] text-[1rem] Mulish'>
              See More
            </button>
          </a>
        </article>
        <article className='mt-5'>
          <div className='flex flex-row m-auto w-fit gap-[2.5rem] flex-wrap relative z-10'>
            <div className='w-fit rounded-[0.5rem] lg:rounded-[1.25rem] lg:p-[1.25rem] p-[1rem] m-auto bg-[rgba(255,255,255,0.5)]' >
              <img src="/images/header_image3.svg" alt="7 jhi's at an event" className='max-w-[18rem] rounded-[0.5rem] ' />
            </div>
            <div className='w-fit rounded-[0.5rem] lg:rounded-[1.25rem] lg:p-[1.25rem] p-[1rem] bg-[rgba(255,255,255,0.5)]' >
              <img src="/images/header.jpeg" alt="Group photo" className='max-w-[18rem] h-[12rem] rounded-[0.5rem]' />
            </div>
         </div>
         <div className='flex absolute lg:translate-y-[-32%]'>
            <div className='lg:px-[8rem] flex flex-row flex-wrap lg:gap-[0.8rem] gap-[2.5rem] items-end '>
              <div className="relative max-w-[19.5rem] lg:mt-0 mt-[2.5rem]">
                <img
                  src="/images/header_image2.svg"
                  alt="Mentorship Programs"
                  className="w-full h-full object-cover lg:rounded-[1.25rem] rounded-[0.5rem]"
                />
                <div className="absolute bottom-0 left-0 w-full h-full bg-[#05175FB2] bg-opacity-[70%] flex text-white p-4 lg:rounded-[1.25rem] rounded-[0.5rem] items-end">
                  <p className="text-start font-semibold w-[12rem] items-end">
                    More photos concerning our Mentorship Programs
                  </p>
                </div>
              </div>
              <div className='bg-[#FFAA00] lg:w-[12rem] w-[19rem] lg:h-fit h-[] p-[1rem] rounded-[1.25rem] font-[600] text-[#333333]'>
                <h5 className=' text-[1rem] '>News & Stories</h5>
                <p className='font-[400] text-[0.75rem] max-w-[12.875rem] my-[0.5rem] '>In marking the 2024 International Day of the Girl Child, the JHI...</p>
                <a href="#" className='text-[#258CCF] text-[0.75rem] flex items-center gap-[0.2rem]'>
                  Read More
                  <img src="/images/blue_arrow.svg" alt="blue_arrow" className='w-[0.8rem]' />
                </a>
              </div>
              <div className='bg-[#258CCF] w-[12rem] h-fit p-[1rem] rounded-[1.25rem] font-[600] text-[#FFFFFF]'>
                <h5 className=' text-[1rem] '>Events</h5>
                <p className='font-[400] text-[0.75rem] max-w-[12.875rem] my-[0.5rem] '>The JHI Community had an engaging space on Twitter on Mental Health...</p>
                <a href="#" className='text-[#292666] text-[0.75rem] flex items-center gap-[0.2rem]'>
                  See More
                  <img src="/images/darkblue_arrow.svg" alt="blue_arrow" className='w-[0.8rem]' />
                </a>
              </div>
              <div className="relative max-w-[19.5rem] lg:mt-0 mt-[2.5rem]">
                <img
                  src="/images/skill_image.svg"
                  alt="Mentorship Programs"
                  className="w-full h-full object-cover lg:rounded-[1.25rem] rounded-[0.5rem]"
                />
                <div className="absolute bottom-0 left-0 w-full h-full flex text-white p-4 lg:rounded-[1.25rem] rounded-[0.5rem] items-end">
                  <p className="text-start font-semibold w-[12rem] items-end">
                    More photos on our Positive Impacts Projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section>
        <article className='w-fit m-auto text-center flex flex-col items-center max-w-[52rem] pt-[8rem]'>
          <h3 className='font-[600] text-[#292666] text-[0.8rem] px-[1rem] py-[0.5rem] bg-[#05175F40] w-fit rounded-[0.3rem] '>
            Join Us
          </h3>
          <h4 className='my-[1.25rem] text-[#292666] font-[600] lg:text-[2.3rem] text-[1.8rem]'>
            Meet Our Partners & Sponsors
          </h4>
          <p className='font-[400] text-[1.125rem] leading-[1.9rem] text-[#333333]'>
            Through the gracious support and commitment of our partners, we are able to empower hundreds of people in marginalized communities.
          </p>
        </article>
      </section>

      <section style={{ backgroundImage: 'url(/images/bgs/feedback_background.svg)'}} className='w-full lg:h-[65rem] h-[140rem] bg-cover bg-no-repeat px-6'>
        <article className='flex flex-row flex-wrap items-center lg:gap-[8rem] gap-[3rem]'>
          <div className='max-w-[55.69rem]'>
            <h3 className='font-[600] text-[#292666] text-[0.8rem] px-[1rem] py-[0.5rem] bg-[#05175F40] w-fit rounded-[0.3rem] '>
              Who We Are
            </h3>
            <h4 className='my-[1.25rem] text-[#292666] font-[600] lg:text-[2.5rem] text-[1.8rem] '>
              Success Stories From Those Whom JHI Impacted
            </h4>
            <p className='font-[400] text-[1.125rem] leading-[1.9rem] text-[#333333]'>
              Through a blend of innovation, collaboration, and dedicated effort, these success stories illuminate the path towards a more inclusive, equitable, and empowered future.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Home;
