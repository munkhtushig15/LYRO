import mongoose from "mongoose";

const CommentSchema = mongoose.Schema({
  Comment: {
    type: String,
  },
  user_id: {
    type: String,
    required: true,
  },
  blog_id: {
    type: String,
    ref: "Comment",
    required: true,
  },
});

export const Comment = mongoose.model("Comment", CommentSchema);
