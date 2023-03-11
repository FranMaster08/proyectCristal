import { connection } from "../config/credentials.js";
import { v4 as uuid } from "uuid";

export class User {
  constructor(
    id,
    name,
    email,
    user_name,
    password,
    address,
    telephone,
    created_at = null,
    updated_at = null
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.user_name = user_name;
    this.password = password;
    this.address = address;
    this.telephone = telephone;
    this.created_at = !created_at ? null : created_at;
    this.updated_at = !updated_at ? null : updated_at;
  }
}

export const getUsers = async () => {
  try {
    const [rows] = await connection.query(
      "SELECT * FROM user order by created_at desc"
    );
    if (rows.length === 0) throw new Error(`Not Found`)
    return rows.map(
      (row = User) =>
        new User(
          row.id,
          row.name,
          row.mail,
          row.user_name,
          row.password,
          row.address,
          row.telephone,
          row.created_at,
          row.updated_at
        )
    );
  } catch (error) {
    console.error(`sql`, error.message);
    throw error;
  } finally {
    await connection.end();
  }
};

export const getUserById = async (id) => {
  try {
    const [row] = await connection.query(
      `SELECT * FROM cristal.user WHERE id = '${id}';`
    );
    return row.map(
      (row = User) =>
        new User(
          row.id,
          row.name,
          row.mail,
          row.user_name,
          row.password,
          row.address,
          row.telephone,
          row.created_at,
          row.updated_at
        )
    )[0];
  } catch (error) {
    console.error(`sql`, error.message);
    throw error;
  } finally {
    await connection.end();
  }
};

export const insertUser = async (user = User) => {
  try {
    const result = await connection.query(
      `INSERT INTO cristal.user (id, user_name, password, name, address, mail, telephone) VALUES ('${uuid()}', '${
        user.user_name
      }', '${user.password}', '${user.name}', '${user.address}', '${
        user.email
      }', '${user.telephone}')`
    );
    await connection.end();
    return result;
  } catch (error) {
    console.error(`sql`, error.message);
    throw error;
  }
};

export const updateUser = async (user = User, id) => {
  try {
    const result = await connection.query(
      `UPDATE cristal.user SET user_name = '${user.user_name}', password = '${user.password}', name = '${user.name}', address = '${user.address}', mail = '${user.email}', telephone = '${user.telephone}' WHERE (id = '${id}');`
    );
    await connection.end();
    return result;
  } catch (error) {
    console.error(`sql`, error.message);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const result = await connection.query(
      `DELETE FROM cristal.user WHERE (id = '${id}'); `
    );
    await connection.end();
    return result;
  } catch (error) {
    console.error(`sql`, error.message);
    throw error;
  }
};

export default {
  User,
  getUsers,
  deleteUser,
  updateUser,
  insertUser,
  getUserById,
};
