import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../utils/NavBar.js'

const MainPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts'); // Assuming your API endpoint for fetching posts is '/api/posts'
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log('Error fetching posts:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Yume - Social Media</h1>
      <h2>Your Posts:</h2>
      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default MainPage;
