import { User } from "../model/User.js";

import jwt from "jsonwebtoken";
export const getAllUser = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).send({
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).send({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};

export const getUserByObject = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const token = jwt.sign(
      {
        email: email,
        password: password,
        role: role,
      },
      "secret",
      {
        expiresIn: "100d",
      }
    );
    const user = await User.findOne({
      email: email,
    });
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      res.send("isMatch");
    }
    if (user) {
      res.status(200).send({
        data: user,
        token: token,
      });
    } else {
      res.status(404).send({
        data: "tiim user bhq bn",
      });
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).populate("Blog").populate("Favorite");
    res.status(200).send({
      data: user,
    });
  } catch (error) {
    res.status(404).send({
      data: error.message,
    });
  }
};
