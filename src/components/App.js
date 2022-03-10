// Fichero src/components/App.js
import "../styles/App.scss";
import "../styles/components/Header.scss";
import "../styles/components/About.scss";
import "../styles/components/Projects.scss";
import "../styles/components/Contact.scss";
import "../styles/components/Footer.scss";

//import { Link, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";

const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
