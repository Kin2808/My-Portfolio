import React from "react";
import { TbEdit } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";

const EditModal = ({ updateBlog, deleteBlog }) => {
  return (
    <div className="absolute bg-background right-0 top-7 border rounded-xl">
      <div
        className="flex justify-between items-center px-5 py-2 border-b duration-200 opacity-70 hover:opacity-100 cursor-pointer"
        onClick={updateBlog}
      >
        <p>Edit</p>
        <button className="text-xl">
          <TbEdit />
        </button>
      </div>

      <div
        className="flex justify-between items-center gap-5 px-5 py-2 duration-200 opacity-70 hover:opacity-100 cursor-pointer"
        onClick={deleteBlog}
      >
        <p>Delete</p>
        <button className="text-xl">
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
};

export default EditModal;
