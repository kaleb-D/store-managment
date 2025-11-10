import express from "express";
import {
  checkAuth,
  getUsers,
  login,
  logout,
  signup,
} from "../controllers/auth.controller.js";
import { protectRout } from "../middleware/protector.middleware.js";

const route = express.Router();

route.post("/signup", signup);
route.post("/login", login);
route.post("/logout", logout);
route.get("/check", protectRout, checkAuth);
route.get("/", getUsers);

export default route;
