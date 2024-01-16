import React, { useState } from "react";

import "./navigation.styles.scss";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { HiOutlineXMark } from "react-icons/hi2";
import MobileNav from "./mobile-navigation.component";

import { Link } from "react-scroll";

const NavBar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const handleBurgerClick = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <>
      <div className="navigation">
        <div className="logo-container">
          <p className="logo">Armstrong O.</p>
        </div>
        <div className="nav-link-container">
          <Link to="about" smooth={true} duration={500} className="navlink">
            About
          </Link>
          <Link to="skills" smooth={true} duration={500} className="navlink">
            Skills
          </Link>
          <Link to="projects" smooth={true} duration={500} className="navlink">
            Projects
          </Link>
          <Link to="contact" smooth={true} duration={500} className="navlink">
            Contact
          </Link>
        </div>
        <div className="burger-icon-cont" onClick={handleBurgerClick}>
          {mobileNav ? (
            <HiOutlineXMark className="menu-icon" />
          ) : (
            <HiOutlineMenuAlt3 className="menu-icon" />
          )}
          {mobileNav && <MobileNav />}
        </div>
      </div>
    </>
  );
};

export default NavBar;
