function Nav() {
  return (
    <>
      <section className="navBar">
        <h1 className="navBar__title">Begoña del Pozo</h1>
        <nav className="navBar__navCont">
          <a className="navBar__navCont--link" href="#">
            Inicio
          </a>
          <a className="navBar__navCont--link" href="#">
            Sobre mi
          </a>
          <a className="navBar__navCont--link" href="#">
            Proyectos
          </a>
          <a className="navBar__navCont--link" href="#">
            Contacto
          </a>
        </nav>
      </section>
    </>
  );
}

export default Nav;
