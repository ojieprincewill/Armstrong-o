import React from "react";

import "./skills.styles.scss";

import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoSass } from "react-icons/io";
import { BiLogoBootstrap } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";

import { IoLogoNodejs } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoGit } from "react-icons/bi";

const Skills = () => {
  const frontEndSkills = [
    { icon: <IoLogoHtml5 />, title: "html", experience: "experienced" },
    { icon: <IoLogoCss3 />, title: "css", experience: "intermediate" },
    { icon: <IoLogoSass />, title: "sass", experience: "intermediate" },
    {
      icon: <BiLogoBootstrap />,
      title: "bootstrap",
      experience: "intermediate",
    },
    {
      icon: <IoLogoJavascript />,
      title: "javascript",
      experience: "experienced",
    },
    { icon: <IoLogoReact />, title: "react", experience: "experienced" },
  ];

  const backEndSkills = [
    { icon: <IoLogoNodejs />, title: "Node JS", experience: "intermediate" },
    { icon: <SiExpress />, title: "Express JS", experience: "intermediate" },
    { icon: <SiMongodb />, title: "Mongo DB", experience: "basic" },
    { icon: <BiLogoGit />, title: "Git", experience: "intermediate" },
  ];
  return (
    <div id="skills" className="skill-section">
      <p className="skill-subtitle">Explore my</p>
      <p className="skill-header">Skillset</p>

      <div className="skill-grid">
        <div className="skill-blip">
          <p className="title">Front-end Development</p>
          <div className="blip-body">
            <div className="split1">
              {frontEndSkills.slice(0, 3).map((skill) => (
                <div className="split2">
                  <span className="icon">{skill.icon}</span>
                  <div>
                    <span className="skill-title">{skill.title}</span>
                    <span className="skill-experience">{skill.experience}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="split1">
              {frontEndSkills.slice(3, 6).map((skill) => (
                <div className="split2">
                  <span className="icon">{skill.icon}</span>
                  <div>
                    <span className="skill-title">{skill.title}</span>
                    <span className="skill-experience">{skill.experience}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="skill-blip">
          <p className="title">Back-end Development</p>
          <div className="blip-body">
            <div className="split1">
              {backEndSkills.slice(0, 2).map((skill) => (
                <div className="split2">
                  <span className="icon">{skill.icon}</span>
                  <div>
                    <span className="skill-title">{skill.title}</span>
                    <span className="skill-experience">{skill.experience}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="split1">
              {backEndSkills.slice(2, 4).map((skill) => (
                <div className="split2">
                  <span className="icon">{skill.icon}</span>
                  <div>
                    <span className="skill-title">{skill.title}</span>
                    <span className="skill-experience">{skill.experience}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="skill-text-cont">
        <p className="skill-text">
          Throughout my transformative journey in web development over the past
          year, I've absorbed a wealth of technical and soft skills. Mastery in
          React.js, proficiency in JavaScript, and a deep understanding of
          full-stack development are just a glimpse into my evolving expertise.
        </p>
        <p className="skill-text">
          Confidently, I affirm my proficiency in backend technologies,
          navigating their intricacies at an intermediate level. This journey
          isn't just about learning to code; it's about crafting solutions with
          a blend of creativity and technical finesse. I'm thrilled to apply
          these skills to create innovative and impactful projects.
        </p>
      </div>
    </div>
  );
};

export default Skills;
