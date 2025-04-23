import { API_URLS } from "../../config/ApiUrls";
import api from "../../config/Axios";

export const getUserDetails = async (id) => {
    try {
      const response = await api.get(`${API_URLS.userInfo}/${id}`);
      return response.data;
    } catch (error) {
      console.error("❌ Failed to fetch user details:", error);
      throw error;
    }
  };