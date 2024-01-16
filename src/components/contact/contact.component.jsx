import React from "react";

import "./contact.styles.scss";

import { Link } from "react-scroll";

const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      <p className="contact-subtitle">Get in touch</p>
      <p className="contact-header">Contact me</p>
      <p className="contact-text1">
        Passionate about web development and committed to continuous learning, I
        am eager to explore new opportunities and contribute to innovative
        projects. Let's connect and create something extraordinary together.
      </p>
      <div className="contact-info">
        <p className="contact-text2">
          <span className="label">Email:</span>ojiemekemearmstrong@gmail.com
        </p>
        <p className="contact-text2">
          <span className="label">LinkedIn:</span>
          <a
            href="https://www.linkedin.com/in/ojiemekeme-armstrong-obozokhae/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/ojiemekeme-armstrong-obozokhae
          </a>
        </p>
        <p className="contact-text2">
          <span className="label">Github:</span>
          <a
            href="https://github.com/ojieprincewill"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/ojieprincewill
          </a>
        </p>
      </div>
      <div className="footer-section">
        <div className="footer-links">
          <Link to="about" smooth={true} duration={500} className="footer-link">
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="footer-link"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="footer-link"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="footer-link"
          >
            Contact
          </Link>
        </div>
        <p className="footer-text">
          <span>&copy; 2024</span> Ojiemekeme Princewill Armstrong Obozokhae.
          All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Contact;
