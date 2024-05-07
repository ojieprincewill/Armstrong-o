import React from "react";

import "./projects.styles.scss";

import { motion } from "framer-motion";

const projectData = [
  {
    imageUrl:
      "https://github.com/ojieprincewill/Porfolio-Data/blob/master/revent%20snippets/revent%20snippet.jpg?raw=true",
    title: "revent",
    gitHub: "https://github.com/ojieprincewill/revent",
    liveDemo: "https://revent-pied.vercel.app/",
    description1:
      "Embarking on the journey of web development, I took on the challenge of recreating the Revent Digital website, a simple innovative website that resonated with my aspirations. This single-page website became a canvas for honing my skills in HTML, CSS, SASS, and gradually delving into the dynamics of JavaScript.",
    description2:
      "JavaScript played a pivotal role in orchestrating the subtle animations that bring the site to life. The project not only allowed me to master fundamental web technologies but also introduced me to the art of crafting seamless user experiences through thoughtful design and functionality.",
  },
  {
    imageUrl:
      "https://github.com/ojieprincewill/Porfolio-Data/blob/master/bistro%20snippets/bistro%20snippet%203.png?raw=true",
    title: "bistro",
    gitHub: "https://github.com/ojieprincewill/bistro",
    liveDemo: "https://bistro-eta.vercel.app/",
    description1:
      "Explore Bistro, a captivating restaurant website inspired by an online template and meticulously crafted to evoke the ambiance of fine dining. This multi-page project seamlessly blends creativity with technical prowess, featuring an artfully designed user interface.",
    description2:
      "As the developer behind Bistro, I adapted and refactored the template to create a unique digital experience. Incorporating animations, diverse page styles, and reusable components, I enhanced the user interface to elevate the overall presentation. This project not only honed my skills in HTML, CSS, and JavaScript but also provided valuable insights into state management, enriching the site with dynamic functionalities.",
  },
  {
    imageUrl:
      "https://github.com/ojieprincewill/Porfolio-Data/blob/master/baroque%20snippets/baroque%20snippet%201.jpg?raw=true",
    title: "baroque",
    gitHub: "https://github.com/ojieprincewill/Baroque-store",
    liveDemo: "https://baroque-store.vercel.app/",
    description1:
      "This is the big one. A small scale e-commerce web application that stands as a testament to my journey in web development. This ambitious project encapsulates the intricacies of a fully functional e-commerce experience, showcasing user interactions such as adding to cart and wish list, signing in or signing up, session persistence, seamless payment processes and more.",
    description2:
      "Constructed with a symphony of libraries and technologies such as Redux, Redux Toolkit, Redux Persist, Firebase, Stripe, Node.js and Express, this web application exemplifies my mastery in state management and integration of various technologies. The challenges were formidable, introducing me to the complexities of simultaneous library usage, but the outcome is a seamless user experience that speaks volumes.",
  },
];

const Projects = () => {
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
