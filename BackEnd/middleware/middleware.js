import { User } from "../model/User.js";
export const adminCheck = async (req, res, next) => {
  try {
    const { admin_id } = req.body;
    const user = await User.findById(admin_id);
    if (user.role === "admin") {
      return next();
    } else {
      res.status(401).send({
        data: "Admin erh avna uu",
      });
    }
  } catch (error) {
    res.status(401).send({
      success: false,
      data: error.messsage,
    });
  }
};
