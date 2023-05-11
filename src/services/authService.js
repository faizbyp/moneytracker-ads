/* eslint-disable no-return-await */
import { accessToken } from '../utils/constant';
import { setCookies } from '../utils/cookiesManager';
import API from './api';

export async function login(data) {
  const response = await API.post('/login', data);
  const token = response.access_token;
  setCookies(accessToken, token);
  return token;
}

export async function register(data) {
  return await API.post('/register', data);
}
