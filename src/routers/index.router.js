import { Router } from "express";
import {
  index,
  getUsers,
  postUsers,
  patchUsers,
  deleteUsers,
  register,
  login,
  error,
} from "../controllers/index.controller.js";

const indexRouter = Router();

// http requests
indexRouter.get("/", index);
indexRouter.get("/register", register);
indexRouter.get("/login", login);
indexRouter.get("/users", getUsers);
indexRouter.get("/error", error);

indexRouter.post("/users", postUsers);

indexRouter.patch("/users", patchUsers);

indexRouter.delete("/users", deleteUsers);

export default indexRouter;
