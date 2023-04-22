import { Blog } from "../model/Blog.js";
import { Approve } from "../model/Blog.js";
export const getAllBlogs = async (req, res) => {
  try {
    const Skip = req.query.skip;
    const Limit = req.query.limit;
    const blog = await Blog.find({}).limit(Limit).skip(Skip);
    res.status(200).send({
      data: blog,
      message: "Nice",
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};

export const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    await Approve.create(req.body);
    res.status(200).send({
      data: blog,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};
export const addStars = async (req, res) => {
  try {
    const { id } = req.params;
    const { star } = req.body;
    const blog = await Blog.findById(id);
    await Blog.findByIdAndUpdate(
      { _id: id },
      {
        user: blog.user + 1,
        stars: Number(blog.stars) + Number(star),
      }
    );
    res.status(200).send({
      data: blog,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};
export const approveBlog = async (req, res) => {
  try {
    const { _id, blog_id } = req.body;
    const approve = await Approve.findById({ _id: _id });
    await Blog.findByIdAndUpdate(
      { _id: blog_id },
      {
        status: "Public",
      }
    );
    await Approve.findByIdAndDelete({ _id: _id });
    res.status(200).send({
      data: approve,
      message: "Approved",
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};
export const getBlogByCategory = async (req, res) => {
  try {
    const { parentCategory } = req.body;
    const blog = await Blog.find({
      parentCategory: parentCategory,
    });
    res.status(200).send({
      data: blog,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};
export const getBlogByCategory2 = async (req, res) => {
  try {
    const { parentCategory, secondCategory } = req.body;
    const blog = await Blog.find({
      parentCategory: parentCategory,
      secondCategory: secondCategory,
    });
    res.status(200).send({
      data: blog,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};
export const getBlogByCategory3 = async (req, res) => {
  try {
    const { parentCategory, secondCategory, category } = req.body;
    const blog = await Blog.find({
      parentCategory: parentCategory,
      secondCategory: secondCategory,
      category: category,
    });
    res.status(200).send({
      data: blog,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};
