import axios from 'axios';

export const login = async (username, password) => {
  try {
    const response = await axios.post('/accounts/login/', { username, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signup = async (username, password) => {
  try {
    const response = await axios.post('/accounts/signup/', { username, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    await axios.post('/accounts/logout/');
  } catch (error) {
    throw error;
  }
};