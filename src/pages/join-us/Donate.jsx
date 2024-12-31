import React from "react";

const Donate = () => {
  return (
    <>
      <section className="bg-[url('/images/header.jpeg')] bg-cover bg-no-repeat h-[100vh] w-full relative flex items-center justify-center font-[Montserrat]">
        {/* Background Overlay  */}
        <div className="absolute inset-0 bg-[#258CCF9C] bg-opacity-45 "></div>

        <h1 className="text-white text-h1 leading-[62px] text-center font-bold font-[Montserrat] z-30">
          Donate
        </h1>
      </section>
      <section className="font-[Montserrat] mt-20">
        <div className="text-h1 text-[#292666] text-center max-w-[82rem] space-y-4 mx-auto px-10">
            <h2 className=" font-semibold uppercase max-w-[52.5rem] mx-auto">Be part of the change you wish to see</h2>
            <p>We are proudly Non- governmental Organization. People like you help contribute to the progress of this organization. We rely on donation to achieve our mission. <span className="font-bold ">
            Will you make an impact today?</span></p>
        </div>
      </section>
      <section className="bg-[#00A6B9] my-[7.5rem]">
        <div className="max-w-[82rem] mx-auto flex flex-col xl:flex-row p-8 gap-8 justify-center items-center">
            <div className="">
                <img className="w-[49rem] sm:h-[45rem] rounded-lg" src="/images/joinUsImg/donate_1.png" alt="donate_1" />
            </div>
            <div className="bg-[url('/images/joinUsImg/donate_2.png')] w-[20rem] sm:w-[33rem] h-[34rem] bg-contain bg-no-repeat text-center uppercase text-[1rem] leading-[1.5rem] sm:text-[2rem] sm:leading-[2.5rem] font-semibold text-white space-y-10">
                <p className="text-black">Account <br/> Detail</p>
                <p>Account Number<br/>  0003334444 </p>
                <p>Account Name<br/> JIMOH HABIBULLAH <br/> Initiative</p>
                <p>Bank Name <br/> Uba</p>
            </div>
        </div>
      </section>
    </>
  );
};

export default Donate;
