import API from './api';

export const getBalance = async (id) => API.get(`/total-uang/${id}`);
export const getWalletBal = async (id) => API.get(`/total-uang/dompet/${id}`);
export const getEmoneyBal = async (id) => API.get(`/total-uang/e-money/${id}`);
export const getPendapatan = async (id) => API.get(`/v1/pendapatans/${id}`);
export const getPengeluaran = async (id) => API.get(`/v1/pengeluarans/${id}`);