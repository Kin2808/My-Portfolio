import React from "react";
import moment from "moment";

const Detail = ({ blogDetail }) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold pb-2">{blogDetail.title}</h1>
      <div className="flex items-center gap-5 text-sm">
        <div className="flex gap-2">
          <p className="text-gray">Author:</p>
          <p className="text-main2">{blogDetail.author}</p>
        </div>
        <div className="flex gap-2">
          <p className="text-gray">Date:</p>
          <p className="text-main2">
            {moment(blogDetail.createdAt).format("D M Y").replaceAll(" ", "-")}
          </p>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: blogDetail.content }}
        className="text-quill pt-10 leading-10 text-sm md:text-[16px]"
      ></div>
    </div>
  );
};

export default Detail;
