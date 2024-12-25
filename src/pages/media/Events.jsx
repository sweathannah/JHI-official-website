import { useState } from "react";
import { motion } from "framer-motion";

const Events = () => {
    const [activeTab, setActiveTab] = useState("photos");

  return (
    <>
      {/* Header Section */}
      <section
        style={{ backgroundImage: "url('/images/header.jpeg')" }}
        className="bg-cover bg-no-repeat h-[100vh] w-full relative flex items-center justify-center"
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-45"></div>
          <h1 className="text-white text-[52px] leading-[62px] text-center font-bold font-[Montserrat] z-30">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Events
            </motion.div>
          </h1>
      </section>

      <section className="py-10 px-[2rem]">
        {/* Intro Section */}
        <article className="w-fit m-auto text-center flex flex-col items-center">
            <h4 className="my-[1.25rem] text-[#292666] font-[600] lg:text-[2.5rem] text-[1.8rem]">
                Past & Upcoming Events
            </h4>
            <p className="font-[400] text-[1.125rem] leading-[1.9rem] text-[#333333] text-center mb-10 lg:max-w-[70rem] max-w-[20rem]">
                At JHI, every event is a story worth sharing. Explore highlights from past events and stay updated on upcoming opportunities. Be part of the journey, relive the moments, and create new ones! 
            </p>

            {/* Tab Switcher */}
            <div className="flex justify-center mb-16 bg-[#05175F26] rounded-[1.88rem] p-[0.3rem]">
                <button
                className={`lg:px-[5.4rem] px-[3rem] py-[1.125rem] rounded-full font-medium text-sm ${
                    activeTab === "photos"
                    ? "bg-[#292666] text-white"
                    : "text-[#333333]"
                }`}
                onClick={() => setActiveTab("photos")}
                >
                    Past Events
                </button>
                <button
                className={`lg:px-[5.4rem] px-[3rem] py-[1.125rem] rounded-full font-medium text-sm ${
                    activeTab === "videos"
                    ? "bg-[#292666] text-white"
                    : "text-[#333333]"
                }`}
                onClick={() => setActiveTab("videos")}
                >
                    Upcoming Events
                </button>
            </div>
        </article>


      </section>
    </>
  );
};

export default Events;
