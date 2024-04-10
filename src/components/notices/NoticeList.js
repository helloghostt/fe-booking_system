
import React from 'react';

const NoticeList = ({ notices }) => {
  return (
    <div>
      <h2>공지사항</h2>
      <ul>
        {notices.map((notice) => (
          <li key={notice.id}>{notice.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default NoticeList;