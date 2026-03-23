import axiosClient from "./axios-client";

const getMedia = () => axiosClient.get("/media");
const createMedia = (data) => axiosClient.post("/media", data);
const updateMedia = (id, data) => axiosClient.put(`/media/${id}`, data);
const deleteMedia = (id) => axiosClient.delete(`/media/${id}`);

export default {
  getMedia,
  createMedia,
  updateMedia,
  deleteMedia
};