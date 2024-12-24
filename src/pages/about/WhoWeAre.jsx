import { MdArrowRight } from "react-icons/md";
import { MdArrowLeft } from "react-icons/md";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";

const About = () => {
  return (
    <>
      <section className="bg-[url('/images/header.jpeg')] bg-cover bg-no-repeat h-[100vh] w-full relative flex items-center justify-center">
        {/* Background Overlay  */}
        <div className="absolute inset-0 bg-black bg-opacity-45 "></div>

        <h1 className="text-white text-[52px] leading-[62px] text-center font-bold font-[Montserrat] z-30">
          Who we are
        </h1>
      </section>
      <section className="font-[Montserrat] mt-[7rem] ">
        <div className="px-4">
          <h2 className="text-[#292666] text-[2.5rem] leading-[3.1rem] text-center font-semibold max-sm:text-[2rem] max-sm:leading-[2.5rem]">
            About the organization
          </h2>
          <p className="text-[1rem] leading-[2rem] max-sm:text-base max-sm:leading-relaxed text-[#333333] text-center mt-[1.3rem] max-sm:text-justify max">
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
        <div className="w-full flex flex-col p-10 pb-4 justify-center items-center gap-20 max-lg:mb-10 lg:px-10 lg:w-[90%]  lg:justify-between lg:gap-8  lg:items-end lg:flex-row ">
          <div className=" ">
            <div className="bg-[#05175FD9] max-w-[26rem] h-[14rem] rounded-[1.25rem] space-y-3 py-10 px-8">
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
            <div className="bg-[#FFAA00E3] max-w-[26rem] h-[14rem] rounded-[1.25rem] space-y-3 py-5 px-7 overflow-clip ">
              <h2 className="text-white font-semibold text-[1.75rem] leading-[2.5rem]">
                Our Vision
              </h2>
              <p className="text-white text-[1rem] leading-[1.25rem]">
                Empowering individuals and communities to thrive and reach their
                full potential. We strive to create a lasting impact by
                addressing critical social, economic, and environmental issues,
                fostering inclusive communities, and promoting collective
                growth.
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
              <span className="w-8 h-8 bg-[#00B919D9] rounded-full flex justify-center items-center text-white border-4 border-green-200 font-semibold">
                G
              </span>
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
              <span className="w-8 h-8 bg-[#B93800D9] rounded-full flex justify-center items-center text-white border-4 border-[#daa28ad9] font-semibold">
                V
              </span>
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
          <div className="w-full p-10 flex flex-col items-center justify-center gap-20 lg:w-[85%] lg:px-20 lg:flex-row lg:-mt-12 lg:justify-between lg:gap-8  lg:items-start max-sm:-mb-64">
            <div>
              <div className="max-w-[26rem]  bg-[#00B919D9] p-7 space-y-3 rounded-[1.25rem] h-[20rem] overflow-clip">
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
              <div className="max-w-[26rem]  bg-[#B93800D9] p-7 space-y-3 rounded-[1.25rem] h-[20rem] overflow-clip">
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
      <section className="w-full bg-[url('/images/jsf_section/journeySofar_bg.png')] bg-no-repeat bg-cover h-fit overflow-auto">
      <div className="p-24  max-sm:mt-96 sm:mt-44 lg:mt-10">
          <h2 className="text-[#292666] font-semibold text-center text-[2.5rem] leading-[3.1rem] mb-4">
            Our Journey So Far
          </h2>
          <p className="text-[1rem] leading-[2rem] text-center text-[#333333]">
            By focusing on these principles, we aim to drive transformative
            change and enable individuals and communities to reach their full
            potential.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(1,_310px)] sm:grid-cols-[repeat(2,_310px)] lg:grid-cols-[repeat(3,_310px)] xl:grid-cols-[repeat(4,_310px)] grid-rows-[repeat(16,_580px)] sm:grid-rows-[repeat(8,_580px)] lg:grid-rows-[repeat(6,_580px)] xl:grid-rows-[repeat(3,_580px)] items-center  p-4  justify-center">
          <div className="w-full h-full sm:border-t-[1.5px] sm:border-t-[#292666] sm:border-dashed relative">
            <span className="absolute left-0 top-0  -mt-[9px] -ml-2 invisible sm:visible"><MdArrowLeft/></span>
            <div className="flex flex-col justify-center items-center -mt-6">
              <span className="text-white bg-[#292666] border-4 border-[#8280b4] h-[2.9rem] w-[2.9rem] font-bold text-[1.3rem] leading-[2.5rem] inline-block text-center rounded-full ">
                1
              </span>
              <span className="h-[2.75rem] border-r-[1.5px] divide-dashed border-r-[#292666] border-dashed"></span>
              <span className="-mt-1">
                <IoMdArrowDropdown />
              </span>
            </div>
            <div className="w-[18.5rem] h-[28rem] bg-white mx-auto border border-[#05175F80] rounded-[0.5rem]">
              <h2 className="text-center text-[1rem] leading-[1.3rem] font-semibold text-[#292666] py-3">
                12th August, 2024
              </h2>
              <div className="flex justify-center">
                <img src="/images/jsf_section/firstImg.png" alt="first image" />
              </div>
              <p className="text-[0.75rem] leading-[1.25rem] p-2">
                The JHI marked the International Youth Day via a webinar that
                was held on Google Meet, with the theme
                <span className="font-semibold">
                  {" "}
                  “EMPOWERING YOUTH CHANGEMAKERS: LEADERSHIP, SUSTAINABILITY AND
                  ENTREPRENEUR FOR A BETTER TOMORROW”{" "}
                </span>{" "}
                <br />
                The JHi recorded over 20 attendants on the webinar. The speakers
                exhaustively shared their expertise on the webinar’s theme which
                left all those that were... <span>Read more</span>
              </p>
            </div>
          </div>
          <div className="w-full h-full sm:border-t-[1.5px] sm:border-t-[#292666] sm:border-dashed relative">
            <span className="absolute top-0 right-0 -mt-[9px] -mr-2 invisible sm:visible lg:invisible"><MdArrowRight/></span>
            <div className="flex flex-col justify-center items-center -mt-6">
              <span className="text-white bg-[#292666] border-4 border-[#8280b4] h-[2.9rem] w-[2.9rem] font-bold text-[1.3rem] leading-[2.5rem] inline-block text-center rounded-full ">
                2
              </span>
              <span className="h-[2.75rem] border-r-[1.5px] divide-dashed border-r-[#292666] border-dashed"></span>
              <span className="-mt-1">
                <IoMdArrowDropdown />
              </span>
            </div>
            <div className="w-[18.5rem] h-[28rem] bg-white mx-auto border border-[#05175F80] rounded-[0.5rem]">
              <h2 className="text-center text-[1rem] leading-[1.3rem] font-semibold text-[#292666] py-3">
                13th August, 2024
              </h2>
              <div className="flex justify-center">
                <img
                  src="/images/jsf_section/secondImg.png"
                  alt="second image"
                />
              </div>
              <p className="text-[0.75rem] leading-[1.25rem] p-2">
                Another exciting webinar themed{" "}
                <span className="font-semibold">
                  “CRAFTING COMPELLING PITCHES: A DESIGN THINKING APPROACH TO
                  DEVELOPING AND SELLING YOUR IDEAS”{" "}
                </span>{" "}
                <br />
                was hosted on Google Meet. The webinar taught on how to develop
                and sell one's idea with confidence as attendants also
                discovered the art of crafting pitches that resonate with their
                target audience... <span>Read more</span>
              </p>
            </div>
          </div>
          <div className="w-full h-full  sm:border-t-[1.5px] sm:border-t-[#292666] sm:border-dashed relative">
            <span className="absolute top-0 left-0 -mt-[9px] -ml-2 invisible sm:visible lg:invisible"><MdArrowLeft/></span>
            <span className="absolute top-0 right-0 -mt-[9px] -mr-2 invisible lg:visible xl:invisible"><MdArrowRight/></span>
            <div className="flex flex-col justify-center items-center -mt-6">
              <span className="text-white bg-[#292666] border-4 border-[#8280b4] h-[2.9rem] w-[2.9rem] font-bold text-[1.3rem] leading-[2.5rem] inline-block text-center rounded-full ">
                3
              </span>
              <span className="h-[2.75rem] border-r-[1.5px] divide-dashed border-r-[#292666] border-dashed"></span>
              <span className="-mt-1">
                <IoMdArrowDropdown />
              </span>
            </div>
            <div className="w-[18.5rem] h-[28rem] bg-white mx-auto border border-[#05175F80] rounded-[0.5rem]">
              <h2 className="text-center text-[1rem] leading-[1.3rem] font-semibold text-[#292666] py-3">
                19th August, 2024
              </h2>
              <div className="flex justify-center">
                <img src="/images/jsf_section/thirdImg.png" alt="third image" />
              </div>
              <p className="text-[0.75rem] leading-[1.25rem] p-2">
                World Humanitarian Day - the JHI marked the World Humanitarian
                Day with the theme
                <span className="font-semibold">“ACT FOR HUMANITY” </span> in
                grand style as she shared with her community
                https://www.disasterready.org/ that offers free courses on
                humanitarianism in a bid to make the youths acquainted on how to
                tirelessly make a difference in impacting humanity. No fewer
                than 17 members of... <span>Read more</span>
              </p>
            </div>
          </div>
          <div className="w-full h-full  sm:border-t-[1.5px] sm:border-t-[#292666] sm:border-dashed relative">
          <span className="absolute right-0 top-0 text-xl -mt-[10.5px] -mr-2 invisible sm:visible lg:invisible xl:visible "><MdArrowRight/></span>
          <span className="absolute top-0 left-0 -mt-[9px] -ml-2 invisible lg:visible xl:invisible"><MdArrowLeft/></span>
            <div className="flex flex-col justify-center items-center -mt-6">
              <span className="text-white bg-[#292666] border-4 border-[#8280b4] h-[2.9rem] w-[2.9rem] font-bold text-[1.3rem] leading-[2.5rem] inline-block text-center rounded-full ">
                4
              </span>
              <span className="h-[2.75rem] border-r-[1.5px] divide-dashed border-r-[#292666] border-dashed"></span>
              <span className="-mt-1">
                <IoMdArrowDropdown />
              </span>
            </div>
            <div className="w-[18.5rem] h-[28rem] bg-white mx-auto border border-[#05175F80] rounded-[0.5rem]">
              <h2 className="text-center text-[1rem] leading-[1.3rem] font-semibold text-[#292666] py-3">
                22nd August, 2024
              </h2>
              <div className="flex justify-center">
                <img
                  src="/images/jsf_section/fourthImg.png"
                  alt="fourth image"
                />
              </div>
              <p className="text-[0.75rem] leading-[1.25rem] p-2">
                The JHI was represented at the Kwara-SDG Convention themed
                <span className="font-semibold">
                  {" "}
                  “HARNESSING TODAY'S OPPORTUNITIES FOR A SUSTAINABLE FUTURE”
                </span>{" "}
                by Aishat Opeyemi Babatunde (Director of Communication, JHi)
                where she showcased our initiatives and accomplishments,
                connecting with key stakeholders and engaging in meaningful
                discussions on achieving the SDGs. As a NGO with our focus...{" "}
                <span>Read more</span>
              </p>
            </div>
          </div>
          <div className="w-full h-full  sm:border-t-[1.5px] sm:border-t-[#292666] sm:border-dashed relative">
             <span className="absolute left-0 top-0  -mt-[9px] -ml-2 invisible sm:visible lg:invisible xl:visible"><MdArrowLeft/></span>
            <div className="flex flex-col justify-center items-center -mt-6">
              <span className="text-white bg-[#292666] border-4 border-[#8280b4] h-[2.9rem] w-[2.9rem] font-bold text-[1.3rem] leading-[2.5rem] inline-block text-center rounded-full ">
                5
              </span>
              <span className="h-[2.75rem] border-r-[1.5px] divide-dashed border-r-[#292666] border-dashed"></span>
              <span className="-mt-1">
                <IoMdArrowDropdown />
              </span>
            </div>
            <div className="w-[18.5rem] h-[28rem] bg-white mx-auto border border-[#05175F80] rounded-[0.5rem]">
              <h2 className="text-center text-[1rem] leading-[1.3rem] font-semibold text-[#292666] py-3">
                28th August, 2024
              </h2>
              <div className="flex justify-center">
                <img src="/images/jsf_section/fifthImg.png" alt="fifth image" />
              </div>
              <p className="text-[0.75rem] leading-[1.25rem] p-2">
                JHI Call For Application - the JHi had a call for application
                into the inaugural cohort of the organization, the cohort
                duration was set for 3 months (1st September to 30th November)
                with the aim of making cohort members experience personal
                growth, global connections, exclusive mentorship and having
                access to impactful projects, certifications, and a lifelong
                alumni network <span>Read more</span>
              </p>
            </div>
          </div>
          <div className="w-full h-full  sm:border-t-[1.5px] sm:border-t-[#292666] sm:border-dashed relative">
             <span className="absolute top-0 right-0 -mt-[9px] -mr-2 invisible sm:visible xl:invisible"><MdArrowRight/></span>
            <div className="flex flex-col justify-center items-center -mt-6">
              <span className="text-white bg-[#292666] border-4 border-[#8280b4] h-[2.9rem] w-[2.9rem] font-bold text-[1.3rem] leading-[2.5rem] inline-block text-center rounded-full ">
                6
              </span>
              <span className="h-[2.75rem] border-r-[1.5px] divide-dashed border-r-[#292666] border-dashed"></span>
              <span className="-mt-1">
                <IoMdArrowDropdown />
              </span>
            </div>
            <div className="w-[18.5rem] h-[28rem] bg-white mx-auto border border-[#05175F80] rounded-[0.5rem]">
              <h2 className="text-center text-[1rem] leading-[1.3rem] font-semibold text-[#292666] py-3">
                5th September, 2024
              </h2>
              <div className="flex justify-center">
                <img src="/images/jsf_section/sixthImg.png" alt="sixth image" />
              </div>
              <p className="text-[0.75rem] leading-[1.25rem] p-2">
                In line with the focus of JHi that talks on positive impacts
                projects and community building initiatives, the JHi had a
                webinar (the first of its kind) on
                <span className="font-semibold">
                  “UNLOCKING GLOBAL DOORS: CRAFTING COMPELLING PROFILE FOR
                  INTERNATIONAL OPPORTUNITIES".
                </span>
                via Google Meet. The speaker who is a global youth ambassador -
                Amb. Dauda Gidado poured out his knowledge...{" "}
                <span>Read more</span>
              </p>
            </div>
          </div>
          <div className="w-full h-full  sm:border-t-[1.5px] sm:border-t-[#292666] sm:border-dashed relative">
             <span className="absolute top-0 left-0 -mt-[9px] -ml-2 invisible sm:visible xl:invisible"><MdArrowLeft/></span>
            <div className="flex flex-col justify-center items-center -mt-6">
              <span className="text-white bg-[#292666] border-4 border-[#8280b4] h-[2.9rem] w-[2.9rem] font-bold text-[1.3rem] leading-[2.5rem] inline-block text-center rounded-full ">
                7
              </span>
              <span className="h-[2.75rem] border-r-[1.5px] divide-dashed border-r-[#292666] border-dashed"></span>
              <span className="-mt-1">
                <IoMdArrowDropdown />
              </span>
            </div>
            <div className="w-[18.5rem] h-[28rem] bg-white mx-auto border border-[#05175F80] rounded-[0.5rem]">
              <h2 className="text-center text-[1rem] leading-[1.3rem] font-semibold text-[#292666] py-3">
                7th September, 2024
              </h2>
              <div className="flex justify-center">
                <img
                  src="/images/jsf_section/seventhImg.png"
                  alt="seventh image"
                />
              </div>
              <p className="text-[0.75rem] leading-[1.25rem] p-2">
                The JHI supported the Okelele Youth League’s 30th Anniversary
                Free Medical Outreach where no fewer than 6 members of the
                Initiative volunteered in the outreach and attended to over 100
                beneficiaries; they were also given a Certificate of
                Appreciation from the JHI.
                <br />
                This is a testament to our commitment to community building and
                development, indeed we care about our...{" "}<span>Read more</span>
              </p>
            </div>
          </div>
          <div className="w-full h-full  sm:border-t-[1.5px] sm:border-t-[#292666] sm:border-dashed relative">
             <span className="absolute right-0 top-0 text-xl -mt-[10.5px] -mr-2 invisible sm:visible lg:invisible xl:visible "><MdArrowRight/></span>
            <div className="flex flex-col justify-center items-center -mt-6">
              <span className="text-white bg-[#292666] border-4 border-[#8280b4] h-[2.9rem] w-[2.9rem] font-bold text-[1.3rem] leading-[2.5rem] inline-block text-center rounded-full ">
                8
              </span>
              <span className="h-[2.75rem] border-r-[1.5px] divide-dashed border-r-[#292666] border-dashed"></span>
              <span className="-mt-1">
                <IoMdArrowDropdown />
              </span>
            </div>
            <div className="w-[18.5rem] h-[28rem] bg-white mx-auto border border-[#05175F80] rounded-[0.5rem]">
              <h2 className="text-center text-[1rem] leading-[1.3rem] font-semibold text-[#292666] py-3">
                16th September, 2024
              </h2>
              <div className="flex justify-center">
                <img
                  src="/images/jsf_section/eighthImg.png"
                  alt="eighth image"
                />
              </div>
              <p className="text-[0.75rem] leading-[1.25rem] p-2">
                The JHI has never for once underestimated the concept of
                education as she collaborated with the Student Union Government,
                College of Health T ech, Offa to host a webinar with the theme
                <span className="font-semibold">
                  “DISPLACEMENT AND INTERRUPTED LEARNING: THE EFFECTS OF
                  CONFLICT ON STUDENTS’ EDUCATIONAL JOURNEYS”.
                </span>
                The webinar which was held on Google Meet left the over 30
                participants in attendance to understand...{" "}
                <span>Read more</span>
              </p>
            </div>
          </div>
          <div className="w-full h-full  sm:border-t-[1.5px] sm:border-t-[#292666] sm:border-dashed relative">
            <span className="absolute top-0 left-0 -mt-[9px] -ml-2 invisible sm:visible lg:invisible xl:visible"><MdArrowLeft/></span>
            <span className="absolute top-0 right-0 -mt-[9px] -mr-2 invisible lg:visible xl:invisible"><MdArrowRight/></span>
            <div className="flex flex-col justify-center items-center -mt-6">
              <span className="text-white bg-[#292666] border-4 border-[#8280b4] h-[2.9rem] w-[2.9rem] font-bold text-[1.3rem] leading-[2.5rem] inline-block text-center rounded-full ">
                9
              </span>
              <span className="h-[2.75rem] border-r-[1.5px] divide-dashed border-r-[#292666] border-dashed"></span>
              <span className="-mt-1">
                <IoMdArrowDropdown />
              </span>
            </div>
            <div className="w-[18.5rem] h-[28rem] bg-white mx-auto border border-[#05175F80] rounded-[0.5rem]">
              <h2 className="text-center text-[1rem] leading-[1.3rem] font-semibold text-[#292666] py-3">
                24th September, 2024
              </h2>
              <div className="flex justify-center">
                <img src="/images/jsf_section/ninthImg.png" alt="ninth image" />
              </div>
              <p className="text-[0.75rem] leading-[1.25rem] p-2">
                In commemoration of the World CleanUp Day which was on 20th
                September, the JHi collaborated with The Green Club UNILORIN in
                a webinar via Google Meet with the theme
                <span className="font-semibold">
                  “CLEANING UP OUR PLANET: STRATEGIES FOR A SUSTAINABLE FUTURE”.
                </span>
                Participants were able to gain insights into effective
                strategies for reducing waste and pollution,...{" "}<span>Read more</span>
              </p>
            </div>
          </div>
          <div className="w-full h-full  sm:border-t-[1.5px] sm:border-t-[#292666] sm:border-dashed relative">
            <span className="absolute top-0 right-0 -mt-[9px] -mr-2 invisible sm:visible lg:invisible"><MdArrowRight/></span>
            <span className="absolute top-0 left-0 -mt-[9px] -ml-2 invisible lg:visible xl:invisible"><MdArrowLeft/></span>
            <div className="flex flex-col justify-center items-center -mt-6">
              <span className="text-white bg-[#292666] border-4 border-[#8280b4] h-[2.9rem] w-[2.9rem] font-bold text-[1.3rem] leading-[2.5rem] inline-block text-center rounded-full ">
                10
              </span>
              <span className="h-[2.75rem] border-r-[1.5px] divide-dashed border-r-[#292666] border-dashed"></span>
              <span className="-mt-1">
                <IoMdArrowDropdown />
              </span>
            </div>
            <div className="w-[18.5rem] h-[28rem] bg-white mx-auto border border-[#05175F80] rounded-[0.5rem]">
              <h2 className="text-center text-[1rem] leading-[1.3rem] font-semibold text-[#292666] py-3">
                27th September, 2024
              </h2>
              <div className="flex justify-center">
                <img src="/images/jsf_section/tenthImg.png" alt="tenth image" />
              </div>
              <p className="text-[0.75rem] leading-[1.25rem] p-2">
                The Jimoh Habibullahi Initiative (JHi) was well represented at
                the prestigious Commonwealth Fair and Panel Discussion.Our
                delegate T aofeek Alata (Director of Programmes, JHi) networked
                with industry leaders, exploring collaborative opportunities,
                and engaging in strategic partnership discussions as the
                participation hoped to unlock new prospects and benefits for our
                valued members...{" "}<span>Read more</span>
              </p>
            </div>
          </div>
          <div className="w-full h-full  sm:border-t-[1.5px] sm:border-t-[#292666] sm:border-dashed relative">
            <span className="absolute top-0 left-0 -mt-[9px] -ml-2 invisible sm:visible lg:invisible"><MdArrowLeft/></span>
            <div className="flex flex-col justify-center items-center -mt-6">
              <span className="text-white bg-[#292666] border-4 border-[#8280b4] h-[2.9rem] w-[2.9rem] font-bold text-[1.3rem] leading-[2.5rem] inline-block text-center rounded-full ">
                11
              </span>
              <span className="h-[2.75rem] border-r-[1.5px] divide-dashed border-r-[#292666] border-dashed"></span>
              <span className="-mt-1">
                <IoMdArrowDropdown />
              </span>
            </div>
            <div className="w-[18.5rem] h-[28rem] bg-white mx-auto border border-[#05175F80] rounded-[0.5rem]">
              <h2 className="text-center text-[1rem] leading-[1.3rem] font-semibold text-[#292666] py-3">
                4th October, 2024
              </h2>
              <div className="flex justify-center">
                <img
                  src="/images/jsf_section/eleventhImg.png"
                  alt="eleventh image"
                />
              </div>
              <p className="text-[0.75rem] leading-[1.25rem] p-2">
                Delegates from the JHi attended very transformative conferences
                across the nation ranging from The Thriving Youth Summit in
                Ilorin at Kwara State on the 3rd of October to The Chevening
                Scholarship Workshop in Ibadan on the 3rd of October to The
                Commonwealth Scholarships in Lagos on the 27th of September and
                Abuja on the 3rd of October respectively - a proud moment of the
                JHi’s focus on...{" "}<span>Read more</span>
              </p>
            </div>
          </div>
          <div className="w-full h-full  sm:border-t-[1.5px] sm:border-t-[#292666] sm:border-dashed relative">
            <span className="absolute top-0 right-0 -mt-[9px] -mr-2 invisible sm:visible"><MdArrowRight/></span>
            <div className="flex flex-col justify-center items-center -mt-6">
              <span className="text-white bg-[#292666] border-4 border-[#8280b4] h-[2.9rem] w-[2.9rem] font-bold text-[1.3rem] leading-[2.5rem] inline-block text-center rounded-full ">
                12
              </span>
              <span className="h-[2.75rem] border-r-[1.5px] divide-dashed border-r-[#292666] border-dashed"></span>
              <span className="-mt-1">
                <IoMdArrowDropdown />
              </span>
            </div>
            <div className="w-[18.5rem] h-[28rem] bg-white mx-auto border border-[#05175F80] rounded-[0.5rem]">
              <h2 className="text-center text-[1rem] leading-[1.3rem] font-semibold text-[#292666] py-3">
                5th October, 2024
              </h2>
              <div className="flex justify-center">
                <img
                  src="/images/jsf_section/twelfthImg.png"
                  alt="twelfth image"
                />
              </div>
              <p className="text-[0.75rem] leading-[1.25rem] p-2">
                The JHI organized and visited schools as an outreach to teachers
                to mark World Teacher's Day. We also had engaging sessions with
                the students where we talked about the impact of learning and
                what positive impacts it can bring to their society...{" "}
                <span>Read more</span>
              </p>
            </div>
          </div>
          <div className="w-full h-full  sm:border-t-[1.5px] sm:border-t-[#292666] sm:border-dashed relative">
            <span className="absolute top-0 left-0 -mt-[9px] -ml-2 invisible sm:visible"><MdArrowLeft/></span>
            <div className="flex flex-col justify-center items-center -mt-6">
              <span className="text-white bg-[#292666] border-4 border-[#8280b4] h-[2.9rem] w-[2.9rem] font-bold text-[1.3rem] leading-[2.5rem] inline-block text-center rounded-full ">
                13
              </span>
              <span className="h-[2.75rem] border-r-[1.5px] divide-dashed border-r-[#292666] border-dashed"></span>
              <span className="-mt-1">
                <IoMdArrowDropdown />
              </span>
            </div>
            <div className="w-[18.5rem] h-[28rem] bg-white mx-auto border border-[#05175F80] rounded-[0.5rem]">
              <h2 className="text-center text-[1rem] leading-[1.3rem] font-semibold text-[#292666] py-3">
                8th September, 2024
              </h2>
              <div className="flex justify-center">
                <img
                  src="/images/jsf_section/thirteenthImg.png"
                  alt="thirteenth image"
                />
              </div>
              <p className="text-[0.75rem] leading-[1.25rem] p-2">
                The JHI recorded the first cohort session series for her
                inaugural cohort on Google Meet with the topic
                <span className="font-semibold">
                  “PUBLIC SPEAKING AND EFFECTIVE COMMUNICATION STRATEGIES”.
                </span>{" "}
                a very engaging one that saw the cohort members wanting for
                more. At the end of the session and with over 35 members in
                attendance, they were able to know the importance of knowing
                their audiences, how to structure... <span>Read more</span>
              </p>
            </div>
          </div>
          <div className="w-full h-full  sm:border-t-[1.5px] sm:border-t-[#292666] sm:border-dashed relative">
            <span className="absolute top-0 right-0 -mt-[9px] -mr-2 invisible sm:visible lg:invisible"><MdArrowRight/></span>
            <div className="flex flex-col justify-center items-center -mt-6">
              <span className="text-white bg-[#292666] border-4 border-[#8280b4] h-[2.9rem] w-[2.9rem] font-bold text-[1.3rem] leading-[2.5rem] inline-block text-center rounded-full ">
                14
              </span>
              <span className="h-[2.75rem] border-r-[1.5px] divide-dashed border-r-[#292666] border-dashed"></span>
              <span className="-mt-1">
                <IoMdArrowDropdown />
              </span>
            </div>
            <div className="w-[18.5rem] h-[28rem] bg-white mx-auto border border-[#05175F80] rounded-[0.5rem]">
              <h2 className="text-center text-[1rem] leading-[1.3rem] font-semibold text-[#292666] py-3">
                8th September, 2024
              </h2>
              <div className="flex justify-center">
                <img
                  src="/images/jsf_section/fourteenthImg.png"
                  alt="fourteenth image"
                />
              </div>
              <p className="text-[0.75rem] leading-[1.25rem] p-2">
                Members of the JHi Cohort 1 recorded another Cohort Session
                Series as part of their training on Google Meet with the topic{" "}
                <span className="font-semibold">
                  “SKILL ACQUISITION AND DEVELOPMENT”.
                </span>{" "}
                In this session that recorded over 35 members in attendance, the
                speaker who is an ambassador of Nigerian Red Cross (Kwara
                Branch) shared her own experiences as she highlighted he
                significance of acquiring and developing skills in enhancing...
                <span>Read more</span>
              </p>
            </div>
          </div>
          <div className="w-full h-full  sm:border-t-[1.5px] sm:border-t-[#292666] sm:border-dashed relative">
            <span className="absolute top-0 left-0 -mt-[9px] -ml-2 invisible sm:visible lg:invisible"><MdArrowLeft/></span>
            <span className="absolute top-0 right-0 -mt-[9px] -mr-2 invisible lg:visible xl:invisible"><MdArrowRight/></span>
            <div className="flex flex-col justify-center items-center -mt-6">
              <span className="text-white bg-[#292666] border-4 border-[#8280b4] h-[2.9rem] w-[2.9rem] font-bold text-[1.3rem] leading-[2.5rem] inline-block text-center rounded-full ">
                15
              </span>
              <span className="h-[2.75rem] border-r-[1.5px] divide-dashed border-r-[#292666] border-dashed"></span>
              <span className="-mt-1">
                <IoMdArrowDropdown />
              </span>
            </div>
            <div className="w-[18.5rem] h-[28rem] bg-white mx-auto border border-[#05175F80] rounded-[0.5rem]">
              <h2 className="text-center text-[1rem] leading-[1.3rem] font-semibold text-[#292666] py-3">
                10th October, 2024
              </h2>
              <div className="flex justify-center">
                <img
                  src="/images/jsf_section/fifteenthImg.png"
                  alt="fifteenth image"
                />
              </div>
              <p className="text-[0.75rem] leading-[1.25rem] p-2">
                The JHi community had an engaging space on X on mental health as
                it was World Mental Health Day.
                <br />
                At JHi, we understand and care about the mental health of the
                total man and that is why in honor of World Mental Health Day
                2024, we explored technology's impact on mental health and how
                it promotes healthy digital habits... <span>Read more</span>
              </p>
            </div>
          </div>
          <div className="w-full h-full  border-t-[1.5px] sm:border-t-[#292666] sm:border-dashed relative lg:border-none xl:border-t-[1.5px] xl:border-t-[#292666] xl:border-dashed">
            <span className="absolute top-0 right-0 -mt-[9px] -mr-2 invisible sm:visible lg:invisible xl:visible"><MdArrowRight/></span>
            <div className="flex flex-col justify-center items-center -mt-6">
              <span className="text-white bg-[#292666] border-4 border-[#8280b4] h-[2.9rem] w-[2.9rem] font-bold text-[1.3rem] leading-[2.5rem] inline-block text-center rounded-full ">
                16
              </span>
              <span className="h-[2.75rem] border-r-[1.5px] divide-dashed border-r-[#292666] border-dashed"></span>
              <span className="-mt-1">
                <IoMdArrowDropdown />
              </span>
            </div>
            <div className="w-[18.5rem] h-[28rem] bg-white mx-auto border border-[#05175F80] rounded-[0.5rem]">
              <h2 className="text-center text-[1rem] leading-[1.3rem] font-semibold text-[#292666] py-3">
                11th October, 2024
              </h2>
              <div className="flex justify-center">
                <img
                  src="/images/jsf_section/sixteenthImg.png"
                  alt="sixteenth image"
                />
              </div>
              <p className="text-[0.75rem] leading-[1.25rem] p-2">
                In marking the 2024 International Day of the Girl Child, the JHi
                community engaged her members to give in their say advocating
                for the Girl Child. <br />
                At Jimoh Habibullah Initiative, we celebrate girls' resilience
                and potential. Every girl deserves: <br />
                - Freedom from societal barriers and stereotypes.
                <br />- Access to quality education.. <span>Read more</span>
              </p>
            </div>
          </div>
        </div>
        </section>
        <section className="max-w-[67.5rem] mx-auto font-[Montserrat] mt-[8.7rem] mb-32">
          <h2 className="max-sm:text-[2rem] max-sm:leading-[2.5rem] text-[2.5rem] leading-[3.1rem] font-semibold text-[#292666] text-center">Frequently Asked Questions</h2>
          <div className=" p-8 mt-14 border border-slate-700 rounded-[10px]">
            <div className="flex justify-between  items-center">
              <p className="text-[1.5rem] leading-[2rem] max-sm:text-[1.3rem] max-sm:leading-[2rem] text-[#292666] font-semibold">What is JHI all about?</p>
              <span className="h-10 w-10 rounded-full text-white bg-[#292666] text-3xl font-semibold flex justify-center items-center max-sm:h-8 max-sm:w-8 max-sm:text-xl"><IoIosClose/></span>
            </div>
            <hr className="border-t border-t-slate-700 my-5"/>
            <p className="font-[Rubik] text-[1.12rem] leading-[2.25rem] text-[#333333]">
            The Jimoh Habibullah Initiative is a NGO dedicated to fostering empathy, empowerment, and community growth. We offer mentorship programs, including one-on-one mentoring and workshops, to help individuals achieve their goals. Our Positive Impact Projects tackle social, economic, and environmental issues, while our Community Building Initiatives promote social cohesion through events and training.
            </p>
          </div>
          <div className="space-y-8 mt-10">
            <div className="flex justify-between items-center w-full p-8 border  border-slate-300 rounded-md">
              <p className="text-[1.5rem] leading-[2rem] font-semibold max-sm:text-[1rem] max-sm:leading-[1.5rem]">Is JHI empowerment for students alone?</p>
              <span className="h-10 w-10 flex justify-center items-center rounded-full text-white text-3xl font bg-black opacity-40 max-sm:h-6 max-sm:w-6 max-sm:text-xl"><IoIosAdd/></span>
            </div>
            <div className="flex justify-between items-center w-full p-8 border  border-slate-300 rounded-md">
              <p className="text-[1.5rem] leading-[2rem] font-semibold max-sm:text-[1rem] max-sm:leading-[1.5rem]">When next will JHI do the next cohort?</p>
              <span className="h-10 w-10 flex justify-center items-center rounded-full text-white text-3xl font bg-black opacity-40 max-sm:h-6 max-sm:w-6 max-sm:text-xl"><IoIosAdd/></span>
            </div>
            <div className="flex justify-between items-center w-full p-8 border  border-slate-300 rounded-md ">
              <p className="text-[1.5rem] leading-[2rem] font-semibold max-sm:text-[1rem] max-sm:leading-[1.5rem]">How can you participate in JHI program?</p>
              <span className="h-10 w-10 flex justify-center items-center rounded-full text-white text-3xl font bg-black opacity-40 max-sm:h-6 max-sm:w-6 max-sm:text-xl"><IoIosAdd/></span>
            </div>
          </div>
        </section>
    </>
  );
};

export default About;
