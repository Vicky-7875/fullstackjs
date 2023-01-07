import { User } from "../../models";
import { CustomErrorHandler } from "../../services";

const userController = {
  async me(req, res, next) {
    try {
      //hide using select
      const user = await User.findOne({ _id: req.user._id }).select('-password -createdAt -updatedAt -__v');

      if (!user) {
        return next(CustomErrorHandler.notFound());
      }
      res.json(user);
    } catch (error) {
      return next(error);
    }
  },
};
export default userController;
