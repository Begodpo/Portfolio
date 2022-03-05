import bego from "../images/foto-bego.jpg";
function About() {
  return (
    <section className="aboutSection">
      <img className="aboutSection__image" src={bego} alt="Foto de Bego" />
      <article className="aboutSection__article">
        <h3 className="aboutSection__article--title">Sobre mi</h3>
        <p className="aboutSection__article--text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu
          nunc sed erat ornare accumsan. Quisque dapibus ex ex, condimentum
          imperdiet erat rhoncus sit amet. Vestibulum lobortis ex vitae auctor
          elementum. Duis sed hendrerit dolor. Cras rhoncus orci tortor, quis
          accumsan augue placerat vitae. Donec nec vehicula tellus. Vestibulum
          et orci nec dui tincidunt gravida. Maecenas mattis nulla at metus
          tempus, et mattis est accumsan.
        </p>
        <button className="aboutSection__article--button">Descargar CV</button>
      </article>
    </section>
  );
}

export default About;
