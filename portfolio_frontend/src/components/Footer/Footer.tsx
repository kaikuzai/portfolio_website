import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">
        © {currentYear} Dylan Okyere. All rights reserved.
      </p>
      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/in/dylanokyere/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/LinkedIn.svg" alt="LinkedIn" className="footer-icon" />
        </a>
        <a
          href="https://github.com/kaikuzai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/Github.svg" alt="Github" className="footer-icon" />
        </a>
        <a href="mailto:dylan.okyere@gmail.com">
          <img src="/Email.svg" alt="Email" className="footer-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
