import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";

import { BsArrowLeft } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import Loading from "../Components/Loading";

const Blog = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/blog`)
      .then((res) => {
        setLoading(false);
        setBlogs(res.data);
      })
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
      <div className="text-center pt-10 md:pt-16">
        <h5 className="text-2xl font-bold">Lời mở đầu!</h5>
        <h5 className="pt-2">
          "Đây là nơi mình lưu trữ những bài học. Và cũng là nơi mình gửi gắm
          những lời thở than mà không biết chia sẻ cùng ai.
        </h5>
        <h5>Nếu bạn có vô tình lướt qua đây thì cũng đừng cười mình nhen"</h5>
      </div>
      <div className="flex items-center justify-center gap-5 py-5 after:content-[''] after:w-40 after:h-[1px] after:bg-gray-500 before:content-[''] before:w-40 before:h-[1px] before:bg-gray-500">
        <button
          className="p-5 text-gray border border-gray rounded-full"
          onClick={() => navigate("/blog/create")}
        >
          <AiOutlinePlus />
        </button>
      </div>

      <div className="lg:px-10 xl:px-64">
        {loading ? (
          <Loading />
        ) : (
          blogs.map((item) => (
            <div
              key={item._id}
              className="flex flex-col md:flex-row justify-between pb-5"
            >
              <div className="md:flex items-center gap-5">
                <Link
                  to={`/blog/${item._id}`}
                  className="text-sm md:text-md font-semibold text-white duration-200 hover:text-main2"
                >
                  {item.title}
                </Link>
                <p className="text-xs text-gray">{item.hashtag}</p>
              </div>
              <p className="text-gray">
                {moment(item.createdAt).format("D M Y").replaceAll(" ", "-")}
              </p>
            </div>
          ))
        )}
      </div>
      <p className="text-xs text-center my-10">© Kin | Powered by Kin</p>
    </div>
  );
};

export default Blog;
