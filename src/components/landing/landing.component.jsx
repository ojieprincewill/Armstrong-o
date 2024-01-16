import React from "react";

import "./landing.styles.scss";

import { Link } from "react-scroll";

import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";

const Landing = () => {
  const imgUrl =
    "https://github.com/ojieprincewill/website-photos/blob/master/headshot%201.jpg?raw=true";
  return (
    <div className="landing-container">
      <div className="image-container">
        <img src={imgUrl} alt="armstrong" className="dev-image" />
      </div>
      <div className="profile-cont">
        <p className="greeting">Hello, I'm</p>
        <p className="name">Ojiemekeme Armstrong Obozokhae</p>
        <p className="job-title">Web Developer</p>
        <div className="profile-buttons">
          <button className="button1">Download CV</button>
          <button className="button2">
            <Link to="contact" smooth={true} duration={500}>
              Contact Me
            </Link>
          </button>
        </div>
        <div className="link-container">
          <a
            href="https://www.linkedin.com/in/ojiemekeme-armstrong-obozokhae/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin className="link" />
          </a>
          <a
            href="https://github.com/ojieprincewill"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub className="link" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
