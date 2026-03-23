import axiosClient from "./axios-client";

const getDirectors = () => axiosClient.get("/directors");
const createDirector = (data) => axiosClient.post("/directors", data);
const updateDirector = (id, data) =>
  axiosClient.put(`/directors/${id}`, data);
const toggleDirectorStatus = (id) =>
  axiosClient.patch(`/directors/${id}/toggle-status`);

export default {
  getDirectors,
  createDirector,
  updateDirector,
  toggleDirectorStatus
};