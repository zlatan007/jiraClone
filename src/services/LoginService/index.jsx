import { API_URLS } from "../../config/ApiUrls";
import api from "../../config/Axios";

export const signUp = async (payload) => {
  try {
    const response = await api.post(API_URLS.signUp, payload, {
      meta: { service: 'auth' },
    });
    return response.data;
  } catch (error) {
    console.error('Sign up error:', error);
    throw error;
  }
};