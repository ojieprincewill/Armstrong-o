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
          year and a half, I've cultivated a rich set of skills. Confidently, I
          affrim proficiency in JavaScript, React,js and a proper understanding
          of full-stack development. However, I embrace a continual learning
          mindset, believing that the pursuit of knowledge never stops. Always
          seeking out new courses and staying abreast of industry trends, I find
          joy in the ongoing evolution of my skills.
        </p>
        <p className="skill-text">
          I understand that true success in web development, or any other
          venture in fact, extends beyond technical proficiency. It encompasses
          effective communication, collaboration within a team, and the
          adaptability to navigate the dynamic landscape of technology. My
          commitment to excellence lies not only in mastering the many
          intricacies of code but also in honing the soft skills that make a
          well-rounded developer.
        </p>
      </div>
    </div>
  );
};

export default Skills;
