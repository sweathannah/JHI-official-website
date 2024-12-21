import { useState } from "react";

const PhotoSection = ({ title, images, widths }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleText = () => setExpanded(!expanded);

  const displayText = expanded
    ? title
    : title.slice(0, 60) + (title.length > 60 ? "..." : "");

  return (
    <article className="flex flex-col mb-10">
      {/* Expandable Title */}
      <div className="flex justify-between items-center mt-[2rem]">
        <p className="font-[600] text-[1.5rem] text-[#333333]">{displayText}</p>
        <span
          className="font-[700] text-[1rem] text-[#258CCF] cursor-pointer"
          onClick={toggleText}
        >
          {expanded ? "View less" : "View more"}
        </span>
      </div>

      {/* Dynamic Photo Grid */}
      <div className="lg:flex hidden flex-wrap gap-4 mt-10">
        {images.map((path, index) => (
          <img
            key={index}
            src={path}
            alt={`Gallery Image ${index + 1}`}
            style={{
              width: widths[index] || "calc(33% - 1rem)",
            }}
            className="h-auto object-cover"
          />
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:hidden gap-4 mt-10">
        {images.map((path, index) => (
          <img
            key={index}
            src={path}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-auto object-cover rounded-[4px]"
          />
        ))}
      </div>
    </article>
  );
};

export default PhotoSection;
