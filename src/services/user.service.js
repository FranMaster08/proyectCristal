import { userEntity } from "../entities/index.js";

const { getUsers } = userEntity

getUsers().then(console.table)