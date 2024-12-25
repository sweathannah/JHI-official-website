import { useState } from "react";
import { motion } from "framer-motion";

const News_Stories = () => {
  

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
              News & Stories
            </motion.div>
          </h1>
      </section>

      <section className="lg:p-[3rem] p-[1rem] flex lg:flex-row flex-col justify-between">
        <article className="flex flex-col gap-[3rem] w-[68%]">
          <div style={{ backgroundImage: "url('/images/header.jpeg')" }}
          className="bg-cover bg-no-repeat w-[full] lg:h-[30rem] h-[15rem] relative flex items-end justify-start p-[2rem] "
          >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-45"></div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="z-30 text-start"
            >
              <h1 className="text-white lg:text-[2rem] lg:leading-[2.875rem] font-bold font-[Montserrat]">
                Empowering Opportunities: Thriving Youth Summit
              </h1>
              <a href="#">
                <button className="lg:mt-4 lg:px-[3rem] py-[1rem] bg-transparent border-[1px] text-white rounded-[0.5rem] hover:shadow-lg hover:shadow-[#292666] hover:text-[1.1rem] transition font-[700] text-[1rem]">
                Read More
                </button>
              </a>
            </motion.div>

          </div>
        </article>

        <article className="w-[30%] flex flex-row lg:flex-col">
          <h2 className="text-[#292666] font-[600] text-[2rem] mb-[1rem]">
            Recent Posts
          </h2>
          <div className="border-[1px] p-[1.25rem] rounded-[0.5rem] text-[#333333] ">
            <h3 className="font-[500] text-[1.25rem] mb-[0.5rem] ">
              Research Writing And Academic Publication Techniques
            </h3>
            <p className="font-[400] text-[0.875rem] ">
              Saturday, December 10, 2024 
            </p>
          </div>
        </article>
      </section>
    </>
  );
};

export default News_Stories;
