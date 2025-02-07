import React, { useEffect, useRef, useState } from "react";
import "./styles/home.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Swiper modules
import { Pagination, Navigation } from "swiper/modules";
import Hero from "../../components/Hero";

import MentorshipCarousel from "../../components/home/MentorshipCarousel";
import PartnersSection from "../../components/partners";
import { motion, useScroll } from "framer-motion";
import LazyLoad from "react-lazyload";
import LazyBackground from "../../components/LazyBackground";

import {
  buttonVariants,
  imageVariants,
  textScaleVariants,
  textVariants,
  viewport,
} from "../../animation/animation";

const Home = () => {
  useEffect(() => {
    // Ensure Swiper binds custom buttons to navigation
    const prevButton = document.querySelector(".swiper-button-prev");
    const nextButton = document.querySelector(".swiper-button-next");

    // Attach Swiper's navigation handlers
    if (prevButton && nextButton) {
      prevButton.addEventListener("click", () => {
        document.querySelector(".swiper").swiper.slidePrev();
      });
      nextButton.addEventListener("click", () => {
        document.querySelector(".swiper").swiper.slideNext();
      });
    }

    // Cleanup event listeners on component unmount
    return () => {
      if (prevButton) prevButton.removeEventListener("click", () => {});
      if (nextButton) nextButton.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <div className="font-[Montserrat]" id="home">
      <Hero />

      <section className="w-full flex justify-between flex-row overflow-x-scroll">
        <motion.div
          variants={imageVariants}
          initial="initial"
          whileInView="inView"
          viewport={viewport}
          className="bg-[#258CCF] px-[2.43rem] py-[3rem] "
        >
          <h2 className="font-[600] text-[1.375rem] leading-[1.875rem] text-white mb-[1.25rem] min-w-[19rem] ">
            The JHI call for application into the inaugural cohort set for 3
            months
          </h2>
          <a
            href="#"
            className="text-[1rem] text-[#FFAA00] flex items-center space-x-[0.5rem] "
          >
            Learn More
            <img src="./images/yellow_arrow.svg" alt="" className="" />
          </a>
        </motion.div>
        <motion.div
          variants={imageVariants}
          initial="initial"
          whileInView="inView"
          viewport={viewport}
          className="bg-[#000000] px-[2.43rem] py-[3rem] "
        >
          <h2 className="font-[600] text-[1.375rem] leading-[1.875rem] text-white mb-[1.25rem] min-w-[22rem] ">
            Help JHI to in her impacting of projects and community building
          </h2>
          <a
            href="#"
            className="text-[1rem] text-[#FFAA00] flex items-center space-x-[0.5rem] "
          >
            Donate Now
            <img src="./images/yellow_arrow.svg" alt="" className="" />
          </a>
        </motion.div>
        <motion.div
          variants={imageVariants}
          initial="initial"
          whileInView="inView"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-[#258CCF] px-[2.43rem] py-[3rem] "
        >
          <h2 className="font-[600] text-[1.375rem] leading-[1.875rem] text-white mb-[1.25rem] min-w-[22rem] ">
            Join our community to help empower individuals & communities
          </h2>
          <a
            href="https://chat.whatsapp.com/BFpOuckjmpE5djRguCgf51"
            className="text-[1rem] text-[#FFAA00] flex items-center space-x-[0.5rem] "
          >
            Join Now
            <img src="./images/yellow_arrow.svg" alt="" className="" />
          </a>
        </motion.div>
      </section>

      <section className="lg:px-[4rem] p-[2rem] lg:pt-[10rem] flex flex-row space-x-[3rem] ">
        <article className="lg:w-[55%]">
          <h3 className="font-[600] text-[#292666] text-[0.8rem] px-[1rem] py-[0.5rem] bg-[#05175F40] w-fit rounded-[0.3rem] ">
            About Us
          </h3>
          <motion.h4
            variants={textVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            className="my-[1.25rem] text-[#292666] font-[600] lg:text-[2.5rem] text-[1.2rem] "
          >
            Founded On Principles Of Empathy, Empowerment & Community
          </motion.h4>
          <motion.ul
            variants={textVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            className="space-y-[1.25rem]  mb-[3rem]"
          >
            <div className="flex flex-wrap text-[#333333] ">
              <img
                src="./images/list_star.svg"
                alt="list_star"
                className="mx-[0.625rem]"
              />
              <li className="font-[600] text-[1.125rem] ">
                Mentorship Programs
              </li>
              <li className="ml-[0.6rem] mt-[0.7rem] font-[400] text-[1rem] leading-[1.8rem] ">
                We offer one-on-one mentoring, group coaching, and workshops to
                equip individuals with the skills, knowledge, and confidence...
              </li>
            </div>
            <div className="flex flex-wrap text-[#333333] ">
              <img
                src="./images/list_star.svg"
                alt="list_star"
                className="mx-[0.625rem]"
              />
              <li className="font-[600] text-[1.125rem] ">
                Positive Impact Projects
              </li>
              <li className="ml-[0.6rem] mt-[0.7rem] font-[400] text-[1rem] leading-[1.8rem] ">
                We design and implement initiatives addressing critical social,
                economic, and environmental issues...
              </li>
            </div>
            <div className="flex flex-wrap text-[#333333] ">
              <img
                src="./images/list_star.svg"
                alt="list_star"
                className="mx-[0.6rem]"
              />
              <li className="font-[600] text-[1.01rem]">
                Community Building Initiatives
              </li>
              <li className="ml-[0.6rem] mt-[0.7rem] font-[400] text-[1rem] leading-[1.8rem] ">
                We foster inclusive communities through events, training, and
                capacity-building programs, promoting social cohesion,
                collective...
              </li>
            </div>
          </motion.ul>
          <motion.a
            href="#"
            variants={buttonVariants}
            whileHover="hover"
            className="bg-[#258CCF] rounded-[0.5rem] py-[1.25rem] px-[3.06rem] text-[#FFFFFF] font-[700] text-[1rem] Mulish hover:bg-blue-600 inline-block"
          >
            Read More
          </motion.a>
        </article>
        <motion.article
          variants={imageVariants}
          initial="initial"
          whileInView="inView"
          viewport={viewport}
          className="lg:flex hidden"
        >
          <LazyLoad height={350} offset={200}>
            <img src="./images/about_image.svg" alt="about_image" />
          </LazyLoad>
        </motion.article>
      </section>

      <motion.section
        variants={textVariants}
        initial="initial"
        whileInView="inView"
        viewport={viewport}
        style={{ backgroundImage: "url(/images/bgs/impact_image.svg)" }}
        className="w-full h-fit bg-cover bg-no-repeat py-[10rem]"
      >
        <h2 className="w-fit m-auto lg:pt-0 pt-[8rem] lg:text-[2.5rem] text-[2rem] text-[#292666] font-semibold ">
          Our Impact
        </h2>
        <article className="w-fit m-auto mt-[5rem] flex flex-wrap justify-center items-center  text-[#292666] gap-[2.75rem] px-1">
          <div className="flex flex-col items-center transform transition duration-300 hover:scale-125">
            <img
              src="./images/people_icon.svg"
              alt="people_icon"
              className="mb-[1.19rem]"
            />
            <h3 className="font-medium bold text-[1.5rem] mb-[0.25rem] ">
              More than 500+
            </h3>
            <p className="font-normal text-[1rem] ">People Reached</p>
          </div>
          <div className="flex flex-col items-center transform transition duration-300 hover:scale-125">
            <img
              src="./images/program_icon.svg"
              alt="program_icon"
              className="mb-[1.19rem]"
            />
            <h3 className="font-medium bold text-[1.5rem] mb-[0.25rem] ">
              Over 25+
            </h3>
            <p className="font-normal text-[1rem] ">Programs Organized</p>
          </div>
          <div className="flex flex-col items-center transform transition duration-300 hover:scale-125">
            <img
              src="./images/events_icon.svg"
              alt="event_icon"
              className="mb-[1.19rem]"
            />
            <h3 className="font-medium bold text-[1.5rem] mb-[0.25rem] ">
              Over 100+
            </h3>
            <p className="font-normal text-[1rem] w-[70%] text-center ">
              Physical & Virtual Events Attendees
            </p>
          </div>
          <div className="flex flex-col items-center transform transition duration-300 hover:scale-125">
            <img
              src="./images/community_icon.svg"
              alt="community_icon"
              className="mb-[1.19rem]"
            />
            <h3 className="font-medium bold text-[1.5rem] mb-[0.25rem] ">
              Across 18+
            </h3>
            <p className="font-normal text-[1rem] ">Communities Impacted</p>
          </div>
          <div className="flex flex-col items-center transform transition duration-300 hover:scale-125">
            <img
              src="./images/school_icon.svg"
              alt="school_icon"
              className="mb-[1.19rem]"
            />
            <h3 className="font-medium bold text-[1.5rem] mb-[0.25rem] ">
              About 20+
            </h3>
            <p className="font-normal text-[1rem] ">Schools Supported</p>
          </div>
        </article>
      </motion.section>

      <section className="lg:px-[4rem] p-[2rem] lg:pt-[10rem] flex flex-col space-y-[3.4rem] ">
        <article className="flex flex-row flex-wrap items-center lg:gap-[8rem] gap-[3rem]">
          <motion.div
            variants={textVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            className="max-w-[55.69rem]"
          >
            <h3 className="font-[600] text-[#292666] text-[0.8rem] px-[1rem] py-[0.5rem] bg-[#05175F40] w-fit rounded-[0.3rem] ">
              Programs
            </h3>
            <h4 className="my-[1.25rem] text-[#292666] font-[600] lg:text-[2.5rem] text-[1.8rem] ">
              Nurturing Impactful Initiatives For Positive Change
            </h4>
            <p className="font-[400] text-[1.125rem] leading-[1.9rem] text-[#333333]">
              Our Positive Impact Projects tackle social, economic, and
              environmental issues, while our Community Building Initiatives
              promote social cohesion through events and training. Our approach
              emphasizes collaboration, sustainability, cultural sensitivity,
              and empowerment. By focusing on these principles, we aim to drive
              transformative change and enable individuals and communities to
              reach their full potential.
            </p>
          </motion.div>
          <div>
            <motion.a
              href="#"
              variants={buttonVariants}
              whileHover="hover"
              className="bg-[#258CCF] rounded-[0.5rem] py-[1.25rem] px-[3.06rem] text-[#FFFFFF] font-[700] text-[1rem] Mulish inline-block hover:bg-blue-600"
            >
              See More
            </motion.a>
          </div>
        </article>
        <article className="relative w-full">
          <MentorshipCarousel />
        </article>
      </section>
      <section>
        <LazyBackground
          src="/images/bgs/media_background.svg"
          className="w-full lg:h-[65rem] h-[140rem] bg-cover bg-no-repeat px-6"
        >
          <article className="w-fit m-auto text-center flex flex-col items-center max-w-[52rem] pt-[10rem]">
            <h3 className="font-[600] text-[#292666] text-[0.8rem] px-[1rem] py-[0.5rem] bg-[#05175F40] w-fit rounded-[0.3rem] ">
              Media
            </h3>
            <motion.h4
              variants={textVariants}
              initial="initial"
              whileInView="inView"
              viewport={viewport}
              className="my-[1.25rem] text-[#292666] font-[600] lg:text-[2.3rem] text-[1.8rem]"
            >
              How We Have Drive Transformative Change And Enable Individuals &
              Communities
            </motion.h4>
            <motion.p
              variants={textVariants}
              initial="initial"
              whileInView="inView"
              viewport={viewport}
              className="font-[400] text-[1.125rem] leading-[1.9rem] text-[#333333]"
            >
              By focusing on these principles, we aim to drive transformative
              change and enable individuals and communities to reach their full
              potential.
            </motion.p>
            <motion.a
              href="#"
              variants={buttonVariants}
              whileHover="hover"
              className="bg-[#258CCF] rounded-[0.5rem] py-[1rem] px-[3.06rem] my-[2.5rem] text-[#FFFFFF] font-[700] text-[1rem] Mulish inline-block hover:bg-blue-600 "
            >
              See More
            </motion.a>
          </article>
          <article className="mt-5">
            <div className="flex flex-row m-auto w-fit gap-[2.5rem] flex-wrap relative z-10">
              <motion.div
                variants={imageVariants}
                initial="initial"
                whileInView="inView"
                viewport={viewport}
                className="w-fit rounded-[0.5rem] lg:rounded-[1.25rem] lg:p-[1.25rem] p-[1rem] m-auto bg-[rgba(255,255,255,0.5)]"
              >
                <LazyLoad height={300} offset={200}>
                  <img
                    src="/images/header_image3.svg"
                    alt="7 jhi's at an event"
                    className="max-w-[18rem] rounded-[0.5rem] "
                  />
                </LazyLoad>
              </motion.div>
              <motion.div
                variants={imageVariants}
                initial="initial"
                whileInView="inView"
                viewport={viewport}
                className="w-fit rounded-[0.5rem] lg:rounded-[1.25rem] lg:p-[1.25rem] p-[1rem] bg-[rgba(255,255,255,0.5)]"
              >
                <LazyLoad height={300} offset={200}>
                  <img
                    src="/images/header.jpeg"
                    alt="Group photo"
                    className="max-w-[18rem] h-[12rem] rounded-[0.5rem]"
                  />
                </LazyLoad>
              </motion.div>
            </div>
            <div className="flex absolute lg:translate-y-[-32%]">
              <div className="lg:px-[8rem] flex flex-row flex-wrap lg:gap-[0.8rem] gap-[2.5rem] items-end ">
                <motion.div
                  variants={imageVariants}
                  initial="initial"
                  whileInView="inView"
                  viewport={viewport}
                  className="relative max-w-[19.5rem] lg:mt-0 mt-[2.5rem]"
                >
                  <LazyLoad height={300} offset={200}>
                    <img
                      src="/images/header_image2.svg"
                      alt="Mentorship Programs"
                      className="w-full h-full object-cover lg:rounded-[1.25rem] rounded-[0.5rem]"
                    />
                  </LazyLoad>
                  <div className="absolute bottom-0 left-0 w-full h-full bg-[#05175FB2] bg-opacity-[70%] flex text-white p-4 lg:rounded-[1.25rem] rounded-[0.5rem] items-end">
                    <p className="text-start font-semibold w-[12rem] items-end">
                      More photos concerning our Mentorship Programs
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  variants={imageVariants}
                  initial="initial"
                  whileInView="inView"
                  viewport={viewport}
                  className="bg-[#FFAA00] lg:w-[12rem] w-[19rem] lg:h-fit h-[] p-[1rem] rounded-[1.25rem] font-[600] text-[#333333]"
                >
                  <h5 className=" text-[1rem] ">News & Stories</h5>
                  <p className="font-[400] text-[0.75rem] max-w-[12.875rem] my-[0.5rem] ">
                    In marking the 2024 International Day of the Girl Child, the
                    JHI...
                  </p>
                  <a
                    href="#"
                    className="text-[#258CCF] text-[0.75rem] flex items-center gap-[0.2rem]"
                  >
                    Read More
                    <img
                      src="/images/blue_arrow.svg"
                      alt="blue_arrow"
                      className="w-[0.8rem]"
                    />
                  </a>
                </motion.div>
                <motion.div
                  variants={imageVariants}
                  initial="initial"
                  whileInView="inView"
                  viewport={viewport}
                  className="bg-[#258CCF] w-[12rem] h-fit p-[1rem] rounded-[1.25rem] font-[600] text-[#FFFFFF]"
                >
                  <h5 className=" text-[1rem] ">Events</h5>
                  <p className="font-[400] text-[0.75rem] max-w-[12.875rem] my-[0.5rem] ">
                    The JHI Community had an engaging space on Twitter on Mental
                    Health...
                  </p>
                  <a
                    href="#"
                    className="text-[#292666] text-[0.75rem] flex items-center gap-[0.2rem]"
                  >
                    See More
                    <img
                      src="/images/darkblue_arrow.svg"
                      alt="blue_arrow"
                      className="w-[0.8rem]"
                    />
                  </a>
                </motion.div>
                <motion.div
                  variants={imageVariants}
                  initial="initial"
                  whileInView="inView"
                  viewport={viewport}
                  className="relative max-w-[19.5rem] lg:mt-0 mt-[2.5rem]"
                >
                  <LazyLoad height={300} offset={200}>
                    <img
                      src="/images/skill_image.svg"
                      alt="Mentorship Programs"
                      className="w-full h-full object-cover lg:rounded-[1.25rem] rounded-[0.5rem]"
                    />
                  </LazyLoad>
                  <div className="absolute bottom-0 left-0 w-full h-full flex text-white p-4 lg:rounded-[1.25rem] rounded-[0.5rem] items-end">
                    <p className="text-start font-semibold w-[12rem] items-end">
                      More photos on our Positive Impacts Projects
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </article>
        </LazyBackground>
      </section>

      <PartnersSection />
      <section>
        <LazyBackground
          src="/images/bgs/feedback_background.svg"
          className="w-full bg-cover bg-no-repeat lg:p-[3.75rem] p-[2rem]"
        >
          <article className="flex flex-row flex-wrap items-center lg:gap-[8rem] gap-[3rem] my-[4rem]">
            <div className="max-w-[55.69rem]">
              <h3 className="font-[600] text-[#292666] text-[0.8rem] px-[1rem] py-[0.5rem] bg-[#05175F40] w-fit rounded-[0.3rem] ">
                Who We Are
              </h3>
              <motion.h4
                variants={textVariants}
                initial="initial"
                whileInView="inView"
                viewport={viewport}
                className="my-[1.25rem] text-[#292666] font-[600] lg:text-[2.5rem] text-[1.8rem] "
              >
                Success Stories From Those Whom JHI Impacted
              </motion.h4>
              <motion.p
                variants={textVariants}
                initial="initial"
                whileInView="inView"
                viewport={viewport}
                className="font-[400] text-[1.125rem] leading-[1.9rem] text-[#333333]"
              >
                Through a blend of innovation, collaboration, and dedicated
                effort, these success stories illuminate the path towards a more
                inclusive, equitable, and empowered future.
              </motion.p>
            </div>
          </article>
          <LazyBackground
            src="/images/header_image3.svg"
            className="bg-cover bg-no-repeat h-fit flex flex-wrap justify-between max-xl:justify-center items-center lg:gap-[10rem] gap-6 lg:p-0 p-6"
          >
            <div className="card bg-[#258CCF] p-8 font-semibold text-white max-w-[28rem] animate-fade-in">
              <motion.span
                variants={textScaleVariants}
                initial="initial"
                whileInView="inView"
                viewport={viewport}
                className="text-sm rounded-full bg-[#FFAA00] py-2 px-4 inline-block"
              >
                UO
              </motion.span>
              <motion.h2
                variants={textScaleVariants}
                initial="initial"
                whileInView="inView"
                viewport={{ once: true, amount: 0.5 }}
                className="inline text-lg mx-4"
              >
                Usman Olamide
              </motion.h2>
              <motion.p
                variants={textScaleVariants}
                initial="initial"
                whileInView="inView"
                viewport={viewport}
                className="text-sm font-normal mt-4"
              >
                I’m thrilled to receive this certificate after completion of
                course. A gigantic applause to JHI for such an impactful and
                meaningful collaborations that foster not just effective
                leadership aims but also provide opportunities to explore.
              </motion.p>
            </div>
            <div className="card bg-[#258CCF] p-8 font-semibold text-white max-w-[28rem] animate-fade-in">
              <motion.span
                variants={textScaleVariants}
                initial="initial"
                whileInView="inView"
                viewport={viewport}
                className="text-sm rounded-full bg-[#bc05d8] py-2 px-4 inline-block"
              >
                RA
              </motion.span>
              <motion.h2
                variants={textScaleVariants}
                initial="initial"
                whileInView="inView"
                viewport={viewport}
                className="inline text-lg mx-4"
              >
                Rukayat Akanbi
              </motion.h2>
              <motion.p
                variants={textScaleVariants}
                initial="initial"
                whileInView="inView"
                viewport={viewport}
                className="text-sm font-normal mt-4"
              >
                It is so amazing how small acts of service create a lasting
                impact. I’m privileged to have participated in Okelele Medical
                Outreach which was organized by JHI. I worked alongside Medical
                Professionals in dispensing medications to over 100 people in
                need.
              </motion.p>
            </div>
            <div className="card bg-[#258CCF] p-8 font-semibold text-white max-w-[28rem] animate-fade-in">
              <motion.span
                variants={textScaleVariants}
                initial="initial"
                whileInView="inView"
                viewport={viewport}
                className="text-sm rounded-full bg-[#1eb805] py-2 px-4 inline-block"
              >
                AM
              </motion.span>
              <motion.h2
                variants={textScaleVariants}
                initial="initial"
                whileInView="inView"
                viewport={viewport}
                className="inline text-lg mx-4"
              >
                Adeshina Muiz
              </motion.h2>
              <motion.p
                variants={textScaleVariants}
                initial="initial"
                whileInView="inView"
                viewport={viewport}
                className="text-sm font-normal mt-4"
              >
                Volunteering fuels community growth. Grateful to the JHI for
                this honor and for enabling over 100 people to benefit from the
                medical outreach. Being a volunteer in this initiative has
                enhanced my ability to contribute to a healthier, more resilient
                community.
              </motion.p>
            </div>
            <div className="card bg-[#258CCF] p-8 font-semibold text-white max-w-[28rem] animate-fade-in">
              <motion.span
                variants={textScaleVariants}
                initial="initial"
                whileInView="inView"
                viewport={viewport}
                className="text-sm rounded-full bg-[#d6340c] py-2 px-4 inline-block"
              >
                HA
              </motion.span>
              <motion.h2
                variants={textScaleVariants}
                initial="initial"
                whileInView="inView"
                viewport={viewport}
                className="inline text-lg mx-4"
              >
                Hauwa Abdulraheem
              </motion.h2>
              <motion.p
                variants={textScaleVariants}
                initial="initial"
                whileInView="inView"
                viewport={viewport}
                className="text-sm font-normal mt-4"
              >
                I have been learning so much from the JHI recently. I want to
                express my heartfelt gratitude to its founder. This initiative
                is not just about learning, it’s about building a community that
                empowers and uplifts each other. Be a part of the community
                through their WhatsApp group.
              </motion.p>
            </div>
          </LazyBackground>
        </LazyBackground>
      </section>
    </div>
  );
};

export default Home;
