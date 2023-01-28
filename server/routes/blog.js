var express = require("express");
var router = express.Router();
const Blog = require("../models/blog");

router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.aggregate([{ $project: { content: 0 } }]).sort({
      createdAt: -1,
    });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const blog = new Blog(data);
    await blog.save();
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const blog = await Blog.findByIdAndUpdate(id, data);
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
