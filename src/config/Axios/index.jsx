import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Set your base URL once
  withCredentials: true, // Only needed if you're using cookies/sessions
});

// Attach Authorization token if present
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle global response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn('Unauthorized, redirecting to login...');
      // Optionally redirect to login page
      window.location.href = '/login'; // Adjust this as per your routing setup
    }
    
    // Log other errors (e.g., 500, 404) for debugging
    if (error.response) {
      console.error(`API error: ${error.response.status} - ${error.response.data}`);
    } else {
      console.error("API request failed:", error.message);
    }

    return Promise.reject(error);
  }
);

export default api;
