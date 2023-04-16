import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineBookOpen } from "react-icons/hi";
import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import ME from "../../assets/118554028_3292067277574379_3433221777595945656_n.jpg";
import { Heythere } from "../../Components/svg/heythere";

import "./style.css";

const Home = () => {
  const divRef = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      divRef.current.classList.add("active");
    }, 2000);
  }, []);

  return (
    <div className="home-container">
      <div className="border-container">
        <div className="border-left"></div>
        <div className="border-top"></div>
        <div className="border-right"></div>
        <div className="border-bottom"></div>

        <div
          ref={divRef}
          className="hidden h-full justify-center lg:p-14 xl:p-24 2xl:p-32"
        >
          <div className="h-full w-full flex flex-col xl:flex-row items-center justify-center lg:justify-evenly gap-10 ">
            {/* AVATAR */}
            <div className="roll-in-blurred-right w-[250px] md:w-[350px] xl:w-[450px] 2xl:w-[550px]">
              <img
                src={ME}
                alt="avatar"
                className="w-full h-full object-contain rounded-full"
              />
            </div>

            {/* CONTENT */}
            <div className="basis-[300px] flex flex-col justify-center items-center gap-3 lg:flex-1 xl:gap-16 h-full ">
              <div className="text-header flex flex-col items-center gap-5">
                <div className="text-animate">
                  <Heythere />
                </div>
                <h3 className="focus-in-expand-fwd1">
                  Welcome to mah portfolio
                </h3>
                <p className="focus-in-expand-fwd2 hidden lg:block lg:text-base">
                  I'm Quan. A Wed Developer in Danang - The city of bridges
                </p>
              </div>
              <div className="flex gap-5">
                <div className="bounce-in-fwd">
                  <button
                    onClick={() => navigate("/info")}
                    className=" border-main border-2 rounded-xl px-5 py-3 text-xs duration-200 hover:scale-105"
                  >
                    SEE MORE ABOUT ME
                  </button>
                </div>
                <div className="bounce-in-fwd">
                  <button
                    onClick={() => navigate("/blog")}
                    className="hidden border-main border-2 rounded-xl px-5 py-3 text-xs duration-200 hover:scale-105 lg:block"
                  >
                    VISIT MY BLOG
                  </button>
                </div>
              </div>
              <div className="scale-in-hor-center flex items-center">
                <div className="w-20 h-[1px] bg-gray-500"></div>
                <div className="w-[15px] h-[15px] border border-gray-500 rounded-full"></div>
                <div className="w-20 h-[1px] bg-gray-500"></div>
              </div>
              <div className="scale-in-hor-center flex flex-col items-center gap-2">
                <p className="text-header text-xs lg:text-base">
                  Or you can contact me here
                </p>
                <div className="flex text-4xl gap-5">
                  <Link
                    to="/blog"
                    className="tooltip opacity-80 duration-200 hover:opacity-100"
                  >
                    <HiOutlineBookOpen />
                    <div className="tooltiptext text-xs">Blog</div>
                  </Link>
                  <a
                    href="https://www.facebook.com/quan.nguyen.5205/"
                    target="_blank"
                    className="tooltip opacity-80 duration-200 hover:opacity-100"
                    rel="noreferrer"
                  >
                    <AiOutlineFacebook />{" "}
                    <div className="tooltiptext text-xs">Facebook</div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/qu%C3%A2n-minh-2a862b24a/"
                    target="_blank"
                    className="tooltip opacity-80 duration-200 hover:opacity-100"
                    rel="noreferrer"
                  >
                    <AiOutlineLinkedin />{" "}
                    <div className="tooltiptext text-xs">Linkedin</div>
                  </a>
                  <a
                    href="https://github.com/Kin2808"
                    target="_blank"
                    className="tooltip opacity-80 duration-200 hover:opacity-100"
                    rel="noreferrer"
                  >
                    <AiOutlineGithub />{" "}
                    <div className="tooltiptext text-xs">Github</div>
                  </a>
                </div>
              </div>
              <h2 className="scale-in-hor-center text-header hidden lg:block">
                Hope you have a nice day!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
