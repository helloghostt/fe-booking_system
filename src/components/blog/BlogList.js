import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../../api/blog';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const data = await getPosts();
      setPosts(data);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    }
  };

  return (
    <div>
      <h2>Blog Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </h3>
          <p>{post.content}</p>
          <p>Author: {post.author}</p>
          <p>Created At: {post.created_at}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;