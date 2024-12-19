import React, { useState } from "react";

const Gallery = () => {
  // State to track the active tab ('photos' or 'videos')
  const [activeTab, setActiveTab] = useState("photos");

  return (
    <>
      {/* Header Section */}
      <section className="bg-[url('/images/header.jpeg')] bg-cover bg-no-repeat h-[100vh] w-full relative flex items-center justify-center">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-45"></div>

        <h1 className="text-white text-[52px] leading-[62px] text-center font-bold font-[Montserrat] z-30">
          Gallery
        </h1>
      </section>

      {/* Content Section */}
      <section className="py-10 px-[2rem] mb-[7.5rem]">
        {/* Intro Section */}
        <article className="w-fit m-auto text-center flex flex-col items-center">
            <h4 className="my-[1.25rem] text-[#292666] font-[600] lg:text-[2.5rem] text-[1.8rem]">
                Photos & Videos
            </h4>
            <p className="font-[400] text-[1.125rem] leading-[1.9rem] text-[#333333] text-center mb-10 max-w-[70rem]">
                JHI makes an effort to ensure that her members have the opportunity to
                see all the videos and pictures about the old events. So, at JHI, all
                the events organized are well documented.
            </p>

            {/* Tab Switcher */}
            <div className="flex justify-center space-x-4 mb-16 bg-[#05175F26] rounded-[1.88rem] p-[0.3rem]">
                <button
                className={`px-[5.4rem] py-[1.125rem] rounded-full font-medium text-sm ${
                    activeTab === "photos"
                    ? "bg-[#292666] text-white"
                    : " text-[#333333]"
                }`}
                onClick={() => setActiveTab("photos")}
                >
                Photos
                </button>
                <button
                className={`px-[5.4rem] py-[1.125rem] rounded-full font-medium text-sm ${
                    activeTab === "videos"
                    ? "bg-[#292666] text-white"
                    : " text-[#333333]"
                }`}
                onClick={() => setActiveTab("videos")}
                >
                Videos
                </button>
            </div>

          {activeTab === "videos" && (
            <div className="flex flex-col items-center">
              <p className="text-gray-600 text-lg mb-4">
                Coming soon: Video gallery content
              </p>
              {/* Placeholder video thumbnails or embed video players here */}
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
        </article>

        {/* Photos Section Example */}
        {activeTab === "photos" && (
          <article className="flex flex-col">
            <div className="flex flex-row justify-between items-center my-[1rem]">
              <p className="font-[600] text-[1.5rem] text-[#333333]">
                Photos Of The Empowerment Youth Changemakers Leadership...
                (12/09/24)
              </p>
              <span className="font-[700] text-[1rem] text-[#258CCF] cursor-pointer">
                View less
              </span>
            </div>
            <div className="flex flex-row flex-wrap gap-[1rem]">
                
               <img
                src="/images/Gallery_images/sec1_image1.svg"
                alt="Gallery Image 1"
                className="max-w-[calc(33%-2rem)] h-auto object-cover"
              />
              <img
                src="/images/Gallery_images/sec1_image2.svg"
                alt="Gallery Image 2"
                className="max-w-[calc(33%-1rem)] h-auto object-cover"
              />
              <img
                src="/images/Gallery_images/sec1_image3.svg"
                alt="Gallery Image 3"
                className="max-w-[calc(33%-1rem)] h-auto object-cover"
              />
              <img
                src="/images/Gallery_images/sec1_image4.svg"
                alt="Gallery Image 4"
                className="w-[calc(33%-1rem)] h-auto object-cover"
              />
              <img
                src="/images/Gallery_images/sec1_image5.svg"
                alt="Gallery Image 5"
                className="w-[calc(33%-1rem)] h-auto object-cover"
              />
              <img
                src="/images/Gallery_images/sec1_image6.svg"
                alt="Gallery Image 6"
                className="w-[calc(33%-1rem)] h-auto object-cover"
              />
              {/* Add more images as needed */}
            </div>
          </article>
        )}
      </section>
    </>
    );
};

export default Gallery;
