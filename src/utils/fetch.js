import axios from 'axios';
import { Message } from 'element-ui';
import storage from './storage';

const Axios = axios.create({
  baseURL: '/apis',
  timeout: 5000
});

Axios.interceptors.request.use(
  config => {
    const token = storage.getItem('token');
    if (token) {
      config.headers['X-Token'] = token;
    }
    return config;
  },
  error => Promise.reject(error)
);

Axios.interceptors.response.use(
  response => {
    const res = response.data;
    return res;
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    });
    Promise.reject(error);
  }
);

export default Axios;
