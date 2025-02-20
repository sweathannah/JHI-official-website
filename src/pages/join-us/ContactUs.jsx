import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  bannerVariant,
  buttonVariants,
  textScaleVariants,
  textVariants,
  viewport,
} from "../../animation/animation";
import { IoIosClose, IoIosAdd } from "react-icons/io";
import Dropdown from "../../components/Dropdown";

const ContactUs = () => {
  const [showAnswer, setShowAnswer] = useState([false, false, false, false]);
  const faqs = [
    {
      question: "What is JHI all about?",
      answer:
        " The Jimoh Habibullah Initiative is a NGO dedicated to fostering empathy, empowerment, and community growth. We offer mentorship programs, including one-on-one mentoring and workshops, to help individuals achieve their goals. Our Positive Impact Projects tackle social, economic, and environmental issues, while our Community Building Initiatives promote social cohesion through events and training.",
    },

    {
      question: "Is JHI empowerment for students alone?",
      answer:
        " The Jimoh Habibullah Initiative is a NGO dedicated to fostering empathy, empowerment, and community growth. We offer mentorship programs, including one-on-one mentoring and workshops, to help individuals achieve their goals. Our Positive Impact Projects tackle social, economic, and environmental issues, while our Community Building Initiatives promote social cohesion through events and training.",
    },
    {
      question: "When next will JHI do the next cohort?",
      answer:
        " The Jimoh Habibullah Initiative is a NGO dedicated to fostering empathy, empowerment, and community growth. We offer mentorship programs, including one-on-one mentoring and workshops, to help individuals achieve their goals. Our Positive Impact Projects tackle social, economic, and environmental issues, while our Community Building Initiatives promote social cohesion through events and training.",
    },
    {
      question: "How can you participate in JHI program?",
      answer:
        " The Jimoh Habibullah Initiative is a NGO dedicated to fostering empathy, empowerment, and community growth. We offer mentorship programs, including one-on-one mentoring and workshops, to help individuals achieve their goals. Our Positive Impact Projects tackle social, economic, and environmental issues, while our Community Building Initiatives promote social cohesion through events and training.",
    },
  ];
  const toggleShowAnswers = (index) => {
    const updatedShowAnswer = [...showAnswer];
    updatedShowAnswer[index] = !updatedShowAnswer[index];
    setShowAnswer(updatedShowAnswer);
  };

  const [feedbackData, setFeedbackData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    satisfaction: "",
    effectiveness: "",
    clarity: "",
    support: "",
    impact: "",
    recommendation: "",
    success_stories: "",
    improvements: "",
    comments: "",
  });

  const {
    firstName,
    lastName,
    email,
    satisfaction,
    effectiveness,
    clarity,
    support,
    impact,
    recommendation,
    success_stories,
    improvements,
    comments,
  } = feedbackData;
  const formData = [
    {
      feed: "How satisfied are you with your overall experience with JHI?",
      options: [
        "Very satisfied",
        "Satisfied",
        "Neutral",
        "Unsatisfied",
        "Very Unsatisfied",
      ],
      name: "satisfaction",
    },
    {
      feed: "How effective do you find the programs you participated in?",
      options: [
        "Very effective",
        "Effective",
        "Neutral",
        "Ineffective",
        "Very ineffective",
      ],
      name: "effectiveness",
    },
    {
      feed: "Clarity of communication",
      options: ["Very clear", "Clear", "Neutral", "Unclear", "Very unclear"],
      name: "clarity",
    },
    {
      feed: "How would you rate the support you find from JHI staffs and volunteers?",
      options: ["Very good", "Good", "Fair", "Poor", "Very poor"],
      name: "support",
    },
    {
      feed: "How has your involvement in JHI impacted your personal and professional life?",
      options: [
        "Very positive",
        "Positive",
        "Neutral",
        "Negative",
        "Very negative",
      ],
      name: "impact",
    },
    {
      feed: "How likely are you to recommend JHI to others?",
      options: [
        "Very likely",
        "Likely",
        "Neutral",
        "Unlikely",
        "Very unlikely",
      ],
      name: "recommendation",
    },
  ];

  const textFeeds = [
    {
      feed: "Can you share any specific success stories or positive experience with JHI?",
      id: "success_stories",
      name: "success_stories",
      value: success_stories,
    },
    {
      feed: "What do you think could be improved in JHI programs and initiatives?",
      id: "improvements",
      name: "improvements",
      value: improvements,
    },
    {
      feed: "Any additional comments or suggestions you would like to share?",
      id: "comments",
      name: "comments",
      value: comments,
    },
  ];

  const inputFeeds = [
    {
      feed: "First name",
      id: "firstName",
      name: "firstName",
      type: "text",
      value: firstName,
    },
    {
      feed: "Last name",
      id: "lastName",
      name: "lastName",
      type: "text",
      value: lastName,
    },
    {
      feed: "Email",
      id: "email",
      name: "email",
      type: "email",
      value: email,
    },
  ];

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFeedbackData({ ...feedbackData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedbackData('')
  };

  return (
    <>
      <section className="bg-[url('/images/header.jpeg')] bg-cover bg-no-repeat h-[100vh] w-full relative flex items-center justify-center font-[Montserrat]">
        {/* Background Overlay  */}
        <div className="absolute inset-0 bg-[#D8C1A1] bg-opacity-45 "></div>

        <motion.h1
          variants={bannerVariant}
          initial="initial"
          animate="animate"
          className="text-white text-h1 leading-[62px] text-center font-bold font-[Montserrat] z-30"
        >
          Contact Us
        </motion.h1>
      </section>
      <section className="m-10 font-[Montserrat] mb-[7.5rem] bg-[#E5BF88]">
        <div className="w-full bg-[#D8C1A1]">
          <div className=" flex flex-col xl:flex-row  justify-between items-center w-full px-9 py-16 gap-8 max-w-[82.5rem] mx-auto">
            <motion.div
              variants={textVariants}
              initial="initial"
              whileInView="inView"
              viewport={viewport}
              className="max-w-[40.7rem] text-white flex flex-col flex-1"
            >
              <h2 className="text-h1 leading-[4.5rem] font-semibold">
                Get in touch
              </h2>
              <p className="text-[1rem] leading-[1.5rem] md:text-[1.5rem] md:leading-[2.5rem] font-semibold ">
                Questions, Comment, Observations about Jimoh Habibullahi
                Initiatives? Contact us via any of the below channel or Fill our
                contact form
              </p>
            </motion.div>
            <motion.div
              variants={textScaleVariants}
              initial="initial"
              whileInView="inView"
              viewport={viewport}
              className="w-[16.5rem] sm:w-[30rem] md:w-[40.7rem] flex flex-col justify-center items-center px-4 py-6 md:p-10 gap-6 h-[24rem] bg-white rounded-[1.25rem] flex-1"
            >
              <input
                type="text"
                placeholder="Full Name:"
                className="w-full h-8 focus:outline-0 rounded-sm placeholder:text-[1rem] placeholder:leading-[1.25rem] placeholder:font-bold bg-[#F1F1F1] pl-4 "
              />
              <input
                type="email"
                placeholder="Email:"
                className="w-full h-8 focus:outline-none rounded-sm placeholder:text-[1rem] placeholder:leading-[1.25rem] placeholder:font-bold bg-[#F1F1F1] pl-4"
              />
              <textarea
                placeholder="Message"
                className="w-full h-28 focus:outline-none rounded-sm placeholder:text-[1rem] placeholder:leading-[1.25rem] placeholder:font-bold bg-[#F1F1F1] pl-4 pt-2 resize-none"
              />
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                className="text-white text-[1rem] leading-[1.25rem] font-bold bg-[#05175FBF] hover:bg-[#07154fbf]  w-[5rem] p-2 rounded-lg mt-auto "
              >
                Submit
              </motion.button>
            </motion.div>
          </div>
        </div>
        <div className="bg-[#E5BF88] max-w-[82.5rem] mx-auto">
          <motion.h2
            variants={textVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            className="max-lg:text-center text-white text-h1 leading-[4.5rem] font-semibold p-8"
          >
            Visit Our Social <br /> Media Page
          </motion.h2>
          <div className="flex bg-inherit p-7 flex-col gap-10 max-lg:items-center">
            <motion.div
              variants={textScaleVariants}
              initial="initial"
              whileInView="inView"
              viewport={viewport}
              className="bg-white flex max-sm:flex-col items-center px-6 py-7
              rounded-[1.5rem] gap-4 max-w-[36rem]"
            >
              <img
                className="max-sm:w-8 max-sm:h-8 sm:w-10 sm:h-10"
                src="/images/joinUsImg/instagram.png"
                alt="instagram"
              />
              <p className="text-black font-bold text-[1rem] leading-[1.5rem] sm:text-[1.3rem] sm:leading-[1.8rem] lg:text-[1.8rem] lg:leading-[2.5rem] break-all">
                jimohhabibullahi_initiative
              </p>
            </motion.div>
            <motion.div
              variants={textScaleVariants}
              initial="initial"
              whileInView="inView"
              viewport={viewport}
              className="bg-white flex max-sm:flex-col items-center px-6 py-7
              rounded-[1.5rem] gap-4 lg:self-end max-w-[36rem] "
            >
              <img
                className="max-sm:w-8 max-sm:h-8 sm:w-10 sm:h-10"
                src="/images/joinUsImg/linkedIn.png"
                alt="instagram"
              />
              <p className="text-black font-bold text-[1rem] leading-[1.5rem] sm:text-[1.3rem] sm:leading-[1.8rem] lg:text-[1.8rem] lg:leading-[2.5rem] break-all">
                Jimoh Habibullahi Initiative
              </p>
            </motion.div>
            <motion.div
              variants={textScaleVariants}
              initial="initial"
              whileInView="inView"
              viewport={viewport}
              className="bg-white flex max-sm:flex-col items-center px-6 py-7 rounded-[1.5rem] gap-4 max-w-[36rem]"
            >
              <img
                className="max-sm:w-8 max-sm:h-8 sm:w-10 sm:h-10"
                src="/images/joinUsImg/twitter.png"
                alt="instagram"
              />
              <p className="text-black font-bold text-[1rem] leading-[1.5rem] sm:text-[1.3rem] sm:leading-[1.8rem] lg:text-[1.8rem] lg:leading-[2.5rem] break-all">
                Jimoh Habibullahi Initiative
              </p>
            </motion.div>
            <motion.div
              variants={textScaleVariants}
              initial="initial"
              whileInView="inView"
              viewport={viewport}
              className="bg-white flex max-sm:flex-col items-center px-6 py-7 rounded-[1.5rem] gap-4 max-w-[36rem] lg:self-end"
            >
              <img
                className="max-sm:w-8 max-sm:h-8 sm:w-10 sm:h-10"
                src="/images/joinUsImg/twitter.png"
                alt="instagram"
              />
              <p className="text-black font-bold text-[1rem] leading-[1.5rem] sm:text-[1.3rem] sm:leading-[1.8rem] lg:text-[1.8rem] lg:leading-[2.5rem] break-all">
                Jimoh Habibullahi Initiative
              </p>
            </motion.div>
            <motion.div
              variants={textScaleVariants}
              initial="initial"
              whileInView="inView"
              viewport={viewport}
              className="bg-white  px-6 py-10 rounded-[1.5rem] gap-4  self-center"
            >
              {/* <img src="/images/joinUsImg/instagram.png" alt="instagram" /> */}
              <p className="text-black font-bold text-[1rem] leading-[1.5rem] sm:text-[1.3rem] sm:leading-[1.8rem] lg:text-[1.8rem] lg:leading-[2.5rem] break-all">
                jimohhabibulahiinitiatives@gmail.com
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* FAQ section  */}
      <section className="max-w-[67.5rem] mx-auto font-[Montserrat] mt-[8.7rem] mb-32">
        <motion.h2
          variants={textVariants}
          initial="initial"
          whileInView="inView"
          viewport={viewport}
          className="max-sm:text-[2rem] max-sm:leading-[2.5rem] text-[2.5rem] leading-[3.1rem] font-semibold text-[#292666] text-center"
        >
          Frequently Asked Questions
        </motion.h2>
        {faqs.map(({ question, answer }, index) => (
          <motion.div
            variants={textScaleVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            className=" p-8 mt-14 border border-slate-700 rounded-[10px] max-sm:p-4 mx-2"
            key={index}
          >
            <div className="flex justify-between gap-4 items-center">
              <p className="text-[1.5rem] leading-[2rem] max-sm:text-[1rem] max-sm:leading-[1.5rem] text-[#292666] font-semibold">
                {question}
              </p>
              {showAnswer[index] && (
                <button
                  onClick={() => toggleShowAnswers(index)}
                  className="h-10 w-10 rounded-full text-white bg-[#292666] text-3xl font-semibold flex justify-center items-center max-sm:h-8 max-sm:w-6 max-sm:text-xl"
                >
                  <IoIosClose />
                </button>
              )}
              {!showAnswer[index] && (
                <button
                  onClick={() => toggleShowAnswers(index)}
                  className="h-10 w-10  flex justify-center items-center rounded-full text-white text-3xl font bg-black opacity-40 max-sm:h-6 max-sm:w-6 max-sm:text-xl"
                >
                  <IoIosAdd />
                </button>
              )}
            </div>
            {showAnswer[index] && (
              <motion.div
                variants={textScaleVariants}
                initial="initial"
                whileInView="inView"
                viewport={viewport}
                className=""
              >
                <hr className="border-t border-t-slate-700 my-5" />
                <p className="font-[Rubik] text-[1.12rem] leading-[2.25rem] text-[#b99191]">
                  {answer}
                </p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </section>
      <section className="font-[Montserrat] bg-[rgb(229,191,136)] p-10">
        <div className="max-w-[82.5rem] mx-auto   flex flex-col ">
          <h2 className="text-h1 leading-[4.5rem] font-semibold text-center text-white">
            Feedback Form
          </h2>
          <form
         
          className="inline-grid grid-cols-[repeat(1,_90%)] sm:grid-cols-[repeat(1,_450px)] md:grid-cols-[repeat(2,_320px)] lg:grid-cols-[repeat(2,_400px)] justify-center items-center gap-8 bg-white  mx-auto p-6 m-8 rounded-xl shadow-lg shadow-slate-600 text-[1rem] leading-5 max-sm:mx-6">
            {inputFeeds.map(({ feed, id, type, value, name }, index) => (
              <motion.div
              variants={textScaleVariants}
              initial="initial"
              whileInView="inView"
              viewport={viewport}
              key={index}>
                <label className="block font-semibold mb-2" htmlFor={id}>
                  {feed}
                </label>
                <input
                  className="w-full bg-[#F1F1F1] h-14 px-2  rounded-md focus:outline-none"
                  onChange={handleChange}
                  required
                  value={value}
                  name={name}
                  type={type}
                  id={id}
                />
              </motion.div>
            ))}
            {formData.map(({ feed, options, name }, index) => (
              <motion.div
              variants={textScaleVariants}
              initial="initial"
              whileInView="inView"
              viewport={viewport}
              key={index}>
                <p className="mb-2 font-semibold">{feed}</p>
                <Dropdown
                  name={name}
                  feedbackData={feedbackData}
                  setFeedbackData={setFeedbackData}
                  options={options}
                />
              </motion.div>
            ))}
            {textFeeds.map(({ feed, id, value, name }, index) => (
              <motion.div
              variants={textScaleVariants}
              initial="initial"
              whileInView="inView"
              viewport={viewport}
              className="md:col-span-2" key={index}>
                <label className="block font-semibold mb-2" htmlFor={id}>
                  {feed}
                </label>
                <textarea
                  onChange={handleChange}
                  required
                  value={value}
                  name={name}
                  rows="5"
                  cols="50"
                  className="focus:outline-none w-full bg-[#F1F1F1] rounded-md resize-none overflow-auto scrollbar-none p-4"
                  id={id}
                />
              </motion.div>
            ))}
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full h-14 px-6 text-center text-white bg-[#05175FBF] hover:bg-[#07154fbf] rounded-md font-semibold md:col-span-2"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
