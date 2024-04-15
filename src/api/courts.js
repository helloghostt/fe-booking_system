import axios from 'axios';

export const getCourts = async () => {
  try {
    const response = await axios.get('/courts/');
    return response.data;
  } catch (error) {
    throw error;
  }
};