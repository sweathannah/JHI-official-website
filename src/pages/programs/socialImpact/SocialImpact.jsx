import React from "react";
import {
  bannerVariant,
  textVariants,
  textScaleVariants,
  imageVariants,
  viewport,
} from "../../../animation/animation";
import {motion} from 'framer-motion'

const SocialImpact = () => {
  return (
    <>
      <section className="bg-[url('/images/header.jpeg')] bg-cover bg-no-repeat h-[100vh] w-full relative flex items-center justify-center font-[Montserrat]">
        {/* Background Overlay  */}
        <div className="absolute inset-0 bg-black bg-opacity-45 "></div>

        <motion.h1
          variants={bannerVariant}
          initial="initial"
          animate="animate"
          className="text-white text-h1 leading-[62px] text-center font-bold font-[Montserrat] z-30"
        >
          Positive Impact
        </motion.h1>
      </section>
      <section className="max-w-[80.5rem] mx-auto px-6 mt-[7.5rem]">
        <motion.div
          variants={textVariants}
          initial="initial"
          whileInView="inView"
          viewport={viewport}
        >
          <h2 className="text-[#292666] text-center text-[2.5rem] leading-[3rem] font-semibold">
            Social Impact & Advocacy Projects
          </h2>
          <p className="text-[1.2rem] leading-[1.85rem] text-[#333333] mt-5 text-center">
            Through targeted projects, this program addresses key social,
            economic, and environmental issues. These initiatives aim to make a
            measurable, lasting impact on communities by tackling challenges
            like education, healthcare, poverty alleviation, and environmental
            sustainability.
          </p>
        </motion.div>
      </section>
      <section className="max-w-[80.5rem] mx-auto px-6 my-[7.5rem] font-[Montserrat] space-y-[7.5rem]">
        <div className="space-y-16">
          <motion.h2
            variants={textVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            className="text-[#292666] text-center text-[2.5rem] leading-[3rem] font-semibold"
          >
            Education For All Initiative
          </motion.h2>
          <motion.div
            variants={imageVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            className="h-[28rem] bg-[#333333]"
          ></motion.div>
          <motion.p
            variants={textScaleVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            className="text-[1.8rem] leading-[2.5rem] md:text-[2.5rem] md:leading-[3rem] text-black text-center"
          >
            Expanding access to quality education, supporting schools, and
            providing scholarships to underprivileged students.
          </motion.p>
        </div>
        <div className="space-y-16">
          <motion.h2
            variants={textVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            className="text-[#292666] text-center text-[2.5rem] leading-[3rem] font-semibold"
          >
            Healthcare Access Campaign
          </motion.h2>
          <motion.div
            variants={imageVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            className="h-[28rem] bg-[#D9D9D9]"
          ></motion.div>
          <motion.p
            variants={textScaleVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            className="text-[1.8rem] leading-[2.5rem] md:text-[2.5rem] md:leading-[3rem] text-black text-center"
          >
            {" "}
            Ensuring access to essential healthcare services, including medical
            outreach, awareness campaigns, and health education.
          </motion.p>
        </div>
        <div className="space-y-16">
          <motion.h2
            variants={textVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            className="text-[#292666] text-center text-[2.5rem] leading-[3rem] font-semibold"
          >
            Economic Empowerment Programs
          </motion.h2>
          <motion.div
            variants={imageVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            className="h-[28rem] bg-[#258CCF]"
          ></motion.div>
          <motion.p
            variants={textScaleVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            className="text-[1.8rem] leading-[2.5rem] md:text-[2.5rem] md:leading-[3rem] text-black text-center"
          >
            Job training, entrepreneurship workshops, and access to resources
            for small businesses and individuals.
          </motion.p>
        </div>
        <div className="space-y-16">
          <motion.h2 className="text-[#292666] text-center text-[2.5rem] leading-[3rem] font-semibold">
            Environmental Sustainability Projects
          </motion.h2>
          <motion.div
            variants={imageVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            className="h-[28rem] bg-[#E0EFF8]"
          ></motion.div>
          <motion.p
            variants={textScaleVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            className="text-[1.8rem] leading-[2.5rem] md:text-[2.5rem] md:leading-[3rem] text-black text-center"
          >
            Awareness programs, clean-up drives, tree planting, and sustainable
            agricultural initiatives.
          </motion.p>
        </div>
        <div className="space-y-16">
          <motion.h2
            variants={textVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            className="text-[#292666] text-center text-[2.5rem] leading-[3rem] font-semibold"
          >
            Emergency Response and Humanitarian Aid
          </motion.h2>
          <motion.div
            variants={imageVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            className="h-[28rem] bg-[#05175F]"
          ></motion.div>
          <motion.p
            variants={textScaleVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            className="text-[1.8rem] leading-[2.5rem] md:text-[2.5rem] md:leading-[3rem] text-black text-center"
          >
            Crisis support, including disaster relief and post-disaster recovery
          </motion.p>
        </div>
        <div className="space-y-16">
          <motion.h2
            variants={textVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            className="text-[#292666] text-center text-[2.5rem] leading-[3rem] font-semibold"
          >
            Policy Advocacy Campaigns
          </motion.h2>
          <motion.div
            variants={imageVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            className="h-[28rem] bg-[#F5F5F5]"
          ></motion.div>
          <motion.p
            variants={textScaleVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            className="text-[1.8rem] leading-[2.5rem] md:text-[2.5rem] md:leading-[3rem] text-black text-center"
          >
            Raising awareness and pushing for policy changes to benefit
            marginalized communities.
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default SocialImpact;
