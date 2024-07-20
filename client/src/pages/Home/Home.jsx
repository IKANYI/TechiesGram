import React from "react";
import "../../assets/globals.css";
import heroimg from "../../assets/home1.jpg";

function Home() {
  return (
    <div className="home-main">
      <div className="home-hero">
        <img src={heroimg} alt="hero image" />
      </div>
    </div>
  );
}

export default Home;
