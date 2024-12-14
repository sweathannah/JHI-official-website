import React from "react";

const Gallery = () => {
  return (
    <>
        <section className="bg-[url('/images/header.jpeg')] bg-cover bg-no-repeat h-[100vh] w-full relative flex items-center justify-center">
            {/* Background Overlay  */}
            <div className="absolute inset-0 bg-black bg-opacity-45 "></div>

            <h1 className="text-white text-[52px] leading-[62px] text-center font-bold font-[Montserrat] z-30">
                Gallery
            </h1>
        </section>
        <section className="py-10 px-[4rem]">
            <article className='w-fit m-auto text-center flex flex-col items-center max-w-[69rem]'>
                <h4 className='my-[1.25rem] text-[#292666] font-[600] lg:text-[2.5rem] text-[1.8rem]'>
                    Photos & Videos
                </h4>
                <p className='font-[400] text-[1.125rem] leading-[1.9rem] text-[#333333] text-center'>
                    JHI makes an effort to ensure that her members have the opportunity to see all the videos and pictures about the old events. So, at JHI, all the events organized are well documented.  
                </p>
                <button className="flex my-[2.8rem]">
                    <a href="#">Photos</a>
                    <a href="#">Videos</a>
                </button>
            </article>
            <article className="flex flex-col">
                <div className="flex flex-row justify-between items-center my-[1rem]">
                    <p className="font-[600] text-[1.5rem] text-[#333333] ">Photos Of The Empowernment Youth Changemakers Leadership... (12/09/24) </p>
                    <span className="font-[700] text-[1rem] text-[#258CCF] ">View less</span>
                </div>
                <div className="flex flex-row flex-wrap gap-[1rem]">
                    <img src="/images/Gallery_images/sec1_image1.svg" alt="" />
                    <img src="/images/Gallery_images/sec1_image2.svg" alt="" />
                    <img src="/images/Gallery_images/sec1_image3.svg" alt="" />
                    <img src="/images/Gallery_images/sec1_image4.svg" alt="" />
                    <img src="/images/Gallery_images/sec1_image5.svg" alt="" />
                    <img src="/images/Gallery_images/sec1_image6.svg" alt="" />
                    <img src="/images/Gallery_images/sec1_image7.svg" alt="" />
                    <img src="/images/Gallery_images/sec1_image8.svg" alt="" />
                    <img src="/images/Gallery_images/sec1_image9.svg" alt="" />
                    <img src="/images/Gallery_images/sec1_image10.svg" alt="" />
                    <img src="/images/Gallery_images/sec1_image11.svg" alt="" />
                    <img src="/images/Gallery_images/sec1_image12.svg" alt="" />
                    <img src="/images/Gallery_images/sec1_image13.svg" alt="" />
                </div>
            </article>
        </section>
    </>
  );
}

export default Gallery ;