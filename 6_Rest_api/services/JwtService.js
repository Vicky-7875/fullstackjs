import { JWT_SECRET } from "../config";
import jwt from "jsonwebtoken";

class JwtService {
  static sign(payload, expiry = "60s", secret = JWT_SECRET) {
    ///payload  what to store
    return jwt.sign(payload, secret, { expiresIn: expiry });
  }
}

export default JwtService;
