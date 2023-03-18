import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";

import {
  BsThreeDotsVertical,
  BsFillArrowUpCircleFill,
  BsArrowLeft,
} from "react-icons/bs";
import Loading from "../Components/Loading";
import EditModal from "../Components/EditModal";

const BlogDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [blogDetail, setBlogDetail] = useState("");
  const [openEditModal, setOpenEditModal] = useState(false);
  const [hideBtnScrollTop, setHideBtnScrollTop] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/blog/${id}`)
      .then((res) => {
        setLoading(false);
        setBlogDetail(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const updateBlog = () => {
    let answer = prompt("chọn 1 số ngẫu nhiên");
    if (answer === process.env.REACT_APP_SECRET_KEY) {
      navigate(`/blog/create/${id}`);
    } else {
      alert("chúc bạn may mắn lần sau!");
    }
  };

  const deleteBlog = () => {
    let answer = prompt("chọn 1 số ngẫu nhiên");
    if (answer === process.env.REACT_APP_SECRET_KEY) {
      axios
        .delete(`${process.env.REACT_APP_BASE_URL}/blog/${id}`)
        .then(() => navigate("/blog"))
        .catch((err) => console.log(err));
    } else {
      alert("chúc bạn may mắn lần sau!");
    }
  };

  const handleScroll = () => {
    let moving = window.pageYOffset;
    moving > 20 ? setHideBtnScrollTop(true) : setHideBtnScrollTop(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const scrollTop = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="container relative mx-auto pt-6">
      <div className="flex justify-between items-center">
        <button
          className="text-3xl opacity-80 hover:opacity-100"
          onClick={() => navigate("/blog")}
        >
          <BsArrowLeft className="hover:animate-wiggle" />
        </button>

        <div
          className="relative"
          onClick={() => setOpenEditModal((prev) => !prev)}
        >
          <button className="text-xl opacity-80 hover:opacity-100 cursor-pointer">
            <BsThreeDotsVertical />
          </button>
          {openEditModal && (
            <EditModal updateBlog={updateBlog} deleteBlog={deleteBlog} />
          )}
        </div>
      </div>

      <div className="pt-10 lg:px-72">
        {loading ? (
          <Loading />
        ) : (
          <>
            <h1 className="text-2xl font-semibold pb-2">{blogDetail.title}</h1>
            <div className="flex items-center gap-5 text-sm">
              <div className="flex gap-2">
                <p className="text-gray">Author:</p>
                <p className="text-main2">{blogDetail.author}</p>
              </div>
              <div className="flex gap-2">
                <p className="text-gray">Date:</p>
                <p className="text-main2">
                  {moment(blogDetail.createdAt)
                    .format("D M Y")
                    .replaceAll(" ", "-")}
                </p>
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: blogDetail.content }}
              className="text-quill pt-10 leading-10 text-sm md:text-[16px]"
            ></div>
          </>
        )}
      </div>

      <p className="text-xs text-center my-10">© Kin | Powered by Kin</p>

      <button
        className={`${
          hideBtnScrollTop && "fixed bottom-[5%] right-[10%]"
        } text-[50px] opacity-50 text-main`}
        onClick={scrollTop}
      >
        <BsFillArrowUpCircleFill />
      </button>
    </div>
  );
};

export default BlogDetail;
