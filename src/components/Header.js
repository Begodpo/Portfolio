import linkedIn from "../images/linkedIn_icon.jpg";
import gitHub from "../images/GitHub-Mark.png";
function Header() {
  return (
    <>
      <section className="header">
        <h1 className="header__title">Begoña del Pozo</h1>
        <nav className="header__nav">
          <a className="header__nav--link" href="#hero-section">
            Inicio
          </a>
          <a className="header__nav--link" href="#about-section">
            Sobre mi
          </a>
          <a className="header__nav--link" href="#projects-section">
            Proyectos
          </a>
          <a className="header__nav--link" href="#contact-section">
            Contacto
          </a>
        </nav>
      </section>
      <section class="hero" id="hero-section">
        <p className="hero__parag">¡Hola!</p>
        <h2 className="hero__title">
          <span className="span">Soy</span> Begoña del Pozo
        </h2>
        <p className="hero__parag">Junior Front-End Developer</p>
        <div className="hero__icons">
          <a href="https://www.linkedin.com/in/begoña-del-pozo-oltra/">
            <img
              src={linkedIn}
              alt="LinkedIn Icon"
              className="hero__icons--link"
            />
          </a>
          <a href="https://github.com/Begodpo">
            <img src={gitHub} alt="GitHub Icon" className="hero__icons--git" />
          </a>
        </div>
      </section>
    </>
  );
}

export default Header;
