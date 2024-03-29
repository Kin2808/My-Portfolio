import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import toast, { Toaster } from "react-hot-toast";

import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

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
    ["code-block"],
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
  "code-block",
];

const CreateBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, setValue, watch, reset } = useForm();

  useEffect(() => {
    register("content");
  }, [register]);

  const fetchBlogToUpdate = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/blog/${id}`
      );
      const temp = await res.data;
      setValue("title", temp.title);
      setValue("author", temp.author);
      setValue("hashtag", temp.hashtag);
      setValue("content", temp.content);
      return temp;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchBlogToUpdate();
    } else {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const onEditorStateChange = (editorState) => {
    setValue("content", editorState);
  };
  const editorContent = watch("content");

  const createNewBlog = (data) => {
    try {
      const arr = data.hashtag.split(", ");
      setLoading(true);
      axios
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
          }, 1000);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const updateBlog = (data) => {
    try {
      let dataUpdate = {
        title: data.title,
        author: data.author,
        hashtag: data.hashtag,
        content: data.content,
      };
      setLoading(true);
      axios
        .put(`${process.env.REACT_APP_BASE_URL}/blog/${id}`, dataUpdate)
        .then(() => {
          toast.success("Successfully Updated!");
          setTimeout(() => {
            navigate("/blog");
          }, 1000);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (data) => {
    try {
      if (id) {
        updateBlog(data);
      } else {
        createNewBlog(data);
      }
    } catch (error) {
      toast.error("Something wrong here");
    }
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

      <form onSubmit={handleSubmit(onSubmit)} className="md:pt-10">
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
          disabled={loading}
          className="flex items-center px-5 py-2 mt-5 border border-main rounded-2xl duration-200 opacity-80 hover:opacity-100 cursor-pointer"
        >
          {loading && (
            <i className={`${loading && "animate-spin"} text-main mr-2`}>
              <AiOutlineLoading3Quarters />
            </i>
          )}
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
