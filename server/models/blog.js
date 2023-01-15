const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const blogModel = new Schema(
  {
    title: String,
    content: String,
  },
  { timestamps: true }
);

const Blog = model("Blog", blogModel);
module.exports = Blog;
