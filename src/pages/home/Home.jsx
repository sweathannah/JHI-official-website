import React, { useState } from 'react';
import './styles/home.css'

const Home = () => {
  

  return (
    <div className="font-[Montserrat]">
      
      <section className="w-full h-[100vh] bg-cover bg-no-repeat" style={{ backgroundImage: 'url(../public/images/header.jpeg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-45 lg:mt-[10rem] mt-[6rem] h-full"></div>
        <div className="relative z-10 h-fit flex flex-col justify-center items-start text-start lg:px-[6.25rem] px-[1rem] lg:space-y-[1.5rem] ">
          <h1 className="text-white text-[1.8rem] lg:text-[3.25rem] font-bold lg:mt-[10rem] leading-[2rem] lg:leading-[3.875rem] ">
            Empowering Individuals & Communities to thrive through Mentorship, Impact Projects & Community Building
          </h1>
          <p className="text-white text-lg lg:text-[1.4rem] lg:mt-[1.5rem] mt-[3rem] max-w-2xl">
            The Jimoh Habibullah Initiative is an NGO dedicated to fostering empathy,
            empowerment, and community growth. We offer ...
          </p>
          <button className="mt-[2.125rem] lg:px-[3.06rem] px-[2rem] py-[1.25rem] bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-[700]">
            Learn More
          </button>
          <div className='flex items-end justify-end space-x-[1.3rem] align-middle'>
            <img src="./images/arrow_left.svg" alt="" />
            <img src="./images/tab1.svg" alt="" />
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default Home;
