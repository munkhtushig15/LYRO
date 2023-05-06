import express from "express";

import {
  getAllComments,
  addComment,
  getCommentByBlogId,
} from "../controller/comments.js";

const commentRouter = express.Router();
commentRouter.get("/", getAllComments);
commentRouter.post("/addComment", addComment);
commentRouter.post("/byId", getCommentByBlogId);
export default commentRouter;
