import { Router } from "express";
import {
  register,
  users,
  deleteController,
  indexPage,
} from "../controllers/index.controller.js";

const indexRouter = Router();

// http requests
indexRouter.get("/", indexPage);
indexRouter.get("/users", users);

indexRouter.post("/register", register);

indexRouter.delete("/delete", deleteController);

export default indexRouter;
