import React from "react";
import AboutMe from "./Information/AboutMe";
import NavBar from "./NavBar";

const Informations = () => {
  return (
    <div className="relative bg-background border border-borderGray rounded-2xl p-8 lg:w-[800px] h-full">
      <div className="fixed bottom-0 right-[50%] translate-x-[50%] lg:translate-x-0 lg:absolute lg:top-0 lg:right-0">
        <NavBar />
      </div>
      <AboutMe />
    </div>
  );
};

export default Informations;
