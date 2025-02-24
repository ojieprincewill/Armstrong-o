import React from "react";

import "./projects.styles.scss";

import { motion } from "framer-motion";

import { PROJECT_DATA } from "../../data/projects-data";

const Projects = () => {
  const projectData = PROJECT_DATA;

  return (
    <div id="projects" className="projects-section">
      <p className="projects-subtitle">Browse my previous</p>
      <p className="projects-header">Projects</p>
      <div className="projects-cont">
        {projectData.map((project, index) => (
          <div
            key={index}
            className={`project-grid  ${index % 2 === 1 ? "reverse" : ""}`}
          >
            <div className="project-image-cont">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.imageUrl}
                    alt={`rep of ${project.title}`}
                    className="project-image"
                  />
                </a>
              </motion.div>
            </div>
            <div className="project-text-cont">
              <p className="project-title">{project.title}</p>
              <p className="project-description">{project.description1}</p>
              <p className="project-description">{project.description2}</p>
              <div className="link-buttons">
                <button className="git-btn">
                  <a
                    href={project.gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </button>
                <button className="live-btn">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live demo
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
