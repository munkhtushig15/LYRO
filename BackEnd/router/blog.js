import express from "express";
import { adminCheck } from "../middleware/middleware.js";
import {
  getAllBlogs,
  createBlog,
  getBlogById,
  getBlogByUser,
  addFavorite,
  addStars,
  getBlogByCategory,
  getBlogByParentCate,
  getBlogBySecondCate,
} from "../controller/blogs.js";

const blogRouter = express.Router();

blogRouter
  .get("/", getAllBlogs)
  .get("/:id", getBlogById)
  .post("/", getBlogByUser);

blogRouter.post("/Pcate", getBlogByParentCate);
blogRouter.post("/Ccate", getBlogByCategory);
blogRouter.post("/Scate", getBlogBySecondCate);
blogRouter.post("/createBlog", createBlog);

blogRouter.post("/favorite", addFavorite);
blogRouter.post("/review/:id", addStars);

export default blogRouter;
