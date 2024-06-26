import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getNotices } from '../../api/notices';

const NoticeList = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const data = await getNotices();
      setNotices(data);
    } catch (error) {
      console.error('Failed to fetch notices:', error);
    }
  };

  return (
    <div>
      <h2>Notices</h2>
      {notices.map((notice) => (
        <div key={notice.id}>
          <h3>
            <Link to={`/notices/${notice.id}`}>{notice.title}</Link>
          </h3>
          <p>Created At: {notice.created_at}</p>
        </div>
      ))}
    </div>
  );
};

export default NoticeList;