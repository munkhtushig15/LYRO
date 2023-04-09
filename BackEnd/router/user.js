import express from "express";
import {
  getAllUser,
  createUser,
  getUserByObject,
  getUserById,
} from "../controller/users.js";

const userRouter = express.Router();

userRouter.get("/", getAllUser);
userRouter.get("/:id", getUserById);
userRouter.post("/signup", createUser);
userRouter.post("/login", getUserByObject);
export default userRouter;
