import { useState } from "react";
import { motion } from "framer-motion";
import { textVariants, imageVariants } from "../animation/animation";

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState("photos");

  // Array of image sources for the Photos tab
  const imagePaths = [
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
  ];

  // Array of corresponding widths for each image
  const imageWidths = [
    "calc(38% - 1rem)",
    "calc(35% - 1rem)",
    "calc(33% - 6rem)",
    "calc(33% - 2rem)",
    "calc(33% - 4rem)",
    "calc(40% - 2rem)",
    "calc(25% - 1rem)",
    "calc(25% - 1rem)",
    "calc(25% - 1rem)",
    "calc(25% - 1rem)",
    "calc(34% - 1rem)",
    "calc(38% - 1rem)",
    "calc(28% - 1rem)",
  ];

  return (
    <section className="py-10 px-[2rem]">
      {/* Intro Section */}
      <article className="w-fit m-auto text-center flex flex-col items-center">
        <motion.h4
          variants={textVariants}
          initial="initial"
          whileInView="inView"
          viewport={{ once: true, amount: 0.5 }}
          className="my-[1.25rem] text-[#292666] font-[600] lg:text-[2.5rem] text-[1.8rem]"
        >
          Photos & Videos
        </motion.h4>
        <motion.p
          variants={textVariants}
          initial="initial"
          whileInView="inView"
          viewport={{ once: true, amount: 0.5 }}
          className="font-[400] text-[1.125rem] leading-[1.9rem] text-[#333333] text-center mb-10 lg:max-w-[70rem] max-w-[20rem]"
        >
          JHI makes an effort to ensure that her members have the opportunity to
          see all the videos and pictures about the old events. So, at JHI, all
          the events organized are well documented.
        </motion.p>

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

      {/* Videos Section */}
      {activeTab === "videos" && (
        <div className="flex flex-col items-center">
          <p className="text-gray-600 text-lg mb-4">
            Coming soon: Video gallery content
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-200 w-full h-40 flex items-center justify-center">
              <p>Video 1</p>
            </div>
            <div className="bg-gray-200 w-full h-40 flex items-center justify-center">
              <p>Video 2</p>
            </div>
          </div>
        </div>
      )}

      {/* Photos Section */}
      {activeTab === "photos" && (
        <article className="flex flex-col">
          <motion.div
            variants={textVariants}
            initial="initial"
            whileInView="inView"
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-row justify-between lg:items-center items-end my-[1rem]"
          >
            <p className="font-[600] text-[1.5rem] text-[#333333]">
              Photos Of The Empowerment Youth Change-makers Leadership...
              (12/09/24)
            </p>
            <span className="font-[700] text-[1rem] text-[#258CCF] cursor-pointer">
              View less
            </span>
          </motion.div>

          {/* Dynamic Photo Grid */}
          <div className="flex flex-wrap gap-4">
            {imagePaths.map((path, index) => (
                <motion.img
                variants={imageVariants}
                initial='initial'
                whileInView='inView'
                viewport={{once: true, amount: 0.5}}
                  key={index}
                  src={path}
                  alt={`Gallery Image ${index + 1}`}
                  style={{
                    width: imageWidths[index],
                  }}
                  className="h-auto object-cover"
                />
            ))}
          </div>
        </article>
      )}
    </section>
  );
};

export default GallerySection;
