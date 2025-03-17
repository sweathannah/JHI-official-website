import { motion } from "framer-motion";
import {
  bannerVariant,
  textScaleVariants,
  textVariants,
  imageVariants,
  viewport,
} from "../../../animation/animation";

import LazyBackground from "../../../components/LazyBackground";
const MentorShip = () => {
  return (
    <>
      <section className="bg-[url('/images/header.jpeg')] bg-cover bg-no-repeat h-[100vh] w-full relative flex flex-col items-center justify-center font-[Montserrat]">
        {/* Background Overlay  */}
        <div className="absolute inset-0 bg-black bg-opacity-45 "></div>

        <motion.h1
          variants={bannerVariant}
          initial="initial"
          animate="animate"
          className="text-white text-[2rem] lg:text-[3.25rem] text-center font-bold font-[Montserrat] z-30"
        >
          Mentorship
        </motion.h1>
        <motion.p
          variants={bannerVariant}
          initial="initial"
          animate="animate_p"
          className="text-white font-bold text-center text-lg lg:text-[1.4rem] lg:mt-[3rem] mt-[3rem] lg:max-w-5xl max-w-fit"
        >
          The mentorship and Capacity building program is designed to support
          individuals in their personal and professional development. By
          providing personalized guidance, skill-building workshops, and group
          coaching, the initiative helps individuals unlock their full
          potential.
        </motion.p>
      </section>
      <section className=" mx-auto p-4 font-[Montserrat]">
        <div className="flex flex-wrap gap-[3rem]">
          <div className="flex flex-col justify-center lg:w-[30%]  ">
            <LazyBackground
              src="https://i.pinimg.com/736x/7a/36/e7/7a36e7ef4469b720a44118290b875c6a.jpg"
              className="relative bg-cover bg-no-repeat h-[24rem] pt-[10rem] font-[Mulish] border border-white rounded-lg"
              variants={imageVariants}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent rounded-lg"></div>

              {/* Text Content */}
              <div className="relative z-10 p-6">
                <h2 className="text-white lg:text-[3rem]  leading-[2rem] text-[2rem] font-bold">
                  One - on - One Mentoring
                </h2>
                <p className="text-white lg:text-lg text-[0.8rem] pt-3">
                  Tailored mentorship sessions for personal growth, career development, and overcoming specific challenges.
                </p>
              </div>
            </LazyBackground>
          </div>
          <div className="flex flex-col justify-center lg:w-[30%] w-fit ">
            <LazyBackground
              src="/images/Gallery_images/sec2_image5.svg"
              className="relative bg-cover bg-no-repeat h-[24rem] pt-[10rem] font-[Mulish] border border-white rounded-lg"
              variants={imageVariants}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent rounded-lg"></div>

              {/* Text Content */}
              <div className="relative z-10 p-6">
                <h2 className="text-white lg:text-[3rem] leading-[2rem] text-[2rem] font-bold">
                  Group Coaching Session
                </h2>
                <p className="text-white lg:text-lg text-[0.8rem] pt-3">
                  Focused group discussions and coaching to address common
                  community issues or shared goals.
                </p>
              </div>
            </LazyBackground>
          </div>
          <div className="flex flex-col justify-center lg:w-[30%] w-fit ">
            <LazyBackground
              src="https://i.pinimg.com/736x/74/e0/cc/74e0ccdb618e1b1a93661b28f42fdcb5.jpg"
              className="relative bg-cover bg-no-repeat h-[24rem] pt-[10rem] font-[Mulish] border border-white rounded-lg"
              variants={imageVariants}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent rounded-lg"></div>

              {/* Text Content */}
              <div className="relative z-10 p-6">
                <h2 className="text-white lg:text-[3rem] leading-[2rem] text-[2rem] font-bold">
                  Skills Development Workshops
                </h2>
                <p className="text-white lg:text-lg text-[0.8rem] pt-3">
                Interactive sessions designed to teach practical skills, from
                leadership to technical expertise.
                </p>
              </div>
            </LazyBackground>
          </div>
          <div className="flex flex-col justify-center lg:w-[30%] w-fit ">
            <LazyBackground
              src="https://i.pinimg.com/736x/15/30/3d/15303db09e01eef47d93232e29248d7e.jpg"
              className="relative bg-cover bg-no-repeat h-[24rem] pt-[10rem] font-[Mulish] border border-white rounded-lg"
              variants={imageVariants}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent rounded-lg"></div>

              {/* Text Content */}
              <div className="relative z-10 p-6">
                <h2 className="text-white lg:text-[3rem] leading-[2rem] text-[2rem] font-bold">
                  Women’s Leadership Academy
                </h2>
                <p className="text-white lg:text-lg text-[0.8rem] pt-3">
                  The Women’s Leadership Academy equips women with the skills and confidence to lead, break barriers, and create lasting impact through mentorship and hands-on training
                </p>
              </div>
            </LazyBackground>
          </div>
          <div className="flex flex-col justify-center lg:w-[30%] w-fit ">
            <LazyBackground
              src="https://i.pinimg.com/736x/42/f9/17/42f917dd9ae580177223f99898576600.jpg"
              className="relative bg-cover bg-no-repeat h-[24rem] pt-[10rem] font-[Mulish] border border-white rounded-lg"
              variants={imageVariants}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent rounded-lg"></div>

              {/* Text Content */}
              <div className="relative z-10 p-6">
                <h2 className="text-white lg:text-[3rem] leading-[2rem] text-[2rem] font-bold">
                  Youth Empowerment Network
                </h2>
                <p className="text-white lg:text-lg text-[0.8rem] pt-3">
                  The Youth Empowerment Network fosters growth and innovation by equipping young minds with the skills, mentorship, and opportunities they need to thrive and lead.
                </p>
              </div>
            </LazyBackground>
          </div>
        </div>
      </section>
    </>
  );
};

export default MentorShip;
