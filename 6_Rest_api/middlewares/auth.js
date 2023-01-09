import user from "../models/user";
import { CustomErrorHandler, JwtService } from "../services";

const auth = async (req, res, next) => {
  let authHeader = req.headers.authorization;
  if (!auth) {
    return next(CustomErrorHandler.unAuthorized());
  }

  try {
    const token = authHeader.split(" ")[1];
    const { _id, role } = await JwtService.verify(token);
    const user = { _id, role };
    req.user = user;
    next();
  } catch (error) {
    return next(CustomErrorHandler.unAuthorized());
  }
};

export default auth;
