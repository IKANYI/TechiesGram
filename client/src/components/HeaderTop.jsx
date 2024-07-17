import { VscWorkspaceTrusted } from "react-icons/vsc";
import React from "react";
import "./head.css";
const SocialInfo = ({ label, icon }) => {
  return (
    <div className="header-socials">
      <div className="header-icon-wrapper">{icon}</div>
      {label}
    </div>
  );
};

function HeaderTop() {
  return (
    <div className="header-top">
      <div className="header-logo">TechiesGram</div>
      <div className="header-socials-container">
        <SocialInfo icon={<VscWorkspaceTrusted />} label="Truth" />
      </div>
    </div>
  );
}

export default HeaderTop;
