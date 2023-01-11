import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from "react-icons/ai";

const HeaderSocial = () => {
  return (
    <div className="flex flex-col items-center gap-5 after:content-[''] after:w-[2px] after:h-[50px] after:bg-[rgba(77,181,255,0.4)] before:content-[''] before:w-[2px] before:h-[50px] before:bg-[rgba(77,181,255,0.4)]">
      <a
        href="https://www.linkedin.com/in/qu%C3%A2n-minh-2a862b24a/"
        target="_blank"
        className="text-main text-2xl"
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://github.com/Kin2808"
        target="_blank"
        className="text-main text-2xl"
      >
        <AiFillGithub />
      </a>
      <a
        href="https://www.facebook.com/quan.nguyen.5205/"
        target="_blank"
        className="text-main text-2xl"
      >
        <AiFillFacebook />
      </a>
    </div>
  );
};

export default HeaderSocial;
