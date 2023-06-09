import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: {
      required: [true, "title"],
      type: String,
    },
    image: {
      required: [true, "Image"],
      type: String,
    },
    desc: {
      required: [true, "Desc"],
      type: String,
    },
    parentCategory: {
      required: [true, "ParentCategory"],
      type: String,
    },
    category: {
      required: [true, "Category"],
      type: String,
    },
    secondCategory: {
      required: [true, "SecondCategory"],
      type: String,
    },
    stars: {
      default: "0",
      type: Number,
    },
    user: {
      default: "0",
      type: Number,
    },
    user_id: {
      type: String,
      ref: "User",
      required: true,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);
const FavoriteSchema = mongoose.Schema({
  blog_id: {
    type: String,
  },
  user_id: {
    type: String,
    ref: "User",
    required: true,
  },
});

BlogSchema.virtual("Comment", {
  ref: "Comment",
  localField: "_id",
  foreignField: "blog_id",
});

export const Favorite = mongoose.model("Favorite", FavoriteSchema);
export const Blog = mongoose.model("Blog", BlogSchema);
