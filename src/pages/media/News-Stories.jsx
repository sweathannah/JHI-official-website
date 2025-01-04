import { useState } from "react";
import { motion } from "framer-motion";

const News_Stories = () => {
  const [recentPost, setRecentPost] = useState(false);
  return (
    <>
      <section className="bg-[url('/images/header.jpeg')] bg-cover bg-no-repeat h-[100vh] w-full relative flex items-center justify-center font-[Montserrat]">
        {/* Background Overlay  */}
        <div className="absolute inset-0 bg-[#258CCF9C] bg-opacity-25 "></div>

        <h1 className="text-white text-h1 leading-[62px] text-center font-bold font-[Montserrat] z-30">
          News & Stories
        </h1>
      </section>
      <section className="flex flex-col lg:flex-row font-[Montserrat] lg:mx-[3rem] my-[5.5rem] justify-center items-center gap-10 ">
        <div className="max-lg:w-[90%] w-[70%] relative">
          <div className="bg-[url('/images/mediaImg/secondbg.png')] bg-cover bg-no-repeat h-[30rem]  pt-64 pl-8 relative">
            <div className="absolute bg-black opacity-45 "></div>
            <motion.h2
              initial={{ x: -650 }}
              animate={{ x: 0 }}
              transition={{delay: 0.2, type: 'spring', stiffness: 120}}
              className="text-white text-[1.5rem] leading-8 md:text-[2rem] md:leading-[3rem] font-bold"
            >
              Empowering Opportunities: Thriving Youth Summit
            </motion.h2>
            <motion.button 
            whileHover={{scale: 1.1, textShadow: '0px 0px 8px rgba(255, 255, 255)', boxShadow: '0px 0px 8px rgba(255, 255, 255)'}}
            className="w-[11rem] h-[3.5rem] text-white font-bold font-[Mulish] text-center border border-white rounded-lg mt-8">
              Read more
            </motion.button>
          </div>
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 justify-center justify-items-center items-center ">
            <div className="w-[19.5rem] sm:w-[23.5rem] lg:w-[19.5rem] xl:w-[23.5rem] h-[41.5rem] border border-[#05175F40] space-y-3 rounded-lg p-3">
              <img src="/images/mediaImg/banner_1.png" alt="banner_1" />

              <h3 className="text-[1.25rem] leading-[2rem] text-black font-semibold capitalize ">
                Research Writing And Academic Publication Techniques
              </h3>
              <p className="text-[1rem] leading-[1.25rem] font-medium italic">
                Saturday August 10, 2024
              </p>
              <p className="text-[0.75rem] leading-[1.25rem]  ">
                In marking the 2024 International Day of the Girl Child, the JHi
                community engaged her members to give in their say advocating
                for the Girl Child. At Jimoh Habibullah Initiative, we celebrate
                girls' resilience and potential. Every girl deserves: <br /> -
                Freedom from societal barriers and stereotypes. <br /> - Access
                to quality education...
                <span className="text-[#258CCF] font-semibold ">
                  {" "}
                  Read more
                </span>
              </p>
            </div>
            <div className="w-[19.5rem] sm:w-[23.5rem] lg:w-[19.5rem] xl:w-[23.5rem] h-[41.5rem] border border-[#05175F40] space-y-3 rounded-lg p-3">
              <img src="/images/mediaImg/banner_2.png" alt="banner_1" />

              <h3 className="text-[1.25rem] leading-[2rem] text-black font-semibold capitalize ">
                Cleaning Up Our Planet: Strategies For A Sustainable Future
              </h3>
              <p className="text-[1rem] leading-[1.25rem] font-medium italic ">
                Saturday August 10, 2024
              </p>
              <p className="text-[0.75rem] leading-[1.25rem]  ">
                In marking the 2024 International Day of the Girl Child, the JHi
                community engaged her members to give in their say advocating
                for the Girl Child. At Jimoh Habibullah Initiative, we celebrate
                girls' resilience and potential. Every girl deserves: <br /> -
                Freedom from societal barriers and stereotypes. <br /> - Access
                to quality education...
                <span className="text-[#258CCF] font-semibold ">
                  {" "}
                  Read more
                </span>
              </p>
            </div>
            <div className="w-[19.5rem] sm:w-[23.5rem] lg:w-[19.5rem] xl:w-[23.5rem] h-[41.5rem] border border-[#05175F40] space-y-3 rounded-lg p-3">
              <img src="/images/mediaImg/banner_3.png" alt="banner_1" />

              <h3 className="text-[1.25rem] leading-[2rem] text-black font-semibold capitalize ">
                Skill Acquisition And Development
              </h3>
              <p className="text-[1rem] leading-[1.25rem] font-medium italic ">
                Saturday August 10, 2024
              </p>
              <p className="text-[0.75rem] leading-[1.25rem]  ">
                In marking the 2024 International Day of the Girl Child, the JHi
                community engaged her members to give in their say advocating
                for the Girl Child. At Jimoh Habibullah Initiative, we celebrate
                girls' resilience and potential. Every girl deserves: <br /> -
                Freedom from societal barriers and stereotypes. <br /> - Access
                to quality education...
                <span className="text-[#258CCF] font-semibold ">
                  {" "}
                  Read more
                </span>
              </p>
            </div>
            <div className="w-[19.5rem] sm:w-[23.5rem] lg:w-[19.5rem] xl:w-[23.5rem] h-[41.5rem] border border-[#05175F40] space-y-3 rounded-lg p-3">
              <img src="/images/mediaImg/banner_4.png" alt="banner_1" />

              <h3 className="text-[1.25rem] leading-[2rem] text-black font-semibold capitalize ">
                World Teacher’s Day
              </h3>
              <p className="text-[1rem] leading-[1.25rem] font-medium italic ">
                Saturday August 10, 2024
              </p>
              <p className="text-[0.75rem] leading-[1.25rem]  ">
                In marking the 2024 International Day of the Girl Child, the JHi
                community engaged her members to give in their say advocating
                for the Girl Child. At Jimoh Habibullah Initiative, we celebrate
                girls' resilience and potential. Every girl deserves: <br /> -
                Freedom from societal barriers and stereotypes. <br /> - Access
                to quality education...
                <span className="text-[#258CCF] font-semibold ">
                  {" "}
                  Read more
                </span>
              </p>
            </div>
            <div className="w-[19.5rem] sm:w-[23.5rem] lg:w-[19.5rem] xl:w-[23.5rem] h-[41.5rem] border border-[#05175F40] space-y-3 rounded-lg p-3">
              <img src="/images/mediaImg/banner_5.png" alt="banner_1" />

              <h3 className="text-[1.25rem] leading-[2rem] text-black font-semibold capitalize ">
                Combining STEM And Social Responsibility Initiatives
              </h3>
              <p className="text-[1rem] leading-[1.25rem] font-medium italic ">
                Saturday August 10, 2024
              </p>
              <p className="text-[0.75rem] leading-[1.25rem]  ">
                In marking the 2024 International Day of the Girl Child, the JHi
                community engaged her members to give in their say advocating
                for the Girl Child. At Jimoh Habibullah Initiative, we celebrate
                girls' resilience and potential. Every girl deserves: <br /> -
                Freedom from societal barriers and stereotypes. <br /> - Access
                to quality education...
                <span className="text-[#258CCF] font-semibold ">
                  {" "}
                  Read more
                </span>
              </p>
            </div>
            <div className="w-[19.5rem] sm:w-[23.5rem] lg:w-[19.5rem] xl:w-[23.5rem] h-[41.5rem] border border-[#05175F40] space-y-3 rounded-lg p-3">
              <img src="/images/mediaImg/banner_6.png" alt="banner_1" />

              <h3 className="text-[1.25rem] leading-[2rem] text-black font-semibold capitalize ">
                Who Do We Feature On The Spotlight Change-maker
              </h3>
              <p className="text-[1rem] leading-[1.25rem] font-medium italic ">
                Saturday August 10, 2024
              </p>
              <p className="text-[0.75rem] leading-[1.25rem]  ">
                In marking the 2024 International Day of the Girl Child, the JHi
                community engaged her members to give in their say advocating
                for the Girl Child. At Jimoh Habibullah Initiative, we celebrate
                girls' resilience and potential. Every girl deserves: <br /> -
                Freedom from societal barriers and stereotypes. <br /> - Access
                to quality education...
                <span className="text-[#258CCF] font-semibold ">
                  {" "}
                  Read more
                </span>
              </p>
            </div>
            <div className="w-[19.5rem] sm:w-[23.5rem] lg:w-[19.5rem] xl:w-[23.5rem] h-[41.5rem] border border-[#05175F40] space-y-3 rounded-lg p-3">
              <img src="/images/mediaImg/banner_7.png" alt="banner_1" />

              <h3 className="text-[1.25rem] leading-[2rem] text-black font-semibold capitalize ">
                Happy Convocation Day
              </h3>
              <p className="text-[1rem] leading-[1.25rem] font-medium italic ">
                Saturday August 10, 2024
              </p>
              <p className="text-[0.75rem] leading-[1.25rem]  ">
                In marking the 2024 International Day of the Girl Child, the JHi
                community engaged her members to give in their say advocating
                for the Girl Child. At Jimoh Habibullah Initiative, we celebrate
                girls' resilience and potential. Every girl deserves: <br /> -
                Freedom from societal barriers and stereotypes. <br /> - Access
                to quality education...
                <span className="text-[#258CCF] font-semibold ">
                  {" "}
                  Read more
                </span>
              </p>
            </div>
            <div className="w-[19.5rem] sm:w-[23.5rem] lg:w-[19.5rem] xl:w-[23.5rem] h-[41.5rem] border border-[#05175F40] space-y-3 rounded-lg p-3">
              <img src="/images/mediaImg/banner_8.png" alt="banner_1" />

              <h3 className="text-[1.25rem] leading-[2rem] text-black font-semibold capitalize ">
                Thriving Youth Summit
              </h3>
              <p className="text-[1rem] leading-[1.25rem] font-medium italic ">
                Saturday August 10, 2024
              </p>
              <p className="text-[0.75rem] leading-[1.25rem]  ">
                In marking the 2024 International Day of the Girl Child, the JHi
                community engaged her members to give in their say advocating
                for the Girl Child. At Jimoh Habibullah Initiative, we celebrate
                girls' resilience and potential. Every girl deserves: <br /> -
                Freedom from societal barriers and stereotypes. <br /> - Access
                to quality education...
                <span className="text-[#258CCF] font-semibold ">
                  {" "}
                  Read more
                </span>
              </p>
            </div>
          </div>
        </div>
        <div
          className="space-y-6 lg:w-[30%] bg-white max-lg:px-4
        "
        >
          <h2 className="text-[2rem] leading-[2.5rem] text-[#292666] font-semibold max-lg:text-center">
            Recent posts
          </h2>
          <div className="rounded-lg border border-[#05175F40] p-4">
            <p className="w-full text-[1rem] leading-[2rem] font-semibold ">
              Research Writing And Academic Publication Techniques
            </p>
            <p className="text-[0.85rem] leading-[1.25rem]">
              Saturday, December 10, 2024{" "}
            </p>
          </div>
          <div className="rounded-lg border border-[#05175F40] p-4">
            <p className="w-full text-[1rem] leading-[2rem] font-semibold ">
              Skill Acquisition And Development
            </p>
            <p className="text-[0.85rem] leading-[1.25rem]">
              Saturday, December 10, 2024{" "}
            </p>
          </div>
          <div className="rounded-lg border border-[#05175F40] p-4">
            <p className="w-full text-[1rem] leading-[2rem] font-semibold ">
              World Teacher’s Day
            </p>
            <p className="text-[0.85rem] leading-[1.25rem]">
              Saturday, December 10, 2024{" "}
            </p>
          </div>

          <div className="rounded-lg border border-[#05175F40] p-4">
            <p className="w-full text-[1rem] leading-[2rem] font-semibold ">
              Combining STEM And Social Responsibility Initiatives
            </p>
            <p className="text-[0.85rem] leading-[1.25rem]">
              Saturday, December 10, 2024{" "}
            </p>
          </div>
          <div className="rounded-lg border border-[#05175F40] p-4">
            <p className="w-full text-[1rem] leading-[2rem] font-semibold ">
              Thriving Youth Summit
            </p>
            <p className="text-[0.85rem] leading-[1.25rem]">
              Saturday, December 10, 2024{" "}
            </p>
          </div>
          <div className="rounded-lg border border-[#05175F40] p-4">
            <p className="w-full text-[1rem] leading-[2rem] font-semibold ">
              Cleaning Up Our Planet: Strategies For A Sustainable Future
            </p>
            <p className="text-[0.85rem] leading-[1.25rem]">
              Saturday, December 10, 2024{" "}
            </p>
          </div>
          <div className="rounded-lg border border-[#05175F40] p-4">
            <p className="w-full text-[1rem] leading-[2rem] font-semibold ">
              Skill Acquisition And Development
            </p>
            <p className="text-[0.85rem] leading-[1.25rem]">
              Saturday, December 10, 2024{" "}
            </p>
          </div>
          <div className="rounded-lg border border-[#05175F40] p-4">
            <p className="w-full text-[1rem] leading-[2rem] font-semibold ">
              Combining STEM And Social Responsibility Initiatives
            </p>
            <p className="text-[0.85rem] leading-[1.25rem]">
              Saturday, December 10, 2024{" "}
            </p>
          </div>
          <div className="rounded-lg border border-[#05175F40] p-4">
            <p className="w-full text-[1rem] leading-[2rem] font-semibold ">
              Research Writing And Academic Publication Techniques
            </p>
            <p className="text-[0.85rem] leading-[1.25rem]">
              Saturday, December 10, 2024{" "}
            </p>
          </div>
          <div className="rounded-lg border border-[#05175F40] p-4">
            <p className="w-full text-[1rem] leading-[2rem] font-semibold ">
              Who Do We Feature On The Spotlight Changemake
            </p>
            <p className="text-[0.85rem] leading-[1.25rem]">
              Saturday, December 10, 2024{" "}
            </p>
          </div>
          <div className="rounded-lg border border-[#05175F40] p-4">
            <p className="w-full text-[1rem] leading-[2rem] font-semibold ">
              Cleaning Up Our Planet: Strategies For A Sustainable Future
            </p>
            <p className="text-[0.85rem] leading-[1.25rem]">
              Saturday, December 10, 2024{" "}
            </p>
          </div>
          <div className="rounded-lg border border-[#05175F40] p-4">
            <p className="w-full text-[1rem] leading-[2rem] font-semibold ">
              Thriving Youth Summit
            </p>
            <p className="text-[0.85rem] leading-[1.25rem]">
              Saturday, December 10, 2024{" "}
            </p>
          </div>
          <div className="rounded-lg border border-[#05175F40] p-4">
            <p className="w-full text-[1rem] leading-[2rem] font-semibold ">
              World Teacher's Day
            </p>
            <p className="text-[0.85rem] leading-[1.25rem]">
              Saturday, December 10, 2024{" "}
            </p>
          </div>
          <div className="rounded-lg border border-[#05175F40] p-4">
            <p className="w-full text-[1rem] leading-[2rem] font-semibold ">
              Cleaning Up Our Planet: Strategies For A Sustainable Future
            </p>
            <p className="text-[0.85rem] leading-[1.25rem]">
              Saturday, December 10, 2024{" "}
            </p>
          </div>
          <div className="rounded-lg border border-[#05175F40] p-4">
            <p className="w-full text-[1rem] leading-[2rem] font-semibold ">
              Combining STEM And Social Responsibility Initiatives
            </p>
            <p className="text-[0.85rem] leading-[1.25rem]">
              Saturday, December 10, 2024{" "}
            </p>
          </div>
          <div className="rounded-lg border border-[#05175F40] p-4">
            <p className="w-full text-[1rem] leading-[2rem] font-semibold ">
              Thriving Youth Summit
            </p>
            <p className="text-[0.85rem] leading-[1.25rem]">
              Saturday, December 10, 2024{" "}
            </p>
          </div>
          <div className="rounded-lg border border-[#05175F40] p-4">
            <p className="w-full text-[1rem] leading-[2rem] font-semibold ">
              Cleaning Up Our Planet: Strategies For A Sustainable Future
            </p>
            <p className="text-[0.85rem] leading-[1.25rem]">
              Saturday, December 10, 2024{" "}
            </p>
          </div>
          <div className="rounded-lg border border-[#05175F40] p-4">
            <p className="w-full text-[1rem] leading-[2rem] font-semibold ">
              Skill Acquisition And Development
            </p>
            <p className="text-[0.85rem] leading-[1.25rem]">
              Saturday, December 10, 2024{" "}
            </p>
          </div>
          <div className="rounded-lg border border-[#05175F40] p-4">
            <p className="w-full text-[1rem] leading-[2rem] font-semibold ">
              Combining STEM And Social Responsibility Initiatives
            </p>
            <p className="text-[0.85rem] leading-[1.25rem]">
              Saturday, December 10, 2024{" "}
            </p>
          </div>
          <div className="rounded-lg border border-[#05175F40] p-4">
            <p className="w-full text-[1rem] leading-[2rem] font-semibold ">
              Research Writing And Academic Publication Techniques
            </p>
            <p className="text-[0.85rem] leading-[1.25rem]">
              Saturday, December 10, 2024{" "}
            </p>
          </div>
          <div className="rounded-lg border border-[#05175F40] p-4">
            <p className="w-full text-[1rem] leading-[2rem] font-semibold ">
              World Teacher's Day
            </p>
            <p className="text-[0.85rem] leading-[1.25rem]">
              Saturday, December 10, 2024{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default News_Stories;
// Skill Acquisition And Development
