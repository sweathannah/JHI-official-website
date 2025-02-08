import React, { useEffect, useState } from "react";
import { IoMdArrowDown } from "react-icons/io";

const Dropdown = ({options, name, feedbackData, setFeedbackData }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(options[0])
  useEffect(() => {
  setFeedbackData(prevState => ({...prevState, [name]: options[0]}))
  }, [])
  return (
    <div>
      <div className="w-full bg-[#F1F1F1] h-14 flex justify-between items-center px-2 relative rounded-md" onClick={() => setIsActive(!isActive)}>{selected} <IoMdArrowDown /></div>
      {isActive && (
        <div className="absolute w-[320px] z-30 bg-white shadow-2xl shadow-slate-600 ">
          {options.map((option, index) => (
            <div
              onClick={() => {
                setSelected(option);
                setFeedbackData({...feedbackData, [name]: option})
                setIsActive(!isActive);
              }}
              key={index}
              className="p-2 hover:bg-[#F1F1F1]"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
