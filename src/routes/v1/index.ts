import { Router } from "express";
import test from "./test";
const v1Router = Router();

v1Router.use("/business", test);

export default v1Router;
