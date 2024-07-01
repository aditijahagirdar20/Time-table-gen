import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media">
          <a
            href="https://www.facebook.com/JSSSTUNIV?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon className="icon" />
          </a>
          <a
            href="https://www.instagram.com/jssstunivofficial/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="icon" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon className="icon" />
          </a>
          <a
            href="https://sjce.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LanguageIcon className="icon" />
          </a>
        </div>
        <div className="rights-reserved">
          <p>© 2024 Time Table. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
