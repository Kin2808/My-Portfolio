import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const BlogItems = ({ blogs }) => {
  return (
    <div>
      {blogs.map((item) => (
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
      ))}
    </div>
  );
};

export default BlogItems;
