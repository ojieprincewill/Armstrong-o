import React from "react";

import "./projects.styles.scss";

const projectData = [
  {
    imageUrl:
      "https://github.com/ojieprincewill/website-photos/blob/master/revent%20snippet.png?raw=true",
    title: "revent",
    gitHub: "https://github.com/ojieprincewill/revent",
    liveDemo: "https://revent-pied.vercel.app/",
    description1:
      "Embarking on the journey of web development, I took on the challenge of recreating the Revent Digital website, an innovative software firm that resonated with my aspirations. This single-page website became a canvas for honing my skills in HTML, CSS, SASS, and delving into the dynamics of JavaScript.",
    description2:
      "JavaScript played a pivotal role in orchestrating the subtle animations that bring the site to life. The project not only allowed me to master fundamental web technologies but also introduced me to the art of crafting seamless user experiences through thoughtful design and functionality.",
  },
  {
    imageUrl:
      "https://github.com/ojieprincewill/website-photos/blob/master/bistro%20snippet.png?raw=true",
    title: "bistro",
    gitHub: "https://github.com/ojieprincewill/bistro",
    liveDemo: "https://bistro-eta.vercel.app/",
    description1:
      "Step into the digital ambiance of Bistro, a captivating restaurant website meticulously crafted to evoke the sophistication of fine dining. This expansive multi-page project seamlessly blends creativity with technical prowess, featuring an artfully designed user interface inspired by an online template.",
    description2:
      "As the creator of Bistro, I seamlessly incorporated animations, diverse page styles, and reusable components to elevate the user experience. This undertaking not only expanded my proficiency in HTML, CSS, and JavaScript but also delved into the realm of state management, enriching the project with dynamic functionalities.",
  },
  {
    imageUrl:
      "https://github.com/ojieprincewill/website-photos/blob/master/baroque%20snippet.png?raw=true",
    title: "baroque",
    gitHub: "https://github.com/ojieprincewill/Baroque-store",
    liveDemo: "https://baroque-store.vercel.app/",
    description1:
      "This is the big one. An expansive e-commerce web application that stands as a testament to my journey in web development. This ambitious project encapsulates the intricacies of a fully functional e-commerce experience, showcasing user interactions from adding to cart to seamless payment processes.",
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
        {projectData.map((project) => (
          <div className="project-grid">
            <div className="project-image-cont">
              <img
                src={project.imageUrl}
                alt={`rep of ${project.title}`}
                className="project-image"
              />
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
