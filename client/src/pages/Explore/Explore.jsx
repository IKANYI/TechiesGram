import React, { useEffect, useState } from "react";
import proimg from "../../assets/profile.jpg";
import blogimg from "../../assets/blogimg.jpg";

const Member = ({
  postMedia,
  postText,
  firstName,
  lastName,
  email,
  phoneNumber,
  avatarUrl,
}) => {
  return (
    <div className="explore-main">
      <span className="member__icon">
        <img src={avatarUrl || proimg} alt="profile" />
      </span>
      <div className="member__detail">
        <p className="member__detailmember__name">
          {firstName} {lastName}
        </p>
        <p className="member__detailmember__iconmember__email">{email}</p>
        <p className="member__detailmember__detail_with-icon_member_phone">
          {phoneNumber}
        </p>
        <p className="member_text">{postText}</p>
        <p className="member_media">{postMedia}</p>
        <button className="member_action_member__action_delete">
          delete member
        </button>
      </div>
    </div>
  );
};

function Explore() {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    try {
      const response = await fetch(`http://localhost:3000/user/all`);
      const data = await response.json();
      return data.users || []; // Ensure we return an array
    } catch (e) {
      throw new Error(e.message);
    }
  };

  const fetchPosts = async () => {
    try {
      const response = await fetch(`http://localhost:3000/posts`);
      const data = await response.json();
      return data.posts || []; // Ensure we return an array
    } catch (e) {
      throw new Error(e.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const users = await fetchUser();
        const posts = await fetchPosts();

        // Assuming users and posts arrays have matching ids or similar keys for mapping
        const combinedData = users.map((user) => {
          const post = posts.find((post) => post.userId === user.id) || {};
          return {
            ...user,
            postText: post.text,
            postMedia: post.media,
          };
        });

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
      <h2>
        <title>Welcome to our posts</title>
      </h2>
      <div className="member__page_container">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {members.length > 0 ? (
          members.map((currentMember) => (
            <Member
              key={currentMember.id}
              firstName={currentMember.firstName}
              lastName={currentMember.lastName}
              email={currentMember.email}
              phoneNumber={currentMember.phoneNumber}
              postMedia={currentMember.postMedia || blogimg} // Default image if postMedia is not available
              postText={currentMember.postText}
              avatarUrl={currentMember.avatarUrl || proimg} // Default profile image if avatarUrl is not available
            />
          ))
        ) : (
          <p>No members found.</p>
        )}
      </div>
    </div>
  );
}

export default Explore;
