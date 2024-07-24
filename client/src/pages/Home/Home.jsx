import React from "react";
import "../../assets/globals.css";
import heroimg from "../../assets/home1.jpg";

function Home() {
  return (
    <div className="home-main">
      <div className="home-hero">
        <h2>Your Gateway to Tech Excellence</h2>
        <h4>
          Explore insightful articles, in-depth reviews, and the latest trends
          in technology. Connect, learn, and grow with us.
        </h4>
        <p>
          Welcome to your ultimate destination for all things tech. At
          TechiesGram, we bring you the most insightful articles, comprehensive
          reviews, and up-to-the-minute trends in the technology world. Our
          platform is designed for tech enthusiasts, professionals, and curious
          minds alike. Whether you're looking to stay updated on the latest
          innovations, dive deep into detailed product analyses, or connect with
          a community of like-minded individuals, you've come to the right
          place. Join us on this journey of discovery, learning, and growth as
          we navigate the ever-evolving landscape of technology together.
        </p>
        <a href="/explore">Explore </a>
      </div>
    </div>
  );
}

export default Home;
