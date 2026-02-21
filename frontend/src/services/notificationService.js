import API from "./api";

export const getNotifications = ()=>API.get("/notifications");

export const createNotification = (data)=>
    API.post("/notifications", data);

export const deleteNotification = (id)=>
    API.delete(`/notifications/${id}`);