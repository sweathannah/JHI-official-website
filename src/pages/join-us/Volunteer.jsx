import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { motion } from "framer-motion";
import {
  bannerVariant,
  textVariants,
  textScaleVariants,
} from "../../animation/animation";

const Volunteer = () => {
  return (
    <>
      <section className="bg-[url('/images/header.jpeg')] bg-cover bg-no-repeat h-[100vh] w-full relative flex items-center justify-center font-[Montserrat]">
        {/* Background Overlay  */}
        <div className="absolute inset-0 bg-[#99DCE380] bg-opacity-45 "></div>

        <motion.h1
          variants={bannerVariant}
          initial="initial"
          animate="animate"
          className="text-white text-h1 leading-[62px] text-center font-bold font-[Montserrat] z-30"
        >
          Volunteer
        </motion.h1>
      </section>
      <section className="font-[Montserrat] text-[1.5rem] leading-[2rem] text-white bg-[#292666]  mb-[7.5rem] p-12">
        <div className="max-w-[82rem] mx-auto  flex flex-col xl:flex-row justify-center gap-16 xl:gap-10 items-center min-h-[40rem]">
          <motion.div
            variants={textVariants}
            initial="initial"
            whileInView="inView"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="font-semibold mb-4">Become a Volunteer</h2>
            <p className="max-w-[34rem] mb-8">
              We believe in the power of community and collective action.
              Volunteers like you make a real difference in the lives of those
              we serve. By donating your time, skills and passion, you can help
              us create lasting change and improve the lives of young
              individuals .
            </p>
            <p className="text-[#FFAA00] text-[1rem] leading-[1.25rem] font-bold">
              <a href="#volunteer" className="flex items-center gap-2">
                Join us Now <HiOutlineArrowSmRight />{" "}
              </a>
            </p>
          </motion.div>
          <motion.div
            variants={textScaleVariants}
            initial="initial"
            whileInView="inView"
            viewport={{ once: true, amount: 0.5 }}
            className="bg-[#C4C4C4] w-[50%] p-8 space-y-7 min-w-[22rem]"
          >
            <p className="text-[1rem] leading-[1.25rem] font-bold text-center text-black">
              Volunteers Form
            </p>
            <input
              className="w-full h-8 focus:outline-none placeholder:text-[1rem] placeholder:leading-[1.25rem] placeholder:text-[#6D6D6D26] placeholder:font-[Montserrat] placeholder:font-bold pl-4 bg-white"
              type="text"
              placeholder="Full Name"
            />
            <input
              className="w-full h-8 focus:outline-none placeholder:text-[1rem] placeholder:leading-[1.25rem] placeholder:text-[#6D6D6D26] placeholder:font-[Montserrat] placeholder:font-bold pl-4 bg-white"
              type="email"
              placeholder="Email Address"
            />
            <input
              className="w-full h-8 focus:outline-none placeholder:text-[1rem] placeholder:leading-[1.25rem] placeholder:text-[#6D6D6D26] placeholder:font-[Montserrat] placeholder:font-bold pl-4 bg-white"
              type="number"
              placeholder="Phone Number"
            />
            <input
              className="w-full h-8 focus:outline-none placeholder:text-[1rem] placeholder:leading-[1.25rem] placeholder:text-[#6D6D6D26] placeholder:font-[Montserrat] placeholder:font-bold pl-4 bg-white"
              type="text"
              placeholder="Address"
            />
            <p className="text-[1rem] leading-[1.25rem] font-bold text-center text-black">
              <a href="#form">Link to fill google Form</a>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Volunteer;
