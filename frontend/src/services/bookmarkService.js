import API from "./api";

export const addBookmark = async (portalId) => {
  return await API.post("/bookmarks", { portalId });
};

export const getUserBookmarks = async (userId) => {
  return await API.get(`/bookmarks/user/${userId}`);
};

export const deleteBookmark = async (id) => {
  return await API.delete(`/bookmarks/${id}`);
};