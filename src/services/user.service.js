import { userEntity } from "../entities/index.js";
import * as bcrypt from 'bcrypt'

const getAllUsers = async () => {
  return await userEntity.getUsers();
};


const createUser = async (user) => {
  const hashear = await bcrypt.genSalt(8);
  const pass = await bcrypt.hash(user.password, hashear);
  const userbd = { ...user, password: pass}
  return await userEntity.insertUser(userbd);
}

createUser(
  {
    name: 'Frans',
    email: 'francc@gmail.com',
    user_name: 'FranDJs',
    password: '1234',
    address: 'Calle Fran falsa',
    telephone: '12345'
  }
)
export default {
  getAllUsers,
  createUser
}
