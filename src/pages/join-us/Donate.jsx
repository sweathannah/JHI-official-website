import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  bannerVariant,
  textScaleVariants,
  textVariants,
  imageVariants,
  viewport,
} from "../../animation/animation";
import LazyLoad from "react-lazyload";
import LazyBackground from "../../components/LazyBackground";
import PaystackPop from "@paystack/inline-js";

const Donate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
  });

  const { name, email, phone, amount } = formData;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const style = {
    input:
      "w-full h-14 rounded-md border border-slate-400 focus:outline-none p-4",
    button:
      "w-full h-14 rounded-md border border-slate-400 bg-green-700 text-white font-semibold text-center hover:bg-green-800 transition-color duration-200 uppercase",
  };

  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
  const makePayment = (e) => {
    e.preventDefault();
    const paystack = new PaystackPop();

    paystack.newTransaction({
      key: publicKey,
      amount: amount * 100,
      email,
      onSuccess: (transaction) => {
        const message = `You have successfully made your donation ${transaction.reference}`;
        alert(message);
      },
      onCancel: () => {
        alert("Donation canceled");
      },
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      amount: "",
    });
  };

  return (
    <>
      <section className="bg-[url('/images/header.jpeg')] bg-cover bg-no-repeat h-[100vh] w-full relative flex items-center justify-center font-[Montserrat]">
        {/* Background Overlay  */}
        <div className="absolute inset-0 bg-[#258CCF9C] bg-opacity-45 "></div>

        <motion.h1
          variants={bannerVariant}
          initial="initial"
          animate="animate"
          className="text-white text-h1 leading-[62px] text-center font-bold font-[Montserrat] z-30"
        >
          Donate
        </motion.h1>
      </section>
      <section className="font-[Montserrat] mt-20">
        <div className="text-h1 text-[#292666] text-center max-w-[82rem] space-y-4 mx-auto px-10">
          <motion.h2
            variants={textVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            className=" font-semibold uppercase max-w-[52.5rem] mx-auto"
          >
            Be part of the change you wish to see
          </motion.h2>
          <motion.p
            variants={textVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
          >
            We are proudly Non- governmental Organization. People like you help
            contribute to the progress of this organization. We rely on donation
            to achieve our mission.{" "}
            <span className="font-bold ">Will you make an impact today?</span>
          </motion.p>
        </div>
      </section>
      <section className="bg-[#00A6B9] my-[7.5rem] font-[Montserrat]">
        <div className="max-w-[82rem] mx-auto flex flex-col xl:flex-row p-8 gap-8 justify-center items-center">
          <motion.div
            variants={imageVariants}
            initial="initial"
            whileInView="inView"
            viewport={viewport}
            className=""
          >
            <LazyLoad height={300} offset={200}>
              <img
                className="w-[49rem] sm:h-[45rem] rounded-lg"
                src="/images/joinUsImg/donate_1.png"
                alt="donate_1"
              />
            </LazyLoad>
          </motion.div>
          <div className="w-[70%] sm:w-[55%] md:xl-[50%] mt-6">
            <h2 className="text-white font-semibold text-center text-[1rem] leading-[1.5rem] sm:text-[1.5rem] sm:leading-[2rem] mb-4">
              Make Your Payments Here
            </h2>
            <form className="flex flex-col gap-6 w-full">
              <input
                className={style.input}
                type="text"
                placeholder="Full name"
                value={name}
                name="name"
                onChange={handleChange}
              />
              <input
                className={style.input}
                type="email"
                placeholder="Email address"
                value={email}
                name="email"
                onChange={handleChange}
              />
              <input
                className={style.input}
                type="number"
                placeholder="Amount"
                value={amount}
                name="amount"
                onChange={handleChange}
              />
              <input
                className={style.input}
                type="tel"
                placeholder="Phone number"
                value={phone}
                name="phone"
                onChange={handleChange}
              />
              <button
                className={style.button}
                type="submit"
                onClick={makePayment}
              >
                Donate
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donate;
