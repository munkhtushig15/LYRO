import express from "express";
import { adminCheck } from "../middleware/middleware.js";
import {
  getAllBlogs,
  createBlog,
  approveBlog,
  addStars,
  getBlogByCategory,
  getBlogByCategory2,
  getBlogByCategory3,
} from "../controller/blogs.js";

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.get("/cate", getBlogByCategory);
blogRouter.get("/cate2", getBlogByCategory2);
blogRouter.get("/cate3", getBlogByCategory3);
blogRouter.post("/createBlog", createBlog);
blogRouter.post("/approveBlog", adminCheck, approveBlog);
blogRouter.post("/review/:id", addStars);

export default blogRouter;
