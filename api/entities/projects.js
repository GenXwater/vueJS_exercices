import { readFile, writeFile } from 'fs/promises';

const path = './db/project.json';

export async function getProjects() {
    const jsonData = await readFile(path, 'utf8')
    return JSON.parse(jsonData)
}

export async function addProject(p) {
    const newProject = { id: crypto.randomUUID(), ...p };
    const projects = [newProject, ...await getProjects()];
    await writeFile(path, JSON.stringify(projects));
    return newProject
}

export async function deleteProjectById(id) {
    const projectsList = await getProjects();
    await writeFile(path, JSON.stringify(projectsList.filter(p => p.id !== id)));
    const newProjectsList = await getProjects();
    return newProjectsList
}
