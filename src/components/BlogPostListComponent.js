// BlogPostListComponent.js
import React, { useState } from 'react';
import './BlogPostListComponent.css';

const BlogPostListComponent = () => {
  const [inputText, setInputText] = useState('');
  const [blogPosts, setBlogPosts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      const timestamp = new Date().toLocaleString(); // Get current date and time
      setBlogPosts([{ text: inputText, timestamp }, ...blogPosts]); // Add new post with timestamp
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
        {blogPosts.slice(0).reverse().map((post, index) => ( // Reverse the order of blogPosts
          <li key={index}>
            <p>{post.text}</p>
            <span className="timestamp">{post.timestamp}</span> {/* Display timestamp */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPostListComponent;
