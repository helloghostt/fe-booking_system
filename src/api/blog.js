import axios from 'axios';

export const getPosts = async () => {
  try {
    const response = await axios.get('/blog/');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createPost = async (title, content, image) => {
  try {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', image);

    const response = await axios.post('/blog/create/', formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatePost = async (postId, title, content) => {
  try {
    const response = await axios.put(`/blog/${postId}/edit/`, { title, content });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (postId) => {
  try {
    await axios.delete(`/blog/${postId}/delete/`);
  } catch (error) {
    throw error;
  }
};

export const createComment = async (postId, content) => {
  try {
    const response = await axios.post(`/blog/${postId}/comments/`, { content });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateComment = async (postId, commentId, content) => {
  try {
    const response = await axios.put(`/blog/${postId}/comments/${commentId}/`, { content });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteComment = async (postId, commentId) => {
  try {
    await axios.delete(`/blog/${postId}/comments/${commentId}/`);
  } catch (error) {
    throw error;
  }
};