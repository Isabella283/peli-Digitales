import axiosClient from "./axios-client";

const getTypes = () => axiosClient.get("/types");
const createType = (data) => axiosClient.post("/types", data);
const updateType = (id, data) => axiosClient.put(`/types/${id}`, data);

export default {
  getTypes,
  createType,
  updateType
};