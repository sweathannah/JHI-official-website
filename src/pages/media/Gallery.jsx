import React, { useEffect, useState } from "react";
import GallerySection from '../../components/gallery';
import {motion} from 'framer-motion'
import {bannerVariant} from '../../animation/animation'

const Gallery = () => {
  // State to track the active tab ('photos' or 'videos')
  const [activeTab, setActiveTab] = useState("photos");


  return (
    <>
      {/* Header Section */}
      <section className="bg-[url('/images/header.jpeg')] bg-cover bg-no-repeat h-[100vh] w-full relative flex items-center justify-center">
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

      {/* Content Section */}

      <GallerySection/>
    </>
    );
};

export default Gallery;
