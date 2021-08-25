import api from "./apiConfig.js";

export const getProjects = async () => {
  try {
    const resp = await api.get("/projects");
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const getProject = async (id) => {
  try {
    const resp = await api.get(`/projects/${id}`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const createProject = async (project) => {
  try {
    const response = await api.post("/projects", project);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const editProject = async (id, project) => {
  try {
    const response = await api.put(`/projects/${id}`, project);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProject = async (id) => {
  try {
    const response = await api.delete(`/projects/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
