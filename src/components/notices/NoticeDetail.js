
import React from 'react';

const NoticeDetail = ({ notice }) => {
  return (
    <div>
      <h2>{notice.title}</h2>
      <p>{notice.content}</p>
      <p>작성일: {notice.createdAt}</p>
    </div>
  );
};

export default NoticeDetail;