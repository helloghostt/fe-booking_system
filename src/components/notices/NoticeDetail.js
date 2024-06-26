import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getNotice } from '../../api/notices';

const NoticeDetail = () => {
  const { id } = useParams();
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    fetchNotice();
  }, []);

  const fetchNotice = async () => {
    try {
      const data = await getNotice(id);
      setNotice(data);
    } catch (error) {
      console.error('Failed to fetch notice:', error);
    }
  };

  if (!notice) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{notice.title}</h2>
      <p>{notice.content}</p>
      <p>Created At: {notice.created_at}</p>
    </div>
  );
};

export default NoticeDetail;