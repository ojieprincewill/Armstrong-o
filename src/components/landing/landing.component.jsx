import React from "react";

import "./landing.styles.scss";

import { Link } from "react-scroll";
import { motion } from "framer-motion";

import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";

const Landing = () => {
  const imgUrl = "https://i.ibb.co/mF0wPcM9/headshot-1.jpg";

  const handleDownload = () => {
    const cvUrl =
      "https://github.com/ojieprincewill/Portfolio-Data/raw/refs/heads/master/Ojiemekeme%20Obozokhae%20-%20%20Front-end%20Web%20Developer%20Resume.docx";

    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Ojiemekeme_Armstrong_CV.docx";
    link.click();
  };

  return (
    <div className="landing-container">
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="image-container"
      >
        <img src={imgUrl} alt="armstrong" className="dev-image" />
      </motion.div>
      <div className="profile-cont">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="greeting"
        >
          Hello, I'm
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="name"
        >
          Ojiemekeme Armstrong Obozokhae
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="job-title"
        >
          Web Developer
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="profile-buttons"
        >
          <button className="button1" onClick={handleDownload}>
            Download CV
          </button>
          <button className="button2">
            <Link to="contact" smooth={true} duration={500}>
              Contact Me
            </Link>
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="link-container"
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
