import { MdArrowRight } from "react-icons/md";
import { MdArrowLeft } from "react-icons/md";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
const About = () => {
  return (
    <>
      <section>
        <div className="bg-[url('/images/header.jpeg')] bg-cover bg-no-repeat h-[100vh] w-full flex items-center justify-center ">
          <h1 className="text-white text-[52px] leading-[62px] text-center font-bold font-[Montserrat]">
            Who we are
          </h1>
        </div>
      </section>
      <section className="font-[Montserrat] my-[7rem] px-[7rem]">
        <div>
          <h2 className="text-[#292666] text-[2.5rem] leading-[3.1rem] text-center font-semibold">
            About the organization
          </h2>
          <p className="text-[1rem] leading-[2rem] text-[#333333] text-center mt-[1.3rem]">
            The Jimoh Habibullah Initiative is a NGO dedicated to fostering
            empathy, empowerment, and community growth. We offer mentorship
            programs, including one-on-one mentoring and workshops, to help
            individuals achieve their goals. <br /> Our Positive Impact Projects
            tackle social, economic, and environmental issues, while our
            Community Building Initiatives promote social cohesion through
            events and training. <br /> Our approach emphasizes collaboration,
            sustainability, cultural sensitivity, and empowerment. By focusing
            on these principles, we aim to drive transformative change and
            enable individuals and communities to reach their full potential.{" "}
            <br /> The Foundation was established in 2020 by Jimoh Habibullahi
            an astute and successful businessman. The Foundation is based in
            Ilorin, Nigeria.
          </p>
        </div>
      </section>
      <section className="max-w-[90rem] mx-auto font-[Montserrat]">
          <div className="w-full flex flex-col p-10 pb-4 justify-center items-center gap-20 max-lg:mb-16 lg:px-10 lg:w-[90%]  lg:justify-between lg:gap-8  lg:items-end lg:flex-row ">
            <div className=" ">
              <div className="bg-[#05175FD9] max-w-[26rem] rounded-[1.25rem] space-y-3 py-10 px-8">
                <h2 className="text-white font-semibold text-[1.75rem] leading-[2.5rem]">
                  Our Mission
                </h2>
                <p className="text-white text-[1rem] leading-[1.25rem] ">
                  The Jimoh Habibullah Initiative is committed to enhancing the
                  quality of life of Nigerians by supporting initiatives that
                  improve access to health and educational opportunities.
                </p>
              </div>
            </div>
            <div className="lg:pr-20">
              <div className="bg-[#FFAA00E3] max-w-[26rem]  rounded-[1.25rem] space-y-3 py-10 px-8">
                <h2 className="text-white font-semibold text-[1.75rem] leading-[2.5rem]">
                  Our Vision
                </h2>
                <p className="text-white text-[1rem] leading-[1.25rem] ">
                  Empowering individuals and communities to thrive and reach
                  their full potential. We strive to create a lasting impact by
                  addressing critical social, economic, and environmental
                  issues, fostering inclusive communities, and promoting
                  collective growth.
                </p>
              </div>
            </div>
          </div>
          <div className="h-[10.5rem] -mb-12  w-[98%] max-lg:hidden mx-auto">
            <div className=" mt-16 flex w-full">
              <div className="text-[#05175FD9] flex items-center w-[18%]">
                <span className="-mr-2">
                  <MdArrowLeft />
                </span>
                <span className="w-full border-b-2 border-[#05175FD9] border-dashed flex flex-wrap"></span>{" "}
              </div>

              <div className="relative ">
                <div className="text-[#05175FD9]  flex justify-center items-center flex-col-reverse -mt-[5.2rem]">
                  <span className="w-8 h-8 bg-[#05175FD9] rounded-full flex justify-center items-center text-white border-4 border-[#7180b8d9] font-semibold">
                    M
                  </span>
                  <span className="border-r-2 border-r-[#05175FD9] border-dashed h-[4.5rem] block"></span>
                  <span className="-mb-2">
                    <IoMdArrowDropup />
                  </span>
                </div>
              </div>
              
              <div className="text-[#05175FD9] flex w-[18%] items-center ">
                <span className="w-full border-b-2 border-[#05175FD9] border-dashed"></span>{" "}
              </div>
              <div className="text-[#00B919D9]   flex flex-col justify-center  items-center -mb-20">
              <span className="w-8 h-8 bg-[#00B919D9] rounded-full flex justify-center items-center text-white border-4 border-green-200 font-semibold">G</span>
                <span className="border-r-2 border-[#00B919D9]  h-[4.5rem] border-dashed"></span>
                <span className="-mt-2">
                  <IoMdArrowDropdown />
                </span>
              </div>
              <div className="text-[#00B919D9] flex items-center w-[20%] xl:w-[28%]">
                <span className="w-full border-b-2 border-b-[#00B919D9] border-dashed"></span>{" "}
              </div>
              <div className="text-[#FFAA00E3]  flex justify-center items-center flex-col-reverse -mt-[5.5rem]">
                  <span className="w-8 h-8 bg-[#FFAA00E3] rounded-full flex justify-center items-center text-white border-4 border-[#f7d592e3] font-semibold">
                    V
                  </span>
                  <span className="border-r-2 border-r-[#FFAA00E3] border-dashed h-[4.5rem] block"></span>
                  <span className="-mb-2">
                    <IoMdArrowDropup />
                  </span>
                </div>
              <div className="text-[#FFAA00E3] flex items-center w-[18%]">
                <span className="border-b-2 border-b-[#FFAA00E3] border-dashed w-full"></span>{" "}
              </div>
              <div className="text-[#B93800D9]   flex flex-col justify-center  items-center -mb-20">
              <span className="w-8 h-8 bg-[#B93800D9] rounded-full flex justify-center items-center text-white border-4 border-[#daa28ad9] font-semibold">V</span>
                <span className="border-r-2 border-[#B93800D9]  h-[4.5rem] border-dashed"></span>
                <span className="-mt-2">
                  <IoMdArrowDropdown />
                </span>
              </div>
              <div className="text-[#B93800D9] flex items-center w-[18%]">
                <span className=" border-b-2 border-b-[#B93800D9] border-dashed flex flex-wrap w-full"></span>{" "}
                <span className="-ml-1">
                  <MdArrowRight />
                </span>
              </div>
            </div>
          </div>
         <div className="w-full flex justify-end">
         <div className="w-full p-10 flex flex-col items-center justify-center gap-20 lg:w-[85%] lg:px-20 lg:flex-row lg:-mt-12 lg:justify-between lg:gap-8  lg:items-start">
            <div>
              <div className="max-w-[26rem]  bg-[#00B919D9] py-10 px-8 space-y-3 rounded-[1.25rem]">
                <h2 className="text-white font-semibold text-[1.75rem] leading-[2.5rem]">
                  Our Goals
                </h2>
                <ul className="list-disc list-inside text-white text-[1rem]">
                  <li>
                    Enhance community health care by providing free medical
                    services to rural communities which lack adequate medical
                    facilities
                  </li>
                  <li>
                    Improve the quality of education of children and young
                    people; and
                  </li>
                  <li>
                    Alleviate the extreme poverty in communities across the
                    country by providing humanitarian assistance, clean drinking
                    water, and encouraging the empowerment of people.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="max-w-[26rem]  bg-[#B93800D9] py-10 px-8 space-y-3 rounded-[1.25rem]">
                <h2 className="text-white font-semibold text-[1.75rem] leading-[2.5rem]">
                  Our Values
                </h2>
                <ul className="list-disc list-inside text-white text-[1rem]">
                  <li>
                    We uphold the values of Empathy, Empowerment, Community,
                    Collaboration, Sustainability, and Cultural Sensitivity.{" "}
                  </li>
                  <li>
                    We believe in respecting diverse perspectives, promoting
                    self-sufficiency, and driving positive change. Our approach
                    is centered on equipping individuals and communities with
                    the tools and resources needed to overcome challenges and
                    achieve their goals, ensuring a brighter future for all.
                  </li>
                </ul>
              </div>
            </div>
          </div>
         </div>
      </section>
      <section className="h-[100vh] w-full bg-custom-gradient">

      </section>
    </>
  );
};

export default About;
