import axios from 'axios';

const api = axios.create({
  baseURL: 'https://roxilerbackend22.onrender.com/api',
});

export const getTransactions = (month, page = 1, search = "") =>
  api.get(`/transactions`, { params: { month, page, search } });

export const getStatistics = (month) => api.get(`/statistics`, { params: { month } });

export const getPriceRange = (month) => api.get(`/bar-chart`, { params: { month } });

export const getCategoryStats = (month) => api.get(`/pie-chart`, { params: { month } });

export const getCombinedData = (month) => api.get(`/combined`, { params: { month } });

export default api;
