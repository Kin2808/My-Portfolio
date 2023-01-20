import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";

import { BsArrowLeft } from "react-icons/bs";

const BlogDetail = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [blogDetail, setBlogDetail] = useState();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/blog/${id}`)
      .then((res) => setBlogDetail(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto pt-6">
      <i
        className="text-3xl md:text-5xl opacity-80 hover:opacity-100 cursor-pointer"
        onClick={() => navigate("/blog")}
      >
        <BsArrowLeft className="hover:animate-wiggle" />
      </i>
      {blogDetail && (
        <div className="pt-10 lg:px-72">
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
        </div>
      )}
      <p className="text-xs text-center my-10">© Kin | Powered by Kin</p>
    </div>
  );
};

export default BlogDetail;
