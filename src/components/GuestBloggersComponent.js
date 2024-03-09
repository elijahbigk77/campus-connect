// GuestBloggersComponent.js
import React, { useState } from 'react';
import './GuestBloggersComponent.css';

const GuestBloggersComponent = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    {
      id: 1,
      title: 'The Importance of Networking in College',
      author: 'Jane Smith',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan tempus metus, id cursus urna. Donec eget congue nulla.'
    },
    {
      id: 2,
      title: 'Tips for Landing Your Dream Internship',
      author: 'John Doe',
      content: 'Nulla facilisi. Donec eget lectus non felis condimentum lobortis. Phasellus at vestibulum leo. Fusce laoreet dapibus mauris, vel placerat felis pulvinar nec.'
    },
    // Add more blog posts as needed
  ];

  const handleClick = (post) => {
    setSelectedPost(post);
  };

  return (
    <div className="guest-bloggers-container">
      <h2>Guest Bloggers and Alumni Stories</h2>
      <div className="blog-posts">
        {posts.map(post => (
          <div key={post.id} className="blog-post" onClick={() => handleClick(post)}>
            <h3>{post.title}</h3>
            <p>By {post.author}</p>
          </div>
        ))}
      </div>
      {selectedPost && (
        <div className="selected-post">
          <h3>{selectedPost.title}</h3>
          <p>By {selectedPost.author}</p>
          <p>{selectedPost.content}</p>
        </div>
      )}
    </div>
  );
};

export default GuestBloggersComponent;
