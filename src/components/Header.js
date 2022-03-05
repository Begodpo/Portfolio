import linkedIn from "../images/linkedIn_icon.jpg";
import gitHub from "../images/GitHub-Mark.png";
function Header() {
  return (
    <>
      <section className="header">
        <h1 className="header__title">Begoña del Pozo</h1>
        <nav className="header__nav">
          <a className="header__nav--link" href="#">
            Inicio
          </a>
          <a className="header__nav--link" href="#">
            Sobre mi
          </a>
          <a className="header__nav--link" href="#">
            Proyectos
          </a>
          <a className="header__nav--link" href="#">
            Contacto
          </a>
        </nav>
      </section>
      <section class="hero">
        <p className="hero__parag">¡Hola!</p>
        <h2 className="hero__title">
          <span className="span">Soy</span> Begoña del Pozo
        </h2>
        <p className="hero__parag">Junior Front-End Developer</p>
        <div className="hero__icons">
          <img
            src={linkedIn}
            alt="LinkedIn Icon"
            className="hero__icons--link"
          />
          <img src={gitHub} alt="GitHub Icon" className="hero__icons--git" />
        </div>
      </section>
    </>
  );
}

export default Header;
