
import React from 'react';

const Profile = ({ user }) => {
  return (
    <div>
      <h2>프로필</h2>
      <p>이메일: {user.email}</p>
      {/* 추가적인 프로필 정보 표시 */}
    </div>
  );
};

export default Profile;