import React from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import CTA from "./CTA";
import Avatar from "../../assets/104662271_3077119552402487_5186215208656728576_n-removebg-preview.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="container mx-auto text-center mt-[4rem] md:mt-[6rem] font-semibold ">
        <i
          className="text-3xl md:text-5xl opacity-80 hover:opacity-100 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <BsArrowLeft className="hover:animate-wiggle" />
        </i>
        <h5 className="text-xs">Hello, I'm</h5>
        <h1 className="text-4xl text-main py-4">Minh Quân</h1>
        <h5 className="text-sm text-gray-300">ReactJS/NextJS Developer</h5>

        <CTA />

        <div className="flex items-center justify-between mt-16">
          <HeaderSocial />

          <div className="ml-10 md:ml-16 w-[300px] md:w-[550px]">
            <img
              src={Avatar}
              alt="avatar"
              className="w-full h-full object-contain bg-gradient-to-tr from-main to-[#23344f] rounded-full"
            />
          </div>

          <a
            href="#contact"
            className="text-xs md:text-md w-24 flex-end rotate-90 duration-200 hover:text-[rgba(77,181,255,0.4)]"
          >
            Scroll down
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
