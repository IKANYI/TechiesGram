import React, { useEffect, useState } from "react";
import proimg from "../../assets/profile.jpg";
import "../../assets/globals.css";

const Member = ({
  avatarUrl,
  postMedia,
  postText,
  firstName,
  lastName,
  email,
}) => {
  return (
    <div className="explore-main">
      <div className="explore-container">
        <div className="user_detail">
          <span className="member__icon">
            <img src={avatarUrl || proimg} alt="profile" />
          </span>
          <h2 className="member__detail__name">
            {firstName} {lastName}
          </h2>
        </div>
        <div className="member__detail">
          <p className="member__text">{postText}</p>
          {postMedia && (
            <img src={postMedia} alt="blog" className="member__media" />
          )}
        </div>
      </div>
    </div>
  );
};

function Explore() {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`http://localhost:3000/posts`);
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (e) {
      console.error(e.message);
      throw new Error(e.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const posts = await fetchPosts();
        const postArray = Array.isArray(posts) ? posts : [posts];
        const combinedData = postArray.map((post) => ({
          id: post.id,
          postText: post.postText,
          postMedia: post.postMedia,
          firstName: post.user?.firstName || "Unknown",
          lastName: post.user?.lastName || "User",
          email: post.user?.email || "No email provided",
          avatarUrl: post.user?.avatarUrl || proimg,
        }));
        setMembers(combinedData);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="member__page">
      <h2>Welcome to our posts</h2>
      <div className="member__page_container">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {members.length > 0
          ? members.map((currentMember) => (
              <Member
                key={currentMember.id}
                firstName={currentMember.firstName}
                lastName={currentMember.lastName}
                email={currentMember.email}
                postMedia={currentMember.postMedia}
                postText={currentMember.postText}
                avatarUrl={currentMember.avatarUrl}
              />
            ))
          : !loading && <p>No members found.</p>}
      </div>
    </div>
  );
}

export default Explore;
