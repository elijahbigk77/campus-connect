// BlogPostListComponent.js
import React, { useState } from 'react';
import './BlogPostListComponent.css';

const BlogPostListComponent = () => {
  const [inputText, setInputText] = useState('');
  const [blogPosts, setBlogPosts] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null); // Track the index of the post being edited
  const [editedText, setEditedText] = useState(''); // Track the edited text

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      const timestamp = new Date().toLocaleString(); // Get current date and time
      setBlogPosts([{ text: inputText, timestamp }, ...blogPosts]); // Add new post with timestamp
      setInputText('');
    }
  };

  const handleEdit = (index, text) => {
    setEditingIndex(index); // Set editingIndex to the index of the post being edited
    setEditedText(text); // Set editedText to the current post text
  };

  const handleSave = (index) => {
    const updatedPosts = [...blogPosts];
    updatedPosts[index].text = editedText;
    setBlogPosts(updatedPosts);
    setEditingIndex(null); // Reset editingIndex
    setEditedText(''); // Reset editedText
  };

  const handleDelete = (index) => {
    const updatedPosts = [...blogPosts];
    updatedPosts.splice(index, 1);
    setBlogPosts(updatedPosts);
    setEditingIndex(null); // Reset editingIndex
    setEditedText(''); // Reset editedText
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
          <li key={index}>
            {editingIndex === index ? (
              <React.Fragment>
                <textarea
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
                <button onClick={() => handleSave(index)}>Save</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <p>{post.text}</p>
                <span className="timestamp">{post.timestamp}</span>
                <button className="edit-button" onClick={() => handleEdit(index, post.text)}>Edit</button>
              </React.Fragment>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPostListComponent;
