import React from "react";
import { FiAward } from "react-icons/fi";
import { AiOutlineUser, AiOutlineFolder } from "react-icons/ai";

import ME from "../../assets/118554028_3292067277574379_3433221777595945656_n.jpg";

const About = () => {
  return (
    <section id="about" className="container mx-auto mt-[8rem] font-semibold">
      <div className="text-center">
        <h5 className="text-xs">Get To Know</h5>
        <h1 className="text-4xl text-main pt-4">About Me</h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-20 mt-16">
        <div className="w-[300px] md:w-[400px] lg:w-[500px] bg-gradient-to-b from-[rgba(77,181,255,0.4)] to-[#23344f] rounded-3xl">
          <img
            src={ME}
            alt="avatar"
            className="w-full h-full object-contain rounded-3xl rotate-[10deg]"
          />
        </div>

        <div className="flex flex-col flex-1 justify-between">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 h-[400px] md:h-[180px]">
            <article className="flex flex-col items-center justify-evenly bg-[#2a2a67] rounded-xl duration-150 hover:scale-105">
              <i className="text-xl text-main">
                <FiAward />
              </i>
              <h5>Experience</h5>
              <small className="text-[11px] text-gray">2+ Months Working</small>
            </article>
            <article className="flex flex-col items-center justify-evenly bg-[#2a2a67] rounded-xl duration-150 hover:scale-105">
              <i className="text-xl text-main">
                <AiOutlineUser />
              </i>
              <h5>Skills Main</h5>
              <small className="text-[11px] text-gray">
                ReactJS
              </small>
            </article>
            <article className="flex flex-col items-center justify-evenly bg-[#2a2a67] rounded-xl duration-150 hover:scale-105">
              <i className="text-xl text-main">
                <AiOutlineFolder />
              </i>
              <h5>Projects</h5>
              <small className="text-[11px] text-gray">3 Completed</small>
            </article>
          </div>

          <p className="text-gray my-5 lg:my-10">
            Hello, I'm Quân, my friends often call me Kin. I graduated
            University of Economic, my major is not computer or technology, but
            i have spent 6+ months learning and improving to be a developer. I
            try my best to be able to work for an encouraging and stable company
            that will assist me in developing, improving and obtaining the
            necessary skills in order to become the best engineer possible.
          </p>

          <button className="w-[150px] border border-main rounded-xl p-2 duration-200 hover:scale-105">
            <a href="#contact">Let's Talk</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
