import API from './api';

export const getTotal = async (id) => API.get(`/total-uang/${id}`);
export const getAccount = async (account, id) => API.get(`/total-uang/${account}/${id}`);
