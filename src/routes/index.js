import healt from "./healt.routes.js";
import loginRoutes from "./login.routes.js";
import { Router } from "express";
const app = Router();
app.use("/login", loginRoutes);
app.use("/healt", healt);
export default { app };
