
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/login">로그인</Link>
        </li>
        <li>
          <Link to="/signup">회원가입</Link>
        </li>
        <li>
          <Link to="/bookings">예약하기</Link>
        </li>
        <li>
          <Link to="/notices">공지사항</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;