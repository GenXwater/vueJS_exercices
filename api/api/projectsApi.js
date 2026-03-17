import { json } from "stream/consumers";
import { addProject, getProjects, deleteProjectById } from "../entities/projects.js";

export async function readProjects () {
    return await getProjects(true);
}

export async function createProject (req) {
    const projectToAdd = await json(req);
    const newProject = await addProject(projectToAdd);
    return newProject;
}

export async function deleteProject (id) {
    const deletedUser = await deleteProjectById(id);
    return deletedUser;
}
