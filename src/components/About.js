import bego from "../images/foto-bego.jpg";
import cv from "../documents/begodpo_cv.pdf";

function About() {
  return (
    <section className="aboutSection" id="about-section">
      <img className="aboutSection__image" src={bego} alt="Foto de Bego" />
      <article className="aboutSection__article">
        <h3 className="aboutSection__article--title">Sobre mi</h3>
        <p className="aboutSection__article--text">
          A lo largo de 17 años me he especializado en la atención al cliente
          dentro del sector del transporte y la mensajería en diferentes
          empresas.
        </p>
        <p className="aboutSection__article--text">
          Decidí que quería cambiar de sector porque tenía inquietud por
          aprender y hacer cosas diferentes. Fue entonces cuando descubrí el
          mundo de la programación.
        </p>
        <p className="aboutSection__article--text">
          Además de las competencias técnicas aprendidas, a este sector creo que
          puedo aportar las habilidades adquiridas en mis anteriores
          experiencias, como pueden ser: el trabajo en equipo, la proactividad y
          la gestión del estrés, ya que siempre he trabajado en entornos con un
          ritmo muy alto de trabajo, pero sobre todo la ilusión por este cambio
          y las ganas de mostrar lo aprendido, de utilizarlo en proyectos y
          poder aportar a la empresa, que es mi objetivo. Además, me gusta
          aprender y soy una persona muy responsable.
        </p>
        <a href={cv} download="begodpo_cv.pdf">
          <button className="aboutSection__article--button">
            Descargar CV
          </button>
        </a>
      </article>
    </section>
  );
}

export default About;
