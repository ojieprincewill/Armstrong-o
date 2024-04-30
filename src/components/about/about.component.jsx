import React from "react";

import "./about.styles.scss";

import { SiBookstack } from "react-icons/si";
import { GiAchievement } from "react-icons/gi";

import { motion } from "framer-motion";

const About = () => {
  const imageUrl =
    "https://github.com/ojieprincewill/Porfolio-Data/blob/master/headshots/headshot%203%20(1).jpg?raw=true";
  return (
    <div id="about" className="about-section">
      <p className="about-subtitle">Get to know more</p>
      <p className="about-title">About me</p>

      <div className="about-grid">
        <div className="text-container">
          <div className="blips-flex">
            <div className="blip">
              <span className="blip-icon">
                <GiAchievement />
              </span>
              <span className="blip-title">Experience</span>
              <span className="blip-text">Front-end Development</span>
              <span className="blip-text">Back-end Development</span>
            </div>
            <div className="blip">
              <span className="blip-icon">
                <SiBookstack />
              </span>
              <span className="blip-title">Education</span>
              <span className="blip-text">B.sc Medical Biochemistry</span>
              <span className="blip-text">University of Benin, Nigeria</span>
            </div>
          </div>
          <div className="about-text-cont">
            <p className="about-text">
              My name is ojiemekeme princewill armstrong obozokhae, but you may
              simply call me princewill. A passionate React developer with a
              unique background in medical biochemistry. While my journey
              started in the field of medical sciences, my curiosity and love
              for technology led me to the exciting world of web development.
            </p>
            <p className="about-text">
              My coding adventure began as a self-taught enthusiast, initially
              exploring the intricacies of HTML, CSS, SASS and Bootstrap and
              eventually moving on to JavaScript, React.js, and full-stack
              development. Guided by mentorship, I've honed my skills in
              crafting innovative and user-centric solutions. What sets me apart
              is the blend of my medical expertise and technical prowess. This
              unique combination reflects my adaptability, strong
              problem-solving skills, and a commitment to continuous
              improvement.
            </p>
            <p className="about-text">
              Whether working independently or collaboratively, I bring a
              holistic approach to development. Thriving on challenges, I
              approach problem-solving with creativity, dedication, and an
              unwavering focus on delivering high-quality results.
            </p>
          </div>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="about-image-container"
        >
          <img src={imageUrl} alt="Armstrong" className="about-image" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
