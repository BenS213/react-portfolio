import "./App.css";
import bootstrap from 'bootstrap';
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Project";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Projects />
      <AboutMe />
      <ContactMe />
    </div>
  );
}

export default App;
