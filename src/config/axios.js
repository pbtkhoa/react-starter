import axios from 'axios';
import { getToken } from 'utils/localStorage';

const headers = {
  'Content-Type': 'application/json'
};

let instance = axios.create({
  baseURL: process.env.APP_RESOURCE_URL,
  responseType: 'json',
  headers
});

// Interceptors for request
instance.interceptors.request.use(config => {
  let token = getToken();
  if (token) {
    config.headers = { Authorization: `Token ${token}` };
  }
  return config;
});

// Interceptors for response
instance.interceptors.response.use(
  resp => resp.data,
  err => {
    return Promise.reject(err);
  }
);

export default instance;
