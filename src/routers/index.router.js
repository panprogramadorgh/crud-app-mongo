import { Router } from "express";
import {
  getUsers,
  postUsers,
  patchUsers,
  deleteUsers,
  indexPage,
} from "../controllers/index.controller.js";

const indexRouter = Router();

// http requests
indexRouter.get("/", indexPage);
indexRouter.get("/users", getUsers);

indexRouter.post("/users", postUsers);

indexRouter.patch("/users", patchUsers);

indexRouter.delete("/users", deleteUsers);

export default indexRouter;
