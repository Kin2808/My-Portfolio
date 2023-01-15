import React from "react";

import ProjectImg from "../../assets/project-planning-header@2x.png";
import Ecom from "../../assets/ecom.png";
import Port from "../../assets/portlofi.png";

const myProjects = [
  {
    image: Ecom,
    title: "E-commerce",
    git: "https://github.com/inferno332/Ecommerce_shop",
    demo: "https://ls-eshop.vercel.app/",
  },
  {
    image: ProjectImg,
    title: "Mini Quiz",
    git: "https://github.com/Kin2808/miniQuiz-client",
    git1: "https://github.com/Kin2808/miniQuiz-server",
  },
  {
    image: Port,
    title: "Portfolio",
    git: "https://github.com/Kin2808/My-Portfolio",
    demo: "",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="container mx-auto mt-[8rem] font-semibold"
    >
      <div className="text-center">
        <h5 className="text-xs">What I did</h5>
        <h1 className="text-4xl text-main pt-4">Projects</h1>
      </div>

      <div className="mt-16 grid lg:grid-cols-3 gap-10">
        {myProjects.map((item, index) => (
          <div key={index} className=" bg-[#2a2a67] rounded-2xl">
            <div className="p-5 lg:h-[250px]">
              <img
                src={item.image}
                alt="projects"
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
            <h5 className="pl-5">{item.title}</h5>
            <div className="pl-5 py-5">
              <button className="border border-main rounded-xl p-3 mr-2 text-main duration-200 hover:scale-105">
                <a href={item.git} target="_blank">
                  Github
                </a>
              </button>
              {item.demo && (
                <button className="bg-main rounded-xl p-3 duration-200 hover:scale-105">
                  <a href={item.demo} target="_blank" className="text-black">
                    Live demo
                  </a>
                </button>
              )}
              {item.git1 && (
                <button className="border border-main rounded-xl p-3 mr-2 text-main duration-200 hover:scale-105">
                  <a href={item.git} target="_blank">
                    Github Server
                  </a>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
