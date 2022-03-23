import anime from "../images/anime_series.png";
import anonymous from "../images/anonymous_proxy.png";
import awesome from "../images/awesome_profile_cards.png";
import harry from "../images/harry_potter.png";
import inheriteCode from "../images/inherit_code.png";
import adalabers from "../images/web_colaborativa_adalabers.png";
import gameJs from "../images/rock_paper_scissors.png";
import freelancer from "../images/web_freelancer.png";
import tshirtStore from "../images/tshirtstore1.png";

function Projects() {
  return (
    <section className="projects" id="projects-section">
      <h3 className="projects__title">proyectos</h3>
      <p className="projects__text">
        Estos son algunos de los proyectos que he realizado hasta ahora:
      </p>
      <div className="containerArticle">
        <article className="projects__article">
          <img
            className="projects__article--image"
            src={harry}
            alt="Imagen del proyecto Harry Potter"
          />
          <h4 className="projects__article--name">Harry Potter</h4>
          <p className="projects__article--description">
            Proyecto individual. Buscador de personajes, creado con React.
          </p>
          <a href="https://begodpo.github.io/harry-potter/#/">
            <button className="projects__article--button">Demo</button>
          </a>
          <a href="https://github.com/Begodpo/harry-potter">
            <button className="projects__article--button">Repo</button>
          </a>
        </article>
        <article className="projects__article">
          <img
            className="projects__article--image"
            src={inheriteCode}
            alt="Imagen del proyecto Inherite Code"
          />
          <h4 className="projects__article--name">Inherit Code</h4>
          <p className="projects__article--description">
            Proyecto en equipo. Código heredado y refactorizado. Proyecto
            completo con Node JS, Express JS y SQL.
          </p>
          <a href="https://awesome-cards-picateclas.herokuapp.com/#/">
            <button className="projects__article--button">Demo</button>
          </a>
          <a href="https://github.com/Begodpo/inherited-code-back-end">
            <button className="projects__article--button">Repo</button>
          </a>
        </article>
        <article className="projects__article">
          <img
            className="projects__article--image"
            src={anime}
            alt="Imagen del proyecto Anime Series"
          />
          <h4 className="projects__article--name">Anime Series</h4>
          <p className="projects__article--description">
            Poyecto individual. Buscador de series de Anime, creado con HTML,
            SASS y JavaScript
          </p>
          <a href="https://begodpo.github.io/anime-series/">
            <button className="projects__article--button">Demo</button>
          </a>
          <a href="https://github.com/Begodpo/anime-series">
            <button className="projects__article--button">Repo</button>
          </a>
        </article>
        <article className="projects__article">
          <img
            className="projects__article--image"
            src={awesome}
            alt="Imagen del proyecto Awesome Profile-Cards"
          />
          <h4 className="projects__article--name">Awesome Profile Cards</h4>
          <p className="projects__article--description">
            Proyecto en equipo. Web para crear tarjetas de visita
            personalizadas, con HTML, SASS y JavaScript.
          </p>
          <a href="http://beta.adalab.es/project-promo-o-module-2-team-5/">
            <button className="projects__article--button">Demo</button>
          </a>
          <a href="https://github.com/Begodpo/awesome-profile-cards">
            <button className="projects__article--button">Repo</button>
          </a>
        </article>
        <article className="projects__article">
          <img
            className="projects__article--image"
            src={gameJs}
            alt="Imagen del proyecto Rock, Paper & Scissors"
          />
          <h4 className="projects__article--name">Rock, Paper & Scissors</h4>
          <p className="projects__article--description">
            Proyecto individual. Juego de Piedra, Papel y Tijeras, creado con
            HTML, CSS y JavaScript.
          </p>
          <a href="https://begodpo.github.io/rock-paper-scissors/">
            <button className="projects__article--button">Demo</button>
          </a>
          <a href="https://github.com/Begodpo/rock-paper-scissors">
            <button className="projects__article--button">Repo</button>
          </a>
        </article>
        <article className="projects__article">
          <img
            className="projects__article--image"
            src={adalabers}
            alt="Imagen del proyecto Web Colaborativa"
          />
          <h4 className="projects__article--name">
            Web Colaborativa Adalabers
          </h4>
          <p className="projects__article--description">
            Proyecto en equipo. Web colaborativa creada con HTML, CSS y SASS.
            Responsive.
          </p>
          <a href="http://beta.adalab.es/project-promo-o-module-1-team-7/">
            <button className="projects__article--button">Demo</button>
          </a>
          <a href="https://github.com/Begodpo/web-colaborativa-adalabers">
            <button className="projects__article--button">Repo</button>
          </a>
        </article>
        <article className="projects__article">
          <img
            className="projects__article--image"
            src={anonymous}
            alt="Imagen del proyecto Anonymous Proxy"
          />
          <h4 className="projects__article--name">Anonymous Proxy</h4>
          <p className="projects__article--description">
            Proyecto individual. Web responsive, creada con HTML, CSS y SASS
          </p>
          <a href="https://begodpo.github.io/anonymous-proxy/">
            <button className="projects__article--button">Demo</button>
          </a>
          <a href="https://github.com/Begodpo/anonymous-proxy">
            <button className="projects__article--button">Repo</button>
          </a>
        </article>
        <article className="projects__article">
          <img
            className="projects__article--image"
            src={freelancer}
            alt="Imagen del proyecto Web Freelancer"
          />
          <h4 className="projects__article--name">Web Freelancer</h4>
          <p className="projects__article--description">
            Proyecto individual. Web responsive, creada con HTML y CSS
          </p>
          <a href="https://webfreelancerbego.netlify.app/">
            <button className="projects__article--button">Demo</button>
          </a>
          <a href="#">
            <button className="projects__article--button">Repo</button>
          </a>
        </article>
        <article className="projects__article">
          <img
            className="projects__article--image"
            src={tshirtStore}
            alt="Imagen del proyecto Front-End Store"
          />
          <h4 className="projects__article--name">Front-End Store</h4>
          <p className="projects__article--description">
            Proyecto individual. Web responsive, creada con HTML y CSS
          </p>
          <a href="https://tshirtstore1.netlify.app/">
            <button className="projects__article--button">Demo</button>
          </a>
          <a href="#">
            <button className="projects__article--button">Repo</button>
          </a>
        </article>
      </div>
    </section>
  );
}

export default Projects;
