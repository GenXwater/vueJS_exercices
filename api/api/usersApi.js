import { json } from "stream/consumers";
import { addUser, getUsers, deleteUserById, checkUser } from "../entities/users.js";

export async function readUsers() {
    return await getUsers(true);
}

export async function createUser(req) {
    const userToAdd = await json(req);
    const newUser = await addUser(userToAdd);
    return newUser;
}

export async function deleteUser (id) {
    const deletedUser = await deleteUserById(id);
    return deletedUser;
}

export async function checkUserLogin(email, pass) {
    const user = await checkUser(email, pass);
    return user;
}