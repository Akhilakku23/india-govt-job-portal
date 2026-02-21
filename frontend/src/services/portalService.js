import API from "./api";

export const getPortals = ()=>API.get("/portals");

export const getPortal = (id)=>API.get(`/portals/${id}`);

export const createPortal = (data)=>API.post("/portals", data);

export const deletePortal = (id)=>API.delete(`/portals/${id}`);