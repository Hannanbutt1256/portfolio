import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
    </>
  );
}

export default App;
