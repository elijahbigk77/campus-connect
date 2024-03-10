// BlogPostListComponent.js
import React, { useState } from 'react';
import './BlogPostListComponent.css';

const BlogPostListComponent = () => {
  const [inputText, setInputText] = useState('');
  const [blogPosts, setBlogPosts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      setBlogPosts([...blogPosts, inputText]);
      setInputText('');
    }
  };

  return (
    <div className="blog-post-list">
      <h2>Blog Posts</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What's on your mind today..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {blogPosts.map((post, index) => (
          <li key={index}>{post}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPostListComponent;
