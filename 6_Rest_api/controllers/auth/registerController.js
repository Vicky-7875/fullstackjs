import Joi from "joi";
import { CustomErrorHandler, JwtService } from "../../services";
import { User } from "../../models";
import bcrypt from "bcrypt";

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

    console.log(req.body);
    const { error } = registerSchema.validate(req.body);
    if (error) {
      return next(error);
      // throw error
    }

    //check if the user is in the data base alreary
    try {
      const exist = await User.exists({ email: req.body.emaii });
      if (exist) {
        return next(
          CustomErrorHandler.alreadyExist("This email Already taken")
        );
      }
    } catch (err) {
      return next(err);
    }

    const { name, email,password } = req.body;
    //hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    //prepare the model
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    let access_token;
    try {
      const result = await user.save();
      console.log(result);

      //token
      access_token = JwtService.sign({
        _id: result._id,
        role: result.role,
      });
    } catch (error) {
      return next(error);
    }

    res.json({ access_token });
  },
};

export default registerController;
