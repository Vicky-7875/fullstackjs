import express from "express";
import {
  registerController,
  loginController,
  userController,
  refreshController,
  productController,
} from "../controllers";

import { auth, admin } from "../middlewares";

const router = express.Router();

//user
router.post("/register", registerController.register);
router.post("/login", loginController.login);
router.get("/me", auth, userController.me);
router.post("/refresh", refreshController.refresh);
router.post("/logout", auth, loginController.logout);

//products
router.post("/products", [auth, admin], productController.store);
router.put("/products/:id", [auth, admin], productController.update);
router.delete("/products/:id", [auth, admin], productController.destroy);
router.get("/products", productController.index);
router.get("/products/:id", productController.show);
export default router;
