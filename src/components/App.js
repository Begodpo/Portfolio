// Fichero src/components/App.js

import { Link, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Nav from "./Nav";
import Presentation from "./Presentation";
import ProjectsList from "./ProjectsList";

const App = () => {
  return (
    <>
      <header>
        <Nav />
        <Presentation />
      </header>
      <main>
        <About />
        <ProjectsList />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
