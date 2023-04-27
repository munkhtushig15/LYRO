import express from "express";
import { adminCheck } from "../middleware/middleware.js";
import {
  getAllBlogs,
  createBlog,
  approveBlog,
  getBlogById,
  addStars,
  getBlogByCategory,
  getBlogByParentCate,
  getBlogBySecondCate,
} from "../controller/blogs.js";

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs).get("/:id", getBlogById);
blogRouter.post("/Pcate", getBlogByParentCate);
blogRouter.post("/Ccate", getBlogByCategory);
blogRouter.post("/Scate", getBlogBySecondCate);
blogRouter.post("/createBlog", createBlog);
blogRouter.post("/approveBlog", adminCheck, approveBlog);
blogRouter.post("/review/:id", addStars);

export default blogRouter;
