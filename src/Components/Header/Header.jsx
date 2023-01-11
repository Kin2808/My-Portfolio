import React from "react";

import CTA from "./CTA";
import Avatar from "../../assets/104662271_3077119552402487_5186215208656728576_n-removebg-preview.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto text-center mt-[8rem] font-semibold">
        <h5 className="text-xs">Hello, I'm</h5>
        <h1 className="text-4xl py-4">Minh Quân</h1>
        <h5 className="text-xs text-gray-300">ReactJS/NextJS Developer</h5>

        <CTA />

        <div className="flex items-center justify-between mt-16">
          <HeaderSocial />

          <div className="ml-16 w-[550px]">
            <img
              src={Avatar}
              alt="avatar"
              className="w-full h-full object-contain  bg-gradient-to-tr from-main to-[#23344f] rounded-full"
            />
          </div>

          <a href="#contact" className="rotate-90 text-main">
            Scroll down
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
