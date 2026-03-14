import { readFile, writeFile } from 'fs/promises';

const patch = './db/users.json';

export async function getUsers(hidePass = false) {
    const jsonData = await readFile(path, 'utf8');
    if (hidePass) {
        return JSON.parse(jsonData).map(obj => [{
            ...obj, pass: "******"
        }])
    } else {
        return JSON.parse(jsonData);
    }
} 