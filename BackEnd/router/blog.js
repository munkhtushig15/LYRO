import express from "express";
import { adminCheck } from "../middleware/middleware.js";
import {
  getAllBlogs,
  createBlog,
  getBlogById,
  getBlogByUser,
  addFavorite,
  addStars,
  deleteBlog,
  getBlogByCategory,
  getBlogByParentCate,
  getBlogBySecondCate,
  testDelete,
} from "../controller/blogs.js";

const blogRouter = express.Router();

blogRouter
  .get("/", getAllBlogs)
  .get("/:id", getBlogById)
  .post("/", getBlogByUser);

blogRouter.post("/deleteBlog", deleteBlog);
blogRouter.post("/deleteBlog2", testDelete);

blogRouter.post("/Pcate", getBlogByParentCate);
blogRouter.post("/Ccate", getBlogByCategory);
blogRouter.post("/Scate", getBlogBySecondCate);
blogRouter.post("/createBlog", createBlog);

blogRouter.post("/favorite", addFavorite);
blogRouter.post("/review/:id", addStars);

export default blogRouter;
