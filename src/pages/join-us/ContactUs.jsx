import React from "react";
import { motion } from "framer-motion";
import {
  bannerVariant,
  buttonVariants,
  textScaleVariants,
  textVariants,
} from "../../animation/animation";

const ContactUs = () => {
  return (
    <>
      <section className="bg-[url('/images/header.jpeg')] bg-cover bg-no-repeat h-[100vh] w-full relative flex items-center justify-center font-[Montserrat]">
        {/* Background Overlay  */}
        <div className="absolute inset-0 bg-[#D8C1A1] bg-opacity-45 "></div>

        <motion.h1
          variants={bannerVariant}
          initial="initial"
          animate="animate"
          className="text-white text-h1 leading-[62px] text-center font-bold font-[Montserrat] z-30"
        >
          Contact Us
        </motion.h1>
      </section>
      <section className="m-10 font-[Montserrat] mb-[7.5rem] bg-[#E5BF88]">
        <div className="w-full bg-[#D8C1A1]">
          <div className=" flex flex-col xl:flex-row  justify-between items-center w-full px-9 py-16 gap-8 max-w-[82.5rem] mx-auto">
            <motion.div
              variants={textVariants}
              initial="initial"
              whileInView="inView"
              viewport={{ once: true, amount: 0.5 }}
              className="max-w-[40.7rem] text-white flex flex-col flex-1"
            >
              <h2 className="text-h1 leading-[4.5rem] font-semibold">
                Get in touch
              </h2>
              <p className="text-[1rem] leading-[1.5rem] md:text-[1.5rem] md:leading-[2.5rem] font-semibold ">
                Questions, Comment, Observations about Jimoh Habibullahi
                Initiatives? Contact us via any of the below channel or Fill our
                contact form
              </p>
            </motion.div>
            <motion.div
              variants={textScaleVariants}
              initial="initial"
              whileInView="inView"
              viewport={{ once: true, amount: 0.5 }}
              className="w-[16.5rem] sm:w-[30rem] md:w-[40.7rem] flex flex-col justify-center items-center px-4 py-6 md:p-10 gap-6 h-[24rem] bg-white rounded-[1.25rem] flex-1"
            >
              <input
                type="text"
                placeholder="Full Name:"
                className="w-full h-8 focus:outline-0 rounded-sm placeholder:text-[1rem] placeholder:leading-[1.25rem] placeholder:font-bold bg-[#F1F1F1] pl-4 "
              />
              <input
                type="email"
                placeholder="Email:"
                className="w-full h-8 focus:outline-none rounded-sm placeholder:text-[1rem] placeholder:leading-[1.25rem] placeholder:font-bold bg-[#F1F1F1] pl-4"
              />
              <textarea
                placeholder="Message"
                className="w-full h-28 focus:outline-none rounded-sm placeholder:text-[1rem] placeholder:leading-[1.25rem] placeholder:font-bold bg-[#F1F1F1] pl-4 pt-2 resize-none"
              />
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                className="text-white text-[1rem] leading-[1.25rem] font-bold bg-[#05175FBF] hover:bg-[#07154fbf]  w-[5rem] p-2 rounded-lg mt-auto "
              >
                Submit
              </motion.button>
            </motion.div>
          </div>
        </div>
        <div className="bg-[#E5BF88] max-w-[82.5rem] mx-auto">
          <motion.h2
            variants={textVariants}
            initial="initial"
            whileInView="inView"
            viewport={{ once: true, amount: 0.5 }}
            className="max-lg:text-center text-white text-h1 leading-[4.5rem] font-semibold p-8"
          >
            Visit Our Social <br /> Media Page
          </motion.h2>
          <div className="flex bg-inherit p-7 flex-col gap-10 max-lg:items-center">
            <motion.div
              variants={textScaleVariants}
              initial="initial"
              whileInView="inView"
              viewport={{ once: true, amount: 0.5 }}
              className="bg-white flex max-sm:flex-col items-center px-6 py-7
              rounded-[1.5rem] gap-4 max-w-[36rem]"
            >
              <img
                className="max-sm:w-8 max-sm:h-8 sm:w-10 sm:h-10"
                src="/images/joinUsImg/instagram.png"
                alt="instagram"
              />
              <p className="text-black font-bold text-[1rem] leading-[1.5rem] sm:text-[1.3rem] sm:leading-[1.8rem] lg:text-[1.8rem] lg:leading-[2.5rem] break-all">
                jimohhabibullahi_initiative
              </p>
            </motion.div>
            <motion.div
              variants={textScaleVariants}
              initial="initial"
              whileInView="inView"
              viewport={{ once: true, amount: 0.5 }}
              className="bg-white flex max-sm:flex-col items-center px-6 py-7
              rounded-[1.5rem] gap-4 lg:self-end max-w-[36rem] "
            >
              <img
                className="max-sm:w-8 max-sm:h-8 sm:w-10 sm:h-10"
                src="/images/joinUsImg/linkedIn.png"
                alt="instagram"
              />
              <p className="text-black font-bold text-[1rem] leading-[1.5rem] sm:text-[1.3rem] sm:leading-[1.8rem] lg:text-[1.8rem] lg:leading-[2.5rem] break-all">
                Jimoh Habibullahi Initiative
              </p>
            </motion.div>
            <motion.div
              variants={textScaleVariants}
              initial="initial"
              whileInView="inView"
              viewport={{ once: true, amount: 0.5 }}
              className="bg-white flex max-sm:flex-col items-center px-6 py-7 rounded-[1.5rem] gap-4 max-w-[36rem]"
            >
              <img
                className="max-sm:w-8 max-sm:h-8 sm:w-10 sm:h-10"
                src="/images/joinUsImg/twitter.png"
                alt="instagram"
              />
              <p className="text-black font-bold text-[1rem] leading-[1.5rem] sm:text-[1.3rem] sm:leading-[1.8rem] lg:text-[1.8rem] lg:leading-[2.5rem] break-all">
                Jimoh Habibullahi Initiative
              </p>
            </motion.div>
            <motion.div
              variants={textScaleVariants}
              initial="initial"
              whileInView="inView"
              viewport={{ once: true, amount: 0.5 }}
              className="bg-white flex max-sm:flex-col items-center px-6 py-7 rounded-[1.5rem] gap-4 max-w-[36rem] lg:self-end"
            >
              <img
                className="max-sm:w-8 max-sm:h-8 sm:w-10 sm:h-10"
                src="/images/joinUsImg/twitter.png"
                alt="instagram"
              />
              <p className="text-black font-bold text-[1rem] leading-[1.5rem] sm:text-[1.3rem] sm:leading-[1.8rem] lg:text-[1.8rem] lg:leading-[2.5rem] break-all">
                Jimoh Habibullahi Initiative
              </p>
            </motion.div>
            <motion.div
              variants={textScaleVariants}
              initial="initial"
              whileInView="inView"
              viewport={{ once: true, amount: 0.5 }}
              className="bg-white  px-6 py-10 rounded-[1.5rem] gap-4  self-center"
            >
              {/* <img src="/images/joinUsImg/instagram.png" alt="instagram" /> */}
              <p className="text-black font-bold text-[1rem] leading-[1.5rem] sm:text-[1.3rem] sm:leading-[1.8rem] lg:text-[1.8rem] lg:leading-[2.5rem] break-all">
                jimohhabibulahiinitiatives@gmail.com
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
