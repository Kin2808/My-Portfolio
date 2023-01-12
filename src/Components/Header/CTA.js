import React from "react";
import CV from "../../assets/Nguyen-Minh-Quan-TopCV.vn-060123.135046.pdf";

const CTA = () => {
  return (
    <div className="my-10">
      <button className="border border-main text-main rounded-lg p-3 mr-5 duration-200 hover:scale-[1.05]">
        <a href={CV} download>
          Download CV
        </a>
      </button>
      <button className="bg-main rounded-lg p-3 duration-200 hover:scale-[1.05]">
        <a href="#contact" className="text-black">
          Let's talk
        </a>
      </button>
    </div>
  );
};

export default CTA;
