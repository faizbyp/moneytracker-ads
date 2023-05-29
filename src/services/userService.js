import API from './api';

export const getBalance = async (id) => API.get(`/total-uang/${id}`);
export const getWalletBal = async (id) => API.get(`/total-uang/dompet/${id}`);
export const getEmoneyBal = async (id) => API.get(`/total-uang/e-money/${id}`);
export const getPendapatan = async (id) => API.get(`/v1/pendapatans/${id}`);
export const getPengeluaran = async (id) => API.get(`/v1/pengeluarans/${id}`);
export const getTagihan = async (id) => API.get(`/v1/tambah-tagihans/${id}`);

export const postPendapatan = async (data) => API.post('/v1/pendapatans/', data);
export const postPengeluaran = async (data) => API.post('/v1/pengeluarans/', data);
export const postTagihan = async (data) => API.post('v1/tambah-tagihans', data);

export const deletePendapatan = async (id) => API.delete(`v1/pendapatans/${id}`);
export const deletePengeluaran = async (id) => API.delete(`v1/pengeluarans/${id}`);
