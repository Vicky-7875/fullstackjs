import { User } from "../models";
import { CustomErrorHandler } from "../services";

const admin = async (req, res, next) => {
  try {
    const user = await User.findOne({
      _id: req.user._id,
    });
    if (user.role === "admin") {
      next(); //if it blanck   then it is error
    } else {
      return next(CustomErrorHandler.unAuthorized());
    }
  } catch (error) {
    return next(CustomErrorHandler.serverError());
  }
};

export default admin;
