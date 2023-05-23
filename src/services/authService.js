/* eslint-disable no-return-await */
import { accessToken, userId, userName } from '../utils/constant';
import { setCookies } from '../utils/cookiesManager';
import API from './api';

export async function login(data) {
  const response = await API.post('/login', data);
  const token = response.access_token;
  setCookies(accessToken, token);
  setCookies(userId, response.user_id);
  setCookies(userName, response.username);
  return token;
}

export async function register(data) {
  const response = await API.post('/register', data);
  return response.created_at;
}
