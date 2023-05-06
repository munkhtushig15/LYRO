import { Comment } from "../model/Comment.js";
import { User } from "../model/User.js";
export const getAllComments = async (req, res) => {
  try {
    const comment = await Comment.find({});
    res.status(200).send({
      data: comment,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};
export const addComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(200).send({
      data: comment,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};
export const getCommentByBlogId = async (req, res) => {
  try {
    const { blog_id } = req.body;
    const comment = await Comment.find({ blog_id: blog_id }).populate(
      "user_id"
    );
    res.status(200).send({
      data: comment,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};
