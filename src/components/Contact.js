import linkedIn from "../images/linkedIn_icon.jpg";
import gitHub from "../images/GitHub-Mark.png";
import email from "../images/email_icon.png";

function Contact() {
  return (
    <section className="contact" id="contact-section">
      <h3 className="contact__title">Contacto</h3>

      <div className="links-container">
        <a href="mailto:begodpo@gmail.com">
          <img className="contact__icon" src={email} alt="email icon" />
        </a>
        <a href="https://www.linkedin.com/in/begoña-del-pozo-oltra/">
          <img className="contact__icon" src={linkedIn} alt="linkedIn icon" />
        </a>
        <a href="https://github.com/Begodpo">
          <img className="contact__icon" src={gitHub} alt="gitHub icon" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
