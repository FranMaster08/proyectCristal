import { userService } from "../services/index.js";

 const getUsers = async (req, res, next) => {
  try {
    const data = await userService.getAllUsers();
    res.status(200).json({ ...data });
  } catch (error) {
    next(error);
  }
};


export default { getUsers}