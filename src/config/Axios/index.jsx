import axios from 'axios';

const baseURLs = {
  auth: import.meta.env.VITE_AUTH_BASE_URL,
  user: import.meta.env.VITE_USER_BASE_URL,
  task: import.meta.env.VITE_TASK_BASE_URL,
};

const api = axios.create({
  baseURL: baseURLs.user,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    const service = config.meta?.service;
    if (service && baseURLs[service]) {
      config.baseURL = baseURLs[service];
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn('Unauthorized, redirecting to login...');
    }
    return Promise.reject(error);
  }
);

export default api;
