import linkedIn from "../images/linkedIn_icon.jpg";
import gitHub from "../images/GitHub-Mark.png";
import email from "../images/email_icon.png";

function Contact() {
  return (
    <section className="contact">
      <h3 className="contact__title">Contacto</h3>

      <img className="contact__icon" src={email} alt="email icon" />
      <img className="contact__icon" src={linkedIn} alt="linkedIn icon" />
      <img className="contact__icon" src={gitHub} alt="gitHub icon" />
    </section>
  );
}

export default Contact;
