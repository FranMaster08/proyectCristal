import { Router } from "express";
const healt = Router();

healt.get("/", (req, res, next) => {
  try {
    res.json({
      method: "GET",
      message: "ok",
    });
  } catch (error) {
    next(error, req, res);
  }
});

export default healt ;
