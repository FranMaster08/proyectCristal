import { Router } from "express";
import controller from "../controller/index.js";
const loginRoutes = Router();

loginRoutes.get("/", controller.loginController.getUsers);

export default loginRoutes ;
