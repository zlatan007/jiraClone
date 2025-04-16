import { API_URLS } from "../../config/ApiUrls";
import api from "../../config/Axios";

export const signUp = async (data) => {
  try {
    const response = await api.post('/user/signup', data);
    return response.data;
  } catch (error) {
    const message =
      error?.response?.data?.message || 'Signup failed. Please try again.';
    throw new Error(message);
  }
};