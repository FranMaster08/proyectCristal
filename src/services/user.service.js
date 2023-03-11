import { userEntity } from "../entities/index.js";

 const getAllUsers = async () => {
  return await userEntity.getUsers();
};

export default {
  getAllUsers
}
