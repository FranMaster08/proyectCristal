import express from "express";
import { errorMiddleware } from "../middleware/index.js";
import rutas from "../routes/index.js";
const app = express();

app.use(express.json);
app.use(express.urlencoded({ extended: false }));
app.use('/',rutas);
app.use(errorMiddleware);

export default  app ;
