/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineProject } from "react-icons/ai";
import { BiBookAlt } from "react-icons/bi";
import { RiMessage3Line } from "react-icons/ri";

const Nav = () => {
  const [selected, setSelected] = useState("#");
  // EVENT SCROLL HEADER
  const [hideHeader, sethideHeader] = useState(false);
  const [position, setPosition] = useState(window.pageYOffset);

  const handleScroll = useCallback(() => {
    let moving = window.pageYOffset;
    sethideHeader(moving > position);
    setPosition(moving);
  }, [position]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  //END

  return (
    <nav
      className={`${
        hideHeader ? "translate-y-[120px]" : "translate-y-0"
      } fixed ease-linear duration-150 bottom-10 left-[50%] translate-x-[-50%] p-1 rounded-3xl flex md:gap-5 bg-[rgba(0,0,0,0.3)] z-10`}
    >
      <a
        href="#"
        className={`${
          selected === "#" &&
          "bg-[rgba(77,181,255,0.5)] text-white rounded-full"
        } p-5 md:p-7 duration-200  hover:text-[rgba(77,181,255,0.5)]`}
        onClick={() => setSelected("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={`${
          selected === "#about" &&
          "bg-[rgba(77,181,255,0.5)] text-white rounded-full"
        } p-5 md:p-7 duration-200  hover:text-[rgba(77,181,255,0.5)]`}
        onClick={() => setSelected("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={`${
          selected === "#experience" &&
          "bg-[rgba(77,181,255,0.5)] text-white rounded-full"
        } p-5 md:p-7 duration-200  hover:text-[rgba(77,181,255,0.5)]`}
        onClick={() => setSelected("#experience")}
      >
        <BiBookAlt />
      </a>
      <a
        href="#projects"
        className={`${
          selected === "#projects" &&
          "bg-[rgba(77,181,255,0.5)] text-white rounded-full"
        } p-5 md:p-7 duration-200  hover:text-[rgba(77,181,255,0.5)]`}
        onClick={() => setSelected("#projects")}
      >
        <AiOutlineProject />
      </a>
      <a
        href="#contact"
        className={`${
          selected === "#contact" &&
          "bg-[rgba(77,181,255,0.5)] text-white rounded-full"
        } p-5 md:p-7 duration-200  hover:text-[rgba(77,181,255,0.5)]`}
        onClick={() => setSelected("#contact")}
      >
        <RiMessage3Line />
      </a>
    </nav>
  );
};

export default Nav;
