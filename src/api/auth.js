import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

// 인증 관련 API 호출 함수
export const login = async (username, password) => {
  const response = await axios.post(`${API_BASE_URL}/accounts/login/`, {
    username,
    password,
  });
  return response.data;
    // 로그인 API 호출
  };
  
  export const signup = async (username, password) => {
    const response = await axios.post(`${API_BASE_URL}/accounts/signup/`, {
      username,
      password,
    });
    return response.data;
  };
    // 회원가입 API 호출
  