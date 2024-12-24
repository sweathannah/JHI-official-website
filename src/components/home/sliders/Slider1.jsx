import React from 'react'

export default function Slider1(props) {
    

    return (
        <>
        <div className='grid grid-cols-1 w-full'>
            <div className=' hidden h-12 md:grid grid-cols-2 gap-0'>
                <p className=''></p>
                <p className=' p-2 bg-[#268ccf]  rounded-t-2xl w-fit text-white border-b-[1px]'>
                    <span>Mentorship Programs</span>
                </p>
            </div>
            <div className='grid grid-cols-2 h-full w-full'>
                <div 
                    className="bg-cover bg-center rounded-tl-3xl rounded-bl-3xl"
                    style={{
                    backgroundImage: 'url("/images/header_image2.svg")', 
                    }}
                > </div>
                <div className=' p-8 rounded-r-3xl bg-[#268ccf]'>
                    <div className=' flex flex-col gap-4 p-8 bg-white text-gray-700 rounded-3xl'>
                        <h3 className="font-[600] text-[1.5rem] mb-[0.9rem]">
                            Mentorship Programs
                        </h3>
                        <p>
                            Our Positive Impact Projects tackle social, economic, and 
                            environmental issues, while our Community Building Initiatives 
                            promote social cohesion through events and training. 
                            Our approach emphasizes collaboration, sustainability, cultural sensitivity, 
                            and empowerment. By focusing on these principles, 
                            we aim to drive transformative change and enable individuals and 
                            communities to reach their full potential.
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
