import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  bannerVariant,
  imageVariants,
  textScaleVariants,
  viewport,
} from "../../animation/animation";
import LazyLoad from "react-lazyload";
import LazyBackground from "../../components/LazyBackground";

const News_Stories = () => {
  const content =
    "In making the 2024 International Day of the Girl Child, the JHI community engaged her members t give in their say, advocating for the Girl Child. At Jimoh Habibullah Initiative, we celebrate girls' resilience and potential. Every girl deserves: Freedom from societal barriers and stereotypes. - Access to quality education";
  const banners = [
    {
      image: "/images/mediaImg/banner_1.png",
      topic: "Research Writing And Academic Publication Techniques",
      date: "Saturday August 10, 2024",
      content,
    },
    {
      image: "/images/mediaImg/banner_2.png",
      topic: "Cleaning Up Our Planet: Strategies For A Sustainable Future",
      date: "Saturday August 10, 2024",
      content,
    },
    {
      image: "/images/mediaImg/banner_3.png",
      topic: "Skill Acquisition And Development",
      date: "Saturday August 10, 2024",
      content,
    },
    {
      image: "/images/mediaImg/banner_4.png",
      topic: "World Teacher’s Day",
      date: "Saturday August 10, 2024",
      content,
    },
    {
      image: "/images/mediaImg/banner_5.png",
      topic: "Combining STEM And Social Responsibility Initiatives",
      date: "Saturday August 10, 2024",
      content,
    },
    {
      image: "/images/mediaImg/banner_6.png",
      topic: "Who Do We Feature On The Spotlight Change-maker",
      date: "Saturday August 10, 2024",
      content,
    },
    {
      image: "/images/mediaImg/banner_7.png",
      topic: "Happy Convocation Day",
      date: "Saturday August 10, 2024",
      content,
    },
    {
      image: "/images/mediaImg/banner_8.png",
      topic: "Thriving Youth Summit",
      date: "Saturday August 10, 2024",
      content,
    },
  ];

  const recentPosts = [
    {
      text: "Research Writing And Academic Publication Techniques",
      date: " Saturday, December 10, 2024",
    },
    {
      text: "Skill Acquisition And Development",
      date: " Saturday, December 10, 2024",
    },
    {
      text: "World Teacher’s Day",
      date: " Saturday, December 10, 2024",
    },
    {
      text: "Thriving Youth Summit",
      date: " Saturday, December 10, 2024",
    },
    {
      text: "Cleaning Up Our Planet: Strategies For A Sustainable Future",
      date: "Saturday, December 10, 2024",
    },
    {
      text: "Skill Acquisition And Development",
      date: " Saturday, December 10, 2024",
    },
    {
      text: " Combining STEM And Social Responsibility Initiatives",
      date: " Saturday, December 10, 2024",
    },
    {
      text: " Who Do We Feature On The Spotlight Change-maker",
      date: " Saturday, December 10, 2024",
    },
    {
      text: "Research Writing And Academic Publication Techniques",
      date: " Saturday, December 10, 2024",
    },
    {
      text: "Thriving Youth Summit",
      date: " Saturday, December 10, 2024",
    },
    {
      text: "World Teacher’s Day",
      date: " Saturday, December 10, 2024",
    },
    {
      text: "Skill Acquisition And Development",
      date: " Saturday, December 10, 2024",
    },
    {
      text: "Combining STEM And Social Responsibility Initiatives",
      date: " Saturday, December 10, 2024",
    },
    {
      text: "Cleaning Up Our Planet: Strategies For A Sustainable Future",
      date: " Saturday, December 10, 2024",
    },
    {
      text: "Thriving Youth Summit",
      date: " Saturday, December 10, 2024",
    },
    {
      text: "Skill Acquisition And Developments",
      date: " Saturday, December 10, 2024",
    },
    {
      text: "Cleaning Up Our Planet: Strategies For A Sustainable Future",
      date: " Saturday, December 10, 2024",
    },
    {
      text: "World Teacher's Day",
      date: " Saturday, December 10, 2024",
    },
  ];

  return (
    <>
      <section className="bg-[url('/images/header.jpeg')] bg-cover bg-no-repeat h-[100vh] w-full relative flex items-center justify-center font-[Montserrat]">
        {/* Background Overlay  */}
        <div className="absolute inset-0 bg-[#258CCF9C] bg-opacity-25 "></div>

        <motion.h1
          variants={bannerVariant}
          initial="initial"
          animate="animate"
          className="text-white text-h1 leading-[62px] text-center font-bold font-[Montserrat] z-30"
        >
          News & Stories
        </motion.h1>
      </section>
      <section className="max-w-[82rem] mx-auto flex flex-col lg:flex-row font-[Montserrat] lg:px-3 my-[5.5rem] justify-center max-lg:items-center gap-10 ">
        <div className="max-lg:w-[90%] w-[70%] relative">
          <LazyBackground
            src="/images/mediaImg/secondbg.png"
            className="bg-cover bg-no-repeat h-[30rem]  pt-64 pl-8 relative"
            variants={imageVariants}
          >
            <div className="absolute bg-black opacity-45 "></div>
            <h2 className="text-white text-[1.5rem] leading-8 md:text-[2rem] md:leading-[3rem] font-bold">
              Empowering Opportunities: Thriving Youth Summit
            </h2>
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgba(255, 255, 255)",
                boxShadow: "0px 0px 8px rgba(255, 255, 255)",
              }}
              className="w-[11rem] h-[3.5rem] text-white font-bold font-[Mulish] text-center border border-white rounded-lg mt-8"
            >
              Read more
            </motion.button>
          </LazyBackground>
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 justify-center justify-items-center items-center ">
            {banners.map(({ image, topic, date, content }, i) => (
              <div
                key={i}
                className="w-[19.5rem] sm:w-[23.5rem] lg:w-[19.5rem] xl:w-[23.5rem] min-h-[38rem] border border-[#05175F40] space-y-3 rounded-lg p-3"
              >
                <motion.div
                  variants={imageVariants}
                  initial="initial"
                  whileInView="inView"
                  viewport={viewport}
                >
                  <LazyLoad height={300} offset={200}>
                    <img src={image} alt={`banner_${i}`} />
                  </LazyLoad>
                </motion.div>
                <motion.div
                  variants={textScaleVariants}
                  initial="initial"
                  whileInView="inView"
                  viewport={viewport}
                >
                  <h3 className="text-[1.25rem] leading-[2rem] text-black font-semibold capitalize ">
                    {topic}
                  </h3>
                  <p className="text-[1rem] leading-[1.25rem] font-medium italic">
                    {date}
                  </p>
                  <p className="text-[0.75rem] leading-[1.25rem]  ">
                    {content}
                    <span className="text-[#258CCF] font-semibold ">
                      {" "}
                      Read more
                    </span>
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="space-y-6 lg:w-[30%] bg-white max-lg:px-4
        "
        >
          <h2 className="text-[2rem] leading-[2.5rem] text-[#292666] font-semibold max-lg:text-center">
            Recent posts
          </h2>
          {recentPosts.map(({ text, date }, i) => (
            <motion.div
              variants={textScaleVariants}
              initial="initial"
              whileInView="inView"
              viewport={viewport}
              className="rounded-lg border border-[#05175F40] p-4"
              key={i}
            >
              <p className="w-full text-[1rem] leading-[2rem] font-semibold ">
                {text}
              </p>
              <p className="text-[0.85rem] leading-[1.25rem]">{date}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default News_Stories;
// Skill Acquisition And Development
