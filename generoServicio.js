import axiosClient from "./axios-client";

const getGenres = () => axiosClient.get("/genres");

const createGenre = (data) => axiosClient.post("/genres", data);

const updateGenre = (id, data) => axiosClient.put(`/genres/${id}`, data);

const toggleGenreStatus = (id) =>
  axiosClient.patch(`/genres/${id}/toggle-status`);

export default {
  getGenres,
  createGenre,
  updateGenre,
  toggleGenreStatus
}; 