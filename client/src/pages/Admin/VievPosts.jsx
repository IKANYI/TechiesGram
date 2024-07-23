import React from "react";
import { useEffect, useState } from "react";
import "./admin.css";

function VievPosts() {
  const [posts, setPosts] = useState([]);
  const handleViewPosts = async (req, res) => {
    try {
      const response = await fetch(`http://localhost:3000/posts`);
      const data = await response.json();
      console.log(data);
      setPosts(data);
    } catch (e) {
      res.status(500).json({ success: false, message: e.message });
    }
  };
  useEffect(() => {
    handleViewPosts();
  }, []);
  return (
    <div className="viewPosts-main">
      <h3>Hello there</h3>
      {posts.map((post) => (
        <div className="posts-container">
          <h3>{post.postText} </h3>
          <img src={post.postMedia} alt="" />
        </div>
      ))}
    </div>
  );
}

export default VievPosts;
