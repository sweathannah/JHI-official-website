import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Slider1 from "./sliders/Slider1";

const slides1 = [
  {
    id: 1,
    title: "Mentorship Programs",
    content: `Our Positive Impact Projects tackle social, economic, and environmental issues, while 
              our Community Building Initiatives promote social cohesion through events and training.
              Our approach emphasizes collaboration, sustainability, cultural sensitivity, and empowerment. 
              By focusing on these principles, we aim to drive transformative change and enable individuals 
              and communities to reach their full potential.`,
    image: "/path-to-image.jpg",
  },
  {
    id: 2,
    title: "Mentorship Programs",
    content: `Our Positive Impact Projects tackle social, economic, and environmental issues, while 
              our Community Building Initiatives promote social cohesion through events and training.
              Our approach emphasizes collaboration, sustainability, cultural sensitivity, and empowerment. 
              By focusing on these principles, we aim to drive transformative change and enable individuals 
              and communities to reach their full potential.`,
    image: "/path-to-image.jpg",
  },
  // Add more slides as needed
];

const slides = [
  <Slider1 />,
  <Slider1 />,
  <Slider1 />,
  <Slider1 />,
  <Slider1 />,
  <Slider1 />,
  <Slider1 />,
]

export default function MentorshipCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      {/* Slider */}
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full flex items-center">
            {slide}
          </div>
        ))}
      </div>
    
    
      {/* Navigation Buttons */}
      <div className="absolute bottom-0 right-0 flex gap-3 w-fit">
        <button
          onClick={handlePrev}
          className="transform bg-blue-600 text-white rounded-full p-1 hover:bg-blue-500"
        >
          <BsChevronLeft className=" text-white"/>
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-600 text-white rounded-full p-1 hover:bg-blue-500"
        >
          <BsChevronRight className=" text-white"/>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-12">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
