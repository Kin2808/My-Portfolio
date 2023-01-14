import React from "react";
import { AiFillFacebook, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-10 p-10 pb-36 mt-[8rem] bg-main text-black">
      <h1 className="text-3xl font-semibold">Minh Quân</h1>

      <div className="flex flex-col md:flex-row gap-10">
        <a href="#" className="text-black">
          Home
        </a>
        <a href="#about" className="text-black">
          About
        </a>
        <a href="#experience" className="text-black">
          Experience
        </a>
        <a href="#projects" className="text-black">
          Projects
        </a>
        <a href="#contact" className="text-black">
          Contact
        </a>
      </div>

      <div className="flex text-4xl gap-5">
        <i className="border border-b rounded-md">
          <AiFillFacebook />
        </i>
        <i className="border border-b rounded-md">
          <AiFillLinkedin />
        </i>
        <i className="border border-b rounded-md">
          <AiFillMail />
        </i>
      </div>
    </footer>
  );
};

export default Footer;
