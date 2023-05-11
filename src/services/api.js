import axios from 'axios';
import { API_URL, accessToken } from '../utils/constant';
import { deleteCookies, getCookies } from '../utils/cookiesManager';

// Config
const API = axios.create({
  baseURL: `${API_URL}/api/`,
  timeout: 0,
});

// Request
const onRequest = (config) => {
  // eslint-disable-next-line no-param-reassign
  if (getCookies(accessToken)) config.headers.Authorization = `Bearer ${getCookies(accessToken)}`;
  return config;
};
const onRequestError = (error) => Promise.reject(error);

// Response
const onResponse = (response) => response.data;
const onResponseError = (error) => {
  Promise.reject(error.response ? error.response.data : error);
  if (error.response.status === 401) {
    deleteCookies(accessToken);
  }
};

// Middleware
API.interceptors.request.use(onRequest, onRequestError);
API.interceptors.response.use(onResponse, onResponseError);

export default API;
