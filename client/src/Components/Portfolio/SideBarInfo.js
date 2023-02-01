import React from "react";

import { FiMail } from "react-icons/fi";
import { BsCalendar2Week } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from "react-icons/ai";
import Avatar from "../../assets/104662271_3077119552402487_5186215208656728576_n.jpg";

const info = [
  {
    icon: <FiMail />,
    title: "Mail",
    info: "kin0905152701@gmail.com",
  },
  {
    icon: <BsCalendar2Week />,
    title: "Birthday",
    info: "28-08-1997",
  },
  {
    icon: <GoLocation />,
    title: "Location",
    info: "Danang, Vietnam",
  },
];

const SideBarInfo = () => {
  return (
    <aside className="p-4 lg:py-[60px] lg:px-[30px] bg-background border border-borderGray rounded-2xl">
      <div className="flex lg:flex-col items-center gap-5">
        <div className="w-[80px] lg:w-[150px] rounded-2xl">
          <img
            src={Avatar}
            alt="avatar"
            className="w-full h-full object-contain rounded-2xl"
          />
        </div>
        <div className="flex flex-col lg:items-center lg:justify-center gap-3">
          <h2 className="font-semibold text-base lg:text-2xl">
            Minh Quân (Kin)
          </h2>
          <div className="bg-borderGray rounded-xl">
            <small className="py-2 px-4 text-[10px] lg:text-xs">
              ReactJS/NextJS Developer
            </small>
          </div>
        </div>
      </div>

      <div className="h-[1px] bg-borderGray my-5 lg:my-10"></div>

      <div className="">
        {info.map((item, index) => (
          <div key={index} className="flex items-center gap-5 mb-5">
            <div className="border border-borderGray rounded-lg lg:rounded-2xl p-2 lg:p-4">
              <i className="text-main">{item.icon}</i>
            </div>
            <div>
              <small className="text-[#898989] text-[10px] lg:text-xs">
                {item.title.toUpperCase()}
              </small>
              <p className="text-xs lg:text-sm">{item.info}</p>
            </div>
          </div>
        ))}
      </div>

      <div className=" h-[1px] bg-borderGray my-5 lg:my-10"></div>

      <div className="flex items-center justify-center gap-5">
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
    </aside>
  );
};

export default SideBarInfo;
