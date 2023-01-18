import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import toast, { Toaster } from "react-hot-toast";

import { BsArrowLeft } from "react-icons/bs";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const CreateBlog = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, watch } = useForm();

  useEffect(() => {
    register("content");
  }, [register]);

  const onEditorStateChange = (editorState) => {
    setValue("content", editorState);
  };
  const editorContent = watch("content");

  const createNewBlog = async (data) => {
    const arr = data.hashtag.split(", ");
    await axios
      .post(`${process.env.REACT_APP_BASE_URL}/blog`, {
        title: data.title,
        author: data.author,
        hashtag: arr,
        content: data.content,
      })
      .then(() => {
        toast.success("Successfully Created!");
        setTimeout(() => {
          navigate("/blog");
        }, 2000);
      });
  };

  return (
    <div className="container mx-auto pt-6 h-[100vh]">
      <Toaster position="top-center" reverseOrder={false} />
      <i
        className="text-3xl md:text-5xl opacity-80 hover:opacity-100 cursor-pointer"
        onClick={() => navigate("/blog")}
      >
        <BsArrowLeft className="hover:animate-wiggle" />
      </i>

      <form onSubmit={handleSubmit(createNewBlog)} className="md:pt-10">
        <div className="flex items-center gap-5">
          <label>Title:</label>
          <input {...register("title")} className="w-full border-white" />
        </div>
        <div className="grid grid-cols-2 gap-5 py-5">
          <div className="flex items-center gap-5">
            <label>Author:</label>
            <input {...register("author")} className="w-full border-white" />
          </div>
          <div className="flex items-center gap-5">
            <label>Hashtag:</label>
            <input {...register("hashtag")} className="w-full border-white" />
          </div>
        </div>
        <ReactQuill
          className="[&_.ql-toolbar]:rounded-t-xl [&_.ql-toolbar]:bg-[rgba(255,255,255,0.9)] [&_.ql-editor]:h-[500px] "
          theme="snow"
          modules={modules}
          formats={formats}
          value={editorContent}
          onChange={onEditorStateChange}
        />
        <button
          type="submit"
          className="px-5 py-2 mt-5 border border-main rounded-2xl"
        >
          Create New Post
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
