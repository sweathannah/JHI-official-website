import React from "react";
import { motion } from "framer-motion";
import {
  imageVariants,
  textScaleVariants,
  textVariants,
} from "../../../animation/animation";
import LazyBackground from "../../LazyBackground";

export default function Slider1(props) {
  return (
    <>
      <div className="grid grid-cols-1 w-full max-w-[70%] mx-auto justify-center items-center">
        <div className=" hidden h-12 md:grid grid-cols-2 gap-0">
          <p className=""></p>
          <p className=" p-2 bg-[#292666] rounded-t-2xl w-fit text-white border-b-[1px]">
            <span>Mentorship Programs</span>
          </p>
        </div>
        <div className="grid grid-cols-2 h-full w-full">
          <LazyBackground
            src="/images/JHI_football.jpeg"
            className="bg-cover bg-center rounded-tl-3xl rounded-bl-3xl"
            variants={imageVariants}>
             {" "}
          </LazyBackground>
         
          <div className=" p-8 rounded-r-3xl bg-[#292666]">
            <div className=" flex flex-col gap-4 p-8 bg-white text-gray-700 rounded-3xl">
              <motion.h3
                variants={textVariants}
                initial="initial"
                whileInView="inView"
                viewport={{ once: true, amount: 0.5 }}
                className="font-[600] text-[1.5rem] mb-[0.9rem]"
              >
                Football Program
              </motion.h3>
              <motion.p
                variants={textScaleVariants}
                initial="initial"
                whileInView="inView"
                viewport={{ once: true, amount: 0.5 }}
                className="mb-[3rem]"
              >
                Our Football Program goes beyond the game. it’s about discipline, teamwork, and personal growth. Through structured training, competitive matches, and mentorship, we nurture young talents, promote physical well-being, and instill values that extend beyond the field.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Design (Hidden on Large Screens) */}
      <div className="lg:hidden flex flex-col items-center bg-[#292666] text-white rounded-2xl p-6 relative">
        {/* Heading and Text */}
        <div className="text-center">
          <h3 className="text-xl font-semibold">Football Program</h3>
          <p className="mt-2 text-sm">
            Our Football Program goes beyond the game. It’s about discipline, teamwork, and personal growth. Through structured training, competitive matches, and mentorship, we nurture young talents and promote well-being.
          </p>
        </div>

        {/* Small tilted images */}
        <div className="relative w-full flex justify-center mt-4">
          <img
            src="/images/JHI_football.jpeg"
            className="w-20 h-20 absolute top-0 left-6 transform rotate-[-10deg] rounded-lg"
            alt="Football Training"
          />
          <img
            src="/images/JHI_team.jpeg"
            className="w-16 h-16 absolute top-4 right-6 transform rotate-[15deg] rounded-lg"
            alt="Football Team"
          />
          {/* Dotted Arrow for decoration */}
          <div className="absolute bottom-[-10px] w-16 h-2 border-dotted border-b-2 border-white transform rotate-[-10deg]"></div>
        </div>
      </div>

    </>
  );
}
