import Joi from "joi";
import { REFRESH_SECRET } from "../../config";
import { RefreshToken, User } from "../../models";
import { CustomErrorHandler, JwtService } from "../../services";

const refreshController = {
  async refresh(req, res, next) {

    //va;idation
    const refreshSchema = Joi.object({
      refresh_token: Joi.string().required(),
    });

    const { error } = refreshSchema.validate(req.body);

    if (error) {
      return next(error);
    }
    let refreshToken;
    try {
      //database check
      refreshToken = await RefreshToken.findOne({
        token: req.body.refresh_token,
      });
      if (!refreshToken) {
        return next(CustomErrorHandler.unAuthorized("Invalid refresh token"));
      }
      let userId;
      try {
        const { _id } = await JwtService.verify(
          refreshToken.token,
          REFRESH_SECRET
        );
        userId = _id;
      } catch (err) {
        return next(new Error("Something went wrong" + err.message));
      }

      const user = User.findOne({ _id: userId });
      if (!user) {
        return next(CustomErrorHandler.unAuthorized("No user found"));
      }

      //tokens re generate
      //token generate

      const access_token = JwtService.sign({
        _id: userId,
        role: user.role,
      });

      //refresh token
      const refresh_token = JwtService.sign(
        {
          _id: user._id,
          role: user.role,
        },
        "1y",
        REFRESH_SECRET
      );

      //database whitelist

      await RefreshToken.create({ token: refresh_token });
      res.json({ access_token,refresh_token });
    } catch (err) {
      return next(new Error("Something went wrong," + err.message));
    }
  },
};

export default refreshController;
