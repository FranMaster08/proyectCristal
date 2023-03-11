import express from "express";
import { errorMiddleware } from "../middleware/index.js";
import { healt } from "../routes/index.js";
const app = express();

app.use(express.json);
app.use(express.urlencoded({ extended: false }));
app.use(healt);
app.use(errorMiddleware);

export default  app ;
