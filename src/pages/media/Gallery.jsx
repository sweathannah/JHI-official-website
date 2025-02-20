import React, { useEffect, useState } from "react";
import PhotoSection from "../../components/PhotoSection";
import VideoSection from "../../components/VideoSection";
import { motion } from "framer-motion";
import {bannerVariant} from '../../animation/animation'

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState("photos");
  const photoSections = [
    {
      title: "Photos Of The Empowerment Youth Changemakers Leadership Summit (12/09/24)",
      images: [
        "/images/Gallery_images/sec1_image1.svg",
        "/images/Gallery_images/sec1_image2.svg",
        "/images/Gallery_images/sec1_image3.svg",
        "/images/Gallery_images/sec1_image4.svg",
        "/images/Gallery_images/sec1_image5.svg",
        "/images/Gallery_images/sec1_image6.svg",
        "/images/Gallery_images/sec1_image3.svg",
        "/images/Gallery_images/sec1_image2.svg",
        "/images/Gallery_images/sec1_image7.svg",
        "/images/Gallery_images/sec1_image8.svg",
        "/images/Gallery_images/sec1_image6.svg",
        "/images/Gallery_images/sec1_image9.svg",
        "/images/Gallery_images/sec1_image6.svg",
      ],
      widths: [
        "calc(38% - 1rem)",
        "calc(35% - 1rem)",
        "calc(33% - 5rem)",
        "calc(33% - 2rem)",
        "calc(33% - 4rem)",
        "calc(40% - 1rem)",
        "calc(25% - 1rem)",
        "calc(25% - 1rem)",
        "calc(25% - 0.2rem)",
        "calc(25% - 1rem)",
        "calc(34% - 1rem)",
        "calc(38% - 1rem)",
        "calc(28% - 0.3rem)",
      ],
    },
    {
      title: "Photos Of The Cleaning Up Our Planet: Strategies For A Sustainable environment (24/09/24) ",
      images: [
        "/images/Gallery_images/sec2_image1.svg",
        "/images/Gallery_images/sec2_image2.svg",
        "/images/Gallery_images/sec2_image3.svg",
        "/images/Gallery_images/sec2_image4.svg",
        "/images/Gallery_images/sec2_image5.svg",
        "/images/Gallery_images/sec2_image6.svg",
        "/images/Gallery_images/sec2_image7.svg",
      ],
      widths: [
        "calc(25% - 1rem)",
        "calc(25% - 1rem)",
        "calc(25% - 0.2rem)",
        "calc(25% - 1rem)",
        "calc(35% - 1rem)",
        "calc(39% - 1rem)",
        "calc(27% - 1rem)",
      ],
    },
    {
      title: "Photos Of The Skill Acquisition & Development (08/09/24)  ",
      images: [
        "/images/Gallery_images/sec3_image1.svg",
        "/images/Gallery_images/sec3_image2.svg",
        "/images/Gallery_images/sec3_image3.svg",
        "/images/Gallery_images/sec3_image4.svg",
        "/images/Gallery_images/sec3_image5.svg",
        "/images/Gallery_images/sec3_image6.svg",
      ],
      widths: [
        "calc(35% - 1rem)",
        "calc(34% - 1rem)",
        "calc(32% - 1rem)",
        "calc(30% - 1rem)",
        "calc(35% - 1rem)",
        "calc(35% - 0.4rem)",
      ],
    },


    // Add more sections as needed
  ];

  const videoSections = [
    {
      title: "Voices of Change: JHI Members Share Thoughts on International Girl Child Day (11/10/24)",
      videos: [
        "/videos/Gallery_videos/video1.mp4",
        "/videos/Gallery_videos/video4.mp4",
        "/videos/Gallery_videos/video3.mp4",
      ],
      widths: [
        "calc(38% - 1rem)",
        "calc(35% - 1rem)",
        "calc(33% - 5rem)",
      ],
    },
    {
      title: "Videos Of The Cleaning Up Our Planet: Strategies For A Sustainable Environment (24/09/24)",
      videos: [
        "/videos/Gallery_videos/video5.mp4",
        "/videos/Gallery_videos/video2.mp4",
      ],
      widths: [
        "calc(50% - 1rem)",
        "calc(50% - 1rem)",
      ],
    },
  ];

  return (
    <>
      {/* Header Section */}
      <section
        style={{ backgroundImage: "url('/images/header.jpeg')" }}
        className="bg-cover bg-no-repeat h-[100vh] w-full relative flex items-center justify-center"
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-45"></div>

        <motion.h1
        variants={bannerVariant}
        initial='initial'
        animate='animate'
        className="text-white text-[52px] leading-[62px] text-center font-bold font-[Montserrat] z-30">
          Gallery
        </motion.h1>
      </section>

      <section className="py-10 px-[2rem]">
        {/* Intro Section */}
        <article className="w-fit m-auto text-center flex flex-col items-center">
          <h4 className="my-[1.25rem] text-[#292666] font-[600] lg:text-[2.5rem] text-[1.8rem]">
            Photos & Videos
          </h4>
          <p className="font-[400] text-[1.125rem] leading-[1.9rem] text-[#333333] text-center mb-10 lg:max-w-[70rem] max-w-[20rem]">
            JHI makes an effort to ensure that her members have the opportunity
            to see all the videos and pictures about the old events. So, at JHI,
            all the events organized are well documented.
          </p>

          {/* Tab Switcher */}
          <div className="flex justify-center mb-16 bg-[#05175F26] rounded-[1.88rem] p-[0.3rem]">
            <button
              className={`lg:px-[5.4rem] px-[3rem] py-[1.125rem] rounded-full font-medium text-sm ${
                activeTab === "photos"
                  ? "bg-[#292666] text-white"
                  : "text-[#333333]"
              }`}
              onClick={() => setActiveTab("photos")}
            >
              Photos
            </button>
            <button
              className={`lg:px-[5.4rem] px-[3rem] py-[1.125rem] rounded-full font-medium text-sm ${
                activeTab === "videos"
                  ? "bg-[#292666] text-white"
                  : "text-[#333333]"
              }`}
              onClick={() => setActiveTab("videos")}
            >
              Videos
            </button>
          </div>
        </article>

        {/* Photos Section */}
        {activeTab === "photos" &&
          photoSections.map((section, index) => (
            <PhotoSection
              key={index}
              title={section.title}
              images={section.images}
              widths={section.widths}
            />
          ))}

        {/* Videos Section */}
        {activeTab === "videos" &&
        videoSections.map((section, index) => (
          <VideoSection
            key={index}
            title={section.title}
            videos={section.videos}
            widths={section.widths}
          />
        ))}

      </section>

      <section className="m-[5rem] bg-[#333333] p-[1.5rem] rounded-[0.5rem] border-[0.125rem] border-[#333333] text-[#FFFFFF] text-[1.125rem] font-[400] ">
        <p>
          Have something interesting to say about Jimoh Habibullahi Initiative?  
          <span className="text-[#FFAA00] font-[700] ">  Say it here</span>
        </p>
      </section>
    </>
  );
};

export default GalleryPage;
