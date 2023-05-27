import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./router/user.js";
import blogRouter from "./router/blog.js";
import commentRouter from "./router/comment.js";
const app = express();

dotenv.config();
app.use(express.json());

app.use((req, res ,next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
})

app.use(cors());
app.use("/users", userRouter);
app.use("/blogs", blogRouter);
app.use("/comments", commentRouter);
const uri = process.env.MONGO_ATLAS_URI || "mongodb+srv://Brps12:boldoo20071228bataa@lyro.qvigqrf.mongodb.net/?retryWrites=true&w=majority";
const port = process.env.PORT || 9911;

const connect = () => {
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(uri, {}).then(() => {
      console.log("Connected to MongoDB");
    });
  } catch (error) {
    console.error("Couldnt Connect");
    process.exit(1);
  }
};

app.listen(port, async () => {
  connect();
  console.log(`Server running at localhost:${port}`);
});
