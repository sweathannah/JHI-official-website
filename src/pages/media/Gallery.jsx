import React, { useState } from "react";
import GallerySection from '../../components/gallery';

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

      <GallerySection/>
    </>
    );
};

export default Gallery;
