import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createNotice } from '../../api/notices';

const NoticeForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createNotice(title, content);
      navigate('/notices');
    } catch (error) {
      console.error('Failed to create notice:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Create Notice</button>
    </form>
  );
};

export default NoticeForm;