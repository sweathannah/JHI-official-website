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
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      name: " Taofeeq Alata",
      position: "Chief Operating Officer",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      name: "Princewell Udochukwu",
      position: "Operational Manager ",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      name: "Michael Oluwaseun",
      position: "Social Media Manager",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      name: "Daud Salahudeen",
      position: "Lead Graphic Designer",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      name: "Yisa-Apata Taofeek ",
      position: "Director of Plannings",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      name: "Abeeb MUTALIB",
      position: "Lead at Grant and Documentation",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      name: "Aishat Opeyemi",
      position: "Director of communication",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
  ];

  const technicalTeam = [
    {
      name: "Makanjuola Ayanfe",
      position: "Web project Manager",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      name: "Durosinmi Quadri",
      position: "UI/UX Designer I",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      name: "Atolagbe Joshua",
      position: "UIUX designer II",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      name: " Yusuf Roheemat",
      position: "UI/UX Designer III",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      name: "Issa Wasilat",
      position: "Project Manager team",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      name: "Bashir Sultanat",
      position: "Front-end developer I",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      name: "Olanrewaju AbdulKabee",
      position: "Backend Developer",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      name: "Bisiriyu Olamiposi",
      position: "Web developer",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
  ];

  return (
    <>
      <section className="bg-[url('images/header_image3.svg')] bg-cover bg-no-repeat h-[100vh] w-full relative flex items-center justify-center">
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
                <div className="flex justify-center items-center gap-4 mt-5">
                  <a href="#">
                    <img src="/images/aboutImg/in.png" alt="linkedIn" />
                  </a>
                  <a href="#">
                    <img src="/images/aboutImg/x.png" alt="twitter" />
                  </a>
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
                <div className="flex justify-center items-center gap-4 mt-5">
                  <a href="#">
                    <img src="/images/aboutImg/in.png" alt="linkedIn" />
                  </a>
                  <a href="#">
                    <img src="/images/aboutImg/x.png" alt="twitter" />
                  </a>
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
