import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Slider1 from "./sliders/Slider1";
import Slider3 from "./sliders/Slider3";
import Slider2 from "./sliders/Slider2";

const slides = [<Slider1 />, <Slider2 />, <Slider3 />];

export default function MentorshipCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full flex flex-col items-center gap-4">
      {/* Slider Wrapper */}
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-full flex items-center justify-center">
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center gap-4">
        <button
          onClick={handlePrev}
          className={`rounded-full p-2 ${
            currentIndex === 0
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-[#292666] text-white hover:bg-[#292666]"
          }`}
          disabled={currentIndex === 0}
        >
          <BsChevronLeft />
        </button>

        {/* Dots Navigation */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-[#292666] scale-110" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>

        <button
          onClick={handleNext}
          className={`rounded-full p-2 ${
            currentIndex === slides.length - 1
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-[#292666] text-white hover:bg-[#292666]"
          }`}
          disabled={currentIndex === slides.length - 1}
        >
          <BsChevronRight />
        </button>
      </div>
    </div>
  );
}
