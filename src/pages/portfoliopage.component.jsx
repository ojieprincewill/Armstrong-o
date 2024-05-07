import React from "react";
import Header from "../components/header/header.component";
import About from "../components/about/about.component";
import Skills from "../components/skills/skills.component";
import Projects from "../components/projects/projects.component";
import Contact from "../components/contact/contact.component";
import ScrollToTop from "../components/scroll-to-top/scroll-to-top.component";

const PortfolioPage = () => {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTop />
    </>
  );
};

export default PortfolioPage;
