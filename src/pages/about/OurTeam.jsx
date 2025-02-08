import React from "react";
import { motion } from "framer-motion";
import {
  bannerVariant,
  imageVariants,
  textScaleVariants,
  textVariants,
  viewport,
} from "../../animation/animation";
import LazyLoad from "react-lazyload";

const OurTeam = () => {
  const managementTeam = [
    {
      name: "Jimoh Habibullah",
      position: "Founder/ Executive Director",
      image: "/images/aboutImg/teamImg_1.png",
      icon1: "/images/aboutImg/in.png",
      icon2: "/images/aboutImg/x.png",
    },
    {
      name: " Taofeeq Alata",
      position: "Chief Operating Officer",
      image: "/images/aboutImg/teamImg_1.png",
      icon1: "/images/aboutImg/in.png",
      icon2: "/images/aboutImg/x.png",
    },
    {
      name: "Ijeoma Hamzee",
      position: "Communication Manager",
      image: "/images/aboutImg/teamImg_1.png",
      icon1: "/images/aboutImg/in.png",
      icon2: "/images/aboutImg/x.png",
    },
    {
      name: "Rahman Islau",
      position: "Director of Programmers",
      image: "/images/aboutImg/teamImg_1.png",
      icon1: "/images/aboutImg/in.png",
      icon2: "/images/aboutImg/x.png",
    },
    {
      name: "Sunday Festus",
      position: "Director of Community Engagement/Programs",
      image: "/images/aboutImg/teamImg_1.png",
      icon1: "/images/aboutImg/in.png",
      icon2: "/images/aboutImg/x.png",
    },
    {
      name: "Edward Hamzan",
      position: "Communication Assistant",
      image: "/images/aboutImg/teamImg_1.png",
      icon1: "/images/aboutImg/in.png",
      icon2: "/images/aboutImg/x.png",
    },
    {
      name: "Basit Faruoq",
      position: "Programmers Assistant",
      image: "/images/aboutImg/teamImg_1.png",
      icon1: "/images/aboutImg/in.png",
      icon2: "/images/aboutImg/x.png",
    },
    {
      name: "Shina Lambed",
      position: "Programmers Coordinator",
      image: "/images/aboutImg/teamImg_1.png",
      icon1: "/images/aboutImg/in.png",
      icon2: "/images/aboutImg/x.png",
    },
  ];

  const technicalTeam = [
    {
      name: "Jimoh Habibullah",
      position: "Chief Technology Officer",
      image: "/images/aboutImg/teamImg_1.png",
      icon1: "/images/aboutImg/in.png",
      icon2: "/images/aboutImg/x.png",
    },
    {
      name: " Taofeeq Alata",
      position: "Project Manager",
      image: "/images/aboutImg/teamImg_1.png",
      icon1: "/images/aboutImg/in.png",
      icon2: "/images/aboutImg/x.png",
    },
    {
      name: "Ijeoma Hamzee",
      position: "Senior Web Developer",
      image: "/images/aboutImg/teamImg_1.png",
      icon1: "/images/aboutImg/in.png",
      icon2: "/images/aboutImg/x.png",
    },
    {
      name: "Rahman Islau",
      position: "Senior UI/UX Designer",
      image: "/images/aboutImg/teamImg_1.png",
      icon1: "/images/aboutImg/in.png",
      icon2: "/images/aboutImg/x.png",
    },
    {
      name: "Sunday Festus",
      position: "UI/UX Designer",
      image: "/images/aboutImg/teamImg_1.png",
      icon1: "/images/aboutImg/in.png",
      icon2: "/images/aboutImg/x.png",
    },
    {
      name: "Edward Hamzan",
      position: "Graphics Designer",
      image: "/images/aboutImg/teamImg_1.png",
      icon1: "/images/aboutImg/in.png",
      icon2: "/images/aboutImg/x.png",
    },
    {
      name: "Basit Faruoq",
      position: "Programmer 1",
      image: "/images/aboutImg/teamImg_1.png",
      icon1: "/images/aboutImg/in.png",
      icon2: "/images/aboutImg/x.png",
    },
    {
      name: "Shina Lambed",
      position: "Junior Designer",
      image: "/images/aboutImg/teamImg_1.png",
      icon1: "/images/aboutImg/in.png",
      icon2: "/images/aboutImg/x.png",
    },
  ];

  return (
    <>
      <section className="bg-[url('/images/header.jpeg')] bg-cover bg-no-repeat h-[100vh] w-full relative flex items-center justify-center">
        {/* Background Overlay  */}
        <div className="absolute inset-0 bg-black bg-opacity-45 "></div>

        <motion.h1
          variants={bannerVariant}
          initial="initial"
          animate="animate"
          className="text-white text-[52px] leading-[62px] text-center font-bold font-[Montserrat] z-30"
        >
          Our Team
        </motion.h1>
      </section>
      <section className="max-w-[76.5rem] mx-auto mt-[6.25rem]">
        <div>
          <motion.h2
            variants={textVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            className="text-[#292666] text-center text-[2.5rem] leading-[3rem] font-semibold"
          >
            Management Team
          </motion.h2>
          <motion.p
            variants={textVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            className="text-[1.2rem] leading-[1.85rem] text-[#333333] mt-5 text-center"
          >
            Our team is a diverse group of professionals with a shared passion
            for creating a fun, engaging, and human-centric environment where
            creativity, collaboration, and community thrive.
          </motion.p>
        </div>
        <div className="flex justify-center items-center gap-x-8 gap-y-14 flex-wrap mt-[3.75rem]">
          {managementTeam.map(({ name, position, image, icon1, icon2 }, i) => (
            <div key={i} className="space-y-4 w-[17rem] h-[28rem]">
              <motion.div
                variants={imageVariants}
                initial="initial"
                whileInView="inView"
                viewport={viewport}
              >
                <LazyLoad height={300} offset={200}>
                  <img
                    className="w-[17rem] h-[18.5rem]"
                    src={image}
                    alt={`team${i}`}
                  />
                </LazyLoad>
              </motion.div>
              <motion.div
                variants={textScaleVariants}
                initial="initial"
                whileInView="inView"
                viewport={viewport}
              >
                <h3 className="text-[1.25rem] font-semibold leading-[2.5rem] text-center">
                  {name}
                </h3>
                <p className="text-[1rem] leading-[1.25rem] text-center">
                  {position}
                </p>
                <div className="flex justify-center items-center gap-4">
                  <img src={icon1} alt="linkedIn" />
                  <img src={icon2} alt="twitter" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-[76.5rem] mx-auto mt-[6.25rem]">
        <motion.div
          variants={textVariants}
          initial="initial"
          whileInView="inView"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-[#292666] text-center text-[2.5rem] leading-[3rem] font-semibold">
            Technical Team
          </h2>
          <p className="text-[1.2rem] leading-[1.85rem] text-[#333333] mt-5 text-center">
            Our team is a diverse group of professionals with a shared passion
            for creating a fun, engaging, and human-centric environment where
            creativity, collaboration, and community thrive.
          </p>
        </motion.div>
        <div className="flex justify-center items-center gap-x-8 gap-y-14 flex-wrap mt-[3.75rem]">
          {technicalTeam.map(({ name, position, image, icon1, icon2 }, i) => (
            <div key={i} className="space-y-4 w-[17rem] h-[28rem]">
              <motion.div
                variants={imageVariants}
                initial="initial"
                whileInView="inView"
                viewport={{ once: true, amount: 0.5 }}
              >
                <LazyLoad height={300} offset={200}>
                  <img
                    className="w-[17rem] h-[18.5rem]"
                    src={image}
                    alt={`team${i}`}
                  />
                </LazyLoad>
              </motion.div>
              <motion.div
                variants={textScaleVariants}
                initial="initial"
                whileInView="inView"
                viewport={{ once: true, amount: 0.5 }}
              >
                <h3 className="text-[1.25rem] font-semibold leading-[2.5rem] text-center">
                  {name}
                </h3>
                <p className="text-[1rem] leading-[1.25rem] text-center">
                  {position}
                </p>
                <div className="flex justify-center items-center gap-4">
                  <img src={icon1} alt="linkedIn" />
                  <img src={icon2} alt="twitter" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurTeam;
