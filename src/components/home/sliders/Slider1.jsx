import React from 'react'

export default function Slider1(props) {
    

    return (
        <>
          <div className="flex justify-center h-full">
              <div className="w-[45%] flex items-stretch">
                <img src="/images/header_image2.svg" alt="slide-2" className="w-full h-full object-cover rounded-s-[1.875rem]" />
              </div>
              <div className='flex flex-col  w-[45%]'>
                <div className="flex items-start bg-[#292666] text-white px-4 py-2 rounded-t-[1rem] z-10 text-sm w-fit">
                  Mentorship Programs
                </div>
                <div className="p-[1.875rem] bg-[#292666] rounded-e-[1.875rem] ">
                <div className="bg-white rounded-[1.875rem] p-[1.875rem] h-full text-[#333333] mb-[4rem]">
                  <h3 className="font-[600] text-[1.5rem] mb-[0.9rem]">Mentorship Programs</h3>
                  <p className="font-[400] text-[0.9rem] leading-[1.5rem] w-[90%] mb-[1.5rem]">
                    Our Positive Impact Projects tackle social, economic, and environmental issues, while our Community Building Initiatives promote social cohesion through events and training. Our approach emphasizes collaboration, sustainability, cultural sensitivity, and empowerment. By focusing on these principles, we aim to drive transformative change and enable individuals and communities to reach their full potential.
                  </p>
                  <a href="#" className="text-[#FFAA00] font-normal text-[1rem] my-[1.5rem] flex flex-row">
                    Read More
                    <img src="/images/yellow_arrow.svg" alt="Yellow arrow right" className='px-[0.6rem]' />
                  </a>
                </div>
                </div>
              </div>
            </div>  
        </>
    )
}
