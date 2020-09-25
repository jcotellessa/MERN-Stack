import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:3001/api"
  baseURL: "http://192.168.0.106:3001/api"
});

export const insertScore = payload => api.post(`/score`, payload);
export const getAllScores = () => api.get(`/scores`);
export const updateScoreById = (id, payload) => {
  api.put(`/score/${id}`, payload);
};
export const deleteScoreById = id => api.delete(`/score/${id}`);
export const getScoreById = id => api.get(`/score/${id}`);

const apis = {
  insertScore,
  getAllScores,
  updateScoreById,
  deleteScoreById,
  getScoreById
};

export default apis;
