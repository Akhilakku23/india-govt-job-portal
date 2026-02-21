import API from "./api";

export const addBookmark = (data)=>API.post("/bookmarks", data);

export const getBookmarks = (userId)=>
    API.get(`/bookmarks/user/${userId}`);

export const deleteBookmark = (id)=>
    API.delete(`/bookmarks/${id}`);