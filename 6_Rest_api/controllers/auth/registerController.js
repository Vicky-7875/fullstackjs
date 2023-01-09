import Joi from "joi";
import { CustomErrorHandler, JwtService } from "../../services";
import { RefreshToken, User } from "../../models";
import bcrypt from "bcrypt";
import { REFRESH_SECRET } from "../../config";

// import  from "../../services";

const registerController = {
  // register(req, res, next) {
  async register(req, res, next) {
    //router logic

    /**
     * CHECKLIST
     *
     * validate the request
     * authorize the request
     * check if user is in the database alreate
     * prepare model
     * store in database
     * generate JWT token
     * send response
     */

    //validation
    const registerSchema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      email: Joi.string().email().required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
      repeat_password: Joi.ref("password"),
    });

    const { error } = registerSchema.validate(req.body);
    if (error) {
      return next(error);
      // throw error
    }

    //check if the user is in the data base alreary
    try {
      const exist = await User.exists({ email: req.body.email });
      if (exist) {
        return next(
          CustomErrorHandler.alreadyExist("This email Already taken")
        );
      }
    } catch (err) {
      return next(err);
    }

    const { name, email, password } = req.body;
    //hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    //prepare the model
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    let access_token;
    let refresh_token;
    try {
      const result = await user.save();

      //token generate
      access_token = JwtService.sign({
        _id: result._id,
        role: result.role,
      });

      //refresh token
      refresh_token = JwtService.sign(
        {
          _id: result._id,
          role: result.role,
        },
        "1y",
        REFRESH_SECRET
      );

      //database whitelist

      await RefreshToken.create({ token: refresh_token });
      res.json({ access_token, refresh_token });
    } catch (error) {
      return next(error);
    }

    res.json({ access_token, refresh_token });
  },
};

export default registerController;
