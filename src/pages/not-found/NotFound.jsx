import React, { useState } from "react";
import { motion } from "framer-motion";

const NotFound = () => {


  return (
    <>
      <div
        
        className="h-[22rem] bg-black text-white flex flex-col items-center justify-center gap-4"
      >
        <h1 className="text-5xl text-white font-bold ">404</h1>

        <h2 className="bg-white p-8 text-4xl text-black font-bold rounded-lg ">
          This is not the page <br /> you are looking for.
        </h2>
      </div>
    </>
  );
};

export default NotFound;
