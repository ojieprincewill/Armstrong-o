import React from "react";

import "./mobile-navigation.styles.scss";

import { Link } from "react-scroll";

const MobileNav = () => {
  return (
    <div className="mobile-nav">
      <Link to="about" smooth={true} duration={500} className="mobile-navlink">
        About
      </Link>
      <Link to="skills" smooth={true} duration={500} className="mobile-navlink">
        Skills
      </Link>
      <Link
        to="projects"
        smooth={true}
        duration={500}
        className="mobile-navlink"
      >
        Projects
      </Link>
      <Link
        to="contacts"
        smooth={true}
        duration={500}
        className="mobile-navlink"
      >
        Contact
      </Link>
    </div>
  );
};

export default MobileNav;
