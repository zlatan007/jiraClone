export const signup = async (data) => {
    try {
      const response = await api.post('/user/signup', data);
      return response.data;
    } catch (error) {
      const message =
        error?.response?.data?.message || 'Signup failed. Please try again.';
      throw new Error(message);
    }
  };