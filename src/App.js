import "./App.css";
import About from "./components/about/about.component";
import Contact from "./components/contact/contact.component";
import Header from "./components/header/header.component";
import Projects from "./components/projects/projects.component";
import Skills from "./components/skills/skills.component";

function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
