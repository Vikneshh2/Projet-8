import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import "../styles/Contact.scss";

export const Contact = () => {
  const contactLinks = [
    {
      id: 1,
      label: "sadishviknesh@gmail.com",
      href: "mailto:examplemail@gmail.com",
      icon: <FaEnvelope className="contact__icon" />,
    },
    {
      id: 2,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/viknesh-sadish-8533831b4/",
      icon: <FaLinkedin className="contact__icon" />,
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact__header">
        <p className="contact__subtitle">Restons en contact</p>
        <h1 className="contact__title">Contactez-moi</h1>
      </div>

      {/* Conteneur principal qui englobe les deux liens */}
      <div className="contact__box">
        {contactLinks.map((item) => (
          <div key={item.id} className="contact__item">
            {item.icon}
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
