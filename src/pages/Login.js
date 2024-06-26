// import React, { useState } from 'react';
// import { login } from '../api/auth';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = await login(username, password);
//       console.log(data); // 로그인 성공 시 응답 데이터 출력
//     } catch (error) {
//       console.error(error); // 로그인 실패 시 에러 출력
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;

import React from 'react';
import LoginForm from '../components/accounts/LoginForm';

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
};

export default Login;