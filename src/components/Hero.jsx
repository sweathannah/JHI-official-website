import React, { useEffect, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { motion } from "framer-motion";
import { bannerVariant, buttonVariants } from "../animation/animation";

export default function Hero(props) {
  // Array of background images (update this list as needed)
  const images = [
    './images/header.jpeg', // First image
    '/images/header_image2.svg', // Second image
    './images/header_image3.svg', // Third imagen
    // Add more images if needed
  ];

  // State to keep track of the current background image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle the click on the left arrow
  const handleLeftClick = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Function to handle the click on the right arrow
  const handleRightClick = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Function to handle clicking on one of the tab images
  const handleTabClick = (index) => {
    setCurrentImageIndex(index); // Update the background image based on the clicked tab
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Clean up interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <section
        className="bg-cover bg-no-repeat h-[100vh] w-full relative flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-45"></div>

        {/* Content Section */}
        <div className="relative z-10 h-fit flex flex-col justify-center items-start text-start lg:px-[6.25rem] px-[1rem] lg:space-y-[2.5rem]">
          <motion.h1
            variants={bannerVariant}
            initial="initial"
            animate="animate"
            className="text-white text-[1.8rem] lg:text-[3.25rem] font-bold lg:mt-[7rem] mt-[5rem] leading-[2rem] lg:leading-[3.875rem] "
          >
            Empowering Individuals & Communities to thrive through Mentorship,
            Impact Projects & Community Building
          </motion.h1>
          <motion.p
            variants={bannerVariant}
            initial="initial"
            animate="animate_p"
            className="text-white text-lg lg:text-[1.4rem] lg:mt-[1.5rem] mt-[3rem] max-w-2xl"
          >
            The Jimoh Habibullah Initiative is an NGO dedicated to fostering
            empathy, empowerment, and community growth. We offer ...
          </motion.p>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            className="my-[2.125rem] lg:px-[3.06rem] px-[2rem] py-[1.25rem] bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-[700]"
          >
            Learn More
          </motion.button>
        </div>

        {/* Arrows and Tabs Section */}
        <div className="relative z-10 flex justify-end items-end space-x-[1.3rem] px-4 pb-4">
          {/* Left Arrow */}
          <span
            onClick={handleLeftClick}
            className={`cursor-pointer ${
              currentImageIndex === 0 ? "opacity-50 pointer-events-none" : ""
            }`} // Disable when at first image
          >
            <SlArrowLeft className="w-6 h-6 text-white font-bold" />
          </span>

          {/* Tab Images */}
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Tab ${index + 1}`}
              className="cursor-pointer w-8 h-8 rounded-full"
              onClick={() => handleTabClick(index)} // Update background when tab is clicked
            />
          ))}

          {/* Right Arrow */}
          <span
            onClick={handleRightClick}
            className={`cursor-pointer ${
              currentImageIndex === images.length - 1
                ? "opacity-50 pointer-events-none"
                : ""
            }`} // Disable when at last image
          >
            <SlArrowRight className="w-6 h-6 text-white font-bold" />
          </span>
        </div>
      </section>
    </>
  );
}
