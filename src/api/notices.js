import axios from 'axios';

export const getNotices = async () => {
  try {
    const response = await axios.get('/notices/');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createNotice = async (title, content) => {
  try {
    const response = await axios.post('/notices/create/', { title, content });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateNotice = async (noticeId, title, content) => {
  try {
    const response = await axios.put(`/notices/${noticeId}/edit/`, { title, content });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteNotice = async (noticeId) => {
  try {
    await axios.delete(`/notices/${noticeId}/delete/`);
  } catch (error) {
    throw error;
  }
};