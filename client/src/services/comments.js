import api from "./apiConfig";

export const getAllComments = async () => {
  const res = await api.get("/comments");
  return res.data;
};

export const getOneComment = async (id) => {
  const res = await api.get(`/comments/${id}`);
  return res.data;
};

export const createComment = async (comment) => {
  try {
    const res = await api.post("/contacts", comment);
    return res.data;
  } catch {
    return false;
  }
};

export const deleteComment = async (id) => {
  await api.delete(`/contacts/${id}`);
};
