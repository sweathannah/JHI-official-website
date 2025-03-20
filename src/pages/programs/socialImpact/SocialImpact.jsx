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
      <section className="bg-[url('/images/header.jpeg')] bg-cover bg-no-repeat h-[100vh] w-full relative flex flex-col items-center justify-center font-[Montserrat]">
        {/* Background Overlay  */}
        <div className="absolute inset-0 bg-black bg-opacity-45 "></div>

        <motion.h1
          variants={bannerVariant}
          initial="initial"
          animate="animate"
          className="text-white text-[2rem] lg:text-[3.25rem] text-center font-bold font-[Montserrat] z-30 max-w-[50rem]"
        >
          Social Impact & Advocacy Projects
        </motion.h1>
        <motion.p
          variants={bannerVariant}
          initial="initial"
          animate="animate_p"
          className="text-white font-bold text-center text-lg lg:text-[1.4rem] lg:mt-[3rem] mt-[3rem] lg:max-w-5xl max-w-fit"
        >
          Through targeted projects, this program addresses key social,
          economic, and environmental issues. These initiatives aim to make a
          measurable, lasting impact on communities by tackling challenges
          like education, healthcare, poverty alleviation, and environmental
          sustainability.
        </motion.p>
      </section>

      <section className="flex lg:flex-row flex-col gap-2 justify-between items-center my-[5rem] px-[4rem]">
        <div className="items-start max-w-[50%] space-y-[1rem]">
          <motion.h2
            variants={textVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            className="text-[#292666] text-[3rem] font-semibold"
          >
            Education For All Initiative
          </motion.h2>
          <motion.p
            variants={textScaleVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
           className="font-[400] text-[1rem] text-left text-[#333333]"
          >
            At Jimoh Habibullahi Initiative, we believe that education is the key to breaking the cycle of poverty. Through the Education for All Initiative, we provide scholarships, support schools, and create learning opportunities for underprivileged students, ensuring that every child, regardless of background, has access to quality education and a brighter future.
          </motion.p>
        </div>
        <div>
          <motion.img
            variants={imageVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            src="/images/Programs/education.jpg" 
            alt=" A picture of a South African School." 
            className="h-[25rem] w-full rounded-xl"
          >
          </motion.img>
        </div>
      </section>

      <section className="flex lg:flex-row flex-col gap-2 justify-between items-center my-[5rem] px-[4rem]">
        <div>
          <motion.img
            variants={imageVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            src="/images/Gallery_images/sec2_image5.svg" 
            alt=" A picture of a Healthcare Access Campaign." 
            className="h-[25rem] w-full rounded-xl"
          >
          </motion.img>
        </div>
        <div className="items-start max-w-[50%] space-y-[1rem]">
          <motion.h2
            variants={textVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            className="text-[#292666] text-[3rem] font-semibold"
          >
            Healthcare Access Campaign
          </motion.h2>
          <motion.p
            variants={textScaleVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
           className="font-[400] text-[1rem] text-left text-[#333333]"
          >
            We are committed to ensuring that underserved communities receive essential healthcare services. Through medical outreaches, awareness campaigns, and health education, we empower individuals to lead healthier lives and make informed medical decisions.
          </motion.p>
        </div>
      </section>

      <section className="flex lg:flex-row flex-col gap-2 justify-between items-center my-[5rem] px-[4rem]">
        <div className="items-start max-w-[50%] space-y-[1rem]">
          <motion.h2
            variants={textVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            className="text-[#292666] text-[3rem] font-semibold"
          >
            Economic Empowerment Programs
          </motion.h2>
          <motion.p
            variants={textScaleVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
           className="font-[400] text-[1rem] text-left text-[#333333]"
          >
            We believe that financial independence is key to sustainable growth. Our Economic Empowerment Programs equip individuals with entrepreneurial skills, vocational training, and access to financial resources, helping them build stable livelihoods and break free from economic hardship.
          </motion.p>
        </div>
        <div>
          <motion.img
            variants={imageVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            src="/images/Programs/entreprenurship.jpg" 
            alt=" A picture of a South African School." 
            className="h-[25rem] w-full rounded-xl"
          >
          </motion.img>
        </div>
      </section>

      <section className="flex lg:flex-row flex-col gap-2 justify-between items-center my-[5rem] px-[4rem]">
        <div>
          <motion.img
            variants={imageVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            src="/images/Programs/recycle.jpg"
            alt=" A picture of a recycleicon"
            className="h-[25rem] w-full rounded-xl"
          >
          </motion.img>
        </div>
        <div className="items-start max-w-[50%] space-y-[1rem]">
          <motion.h2
            variants={textVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            className="text-[#292666] text-[3rem] font-semibold"
          >
            Environmental Sustainability Projects
          </motion.h2>
          <motion.p
            variants={textScaleVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
           className="font-[400] text-[1rem] text-left text-[#333333]"
          >
            Protecting our environment is a shared responsibility. At Jimoah Habibullahi Initiative, we promote eco-friendly practices, tree-planting drives, waste management initiatives, and community education to ensure a cleaner, healthier, and more sustainable future for all.
          </motion.p>
        </div>
      </section>

      <section className="flex lg:flex-row flex-col gap-2 justify-between items-center my-[5rem] px-[4rem]">
        <div className="items-start max-w-[50%] space-y-[1rem]">
          <motion.h2
            variants={textVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            className="text-[#292666] text-[3rem] font-semibold"
          >
            Emergency Response and Humanitarian Aid
          </motion.h2>
          <motion.p
            variants={textScaleVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
           className="font-[400] text-[1rem] text-left text-[#333333]"
          >
            Crisis support, including disaster relief and post-disaster recovery
          </motion.p>
        </div>
        <div>
          <motion.img
            variants={imageVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            src="/images/Programs/humanitarian.jpg"
            alt=" A picture of dispalying humanity"
            className="h-[25rem] w-full rounded-xl"
          >
          </motion.img>
        </div>
      </section>

      <section className="flex lg:flex-row flex-col gap-2 justify-between items-center my-[5rem] px-[4rem]">
        <div>
          <motion.img
            variants={imageVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            src="/images/Gallery_images/sec2_image5.svg" 
            alt=" A picture of a Healthcare Access Campaign." 
            className="h-[25rem] w-full rounded-xl"
          >
          </motion.img>
        </div>
        <div className="items-start max-w-[50%] space-y-[1rem]">
          <motion.h2
            variants={textVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            className="text-[#292666] text-[3rem] font-semibold"
          >
            Environmental Sustainability Projects
          </motion.h2>
          <motion.p
            variants={textScaleVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
           className="font-[400] text-[1rem] text-left text-[#333333]"
          >
            Awareness programs, clean-up drives, tree planting, and sustainable
            agricultural initiatives.
          </motion.p>
        </div>
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
