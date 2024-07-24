import React from "react";
import { RiFacebookBoxFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { LuInstagram } from "react-icons/lu";
import { SiYoutube } from "react-icons/si";

function Footer() {
  return (
    <div className="footer-main">
      <div className="footer-component">
        <p>
          <RiFacebookBoxFill />
        </p>
        <p>
          <BsTwitterX />
        </p>
        <p>
          <LuInstagram />
        </p>
        <p>
          <SiYoutube />
        </p>
      </div>
      <div className="copyright">
        <p>All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
