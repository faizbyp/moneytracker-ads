import API from './api';

export const getTotal = async (id) => API.get(`/total-uang/${id}`);
