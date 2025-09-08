import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Wiremite. All rights reserved.</p>
      <p>
        Built with ❤️ for the Wiremite Technical Interview.
      </p>
    </footer>
  );
};

export default Footer;
