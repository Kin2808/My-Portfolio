import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineBookOpen } from "react-icons/hi";
import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import ME from "../assets/118554028_3292067277574379_3433221777595945656_n.jpg";

const Home = () => {
  return (
    <div className="container mx-auto flex flex-col justify-between py-10 h-[100vh]">
      <div className="flex justify-between ">
        <Link
          to="/"
          className="text-white opacity-80 duration-200 hover:opacity-100"
        >
          Kin.com
        </Link>
        <div className="flex gap-5">
          <Link
            to="/blog"
            className="text-white opacity-80 duration-200 hover:opacity-100"
          >
            My Blog
          </Link>
          <Link
            to="/info"
            className="text-white opacity-80 duration-200 hover:opacity-100"
          >
            About Me
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-10 ">
        <div className="w-[300px]">
          <img
            src={ME}
            alt="avatar"
            className="w-full h-full object-contain rounded-full"
          />
        </div>
        <div className="text-center">
          <h5>Hello, Mình là Quân!</h5>
          <h5>Một lập trình viên tại Đà Nẵng - thành phố của những cây cầu</h5>
          <Link to="/info" className="text-xs">
            (Xem thêm)
          </Link>
        </div>
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
          >
            <AiOutlineFacebook />{" "}
            <div className="tooltiptext text-xs">Facebook</div>
          </a>
          <a
            href="https://www.linkedin.com/in/qu%C3%A2n-minh-2a862b24a/"
            target="_blank"
            className="tooltip opacity-80 duration-200 hover:opacity-100"
          >
            <AiOutlineLinkedin />{" "}
            <div className="tooltiptext text-xs">Linkedin</div>
          </a>
          <a
            href="https://github.com/Kin2808"
            target="_blank"
            className="tooltip opacity-80 duration-200 hover:opacity-100"
          >
            <AiOutlineGithub />{" "}
            <div className="tooltiptext text-xs">Github</div>
          </a>
        </div>
      </div>
      <p className="text-xs text-center ">© Kin | Powered by Kin</p>
    </div>
  );
};

export default Home;
