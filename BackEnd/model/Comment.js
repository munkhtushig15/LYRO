import mongoose from "mongoose";
export const CommentSchema = mongoose.Schema(
  {
    Comment: {
      type: String,
    },
    user_id: {
      type: String,
      ref: "User",
      required: true,
    },
    blog_id: {
      type: String,
      ref: "Blog",
      required: true,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);
CommentSchema.virtual("User", {
  ref: "User",
  localField: "_id",
  foreignField: "user_id",
});
CommentSchema.virtual("Blog", {
  ref: "Blog",
  localField: "_id",
  foreignField: "blog_id",
});

export const Comment = mongoose.model("Comment", CommentSchema);
