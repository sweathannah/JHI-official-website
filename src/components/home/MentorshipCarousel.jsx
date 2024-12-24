import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Slider1 from "./sliders/Slider1";
import Slider3 from "./sliders/Slider3";
import Slider2 from "./sliders/Slider2";


const slides = [
  <Slider1 />,
  <Slider2 />,
  <Slider3 />,
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
    <div className="relative w-full overflow-hidden">
      {/* Slider */}
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full flex items-center">
            {slide}
          </div>
        ))}
      </div>
    
    
      {/* Navigation Buttons */}
      <div className="absolute bottom-0 right-8 flex gap-3 w-fit">
        <button
          onClick={handlePrev}
          className={`transform rounded-full p-1 ${
            currentIndex === 0
              ? "bg-gray-300 text-gray-600" // Inactive style
              : "bg-blue-600 text-white hover:bg-blue-500" // Active style
          }`}
        >
          <BsChevronLeft className={currentIndex === 0 ? "text-gray-600" : "text-white"} />
        </button>
        <button
          onClick={handleNext}
          className={`rounded-full p-1 ${
            currentIndex === slides.length - 1
              ? "bg-gray-300 text-gray-600" // Inactive style
              : "bg-blue-600 text-white hover:bg-blue-500" // Active style
          }`}
        >
          <BsChevronRight className={currentIndex === slides.length - 1 ? "text-gray-600" : "text-white"} />
        </button>
      </div>


      {/* Dots */}
      <div className="flex justify-center">
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
