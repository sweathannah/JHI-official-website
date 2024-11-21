import React, { useState } from 'react';
import './styles/home.css'

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

      <section className='lg:px-[6.25rem] p-[2rem] lg:py-[10rem] flex flex-row'>
        <article className='lg:w-[50%]'>
          <h3 className='font-[600] text-[#292666] text-[0.8rem] px-[1rem] py-[0.5rem] bg-[#05175F40] w-fit rounded-[0.3rem] '>About Us</h3>
          <h4 className='my-[1.25rem] text-[#292666] font-[600] lg:text-[2.5rem] text-[1.2rem] '>
            Founded On Principles Of Empathy, Empowerment & Community
          </h4>
        </article>
        <article></article>
      </section>
    </div>
  );
};

export default Home;
