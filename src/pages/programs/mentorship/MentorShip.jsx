import { motion } from "framer-motion";
import {
  bannerVariant,
  textScaleVariants,
  textVariants,
  imageVariants,
  viewport,
} from "../../../animation/animation";
const MentorShip = () => {
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
          Mentorship
        </motion.h1>
      </section>
      <section className="max-w-[80.5rem] mx-auto mt-[6.25rem] px-4 font-[Montserrat]">
        <motion.div
          variants={textVariants}
          initial="initial"
          whileInView="inView"
          viewport={viewport}
        >
          <h2 className="text-[#292666] text-center text-[2.5rem] leading-[3rem] font-semibold">
            Mentorship and Capacity Building
          </h2>
          <p className="text-[1.2rem] leading-[1.85rem] text-[#333333] mt-5 text-center">
            The mentorship and Capacity building program is designed to support
            individuals in their personal and professional development. By
            providing personalized guidance, skill-building workshops, and group
            coaching, the initiative helps individuals unlock their full
            potential.
          </p>
        </motion.div>
        <div className="space-y-24 mt-[6.25rem]">
          <div className="flex items-center gap-10 flex-col xl:flex-row justify-center max-lg:mx-6">
            <motion.div
              variants={imageVariants}
              initial="initial"
              whileInView="inView"
              viewport={viewport}
              className="bg-[#00B919] w-[90%] lg:w-[65%] h-[39.5rem]"
            ></motion.div>
            <motion.div
              variants={textScaleVariants}
              initial="initial"
              whileInView="inView"
              viewport={viewport}
              className="w-[85%] md:w-[29rem] h-[28.5rem] border border-[rgba(0, 0, 0, 0.5)] rounded-lg flex flex-col justify-center"
            >
              <h3 className="text-[#292666] text-center text-[1.5rem] leading-[2rem] md:text-[2.5rem] md:leading-[3rem] font-semibold">
                One - on - One Mentoring
              </h3>
              <p className="text-[1rem] leading-[2rem] md:text-[1.5rem] md:leading-[2.5rem] text-center">
                Tailored mentorship sessions for personal growth, career
                development, and overcoming specific challenges.
              </p>
            </motion.div>
          </div>
          <div className="flex items-center gap-10 flex-col xl:flex-row justify-center mx-6">
            <motion.div
              variants={imageVariants}
              initial="initial"
              whileInView="inView"
              viewport={viewport}
              className="bg-[#D9D9D9] w-[90%] lg:w-[65%] h-[39.5rem]"
            ></motion.div>
            <motion.div
              variants={textScaleVariants}
              initial="initial"
              whileInView="inView"
              viewport={viewport}
              className="w-[85%] md:w-[29rem] h-[28.5rem] border border-[rgba(0, 0, 0, 0.5)] rounded-lg flex flex-col justify-center"
            >
              <h3 className="text-[#292666] text-center text-[1.5rem] leading-[2rem] md:text-[2.5rem] md:leading-[3rem] font-semibold">
                Group Coaching Session
              </h3>
              <p className="text-[1rem] leading-[2rem] md:text-[1.5rem] md:leading-[3rem] text-center">
                Focused group discussions and coaching to address common
                community issues or shared goals.
              </p>
            </motion.div>
          </div>
          <div className="flex items-center gap-10 flex-col xl:flex-row justify-center mx-6">
            <motion.div
              variants={imageVariants}
              initial="initial"
              whileInView="inView"
              viewport={viewport}
              className="bg-[#258CCF9C] w-[90%] lg:w-[65%] h-[39.5rem]"
            ></motion.div>
            <motion.div
              variants={textScaleVariants}
              initial="initial"
              whileInView="inView"
              viewport={viewport}
              className="w-[85%] md:w-[29rem] h-[28.5rem] border border-[rgba(0, 0, 0, 0.5)] rounded-lg flex flex-col justify-center"
            >
              <h3 className="text-[#292666] text-center text-[1.5rem] leading-[2rem] md:text-[2.5rem] md:leading-[3rem] font-semibold">
                Skills Development Workshops
              </h3>
              <p className="text-[1rem] leading-[2rem] md:text-[1.5rem] md:leading-[3rem] text-center">
                Interactive sessions designed to teach practical skills, from
                leadership to technical expertise.
              </p>
            </motion.div>
          </div>
          <div className="flex items-center gap-10 flex-col xl:flex-row justify-center mx-6">
            <motion.div
              variants={imageVariants}
              initial="initial"
              whileInView="inView"
              viewport={viewport}
              className="bg-[#FFF2D9] w-[90%] lg:w-[65%] h-[39.5rem]"
            ></motion.div>
            <motion.div
              variants={textScaleVariants}
              initial="initial"
              whileInView="inView"
              viewport={viewport}
              className="w-[85%] md:w-[29rem] h-[28.5rem] border border-[rgba(0, 0, 0, 0.5)] rounded-lg flex flex-col justify-center"
            >
              <h3 className="text-[#292666] text-center text-[1.5rem] leading-[2rem] md:text-[2.5rem] md:leading-[3rem] font-semibold">
                Women’s Leadership Academy
              </h3>
              <p className="text-[1rem] leading-[2rem] md:text-[1.5rem] md:leading-[3rem] text-center">
                Workshops and mentorship programs for leadership, financial
                literacy, and entrepreneurship.
              </p>
            </motion.div>
          </div>
          <div className="flex  flex-col xl:flex-row justify-center items-center gap-10 mx-6">
            <motion.div
              variants={imageVariants}
              initial="initial"
              whileInView="inView"
              viewport={viewport}
              className="bg-[#1E74C7] w-[90%] lg:w-[65%] h-[39.5rem]"
            ></motion.div>
            <motion.div
              variants={textScaleVariants}
              initial="initial"
              whileInView="inView"
              viewport={viewport}
              className="w-[85%] md:w-[29rem] h-[28.5rem] border border-[rgba(0, 0, 0, 0.5)] rounded-lg flex flex-col justify-center"
            >
              <h3 className="text-[#292666] text-center text-[1.5rem] leading-[2rem] md:text-[2rem] md:leading-[3rem] font-semibold">
                Youth Empowerment Network
              </h3>
              <p className="text-[1rem] leading-[2rem] md:text-[1.5rem] md:leading-[3rem] text-center">
                Career guidance and skill-building opportunities for young
                people.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="max-w-[80rem] mx-auto font-[Montserrat] px-6 my-[7.5rem]">
        <motion.h2
          variants={textVariants}
          initial="initial"
          whileInView="inView"
          viewport={viewport}
          className="text-h1 text-[#05175F] font-semibold text-center mb-16"
        >
          Impact
        </motion.h2>
        <div className="text-[1.2rem] max-md:leading-[2rem] md:text-h1 text-white text-center space-y-10 bg-[#05175F] p-16">
          <motion.div
            variants={textScaleVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
          >
            <p>Increased self-confidence and career readiness.</p>
            <p>Enhanced leadership and communication skills</p>
            <p>
              Personal and professional growth that drives sustainable success
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default MentorShip;
