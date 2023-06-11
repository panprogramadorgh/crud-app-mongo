import express from "express";
import morgan from "morgan";
import ejs from "ejs";
import "colors";
import { errorHandler, routeNotFound } from "./middlewares/utils.js";
import indexRouter from "./routers/index.router.js";

const app = express();
// app config
app.set("viewengine", ejs);
app.set("views", "./src/views");
// app middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("./public"));
app.use(indexRouter);
app.use(routeNotFound);
app.use(errorHandler);

export default app;
