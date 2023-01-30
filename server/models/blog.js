const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const blogModel = new Schema(
  {
    title: { type: String, required: true },
    hashtag: { type: Array, default: [] },
    author: { type: String, default: "kin" },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const Blog = model("Blog", blogModel);
module.exports = Blog;
