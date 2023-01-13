import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

const FEskills = ["HTML", "CSS", "JavaScript", "ReactJS", "NextJS"];
const BEskills = ["NodeJS", "ExpressJS", "MongoDB", "Mongoose"];

const Experience = () => {
  return (
    <section
      id="experience"
      className="container mx-auto mt-[8rem] font-semibold"
    >
      <div className="text-center">
        <h5 className="text-xs">What Skills I Have</h5>
        <h1 className="text-4xl text-main pt-4">My Experience</h1>
      </div>

      <div className="mt-16 grid lg:grid-cols-2 gap-10">
        <div className="text-center border border-[#33344e] rounded-3xl bg-[#2a2a67] duration-200 hover:bg-opacity-0">
          <h1 className="text-xl text-main pt-10">Frontend Development</h1>
          <div className="grid grid-cols-2 gap-10 p-10 md:px-20 md:pb-10">
            {FEskills.map((item, index) => (
              <article key={index} className="flex items-center gap-5">
                <BsPatchCheckFill className="text-main" />
                <h5>{item}</h5>
              </article>
            ))}
          </div>
        </div>
        <div className="text-center border border-[#33344e] rounded-3xl bg-[#2a2a67] duration-200 hover:bg-opacity-0">
          <h1 className="text-xl text-main pt-10">Backend Development</h1>
          <div className="grid grid-cols-2 gap-10 p-10 md:px-20 md:pb-10">
            {BEskills.map((item, index) => (
              <article key={index} className="flex items-center gap-5">
                <BsPatchCheckFill className="text-main" />
                <h5>{item}</h5>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
