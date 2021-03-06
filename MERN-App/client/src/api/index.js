import axios from "axios";

const api = axios.create({
  //  baseURL: "http://localhost:3000/api"
  baseURL: "http://10.242.1.119:3000/api",
});

export const insertScore = (payload) => api.post(`/score`, payload);
export const getAllScores = () => api.get(`/scores`);
export const updateScoreById = (id, payload) => {
  api.put(`/score/${id}`, payload);
};
export const deleteScoreById = (id) => api.delete(`/score/${id}`);
export const getScoreById = (id) => api.get(`/score/${id}`);

const apis = {
  insertScore,
  getAllScores,
  updateScoreById,
  deleteScoreById,
  getScoreById,
};

export default apis;
