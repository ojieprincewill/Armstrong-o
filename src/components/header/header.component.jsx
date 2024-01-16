import React from "react";

import "./header.styles.scss";
import NavBar from "../navigation/navigation.component";
import Landing from "../landing/landing.component";

const Header = () => {
  return (
    <div className="header">
      <NavBar />
      <Landing />
    </div>
  );
};

export default Header;
