import React from "react";
import Header from "../Components/Header/Header";
import Nav from "../Components/Nav/Nav";
import About from "../Components/About/About";
import Experience from "../Components/Experience/Experience";
import Projects from "../Components/Projects/Projects";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";

import SideBarInfo from "../Components/Portfolio/SideBarInfo";
import Informations from "../Components/Portfolio/Informations";

const Info = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      {/* <div className="h-[calc(100vh-8rem)] container mx-auto my-5 lg:my-16 lg:mx-28 flex flex-col lg:flex-row gap-5">
        <div className="">
          <SideBarInfo />
        </div>
        <div className="">
          <Informations />
        </div>
      </div> */}
    </>
  );
};

export default Info;
