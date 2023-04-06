import { Blog } from "../model/Blog.js";
export const getAllBlogs = async (req, res) => {
  try {
    const blog = await Blog.find({});
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
    res.status(200).send({
      data: blog,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};
export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    res.status(200).send({
      data: blog,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
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
