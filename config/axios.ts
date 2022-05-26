import axios, {AxiosRequestConfig} from 'axios';
import store from '../app/store';

const instance = axios.create({
  baseURL: 'http://192.168.1.67:5000',
});

instance.interceptors.request.use(function (config: AxiosRequestConfig) {
  const token = store.getState().authReducer.token;
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
