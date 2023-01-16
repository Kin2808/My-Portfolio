import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";

import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/blog`)
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto pt-6">
      <i
        className="text-3xl md:text-5xl opacity-80 hover:opacity-100 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <BsArrowLeft className="hover:animate-wiggle" />
      </i>
      <div className="text-center pb-16">
        <h5 className="text-2xl font-bold">Lời mở đầu!</h5>
        <h5 className="pt-2">
          "Đây là nơi mình lưu trữ những bài học. Và cũng là nơi mình gửi gắm
          những lời thở than mà không biết chia sẻ cùng ai.
        </h5>
        <h5>Nếu bạn có vô tình lướt qua đây thì cũng đừng cười mình nhen"</h5>
      </div>

      <div className="lg:px-10 xl:px-64">
        {blogs.map((item) => (
          <div key={item._id} className="flex justify-between pb-5">
            <div className="flex items-center gap-5">
              <Link
                to={`/blog/${item._id}`}
                className="text-center font-semibold text-white duration-200 hover:text-main2"
              >
                {item.title}
              </Link>
              <p className="text-xs text-gray">{item.hashtag}</p>
            </div>
            <h2 className="text-gray">
              {moment(item.createdAt).format("D M Y").replaceAll(" ", "-")}
            </h2>
          </div>
        ))}
      </div>
      <p className="text-xs text-center ">© Kin | Powered by Kin</p>
    </div>
  );
};

export default Blog;
