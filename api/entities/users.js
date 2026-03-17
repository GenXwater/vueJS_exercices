import { readFile, writeFile } from 'fs/promises';

const path = './db/users.json';

export async function getUsers(hidePass = false) {
    const jsonData = await readFile(path, 'utf8');
    if (hidePass) {
        const users = JSON.parse(jsonData)
        users.forEach(user => user.pass = "******");
        return users;
        // return JSON.parse(jsonData).map(obj => [{ ...obj, pass: "******" }])
    } else {
        return JSON.parse(jsonData);
    }
}

export async function addUser({email, pass}) {
    const newUser = 
    { email, pass, isAdmin: false, id: crypto.randomUUID() }
    const users = [newUser, ...await getUsers()];
    await writeFile(path, JSON.stringify(users));
    return newUser;
}

export async function deleteUserById(id) {
    const users = await getUsers();
    await writeFile(path, JSON.stringify(users.filter(u => u.id !== id)))
    const newUsersList = await getUsers(true);
    return newUsersList;
}

export async function checkUser(email, pass) {
    const usersList = await getUsers();
    const fondUser = usersList.filter(u => u.email === email && u.pass === pass);
    return fondUser;
}